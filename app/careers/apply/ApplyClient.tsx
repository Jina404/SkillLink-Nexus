"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { brand } from "@/data/navigation";
import { careersCountries, careersExperienceLevels } from "@/data/careers";

const INTERNSHIP_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSekfwTkXruBRgo9SjPUrcD2CmhHNJYoMlzAfe5e0GB4yfE4Xg/viewform";

export function ApplyClient() {
  const [submitted, setSubmitted] = useState(false);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const openedRef = useRef(false);
  const searchParams = useSearchParams();

  const role = searchParams.get("role") ?? "";
  const isInternship = role.toLowerCase() === "internship";

  const copy = useMemo(() => {
    if (isInternship) {
      return {
        title: "Apply for an internship at SkillLink Nexus",
        subtitle:
          "Tell us a bit about you. We’ll review your application and follow up with next steps.",
        subject: "Internship application",
        experienceLabel: "Experience",
        experiencePlaceholder: "Years of relevant experience",
      };
    }
    return {
      title: "Join SkillLink Nexus as an EA",
      subtitle: "Takes under a minute. We’ll review and follow up with next steps.",
      subject: "EA application",
      experienceLabel: "Experience",
      experiencePlaceholder: "Years as EA",
    };
  }, [isInternship]);

  useEffect(() => {
    if (!isInternship) return;
    if (openedRef.current) return;
    openedRef.current = true;

    const w = window.open(INTERNSHIP_FORM_URL, "_blank", "noopener,noreferrer");
    if (!w) {
      // Avoid synchronous setState inside effects (lint rule); schedule for next tick.
      setTimeout(() => setPopupBlocked(true), 0);
      return;
    }
  }, [isInternship]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(copy.subject);
    const body = encodeURIComponent(
      [
        `Role: ${isInternship ? "Internship" : "Executive Assistant"}`,
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

  if (isInternship) {
    return (
      <div className="book-card careers-apply-card careers-internship-apply-card">
        <header className="book-header">
          <h1>{copy.title}</h1>
          <p>{copy.subtitle}</p>
        </header>

        <div className="internship-redirect">
          <p className="internship-redirect-msg">
            You’ll be redirected to our Google Form in a new tab.
          </p>
          <p className="internship-redirect-sub">
            {popupBlocked
              ? "Your browser blocked the pop-up. Use the button below to open the form."
              : "If nothing happens, use the button below."}
          </p>
          <div className="internship-redirect-actions">
            <a
              href={INTERNSHIP_FORM_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Open internship application form
            </a>
            <Link href="/careers" className="btn btn-outline">
              Back to careers
            </Link>
          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="book-card careers-apply-card">
      <header className="book-header">
        <h1>{copy.title}</h1>
        <p>{copy.subtitle}</p>
      </header>

      {submitted ? (
        <div className="book-success">
          <h2>Thanks—you’re almost done</h2>
          <p>
            Confirm and send the email that opened so we receive your application. We’ll review and
            share next steps.
          </p>
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
              <label htmlFor="experience">{copy.experienceLabel}</label>
              <select id="experience" name="experience" required defaultValue="">
                <option value="" disabled>
                  {copy.experiencePlaceholder}
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
              <input id="linkedin" name="linkedin" type="url" placeholder="linkedin.com/in/…" />
            </div>
          </div>

          <button type="submit" className="btn btn-primary book-submit">
            Submit application →
          </button>
          <p className="book-legal">
            By continuing you agree to our <Link href="/privacy">Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}

