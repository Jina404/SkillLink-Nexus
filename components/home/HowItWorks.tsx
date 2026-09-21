"use client";

import Link from "next/link";
import { useState } from "react";
import { howItWorks, matchingQuiz } from "@/data/howItWorks";
import { IconClock, IconInbox, IconProjects, IconSpark, IconTravel } from "@/components/ui/icons";

function optionIcon(icon: string) {
  switch (icon) {
    case "clock":
    case "focus":
      return IconClock;
    case "inbox":
      return IconInbox;
    case "travel":
      return IconTravel;
    case "ops":
      return IconProjects;
    default:
      return IconSpark;
  }
}

export function MatchingQuiz() {
  const q = matchingQuiz.questions[0];

  return (
    <section className="quiz-section section-soft">
      <div className="container">
        <div className="quiz-layout">
          <div className="quiz-copy">
            <div className="quiz-badge">
              <span className="spark">
                <IconSpark />
              </span>
              {matchingQuiz.badge}
            </div>
            <h2>{matchingQuiz.title}</h2>
            <p>{matchingQuiz.subtitle}</p>
          </div>

          <div className="quiz-card">
            <div className="quiz-progress">
              <span>Question 1 of 3</span>
              <div className="progress-bars" aria-hidden>
                <span className="on" />
                <span />
                <span />
              </div>
            </div>
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

export function HowItWorks({ showProcessLink = true }: { showProcessLink?: boolean }) {
  const [tab, setTab] = useState<"executives" | "assistants">("executives");
  const audience = howItWorks.find((a) => a.id === tab) ?? howItWorks[0];
  const preview = audience.steps.slice(0, 3);

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-heading row">
          <div>
            <h2>How it works</h2>
            <p>{audience.heading}</p>
          </div>
          <div className="how-tabs" role="tablist" aria-label="Audience">
            {howItWorks.map((a) => (
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
        </div>

        <div className="how-steps">
          {preview.map((step, i) => (
            <article
              key={`${audience.id}-preview-${step.title}`}
              className={`how-card ${i === 0 ? "tone-a" : i === 1 ? "tone-b" : "tone-c"}`}
            >
              <div className="step-num">Step {i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
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
