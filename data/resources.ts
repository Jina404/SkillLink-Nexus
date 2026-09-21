export type Resource = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  type: "Guide" | "Article" | "Case study" | "Insight";
  readTime: string;
  body: string[];
};

export const resourceTopics = [
  "Executive Productivity",
  "Delegation",
  "Leadership",
  "Operations",
  "Time Management",
  "Executive Assistance",
  "Business Travel",
  "Communication",
];

export const resources: Resource[] = [
  {
    slug: "delegation-starter-map",
    title: "A practical map for what to delegate first",
    excerpt:
      "How leaders decide what leaves their plate—and what stays—without losing quality or control.",
    category: "Delegation",
    type: "Guide",
    readTime: "8 min",
    body: [
      "Most executives wait too long to delegate because the work feels too nuanced to hand off. The fix is not dumping tasks—it is sequencing trust.",
      "Start with recurring work that has clear inputs and outputs: calendar conflicts, inbox triage rules, travel preferences, and meeting follow-ups.",
      "Once those rhythms are stable, expand into judgment work: stakeholder coordination, board prep, and project tracking.",
      "This guide is placeholder content for the platform resources section and can be replaced by CMS-driven articles later.",
    ],
  },
  {
    slug: "protecting-focus-time",
    title: "How executive calendars create focus time that sticks",
    excerpt:
      "Guardrails for deep work, meeting load, and the weekly rhythms high performers actually keep.",
    category: "Time Management",
    type: "Article",
    readTime: "6 min",
    body: [
      "Focus time fails when it is aspirational instead of operational. An assistant who owns the calendar can enforce the rules you set once.",
      "Define hard blocks, soft blocks, and the people who can break them. Then review the week before it starts—not after it collapses.",
      "Placeholder article body for architecture; replace with real editorial content when ready.",
    ],
  },
  {
    slug: "ai-and-judgment",
    title: "Where AI helps—and where your EA still decides",
    excerpt:
      "Drafts, triage, and summaries scale with AI. Tone, risk, and relationships still need a human partner.",
    category: "Executive Assistance",
    type: "Insight",
    readTime: "5 min",
    body: [
      "AI accelerates the repeatable layer: drafts, conflict flags, and research pulls. An executive assistant applies context, prioritization, and judgment.",
      "The partnership works when tools and people are designed as one system—not two competing workflows.",
      "Placeholder insight content for the resources grid.",
    ],
  },
  {
    slug: "travel-without-recovery-days",
    title: "Business travel that does not cost a recovery day",
    excerpt:
      "Itinerary patterns that keep executives sharp on the road—and expenses closed when they land.",
    category: "Business Travel",
    type: "Guide",
    readTime: "7 min",
    body: [
      "Great travel support is preference memory plus contingency planning. Flights, hotels, ground, buffers, and expense hygiene belong in one playbook.",
      "Placeholder guide body for future CMS migration.",
    ],
  },
  {
    slug: "leadership-team-support",
    title: "When one EA supports more than one leader",
    excerpt:
      "Patterns for shared capacity, priority rules, and continuity across a small executive team.",
    category: "Leadership",
    type: "Case study",
    readTime: "9 min",
    body: [
      "Shared EA capacity works when priorities are explicit and the success manager keeps the system honest.",
      "This is a placeholder case-study frame—replace with anonymized or approved client stories later.",
    ],
  },
  {
    slug: "inbox-as-an-operating-system",
    title: "Treat the inbox like an operating system",
    excerpt:
      "Triage rules, drafting voice, and follow-up loops that turn email from a sink into a system.",
    category: "Communication",
    type: "Article",
    readTime: "6 min",
    body: [
      "Inbox ownership is not reading every message—it is routing, drafting, and escalating with clear rules.",
      "Placeholder article for the platform resources architecture.",
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
