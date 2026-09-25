"use client";

import { useEffect, useRef } from "react";

const SKILLS_PLAYBACK_RATE = 0.2;

export function SkillsVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const applySlowPlay = () => {
      if (video.playbackRate !== SKILLS_PLAYBACK_RATE) {
        video.playbackRate = SKILLS_PLAYBACK_RATE;
      }
      video.defaultPlaybackRate = SKILLS_PLAYBACK_RATE;
      if (video.paused) {
        void video.play().catch(() => {});
      }
    };

    applySlowPlay();
    video.addEventListener("loadeddata", applySlowPlay);
    video.addEventListener("canplay", applySlowPlay);
    video.addEventListener("play", applySlowPlay);
    video.addEventListener("ratechange", applySlowPlay);
    return () => {
      video.removeEventListener("loadeddata", applySlowPlay);
      video.removeEventListener("canplay", applySlowPlay);
      video.removeEventListener("play", applySlowPlay);
      video.removeEventListener("ratechange", applySlowPlay);
    };
  }, []);

  return (
    <div className="skills-video-wrap" aria-hidden="true">
      <video
        ref={ref}
        className="skills-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/skills-poster.jpg"
        src="/skills.mp4"
      />
      <div className="skills-video-veil" />
    </div>
  );
}
