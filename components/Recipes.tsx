"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { imgFill } from "@/lib/media";
import { alt } from "@/lib/alt";
import { RECIPES, CONTACT } from "@/lib/content";
import { Instagram, ArrowUpRight } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Rotații alternante pentru polaroide (grade) — ca pozele prinse pe frigider. */
const ROTS = [-2, 1.6, -1.2, 2, -1.6, 1.1];

export default function Recipes() {
  const reduce = useReducedMotion();
  return (
    <section id="retete" className="section" style={{ background: "var(--color-cream)" }}>
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">{RECIPES.eyebrow}</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
                {RECIPES.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-5">{RECIPES.intro}</p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost shrink-0"
            >
              <Instagram width={17} height={17} />
              Mai multe rețete pe Instagram
            </a>
          </Reveal>
        </div>

        {/* Polaroide rotite cu bandă adezivă — ca pozele prinse pe frigider */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {RECIPES.items.map((r, i) => {
            const rot = ROTS[i % ROTS.length];
            return (
              <motion.div
                key={r.name}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                transition={{ duration: 0.65, ease: EASE, delay: (i % 3) * 0.07 }}
              >
                <figure
                  className="polaroid group rotate-[var(--rot)] transition-[rotate,translate,box-shadow] duration-500 hover:rotate-0 hover:-translate-y-1.5 hover:[box-shadow:var(--shadow-lift)]!"
                  style={{ ["--rot"]: `${rot}deg` } as React.CSSProperties}
                >
                  <span
                    className="polaroid-tape"
                    aria-hidden
                    style={{ transform: `translateX(-50%) rotate(${i % 2 ? 2.5 : -3}deg)` }}
                  />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                    <Image
                      {...imgFill(r.name)}
                      alt={alt(r.name)}
                      sizes="(max-width: 1024px) 46vw, 31vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="font-display py-3 text-center text-balance"
                    style={{
                      color: "var(--color-ink)",
                      fontSize: "1.02rem",
                      fontWeight: 500,
                      lineHeight: 1.25,
                    }}
                  >
                    {r.title}
                  </figcaption>
                </figure>
              </motion.div>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-6 flex items-center gap-2 text-[0.92rem]" style={{ color: "var(--color-muted)" }}>
            <ArrowUpRight width={16} height={16} style={{ color: "var(--color-gold-ink)" }} />
            Toate sunt gătite de Gina, în bucătăria ei.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
