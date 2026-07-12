import { PRESS } from "@/lib/content";

export default function PressBar() {
  const items = [...PRESS.items, ...PRESS.items];
  return (
    <section
      aria-label="Apariții în presă și TV"
      className="py-7 border-y overflow-hidden"
      style={{ background: "var(--color-ivory)", borderColor: "var(--color-line)" }}
    >
      <div className="container-x flex items-center gap-6 lg:gap-10 flex-col lg:flex-row">
        <span
          className="eyebrow shrink-0 whitespace-nowrap"
          style={{ color: "var(--color-faint)" }}
        >
          {PRESS.label}
        </span>
        <div
          className="relative flex-1 w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <div className="marquee-track items-center">
            {items.map((it, i) => (
              <span key={i} className="flex items-center">
                <span
                  className="font-display whitespace-nowrap px-6"
                  style={{ fontSize: "1.35rem", color: "var(--color-pine)", fontWeight: 420 }}
                >
                  {it}
                </span>
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--color-gold)" }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
