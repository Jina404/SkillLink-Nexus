import "server-only";

export const MAX_BODY_BYTES = 20 * 1024;

const PRODUCTION_HOSTS = ["skilllinknexus.com", "www.skilllinknexus.com"];

function allowedHosts(): string[] {
  // Extra hosts (for example a preview deployment), comma separated.
  const extra = (process.env.FORMS_ALLOWED_HOSTS ?? "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
  return [...PRODUCTION_HOSTS, ...extra];
}

function isAllowedHostname(hostname: string): boolean {
  const h = hostname.toLowerCase();
  if (process.env.NODE_ENV !== "production" && (h === "localhost" || h === "127.0.0.1")) {
    return true;
  }
  return allowedHosts().includes(h);
}

/** Blocks cross-site form posts (CSRF). Only our own site may submit. */
export function isSameSiteRequest(headers: Headers): boolean {
  if (headers.get("sec-fetch-site") === "cross-site") return false;

  const origin = headers.get("origin");
  if (origin) {
    try {
      return isAllowedHostname(new URL(origin).hostname);
    } catch {
      return false;
    }
  }

  const host = headers.get("host");
  if (!host) return false;
  return isAllowedHostname(host.split(":")[0]);
}

export function isJsonRequest(headers: Headers): boolean {
  const type = headers.get("content-type") ?? "";
  return type.toLowerCase().split(";")[0].trim() === "application/json";
}

/** Reads the body but stops as soon as it passes the size limit. */
export async function readLimitedBody(request: Request): Promise<string | null> {
  const declared = Number(request.headers.get("content-length") ?? "0");
  if (declared > MAX_BODY_BYTES) return null;
  if (!request.body) return "";

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BODY_BYTES) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return new TextDecoder().decode(Buffer.concat(chunks));
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
