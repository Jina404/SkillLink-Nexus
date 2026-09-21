import Link from "next/link";
import { HiringOptions } from "@/components/home/HiringOptions";
import { CTABand } from "@/components/home/HiringOptions";

export default function ForBusinessesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">For businesses</p>
          <h1>Executive support that scales with your leadership team.</h1>
          <p>
            Dedicated assistants for one leader or a cluster of executives—with onboarding,
            continuity, and procurement-ready security.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/get-an-ea" className="btn btn-primary btn-lg">
              Talk to us
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>Built for growing teams</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h4>Shared capacity</h4>
              <p>Plans that support one, two, or three executives with clear priority rules.</p>
            </div>
            <div className="service-card">
              <h4>Continuity coverage</h4>
              <p>Enterprise includes PTO and leave backfill so work does not stall.</p>
            </div>
            <div className="service-card">
              <h4>Security & procurement</h4>
              <p>NDAs, identity verification, and ISO-aligned posture for enterprise buyers.</p>
            </div>
            <div className="service-card">
              <h4>CSM-led rollout</h4>
              <p>Expand support across leaders without rebuilding process from scratch.</p>
            </div>
          </div>
        </div>
      </section>

      <HiringOptions />
      <CTABand />
    </main>
  );
}
