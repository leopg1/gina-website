"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { ArrowUpRight } from "./icons";
import { MEDIA } from "@/lib/content";
import { TV, ARTICLES, fmtDate, type Source } from "@/lib/press";

const ARTICLES_SORTED = [...ARTICLES].sort((a, b) => b.date.localeCompare(a.date));
const FIRST = 6;

function VideoCard({ s }: { s: Source }) {
  const [play, setPlay] = useState(false);
  return (
    <article
      className="h-full flex flex-col overflow-hidden rounded-[1.2rem]"
      style={{ background: "var(--color-parchment)", border: "1px solid var(--color-line)", boxShadow: "var(--shadow-soft)" }}
    >
      {s.video && (
        <div className="relative aspect-video" style={{ background: "var(--color-evergreen)" }}>
          {play ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${s.video}?autoplay=1&rel=0`}
              title={s.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlay(true)}
              className="group absolute inset-0 w-full h-full"
              aria-label={`Pornește video: ${s.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/press/${s.video}.webp`}
                alt=""
                loading="lazy"
                className="img-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span
                className="absolute inset-0 grid place-items-center"
                style={{ background: "linear-gradient(180deg, transparent 40%, rgba(38,32,25,0.55))" }}
              >
                <span
                  className="w-14 h-14 rounded-full grid place-items-center transition-transform group-hover:scale-110"
                  style={{ background: "var(--color-rose)", color: "var(--color-cream)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            </button>
          )}
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div className="text-[0.75rem] uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--color-gold-ink)" }}>
          {s.outlet}
          {s.show ? <span style={{ color: "var(--color-faint)" }}> · {s.show}</span> : null}
        </div>
        <h4 className="font-display mt-2 text-balance" style={{ fontSize: "1.1rem", lineHeight: 1.3, color: "var(--color-evergreen)", fontWeight: 460 }}>
          {s.title}
        </h4>
        {s.quote && (
          <blockquote className="mt-3 italic text-[0.93rem]" style={{ color: "var(--color-muted)" }}>
            „{s.quote}”
          </blockquote>
        )}
        <div className="mt-auto pt-4 flex items-center justify-between text-[0.85rem]">
          <time dateTime={s.date} style={{ color: "var(--color-faint)" }}>
            {fmtDate(s.date)}
          </time>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold"
            style={{ color: "var(--color-forest)" }}
          >
            Sursa <ArrowUpRight width={14} height={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Media() {
  const [all, setAll] = useState(false);
  const list = all ? ARTICLES_SORTED : ARTICLES_SORTED.slice(0, FIRST);

  return (
    <section id="presa" className="section" style={{ background: "var(--color-cream)" }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{MEDIA.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {MEDIA.title}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="lead mt-5">{MEDIA.intro}</p>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="h3 mt-14" style={{ color: "var(--color-evergreen)" }}>
            {MEDIA.tvLabel}
          </h3>
        </Reveal>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TV.map((s, i) => (
            <Reveal key={s.id} delay={(i % 3) * 0.06}>
              <VideoCard s={s} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="h3 mt-16" style={{ color: "var(--color-evergreen)" }}>
            {MEDIA.pressLabel}
          </h3>
        </Reveal>
        <ul className="mt-6 grid md:grid-cols-2 gap-x-10">
          {list.map((s) => (
            <li key={s.id} className="border-t py-4" style={{ borderColor: "var(--color-line)" }}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="flex items-baseline justify-between gap-4 text-[0.78rem]">
                  <span className="uppercase tracking-[0.12em] font-semibold" style={{ color: "var(--color-gold-ink)" }}>
                    {s.outlet}
                  </span>
                  <time dateTime={s.date} style={{ color: "var(--color-faint)" }}>
                    {fmtDate(s.date)}
                  </time>
                </div>
                <p className="mt-1.5 font-semibold group-hover:underline" style={{ color: "var(--color-evergreen)" }}>
                  {s.title}
                  <ArrowUpRight width={13} height={13} className="inline ml-1 -mt-0.5" />
                </p>
                {s.quote && (
                  <p className="mt-1.5 italic text-[0.92rem]" style={{ color: "var(--color-muted)" }}>
                    „{s.quote}”
                  </p>
                )}
              </a>
            </li>
          ))}
        </ul>
        {ARTICLES_SORTED.length > FIRST && (
          <div className="mt-8 text-center">
            <button type="button" onClick={() => setAll((v) => !v)} className="btn btn-ghost">
              {all ? MEDIA.less : `${MEDIA.more} (${ARTICLES_SORTED.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
