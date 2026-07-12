import Reveal from "./Reveal";
import { PRICING } from "@/lib/content";
import { Check, ArrowUpRight, Instagram } from "./icons";

export default function Pricing() {
  return (
    <section id="preturi" className="section" style={{ background: "var(--color-cream)" }}>
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow">{PRICING.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {PRICING.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">{PRICING.sub}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-5 max-w-4xl mx-auto items-stretch">
          {PRICING.cards.map((c, i) => {
            const dark = c.highlight;
            const priceMatch = c.price ? /^(de la\s+)?(.+)$/.exec(c.price) : null;
            const pricePrefix = priceMatch?.[1]?.trim();
            const priceNum = priceMatch?.[2] ?? c.price;
            return (
              <Reveal key={c.name} delay={i * 0.1}>
                <div
                  className="h-full p-8 lg:p-9 rounded-[1.5rem] flex flex-col relative overflow-hidden"
                  style={{
                    background: dark ? "var(--color-evergreen)" : "var(--color-parchment)",
                    color: dark ? "var(--color-cream)" : "var(--color-ink)",
                    border: dark ? "none" : "1px solid var(--color-line)",
                    boxShadow: dark ? "var(--shadow-lift)" : "var(--shadow-soft)",
                  }}
                >
                  {dark && (
                    <span
                      className="inline-flex self-start mb-3 text-[0.66rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{ background: "var(--color-gold)", color: "#2a2113", letterSpacing: "0.1em" }}
                    >
                      Recomandat
                    </span>
                  )}
                  <h3
                    className="font-display"
                    style={{ fontSize: "1.5rem", fontWeight: 460, color: dark ? "var(--color-cream)" : "var(--color-evergreen)" }}
                  >
                    {c.name}
                  </h3>

                  <div className="mt-4 flex items-end gap-x-2 gap-y-1 flex-wrap">
                    {c.price ? (
                      <>
                        {pricePrefix && (
                          <span
                            className="mb-2 text-sm font-medium self-end whitespace-nowrap"
                            style={{ opacity: 0.72 }}
                          >
                            {pricePrefix}
                          </span>
                        )}
                        <span
                          className="font-display leading-none"
                          style={{ fontSize: "clamp(2.4rem, 1.3rem + 4.4vw, 3.4rem)", fontWeight: 380, color: dark ? "var(--color-gold)" : "var(--color-evergreen)" }}
                        >
                          {priceNum}
                        </span>
                        <span className="mb-2 text-lg" style={{ opacity: 0.8 }}>
                          {c.currency}
                        </span>
                      </>
                    ) : (
                      <span
                        className="font-display leading-none"
                        style={{ fontSize: "clamp(1.6rem, 1.1rem + 2vw, 1.9rem)", fontWeight: 400, color: dark ? "var(--color-gold)" : "var(--color-forest)" }}
                      >
                        Personalizat
                      </span>
                    )}
                  </div>

                  <p
                    className="mt-3 text-[0.96rem]"
                    style={{ color: dark ? "color-mix(in srgb, var(--color-cream) 80%, transparent)" : "var(--color-muted)" }}
                  >
                    {c.desc}
                  </p>

                  <ul className="mt-6 space-y-3 flex-1">
                    {c.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3 text-[0.94rem]">
                        <span
                          className="mt-0.5 shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full"
                          style={{
                            background: dark ? "color-mix(in srgb, var(--color-gold) 26%, transparent)" : "color-mix(in srgb, var(--color-sage) 24%, transparent)",
                            color: dark ? "var(--color-gold)" : "var(--color-moss)",
                          }}
                        >
                          <Check width={12} height={12} />
                        </span>
                        <span style={{ color: dark ? "color-mix(in srgb, var(--color-cream) 88%, transparent)" : "var(--color-ink)" }}>
                          {inc}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn mt-8 ${dark ? "btn-on-dark" : "btn-ghost"}`}
                  >
                    {dark ? (
                      <>
                        <Instagram width={17} height={17} />
                        {c.cta}
                      </>
                    ) : (
                      <>
                        {c.cta}
                        <ArrowUpRight width={16} height={16} />
                      </>
                    )}
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-7 text-center text-[0.9rem] max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            {PRICING.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
