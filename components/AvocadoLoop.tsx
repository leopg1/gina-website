"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { clsx } from "clsx";

/**
 * Mascota animată (avocado din logo) — loop mut, decorativ.
 * Marginile video-ului sunt topite cu un mask radial ca să se
 * contopească cu fundalul terracotta al secțiunii.
 */
export default function AvocadoLoop({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  // Același pattern verificat ca la video-ul din hero: React nu garantează
  // proprietatea DOM `muted`, iar fără ea autoplay-ul e respins.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => {
      if (!reduce && !document.hidden) v.play?.().catch(() => {});
    };
    tryPlay();
    // browserul pauzează video-urile mute când tab-ul e ascuns; reluăm la revenire
    document.addEventListener("visibilitychange", tryPlay);
    return () => document.removeEventListener("visibilitychange", tryPlay);
  }, [reduce]);

  if (reduce) return null;

  return (
    <video
      ref={ref}
      className={clsx("pointer-events-none select-none", className)}
      src="/video/avocado.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      style={{
        WebkitMaskImage: "radial-gradient(circle, #000 52%, transparent 74%)",
        maskImage: "radial-gradient(circle, #000 52%, transparent 74%)",
      }}
    />
  );
}
