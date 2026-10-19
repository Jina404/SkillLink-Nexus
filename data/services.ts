export type SpecialtyItem = { title: string; description: string };

export type SpecialtyGroup = {
  title: string;
  /** "See all" link: the category page this group belongs to. */
  href: string;
  items: SpecialtyItem[];
};

/** Homepage "Everything you need, managed by us." section: 4 groups of 4 cards. */
export const specialtyGroups: SpecialtyGroup[] = [
  {
    title: "Build",
    href: "/services/web-development",
    items: [
      { title: "Landing pages", description: "One focused page, built to turn visitors into leads." },
      { title: "Business sites", description: "A clear, fast site that explains what you do." },
      { title: "Online stores", description: "Product pages, cart and checkout, ready to sell." },
      { title: "Mobile apps", description: "Apps for Android and iOS, built to your brief." },
    ],
  },
  {
    title: "Brand and content",
    href: "/services/brand-design",
    items: [
      { title: "Logos and brand kits", description: "A logo, colors and fonts that keep your brand consistent." },
      { title: "Social posts", description: "Posts written and designed for your channels." },
      { title: "Short videos", description: "Promos and explainers, edited and ready to share." },
      { title: "Pitch decks", description: "Clear, well-designed slides for your next pitch." },
    ],
  },
  {
    title: "Data and security",
    href: "/services/data-analytics",
    items: [
      { title: "Dashboards and reports", description: "Your key numbers in one clear, repeatable view." },
      { title: "Data cleanup", description: "Messy data cleaned, organized and ready to use." },
      {
        title: "Penetration testing",
        description: "Weaknesses found first, with tests run only with your written authorisation.",
      },
      { title: "Vulnerability assessments", description: "Known issues found, ranked and explained." },
    ],
  },
  {
    title: "Executive support",
    href: "/services/executive-virtual-assistance",
    items: [
      { title: "Calendar and scheduling", description: "Your week organized and meetings booked." },
      { title: "Inbox management", description: "Messages sorted so only what needs you reaches you." },
      { title: "Travel and events", description: "Trips and events arranged end to end." },
      { title: "Meetings and reporting", description: "Agendas, notes and follow-up actions tracked." },
    ],
  },
];
