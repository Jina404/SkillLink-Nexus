"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { brand } from "@/data/navigation";
import { CalScheduler } from "@/components/booking/CalScheduler";

const companySizes = [
  "1–10",
  "11–50",
  "51–200",
  "201–1000",
  "1000+",
];

const timezones = [
  "Pacific (PT)",
  "Mountain (MT)",
  "Central (CT)",
  "Eastern (ET)",
  "London (GMT)",
  "Central Europe (CET)",
  "East Africa (EAT)",
  "India (IST)",
  "Singapore (SGT)",
];

const roles = [
  "Founder / CEO",
  "COO / Chief of Staff",
  "CFO / Finance leader",
  "CTO / Engineering leader",
  "VP / Director",
  "Investor / Partner",
  "Other executive",
];

const countryCodes = [
  { code: "+1", label: "+1" },
  { code: "+44", label: "+44" },
  { code: "+254", label: "+254" },
  { code: "+91", label: "+91" },
  { code: "+971", label: "+971" },
  { code: "+61", label: "+61" },
  { code: "+49", label: "+49" },
];

const schedulerUrl = (
  process.env.NEXT_PUBLIC_SCHEDULER_URL ||
  process.env.NEXT_PUBLIC_MS_BOOKINGS_URL ||
  brand.schedulerUrl
).trim();

type Lead = {
  firstName: string;
  fullName: string;
  email: string;
  notes: string;
  mailto: string;
};

function buildLead(data: FormData): Lead {
  const firstName = String(data.get("firstName") || "").trim();
  const lastName = String(data.get("lastName") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const details = [
    `Company: ${data.get("company")}`,
    `Company size: ${data.get("companySize")}`,
    `Timezone: ${data.get("timezone")}`,
    `Role: ${data.get("role")}`,
    `Phone: ${phone ? `${data.get("countryCode")} ${phone}` : "(not provided)"}`,
  ];
  const subject = encodeURIComponent("Book a call to hire an EA");
  const body = encodeURIComponent(
    [
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Work email: ${data.get("email")}`,
      ...details,
    ].join("\n"),
  );
  return {
    firstName,
    fullName: [firstName, lastName].filter(Boolean).join(" "),
    email: String(data.get("email") || "").trim(),
    notes: details.join("\n"),
    mailto: `mailto:${brand.email}?subject=${subject}&body=${body}`,
  };
}

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

  if (host === "cal.com" || host.endsWith(".cal.com")) {
    set("name", lead.fullName);
    set("email", lead.email);
    set("notes", lead.notes);
  } else if (host === "calendly.com" || host.endsWith(".calendly.com")) {
    set("name", lead.fullName);
    set("email", lead.email);
    set("a1", lead.notes);
    url.searchParams.set("embed_type", "Inline");
    url.searchParams.set("embed_domain", window.location.hostname);
    url.searchParams.set("hide_gdpr_banner", "1");
  }
  return url.toString();
}

export default function GetAnEAPage() {
  const [submitted, setSubmitted] = useState(false);
  const [lead, setLead] = useState<Lead | null>(null);
  const isScheduling = lead !== null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [isScheduling]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = buildLead(new FormData(e.currentTarget));
    if (schedulerUrl) {
      setLead(next);
      return;
    }
    window.location.href = next.mailto;
    setSubmitted(true);
  }

  if (lead) {
    return (
      <main className="page-shell book-page is-scheduling">
        <div className="book-card is-scheduling">
          <header className="book-header">
            <h1>Pick a time for your call{lead.firstName ? `, ${lead.firstName}` : ""}</h1>
            <p>
              Choose a slot that works for you. You’ll get a calendar invite with the meeting
              link{lead.email ? (
                <>
                  {" "}at <strong>{lead.email}</strong>
                </>
              ) : null}
              .
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

          <div className="book-scheduler-foot">
            <button type="button" className="btn btn-outline" onClick={() => setLead(null)}>
              ← Edit details
            </button>
            <a href={lead.mailto}>Prefer email? Send us your details</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell book-page">
      <div className="book-card">
        <header className="book-header">
          <h1>Book your call to hire an EA</h1>
          <p>
            One quick call and we match you with a dedicated EA. Takes under a minute, no
            commitment.
          </p>
        </header>

        {submitted ? (
          <div className="book-success">
            <h2>Thanks — your request is ready to send.</h2>
            <p>
              If your email client didn’t open, write us at{" "}
              <a href={`mailto:${brand.email}`}>{brand.email}</a>.
            </p>
            <Link href="/" className="btn btn-outline">
              Back to home
            </Link>
          </div>
        ) : (
          <form className="book-form" onSubmit={onSubmit}>
            <div className="book-grid">
              <div className="form-field">
                <label htmlFor="firstName">First name</label>
                <input id="firstName" name="firstName" required placeholder="First name" autoComplete="given-name" />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last name</label>
                <input id="lastName" name="lastName" required placeholder="Last name" autoComplete="family-name" />
              </div>

              <div className="form-field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">
                  Phone <span className="optional">(optional)</span>
                </label>
                <div className="phone-field">
                  <select id="countryCode" name="countryCode" defaultValue="+1" aria-label="Country code">
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="555 000 0000"
                    autoComplete="tel-national"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="company">Company name</label>
                <input id="company" name="company" required placeholder="Company name" autoComplete="organization" />
              </div>
              <div className="form-field">
                <label htmlFor="companySize">Company size</label>
                <select id="companySize" name="companySize" required defaultValue="">
                  <option value="" disabled>
                    Select size
                  </option>
                  {companySizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="timezone">Timezone you need</label>
                <select id="timezone" name="timezone" required defaultValue="">
                  <option value="" disabled>
                    Select a time zone
                  </option>
                  {timezones.map((tz) => (
                    <option key={tz} value={tz}>
                      {tz}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="role">Role you need</label>
                <select id="role" name="role" required defaultValue="">
                  <option value="" disabled>
                    Select a role
                  </option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block book-submit">
              Book my call →
            </button>
          </form>
        )}

        <p className="book-legal">
          By continuing you agree to our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
