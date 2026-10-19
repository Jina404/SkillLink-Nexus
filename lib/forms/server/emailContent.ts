/**
 * Builds the email subject and bodies. No imports, so it can be tested on its own.
 * Every user value is HTML-escaped; anything in a subject or header has line breaks removed.
 */

export type EmailRow = { label: string; value: string };

export type EmailContent = { subject: string; html: string; text: string };

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Removes line breaks and control characters so a value can't add email headers. */
export function headerSafe(value: string, max = 120): string {
  return value
    .replace(/[\r\n\t\u0000-\u001f\u007f\u2028\u2029]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, max);
}

const FONT = "font-family:Arial,Helvetica,sans-serif;color:#181818;";

export function buildInboxEmail(opts: {
  heading: string;
  subject: string;
  reference: string;
  rows: EmailRow[];
  consentText: string;
  receivedAt: Date;
}): EmailContent {
  const received = formatTime(opts.receivedAt);
  const meta: EmailRow[] = [
    { label: "Reference", value: opts.reference },
    { label: "Received", value: received },
    { label: "Consent", value: `Yes: "${opts.consentText}"` },
  ];
  const all = [...opts.rows, ...meta];

  const tableRows = all
    .map(
      (r) =>
        `<tr><th align="left" valign="top" style="${FONT}padding:8px 12px;border-bottom:1px solid #e8e4ef;background:#f7f2fc;font-size:13px;width:180px;">${escapeHtml(r.label)}</th>` +
        `<td valign="top" style="${FONT}padding:8px 12px;border-bottom:1px solid #e8e4ef;font-size:14px;white-space:pre-wrap;">${escapeHtml(r.value || "—")}</td></tr>`,
    )
    .join("");

  const html =
    `<!doctype html><html><body style="margin:0;padding:24px;background:#ffffff;">` +
    `<h1 style="${FONT}font-size:18px;margin:0 0 4px;">${escapeHtml(opts.heading)}</h1>` +
    `<p style="${FONT}font-size:13px;color:#5e5a6d;margin:0 0 16px;">${escapeHtml(opts.reference)} · ${escapeHtml(received)}</p>` +
    `<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:680px;border:1px solid #e8e4ef;">${tableRows}</table>` +
    `<p style="${FONT}font-size:12px;color:#5e5a6d;margin:16px 0 0;">Reply to this email to answer the sender directly.</p>` +
    `</body></html>`;

  const text =
    `${opts.heading}\n${opts.reference} · ${received}\n\n` +
    all.map((r) => `${r.label}: ${r.value || "—"}`).join("\n") +
    `\n\nReply to this email to answer the sender directly.\n`;

  return { subject: headerSafe(opts.subject, 200), html, text };
}

/** Short acknowledgement to the person who submitted. Never includes their message. */
export function buildConfirmationEmail(opts: { name: string; reference: string }): EmailContent {
  const first = headerSafe(opts.name, 60).split(" ")[0] || "there";
  // CONFIRM: 48-hour reply promise.
  const line = `Thank you, we have received your request (${opts.reference}). We will reply within 48 hours.`;
  const html =
    `<!doctype html><html><body style="margin:0;padding:24px;background:#ffffff;">` +
    `<p style="${FONT}font-size:15px;margin:0 0 12px;">Hi ${escapeHtml(first)},</p>` +
    `<p style="${FONT}font-size:15px;margin:0 0 12px;">${escapeHtml(line)}</p>` +
    `<p style="${FONT}font-size:15px;margin:0;">SkillLink Nexus Ltd</p>` +
    `</body></html>`;
  const text = `Hi ${first},\n\n${line}\n\nSkillLink Nexus Ltd\n`;
  return { subject: headerSafe(`We have received your request (${opts.reference})`, 200), html, text };
}

function formatTime(d: Date): string {
  const nairobi = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
  return `${nairobi} (Nairobi) · ${d.toISOString()}`;
}
