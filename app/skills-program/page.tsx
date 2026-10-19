import { CareersHero } from "@/components/careers/CareersHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CTABand, HiringOptions } from "@/components/home/HiringOptions";
import {
  skillsCta,
  skillsDetails,
  skillsHero,
  skillsPathway,
  skillsPathwayVisuals,
  skillsTracks,
} from "@/data/skillsProgram";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Skills Program",
  description:
    "Train, intern and get vetted. The SkillLink Nexus Skills Program takes you from learning a skill to working on real client projects.",
  path: "/skills-program",
});



// Built only from existing components and existing CSS classes.
export default function SkillsProgramPage() {
  return (
    <main className="page-shell">
      <CareersHero content={skillsHero} />

      <HowItWorks
        showProcessLink={false}
        audiences={skillsPathway}
        visuals={skillsPathwayVisuals}
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>{skillsTracks.heading}</h2>
          </div>
          <div className="service-grid">
            {skillsTracks.items.map((t) => (
              <div key={t.title} className="service-card">
                <h4>{t.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HiringOptions
        heading={skillsDetails.heading}
        sub={skillsDetails.sub}
        items={skillsDetails.items}
        badge={skillsDetails.badge}
        note={null}
      />


      <CTABand
        title={skillsCta.title}
        body={skillsCta.body}
        primary={skillsCta.primary}
        secondary={skillsCta.secondary}
      />
    </main>
  );
}
