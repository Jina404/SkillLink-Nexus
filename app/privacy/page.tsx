import Link from "next/link";
import { brand } from "@/data/navigation";

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Privacy Policy</h1>
          <p>How {brand.name} collects, uses, and protects information when you use our site and services.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose-page">
          <p>
            <strong>Last updated:</strong> September 28, 2026
          </p>
          <h2>What we collect</h2>
          <p>
            When you request a discovery call, apply to join, or contact us, we may collect your name,
            email, phone number, company details, role, and the information you share about your needs
            or experience.
          </p>
          <h2>How we use it</h2>
          <p>
            We use this information to respond to inquiries, schedule calls, match executives with
            assistants, evaluate applications, and improve our services. We do not sell your personal
            information.
          </p>
          <h2>Sharing</h2>
          <p>
            We may share information with service providers who help us operate (for example scheduling
            and email tools), and when required by law. Assistants matched to an engagement receive only
            what they need to deliver support under confidentiality obligations.
          </p>
          <h2>Security</h2>
          <p>
            We use access controls, verification, and contractual protections appropriate to the data we
            handle. Learn more on our{" "}
            <Link href="/security">Security</Link> page.
          </p>
          <h2>Your choices</h2>
          <p>
            You can ask to access, update, or delete personal information we hold about you by emailing{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
