"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { popularSearches } from "@/data/popularSearches";
import { IconArrow, IconSearch, IconSpark } from "@/components/ui/icons";

export function Hero() {
  const router = useRouter();
  const [audience, setAudience] = useState<"hire" | "work">("hire");
  const [query, setQuery] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (audience === "work") {
      router.push("/careers");
      return;
    }
    const q = query.trim();
    router.push(q ? `/services?q=${encodeURIComponent(q)}` : "/services");
  }

  return (
    <section className="hero-wrap">
      <div className="container-wide">
        <div className="hero-card">
          <div className="hero-media" aria-hidden>
            <video autoPlay muted loop playsInline src="/hero-bg.mp4" />
          </div>
          <div className="hero-overlay" aria-hidden />

          <div className="hero-inner">
            <h1>Get more done with an EA who fits how you work.</h1>
            <p className="hero-sub">
              Hand off the details. Stay focused on what matters. Feel the relief in days, not months.
            </p>

            <div className="audience-toggle" role="tablist" aria-label="Audience">
              <button
                type="button"
                role="tab"
                className={audience === "hire" ? "active" : ""}
                aria-selected={audience === "hire"}
                onClick={() => setAudience("hire")}
              >
                I want to hire
              </button>
              <button
                type="button"
                role="tab"
                className={audience === "work" ? "active" : ""}
                aria-selected={audience === "work"}
                onClick={() => setAudience("work")}
              >
                I want to join as an EA
              </button>
            </div>

            <form className="hero-search" onSubmit={onSubmit}>
              <input
                type="search"
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  audience === "hire"
                    ? "What do you need help with?"
                    : "Tell us how you support executives..."
                }
                aria-label="Search"
              />
              <button type="submit" className="btn btn-dark">
                <IconSearch />
                {audience === "hire" ? "Search" : "Get started"}
              </button>
            </form>

            <div className="popular-row">
              <span className="label">Popular searches</span>
              {(audience === "hire"
                ? popularSearches.slice(0, 4)
                : [
                    { label: "Browse careers", href: "/careers" },
                    { label: "Apply to join", href: "/careers/apply" },
                    { label: "Hiring process", href: "/careers#process" },
                    { label: "Our values", href: "/careers#values" },
                  ]
              ).map((item) => (
                <Link key={item.label} href={item.href} className="chip">
                  {item.label}
                  <span className="arrow">
                    <IconArrow />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingInsights() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    router.push(value.trim() ? `/pricing?need=${encodeURIComponent(value.trim())}` : "/pricing");
  }

  return (
    <section className="section">
      <div className="container">
        <div className="insights-card">
          <div className="insights-left">
            <h2>Get insights into executive assistant pricing.</h2>
            <p>
              We’ll show the typical monthly range for dedicated support matched to the work you
              need.
            </p>
            <form className="insights-input" onSubmit={onSubmit}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="To start, describe what you need done."
                aria-label="Describe what you need"
              />
              <button type="submit" className="btn btn-dark">
                Next <IconSpark />
              </button>
            </form>
          </div>
          <div className="insights-right">
            <div className="cost-viz">
              <h4>Cost estimate</h4>
              <div className="price-pills">
                <span>$3,999/mo</span>
                <span>$5,999/mo</span>
              </div>
              <div className="bell" aria-hidden>
                <svg viewBox="0 0 280 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="bellFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8f00e1" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#8f00e1" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 90 C40 90 50 70 80 40 C110 10 130 5 140 5 C150 5 170 10 200 40 C230 70 240 90 280 90 Z"
                    fill="url(#bellFill)"
                  />
                  <path
                    d="M0 90 C40 90 50 70 80 40 C110 10 130 5 140 5 C150 5 170 10 200 40 C230 70 240 90 280 90"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="cost-labels">
                <span>Affordable</span>
                <span className="mid">Typical</span>
                <span>Experts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
