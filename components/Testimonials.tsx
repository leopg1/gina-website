import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";
import { Quote } from "./icons";
import CountUp from "./CountUp";

export default function Testimonials() {
  return (
    <section className="section" style={{ background: "var(--color-ivory)" }}>
      <div className="container-x">
        {/* Stats band */}
        <Reveal>
          <div
            className="rounded-[1.5rem] px-6 py-8 lg:px-10 lg:py-10 grid grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ background: "var(--color-sand)" }}
          >
            {TESTIMONIALS.stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(1.9rem, 1.2rem + 2vw, 2.9rem)", color: "var(--color-evergreen)", fontWeight: 400 }}
                >
                  <CountUp to={s.to} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="text-[0.82rem] mt-2" style={{ color: "var(--color-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow">{TESTIMONIALS.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {TESTIMONIALS.title}
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <figure
                className="h-full card p-7 flex flex-col"
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <span style={{ color: "var(--color-blush)" }}>
                  <Quote width={32} height={32} />
                </span>
                <blockquote
                  className="mt-4 flex-1 font-display italic text-balance"
                  style={{ fontSize: "1.22rem", lineHeight: 1.35, color: "var(--color-forest)" }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-5 pt-4 text-[0.85rem] font-medium"
                  style={{ borderTop: "1px solid var(--color-line)", color: "var(--color-muted)" }}
                >
                  — {t.author}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
