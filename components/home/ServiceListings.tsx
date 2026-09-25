import Link from "next/link";
import { categories } from "@/data/categories";
import { getOfferingsByCategory } from "@/data/services";
import { assistantProfiles } from "@/data/assistantProfiles";
import { SkillsVideo } from "@/components/home/SkillsVideo";

export function ServiceListings({ limitCategories = 4 }: { limitCategories?: number }) {
  const shown = categories.slice(0, limitCategories);

  return (
    <section className="section skills-listings">
      <SkillsVideo />
      <div className="skills-listings-content">
        <div className="section-heading">
          <h2>Find support by skill and specialty</h2>
          <p>Structured offerings you can browse—then match with a dedicated assistant.</p>
        </div>

        {shown.map((cat) => {
          const offerings = getOfferingsByCategory(cat.slug).slice(0, 4);
          if (!offerings.length) return null;
          return (
            <div key={cat.slug} className="listing-block">
              <div className="listing-head">
                <h3>{cat.name}</h3>
                <Link href={`/services/${cat.slug}`}>See all →</Link>
              </div>
              <div className="service-grid">
                {offerings.map((o) => (
                  <Link key={o.id} href={o.href} className="service-card">
                    <h4>{o.title}</h4>
                    <p>{o.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function AssistantCards({ limit = 6 }: { limit?: number }) {
  const profiles = assistantProfiles.slice(0, limit);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Illustrative matches</h2>
          <p>
            Example profiles showing how a match might look. These are placeholders—not real
            people.
          </p>
        </div>
        <div className="assistant-grid">
          {profiles.map((p) => (
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
              <span className="tag">{p.availability}</span>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <Link href="/get-an-ea" className="btn btn-primary btn-lg">
            Get matched
          </Link>
        </div>
      </div>
    </section>
  );
}
