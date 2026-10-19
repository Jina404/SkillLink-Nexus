import Link from "next/link";
import { CategoryExplorer } from "@/components/home/CategoryExplorer";
import { CTABand } from "@/components/home/HiringOptions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get Projects Done",
  description:
    "Finished work with a written quote up front: a vetted contractor matched to your project and managed by SkillLink Nexus from brief to delivery.",
  path: "/for-executives",
});


export default function ForExecutivesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Get projects done</p>
          <h1>Finished work. A written quote up front.</h1>
          <p>
            A vetted contractor matched to your project—and SkillLink managing it from brief to
            delivery.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/request-a-project" className="btn btn-primary btn-lg">
              Submit a project
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
            <h2>What clients bring to us</h2>
          </div>
          <div className="service-grid">
            {[
              "Web Development",
              "Brand & Design",
              "Digital Content & Marketing",
              "Software Engineering",
              "Data & Analytics",
              "Cybersecurity & Compliance",
              "Executive & Virtual Assistance",
            ].map((item) => (
              <div key={item} className="service-card">
                <h4>{item}</h4>
                <p>Scoped, priced up front, and delivered by a vetted contractor.</p>
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
