import type { CSSProperties } from "react";

type Props = {
  /** "outline" = doar contur (currentColor) · "duo" = corp lime + contur alb, ca în logo */
  variant?: "outline" | "duo";
  className?: string;
  style?: CSSProperties;
};

/**
 * Mascota brandului (avocado cu inimă, din logo) ca SVG vectorial.
 * Folosită ca bullet, separator în marquee și watermark în footer.
 */
export default function AvocadoMark({ variant = "outline", className, style }: Props) {
  const duo = variant === "duo";
  return (
    <svg
      viewBox="0 0 44 56"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {/* corpul (pară/avocado) */}
      <path
        d="M22 3 C16.5 3 14 8 13 14 C12 19.5 6 23.5 6 34 C6 45.5 13.5 53 22 53 C30.5 53 38 45.5 38 34 C38 23.5 32 19.5 31 14 C30 8 27.5 3 22 3 Z"
        fill={duo ? "var(--color-gold-light)" : "none"}
        stroke={duo ? "#ffffff" : "currentColor"}
        strokeWidth={duo ? 2.4 : 2.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* inima */}
      <path
        d="M22 44 C18 40.5 14.5 38 14.5 34.5 C14.5 32 16.5 30.5 18.5 30.5 C20 30.5 21.3 31.4 22 32.8 C22.7 31.4 24 30.5 25.5 30.5 C27.5 30.5 29.5 32 29.5 34.5 C29.5 38 26 40.5 22 44 Z"
        fill="none"
        stroke={duo ? "#ffffff" : "currentColor"}
        strokeWidth={duo ? 2.4 : 2.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
