import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStoryBySlug, stories } from "@/data/stories";
import { SITE_NAME, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) return {};
  // Keep titles under 60 characters: drop the site name when it would not fit.
  const fits = `${story.title} | ${SITE_NAME}`.length < 60;
  return pageMetadata({
    title: story.title,
    absoluteTitle: !fits,
    description: story.summary,
    path: `/stories/${story.slug}`,
  });
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);
  if (!story) notFound();

  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container prose-article">
          <p className="eyebrow">
            <Link href="/stories" style={{ color: "var(--brand)" }}>
              ← All stories
            </Link>
          </p>
          <div className="resource-meta">
            <span className="resource-type">{story.type}</span>
            <span>{story.category}</span>
            <span>{story.readTime}</span>
          </div>
          <h1>{story.title}</h1>
          <p>{story.summary}</p>
        </div>
      </section>

      <section className="section-tight">
        <div className="container prose-article">
          <p>{story.body}</p>
          <div style={{ marginTop: 32 }}>
            <Link href="/request-a-project" className="btn btn-primary">
              Get a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
