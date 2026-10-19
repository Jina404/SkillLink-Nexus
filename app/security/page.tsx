import Link from "next/link";
import { securityClaims } from "@/data/testimonials";
import { CTABand } from "@/components/home/HiringOptions";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Security",
  description:
    "How SkillLink Nexus protects client access and information: verification, access controls and confidentiality before any work begins.",
  path: "/security",
});


export default function SecurityPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Security</p>
          <h1>Procurement-ready from day one.</h1>
          <p>
            Clear controls, access boundaries, and verification before any work begins—so you can
            share access with confidence.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="security-grid">
            {securityClaims.map((item) => (
              <article key={item.title} className="security-item">
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/contact" className="btn btn-primary">
              Talk to us about security
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
