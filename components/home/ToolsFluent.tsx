"use client";

import { useState } from "react";
import { toolLogoSrc, toolRows, toolsSection, type ToolItem } from "@/data/tools";

function ToolPill({ tool }: { tool: ToolItem }) {
  const [failed, setFailed] = useState(false);
  const initial = tool.name.trim().charAt(0).toUpperCase();

  return (
    <span className="tool-pill">
      {failed ? (
        <span className="tool-mark tool-mark-fallback" aria-hidden>
          {initial}
        </span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={toolLogoSrc(tool)}
          alt=""
          className="tool-logo"
          width={20}
          height={20}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
      {tool.name}
    </span>
  );
}

export function ToolsFluent() {
  return (
    <section className="section tools-section">
      <div className="container tools-inner">
        <h2>{toolsSection.title}</h2>
        {toolsSection.lines.map((line) => (
          <p key={line} className="tools-sub">
            {line}
          </p>
        ))}

        <div className="tools-cloud" aria-label="Supported tools">
          {toolRows.map((row, i) => (
            <div key={i} className="tools-row">
              {row.map((tool) => (
                <ToolPill key={tool.name} tool={tool} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
