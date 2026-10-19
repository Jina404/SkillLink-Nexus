export type HowItWorksStep = {
  title: string;
  description: string;
};

export type HowItWorksAudience = {
  id: string;
  label: string;
  heading: string;
  steps: HowItWorksStep[];
};

// The ids are internal only and never shown on the site.
export const howItWorks: HowItWorksAudience[] = [
  {
    id: "executives",
    label: "For organizations",
    heading: "From brief to delivery, with a written quote up front",
    steps: [
      {
        title: "Tell us what you need",
        description: "Share your brief. It takes a few minutes.",
      },
      {
        title: "Get a written quote",
        // CONFIRM: 48-hour quote promise.
        description: "We scope the project and send one price within 48 hours.",
      },
      {
        title: "We match and manage a vetted contractor",
        description:
          "You deal only with SkillLink Nexus, never with the contractor directly.",
      },
      {
        title: "We check the quality",
        description: "Every deliverable is reviewed before it reaches you.",
      },
      {
        title: "You approve, we pay",
        description:
          "Your payment goes to SkillLink Nexus Ltd, and we pay the contractor only after you approve the result.",
      },
    ],
  },
  {
    id: "assistants",
    label: "For contractors",
    heading: "Do the work you are best at. We handle the rest",
    steps: [
      {
        title: "Apply to join",
        description: "Share your skills, your portfolio and the work you do best.",
      },
      {
        title: "Get assessed",
        description: "We assess your skills before you are matched to any project.",
      },
      {
        title: "Get matched",
        description:
          "We match you to projects that fit your skills. Scoping and pricing are done before you start.",
      },
      {
        title: "Deliver great work",
        description:
          "We manage the client and deadlines, and check quality before delivery.",
      },
    ],
  },
];

export const matchingQuiz = {
  badge: "Free project scoping",
  title: "Not sure where to start?",
  subtitle:
    "Pick your priority. We’ll take you to the right service—or straight to a quote.",
  questions: [
    {
      id: "priority",
      prompt: "What is your priority right now?",
      options: [
        { label: "Launch a website", icon: "rocket", href: "/services/web-development" },
        { label: "Design my brand", icon: "palette", href: "/services/brand-design" },
        { label: "Grow my audience", icon: "trending", href: "/services/digital-content-marketing" },
        { label: "Understand my data", icon: "chart", href: "/services/data-analytics" },
        { label: "Secure my systems", icon: "shield", href: "/services/cybersecurity-compliance" },
        { label: "Get executive support", icon: "briefcase", href: "/services/executive-virtual-assistance" },
      ],
    },
  ],
};

export const outcomes = [
  {
    title: "Launch a website",
    description: "Business sites and online stores",
    href: "/services/web-development",
  },
  {
    title: "Fix or upgrade a site",
    description: "Faster, cleaner, up to date",
    href: "/services/web-development",
  },
  {
    title: "Launch a landing page",
    description: "One page, built to convert",
    href: "/services/web-development",
  },
  {
    title: "Build your brand",
    description: "Logo, brand kit, templates",
    href: "/services/brand-design",
  },
  {
    title: "Something else technical",
    description: "Tell us what you need",
    href: "/services",
  },
  {
    title: "Ongoing monthly work",
    description: "Same vetted contractor, every month",
    href: "/for-businesses",
  },
];

export const findWorkLinks = [
  {
    title: "For contractors",
    description: "How SkillLink works and how to join",
    href: "/careers",
  },
  {
    title: "Join as a contractor",
    description: "Start your application",
    href: "/careers/apply",
  },
  {
    title: "How matching works",
    description: "From application to your first project",
    href: "/careers#process",
  },
  {
    title: "Our values",
    description: "The culture behind how we work and grow",
    href: "/careers#values",
  },
];
