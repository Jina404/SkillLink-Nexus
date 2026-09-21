import Link from "next/link";
import { plans } from "@/data/plans";
import { testimonials } from "@/data/testimonials";
import { resources, resourceTopics } from "@/data/resources";
import { IconCheck } from "@/components/ui/icons";

export function HiringOptions() {
  return (
    <section className="section section-soft" id="pricing">
      <div className="container">
        <div className="section-heading" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <h2>Choose how you want to hire</h2>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Flexible options designed for dedicated executive support—pay for capacity that fits
            your team.
          </p>
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <article key={plan.id} className={`plan-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="plan-badge">POPULAR</span>}
              <h3>{plan.name}</h3>
              <p className="plan-sub">{plan.subtitle}</p>
              <p className="plan-desc">{plan.description}</p>
              <div className="plan-price">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>
              <p className="plan-includes">{plan.includesLabel}</p>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f.label}>
                    <span className="check">
                      <IconCheck />
                    </span>
                    <span>
                      <strong>{f.label}</strong> — {f.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.ctaHref}
                className={`btn btn-lg btn-block ${plan.ctaStyle === "solid" ? "btn-primary" : "btn-outline"}`}
              >
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Leaders who chose dedicated support</h2>
          <p>
            Placeholder quotes for layout—replace with real, approved testimonials before launch.
          </p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <span className="placeholder-pill">Placeholder</span>
              <p className="quote">“{t.quote}”</p>
              <div className="author">
                <strong>{t.name}</strong>
                <span>
                  {t.title}
                  <br />
                  {t.company}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ResourcesSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading row">
          <div>
            <h2>Resources</h2>
            <p>Guides, articles, and insights on delegation, time, and executive support.</p>
          </div>
          <Link href="/resources" className="btn btn-outline">
            Browse all
          </Link>
        </div>

        <div className="topic-row">
          {resourceTopics.map((topic) => (
            <Link key={topic} href="/resources" className="topic-chip">
              {topic}
            </Link>
          ))}
        </div>

        <div className="resource-grid">
          {resources.slice(0, 6).map((r) => (
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
  );
}

export function CTABand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>Match in under 24 hours.</h2>
            <p>
              One discovery conversation. A dedicated EA plus CSM. Rematch at no cost if the fit
              isn’t right.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/get-an-ea" className="btn btn-primary btn-lg">
              Get started
            </Link>
            <Link href="/pricing" className="btn btn-outline btn-lg">
              See plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
