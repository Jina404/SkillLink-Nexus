export type NavLink = {
  label: string;
  href: string;
};

export type MegaMenuKind = "services" | "outcomes" | "find-work";

export const brand = {
  name: "SkillLink Nexus",
  shortName: "SkillLink",
  logo: "/logo.png",
  tagline: "Dedicated executive assistants for leaders who need leverage",
  email: "hello@skilllinknexus.com",
  schedulerUrl: "https://cal.com/skilllink-nexus-3lofv4",
};

export const primaryNav: {
  label: string;
  href: string;
  mega?: MegaMenuKind;
}[] = [
  { label: "Services", href: "/services", mega: "services" },
  { label: "Get outcomes", href: "/for-executives", mega: "outcomes" },
  { label: "Find work", href: "/careers", mega: "find-work" },
  { label: "Why Us", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/for-businesses" },
];

export const footerColumns: {
  title: string;
  links: NavLink[];
}[] = [
  {
    title: "For Executives",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Get an EA", href: "/get-an-ea" },
      { label: "Pricing", href: "/pricing" },
      { label: "For executives", href: "/for-executives" },
      { label: "For businesses", href: "/for-businesses" },
      { label: "Calendar & Scheduling", href: "/services/calendar-scheduling" },
      { label: "Inbox & Communications", href: "/services/inbox-communications" },
      { label: "Travel & Events", href: "/services/travel-events" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "For Assistants",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Apply to join", href: "/careers/apply" },
      { label: "Hiring process", href: "/careers#process" },
      { label: "Our values", href: "/careers#values" },
      { label: "Find work", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/resources" },
      { label: "Articles", href: "/resources" },
      { label: "Case studies", href: "/resources" },
      { label: "Insights", href: "/resources" },
      { label: "Help", href: "/get-an-ea" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/how-it-works" },
      { label: "Why Us", href: "/how-it-works" },
      { label: "Careers", href: "/careers" },
      { label: "Contact us", href: "/get-an-ea" },
      { label: "Enterprise", href: "/for-businesses" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export const footerSocial: {
  label: string;
  href: string;
  icon: "facebook" | "linkedin" | "x" | "youtube" | "instagram";
}[] = [];

export const footerLegal: NavLink[] = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
];
