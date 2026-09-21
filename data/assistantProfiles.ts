export type AssistantProfile = {
  id: string;
  name: string;
  match: string;
  specialty: string;
  blurb: string;
  tags: string[];
  availability: string;
  categorySlug: string;
  illustrative: true;
};

/** Illustrative match examples — not real people. Replace with real profiles later. */
export const assistantProfiles: AssistantProfile[] = [
  {
    id: "a1",
    name: "Alex R.",
    match: "96% match",
    specialty: "Executive Assistant · Founder & CEO support",
    blurb:
      "Supports founders through fundraising cycles and board weeks. Keeps the inbox tight and the calendar ahead of the week.",
    tags: ["Calendar & travel", "Inbox triage", "Board prep"],
    availability: "Available this week",
    categorySlug: "calendar-scheduling",
    illustrative: true,
  },
  {
    id: "a2",
    name: "Jordan M.",
    match: "94% match",
    specialty: "Executive Assistant · Finance & operations",
    blurb:
      "Partners with finance and ops leaders on reporting, data rooms, and vendor follow-through.",
    tags: ["Reporting", "Data rooms", "Vendor mgmt"],
    availability: "Available this week",
    categorySlug: "business-operations",
    illustrative: true,
  },
  {
    id: "a3",
    name: "Sam K.",
    match: "93% match",
    specialty: "EA · Communications & stakeholder work",
    blurb:
      "Owns inbox triage, drafting in the executive’s voice, and keeping stakeholder threads moving.",
    tags: ["Inbox", "Drafting", "Follow-ups"],
    availability: "Available next week",
    categorySlug: "inbox-communications",
    illustrative: true,
  },
  {
    id: "a4",
    name: "Riley T.",
    match: "91% match",
    specialty: "EA · Travel, events & logistics",
    blurb:
      "Runs multi-leg travel, offsites, and expense cleanup so leaders land ready—not recovering.",
    tags: ["Travel", "Events", "Expenses"],
    availability: "Available this week",
    categorySlug: "travel-events",
    illustrative: true,
  },
  {
    id: "a5",
    name: "Casey L.",
    match: "90% match",
    specialty: "EA · Projects & team operations",
    blurb:
      "Coordinates cross-functional workstreams, SOPs, and deadline tracking for growing leadership teams.",
    tags: ["Projects", "SOPs", "Coordination"],
    availability: "Available this week",
    categorySlug: "projects-operations",
    illustrative: true,
  },
  {
    id: "a6",
    name: "Morgan P.",
    match: "89% match",
    specialty: "EA · Research & documentation",
    blurb:
      "Builds decision briefs, organizes source docs, and keeps knowledge systems searchable.",
    tags: ["Research", "Briefs", "Docs"],
    availability: "Available next week",
    categorySlug: "research-documents",
    illustrative: true,
  },
];

export function getAssistantsByCategory(slug: string): AssistantProfile[] {
  return assistantProfiles.filter((p) => p.categorySlug === slug);
}
