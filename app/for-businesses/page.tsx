import Link from "next/link";
import { HiringOptions } from "@/components/home/HiringOptions";
import { CTABand } from "@/components/home/HiringOptions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For Organizations",
  description:
    "One project or a monthly plan, scoped and priced up front and managed by SkillLink Nexus from brief to delivery.",
  path: "/for-businesses",
});


export default function ForBusinessesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">For organizations</p>
          <h1>Tech projects delivered without the agency overhead.</h1>
          <p>
            One project or a monthly plan—scoped, priced up front, and managed by SkillLink from
            brief to delivery.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary btn-lg">
              Talk to us
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>Built for growing organizations</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h4>Written quote first</h4>
              <p>You know the price before work starts. No retainers unless you choose one.</p>
            </div>
            <div className="service-card">
              <h4>Monthly plans</h4>
              <p>Ongoing content, maintenance and reporting with the same vetted contractor.</p>
            </div>
            <div className="service-card">
              <h4>No hiring delays</h4>
              <p>A project can start within days, with no long-term commitment.</p>
            </div>
            <div className="service-card">
              <h4>Managed delivery</h4>
              <p>We find, check and manage the contractor. You review the finished work.</p>
            </div>
          </div>
        </div>
      </section>

      <HiringOptions />
      <CTABand />
    </main>
  );
}
