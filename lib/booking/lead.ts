/**
 * Hands the project request's name, email and service to the thank-you page's call booker.
 * Stored in this browser tab only (sessionStorage), never in the URL.
 */
export type Lead = {
  firstName: string;
  fullName: string;
  email: string;
  notes: string;
  reference: string;
};

const KEY = "sln-booking-lead";

export function saveLead(lead: Lead) {
  try {
    sessionStorage.setItem(KEY, JSON.stringify(lead));
  } catch {
    // Storage blocked: the thank-you page still works, just without the call booker pre-filled.
  }
}

/** The saved value as a plain string (stable between reads, as React requires). */
export function readLeadRaw(): string | null {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
}

export function parseLead(raw: string | null, reference: string): Lead | null {
  if (!raw) return null;
  try {
    const lead = JSON.parse(raw) as Lead;
    return lead.reference === reference ? lead : null;
  } catch {
    return null;
  }
}
