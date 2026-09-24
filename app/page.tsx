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
