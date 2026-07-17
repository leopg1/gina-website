import Reveal from "./Reveal";
import AvocadoLoop from "./AvocadoLoop";
import { METHOD } from "@/lib/content";

export default function Method() {
  return (
    <section
      id="metoda"
      className="section relative overflow-hidden"
      style={{ background: "var(--color-rose)", color: "var(--color-cream)" }}
    >
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-[0.1]"
        style={{ background: "radial-gradient(circle, var(--color-gold-light), transparent 65%)" }}
      />
      <div className="container-x relative">
        <AvocadoLoop className="mx-auto -mt-6 mb-4 w-40 lg:absolute lg:-top-14 lg:right-0 lg:mx-0 lg:my-0 lg:w-[21rem]" />
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow eyebrow-light">{METHOD.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-cream)" }}>
              {METHOD.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="mt-5 text-[1.08rem]"
              style={{ color: "color-mix(in srgb, var(--color-cream) 92%, transparent)" }}
            >
              {METHOD.sub}
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {METHOD.steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 0.08}>
              <div
                className="pb-5 mb-5"
                style={{ borderBottom: "1px solid var(--color-line-dark)" }}
              >
                <span
                  className="font-display block"
                  style={{ fontSize: "3rem", lineHeight: 1, color: "var(--color-gold-light)", fontWeight: 500 }}
                >
                  {s.n}
                </span>
              </div>
              <h3
                className="font-display"
                style={{ fontSize: "1.32rem", color: "var(--color-cream)", fontWeight: 460 }}
              >
                {s.title}
              </h3>
              <p
                className="mt-2.5 text-[0.95rem] leading-relaxed"
                style={{ color: "color-mix(in srgb, var(--color-cream) 90%, transparent)" }}
              >
                {s.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
