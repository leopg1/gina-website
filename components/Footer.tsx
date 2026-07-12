import Logo from "./Logo";
import { NAV, CONTACT, FOOTER } from "@/lib/content";
import { Facebook, Instagram, ArrowUpRight } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: "Programul 1:1 · scrie-mi START", href: CONTACT.startHref },
    { label: "Curs de Reeducare Alimentară", href: CONTACT.courseMain },
    { label: "Keepin' Up With Ginny", href: CONTACT.kuwg },
    { label: CONTACT.instagramHandle, href: CONTACT.instagram },
  ];

  return (
    <footer style={{ background: "var(--color-evergreen)", color: "var(--color-cream)" }}>
      <div className="container-x py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p
              className="mt-6 font-display italic max-w-sm"
              style={{ fontSize: "1.4rem", lineHeight: 1.3, color: "color-mix(in srgb, var(--color-cream) 90%, transparent)" }}
            >
              {FOOTER.tagline}
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors"
                style={{ background: "color-mix(in srgb, var(--color-cream) 12%, transparent)", color: "var(--color-cream)" }}
              >
                <Instagram width={19} height={19} />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full"
                style={{ background: "color-mix(in srgb, var(--color-cream) 12%, transparent)", color: "var(--color-cream)" }}
              >
                <Facebook width={18} height={18} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="eyebrow" style={{ color: "color-mix(in srgb, var(--color-cream) 60%, transparent)" }}>
              Navigare
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="link-underline text-[0.98rem]"
                    style={{ color: "color-mix(in srgb, var(--color-cream) 85%, transparent)" }}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="eyebrow" style={{ color: "color-mix(in srgb, var(--color-cream) 60%, transparent)" }}>
              Lucrează cu mine
            </h3>
            <ul className="mt-5 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-[0.96rem]"
                    style={{ color: "color-mix(in srgb, var(--color-cream) 85%, transparent)" }}
                  >
                    <span className="link-underline">{l.label}</span>
                    <ArrowUpRight width={13} height={13} className="mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-14 pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--color-line-dark)" }}
        >
          <p className="text-[0.82rem]" style={{ color: "color-mix(in srgb, var(--color-cream) 58%, transparent)" }}>
            {FOOTER.credit}
          </p>
          <p className="text-[0.82rem]" style={{ color: "color-mix(in srgb, var(--color-cream) 60%, transparent)" }}>
            © {year} Gina Tăujan · Healthy by Ginna · Site de{" "}
            <a href="#top" className="link-underline" style={{ color: "color-mix(in srgb, var(--color-cream) 70%, transparent)" }}>
              Orevo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
