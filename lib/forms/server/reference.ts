import "server-only";
import { randomInt } from "node:crypto";

// No 0/O or 1/I, so references are easy to read out.
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

/** SLN-REQ-YYMMDD-XXXX, dated in Nairobi time. */
export function makeReference(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "00";
  let code = "";
  for (let i = 0; i < 4; i++) code += ALPHABET[randomInt(ALPHABET.length)];
  return `SLN-REQ-${get("year")}${get("month")}${get("day")}-${code}`;
}
