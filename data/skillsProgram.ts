import type { HowItWorksAudience } from "@/data/howItWorks";
import type { Plan } from "@/data/plans";

// "Apply" buttons open the Skills Program form; "Talk to us" opens the contact page.
const APPLY_HREF = "/skills-program/apply";
const CONTACT_HREF = "/contact";

export const skillsHero = {
  eyebrow: "Skills Program",
  title: "Learn the skill. Work on real projects.",
  subtitle:
    "Train with us, intern on supervised client work, and earn your place as a vetted contractor.",
  primaryCta: { label: "Apply to the program", href: APPLY_HREF },
  secondaryCta: { label: "Talk to us", href: CONTACT_HREF },
};

export const skillsPathway: HowItWorksAudience[] = [
  {
    id: "pathway",
    label: "Pathway",
    heading: "From training to paid client projects",
    steps: [
      { title: "Train", description: "Build job-ready skills in a focused track." },
      {
        title: "Intern",
        description: "Work on real client projects while a mentor reviews your work.",
      },
      { title: "Get vetted", description: "Pass our assessment on real skills." },
      {
        title: "Join as a contractor",
        description: "Get matched to paid projects managed by SkillLink Nexus.",
      },
      {
        title: "Level up",
        // CONFIRM: contractor levels (Rising, Pro, Expert).
        description: "Grow from Rising to Pro to Expert as you deliver.",
      },
    ],
  },
];

export const skillsPathwayVisuals = {
  needLabel: "Your track",
  needTasks: [
    { label: "Web", on: true },
    { label: "Design", on: true },
    { label: "Data", on: true },
    { label: "Security", on: false },
  ],
  styleBadge: "Internship",
  styleTitle: "Real client work",
  prefs: [
    { left: "Learn", right: "Apply", value: 68 },
    { left: "Practice", right: "Deliver", value: 82 },
    // CONFIRM: contractor levels (Rising, Pro, Expert).
    { left: "Rising", right: "Expert", value: 74 },
  ],
  match: {
    initials: "SP",
    name: "Your chosen track",
    role: "Skills program",
    tag: "Mentor reviewed",
    status: "Managed by SkillLink",
    eta: "Real client work",
  },
};

export const skillsTracks = {
  heading: "Choose your track.",
  items: [
    "Web development",
    "Brand and design",
    "Content and video",
    "Data and reporting",
    "Cybersecurity",
    "Executive support",
  ].map((title) => ({ title })),
};

export const skillsDetails: { heading: string; sub: string; badge: string; items: Plan[] } = {
  heading: "Program details",
  sub: "Three stages. One path to paid client projects.",
  badge: "Hands-on",
  items: [
    {
      id: "training",
      name: "Training",
      subtitle: "Learn the skill",
      description: "Focused tracks that teach the skills clients pay for.",
      price: "Stage 1",
      period: "",
      includesLabel: "Training includes:",
      features: [
        // CONFIRM: taught by working professionals.
        { label: "Taught by working professionals", detail: "" },
        { label: "Real exercises", detail: "not just theory" },
      ],
      cta: "Apply to the program",
      ctaHref: APPLY_HREF,
      ctaStyle: "outline",
    },
    {
      id: "internship",
      name: "Internship",
      subtitle: "Work on real projects",
      description:
        "Work on real client projects with a mentor reviewing every deliverable.",
      price: "Stage 2",
      period: "",
      popular: true,
      includesLabel: "Internship includes:",
      features: [
        { label: "Supervised by SkillLink Nexus", detail: "" },
        { label: "Portfolio pieces", detail: "from real work" },
        { label: "A reference from your mentor", detail: "" },
      ],
      cta: "Apply to the program",
      ctaHref: APPLY_HREF,
      ctaStyle: "solid",
    },
    {
      id: "roster",
      name: "Contractor roster",
      subtitle: "Get matched to client work",
      description: "Pass our assessment and get matched to paid client projects.",
      price: "Stage 3",
      period: "",
      includesLabel: "The roster includes:",
      features: [
        { label: "Assessed on real skills", detail: "" },
        { label: "Matched and managed", detail: "by SkillLink Nexus" },
        // CONFIRM: contractor levels.
        { label: "Move up levels as you deliver", detail: "" },
        { label: "Placement depends on assessment and project demand", detail: "" },
      ],
      cta: "Apply to the program",
      ctaHref: APPLY_HREF,
      ctaStyle: "outline",
    },
  ],
};

export const skillsCta = {
  title: "Ready to start? Apply to the next cohort.",
  body: "Train with us, intern on supervised client work, and earn your place as a vetted contractor.",
  primary: { label: "Apply to the program", href: APPLY_HREF },
  secondary: { label: "Talk to us", href: CONTACT_HREF },
};
