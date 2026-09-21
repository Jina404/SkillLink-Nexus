"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  brand,
  footerColumns,
  footerLegal,
  footerSocial,
} from "@/data/navigation";
import {
  IconFacebook,
  IconInstagram,
  IconLinkedIn,
  IconX,
  IconYouTube,
} from "@/components/ui/icons";

const socialIcons = {
  facebook: IconFacebook,
  linkedin: IconLinkedIn,
  x: IconX,
  youtube: IconYouTube,
  instagram: IconInstagram,
} as const;

export function Footer() {
  const pathname = usePathname();
  if (
    pathname === "/get-an-ea" ||
    pathname === "/signup" ||
    pathname === "/login" ||
    pathname === "/careers/apply"
  ) {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {footerColumns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.label}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-social-row">
          <div className="footer-social">
            <span className="footer-social-label">Follow us</span>
            <div className="footer-social-icons">
              {footerSocial.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="footer-social-btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 {brand.name}</span>
          <div className="footer-bottom-links">
            {footerLegal.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
