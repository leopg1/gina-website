import type { Metadata, Viewport } from "next";
import { Shantell_Sans, Nunito } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import StructuredData from "@/components/StructuredData";

const shantell = Shantell_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-shantell",
  style: ["normal", "italic"],
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-nunito",
  style: ["normal", "italic"],
});

const SITE_URL = "https://healthybyginna.ro";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gina Tăujan — Psihonutriționist · Nutriție & Lifestyle",
    template: "%s · Healthy by Ginna",
  },
  description:
    "Gina Tăujan, psihonutriționist: fără diete, fără foame, fără numărat calorii. Programul de reeducare 1:1, pe 56 de zile, și o comunitate de ~39.000 de oameni.",
  keywords: [
    "psihonutriționist",
    "Gina Tăujan",
    "Healthy by Ginna",
    "anti-dietă",
    "nutriție anti-dietă",
    "slăbit fără dietă",
    "relația cu mâncarea",
    "program nutriție 1:1",
    "nutriționist online",
    "stil de viață sănătos",
  ],
  authors: [{ name: "Gina Tăujan" }],
  creator: "Gina Tăujan",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: SITE_URL,
    siteName: "Healthy by Ginna — Gina Tăujan",
    title: "Gina Tăujan — Un stil de viață, nu o dietă",
    description:
      "Redescoperă libertatea în relația cu mâncarea. Fără foame, fără calorii, fără interdicții — un proces care ține pe viață.",
    images: [
      {
        url: "/images/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Gina Tăujan, psihonutriționist — Healthy by Ginna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gina Tăujan — Un stil de viață, nu o dietă",
    description: "Fără diete, fără foame, fără numărat calorii. Un proces care ține pe viață.",
    images: ["/images/og/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className={`${shantell.variable} ${nunito.variable}`}>
      <body>
        <StructuredData />
        <SmoothScroll />
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
