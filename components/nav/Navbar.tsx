"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { categories } from "@/data/categories";
import { findWorkLinks, outcomes } from "@/data/howItWorks";
import { brand, primaryNav, type MegaMenuKind } from "@/data/navigation";
import { IconArrow, IconChevron, IconSearch } from "@/components/ui/icons";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState(categories[0]?.slug ?? "");

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const active = categories.find((c) => c.slug === activeCategory) ?? categories[0];

  function megaPanel(kind: MegaMenuKind) {
    if (kind === "services") {
      return (
        <div className="mega-panel services" role="region" aria-label="Services menu">
          <div className="mega-rail">
            <div className="mega-rail-label">Categories</div>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                className={`mega-rail-item ${activeCategory === cat.slug ? "active" : ""}`}
                onMouseEnter={() => setActiveCategory(cat.slug)}
                onFocus={() => setActiveCategory(cat.slug)}
              >
                {cat.name}
                <span className="arrow">›</span>
              </button>
            ))}
          </div>
          <div className="mega-main">
            <div className="mega-content">
              <div className="mega-content-label">{active.name}</div>
              <div className="mega-grid">
                {active.services.map((s) => (
                  <Link key={s.title} href={`/services/${active.slug}`} className="mega-link">
                    <strong>{s.title}</strong>
                    <span>{s.description}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="mega-footer">
              <Link href="/services">
                See all services <IconArrow />
              </Link>
              <Link href="/get-an-ea">
                Get matched <IconArrow />
              </Link>
              <Link href="/how-it-works">
                Ways to work with us <IconArrow />
              </Link>
            </div>
          </div>
        </div>
      );
    }

    if (kind === "outcomes") {
      return (
        <div className="mega-panel mega-simple" role="region" aria-label="Outcomes menu">
          <div className="mega-simple-body">
            <div className="mega-intro">
              <h3>Drive larger-scale support</h3>
              <p>Build dedicated executive capacity for complex, ongoing work.</p>
            </div>
            <div>
              <div className="mega-content-label">Outcomes</div>
              <div className="mega-grid">
                {outcomes.map((o) => (
                  <Link key={o.title} href={o.href} className="mega-link">
                    <strong>{o.title}</strong>
                    <span>{o.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mega-footer">
            <Link href="/for-executives">
              For executives <IconArrow />
            </Link>
            <Link href="/for-businesses">
              For businesses <IconArrow />
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="mega-panel mega-simple" role="region" aria-label="Find work menu">
        <div className="mega-simple-body mega-simple-body-solo">
          <div className="mega-intro">
            <h3>Join as an executive assistant</h3>
            <p>Build a career supporting ambitious leaders—with training and match support.</p>
          </div>
          <div>
            <div className="mega-content-label">Ways to join</div>
            <div className="mega-grid">
              {findWorkLinks.map((l) => (
                <Link key={l.title} href={l.href} className="mega-link">
                  <strong>{l.title}</strong>
                  <span>{l.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mega-footer">
          <Link href="/careers">
            Browse careers <IconArrow />
          </Link>
          <Link href="/careers/apply">
            Apply to join <IconArrow />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <header className="site-header">
      <div className="container-wide nav-bar">
        <Link href="/" className="brand-block" aria-label={`${brand.name} home`}>
          <img
            src={brand.logo}
            alt=""
            className="brand-logo"
            width={36}
            height={36}
          />
          <span className="brand-name">
            <span className="brand-name-full">{brand.name}</span>
            <span className="brand-name-short">{brand.shortName}</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {primaryNav.map((item) =>
            item.mega ? (
              <div key={item.label} className="nav-item has-mega">
                <button type="button" className="nav-trigger" aria-haspopup="true">
                  {item.label}
                  <IconChevron className="chevron" />
                </button>
                {megaPanel(item.mega)}
              </div>
            ) : (
              <div key={item.label} className="nav-item">
                <Link href={item.href} className="nav-trigger">
                  {item.label}
                </Link>
              </div>
            ),
          )}
        </nav>

        <Link href="/services" className="nav-search-combo" aria-label="Search services">
          <span className="nav-search-left">
            <IconSearch />
            Search
          </span>
          <span className="nav-search-divider" aria-hidden />
          <span className="nav-search-right">
            Services
            <IconChevron className="chevron" />
          </span>
        </Link>

        <div className="nav-actions">
          <Link href="/get-an-ea" className="btn btn-primary">
            Get an EA
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        {primaryNav.map((item) =>
          item.mega ? (
            <div key={item.label}>
              <button
                type="button"
                className="mobile-acc-btn"
                onClick={() =>
                  setMobileAcc((prev) => (prev === item.label ? null : item.label))
                }
              >
                {item.label}
                <IconChevron className="chevron" />
              </button>
              {mobileAcc === item.label && item.mega === "services" && (
                <div className="mobile-acc-panel">
                  {categories.map((cat) => (
                    <div key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        onClick={() => setMobileOpen(false)}
                        style={{ fontWeight: 600 }}
                      >
                        {cat.name}
                      </Link>
                      <div className="mobile-sub">
                        {cat.services.slice(0, 4).map((s) => (
                          <Link
                            key={s.title}
                            href={`/services/${cat.slug}`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {mobileAcc === item.label && item.mega === "outcomes" && (
                <div className="mobile-acc-panel">
                  {outcomes.map((o) => (
                    <Link key={o.title} href={o.href} onClick={() => setMobileOpen(false)}>
                      {o.title}
                    </Link>
                  ))}
                </div>
              )}
              {mobileAcc === item.label && item.mega === "find-work" && (
                <div className="mobile-acc-panel">
                  {findWorkLinks.map((l) => (
                    <Link key={l.title} href={l.href} onClick={() => setMobileOpen(false)}>
                      {l.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="mobile-acc-btn"
              onClick={() => setMobileOpen(false)}
              style={{ display: "block" }}
            >
              {item.label}
            </Link>
          ),
        )}
        <div className="mobile-actions">
          <Link href="/get-an-ea" className="btn btn-primary btn-block" onClick={() => setMobileOpen(false)}>
            Get an EA
          </Link>
        </div>
      </div>
    </header>
  );
}
