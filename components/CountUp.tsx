"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type Props = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

function format(n: number, decimals: number) {
  const fixed = n.toFixed(decimals);
  const [int, dec] = fixed.split(".");
  // Romanian: thousands separator "." , decimal separator ","
  const withThousands = int.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return dec ? `${withThousands},${dec}` : withThousands;
}

export default function CountUp({ to, decimals = 0, prefix = "", suffix = "", duration = 1.6 }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setVal(to);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let start = 0;
    let done = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !done) {
          done = true;
          const step = (t: number) => {
            if (!start) start = t;
            const p = Math.min((t - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
            setVal(to * eased);
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [to, duration, reduce]);

  return (
    <span ref={ref}>
      {prefix}
      {format(val, decimals)}
      {suffix}
    </span>
  );
}
