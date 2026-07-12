import Reveal from "./Reveal";
import { JOURNEY, CONTACT } from "@/lib/content";
import { Check, Instagram, ArrowRight } from "./icons";

export default function Journey() {
  return (
    <section id="cum-decurge" className="section" style={{ background: "var(--color-ivory)" }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{JOURNEY.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {JOURNEY.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">{JOURNEY.intro}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
          {JOURNEY.phases.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <div
                className="h-full p-8 lg:p-9 rounded-[1.5rem] flex flex-col relative overflow-hidden"
                style={{
                  background: "var(--color-parchment)",
                  border: "1px solid var(--color-line)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                {/* big ghost number */}
                <span
                  aria-hidden
                  className="font-display absolute -top-4 right-4 select-none"
                  style={{
                    fontSize: "8rem",
                    lineHeight: 1,
                    color: "var(--color-sand)",
                    opacity: 0.55,
                    fontWeight: 380,
                  }}
                >
                  {i + 1}
                </span>

                <div className="flex items-center gap-3 relative">
                  <span className="pill" style={{ fontSize: "0.76rem" }}>
                    {p.label}
                  </span>
                  <span
                    className="text-[0.82rem] font-semibold"
                    style={{ color: "var(--color-gold-ink)" }}
                  >
                    {p.days}
                  </span>
                </div>

                <h3
                  className="font-display mt-5 relative"
                  style={{ fontSize: "1.7rem", color: "var(--color-evergreen)", fontWeight: 440 }}
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-relaxed relative" style={{ color: "var(--color-muted)" }}>
                  {p.desc}
                </p>

                <ul className="mt-6 space-y-3 relative">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-[0.95rem]">
                      <span
                        className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full"
                        style={{
                          background: "color-mix(in srgb, var(--color-sage) 24%, transparent)",
                          color: "var(--color-moss)",
                        }}
                      >
                        <Check width={12} height={12} />
                      </span>
                      <span style={{ color: "var(--color-ink)" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* daily-support banner */}
        <Reveal delay={0.15}>
          <div
            className="mt-6 p-7 lg:p-8 rounded-[1.5rem] flex flex-col md:flex-row md:items-center gap-6 justify-between"
            style={{ background: "var(--color-evergreen)", color: "var(--color-cream)" }}
          >
            <div className="flex items-start gap-4 max-w-2xl">
              <span className="text-2xl leading-none shrink-0" aria-hidden>💚</span>
              <p
                className="font-display"
                style={{ fontSize: "clamp(1.1rem, 0.95rem + 0.7vw, 1.4rem)", lineHeight: 1.35, color: "var(--color-cream)" }}
              >
                {JOURNEY.support}
              </p>
            </div>
            <a
              href={CONTACT.startHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark shrink-0"
            >
              <Instagram width={18} height={18} />
              Scrie-mi START
              <ArrowRight width={16} height={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
