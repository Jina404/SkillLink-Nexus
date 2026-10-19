import Link from "next/link";
import { categories, quoteHref, searchCategories } from "@/data/categories";
import { categoryIcon, IconCheck } from "@/components/ui/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Seven service categories, from web development to cybersecurity and executive assistance. Starting prices, vetted contractors, managed by SkillLink Nexus.",
  path: "/services",
});


type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ServicesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const results = searchCategories(q ?? "");

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Browse our services by category</h1>
          <p>
            Explore websites, brand, content, data, security and monthly support—then get a written
            price and a vetted contractor.
          </p>
          {q ? (
            <p style={{ marginTop: 12 }}>
              Showing results for <strong>“{q}”</strong> ·{" "}
              <Link href="/services" style={{ color: "var(--brand)", fontWeight: 600 }}>
                Clear search
              </Link>
            </p>
          ) : null}
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="category-grid">
            {results.map((cat) => {
              const Icon = categoryIcon(cat.icon);
              return (
                <Link key={cat.slug} href={`/services/${cat.slug}`} className="category-card">
                  <span className="category-icon icon-bare">
                    <Icon />
                  </span>
                  <strong>{cat.name}</strong>
                </Link>
              );
            })}
          </div>
          {!results.length && (
            <p style={{ marginTop: 24, color: "var(--ink-soft)" }}>
              No categories matched. Try another search or{" "}
              <Link href="/services" style={{ color: "var(--brand)", fontWeight: 600 }}>
                view all services
              </Link>
              .
            </p>
          )}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>All categories</h2>
            <p>Written quotes. Vetted contractors. Managed by SkillLink Nexus.</p>
          </div>
          <div className="service-grid">
            {categories.map((cat) => (
              <article key={cat.slug} className="service-card">
                <h4>
                  <Link href={`/services/${cat.slug}`}>{cat.name}</Link>
                </h4>
                <p>{cat.description}</p>
                <ul className="plan-features">
                  {cat.deliverables.map((d) => (
                    <li key={d}>
                      <span className="check">
                        <IconCheck />
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <Link href={quoteHref(cat.slug)} className="btn btn-outline">
                  Get a quote
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
