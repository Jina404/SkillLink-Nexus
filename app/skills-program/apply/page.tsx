import { SkillsForm } from "@/components/forms/SkillsForm";
import { skillsCta } from "@/data/skillsProgram";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Apply to the Skills Program",
  description:
    "Apply to the SkillLink Nexus Skills Program: train, intern on supervised client work and get vetted to join as a contractor.",
  path: "/skills-program/apply",
});



// Same layout as the contractor application page.
export default function SkillsProgramApplyPage() {
  return (
    <main className="page-shell book-page careers-apply-page">
      <div className="book-card careers-apply-card">
        <header className="book-header">
          <h1>{skillsCta.title}</h1>
          <p>{skillsCta.body}</p>
        </header>
        <SkillsForm />
      </div>
    </main>
  );
}
