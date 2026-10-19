/** Starting-price packages. Final quotes depend on scope, contractor level and timeline. */
export type Package = {
  slug: string;
  name: string;
  description: string;
  startingFrom: string;
  /** Category pre-selected in the project form (must match a SERVICE_OPTIONS name). */
  service: string;
};

// Names must match PACKAGE_OPTIONS in lib/forms/options.ts.
export const packages: Package[] = [
  {
    slug: "landing-page",
    name: "Landing page",
    description: "One focused page, built to turn visitors into leads.",
    startingFrom: "$150",
    service: "Web Development",
  },
  {
    slug: "social-media-content-pack",
    name: "Social media content pack",
    description: "Social posts written and designed for your channels.",
    startingFrom: "$150",
    service: "Digital Content & Marketing",
  },
  {
    slug: "logo-and-brand-kit",
    name: "Logo and brand kit",
    description: "A logo, colors and fonts that keep your brand consistent.",
    startingFrom: "$200",
    service: "Brand & Design",
  },
  {
    slug: "short-video",
    name: "Short video (up to 60 seconds)",
    description: "A promo or explainer, edited and ready to share.",
    startingFrom: "$200",
    service: "Digital Content & Marketing",
  },
  {
    slug: "data-report-or-dashboard",
    name: "Data report or dashboard",
    description: "Your key numbers in one clear, repeatable view.",
    startingFrom: "$250",
    service: "Data & Analytics",
  },
  {
    slug: "starter-website",
    name: "Starter website (up to 3 pages)",
    description: "A clear, fast site that explains what you do.",
    startingFrom: "$400",
    service: "Web Development",
  },
  {
    slug: "business-website",
    name: "Business website (up to 5 pages)",
    description: "A website that builds trust, explains your services and helps people find you.",
    startingFrom: "$900",
    service: "Web Development",
  },
];

export const packageIncludes = ["Revisions included", "Managed by SkillLink Nexus"];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

export function packageQuoteHref(slug: string): string {
  return `/request-a-project?package=${encodeURIComponent(slug)}`;
}
