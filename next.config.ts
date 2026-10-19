import type { NextConfig } from "next";
import { legacyCategorySlugs } from "./data/categories";

const isDev = process.env.NODE_ENV === "development";

const TURNSTILE = "https://challenges.cloudflare.com";
const CAL = "https://app.cal.com https://cal.com";

/** A custom scheduler (Calendly, Microsoft Bookings) must be allowed to load in a frame. */
function schedulerOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SCHEDULER_URL || process.env.NEXT_PUBLIC_MS_BOOKINGS_URL;
  if (!raw) return "";
  try {
    return new URL(raw).origin;
  } catch {
    return "";
  }
}

// No nonces: Next.js's own inline scripts need 'unsafe-inline'. 'unsafe-eval' is dev-only (React debugging).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} ${TURNSTILE} https://app.cal.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "media-src 'self'",
  `connect-src 'self' ${TURNSTILE} https://app.cal.com${isDev ? " ws: wss:" : ""}`,
  `frame-src ${TURNSTILE} ${CAL} ${schedulerOrigin()}`.trim(),
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  // Old service URLs (before the 7-category restructure) keep working.
  async redirects() {
    const oldServicePages = Object.entries(legacyCategorySlugs).map(([from, to]) => ({
      source: `/services/${from}`,
      destination: to ? `/services/${to}` : "/services",
      permanent: true,
    }));
    return [
      ...oldServicePages,
      { source: "/get-an-ea", destination: "/request-a-project", permanent: true },
      { source: "/resources", destination: "/stories", permanent: true },
      { source: "/resources/:slug", destination: "/stories", permanent: true },
      // The legal documents are the PDFs; these old web pages pointed to outdated text.
      { source: "/privacy", destination: "/legal/privacy-policy.pdf", permanent: false },
      { source: "/terms", destination: "/legal/terms-and-conditions.pdf", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
