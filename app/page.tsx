import { Hero, PricingInsights } from "@/components/home/Hero";
import { CategoryExplorer } from "@/components/home/CategoryExplorer";
import { ServiceListings, VettingCards } from "@/components/home/ServiceListings";
import { ToolsFluent } from "@/components/home/ToolsFluent";
import { HowItWorks, MatchingQuiz } from "@/components/home/HowItWorks";
import { CTABand, HiringOptions } from "@/components/home/HiringOptions";
import { StoriesSection } from "@/components/home/StoriesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "SkillLink Nexus | Managed Tech Projects",
  absoluteTitle: true,
  description:
    "Web, design, content, software, data, cybersecurity and executive support from $150. Vetted contractors, managed by SkillLink Nexus in Nairobi.",
  path: "/",
});


export default function Home() {
  return (
    <main className="page-shell">
      <link rel="preload" href="/herosection-poster.jpg" as="image" type="image/jpeg" />
      <link rel="preload" href="/hero-bg-poster.jpg" as="image" type="image/jpeg" />
      <link rel="preload" href="/skills-poster.jpg" as="image" type="image/jpeg" />
      <Hero />
      <CategoryExplorer />
      <ToolsFluent />
      <ServiceListings />
      <VettingCards />
      <MatchingQuiz />
      <HowItWorks />
      <PricingInsights />
      <HiringOptions />
      <StoriesSection />
      <CTABand />
    </main>
  );
}
