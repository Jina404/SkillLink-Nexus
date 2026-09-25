import Link from "next/link";
import { categories } from "@/data/categories";
import { categoryIcon } from "@/components/ui/icons";

export function CategoryExplorer() {
  return (
    <section className="section section-after-hero">
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
