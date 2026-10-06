import Image from "next/image";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { imgProps } from "@/lib/media";
import { alt } from "@/lib/alt";
import { GINA } from "@/lib/content";
import { BIO_SOURCES } from "@/lib/press";

// Numerotăm sursele în ordinea primei apariții, ca note de subsol.
const ORDER: string[] = [];
for (const p of GINA.paragraphs) for (const r of p.refs) if (!ORDER.includes(r)) ORDER.push(r);
const num = (k: string) => ORDER.indexOf(k) + 1;

export default function About() {
  return (
    <section id="despre" className="section" style={{ background: "var(--color-ivory)" }}>
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow">{GINA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {GINA.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead mt-5">{GINA.lead}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* portret + fișă */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
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
                <figure
                  className="absolute -bottom-6 left-5 right-5 card px-5 py-4"
                  style={{ borderRadius: "1rem" }}
                >
                  <blockquote
                    className="font-display italic"
                    style={{ fontSize: "1rem", lineHeight: 1.3, color: "var(--color-forest)" }}
                  >
                    „{GINA.quoteCard}”
                  </blockquote>
                  <figcaption className="mt-1.5 text-[0.78rem]" style={{ color: "var(--color-faint)" }}>
                    Gina Tăujan, {GINA.quoteSource}
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <dl
                className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.1rem]"
                style={{ background: "var(--color-line)", border: "1px solid var(--color-line)" }}
              >
                {GINA.facts.map((f) => (
                  <div key={f.k} className="p-4" style={{ background: "var(--color-parchment)" }}>
                    <dt className="text-[0.72rem] uppercase tracking-[0.12em]" style={{ color: "var(--color-faint)" }}>
                      {f.k}
                    </dt>
                    <dd className="mt-1 text-[0.95rem]" style={{ color: "var(--color-evergreen)" }}>
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* poveste, cu note de subsol */}
          <div className="lg:col-span-7">
            <div className="space-y-5 max-w-xl">
              {GINA.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.04 + i * 0.03}>
                  <p style={{ color: "var(--color-ink)", fontSize: "1.06rem", lineHeight: 1.7 }}>
                    {p.text}
                    {p.refs.map((r) => (
                      <a
                        key={r}
                        href={`#sursa-${r}`}
                        className="align-super text-[0.7rem] font-semibold ml-0.5"
                        style={{ color: "var(--color-gold-ink)" }}
                        aria-label={`Sursa ${num(r)}: ${BIO_SOURCES[r].label}`}
                      >
                        [{num(r)}]
                      </a>
                    ))}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* cronologie */}
            <Reveal delay={0.1}>
              <h3 className="h3 mt-14" style={{ color: "var(--color-evergreen)" }}>
                Pe scurt, an cu an
              </h3>
            </Reveal>
            <ol className="mt-6 relative border-l-2 ml-2" style={{ borderColor: "var(--color-sage)" }}>
              {GINA.timeline.map((t, i) => (
                <Reveal key={t.year} delay={0.04 * i}>
                  <li className="pl-6 pb-5 relative">
                    <span
                      aria-hidden
                      className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full"
                      style={{ background: "var(--color-gold)" }}
                    />
                    <span className="font-display text-[1.05rem]" style={{ color: "var(--color-gold-ink)" }}>
                      {t.year}
                    </span>
                    <p className="text-[0.97rem] mt-0.5" style={{ color: "var(--color-muted)" }}>
                      {t.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>

            {/* surse */}
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-[1.1rem] p-5" style={{ background: "var(--color-cream)", border: "1px solid var(--color-line)" }}>
                <h3 className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold" style={{ color: "var(--color-faint)" }}>
                  Surse
                </h3>
                <ol className="mt-3 space-y-1.5 text-[0.88rem]">
                  {ORDER.map((k) => (
                    <li key={k} id={`sursa-${k}`} className="flex gap-2 scroll-mt-28">
                      <span style={{ color: "var(--color-faint)" }}>{num(k)}.</span>
                      <a
                        href={BIO_SOURCES[k].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline"
                        style={{ color: "var(--color-forest)" }}
                      >
                        {BIO_SOURCES[k].label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
