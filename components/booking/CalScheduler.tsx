"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

const NAMESPACE = "booking";

const lightVars = {
  "cal-brand": "#8F00E1",
  "cal-brand-emphasis": "#7400b8",
  "cal-brand-text": "#ffffff",
  "cal-bg": "#ffffff",
  "cal-bg-muted": "#ffffff",
  "cal-bg-subtle": "#f6effc",
  "cal-bg-emphasis": "#efe3fa",
  "cal-border-booker": "#ece6f3",
  "cal-border-booker-width": "1px",
  "cal-border": "#ece6f3",
  "cal-border-subtle": "#f1ecf6",
};

export function CalScheduler({
  calLink,
  name,
  email,
  notes,
}: {
  calLink: string;
  name: string;
  email: string;
  notes: string;
}) {
  useEffect(() => {
    let cancelled = false;
    void getCalApi({ namespace: NAMESPACE }).then((cal) => {
      if (cancelled) return;
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: { light: lightVars, dark: lightVars },
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      className="book-cal-embed"
      config={{
        name,
        email,
        notes,
        theme: "light",
        layout: "month_view",
      }}
    />
  );
}
