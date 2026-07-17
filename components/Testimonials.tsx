import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/content";
import CountUp from "./CountUp";

const TIMES = ["09:41", "14:27", "21:05"];
const TILTS = [-0.4, 0.3, -0.3];

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
              <figure className="h-full flex flex-col">
                {/* Bula de mesaj primit */}
                <blockquote
                  className="flex-1"
                  style={{
                    background: "var(--color-parchment)",
                    border: "1px solid var(--color-line)",
                    borderRadius: "1.1rem 1.1rem 1.1rem 0.35rem",
                    padding: "1.25rem",
                    boxShadow: "var(--shadow-soft)",
                    transform: `rotate(${TILTS[i % TILTS.length]}deg)`,
                  }}
                >
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "var(--color-ink)" }}>
                    {t.quote}
                  </p>
                  <div
                    className="mt-2 flex justify-end items-center gap-1"
                    aria-hidden="true"
                  >
                    <span className="text-[0.68rem]" style={{ color: "var(--color-faint)" }}>
                      {TIMES[i % TIMES.length]}
                    </span>
                    <span className="text-[0.72rem]" style={{ color: "var(--color-faint)" }}>
                      ✓✓
                    </span>
                  </div>
                </blockquote>

                {/* Autor, sub bulă */}
                <figcaption className="mt-3 flex items-center gap-2.5 pl-1">
                  <span
                    className="rounded-full flex items-center justify-center font-display"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      background: "color-mix(in srgb, var(--color-blush) 60%, var(--color-ivory))",
                      border: "1px solid var(--color-line)",
                      color: "var(--color-clay)",
                      fontSize: "0.9rem",
                    }}
                    aria-hidden="true"
                  >
                    {t.author.charAt(0)}
                  </span>
                  <span className="text-[0.85rem] font-semibold" style={{ color: "var(--color-forest)" }}>
                    {t.author}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
