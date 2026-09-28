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
      "Start with recurring work that has clear inputs and outputs: calendar conflicts, inbox triage rules, travel preferences, and meeting follow-ups. These create immediate leverage and give your assistant a clean feedback loop.",
      "Write the decision rules once. What can be booked without asking? What always needs a yes from you? What gets drafted for your review? Clarity here is what turns support into speed.",
      "Once those rhythms are stable, expand into judgment work: stakeholder coordination, board prep, and project tracking. Quality rises when the assistant already knows how you think.",
      "Review weekly for the first month. Adjust the map together. The goal is not perfection on day one—it is compounding confidence every week after.",
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
      "Focus time fails when it is aspirational instead of operational. An assistant who owns the calendar can enforce the rules you set once—and defend them when the week tries to rewrite itself.",
      "Define three layers: hard blocks that almost never move, soft blocks that can shift for true priorities, and the short list of people who can break either. Without those definitions, every request feels urgent.",
      "Review the week before it starts. Tuesday’s deep work is easier to protect on Friday afternoon than on Monday morning. Your EA should surface conflicts early and propose trade-offs, not just accept them.",
      "Protect recovery after travel and board weeks the same way you protect strategy time. A calendar that only guards “important” work still burns out the person doing it.",
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
      "AI accelerates the repeatable layer: drafts, conflict flags, research pulls, and first-pass summaries. Used well, it buys hours back every week.",
      "An executive assistant applies context, prioritization, and judgment. Tone with a key investor, risk in a sensitive thread, and the political map of your team still need a human partner who knows you.",
      "The partnership works when tools and people are designed as one system—not two competing workflows. Your EA should own the prompts, the quality bar, and the exceptions that never go to a model.",
      "Start with low-risk automation: meeting notes, travel options, expense categorization. Raise the ceiling only after the quality standard is clear and trusted.",
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
      "Great travel support is preference memory plus contingency planning. Flights, hotels, ground, buffers, and expense hygiene belong in one playbook—not a scramble before every trip.",
      "Build in arrival buffers before high-stakes meetings, and protect sleep the night before. The cheapest itinerary is rarely the one that keeps you sharp.",
      "Capture preferences once: seat, airline loyalty, hotel standards, dietary needs, and who gets your location updates. Your EA should reuse that profile every time.",
      "Close the loop on expenses before you land—or within 24 hours. Travel that ends cleanly is travel you can take again without dread.",
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
      "Shared EA capacity works when priorities are explicit and a success manager keeps the system honest. Without rules, the loudest leader wins—and everyone loses leverage.",
      "A growing product company paired one senior EA with a CEO and COO. The unlock was a weekly priority stack: revenue-critical work first, then time-sensitive external commitments, then internal ops.",
      "Each leader kept a short “always escalate” list and a longer “draft for me” list. Meeting load dropped because the EA could decline or reschedule with authority.",
      "Continuity came from shared docs—not shared chaos. Preferences, recurring workflows, and open loops lived in one place so coverage never depended on memory alone.",
      "If you are considering a shared seat, start with clear ownership of the calendar and inbox for each leader, then expand scope only after the weekly rhythm is stable.",
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
      "Inbox ownership is not reading every message—it is routing, drafting, and escalating with clear rules. The goal is that only decisions and relationships that need you reach you.",
      "Define labels or folders for action, waiting, FYI, and archive—and decide who moves what. Your EA should know the difference between a thread you must see and one they can close.",
      "Capture your voice in a short style guide: greeting, sign-off, how firm to be on scheduling, and when to loop in others. Drafts get faster every week after that.",
      "Close the loop on follow-ups. A weekly sweep of open asks prevents the silent failures that make leaders feel they have to stay in every thread.",
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
