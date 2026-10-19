"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import { CalScheduler } from "@/components/booking/CalScheduler";
import { brand } from "@/data/navigation";
import { parseLead, readLeadRaw, type Lead } from "@/lib/booking/lead";

const REF_RE = /^SLN-REQ-\d{6}-[A-Z0-9]{4}$/;

const noSubscribe = () => () => {};

const schedulerUrl = (
  process.env.NEXT_PUBLIC_SCHEDULER_URL ||
  process.env.NEXT_PUBLIC_MS_BOOKINGS_URL ||
  brand.schedulerUrl
).trim();

function parseCalLink(base: string): { calLink: string } | null {
  try {
    const url = new URL(base);
    const isCal = url.hostname === "cal.com" || url.hostname.endsWith(".cal.com");
    const calLink = url.pathname.replace(/^\/+|\/+$/g, "");
    return isCal && calLink ? { calLink } : null;
  } catch {
    return null;
  }
}

const calTarget = parseCalLink(schedulerUrl);

function buildSchedulerSrc(base: string, lead: Lead): string {
  let url: URL;
  try {
    url = new URL(base);
  } catch {
    return base;
  }
  const host = url.hostname;
  const set = (key: string, value: string) => {
    if (value) url.searchParams.set(key, value);
  };
  if (host === "calendly.com" || host.endsWith(".calendly.com")) {
    set("name", lead.fullName);
    set("email", lead.email);
    set("a1", lead.notes);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", window.location.hostname);
    url.searchParams.set("hide_gdpr_banner", "1");
  }
  return url.toString();
}

export function ThankYou() {
  const params = useSearchParams();
  const rawRef = params.get("ref") ?? "";
  // Only show references in our own format, so the page can't be made to display other text.
  const reference = REF_RE.test(rawRef) ? rawRef : "";
  const isProject = params.get("type") === "project";
  const headingRef = useRef<HTMLHeadingElement>(null);
  // Browser-only data: null on the server, the saved booking details in the browser.
  const raw = useSyncExternalStore(
    noSubscribe,
    () => (isProject && reference ? readLeadRaw() : null),
    () => null,
  );
  const lead = useMemo(() => parseLead(raw, reference), [raw, reference]);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  const showScheduler = isProject && lead !== null && Boolean(schedulerUrl);

  return (
    <main className={`page-shell book-page${showScheduler ? " is-scheduling" : ""}`}>
      <div className={`book-card${showScheduler ? " is-scheduling" : ""}`}>
        <header className="book-header">
          <h1 ref={headingRef} tabIndex={-1}>
            Thank you, we have received your request.
          </h1>
          {/* CONFIRM: 48-hour reply promise. */}
          <p role="status">
            {reference ? (
              <>
                Your reference is <strong>{reference}</strong>.{" "}
              </>
            ) : null}
            We will reply within 48 hours.
          </p>
        </header>

        {showScheduler && lead ? (
          <>
            <header className="book-header" style={{ marginTop: 24 }}>
              <h2>Pick a time for your call{lead.firstName ? `, ${lead.firstName}` : ""}</h2>
              <p>
                Choose a slot that works for you. You’ll get a calendar invite with the meeting link
                at <strong>{lead.email}</strong>.
              </p>
            </header>
            {calTarget ? (
              <div className="book-scheduler is-cal">
                <CalScheduler
                  calLink={calTarget.calLink}
                  name={lead.fullName}
                  email={lead.email}
                  notes={lead.notes}
                />
              </div>
            ) : (
              <div className="book-scheduler">
                <iframe
                  src={buildSchedulerSrc(schedulerUrl, lead)}
                  title="Schedule a call with SkillLink Nexus"
                  loading="lazy"
                  allow="fullscreen"
                />
              </div>
            )}
          </>
        ) : null}

        <div className="book-success">
          <Link href="/">Back to home</Link>
          <a href={`mailto:${brand.email}`}>Questions? Email {brand.email}</a>
        </div>
      </div>
    </main>
  );
}
