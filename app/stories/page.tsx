import { StoryCards } from "@/components/stories/StoryCards";
import { storyFilters, type StoryFilterKey } from "@/data/stories";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Stories and Updates",
  description: "Guides, updates and sample projects from SkillLink Nexus.",
  path: "/stories",
});

type Props = { searchParams: Promise<{ type?: string }> };

export default async function StoriesPage({ searchParams }: Props) {
  const { type } = await searchParams;
  const initial = storyFilters.some((f) => f.key === type) ? (type as StoryFilterKey) : "all";
  return (
    <main className="page-shell">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Stories</p>
          <h1>Stories and updates</h1>
          <p>Guides, updates and sample projects from SkillLink Nexus.</p>
        </div>
      </section>
      <section className="section-tight">
        <div className="container">
          <StoryCards key={initial} initialFilter={initial} />
        </div>
      </section>
    </main>
  );
}
