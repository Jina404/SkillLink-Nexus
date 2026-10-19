export type NavLink = {
  label: string;
  href: string;
  /** Opens in a new tab (used for the legal PDFs). */
  newTab?: boolean;
};

export type MegaMenuKind = "services" | "outcomes" | "find-work";

export const brand = {
  name: "SkillLink Nexus",
  legalName: "SkillLink Nexus Ltd",
  regNo: "PVT-L51DLZB5",
  shortName: "SkillLink",
  logo: "/logo.png",
  tagline: "Tech projects by vetted contractors. Nairobi, Kenya.",
  email: "hello@skilllinknexus.com",
  schedulerUrl: "https://cal.com/skilllink-nexus-3lofv4",
};

export const primaryNav: {
  label: string;
  href: string;
  mega?: MegaMenuKind;
}[] = [
  { label: "Services", href: "/services", mega: "services" },
  { label: "Skills Program", href: "/skills-program" },
  { label: "Why Us", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "For contractors", href: "/careers" },
  { label: "For organizations", href: "/for-businesses" },
];

export const footerColumns: {
  title: string;
  links: NavLink[];
}[] = [
  {
    title: "For organizations",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Submit a project", href: "/request-a-project" },
      { label: "Pricing", href: "/pricing" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Brand & Design", href: "/services/brand-design" },
      { label: "Digital Content & Marketing", href: "/services/digital-content-marketing" },
      { label: "Software Engineering", href: "/services/software-engineering" },
      { label: "Data & Analytics", href: "/services/data-analytics" },
      { label: "Cybersecurity & Compliance", href: "/services/cybersecurity-compliance" },
      { label: "Executive & Virtual Assistance", href: "/services/executive-virtual-assistance" },
      { label: "All services", href: "/services" },
    ],
  },
  {
    title: "For contractors",
    links: [
      { label: "For contractors", href: "/careers" },
      { label: "Join as a contractor", href: "/careers/apply" },
      { label: "How joining works", href: "/careers#process" },
      { label: "Our values", href: "/careers#values" },
      { label: "Find work", href: "/careers" },
      { label: "Skills Program", href: "/skills-program" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Guides", href: "/stories?type=guides" },
      { label: "Updates", href: "/stories?type=updates" },
      { label: "Samples", href: "/stories?type=samples" },
      { label: "All stories", href: "/stories" },
      { label: "Help", href: "/contact" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "How it works", href: "/how-it-works" },
      { label: "For contractors", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "For organizations", href: "/for-businesses" },
      { label: "Privacy Policy", href: "/legal/privacy-policy.pdf", newTab: true },
      { label: "Terms and Conditions", href: "/legal/terms-and-conditions.pdf", newTab: true },
    ],
  },
];

export const footerSocial: {
  label: string;
  href: string;
  icon: "linkedin";
}[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/skilllinknexus/",
    icon: "linkedin",
  },
];

export const footerLegal: NavLink[] = [
  { label: "Terms and Conditions", href: "/legal/terms-and-conditions.pdf", newTab: true },
  { label: "Privacy Policy", href: "/legal/privacy-policy.pdf", newTab: true },
  { label: "Accessibility", href: "/accessibility" },
];
