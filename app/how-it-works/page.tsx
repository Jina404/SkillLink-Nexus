import Link from "next/link";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTABand } from "@/components/home/HiringOptions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "How It Works",
  description:
    "Tell us what you need, get a written quote, and we match and manage a vetted contractor. Every deliverable is reviewed before it reaches you.",
  path: "/how-it-works",
});


export default function HowItWorksPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h1>Built around scope, price and delivery.</h1>
          <p>
            Every project starts with a clear scope and a written quote—then a vetted contractor
            whose skills fit the work.
          </p>
        </div>
      </section>
      <HowItWorks showProcessLink={false} />
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>What to expect</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h4>Price up front</h4>
              <p>A written quote for your exact scope before any work starts. No hourly billing.</p>
            </div>
            <div className="service-card">
              <h4>Managed delivery</h4>
              <p>We handle communication and deadlines, so you are not managing a freelancer.</p>
            </div>
            <div className="service-card">
              {/* CONFIRM: delivery guarantee (revisions included, redo or refund). */}
              <h4>Delivery guarantee</h4>
              <p>Revisions are included. If the result misses the brief, we make it right.</p>
            </div>
            <div className="service-card">
              <h4>Vetted contractors</h4>
              <p>Contractors are assessed on their skills before they are matched to any project.</p>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/request-a-project" className="btn btn-primary btn-lg">
              Submit a project
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
