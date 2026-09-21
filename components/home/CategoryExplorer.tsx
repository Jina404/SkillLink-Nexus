import Link from "next/link";
import { categories } from "@/data/categories";
import { trustPlaceholders } from "@/data/testimonials";
import { categoryIcon } from "@/components/ui/icons";

export function TrustLogos() {
  return (
    <section className="trust-section">
      <div className="container">
        <p className="eyebrow">Trusted by leaders and growing teams</p>
        <div className="trust-row" aria-label="Client logo placeholders">
          {trustPlaceholders.map((label, i) => (
            <div key={`${label}-${i}`} className="trust-placeholder">
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoryExplorer() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Executive support for every kind of workday</h2>
          <p>
            Browse by the work you want off your plate—calendar, inbox, travel, ops, and full-life
            support.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((cat) => {
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
      </div>
    </section>
  );
}
