"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { imgFill } from "@/lib/media";
import { alt } from "@/lib/alt";
import { RECIPES, CONTACT } from "@/lib/content";
import { Instagram, ArrowUpRight } from "./icons";

const EASE = [0.22, 1, 0.36, 1] as const;

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

        {/* Uniform 4:5 grid → flush bottom */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {RECIPES.items.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={reduce ? false : { opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -6% 0px" }}
              transition={{ duration: 0.65, ease: EASE, delay: (i % 3) * 0.07 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-media)]"
              style={{ boxShadow: "var(--shadow-soft)" }}
            >
              <Image
                {...imgFill(r.name)}
                alt={alt(r.name)}
                sizes="(max-width: 1024px) 46vw, 31vw"
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
              />
              <div
                className="absolute inset-0 flex items-end p-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(to top, rgba(20,31,26,0.85) 0%, rgba(20,31,26,0.15) 46%, transparent 72%)",
                }}
              >
                <figcaption
                  className="font-display text-balance lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500"
                  style={{
                    color: "var(--color-cream)",
                    fontSize: "clamp(0.9rem, 0.8rem + 0.35vw, 1.1rem)",
                    fontWeight: 480,
                    lineHeight: 1.2,
                  }}
                >
                  {r.title}
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 flex items-center gap-2 text-[0.92rem]" style={{ color: "var(--color-muted)" }}>
            <ArrowUpRight width={16} height={16} style={{ color: "var(--color-gold-ink)" }} />
            Toate rețetele sunt gătite de mine — dovada că sănătos poate fi și delicios.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
