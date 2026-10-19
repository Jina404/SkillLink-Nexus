"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NetworkForm } from "@/components/forms/NetworkForm";

const INTERNSHIP_FORM_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSekfwTkXruBRgo9SjPUrcD2CmhHNJYoMlzAfe5e0GB4yfE4Xg/viewform";

export function ApplyClient() {
  const [popupBlocked, setPopupBlocked] = useState(false);
  const openedRef = useRef(false);
  const searchParams = useSearchParams();

  const role = searchParams.get("role") ?? "";
  const isInternship = role.toLowerCase() === "internship";

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

  if (isInternship) {
    return (
      <div className="book-card careers-apply-card careers-internship-apply-card">
        <header className="book-header">
          <h1>Apply for an internship at SkillLink Nexus</h1>
          <p>Tell us a bit about you. We’ll review your application and follow up with next steps.</p>
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
        <h1>Join SkillLink Nexus as a contractor</h1>
        <p>Takes under a minute. We’ll review and follow up with next steps.</p>
      </header>

      <NetworkForm />
    </div>
  );
}
