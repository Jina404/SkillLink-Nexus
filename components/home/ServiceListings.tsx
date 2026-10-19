import Link from "next/link";
import { specialtyGroups } from "@/data/services";
import { vettingSection } from "@/data/vetting";
import { SkillsVideo } from "@/components/home/SkillsVideo";

export function ServiceListings() {
  return (
    <section className="section skills-listings">
      <SkillsVideo />
      <div className="skills-listings-content">
        <div className="section-heading">
          <h2>Everything you need, managed by us.</h2>
          {/* CONFIRM: senior contractors only, signed scope and written authorization for security work. */}
          <p>
            Security work is done only by senior, vetted contractors, and every test starts with a
            signed scope and written authorization.
          </p>
        </div>

        {specialtyGroups.map((group) => (
          <div key={group.title} className="listing-block">
            <div className="listing-head">
              <h3>{group.title}</h3>
              <Link href={group.href}>See all →</Link>
            </div>
            <div className="service-grid">
              {group.items.map((item) => (
                <Link key={item.title} href={group.href} className="service-card">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/** How contractors are vetted: three process cards and a proof strip. */
export function VettingCards({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>{vettingSection.title}</h2>
          <p>{vettingSection.subtitle}</p>
        </div>
        <div className="assistant-grid">
          {vettingSection.steps.map((step) => (
            <article key={step.title} className="assistant-card">
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="careers-proof" style={{ marginTop: 16 }}>
          <p className="careers-proof-rating">{vettingSection.proof}</p>
        </div>
        {showButton ? (
          <div style={{ marginTop: 28 }}>
            <Link href="/request-a-project" className="btn btn-primary btn-lg">
              Submit a project
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
