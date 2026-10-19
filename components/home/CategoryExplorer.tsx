import Link from "next/link";
import { categories } from "@/data/categories";
import { categoryIcon } from "@/components/ui/icons";

export function CategoryExplorer() {
  return (
    <section className="section section-after-hero">
      <div className="container">
        <div className="section-heading">
          <h2>Tech services for every kind of project</h2>
          <p>Written quotes. Vetted contractors. Managed by SkillLink Nexus.</p>
        </div>
        <div className="category-grid">
          {categories.map((cat) => {
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
      </div>
    </section>
  );
}
