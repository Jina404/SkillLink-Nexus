import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getAssistantsByCategory, assistantProfiles } from "@/data/assistantProfiles";
import { getOfferingsByCategory } from "@/data/services";
import { categoryIcon } from "@/components/ui/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const Icon = categoryIcon(category.icon);
  const offerings = getOfferingsByCategory(slug);
  const assistants =
    getAssistantsByCategory(slug).length > 0
      ? getAssistantsByCategory(slug)
      : assistantProfiles.slice(0, 3);

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link href="/services" style={{ color: "var(--brand)" }}>
              Services
            </Link>{" "}
            / {category.name}
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 8 }}>
            <span className="category-icon" style={{ width: 44, height: 44 }}>
              <Icon />
            </span>
            <h1 style={{ margin: 0 }}>{category.name}</h1>
          </div>
          <p>{category.description}</p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/get-an-ea" className="btn btn-primary">
              Get matched
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              See plans
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-heading">
            <h2>Capabilities</h2>
          </div>
          <div className="service-grid">
            {category.services.map((s) => (
              <div key={s.title} className="service-card">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {offerings.length > 0 && (
        <section className="section section-soft">
          <div className="container">
            <div className="section-heading">
              <h2>Service offerings</h2>
            </div>
            <div className="service-grid">
              {offerings.map((o) => (
                <div key={o.id} className="service-card">
                  <h4>{o.title}</h4>
                  <p>{o.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Illustrative assistant profiles</h2>
            <p>Placeholder examples for this category—not real people.</p>
          </div>
          <div className="assistant-grid">
            {assistants.map((p) => (
              <article key={p.id} className="assistant-card">
                <span className="placeholder-pill">Illustrative example</span>
                <div className="assistant-top">
                  <div className="assistant-avatar" aria-hidden />
                  <div>
                    <h4>{p.name}</h4>
                    <div className="assistant-match">{p.match}</div>
                    <p className="assistant-specialty">{p.specialty}</p>
                  </div>
                </div>
                <p>{p.blurb}</p>
                <div className="tag-row">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Link href="/get-an-ea" className="btn btn-primary btn-lg">
              Get started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
