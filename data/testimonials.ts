export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
  placeholder: true;
};

/**
 * Clearly marked placeholders — replace with real approved testimonials.
 * Do not present these as verified client quotes.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "I waited longer than I should have to get dedicated support. Once the partnership clicked, the calendar and inbox stopped owning my week.",
    name: "Placeholder Client A",
    title: "Founder",
    company: "Example Company",
    placeholder: true,
  },
  {
    quote:
      "The value showed up in follow-through—meetings prepared, actions tracked, and travel handled without me chasing details.",
    name: "Placeholder Client B",
    title: "VP of Operations",
    company: "Example Company",
    placeholder: true,
  },
  {
    quote:
      "Having a dedicated EA plus a success manager meant the support kept improving instead of plateauing after onboarding.",
    name: "Placeholder Client C",
    title: "Managing Partner",
    company: "Example Company",
    placeholder: true,
  },
];

export const securityClaims = [
  {
    title: "ISO 27001-aligned",
    text: "Audit-ready posture across access, monitoring, and offboarding. Supports SOC 2 environments.",
  },
  {
    title: "MFA + least privilege",
    text: "Mandatory multi-factor auth. Permissions granted, monitored, and revoked by policy.",
  },
  {
    title: "Binding NDA + ID verification",
    text: "Signed before any access is granted. No exceptions.",
  },
  {
    title: "No local storage",
    text: "All work products stay in your systems. Nothing sits on EA devices.",
  },
];
