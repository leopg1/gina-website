import type { CSSProperties } from "react";

/**
 * Subliniere „desenată de mână" — o linie ondulată neregulată.
 * Se colorează cu currentColor; lățimea o dă containerul.
 */
export default function Squiggle({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 10"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      <path
        d="M2 7 C15 3 25 8.5 38 6 C51 3.5 60 8 74 5.5 C88 3 98 8 118 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
