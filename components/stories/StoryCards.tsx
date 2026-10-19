"use client";

import Link from "next/link";
import { useState } from "react";
import { stories, storyFilters, type StoryFilterKey } from "@/data/stories";

/** Story cards with All / Guides / Updates / Samples filters (filtered in the browser). */
export function StoryCards({ initialFilter = "all" }: { initialFilter?: StoryFilterKey }) {
  const [filter, setFilter] = useState<StoryFilterKey>(initialFilter);
  const active = storyFilters.find((f) => f.key === filter);
  const shown =
    active && "type" in active ? stories.filter((s) => s.type === active.type) : stories;

  return (
    <>
      <div className="topic-row" role="group" aria-label="Filter stories">
        {storyFilters.map((f) => (
          <button
            key={f.key}
            type="button"
            className="topic-chip"
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="sr-only-status" aria-live="polite">
        {`Showing ${shown.length} ${shown.length === 1 ? "story" : "stories"}`}
      </p>

      <div className="resource-grid">
        {shown.map((s) => (
          <Link key={s.slug} href={`/stories/${s.slug}`} className="resource-card">
            <div className="resource-meta">
              <span className="resource-type">{s.type}</span>
              <span>{s.category}</span>
              <span>{s.readTime}</span>
            </div>
            <h3>{s.title}</h3>
            <p>{s.summary}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
