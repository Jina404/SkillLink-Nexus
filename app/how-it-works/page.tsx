import Link from "next/link";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTABand } from "@/components/home/HiringOptions";

export default function HowItWorksPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h1>Built around fit, clarity, and speed.</h1>
          <p>
            Every engagement starts with understanding how you work—then matching you with a
            dedicated executive assistant who can support it immediately.
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
              <h4>Time to live</h4>
              <p>Most executives are onboarded and working with their EA within about 24 hours.</p>
            </div>
            <div className="service-card">
              <h4>Managed partnership</h4>
              <p>A dedicated CSM stays involved so the relationship compounds—not plateaus.</p>
            </div>
            <div className="service-card">
              <h4>Rematch guarantee</h4>
              <p>If the fit isn’t strong, we rematch at no additional cost.</p>
            </div>
            <div className="service-card">
              <h4>AI + judgment</h4>
              <p>Assistants use modern tools for speed, and apply human judgment where it matters.</p>
            </div>
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/get-an-ea" className="btn btn-primary btn-lg">
              Get matched
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
