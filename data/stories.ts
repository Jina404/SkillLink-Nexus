export type StoryType = "Guide" | "Update" | "Sample";

export type Story = {
  slug: string;
  type: StoryType;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  body: string;
};

export const storyFilters = [
  { key: "all", label: "All" },
  { key: "guides", label: "Guides", type: "Guide" },
  { key: "updates", label: "Updates", type: "Update" },
  { key: "samples", label: "Samples", type: "Sample" },
] as const;

export type StoryFilterKey = (typeof storyFilters)[number]["key"];

export const stories: Story[] = [
  {
    slug: "how-to-scope-a-website-project",
    type: "Guide",
    category: "Web Development",
    readTime: "4 min read",
    title: "How to scope a website project",
    summary: "What a written quote should include, and what to ask before you pay.",
    body: "A good website quote starts with a clear scope. Before you ask for a price, decide your goal (enquiries, sales or information), the pages you need, who supplies the text and images, any features such as a contact form, booking or payments, and your deadline. A written quote should state what is included, what is not, the number of revision rounds, the delivery date, the payment schedule and who owns the finished work. If any of these is missing, ask. A written quote protects you: you know the cost before work begins. Changes outside the agreed scope are quoted separately before work begins.",
  },
  {
    slug: "before-you-request-a-quote-checklist",
    type: "Guide",
    category: "All services",
    readTime: "3 min read",
    title: "Before you request a quote: a one-page checklist",
    summary: "Seven things to prepare so you get an accurate quote faster.",
    body: "Prepare these seven things: 1. Your business name and what you do. 2. The goal of the project. 3. Examples you like. 4. Whether your text, logo and images are ready. 5. Your deadline. 6. Your budget range. 7. Who approves the work. With these, we can scope your project and send a written quote within 48 hours.",
  },
  {
    slug: "what-a-penetration-test-involves",
    type: "Guide",
    category: "Cybersecurity & Compliance",
    readTime: "5 min read",
    title: "What a penetration test involves",
    summary: "Why written authorisation always comes first.",
    body: "A penetration test is an authorised, controlled attempt to find security weaknesses before attackers do. It always starts with written permission from the system owner, which defines what may be tested and when. Typical stages are scoping, information gathering, testing, reporting and a retest after fixes. The report lists each finding by severity with clear steps to fix it. Testing a system without permission can be a criminal offence, so we only test with written authorisation from the client.",
  },
  {
    slug: "landing-page-website-or-web-app",
    type: "Guide",
    category: "Web Development",
    readTime: "4 min read",
    title: "Landing page, website or web app?",
    summary: "How to choose the right starting point for your goal.",
    body: "A landing page is one page with one goal, such as collecting enquiries for a campaign. A website has several pages and builds trust, explains your services and helps people find you. A web app lets users log in, manage data or make payments. Choose by your goal and budget. Most businesses should start with a website or landing page and add an app later.",
  },
  {
    slug: "skilllink-nexus-ltd-registered-in-kenya",
    type: "Update",
    category: "Company",
    readTime: "1 min read",
    title: "SkillLink Nexus Ltd is now registered in Kenya",
    summary: "Our company is a registered private limited company in Nairobi.",
    body: "SkillLink Nexus Ltd is a private limited company registered in Kenya. Clients contract with and pay SkillLink Nexus Ltd, and we manage every project from scope to delivery under one written quote. Contact us at hello@skilllinknexus.com.",
  },
  {
    slug: "sample-project-five-page-business-website",
    type: "Sample",
    category: "Web Development",
    readTime: "2 min read",
    title: "Sample project: five-page business website",
    summary: "An illustrative example of scope, timeline and price.",
    body: "Illustrative example, not a client project. Scope: Home, About, Services, Portfolio and Contact pages with a contact form. Delivery: 14 days. Revisions: 2 rounds included. Quoted price: KES 120,000, paid 50% to start and 50% on approval. Managed by SkillLink Nexus from brief to launch.",
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}
