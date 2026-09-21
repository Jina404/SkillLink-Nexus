import Link from "next/link";
import { notFound } from "next/navigation";
import { getResourceBySlug, resources } from "@/data/resources";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container prose-article">
          <p className="eyebrow">
            <Link href="/resources" style={{ color: "var(--brand)" }}>
              Resources
            </Link>{" "}
            / {resource.type}
          </p>
          <h1>{resource.title}</h1>
          <p>
            {resource.category} · {resource.readTime} read
          </p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose-article">
          {resource.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <div style={{ marginTop: 32 }}>
            <Link href="/get-an-ea" className="btn btn-primary">
              Get started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
