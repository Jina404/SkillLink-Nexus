import { HiringOptions } from "@/components/home/HiringOptions";
import { PricingInsights } from "@/components/home/Hero";
import { CTABand } from "@/components/home/HiringOptions";

export default function PricingPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow">Pricing</p>
          <h1>Flexible plans for dedicated executive support</h1>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Transparent monthly pricing for a full-time EA, CSM, and rematch guarantee—starting at
            $3,999/mo.
          </p>
        </div>
      </section>
      <HiringOptions />
      <PricingInsights />
      <CTABand />
    </main>
  );
}
