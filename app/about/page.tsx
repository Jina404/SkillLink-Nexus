import Link from "next/link";
import { CTABand } from "@/components/home/HiringOptions";
import { ToolsFluent } from "@/components/home/ToolsFluent";
import { brand } from "@/data/navigation";
import { categories } from "@/data/categories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "SkillLink Nexus Ltd is a managed technology services company in Nairobi, Kenya, delivering technology projects through vetted contractors.",
  path: "/about",
});

const principles = [
  {
    title: "One contract, one invoice",
    text: "Clients contract with and pay SkillLink Nexus Ltd only, with one team accountable for the result.",
  },
  {
    title: "Written quote first",
    text: "Clients receive a written quote for their exact scope before any work begins, and pay for finished work, not hours.",
  },
  {
    title: "Vetted contractors",
    text: "Contractors are assessed on their skills before they are matched to any project.",
  },
  {
    title: "Quality checked",
    text: "We manage communication and deadlines, and review every deliverable before it reaches the client.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About us</p>
          <h1>About SkillLink Nexus</h1>
          <p>
            {brand.legalName} is a managed technology services company based in Nairobi, Kenya.
            Clients tell us what they need built, designed or analyzed. We scope it, send a written
            quote, match a vetted contractor, manage delivery and check the quality before it
            reaches them.
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>How we work</h2>
          </div>
          <div className="service-grid">
            {principles.map((p) => (
              <div key={p.title} className="service-card">
                <h4>{p.title}</h4>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>What we do</h2>
            <p>Written quotes. Vetted contractors. Managed by SkillLink Nexus.</p>
          </div>
          <div className="service-grid">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services/${cat.slug}`} className="service-card">
                <h4>{cat.name}</h4>
                <p>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ToolsFluent />

      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <h2>Company details</h2>
          </div>
          <div className="service-grid">
            <div className="service-card">
              <h4>Registered name</h4>
              <p>{brand.legalName}</p>
            </div>
            <div className="service-card">
              <h4>Registration number</h4>
              <p>{brand.regNo}</p>
            </div>
            <div className="service-card">
              <h4>Location</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
