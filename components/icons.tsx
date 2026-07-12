import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

type P = SVGProps<SVGSVGElement>;

export const ArrowRight = (p: P) => (
  <svg {...base} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Whatsapp = (p: P) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.25 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24Zm-3.2 4.44c-.15 0-.4.06-.6.29-.21.23-.8.78-.8 1.9s.82 2.2.93 2.36c.11.15 1.6 2.45 3.9 3.44.54.23.97.37 1.3.48.55.17 1.05.15 1.44.09.44-.07 1.35-.55 1.54-1.09.19-.53.19-.99.13-1.09-.06-.09-.21-.15-.44-.26-.23-.11-1.35-.67-1.56-.74-.21-.08-.36-.11-.51.11-.15.23-.58.74-.71.89-.13.15-.26.17-.49.06-.23-.11-.96-.35-1.83-1.13-.68-.6-1.13-1.35-1.27-1.58-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.4.11-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.11-.51-1.24-.71-1.69-.18-.44-.37-.38-.51-.39-.13 0-.28-.01-.44-.01Z" />
  </svg>
);
export const Leaf = (p: P) => (
  <svg {...base} {...p}><path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 16-9 0 8-4 12-9 12Z" /><path d="M9 15c.5-3.5 3-6 6-7" /></svg>
);
export const Scale = (p: P) => (
  <svg {...base} {...p}><path d="M12 3v18M7 21h10M5 7h14l-2 9H7L5 7Z" /><path d="M9 7c0-1.66 1.34-3 3-3s3 1.34 3 3" /></svg>
);
export const HeartPulse = (p: P) => (
  <svg {...base} {...p}><path d="M20.4 5.6a5 5 0 0 0-7.1 0L12 6.9l-1.3-1.3a5 5 0 1 0-7.1 7.1L12 21l8.4-8.3a5 5 0 0 0 0-7.1Z" /><path d="M3.5 12h4l1.5-3 2 5 1.5-2h4" /></svg>
);
export const Baby = (p: P) => (
  <svg {...base} {...p}><path d="M9 12h.01M15 12h.01M10 16c.5.5 1.2.8 2 .8s1.5-.3 2-.8" /><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" /><path d="M12 3c1.5 1 2 2.5 2 4" /></svg>
);
export const Dumbbell = (p: P) => (
  <svg {...base} {...p}><path d="M6.5 6.5 17.5 17.5M4 8l2-2M8 4 6 6M18 20l-2-2M20 16l-2 2M14.5 4.5l5 5M4.5 14.5l5 5" /></svg>
);
export const Video = (p: P) => (
  <svg {...base} {...p}><rect x="2" y="6" width="14" height="12" rx="2.5" /><path d="m16 10 5-3v10l-5-3" /></svg>
);
export const Star = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="m12 2 2.9 6.2 6.6.7-4.9 4.5 1.3 6.6L12 17.9 6.1 20.5l1.3-6.6L2.5 8.9l6.6-.7L12 2Z" />
  </svg>
);
export const MapPin = (p: P) => (
  <svg {...base} {...p}><path d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
export const Clock = (p: P) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
);
export const Phone = (p: P) => (
  <svg {...base} {...p}><path d="M4 5c0-1 .8-2 2-2h2l1.6 4-2 1.4a12 12 0 0 0 6 6l1.4-2L19 14v2c0 1.2-.8 2-2 2A14 14 0 0 1 4 5Z" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} {...p}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Quote = (p: P) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M16 11c-4.4 0-8 3.6-8 8 0 4 3 7 7 7 .8 4-2 7-6 8v3c7-1 12-6 12-14v-4c0-4.4-1.5-11-5-11-.3 0-.7 0-1 .1V11Zm16 0c-4.4 0-8 3.6-8 8 0 4 3 7 7 7 .8 4-2 7-6 8v3c7-1 12-6 12-14v-4c0-4.4-1.5-11-5-11-.3 0-.7 0-1 .1V11Z" opacity="0.9" />
  </svg>
);
export const Plus = (p: P) => (
  <svg {...base} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Facebook = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);
export const Sparkle = (p: P) => (
  <svg {...base} {...p}><path d="M12 3v18M3 12h18M6.5 6.5l11 11M17.5 6.5l-11 11" opacity="0.5" /><path d="M12 6l1.5 4.5L18 12l-4.5 1.5L12 18l-1.5-4.5L6 12l4.5-1.5L12 6Z" fill="currentColor" stroke="none" /></svg>
);
export const Instagram = (p: P) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);
export const Coffee = (p: P) => (
  <svg {...base} {...p}><path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" /><path d="M17 9h2.2a2.3 2.3 0 0 1 0 4.6H17" /><path d="M8 3.5c-.4.7-.4 1.3 0 2M12 3c-.4.7-.4 1.3 0 2" opacity="0.7" /></svg>
);
export const Users = (p: P) => (
  <svg {...base} {...p}><circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 5.2a3.2 3.2 0 0 1 0 5.9M17.5 20a5.5 5.5 0 0 0-3-4.9" opacity="0.85" /></svg>
);
export const SoundOn = (p: P) => (
  <svg {...base} {...p}><path d="M4 9v6h3l4.5 4V5L7 9H4Z" fill="currentColor" stroke="none" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" /></svg>
);
export const SoundOff = (p: P) => (
  <svg {...base} {...p}><path d="M4 9v6h3l4.5 4V5L7 9H4Z" fill="currentColor" stroke="none" /><path d="m16 9 5 6M21 9l-5 6" /></svg>
);
