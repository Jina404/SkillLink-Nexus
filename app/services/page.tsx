import Link from "next/link";
import { categories, searchCategories } from "@/data/categories";
import { categoryIcon } from "@/components/ui/icons";

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
          <h1>Browse executive support by category</h1>
          <p>
            Explore calendar, inbox, travel, meetings, operations, research, and full-life
            support—then get matched with a dedicated assistant.
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
                  <span className="category-icon">
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
          </div>
          <div className="service-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="service-card">
                <h4>{cat.name}</h4>
                <p>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
