import "server-only";
import { Resend } from "resend";
import { AGE_TEXT, CONSENT_TEXT } from "../options";
import type { ContactData, NetworkData, ProjectData, SkillsData, FormData_ } from "../schema";
import {
  buildConfirmationEmail,
  buildInboxEmail,
  headerSafe,
  type EmailRow,
} from "./emailContent";

type Built = { heading: string; subject: string; rows: EmailRow[] };

const yes = (v: boolean | undefined) => (v ? "Yes" : "No");

function describe(data: FormData_, reference: string): Built {
  const name = headerSafe(data.fullName, 80);
  switch (data.type) {
    case "project": {
      const d = data as ProjectData;
      return {
        heading: "New project request",
        subject: `[Project request] ${name} - ${d.service} (${reference})`,
        rows: [
          { label: "Full name", value: d.fullName },
          { label: "Organisation", value: d.organisation ?? "" },
          { label: "Email", value: d.email },
          { label: "Phone or WhatsApp", value: d.phone },
          { label: "Service", value: d.service },
          { label: "Package", value: d.package ?? "" },
          { label: "Project description", value: d.description },
          { label: "Budget range", value: d.budget ?? "" },
          { label: "Preferred deadline", value: d.deadline ?? "" },
          { label: "Files or brief", value: d.briefUrl ?? "" },
        ],
      };
    }
    case "network": {
      const d = data as NetworkData;
      return {
        heading: "New contractor application",
        subject: `[Contractor application] ${name} - ${d.skill} (${reference})`,
        rows: [
          { label: "Full name", value: d.fullName },
          { label: "Email", value: d.email },
          { label: "Phone or WhatsApp", value: d.phone },
          { label: "Skill area", value: d.skill },
          { label: "Years of experience", value: d.experience },
          { label: "Portfolio or profile", value: d.portfolioUrl },
          { label: "About them", value: d.note ?? "" },
          { label: "Availability", value: d.availability ?? "" },
        ],
      };
    }
    case "skills": {
      const d = data as SkillsData;
      return {
        heading: "New Skills Programme application",
        subject: `[Skills Programme] ${name} (${reference})`,
        rows: [
          { label: "Full name", value: d.fullName },
          { label: "Email", value: d.email },
          { label: "Phone or WhatsApp", value: d.phone },
          { label: "Area of interest", value: d.track },
          { label: "Note", value: d.note ?? "" },
          { label: "Age confirmation", value: `Yes: "${AGE_TEXT}"` },
          { label: "Under 18", value: yes(d.under18) },
          { label: "Parent or guardian", value: d.under18 ? (d.guardianName ?? "") : "" },
          { label: "Guardian phone or email", value: d.under18 ? (d.guardianContact ?? "") : "" },
        ],
      };
    }
    case "contact": {
      const d = data as ContactData;
      return {
        heading: "New contact message",
        subject: `[Contact] ${name} (${reference})`,
        rows: [
          { label: "Full name", value: d.fullName },
          { label: "Email", value: d.email },
          { label: "Message", value: d.message },
        ],
      };
    }
  }
}

export type SendResult = "sent" | "dev-skipped" | "not-configured" | "failed";

/**
 * Emails the submission to FORMS_INBOX, then sends the sender a short confirmation.
 * Only error types are logged, never personal data.
 */
export async function sendSubmission(data: FormData_, reference: string): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.FORMS_INBOX;
  const from = process.env.FORMS_FROM;

  if (!apiKey || !inbox || !from) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[forms] Email not sent: RESEND_API_KEY, FORMS_INBOX or FORMS_FROM is not set (development only).");
      return "dev-skipped";
    }
    console.error("[forms] Email is not configured.");
    return "not-configured";
  }

  const resend = new Resend(apiKey);
  const built = describe(data, reference);
  const inboxEmail = buildInboxEmail({
    ...built,
    reference,
    consentText: CONSENT_TEXT,
    receivedAt: new Date(),
  });
  const replyTo = headerSafe(data.email, 254);

  try {
    const { error } = await resend.emails.send({
      from: headerSafe(from, 200),
      to: inbox,
      replyTo,
      subject: inboxEmail.subject,
      html: inboxEmail.html,
      text: inboxEmail.text,
    });
    if (error) {
      console.error("[forms] Inbox email failed:", error.name);
      return "failed";
    }
  } catch (err) {
    console.error("[forms] Inbox email failed:", err instanceof Error ? err.name : "unknown");
    return "failed";
  }

  // The request is already safely in the inbox, so a failed confirmation doesn't fail the submission.
  const confirmation = buildConfirmationEmail({ name: data.fullName, reference });
  try {
    const { error } = await resend.emails.send({
      from: headerSafe(from, 200),
      to: replyTo,
      subject: confirmation.subject,
      html: confirmation.html,
      text: confirmation.text,
    });
    if (error) console.error("[forms] Confirmation email failed:", error.name);
  } catch (err) {
    console.error("[forms] Confirmation email failed:", err instanceof Error ? err.name : "unknown");
  }

  return "sent";
}
