import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

// Next.js adds "noindex" to this page automatically; there is no canonical URL for a missing page.
export const metadata = {
  ...pageMetadata({
    title: "Page Not Found",
    description: "The page you were looking for could not be found on the SkillLink Nexus website.",
    path: "/404",
  }),
  alternates: undefined,
};

export default function NotFound() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>We couldn’t find that page.</h1>
          <p>It may have moved, or the link may be wrong. Try one of these instead.</p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/" className="btn btn-primary btn-lg">
              Back to home
            </Link>
            <Link href="/services" className="btn btn-outline btn-lg">
              Our services
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
