/** Dropdown values shared by the forms (client) and the validator (server). */

// The 7 service categories (same names as data/categories.ts), plus "Other".
export const SERVICE_OPTIONS = [
  "Web Development",
  "Brand & Design",
  "Digital Content & Marketing",
  "Software Engineering",
  "Data & Analytics",
  "Cybersecurity & Compliance",
  "Executive & Virtual Assistance",
  "Other",
] as const;

// The starting-price packages (same names as data/packages.ts).
export const PACKAGE_OPTIONS = [
  "Landing page",
  "Social media content pack",
  "Logo and brand kit",
  "Short video (up to 60 seconds)",
  "Data report or dashboard",
  "Starter website (up to 3 pages)",
  "Business website (up to 5 pages)",
] as const;

// No amounts on purpose: set real budget bands here once prices are confirmed.
export const BUDGET_OPTIONS = [
  "Small project",
  "Medium project",
  "Large project",
  "Ongoing monthly work",
  "Not sure yet",
] as const;

export const EXPERIENCE_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–9 years",
  "10+ years",
] as const;

export const AVAILABILITY_OPTIONS = [
  "Available now",
  "Within 2 weeks",
  "Within a month",
  "Part-time only",
  "Not available right now",
] as const;

export const TRACK_OPTIONS = [
  "Web development",
  "Brand and design",
  "Content and video",
  "Data and reporting",
  "Cybersecurity",
  "Executive support",
] as const;

export const CONSENT_TEXT =
  "I agree to SkillLink Nexus Ltd processing my information to respond to this request, as described in the Privacy Policy.";

export const AGE_TEXT = "I am 18 or older, or my parent or guardian is applying with me";

export const PRIVACY_POLICY_URL = "/legal/privacy-policy.pdf";
