import Reveal from "./Reveal";
import AvocadoMark from "./AvocadoMark";
import Squiggle from "./Squiggle";
import { MANIFESTO } from "@/lib/content";

export default function Manifesto() {
  return (
    <section className="section" style={{ background: "var(--color-cream)" }}>
      <div className="container-x max-w-4xl mx-auto text-center">
        <Reveal>
          <span className="eyebrow">{MANIFESTO.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
            {MANIFESTO.title}
          </h2>
          <Squiggle
            className="mx-auto mt-3 h-2.5 w-44"
            style={{ color: "var(--color-gold)" }}
          />
        </Reveal>

        <div className="mt-8 space-y-5 max-w-2xl mx-auto">
          {MANIFESTO.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.06}>
              <p className="lead">{p}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <figure
            className="mt-12 mx-auto max-w-3xl px-6 py-9 rounded-[1.5rem]"
            style={{
              background: "color-mix(in srgb, var(--color-peach) 18%, var(--color-ivory))",
              border: "1px solid color-mix(in srgb, var(--color-rose) 30%, transparent)",
            }}
          >
            <blockquote
              className="font-display italic text-balance"
              style={{
                fontSize: "clamp(1.4rem, 1rem + 1.6vw, 2rem)",
                lineHeight: 1.25,
                color: "var(--color-forest)",
              }}
            >
              „{MANIFESTO.pull}”
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={0.3}>
          <ul className="mt-9 grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-stretch gap-2.5 sm:gap-3 max-w-md sm:max-w-none mx-auto">
            {MANIFESTO.bullets.map((b) => (
              <li
                key={b}
                className="pill w-full sm:w-auto justify-center text-center"
                style={{ fontSize: "0.82rem", padding: "0.6rem 0.9rem" }}
              >
                <AvocadoMark className="w-3.5 shrink-0" style={{ color: "var(--color-moss)" }} />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
