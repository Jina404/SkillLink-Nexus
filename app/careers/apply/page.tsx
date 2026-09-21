"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { brand } from "@/data/navigation";
import { careersCountries, careersExperienceLevels } from "@/data/careers";

export default function CareersApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("EA application");
    const body = encodeURIComponent(
      [
        `First name: ${data.get("firstName")}`,
        `Last name: ${data.get("lastName")}`,
        `Email: ${data.get("email")}`,
        `Country: ${data.get("country")}`,
        `Experience: ${data.get("experience")}`,
        `English: ${data.get("english")}`,
        `LinkedIn: ${data.get("linkedin") || "(not provided)"}`,
      ].join("\n"),
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main className="page-shell book-page careers-apply-page">
      <div className="book-card careers-apply-card">
        <header className="book-header">
          <h1>Join SkillLink Nexus as an EA</h1>
          <p>Takes under a minute. We’ll review and follow up with next steps.</p>
        </header>

        {submitted ? (
          <div className="book-success">
            <h2>Application started</h2>
            <p>Send the email draft to finish—we’ll review and share next steps.</p>
            <Link href="/careers">Back to careers</Link>
          </div>
        ) : (
          <form className="book-form careers-apply-form" onSubmit={onSubmit}>
            <div className="book-grid">
              <div className="form-field">
                <label htmlFor="firstName">First name</label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="First name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last name</label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Last name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                />
              </div>
              <div className="form-field">
                <label htmlFor="country">Country</label>
                <select id="country" name="country" required defaultValue="">
                  <option value="" disabled>
                    Select country
                  </option>
                  {careersCountries.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="experience">Experience</label>
                <select id="experience" name="experience" required defaultValue="">
                  <option value="" disabled>
                    Years as EA
                  </option>
                  {careersExperienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="english">English</label>
                <select id="english" name="english" required defaultValue="">
                  <option value="" disabled>
                    Fluency level
                  </option>
                  <option value="Native / bilingual">Native / bilingual</option>
                  <option value="Fluent professional">Fluent professional</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="linkedin">
                  LinkedIn <span className="optional">(optional)</span>
                </label>
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  placeholder="linkedin.com/in/…"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary book-submit">
              Submit application →
            </button>
            <p className="book-legal">
              By continuing you agree to our <Link href="/security">Privacy Policy</Link>.
            </p>
          </form>
        )}
      </div>
    </main>
  );
}
