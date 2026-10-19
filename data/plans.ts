export type Plan = {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  period: string;
  popular?: boolean;
  includesLabel: string;
  features: { label: string; detail: string }[];
  cta: string;
  ctaHref: string;
  ctaStyle: "solid" | "outline";
};

/** Starting prices only: every client gets a written quote for their exact scope before work begins. */
export const plans: Plan[] = [
  {
    id: "starter",
    name: "Packages",
    subtitle: "For common projects with a clear scope",
    description:
      "Ready-made scopes for websites, brand kits and content. Pick one and start.",
    price: "From $150",
    period: "Starting price, final quote based on scope",
    includesLabel: "Every package includes:",
    features: [
      { label: "Written quote before work starts", detail: "" },
      { label: "Managed by SkillLink Nexus", detail: "quality checked before delivery" },
      // CONFIRM: contractor levels (Rising, Pro, Expert).
      { label: "Choose your contractor level", detail: "Rising, Pro or Expert" },
      // CONFIRM: revisions-included terms.
      { label: "Revisions included", detail: "" },
    ],
    cta: "See packages",
    ctaHref: "/packages",
    ctaStyle: "solid",
  },
  {
    id: "enhanced",
    name: "Custom project",
    subtitle: "For work that needs its own scope",
    description:
      "Cybersecurity, data, video, apps and more. Tell us the goal and we send a written quote.",
    // CONFIRM: 48-hour quote promise.
    price: "Quote in 48 hours",
    period: "Priced to your scope",
    popular: true,
    includesLabel: "Every custom project includes:",
    features: [
      { label: "We do the scoping for you", detail: "" },
      { label: "Written quote before work starts", detail: "" },
      { label: "Vetted contractor", detail: "matched and managed by us" },
      // CONFIRM: signed scope and authorization before security tests.
      { label: "Security tests start with a signed scope and authorization", detail: "" },
    ],
    cta: "Submit a project",
    ctaHref: "/request-a-project",
    ctaStyle: "outline",
  },
  {
    id: "enterprise",
    name: "Monthly plan",
    subtitle: "For ongoing work, month after month",
    description:
      "Executive assistants, content, maintenance and reporting on a monthly plan.",
    price: "Custom monthly plan",
    period: "Priced to the support you need",
    includesLabel: "Every monthly plan includes:",
    features: [
      { label: "Dedicated, vetted contractor", detail: "" },
      { label: "Executive assistant plans", detail: "monthly, priced to your needs" },
      // CONFIRM: invoicing and procurement-ready paperwork.
      { label: "Invoicing and procurement-ready paperwork", detail: "" },
      // CONFIRM: optional impact report (no figures may be shown).
      {
        label: "Optional impact report",
        detail: "on the work delivered and the income created",
      },
    ],
    cta: "Talk to us",
    ctaHref: "/contact",
    ctaStyle: "outline",
  },
];

/** Not currently displayed. */
export const pricingInsights = {
  title: "Agency quality without the agency overhead. Without the marketplace risk.",
  // CONFIRM: delivery guarantee (revisions included, make it right).
  subtitle:
    "One contract, one invoice, one team accountable. Revisions are included, and if the result misses the brief, we make it right.",
  placeholder: "To start, describe what you need done.",
  affordable: "Packages",
  typical: "Custom",
  experts: "Monthly",
};
