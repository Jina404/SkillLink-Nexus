export type HowItWorksStep = {
  title: string;
  description: string;
};

export type HowItWorksAudience = {
  id: "executives" | "assistants";
  label: string;
  heading: string;
  steps: HowItWorksStep[];
};

export const howItWorks: HowItWorksAudience[] = [
  {
    id: "executives",
    label: "For executives",
    heading: "From first conversation to compounding support",
    steps: [
      {
        title: "Tell us what you need",
        description:
          "Share your role, pace, and the work you want off your plate—calendar, inbox, travel, ops, or all of it.",
      },
      {
        title: "Understand your working style",
        description:
          "A short discovery maps how you communicate, decide, and delegate so the match fits from week one.",
      },
      {
        title: "Match you with an assistant",
        description:
          "We surface a vetted EA aligned to your priorities. Most executives are live within about 24 hours.",
      },
      {
        title: "Start working together",
        description:
          "Access is provisioned, your CSM joins kickoff, and your EA begins owning recurring workflows immediately.",
      },
      {
        title: "Scale your support",
        description:
          "As trust compounds, expand into projects, household logistics, board prep, and team-wide coverage.",
      },
    ],
  },
  {
    id: "assistants",
    label: "For executive assistants",
    heading: "Build a career supporting ambitious leaders",
    steps: [
      {
        title: "Create your profile",
        description:
          "Highlight your strengths—calendar, communications, travel, ops—and the industries you’ve supported.",
      },
      {
        title: "Get matched",
        description:
          "We pair you with executives whose pace and priorities fit how you work best.",
      },
      {
        title: "Work with clients",
        description:
          "Partner with leaders on high-impact work, backed by training, tools, and a success team.",
      },
      {
        title: "Grow your career",
        description:
          "Upskill continuously, take on broader scope, and build long-term partnerships that compound.",
      },
    ],
  },
];

export const matchingQuiz = {
  badge: "Free support scoping",
  title: "Not sure where to start with executive support?",
  subtitle:
    "Answer three quick questions. We’ll point you to the right category and next step.",
  questions: [
    {
      id: "priority",
      prompt: "What’s your top priority right now?",
      options: [
        { label: "Save time", icon: "clock", href: "/services/calendar-scheduling" },
        { label: "Clear my inbox", icon: "inbox", href: "/services/inbox-communications" },
        { label: "Travel with less friction", icon: "travel", href: "/services/travel-events" },
        { label: "Protect focus time", icon: "focus", href: "/services/calendar-scheduling" },
        { label: "Scale operations", icon: "ops", href: "/services/projects-operations" },
        { label: "Something else", icon: "other", href: "/get-an-ea" },
      ],
    },
  ],
};

export const outcomes = [
  {
    title: "Get your time back",
    description: "Delegate the details that steal your week",
    href: "/services/calendar-scheduling",
  },
  {
    title: "Protect focus time",
    description: "A calendar that guards deep work",
    href: "/services/calendar-scheduling",
  },
  {
    title: "Inbox to clarity",
    description: "Only what needs you reaches you",
    href: "/services/inbox-communications",
  },
  {
    title: "Travel without friction",
    description: "Itineraries planned, expenses filed",
    href: "/services/travel-events",
  },
  {
    title: "Board-ready operations",
    description: "Packs, updates, and follow-through",
    href: "/services/leadership-board",
  },
  {
    title: "Scale your exec team",
    description: "Support that grows with leadership",
    href: "/for-businesses",
  },
];

export const findWorkLinks = [
  {
    title: "Browse careers",
    description: "Mission, values, benefits, and how to join",
    href: "/careers",
  },
  {
    title: "Apply to join",
    description: "Start your structured EA application",
    href: "/careers/apply",
  },
  {
    title: "How matching works",
    description: "From application to first executive match",
    href: "/careers#process",
  },
  {
    title: "Our values",
    description: "The culture behind how we work and grow",
    href: "/careers#values",
  },
];
