import Link from "next/link";
import { plans, type Plan } from "@/data/plans";
import { IconCheck } from "@/components/ui/icons";

export function HiringOptions({
  heading = "Choose how you want to work with us",
  sub = "Three ways to get work done. Every one starts with a price agreed before work starts.",
  items = plans,
  badge = "POPULAR",
  note = "Prices in USD, invoiced in KES. Starting prices only. You receive a written quote for your exact scope before any work begins.",
}: {
  heading?: string;
  sub?: string;
  items?: Plan[];
  badge?: string;
  /** Small line under the cards; pass null to hide it. */
  note?: string | null;
} = {}) {
  return (
    <section className="section section-soft" id="pricing">
      <div className="container">
        <div className="section-heading" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          <h2>{heading}</h2>
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>{sub}</p>
        </div>

        <div className="plans-grid">
          {items.map((plan) => (
            <article key={plan.id} className={`plan-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="plan-badge">{badge}</span>}
              <h3>{plan.name}</h3>
              <p className="plan-sub">{plan.subtitle}</p>
              <p className="plan-desc">{plan.description}</p>
              <div className="plan-price">
                <strong>{plan.price}</strong>
                {plan.period ? <span>{plan.period}</span> : null}
              </div>
              <p className="plan-includes">{plan.includesLabel}</p>
              <ul className="plan-features">
                {plan.features.map((f) => (
                  <li key={f.label}>
                    <span className="check">
                      <IconCheck />
                    </span>
                    <span>
                      <strong>{f.label}</strong>
                      {f.detail ? <> — {f.detail}</> : null}
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
        {note ? <p className="plans-note">{note}</p> : null}
      </div>
    </section>
  );
}

type CTALink = { label: string; href: string };

export function CTABand({
  title = "Have a project? Get a quote and a vetted contractor.",
  body = "Tell us what you need built, designed or analyzed. We scope it, match it and manage it to delivery.",
  primary = { label: "Get a quote", href: "/request-a-project" },
  secondary = { label: "I want to join as a contractor", href: "/pricing" },
}: {
  title?: string;
  body?: string;
  primary?: CTALink;
  secondary?: CTALink;
} = {}) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <div className="cta-actions">
            <Link href={primary.href} className="btn btn-primary btn-lg">
              {primary.label}
            </Link>
            <Link href={secondary.href} className="btn btn-outline btn-lg">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
