import { brand } from "@/data/navigation";

export default function TermsPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Legal</p>
          <h1>Terms of Service</h1>
          <p>The terms that govern use of the {brand.name} website and related services.</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose-page">
          <p>
            <strong>Last updated:</strong> September 28, 2026
          </p>
          <h2>Agreement</h2>
          <p>
            By using this website or submitting a request through our forms, you agree to these Terms
            of Service and our Privacy Policy. If you do not agree, please do not use the site.
          </p>
          <h2>Our services</h2>
          <p>
            {brand.name} connects executives and organizations with dedicated executive assistant
            support. Specific engagement terms, pricing, and scope are confirmed separately when you
            start a plan or discovery process.
          </p>
          <h2>Accounts and accuracy</h2>
          <p>
            Information you submit must be accurate and complete. You are responsible for the activity
            under any credentials we issue for portals or tools we provide.
          </p>
          <h2>Acceptable use</h2>
          <p>
            You may not misuse the site, attempt unauthorized access, or use our services for unlawful
            or abusive purposes. We may suspend access when necessary to protect clients, assistants, or
            the platform.
          </p>
          <h2>Intellectual property</h2>
          <p>
            Site content, branding, and materials are owned by {brand.name} or our licensors. You may
            not copy or redistribute them without permission, except for personal evaluation of our
            services.
          </p>
          <h2>Disclaimers</h2>
          <p>
            The website is provided as available. We work to keep information current, but do not
            warrant that all content is complete or error-free. Engagement outcomes depend on scope,
            collaboration, and fit.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, {brand.name} is not liable for indirect,
            incidental, or consequential damages arising from use of the site. Liability related to paid
            engagements is governed by the applicable service agreement.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${brand.email}`}>{brand.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
