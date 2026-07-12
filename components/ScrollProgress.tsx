"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
    >
      <div
        className="h-full w-full"
        style={{
          background:
            "linear-gradient(90deg, var(--color-forest), var(--color-gold), var(--color-sage))",
        }}
      />
    </motion.div>
  );
}
