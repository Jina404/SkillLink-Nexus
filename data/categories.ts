export type ServiceItem = {
  title: string;
  description: string;
  href?: string;
};

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
  services: ServiceItem[];
  offerings: string[];
};

export const categories: Category[] = [
  {
    slug: "calendar-scheduling",
    name: "Calendar & Scheduling",
    shortName: "Calendar",
    description:
      "Protect focus time, clear conflicts, and keep every leader’s week aligned across time zones.",
    icon: "calendar",
    services: [
      { title: "Calendar management", description: "Own the week end to end" },
      { title: "Meeting scheduling", description: "Book the right people, fast" },
      { title: "Conflict resolution", description: "Negotiate double-bookings" },
      { title: "Time-zone coordination", description: "Global teams, one calendar" },
      { title: "Focus-time protection", description: "Guard deep-work blocks" },
      { title: "Recurring meetings", description: "Keep rhythms without clutter" },
    ],
    offerings: [
      "Executive Calendar Managers",
      "Scheduling Specialists",
      "Meeting Coordinators",
      "Executive Support Specialists",
    ],
  },
  {
    slug: "inbox-communications",
    name: "Inbox & Communications",
    shortName: "Inbox",
    description:
      "Triage what matters, draft in your voice, and keep stakeholder follow-ups moving.",
    icon: "inbox",
    services: [
      { title: "Email management", description: "Inbox ownership, daily" },
      { title: "Inbox triage", description: "Surface only what needs you" },
      { title: "Drafting", description: "Replies that sound like you" },
      { title: "Follow-ups", description: "Nothing falls through" },
      { title: "Communication coordination", description: "Align the right threads" },
      { title: "Stakeholder management", description: "Keep relationships warm" },
    ],
    offerings: [
      "Inbox Managers",
      "Communications Specialists",
      "Executive Correspondence Leads",
      "Stakeholder Coordinators",
    ],
  },
  {
    slug: "travel-events",
    name: "Travel & Events",
    shortName: "Travel",
    description:
      "Flights, hotels, itineraries, and offsites handled end to end—with expenses filed.",
    icon: "travel",
    services: [
      { title: "Flight research", description: "Options that fit your preferences" },
      { title: "Hotel booking", description: "Rooms that match your standards" },
      { title: "Itinerary planning", description: "Day-by-day, friction-free" },
      { title: "Business travel", description: "Multi-leg trips without chaos" },
      { title: "Event coordination", description: "Offsites and conferences" },
      { title: "Expense organization", description: "Receipts filed, claims ready" },
    ],
    offerings: [
      "Travel Coordinators",
      "Event Planners",
      "Itinerary Specialists",
      "Executive Travel Managers",
    ],
  },
  {
    slug: "meetings-reporting",
    name: "Meetings & Reporting",
    shortName: "Meetings",
    description:
      "Agendas, decks, notes, and action tracking so meetings create progress—not more work.",
    icon: "meetings",
    services: [
      { title: "Agenda preparation", description: "Walk in ready" },
      { title: "Meeting notes", description: "Clear recaps, every time" },
      { title: "Action tracking", description: "Owners and deadlines" },
      { title: "Deck support", description: "Board and team materials" },
      { title: "Status reporting", description: "Updates without the scramble" },
      { title: "Follow-through", description: "Close the loop after the call" },
    ],
    offerings: [
      "Meeting Coordinators",
      "Reporting Specialists",
      "Board Prep Assistants",
      "Executive Ops Partners",
    ],
  },
  {
    slug: "projects-operations",
    name: "Projects & Operations",
    shortName: "Operations",
    description:
      "Coordinate teams, vendors, and recurring workflows so initiatives keep moving.",
    icon: "projects",
    services: [
      { title: "Project coordination", description: "Keep workstreams on track" },
      { title: "Vendor management", description: "Source, negotiate, follow up" },
      { title: "Process documentation", description: "SOPs that actually get used" },
      { title: "Team coordination", description: "Align people and priorities" },
      { title: "Deadline tracking", description: "Nothing slips quietly" },
      { title: "Workflow automation", description: "Less admin, more leverage" },
    ],
    offerings: [
      "Operations Coordinators",
      "Project Assistants",
      "Vendor Managers",
      "Executive Ops Specialists",
    ],
  },
  {
    slug: "research-documents",
    name: "Research & Documents",
    shortName: "Research",
    description:
      "Briefs, source docs, and organized files so you walk into every decision ready.",
    icon: "research",
    services: [
      { title: "Executive research", description: "Answers, not noise" },
      { title: "Brief writing", description: "Concise decision packs" },
      { title: "Document organization", description: "Find anything in seconds" },
      { title: "Data room prep", description: "Diligence without scramble" },
      { title: "Competitive scans", description: "What’s moving in your market" },
      { title: "File management", description: "Clean systems, clear ownership" },
    ],
    offerings: [
      "Research Specialists",
      "Document Managers",
      "Brief Writers",
      "Knowledge Coordinators",
    ],
  },
  {
    slug: "business-operations",
    name: "Business operations",
    shortName: "Business ops",
    description:
      "CRM hygiene, hiring support, invoicing follow-up, and the operational layer behind growth.",
    icon: "business",
    services: [
      { title: "CRM management", description: "Pipeline that stays accurate" },
      { title: "Hiring support", description: "Sourcing, screening, scheduling" },
      { title: "Finance support", description: "Invoices and follow-ups" },
      { title: "Vendor sourcing", description: "Find and manage partners" },
      { title: "Onboarding coordination", description: "New hires live faster" },
      { title: "Investor relations prep", description: "Decks and diligence ready" },
    ],
    offerings: [
      "Business Ops Assistants",
      "RevOps Coordinators",
      "Hiring Coordinators",
      "Finance Support Specialists",
    ],
  },
  {
    slug: "household-family",
    name: "Household & family",
    shortName: "Household",
    description:
      "Home vendors, family calendars, gifts, and personal logistics—so life runs as smoothly as work.",
    icon: "household",
    services: [
      { title: "Household management", description: "Vendors and home logistics" },
      { title: "Family calendar", description: "School, activities, travel" },
      { title: "Event planning", description: "Birthdays, dinners, holidays" },
      { title: "Gift research", description: "Thoughtful, on time" },
      { title: "Personal errands", description: "Coordinated without you chasing" },
      { title: "Relocation support", description: "Moves without the overwhelm" },
    ],
    offerings: [
      "Household Managers",
      "Family Coordinators",
      "Personal Logistics Specialists",
      "Lifestyle Assistants",
    ],
  },
  {
    slug: "personal-wellness",
    name: "Personal wellness",
    shortName: "Wellness",
    description:
      "Appointments, claims, meal planning, and recovery logistics that protect your energy.",
    icon: "wellness",
    services: [
      { title: "Medical scheduling", description: "Appointments and follow-ups" },
      { title: "Insurance claims", description: "Paperwork handled" },
      { title: "Meal coordination", description: "Planning and groceries" },
      { title: "Fitness scheduling", description: "Trainers and recovery" },
      { title: "Health records", description: "Organized and accessible" },
      { title: "Wellness sourcing", description: "Supplements and providers" },
    ],
    offerings: [
      "Wellness Coordinators",
      "Personal Care Assistants",
      "Health Logistics Specialists",
      "Lifestyle Support Partners",
    ],
  },
  {
    slug: "leadership-board",
    name: "Leadership & board",
    shortName: "Leadership",
    description:
      "Board packs, investor updates, multi-entity coordination, and the rhythm of executive leadership.",
    icon: "leadership",
    services: [
      { title: "Board meeting prep", description: "Materials and follow-ups" },
      { title: "Investor updates", description: "Clear, timely communication" },
      { title: "Multi-entity management", description: "Complex structures, one system" },
      { title: "Executive briefing", description: "Walk into the room ready" },
      { title: "Stakeholder mapping", description: "Know who needs what" },
      { title: "Leadership cadence", description: "Rhythms that compound" },
    ],
    offerings: [
      "Board Prep Specialists",
      "Investor Relations Assistants",
      "Executive Briefing Partners",
      "Leadership Ops Managers",
    ],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function searchCategories(query: string): Category[] {
  const q = query.trim().toLowerCase();
  if (!q) return categories;
  return categories.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.services.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      ) ||
      c.offerings.some((o) => o.toLowerCase().includes(q)),
  );
}
