import Link from "next/link";
import {
  careersBenefits,
  careersFaq,
  careersHero,
  careersMission,
  careersProcess,
  careersProof,
  careersRoleExplainer,
  careersValues,
} from "@/data/careers";
import { IconArrow } from "@/components/ui/icons";

export default function CareersPage() {
  return (
    <main className="page-shell careers-page">
      <section className="careers-hero">
        <div className="container careers-hero-inner">
          <p className="eyebrow">{careersHero.eyebrow}</p>
          <h1>{careersHero.title}</h1>
          <p className="careers-hero-sub">{careersHero.subtitle}</p>
          <div className="careers-hero-actions">
            <Link href={careersHero.primaryCta.href} className="btn btn-primary btn-lg">
              {careersHero.primaryCta.label}
            </Link>
            <Link href={careersHero.secondaryCta.href} className="btn btn-outline btn-lg">
              {careersHero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="careers-proof">
            <div>
              <p className="careers-proof-label">{careersProof.label}</p>
              <p className="careers-proof-rating">
                We’re rated <strong>{careersProof.rating}</strong> on {careersProof.source}
                <span className="careers-stars" aria-hidden>
                  ★★★★★
                </span>
              </p>
            </div>
            <a href={careersProof.ctaHref} className="link-arrow">
              {careersProof.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container careers-split">
          <div>
            <p className="eyebrow">{careersMission.eyebrow}</p>
            <h2>{careersMission.title}</h2>
          </div>
          <div>
            <p className="careers-lead">{careersMission.body}</p>
            <p className="careers-lead muted">{careersMission.highlight}</p>
            <Link href="/careers/apply" className="link-arrow">
              Apply to join <IconArrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{careersRoleExplainer.title}</h2>
            <p>{careersRoleExplainer.body}</p>
          </div>
          <div className="careers-resource-grid">
            {careersRoleExplainer.resources.map((r) => (
              <Link key={r.title} href={r.href} className="careers-resource-card">
                <strong>{r.title}</strong>
                <span>{r.description}</span>
                <span className="link-arrow">
                  Learn more <IconArrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="process">
        <div className="container">
          <div className="section-heading">
            <h2>Your path to joining</h2>
            <p>A clear, structured process from application to your first executive match.</p>
          </div>
          <ol className="careers-process">
            {careersProcess.map((step, i) => (
              <li key={step.title} className="careers-process-step">
                <span className="careers-step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="careers-inline-cta">
            <Link href="/careers/apply" className="btn btn-primary">
              Start your application
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="values">
        <div className="container">
          <div className="section-heading">
            <h2>Our values</h2>
            <p>They shape our culture, how we work, and how we grow.</p>
          </div>
          <div className="careers-values-grid">
            {careersValues.map((v) => (
              <article key={v.title} className="careers-value-card">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>How we take care of our team</h2>
            <p>Great work and a great life—here’s how we support the people who make SkillLink Nexus what it is.</p>
          </div>
          <div className="careers-benefits-grid">
            {careersBenefits.map((b) => (
              <article key={b.title} className="careers-benefit-card">
                <h3>{b.title}</h3>
                <p>{b.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="faq">
        <div className="container">
          <div className="section-heading">
            <h2>Let’s clear things up</h2>
            <p>Common questions from candidates considering a role at SkillLink Nexus.</p>
          </div>
          <div className="careers-faq">
            {careersFaq.map((item) => (
              <details key={item.question} className="careers-faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band careers-cta">
            <div>
              <h2>Ready to join as an executive assistant?</h2>
              <p>
                Apply in minutes. We’ll review your profile and guide you through a structured path
                to your first match.
              </p>
            </div>
            <div className="cta-actions">
              <Link href="/careers/apply" className="btn btn-primary btn-lg">
                Apply to join
              </Link>
              <a href="#process" className="btn btn-outline btn-lg">
                See the process
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
