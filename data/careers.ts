export type CareerValue = {
  title: string;
  description: string;
};

export type CareerBenefit = {
  title: string;
  description: string;
};

export type CareerFaq = {
  question: string;
  answer: string;
};

export type CareerStep = {
  title: string;
  description: string;
};

export const careersHero = {
  eyebrow: "Careers at SkillLink Nexus",
  title: "Welcome to your next favorite job.",
  subtitle:
    "Work from anywhere, drive change, and grow with purpose—as an executive assistant supporting ambitious leaders.",
  primaryCta: { label: "Apply to join", href: "/careers/apply" },
  secondaryCta: { label: "See how it works", href: "#process" },
};

export const careersMission = {
  eyebrow: "Our mission",
  title: "Powered by purpose. Driven by people.",
  body: "We create meaningful career opportunities by connecting skilled executive assistants with startups and leaders who need leverage—tackling inequality at its root: access to opportunity.",
  highlight:
    "Whether you’re partnering with a CEO or driving the work behind the scenes, you’re helping bring that mission to life.",
};

export const careersRoleExplainer = {
  title: "How we make it happen",
  body: "At SkillLink Nexus, we connect startups and executives with dedicated executive assistants—the people who help leaders move faster and smarter. Think founders, CFOs, and operators building big things. You’ll be their right hand: priorities in check, follow-ups on track, and chaos under control.",
  resources: [
    {
      title: "What does an EA actually do?",
      description: "Calendar, inbox, travel, ops—and the judgment that ties it together.",
      href: "/services",
    },
    {
      title: "What’s the recruitment process like?",
      description: "From application to match—clear steps, clear feedback.",
      href: "#process",
    },
    {
      title: "How matching works for assistants",
      description: "How we pair you with executives whose pace fits yours.",
      href: "/how-it-works",
    },
  ],
};

export const careersProcess: CareerStep[] = [
  {
    title: "Apply",
    description:
      "Share your experience, strengths, and the countries you’re eligible to work from. Takes about 10 minutes.",
  },
  {
    title: "Skills & culture screen",
    description:
      "We review English fluency, executive support craft, and values fit—then invite strong candidates forward.",
  },
  {
    title: "Live assessment",
    description:
      "A practical exercise that mirrors real EA work: prioritization, communication, and calm under pressure.",
  },
  {
    title: "Match & onboard",
    description:
      "We match you with an executive, set up tools and access, and support kickoff so you start strong.",
  },
];

export const careersValues: CareerValue[] = [
  {
    title: "Empower each other",
    description:
      "We create an environment where everyone can support, challenge, and celebrate one another.",
  },
  {
    title: "Use your voice",
    description:
      "We champion big ideas and encourage open discussion so the best ones win.",
  },
  {
    title: "Drive fast",
    description:
      "We operate with ownership, speed, and adaptability—turning challenges into outcomes.",
  },
  {
    title: "Embrace feedback",
    description:
      "Feedback is a two-way gift for growth through resilience and radical respect.",
  },
  {
    title: "Customer obsession",
    description:
      "We stay committed to understanding and delighting the executives and teams we support.",
  },
];

export const careersBenefits: CareerBenefit[] = [
  {
    title: "Compensation package",
    description:
      "Clear monthly pay, regular compensation reviews, and performance bonuses—recognition built into how we operate.",
  },
  {
    title: "Global health coverage",
    description:
      "Insurance that supports you wherever you are—routine care, dental, vision, and mental health included.",
  },
  {
    title: "Growth opportunities",
    description:
      "Feedback, mentorship, and real chances to stretch—sharpen skills or step into broader scope.",
  },
  {
    title: "PTO that respects life",
    description:
      "Paid time off, sick days, family care days, parental leave, and time to disconnect and recharge.",
  },
  {
    title: "Work–life balance",
    description:
      "Fixed schedules, no weekends or overtime by default. When you log off, you actually log off.",
  },
  {
    title: "World-class culture",
    description:
      "Celebrate wins, share feedback openly, and stay connected—collaborative, human, and purposeful.",
  },
];

export const careersFaq: CareerFaq[] = [
  {
    question: "Do I need to be in a specific country to apply?",
    answer:
      "Most EA roles are open across select LATAM countries (for example Nicaragua, Colombia, Costa Rica, Honduras, El Salvador, Ecuador, Mexico, and Guatemala). Some roles welcome applicants more broadly—check the job description for eligibility.",
  },
  {
    question: "What’s the schedule like?",
    answer:
      "We typically work a fixed schedule (often aligned to your local business hours or the executive’s timezone needs). No weekends or overtime by default—so when you log off, the rest of the day is yours.",
  },
  {
    question: "Is this remote?",
    answer:
      "Yes—roles are fully remote. You’ll stay connected through team rituals, shared wins, and clear communication channels.",
  },
  {
    question: "Do all roles require English?",
    answer:
      "Yes. English is our main working language. You’ll need to be fluent and comfortable communicating with executives and teammates.",
  },
  {
    question: "What happens if I don’t get the role?",
    answer:
      "We’ll get back to you either way. If it isn’t the right fit now, that doesn’t mean never—we grow fast and love staying in touch for future matches.",
  },
  {
    question: "Do you only hire women?",
    answer:
      "No. We’re focused on expanding opportunity for underrepresented talent while building the strongest team possible—and we hire people of all genders.",
  },
  {
    question: "Do you provide work equipment?",
    answer:
      "After probation (about eight weeks), we typically set you up with company equipment. Until then, you’ll use your own computer to get started.",
  },
];

export const careersProof = {
  rating: "4.7",
  source: "Glassdoor",
  label: "Don’t just take our word for it.",
  ctaLabel: "Read how our team describes the work →",
  ctaHref: "#values",
};

export const careersCountries = [
  "Nicaragua",
  "Colombia",
  "Costa Rica",
  "Honduras",
  "El Salvador",
  "Ecuador",
  "Mexico",
  "Guatemala",
  "Peru",
  "Other LATAM",
  "Other (please specify)",
];

export const careersExperienceLevels = [
  "1–2 years",
  "3–5 years",
  "6–9 years",
  "10+ years",
];
