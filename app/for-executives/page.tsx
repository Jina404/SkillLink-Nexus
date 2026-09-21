import Link from "next/link";
import { CategoryExplorer } from "@/components/home/CategoryExplorer";
import { CTABand } from "@/components/home/HiringOptions";

export default function ForExecutivesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">For executives</p>
          <h1>Relief that shows up in your calendar and inbox.</h1>
          <p>
            A dedicated executive assistant matched to how you work—plus a success manager so the
            partnership compounds over time.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/get-an-ea" className="btn btn-primary btn-lg">
              Get matched
            </Link>
            <Link href="/how-it-works" className="btn btn-outline btn-lg">
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>What leaders typically delegate</h2>
          </div>
          <div className="service-grid">
            {[
              "Calendar ownership and focus-time protection",
              "Inbox triage and drafting in your voice",
              "Travel, events, and expense cleanup",
              "Meeting prep, notes, and follow-through",
              "Project coordination and vendor loops",
              "Research, briefs, and board materials",
            ].map((item) => (
              <div key={item} className="service-card">
                <h4>{item}</h4>
                <p>Hand off the recurring work so you stay on the decisions that need you.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CategoryExplorer />
      <CTABand />
    </main>
  );
}
