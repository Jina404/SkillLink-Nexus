"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { careersHero } from "@/data/careers";

export function CareersHero({ content = careersHero }: { content?: typeof careersHero } = {}) {
  const bgVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = bgVideoRef.current;
    if (!video) return;

    const applySlowPlay = () => {
      video.playbackRate = 0.25;
      video.defaultPlaybackRate = 0.25;
      void video.play().catch(() => {});
    };

    applySlowPlay();
    video.addEventListener("loadeddata", applySlowPlay);
    video.addEventListener("canplay", applySlowPlay);
    video.addEventListener("play", applySlowPlay);
    return () => {
      video.removeEventListener("loadeddata", applySlowPlay);
      video.removeEventListener("canplay", applySlowPlay);
      video.removeEventListener("play", applySlowPlay);
    };
  }, []);

  return (
    <section className="hero-wrap hero-fullbleed careers-hero-wrap" aria-label={content.eyebrow}>
      <div className="hero-fullbleed-bg" aria-hidden="true">
        <video
          ref={bgVideoRef}
          className="hero-fullbleed-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/herosection-poster.jpg"
          src="/herosection.mp4"
        />
        <div className="hero-fullbleed-fade" />
      </div>

      <div className="container careers-hero-inner">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="careers-hero-sub">{content.subtitle}</p>
        <div className="careers-hero-actions">
          <Link href={content.primaryCta.href} className="btn btn-primary btn-lg">
            {content.primaryCta.label}
          </Link>
          <Link href={content.secondaryCta.href} className="btn btn-outline btn-lg">
            {content.secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
