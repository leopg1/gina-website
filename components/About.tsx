import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { imgProps } from "@/lib/media";
import { alt } from "@/lib/alt";
import { ABOUT } from "@/lib/content";

export default function About() {
  return (
    <section id="despre" className="section" style={{ background: "var(--color-ivory)" }}>
      <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* portrait */}
        <div className="lg:col-span-5">
          <Reveal y={32}>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[1.8rem] opacity-70"
                style={{ background: "var(--color-sand)" }}
              />
              <div
                className="relative overflow-hidden rounded-[1.5rem]"
                style={{ boxShadow: "var(--shadow-image)" }}
              >
                <Parallax amount={24}>
                  <Image
                    {...imgProps("portrait-store")}
                    alt={alt("portrait-store")}
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="w-full h-auto scale-[1.08]"
                  />
                </Parallax>
              </div>
              <div
                className="absolute -bottom-5 left-6 right-6 card px-5 py-4 flex items-center gap-3"
                style={{ borderRadius: "1rem" }}
              >
                <span
                  className="font-display text-2xl leading-none"
                  style={{ color: "var(--color-gold)" }}
                >
                  ❝
                </span>
                <p
                  className="font-display italic"
                  style={{ fontSize: "1.02rem", lineHeight: 1.3, color: "var(--color-forest)" }}
                >
                  {ABOUT.quoteCard}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* text */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="eyebrow">{ABOUT.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {ABOUT.title}
            </h2>
          </Reveal>

          <div className="mt-7 space-y-4 max-w-xl">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 + i * 0.05}>
                <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
            {ABOUT.credentials.map((c, i) => (
              <Reveal key={c.title} delay={0.12 + i * 0.06}>
                <div className="flex gap-3.5">
                  <span
                    className="mt-1.5 shrink-0 w-2 h-2 rounded-full"
                    style={{ background: "var(--color-gold)" }}
                  />
                  <div>
                    <h3
                      className="font-display"
                      style={{ fontSize: "1.12rem", color: "var(--color-evergreen)", fontWeight: 460 }}
                    >
                      {c.title}
                    </h3>
                    <p className="text-[0.92rem] mt-1" style={{ color: "var(--color-muted)" }}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
