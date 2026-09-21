import Link from "next/link";
import { resources, resourceTopics } from "@/data/resources";

export default function ResourcesPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Resources</p>
          <h1>Guides, articles, and insights</h1>
          <p>
            Learn how leaders delegate, protect focus time, and build compounding executive support.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="topic-row">
            {resourceTopics.map((topic) => (
              <span key={topic} className="topic-chip">
                {topic}
              </span>
            ))}
          </div>
          <div className="resource-grid">
            {resources.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="resource-card">
                <div className="resource-meta">
                  <span className="resource-type">{r.type}</span>
                  <span>{r.category}</span>
                  <span>{r.readTime}</span>
                </div>
                <h3>{r.title}</h3>
                <p>{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
