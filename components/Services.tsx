"use client";

import { motion, useReducedMotion } from "motion/react";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/content";
import { Sparkle, Video, Coffee, Users, HeartPulse, Leaf, ArrowUpRight } from "./icons";
import type { ComponentType, SVGProps } from "react";

const ICONS: ComponentType<SVGProps<SVGSVGElement>>[] = [
  Sparkle,
  Video,
  Coffee,
  Users,
  HeartPulse,
  Leaf,
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Services() {
  const reduce = useReducedMotion();
  return (
    <section id="programe" className="section" style={{ background: "var(--color-cream)" }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{SERVICES.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {SERVICES.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">{SERVICES.sub}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.items.map((s, i) => {
            const Icon = ICONS[i] ?? Sparkle;
            const external = s.href?.startsWith("http");
            return (
              <motion.article
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: EASE, delay: (i % 3) * 0.08 }}
                className="card card-hover p-7 group relative flex flex-col"
              >
                {s.tag && (
                  <span
                    className="absolute top-5 right-5 text-[0.66rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      background: "var(--color-blush)",
                      color: "var(--color-clay)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {s.tag}
                  </span>
                )}
                <span
                  className="icon-chip inline-flex items-center justify-center w-12 h-12 rounded-2xl"
                  style={{
                    background: "color-mix(in srgb, var(--color-sage) 20%, var(--color-ivory))",
                    color: "var(--color-forest)",
                  }}
                >
                  <Icon width={23} height={23} />
                </span>
                <h3
                  className="font-display mt-5"
                  style={{ fontSize: "1.35rem", color: "var(--color-evergreen)", fontWeight: 460 }}
                >
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[0.96rem] leading-relaxed flex-1" style={{ color: "var(--color-muted)" }}>
                  {s.desc}
                </p>
                {s.cta && (
                  <a
                    href={s.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-semibold w-fit"
                    style={{ color: "var(--color-forest)" }}
                  >
                    <span className="link-underline">{s.cta}</span>
                    <ArrowUpRight
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
