"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "./Logo";
import { Instagram } from "./icons";
import { NAV, CONTACT } from "@/lib/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="transition-all duration-500"
        style={{
          backgroundColor: "var(--color-rose)",
          boxShadow: scrolled ? "0 12px 30px -18px rgba(58, 32, 18, 0.5)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(0, 0, 0, 0.10)"
            : "1px solid transparent",
        }}
      >
        <nav className="container-x flex items-center justify-between h-[74px]">
          <a
            href="#top"
            aria-label="Acasă — Gina Tăujan · Healthy by Ginna"
            className="flex items-center"
          >
            <Logo compact />
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="link-underline text-[0.94rem] font-semibold"
                  style={{ color: "var(--color-cream)" }}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={CONTACT.startHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold text-[0.9rem] py-3 px-5"
            >
              <Instagram width={17} height={17} />
              Scrie-mi START
            </a>
          </div>

          <button
            type="button"
            className="lg:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 -mr-2"
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] rounded"
              style={{ background: "var(--color-cream)" }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[2px] rounded"
              style={{ background: "var(--color-cream)" }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[2px] rounded"
              style={{ background: "var(--color-cream)" }}
            />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-[74px] z-40"
            style={{ background: "var(--color-rose)" }}
            role="dialog"
            aria-modal="true"
            aria-label="Meniu de navigare"
          >
            <div className="container-x py-8 flex flex-col h-full">
              <ul className="flex flex-col gap-1">
                {NAV.map((n, i) => (
                  <motion.li
                    key={n.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05 }}
                  >
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="font-display block py-3 border-b"
                      style={{
                        fontSize: "1.75rem",
                        color: "var(--color-cream)",
                        borderColor: "rgba(255, 252, 246, 0.25)",
                      }}
                    >
                      {n.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={CONTACT.startHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-gold mt-8 w-full"
              >
                <Instagram width={18} height={18} />
                Scrie-mi START
              </a>
              <p
                className="mt-6 text-[0.95rem]"
                style={{ color: "color-mix(in srgb, var(--color-cream) 85%, transparent)" }}
              >
                Sau scrie-mi pe Instagram: <br />
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                  style={{ color: "var(--color-cream)" }}
                >
                  {CONTACT.instagramHandle}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
