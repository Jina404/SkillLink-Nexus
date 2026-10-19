import type { CSSProperties } from "react";
import Image from "next/image";
import { partners, partnersSection } from "@/data/tools";

export function ToolsFluent() {
  return (
    <section className="section tools-section">
      <div className="container tools-inner">
        <h2>{partnersSection.title}</h2>
        <p className="tools-sub">{partnersSection.subtitle}</p>

        <div className="partner-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                sizes="320px"
                style={{ "--logo-scale": partner.artScale } as CSSProperties}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
