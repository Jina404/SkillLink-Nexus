export type Category = {
  slug: string;
  name: string;
  /** One sentence, outcome first. */
  description: string;
  icon: string;
  /** 3 to 5 short bullet points. */
  deliverables: string[];
};

// Names must match SERVICE_OPTIONS in lib/forms/options.ts (the project form dropdown).
export const categories: Category[] = [
  {
    slug: "web-development",
    name: "Web Development",
    description:
      "A fast, professional website that turns visitors into customers, built and supported for you.",
    icon: "globe",
    deliverables: [
      "Business websites",
      "Landing pages",
      "E-commerce stores",
      "Site maintenance and support",
    ],
  },
  {
    slug: "brand-design",
    name: "Brand & Design",
    description: "A consistent, professional brand that customers recognise wherever they see you.",
    icon: "palette",
    deliverables: [
      "Logo and brand identity",
      "Brand guidelines",
      "Social media graphics",
      "Pitch and presentation decks",
    ],
  },
  {
    slug: "digital-content-marketing",
    name: "Digital Content & Marketing",
    description: "Steady, on-brand content that keeps your audience engaged and growing.",
    icon: "megaphone",
    deliverables: [
      "Social media content",
      "Short-form video",
      "Content calendars",
      "Campaign assets",
    ],
  },
  {
    slug: "software-engineering",
    name: "Software Engineering",
    description: "Reliable software that automates your work and connects the tools you already use.",
    icon: "code",
    deliverables: [
      "Mobile apps",
      "Custom web applications",
      "System integrations",
      "Automation tools",
    ],
  },
  {
    slug: "data-analytics",
    name: "Data & Analytics",
    description: "Clean data and clear reports that help you make better decisions.",
    icon: "chart",
    deliverables: [
      "Reports and dashboards",
      "Data cleaning",
      "Survey analysis",
      "Business insights",
    ],
  },
  {
    slug: "cybersecurity-compliance",
    name: "Cybersecurity & Compliance",
    description:
      "Find and fix security weaknesses before they become problems, with every test run only with your written authorisation.",
    icon: "shield",
    deliverables: [
      "Penetration testing, run only with written authorisation from the client",
      "Security assessments",
      "Data protection support",
    ],
  },
  {
    slug: "executive-virtual-assistance",
    name: "Executive & Virtual Assistance",
    description: "A dedicated executive assistant who takes the admin off your plate, on a monthly plan priced to your needs.",
    icon: "briefcase",
    deliverables: [
      "Dedicated executive assistants on a monthly plan",
      "Calendar and scheduling",
      "Inbox management",
      "Travel and events",
      "Meetings and reporting",
    ],
  },
];

/** Old URLs from before the restructure, mapped to the closest new category (used for redirects). */
export const legacyCategorySlugs: Record<string, string | null> = {
  "calendar-scheduling": "web-development",
  "inbox-communications": "web-development",
  "travel-events": "brand-design",
  "meetings-reporting": "digital-content-marketing",
  "household-family": "digital-content-marketing",
  "personal-wellness": "software-engineering",
  "research-documents": "data-analytics",
  "projects-operations": "cybersecurity-compliance",
  "business-operations": "executive-virtual-assistance",
  "leadership-board": null, // "Other technology services" no longer exists: goes to /services
};

/** Link to the project form with this category already selected. */
export function quoteHref(slug: string): string {
  return `/request-a-project?service=${encodeURIComponent(slug)}`;
}

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
      c.deliverables.some((d) => d.toLowerCase().includes(q)),
  );
}
