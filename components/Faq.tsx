"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { FAQ } from "@/lib/content";
import { Plus } from "./icons";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section" style={{ background: "var(--color-ivory)" }}>
      <div className="container-x grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">{FAQ.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {FAQ.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <ul>
            {FAQ.items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={i} style={{ borderTop: "1px solid var(--color-line)" }}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.15rem, 1rem + 0.6vw, 1.42rem)",
                        color: "var(--color-evergreen)",
                        fontWeight: 460,
                      }}
                    >
                      {it.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="shrink-0 mt-1 inline-flex items-center justify-center w-8 h-8 rounded-full"
                      style={{
                        background: isOpen ? "var(--color-evergreen)" : "var(--color-sand)",
                        color: isOpen ? "var(--color-cream)" : "var(--color-forest)",
                      }}
                    >
                      <Plus width={16} height={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{ overflow: "hidden" }}
                      >
                        <p
                          className="pb-6 pr-12 text-[1.02rem] leading-relaxed max-w-2xl"
                          style={{ color: "var(--color-muted)" }}
                        >
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
