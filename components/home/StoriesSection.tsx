import { StoryCards } from "@/components/stories/StoryCards";

export function StoriesSection() {
  return (
    <section className="section section-soft">
      <div className="container">
        <div className="section-heading">
          <h2>Stories and updates</h2>
          <p>Guides, updates and sample projects from SkillLink Nexus.</p>
        </div>
        <StoryCards />
      </div>
    </section>
  );
}
