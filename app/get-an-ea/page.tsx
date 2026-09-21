"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { brand } from "@/data/navigation";

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

export default function GetAnEAPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("Book a call to hire an EA");
    const body = encodeURIComponent(
      [
        `First name: ${data.get("firstName")}`,
        `Last name: ${data.get("lastName")}`,
        `Work email: ${data.get("email")}`,
        `Phone: ${data.get("countryCode")} ${data.get("phone") || "(not provided)"}`,
        `Company: ${data.get("company")}`,
        `Company size: ${data.get("companySize")}`,
        `Timezone: ${data.get("timezone")}`,
        `Role: ${data.get("role")}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
          By continuing you agree to our <Link href="/security">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
