"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { imgFill } from "@/lib/media";
import { alt } from "@/lib/alt";
import { TRANSFORMARI } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Transformari() {
  const reduce = useReducedMotion();
  return (
    <section
      id="rezultate"
      className="section relative overflow-hidden"
      style={{ background: "var(--color-evergreen)", color: "var(--color-cream)" }}
    >
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: "radial-gradient(circle, var(--color-sage), transparent 65%)" }}
      />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow eyebrow-light">{TRANSFORMARI.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-cream)" }}>
              {TRANSFORMARI.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="mt-5 text-[1.08rem]"
              style={{ color: "color-mix(in srgb, var(--color-cream) 80%, transparent)" }}
            >
              {TRANSFORMARI.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {TRANSFORMARI.items.map((it, i) => (
            <motion.figure
              key={it.name}
              initial={reduce ? false : { opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 3) * 0.09 }}
              className="group relative aspect-square overflow-hidden rounded-[var(--radius-media)]"
              style={{
                boxShadow: "var(--shadow-image)",
                border: "1px solid var(--color-line-dark)",
              }}
            >
              <Image
                {...imgFill(it.name)}
                alt={alt(it.name)}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 46vw, 30vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 flex items-end p-4 lg:p-5"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,22,18,0.9) 0%, rgba(14,22,18,0.28) 44%, transparent 70%)",
                }}
              >
                <figcaption>
                  <div
                    className="font-display"
                    style={{
                      color: "var(--color-cream)",
                      fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.28rem)",
                      fontWeight: 480,
                      lineHeight: 1.15,
                    }}
                  >
                    {it.title}
                  </div>
                  <div
                    className="text-[0.82rem] mt-1"
                    style={{ color: "color-mix(in srgb, var(--color-cream) 82%, transparent)" }}
                  >
                    {it.caption}
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <Reveal>
          <p
            className="mt-7 text-[0.8rem] max-w-3xl"
            style={{ color: "color-mix(in srgb, var(--color-cream) 55%, transparent)" }}
          >
            {TRANSFORMARI.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
