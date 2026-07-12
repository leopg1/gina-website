import { clsx } from "clsx";

type Props = {
  variant?: "dark" | "light";
  className?: string;
  compact?: boolean;
};

/** Elegant leaf-sprig mark + wordmark for Gina Tăujan · Healthy by Ginna. */
export default function Logo({ variant = "dark", className, compact = false }: Props) {
  const ink = variant === "light" ? "var(--color-cream)" : "var(--color-evergreen)";
  const sub = variant === "light" ? "color-mix(in srgb, var(--color-cream) 72%, transparent)" : "var(--color-bronze)";

  return (
    <span className={clsx("inline-flex items-center gap-2.5 select-none", className)}>
      <span
        aria-hidden="true"
        className="shrink-0"
        style={{ color: "var(--color-gold)" }}
      >
        <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
          {/* stem */}
          <path
            d="M20 37 C20 27 20 18 20 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* leaves */}
          <path
            d="M20 26 C13 25 9 21 8.5 14.5 C15 14.5 19.5 18 20 25.5 Z"
            fill="currentColor"
            opacity="0.92"
          />
          <path
            d="M20 20 C27 19 31 15 31.5 8.5 C25 8.5 20.5 12 20 19.5 Z"
            fill="currentColor"
            opacity="0.72"
          />
          <path
            d="M20 15 C15 13.5 12.5 10 12.5 5 C17.5 5.5 20.5 9 20 14.5 Z"
            fill="var(--color-sage)"
            opacity="0.9"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className="font-display"
          style={{
            color: ink,
            fontWeight: 460,
            fontSize: "1.18rem",
            letterSpacing: "-0.01em",
          }}
        >
          Gina Tăujan
        </span>
        {!compact && (
          <span
            style={{
              color: sub,
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginTop: "0.28rem",
            }}
          >
            Healthy by Ginna
          </span>
        )}
      </span>
    </span>
  );
}
