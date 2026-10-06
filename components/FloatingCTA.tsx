"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CONTACT } from "@/lib/content";
import { Instagram } from "./icons";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={CONTACT.startHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrie START pe Instagram"
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.06 }}
          className="fixed z-40 bottom-5 right-5 inline-flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full font-semibold text-[0.94rem]"
          style={{
            background: "var(--color-gold-light)",
            color: "var(--color-evergreen)",
            boxShadow: "0 14px 34px -10px rgba(58, 32, 18, 0.4)",
          }}
        >
          <span style={{ color: "var(--color-evergreen)" }}>
            <Instagram width={22} height={22} />
          </span>
          <span className="hidden sm:inline">Scrie START</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
