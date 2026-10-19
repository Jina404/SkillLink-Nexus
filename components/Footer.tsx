import Link from "next/link";
import {
  brand,
  footerColumns,
  footerLegal,
  footerSocial,
} from "@/data/navigation";
import { IconLinkedIn } from "@/components/ui/icons";

const socialIcons = {
  linkedin: IconLinkedIn,
} as const;

export function Footer() {
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
                    {link.newTab ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footerSocial.length > 0 ? (
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
                      className="footer-social-btn icon-bare"
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
        ) : null}

        <div className="footer-bottom">
          <span>© 2026 {brand.legalName} | Reg. No. {brand.regNo}. Tech projects by vetted contractors. Nairobi, Kenya.</span>
          <div className="footer-bottom-links">
            {footerLegal.map((link) =>
              link.newTab ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
