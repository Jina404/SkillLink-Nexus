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
  eyebrow: "For contractors",
  title: "Do great work. We handle the rest.",
  subtitle:
    "Get matched to projects that fit your skills. We scope the work, manage the client and check quality before delivery.",
  primaryCta: { label: "Join as a contractor", href: "/careers/apply" },
  secondaryCta: { label: "See how it works", href: "#process" },
};

export const careersMission = {
  eyebrow: "Our mission",
  title: "Powered by purpose. Driven by people.",
  body: "We connect skilled and vetted contractors with organizations that need work built, designed or analyzed—and we manage every project from brief to delivery.",
  // CONFIRM: founder to confirm the "more than 60" figure before publishing.
  highlight:
    "More than 60 people have benefited from paid opportunities through SkillLink. Every project you deliver helps that number grow.",
};

// CONFIRM: check this program still runs and that the details below are accurate.
export const careersInternship = {
  eyebrow: "Internships",
  title: "Launch your career in tech services.",
  body: "Join our internship program and learn how high-performing teams run: communication, prioritization, and execution—while supporting real work that matters.",
  highlights: [
    "Remote-first, structured mentorship, and weekly feedback",
    "Real-world projects alongside our vetted contractors",
  ],
  primaryCta: { label: "Apply for internship", href: "/careers/apply?role=internship" },
  secondaryCta: { label: "See the joining process", href: "#process" },
  note: "Rolling applications. If you’re early in your career, this is a great place to start.",
};

export const careersRoleExplainer = {
  title: "How we make it happen",
  body: "SkillLink Nexus sells finished work, not hours. A client tells us what they need. We scope it, agree a written quote and match a vetted contractor whose skills fit. You focus on the work. We manage communication and deadlines.",
  resources: [
    {
      title: "What kind of work is there?",
      description: "Websites, brand and design, content and video, data and reports.",
      href: "/services",
    },
    {
      title: "What’s the joining process like?",
      description: "From application to first project—clear steps, clear feedback.",
      href: "#process",
    },
    {
      title: "How matching works for contractors",
      description: "How we match you to projects that fit your skills.",
      href: "/how-it-works",
    },
  ],
};

export const careersProcess: CareerStep[] = [
  {
    title: "Apply",
    description:
      "Share your skills, your portfolio and the work you do best. It takes a few minutes.",
  },
  {
    title: "Skills assessment",
    description:
      "We assess your skills before you are matched to any project.",
  },
  {
    // CONFIRM: vetting steps (paid test project, portfolio review, senior review).
    title: "Portfolio and test project",
    description:
      "We review your portfolio, and you complete a paid test project that gets a senior review.",
  },
  {
    title: "Match and deliver",
    description:
      "We match you to a project that fits your skills and manage the client side, so you can focus on the work.",
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
      "We stay committed to understanding and delighting the clients and teams we deliver for.",
  },
];

export const careersBenefits: CareerBenefit[] = [
  {
    title: "Projects that fit your skills",
    description:
      "Contractors are assessed on their skills first, then matched to projects where those skills count.",
  },
  {
    title: "Clear briefs",
    description:
      "Every project is scoped and priced before it reaches you, so you know what done looks like.",
  },
  {
    title: "We manage the client",
    description:
      "We handle communication and deadlines with the client, so you can focus on the work.",
  },
  {
    title: "Quality review",
    description:
      "We check quality before delivery. Every finished project builds your track record.",
  },
  {
    title: "Paid opportunities",
    // CONFIRM: founder to confirm the "more than 60" figure before publishing.
    description:
      "More than 60 people have benefited from paid opportunities through SkillLink.",
  },
  {
    title: "Agreed project prices",
    description: "The price is agreed before you start. Paid after client approval.",
  },
];

export const careersFaq: CareerFaq[] = [
  {
    question: "Where is SkillLink Nexus based?",
    answer: "SkillLink Nexus is based in Nairobi, Kenya.",
  },
  {
    question: "How do deadlines work?",
    answer:
      "Every project has agreed deadlines. We manage client communication so you can plan your time around them.",
  },
  {
    question: "What happens if I’m not matched right away?",
    answer:
      "We’ll get back to you either way. If it isn’t the right fit now, that doesn’t mean never—we love staying in touch for future projects.",
  },
  {
    question: "How are contractors assessed?",
    answer:
      "Contractors are assessed on their skills before they are matched to any project.",
  },
];

export const careersProof = {
  label: "Built around skills.",
  highlight: "Skills assessed · Projects scoped · Quality checked",
  ctaLabel: "See our values →",
  ctaHref: "#values",
};
