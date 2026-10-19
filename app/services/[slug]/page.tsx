import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, getCategoryBySlug, quoteHref } from "@/data/categories";
import { pageMetadata } from "@/lib/seo";
import { VettingCards } from "@/components/home/ServiceListings";
import { categoryIcon } from "@/components/ui/icons";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return pageMetadata({
    title: category.name,
    description: category.description,
    path: `/services/${category.slug}`,
  });
}

function renderCategoryIcon(icon: string) {
  const Icon = categoryIcon(icon);
  return <Icon size={32} />;
}

export default async function ServiceCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();


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
            <span className="category-icon icon-bare">
              {renderCategoryIcon(category.icon)}
            </span>
            <h1 style={{ margin: 0 }}>{category.name}</h1>
          </div>
          <p>{category.description}</p>
          <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href={quoteHref(category.slug)} className="btn btn-primary">
              Get a quote
            </Link>
            <Link href="/pricing" className="btn btn-outline">
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-heading">
            <h2>What we deliver</h2>
          </div>
          <div className="service-grid">
            {category.deliverables.map((d) => (
              <div key={d} className="service-card">
                <h4>{d}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VettingCards showButton={false} />
    </main>
  );
}
