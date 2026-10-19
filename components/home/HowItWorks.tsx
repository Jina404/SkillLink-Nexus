"use client";

import Link from "next/link";
import { useState } from "react";
import { howItWorks, matchingQuiz, type HowItWorksAudience } from "@/data/howItWorks";
import { IconSparkBadge, optionIcon } from "@/components/ui/icons";

export function MatchingQuiz() {
  const q = matchingQuiz.questions[0];

  return (
    <section className="quiz-section section-soft">
      <div className="container">
        <div className="quiz-layout">
          <div className="quiz-copy">
            <div className="quiz-badge">
              <span className="spark icon-bare">
                <IconSparkBadge />
              </span>
              {matchingQuiz.badge}
            </div>
            <h2>{matchingQuiz.title}</h2>
            <p>{matchingQuiz.subtitle}</p>
          </div>

          <div className="quiz-card">
            <h3>{q.prompt}</h3>
            <div className="quiz-options">
              {q.options.map((opt) => {
                const Icon = optionIcon(opt.icon);
                return (
                  <Link key={opt.label} href={opt.href} className="quiz-option">
                    <span className="ico">
                      <Icon />
                    </span>
                    {opt.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export type HowItWorksVisuals = {
  needLabel: string;
  needTasks: { label: string; on: boolean }[];
  styleBadge: string;
  styleTitle: string;
  prefs: { left: string; right: string; value: number }[];
  match: { initials: string; name: string; role: string; tag: string; status: string; eta: string };
};

const defaultVisuals: HowItWorksVisuals = {
  needLabel: "What you need",
  needTasks: [
    { label: "Website", on: true },
    { label: "Brand", on: true },
    { label: "Content", on: true },
    { label: "Data", on: false },
  ],
  styleBadge: "Project scope",
  styleTitle: "Written quote",
  prefs: [
    { left: "Brief", right: "Scoped", value: 68 },
    { left: "Timeline", right: "Agreed", value: 82 },
    { left: "Price", right: "Quoted", value: 74 },
  ],
  match: {
    initials: "C",
    name: "Vetted contractor",
    role: "Matched to your project",
    tag: "Matched",
    status: "Managed by SkillLink",
    eta: "Skills vetted",
  },
};

export function HowItWorks({
  showProcessLink = true,
  audiences = howItWorks,
  visuals = defaultVisuals,
}: {
  showProcessLink?: boolean;
  audiences?: HowItWorksAudience[];
  visuals?: HowItWorksVisuals;
}) {
  const [tab, setTab] = useState<string>(audiences[0].id);
  const audience = audiences.find((a) => a.id === tab) ?? audiences[0];
  const preview = audience.steps.slice(0, 3);

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-heading row">
          <div>
            <h2>How it works</h2>
            <p>{audience.heading}</p>
          </div>
          {audiences.length > 1 ? (
          <div className="how-tabs" role="tablist" aria-label="Audience">
            {audiences.map((a) => (
              <button
                key={a.id}
                type="button"
                role="tab"
                className={tab === a.id ? "active" : ""}
                aria-selected={tab === a.id}
                onClick={() => setTab(a.id)}
              >
                {a.label}
              </button>
            ))}
          </div>
          ) : null}
        </div>

        <div className="how-steps">
          {preview.map((step, i) => (
            <article
              key={`${audience.id}-preview-${step.title}`}
              className={`how-card ${i === 0 ? "tone-a" : i === 1 ? "tone-b" : "tone-c"}`}
            >
              <div className="how-card-visual" aria-hidden="true">
                {i === 0 ? <NeedVisual v={visuals} /> : null}
                {i === 1 ? <StyleVisual v={visuals} /> : null}
                {i === 2 ? <MatchVisual v={visuals} /> : null}
              </div>
              <div className="how-card-copy">
                <div className="step-num">Step {i + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="how-list">
          {audience.steps.map((step, i) => (
            <div key={`${audience.id}-step-${step.title}`} className="how-list-item">
              <div className="num">{i + 1}</div>
              <div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {showProcessLink ? (
          <div style={{ marginTop: 28 }}>
            <Link href="/how-it-works" className="btn btn-outline">
              See the full process
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function NeedVisual({ v }: { v: HowItWorksVisuals }) {
  const tasks = v.needTasks;

  return (
    <div className="hiw-glass">
      <div className="hiw-glass-bar">
        <span className="hiw-dot" />
        <span className="hiw-dot" />
        <span className="hiw-dot" />
        <span className="hiw-glass-label">{v.needLabel}</span>
      </div>
      <div className="hiw-checks">
        {tasks.map((task) => (
          <span key={task.label} className={`hiw-check ${task.on ? "on" : ""}`}>
            <span className="hiw-check-mark" />
            {task.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function StyleVisual({ v }: { v: HowItWorksVisuals }) {
  const prefs = v.prefs;

  return (
    <div className="hiw-prefs">
      <div className="hiw-persona">
        <span className="hiw-persona-badge">{v.styleBadge}</span>
        <strong>{v.styleTitle}</strong>
      </div>
      {prefs.map((pref) => (
        <div key={pref.left} className="hiw-pref">
          <div className="hiw-pref-labels">
            <span>{pref.left}</span>
            <span>{pref.right}</span>
          </div>
          <div className="hiw-slider" style={{ ["--fill" as string]: `${pref.value}%` }}>
            <i style={{ left: `${pref.value}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchVisual({ v }: { v: HowItWorksVisuals }) {
  return (
    <div className="hiw-match">
      <div className="hiw-match-top">
        <div className="hiw-avatar" aria-hidden>
          {v.match.initials}
        </div>
        <div className="hiw-match-meta">
          <strong>{v.match.name}</strong>
          <span className="hiw-role">{v.match.role}</span>
        </div>
        <span className="hiw-match-tag">{v.match.tag}</span>
      </div>
      <div className="hiw-match-foot">
        <span className="hiw-status">
          <i />
          {v.match.status}
        </span>
        <span className="hiw-eta">{v.match.eta}</span>
      </div>
    </div>
  );
}
