import Link from "next/link";
import { brand } from "@/data/navigation";

export default function AccessibilityPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Accessibility</h1>
          <p>
            {brand.name} aims to make our website usable for people of all abilities.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose-page">
          <p>
            <strong>Last updated:</strong> September 28, 2026
          </p>
          <h2>Our commitment</h2>
          <p>
            We design pages with clear structure, readable text, keyboard-friendly navigation, and
            sufficient contrast wherever practical. We continue to improve accessibility as the product
            evolves.
          </p>
          <h2>Feedback</h2>
          <p>
            If you encounter a barrier on this site—or need content in an alternate format—email{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a> with the page URL and a short
            description of the issue. We will work with you to find a solution.
          </p>
          <h2>Related</h2>
          <p>
            See also our <Link href="/privacy">Privacy Policy</Link> and{" "}
            <Link href="/security">Security</Link> practices.
          </p>
        </div>
      </section>
    </main>
  );
}
