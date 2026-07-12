"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { img } from "@/lib/media";
import { HERO, CONTACT } from "@/lib/content";
import { Instagram, ArrowRight, SoundOn, SoundOff } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [muted, setMuted] = useState(true);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 70]);

  // Ensure cross-browser muted autoplay (React sets `muted` as an attribute,
  // not the property, so we enforce it on the DOM node).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    if (!reduce) v.play?.().catch(() => {});
  }, [reduce]);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted && v.paused) v.play().catch(() => {});
    setMuted(v.muted);
  };

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-28 pb-16 lg:pt-20 lg:pb-8 lg:min-h-screen lg:flex lg:items-center"
    >
      {/* decorative background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-45"
          style={{ background: "radial-gradient(circle, var(--color-peach), transparent 62%)" }}
        />
        <div
          className="absolute top-1/3 -left-40 w-[38rem] h-[38rem] rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(circle, var(--color-sage), transparent 64%)" }}
        />
      </div>

      <div className="container-x w-full grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* — Text — */}
        <motion.div style={{ y }} className="lg:col-span-7 relative z-10">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="pill"
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-rose)" }}
            />
            {HERO.eyebrow}
          </motion.span>

          <h1 className="h-hero mt-6" style={{ color: "var(--color-evergreen)" }}>
            {HERO.titleLines.map((line, i) => (
              <motion.span
                key={i}
                className="block"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.12 + i * 0.1 }}
              >
                {line === HERO.emphasis ? (
                  <em
                    className="italic"
                    style={{ color: "var(--color-gold-ink)", fontWeight: 420 }}
                  >
                    {line}
                  </em>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.45 }}
            className="lead mt-6 max-w-xl"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.58 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn btn-primary">
              {HERO.ctaPrimary}
              <ArrowRight width={18} height={18} />
            </a>
            <a
              href={CONTACT.startHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Instagram width={18} height={18} />
              {HERO.ctaSecondary}
            </a>
          </motion.div>

          <motion.ul
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.72 }}
            className="mt-7 flex flex-wrap gap-2 sm:gap-2.5"
          >
            {HERO.trust.map((t) => (
              <li
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[0.76rem] sm:text-[0.8rem] font-medium leading-none"
                style={{
                  borderColor: "var(--color-line)",
                  color: "var(--color-muted)",
                  background: "color-mix(in srgb, var(--color-ivory) 65%, transparent)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--color-gold)" }}
                />
                {t}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* — Video portrait — */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:w-auto lg:max-w-none lg:h-[min(74vh,42rem)]"
          >
            <div
              className="relative overflow-hidden w-full aspect-[9/16] lg:w-auto lg:h-full"
              style={{
                borderRadius: "13rem 13rem 1.6rem 1.6rem",
                boxShadow: "var(--shadow-image)",
              }}
            >
              <video
                ref={videoRef}
                className="w-full h-full block object-cover"
                src="/video/hero.mp4"
                poster={img("portrait-store").src}
                autoPlay={!reduce}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Gina Tăujan vorbind despre reeducarea alimentară"
              />

              {/* sound toggle */}
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Pornește sunetul" : "Oprește sunetul"}
                className="absolute bottom-4 right-4 inline-flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md transition-transform duration-300 hover:scale-105"
                style={{
                  background: "color-mix(in srgb, var(--color-evergreen) 62%, transparent)",
                  color: "var(--color-cream)",
                  border: "1px solid color-mix(in srgb, var(--color-cream) 35%, transparent)",
                }}
              >
                {muted ? <SoundOff width={19} height={19} /> : <SoundOn width={19} height={19} />}
              </button>
            </div>

            {/* floating community card */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20, x: -10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
              className="absolute -left-3 lg:-left-8 bottom-16 card px-4 py-3 flex items-center gap-3"
              style={{ borderRadius: "1rem" }}
            >
              <span className="text-xl leading-none" aria-hidden>🤍</span>
              <div className="leading-tight">
                <div className="font-display text-lg" style={{ color: "var(--color-evergreen)" }}>
                  ~39.000
                </div>
                <div className="text-[0.68rem]" style={{ color: "var(--color-muted)" }}>
                  comunitate
                </div>
              </div>
            </motion.div>

            {/* floating experience badge */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -16, x: 10 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 1.05 }}
              className="absolute -right-2 lg:-right-6 top-10 card px-4 py-3 text-center"
              style={{ borderRadius: "1rem" }}
            >
              <div className="font-display text-2xl leading-none" style={{ color: "var(--color-gold)" }}>
                7+
              </div>
              <div className="text-[0.66rem] mt-1" style={{ color: "var(--color-muted)" }}>
                ani experiență
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
