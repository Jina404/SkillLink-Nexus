import { Hero, PricingInsights } from "@/components/home/Hero";
import { CategoryExplorer } from "@/components/home/CategoryExplorer";
import { AssistantCards, ServiceListings } from "@/components/home/ServiceListings";
import { ToolsFluent } from "@/components/home/ToolsFluent";
import { HowItWorks, MatchingQuiz } from "@/components/home/HowItWorks";
import {
  CTABand,
  HiringOptions,
  ResourcesSection,
  TestimonialSection,
} from "@/components/home/HiringOptions";

export default function Home() {
  return (
    <main className="page-shell">
      <link rel="preload" href="/herosection-poster.jpg" as="image" type="image/jpeg" />
      <link rel="preload" href="/hero-bg-poster.jpg" as="image" type="image/jpeg" />
      <link rel="preload" href="/herosection.mp4" as="video" type="video/mp4" />
      <link rel="preload" href="/hero-bg.mp4" as="video" type="video/mp4" />
      <link rel="preload" href="/skills-poster.jpg" as="image" type="image/jpeg" />
      <Hero />
      <CategoryExplorer />
      <ToolsFluent />
      <ServiceListings />
      <AssistantCards />
      <MatchingQuiz />
      <HowItWorks />
      <PricingInsights />
      <HiringOptions />
      <TestimonialSection />
      <ResourcesSection />
      <CTABand />
    </main>
  );
}
