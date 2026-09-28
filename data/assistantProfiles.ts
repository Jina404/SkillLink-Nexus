export type AssistantProfile = {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  blurb: string;
  tags: string[];
  categorySlug: string;
};

/** Featured EA profiles shown on the home and service pages. */
export const assistantProfiles: AssistantProfile[] = [
  {
    id: "a1",
    name: "Alex R.",
    photo: "/photo.jpg",
    specialty: "Executive Assistant · Founder & CEO support",
    blurb:
      "Supports founders through fundraising cycles and board weeks. Keeps the inbox tight and the calendar ahead of the week.",
    tags: ["Calendar & travel", "Inbox triage", "Board prep"],
    categorySlug: "calendar-scheduling",
  },
  {
    id: "a2",
    name: "Jordan M.",
    photo: "/photo2.jpg",
    specialty: "Executive Assistant · Finance & operations",
    blurb:
      "Partners with finance and ops leaders on reporting, data rooms, and vendor follow-through.",
    tags: ["Reporting", "Data rooms", "Vendor mgmt"],
    categorySlug: "business-operations",
  },
  {
    id: "a3",
    name: "Sam K.",
    photo: "/photo3.jpg",
    specialty: "EA · Communications & stakeholder work",
    blurb:
      "Owns inbox triage, drafting in the executive’s voice, and keeping stakeholder threads moving.",
    tags: ["Inbox", "Drafting", "Follow-ups"],
    categorySlug: "inbox-communications",
  },
];

export function getAssistantsByCategory(slug: string): AssistantProfile[] {
  return assistantProfiles.filter((p) => p.categorySlug === slug);
}
