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

/** Public ExecViva-style plan structure and prices already used in this project. */
export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For one executive who needs dedicated support",
    description:
      "A full-time executive assistant matched to your working style—live in about 24 hours.",
    price: "$3,999",
    period: "/ month",
    includesLabel: "Starter includes:",
    features: [
      {
        label: "Dedicated EA",
        detail: "full-time support for 1 executive",
      },
      {
        label: "Client success manager",
        detail: "onboarding and ongoing fit",
      },
      {
        label: "Pre-trained talent",
        detail: "ready for calendar, inbox, travel, and ops",
      },
      {
        label: "Rematch guarantee",
        detail: "at no cost if the fit isn’t strong",
      },
      {
        label: "Fast onboarding",
        detail: "typically live within 24 hours",
      },
    ],
    cta: "Get started",
    ctaHref: "/get-an-ea",
    ctaStyle: "solid",
  },
  {
    id: "enhanced",
    name: "Enhanced",
    subtitle: "For leaders sharing support across a small team",
    description:
      "One dedicated EA supporting up to two executives, with the same managed service and rematch promise.",
    price: "$4,999",
    period: "/ month",
    popular: true,
    includesLabel: "Everything in Starter, plus:",
    features: [
      {
        label: "Up to 2 executives",
        detail: "shared capacity with clear priorities",
      },
      {
        label: "Cross-leader coordination",
        detail: "calendars and workflows aligned",
      },
      {
        label: "Dedicated CSM",
        detail: "check-ins that keep value compounding",
      },
      {
        label: "Rematch at no cost",
        detail: "if the partnership needs a reset",
      },
      {
        label: "Priority onboarding",
        detail: "faster path for growing teams",
      },
    ],
    cta: "Get started",
    ctaHref: "/get-an-ea",
    ctaStyle: "outline",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For teams that need coverage without gaps",
    description:
      "Support for up to three executives, with PTO and leave backfill included so work never stalls.",
    price: "$5,999",
    period: "/ month",
    includesLabel: "Everything in Enhanced, plus:",
    features: [
      {
        label: "Up to 3 executives",
        detail: "one EA covering a leadership cluster",
      },
      {
        label: "PTO & leave backfill",
        detail: "continuity when your EA is out",
      },
      {
        label: "Team-ready workflows",
        detail: "ops that scale across leaders",
      },
      {
        label: "Procurement support",
        detail: "security and onboarding for enterprise",
      },
      {
        label: "Dedicated rollout",
        detail: "CSM-led expansion as you grow",
      },
    ],
    cta: "Talk to us",
    ctaHref: "/get-an-ea",
    ctaStyle: "outline",
  },
];

export const pricingInsights = {
  title: "Get insights into executive assistant pricing.",
  subtitle:
    "We’ll show the typical monthly range for dedicated support matched to the work you need.",
  placeholder: "To start, describe what you need done.",
  affordable: "$3,999/mo",
  typical: "$4,999/mo",
  experts: "$5,999/mo",
};
