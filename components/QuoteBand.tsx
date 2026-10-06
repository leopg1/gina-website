import Image from "next/image";
import Reveal from "./Reveal";
import { imgFill } from "@/lib/media";

export default function QuoteBand() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "clamp(24rem, 46vh, 34rem)" }}
      aria-label="Mesaj de brand"
    >
      <Image
        {...imgFill("lifestyle-water")}
        alt=""
        aria-hidden
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(189,61,31,0.9) 0%, rgba(189,61,31,0.82) 50%, rgba(189,61,31,0.94) 100%)",
        }}
      />
      <div className="container-x relative py-20 text-center mx-auto max-w-3xl">
        <Reveal>
          <span className="eyebrow eyebrow-light">#WEDONTDIETWELIFESTYLE</span>
        </Reveal>
        <Reveal delay={0.06}>
          <blockquote
            className="font-display italic mt-6 text-balance"
            style={{
              color: "var(--color-cream)",
              fontSize: "clamp(1.8rem, 1.2rem + 2.6vw, 3.1rem)",
              lineHeight: 1.14,
              letterSpacing: "-0.01em",
            }}
          >
            „Vreau să gândim în culori.”
          </blockquote>
        </Reveal>
        <Reveal delay={0.12}>
          <p
            className="mt-6 mx-auto max-w-xl text-[1.02rem]"
            style={{ color: "color-mix(in srgb, var(--color-cream) 82%, transparent)" }}
          >
            Gina Tăujan, la „Cu Ela la doctor”, mai 2024
          </p>
        </Reveal>
      </div>
    </section>
  );
}
