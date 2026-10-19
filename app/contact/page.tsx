import Link from "next/link";
import { ContactForm } from "@/components/forms/ContactForm";
import { brand, footerSocial } from "@/data/navigation";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Contact SkillLink Nexus in Nairobi, Kenya. Email hello@skilllinknexus.com, call +254 20 200 9009 or send us a message.",
  path: "/contact",
});

const PHONE_DISPLAY = "+254 20 200 9009";
const PHONE_LINK = "tel:+254202009009";

export default function ContactPage() {
  const linkedin = footerSocial.find((s) => s.icon === "linkedin");
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Contact us</h1>
          <p>
            Questions about a project, joining as a contractor or the Skills Program? Send us a
            message and we will get back to you.
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="service-grid">
            <div className="service-card">
              <h4>Email</h4>
              <p>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </p>
            </div>
            <div className="service-card">
              <h4>Phone</h4>
              <p>
                <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
              </p>
            </div>
            <div className="service-card">
              <h4>Location</h4>
              <p>Nairobi, Kenya</p>
            </div>
            {linkedin ? (
              <div className="service-card">
                <h4>LinkedIn</h4>
                <p>
                  <a href={linkedin.href} target="_blank" rel="noopener noreferrer">
                    SkillLink Nexus on LinkedIn
                  </a>
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="book-card">
            <header className="book-header">
              <h2>Send us a message</h2>
              <p>
                Want a quote? Use the <Link href="/request-a-project">project request form</Link> instead.
              </p>
            </header>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
