import { HiringOptions } from "@/components/home/HiringOptions";
import { PricingInsights } from "@/components/home/Hero";
import { CTABand } from "@/components/home/HiringOptions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Packages, custom projects and monthly plans, each with one price agreed before work starts. Pay for finished work, not hours.",
  path: "/pricing",
});


export default function PricingPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow">Pricing</p>
          <h1>Pay for finished work, not hours</h1>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Packages, custom projects and monthly plans—each with one price agreed before work
            starts.
          </p>
        </div>
      </section>
      <HiringOptions />
      <PricingInsights />
      <CTABand />
    </main>
  );
}
