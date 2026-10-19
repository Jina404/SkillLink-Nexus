import { NextResponse } from "next/server";
import { fieldErrorsFrom, formSchemas, isFormType } from "@/lib/forms/schema";
import { makeReference } from "@/lib/forms/server/reference";
import { allowRequest } from "@/lib/forms/server/rateLimit";
import {
  clientIp,
  isJsonRequest,
  isSameSiteRequest,
  readLimitedBody,
} from "@/lib/forms/server/security";
import { sendSubmission } from "@/lib/forms/server/send";
import { turnstileEnabled, verifyTurnstile } from "@/lib/forms/server/turnstile";

// One endpoint for every form. Nothing is stored: the email is the only record.

const MIN_FILL_MS = 3000;
const GENERIC = "Something went wrong. Please try again or email hello@skilllinknexus.com";

function fail(status: number, error: string, fieldErrors?: Record<string, string>) {
  return NextResponse.json(fieldErrors ? { ok: false, error, fieldErrors } : { ok: false, error }, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function ok(reference: string) {
  return NextResponse.json({ ok: true, reference }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!isJsonRequest(request.headers)) return fail(415, GENERIC);
  if (!isSameSiteRequest(request.headers)) return fail(403, GENERIC);

  const ip = clientIp(request.headers);
  if (!(await allowRequest(ip))) {
    return fail(429, "Too many requests. Please wait a few minutes and try again.");
  }

  const raw = await readLimitedBody(request);
  if (raw === null) return fail(413, GENERIC);

  let body: Record<string, unknown>;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return fail(400, GENERIC);
    body = parsed as Record<string, unknown>;
  } catch {
    return fail(400, GENERIC);
  }

  const { website, startedAt, turnstileToken, ...fields } = body;

  // Honeypot: real people never see this field. Pretend it worked and send nothing.
  if (typeof website === "string" && website.trim() !== "") {
    return ok(makeReference());
  }

  if (typeof startedAt !== "number" || Date.now() - startedAt < MIN_FILL_MS) {
    return fail(400, "Please take a moment to check your details, then submit again.");
  }

  if (turnstileEnabled() && !(await verifyTurnstile(turnstileToken, ip))) {
    return fail(400, "We could not verify your request. Please try again.");
  }

  if (!isFormType(fields.type)) return fail(400, GENERIC);
  const result = formSchemas[fields.type].safeParse(fields);
  if (!result.success) {
    return fail(400, "Please check the highlighted fields.", fieldErrorsFrom(result.error));
  }

  const reference = makeReference();
  const sent = await sendSubmission(result.data, reference);
  if (sent === "failed" || sent === "not-configured") return fail(502, GENERIC);

  return ok(reference);
}
