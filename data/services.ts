export type ServiceOffering = {
  id: string;
  categorySlug: string;
  title: string;
  description: string;
  href: string;
};

/** Structured service listings per category — placeholder offerings for browse UX. */
export const serviceOfferings: ServiceOffering[] = [
  {
    id: "cal-1",
    categorySlug: "calendar-scheduling",
    title: "Executive Calendar Managers",
    description: "Own the week, clear conflicts, and protect focus time across leaders.",
    href: "/services/calendar-scheduling",
  },
  {
    id: "cal-2",
    categorySlug: "calendar-scheduling",
    title: "Scheduling Specialists",
    description: "Book the right people fast—across time zones and preferences.",
    href: "/services/calendar-scheduling",
  },
  {
    id: "cal-3",
    categorySlug: "calendar-scheduling",
    title: "Meeting Coordinators",
    description: "Agendas, rooms, and logistics so meetings start ready.",
    href: "/services/calendar-scheduling",
  },
  {
    id: "cal-4",
    categorySlug: "calendar-scheduling",
    title: "Executive Support Specialists",
    description: "Calendar plus light ops for leaders who need one owner.",
    href: "/services/calendar-scheduling",
  },
  {
    id: "inbox-1",
    categorySlug: "inbox-communications",
    title: "Inbox Managers",
    description: "Daily triage, drafts in your voice, and clear escalation rules.",
    href: "/services/inbox-communications",
  },
  {
    id: "inbox-2",
    categorySlug: "inbox-communications",
    title: "Communications Specialists",
    description: "Stakeholder threads, follow-ups, and relationship continuity.",
    href: "/services/inbox-communications",
  },
  {
    id: "inbox-3",
    categorySlug: "inbox-communications",
    title: "Executive Correspondence Leads",
    description: "High-stakes drafting and review before anything leaves your name.",
    href: "/services/inbox-communications",
  },
  {
    id: "inbox-4",
    categorySlug: "inbox-communications",
    title: "Stakeholder Coordinators",
    description: "Keep the right people informed without flooding your day.",
    href: "/services/inbox-communications",
  },
  {
    id: "travel-1",
    categorySlug: "travel-events",
    title: "Travel Coordinators",
    description: "Flights, hotels, and ground—booked to your standards.",
    href: "/services/travel-events",
  },
  {
    id: "travel-2",
    categorySlug: "travel-events",
    title: "Event Planners",
    description: "Offsites, dinners, and conferences run end to end.",
    href: "/services/travel-events",
  },
  {
    id: "travel-3",
    categorySlug: "travel-events",
    title: "Itinerary Specialists",
    description: "Day-by-day plans with buffers so travel does not cost recovery days.",
    href: "/services/travel-events",
  },
  {
    id: "travel-4",
    categorySlug: "travel-events",
    title: "Executive Travel Managers",
    description: "Complex multi-leg trips plus expense cleanup on return.",
    href: "/services/travel-events",
  },
  {
    id: "meet-1",
    categorySlug: "meetings-reporting",
    title: "Meeting Coordinators",
    description: "Prep, notes, and action tracking that create progress.",
    href: "/services/meetings-reporting",
  },
  {
    id: "meet-2",
    categorySlug: "meetings-reporting",
    title: "Reporting Specialists",
    description: "Status packs and updates without the last-minute scramble.",
    href: "/services/meetings-reporting",
  },
  {
    id: "meet-3",
    categorySlug: "meetings-reporting",
    title: "Board Prep Assistants",
    description: "Materials, logistics, and follow-ups for board cycles.",
    href: "/services/meetings-reporting",
  },
  {
    id: "meet-4",
    categorySlug: "meetings-reporting",
    title: "Executive Ops Partners",
    description: "Meeting systems plus light project follow-through.",
    href: "/services/meetings-reporting",
  },
  {
    id: "proj-1",
    categorySlug: "projects-operations",
    title: "Operations Coordinators",
    description: "Recurring workflows and vendor loops that stay alive.",
    href: "/services/projects-operations",
  },
  {
    id: "proj-2",
    categorySlug: "projects-operations",
    title: "Project Assistants",
    description: "Deadlines, owners, and cross-team coordination.",
    href: "/services/projects-operations",
  },
  {
    id: "proj-3",
    categorySlug: "projects-operations",
    title: "Vendor Managers",
    description: "Sourcing, negotiation follow-up, and relationship hygiene.",
    href: "/services/projects-operations",
  },
  {
    id: "proj-4",
    categorySlug: "projects-operations",
    title: "Executive Ops Specialists",
    description: "Projects plus process documentation for scaling teams.",
    href: "/services/projects-operations",
  },
  {
    id: "res-1",
    categorySlug: "research-documents",
    title: "Research Specialists",
    description: "Decision-ready briefs instead of raw link dumps.",
    href: "/services/research-documents",
  },
  {
    id: "res-2",
    categorySlug: "research-documents",
    title: "Document Managers",
    description: "File systems and data rooms you can actually search.",
    href: "/services/research-documents",
  },
  {
    id: "res-3",
    categorySlug: "research-documents",
    title: "Brief Writers",
    description: "Concise packs for meetings, investors, and hiring.",
    href: "/services/research-documents",
  },
  {
    id: "res-4",
    categorySlug: "research-documents",
    title: "Knowledge Coordinators",
    description: "Keep institutional knowledge organized as the team grows.",
    href: "/services/research-documents",
  },
];

export function getOfferingsByCategory(slug: string): ServiceOffering[] {
  return serviceOfferings.filter((o) => o.categorySlug === slug);
}

export function getFeaturedOfferings(limit = 8): ServiceOffering[] {
  return serviceOfferings.slice(0, limit);
}
