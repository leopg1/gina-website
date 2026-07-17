import Image from "next/image";
import { clsx } from "clsx";

type Props = {
  variant?: "dark" | "light";
  className?: string;
  compact?: boolean;
};

/** Logo-ul real Healthy by Ginna (lockup terracotta + avocado lime). */
export default function Logo({ className, compact = false }: Props) {
  const w = compact ? 158 : 195;
  const h = Math.round(w / 3.75); // raportul nativ al lockup-ului (1200×320)
  return (
    <span className={clsx("inline-flex items-center select-none", className)}>
      <Image
        src="/images/brand/logo-lockup.png"
        alt="Healthy by Ginna — Gina Tăujan"
        width={w}
        height={h}
        priority
        className="block"
        style={{ borderRadius: "0.6rem" }}
      />
    </span>
  );
}
