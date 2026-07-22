"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { CONTACT, CONTACT_SECTION } from "@/lib/content";
import { Instagram, Video, Sparkle, ArrowUpRight, Facebook } from "./icons";

export default function Contact() {
  const L = CONTACT_SECTION.formLabels;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `${CONTACT_SECTION.dmMsg}\n\n` +
      `Nume: ${name || "—"}\n` +
      `Instagram/telefon: ${phone || "—"}\n` +
      `Ce mă aduce aici: ${message || "—"}`;
    setSent(true);
    // Open the DM within the click gesture first (avoids popup-blocking),
    // then copy the composed message. .catch keeps the promise from ever going unhandled.
    window.open(CONTACT.startHref, "_blank", "noopener,noreferrer");
    navigator.clipboard?.writeText(text).catch(() => {});
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--color-parchment)",
    border: "1px solid var(--color-line)",
    borderRadius: "0.85rem",
    padding: "0.85rem 1rem",
    fontSize: "1rem",
    color: "var(--color-ink)",
    width: "100%",
    fontFamily: "var(--font-sans)",
  };

  return (
    <section id="contact" className="section" style={{ background: "var(--color-sand)" }}>
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow">{CONTACT_SECTION.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h1 mt-5 text-balance" style={{ color: "var(--color-evergreen)" }}>
              {CONTACT_SECTION.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5">{CONTACT_SECTION.intro}</p>
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          {/* Form */}
          <Reveal className="lg:col-span-7" y={30}>
            <form
              onSubmit={submit}
              className="p-7 lg:p-9 rounded-[1.5rem] h-full"
              style={{ background: "var(--color-ivory)", border: "1px solid var(--color-line)", boxShadow: "var(--shadow-soft)" }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[0.85rem] font-semibold" style={{ color: "var(--color-forest)" }}>
                    {L.name}
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ ...inputStyle, marginTop: "0.5rem" }}
                    placeholder="Ex: Ioana Popescu"
                  />
                </label>
                <label className="block">
                  <span className="text-[0.85rem] font-semibold" style={{ color: "var(--color-forest)" }}>
                    {L.phone}
                  </span>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{ ...inputStyle, marginTop: "0.5rem" }}
                    placeholder="@instagram sau 07xx xxx xxx"
                  />
                </label>
              </div>
              <label className="block mt-4">
                <span className="text-[0.85rem] font-semibold" style={{ color: "var(--color-forest)" }}>
                  {L.message}
                </span>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ ...inputStyle, marginTop: "0.5rem", resize: "vertical" }}
                  placeholder={L.messagePlaceholder}
                />
              </label>
              <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
                <Instagram width={18} height={18} />
                {L.submit}
              </button>
              <p
                role="status"
                aria-live="polite"
                className="mt-4 text-[0.9rem] flex items-start gap-2 min-h-[1.25rem]"
                style={{ color: "var(--color-moss)" }}
              >
                {sent && (
                  <>
                    <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: "var(--color-moss)" }} />
                    {L.success}
                  </>
                )}
              </p>
              <p className="mt-4 text-[0.8rem]" style={{ color: "var(--color-faint)" }}>
                Îți deschid Instagram cu mesajul pregătit — nu se stochează nimic pe site.
              </p>
            </form>
          </Reveal>

          {/* Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Reveal>
              <a
                href={CONTACT.startHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-[1.3rem]"
                style={{ background: "var(--color-rose)", color: "var(--color-cream)" }}
              >
                <div className="flex items-start gap-3">
                  <span style={{ color: "var(--color-gold-light)" }} className="mt-0.5">
                    <Instagram width={22} height={22} />
                  </span>
                  <div>
                    <h3 className="font-display" style={{ fontSize: "1.18rem", color: "var(--color-cream)", fontWeight: 460 }}>
                      Scrie-mi START pe Instagram
                    </h3>
                    <p className="text-[0.9rem]" style={{ color: "color-mix(in srgb, var(--color-cream) 92%, transparent)" }}>
                      Cel mai rapid răspuns, direct de la mine
                    </p>
                    <span className="inline-flex items-center gap-2 mt-2 text-[0.9rem] font-semibold" style={{ color: "var(--color-gold-light)" }}>
                      {CONTACT.instagramHandle}
                      <ArrowUpRight width={14} height={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                className="p-6 rounded-[1.3rem] flex items-start gap-3"
                style={{ background: "var(--color-ivory)", border: "1px solid var(--color-line)" }}
              >
                <span style={{ color: "var(--color-rose)" }} className="mt-0.5">
                  <Video width={20} height={20} />
                </span>
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.14rem", color: "var(--color-evergreen)", fontWeight: 460 }}>
                    100% online
                  </h3>
                  <p className="text-[0.9rem] mt-0.5" style={{ color: "var(--color-muted)" }}>
                    Lucrăm oriunde ai fi — din toată țara și din diaspora, în ritmul tău.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-[1.3rem] flex items-start gap-3"
                style={{ background: "var(--color-ivory)", border: "1px solid var(--color-line)" }}
              >
                <span style={{ color: "var(--color-gold-ink)" }} className="mt-0.5">
                  <Sparkle width={20} height={20} />
                </span>
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.14rem", color: "var(--color-evergreen)", fontWeight: 460 }}>
                    Vrei să mă cunoști întâi?
                  </h3>
                  <p className="text-[0.9rem] mt-0.5" style={{ color: "var(--color-muted)" }}>
                    Postez aproape zilnic: rețete, transformări și viața mea cu mâncarea.
                  </p>
                  <span className="inline-flex items-center gap-2 mt-2 text-[0.88rem] font-semibold" style={{ color: "var(--color-forest)" }}>
                    <span className="link-underline">Vezi profilul</span>
                    <ArrowUpRight width={14} height={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="flex items-center gap-3 px-2">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "var(--color-ivory)", border: "1px solid var(--color-line)", color: "var(--color-forest)" }}
                >
                  <Instagram width={19} height={19} />
                </a>
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full"
                  style={{ background: "var(--color-ivory)", border: "1px solid var(--color-line)", color: "var(--color-forest)" }}
                >
                  <Facebook width={18} height={18} />
                </a>
                <span className="text-[0.85rem]" style={{ color: "var(--color-muted)" }}>
                  Urmărește-mă zilnic pe rețele
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
