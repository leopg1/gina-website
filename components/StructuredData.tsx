import { FAQ } from "@/lib/content";

const SITE = "https://healthybyginna.ro";

export default function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#gina`,
        name: "Gina Tăujan",
        givenName: "Gina",
        familyName: "Tăujan",
        alternateName: "Healthy by Ginna",
        jobTitle: "Psihonutriționist",
        description:
          "Nutriționist licențiat și psihonutriționist. Lucrează din 2016 cu reeducare alimentară: fără foame, fără numărat calorii, fără cântărit. Invitată la Super Neatza pe Antena 1, citată de Digi24.",
        url: SITE,
        image: `${SITE}/images/portraits/portrait-store.webp`,
        gender: "Female",
        knowsLanguage: ["ro"],
        knowsAbout: [
          "Obiceiuri alimentare sănătoase",
          "Relația cu mâncarea",
          "Alimentație anti-dietă",
          "Sănătate hormonală și digestivă",
          "Alimentație de sezon",
          "Nutriție pentru familie și cupluri",
          "Consultații online de nutriție",
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Programul de reeducare 1:1",
            description:
              "Program personalizat de 56 de zile (35 de zile planuri personalizate + 21 de zile autonomie), cu ghidare zilnică, unu la unu. Preț la cerere.",
            category: "Coaching nutrițional personalizat",
            url: `${SITE}/#programe`,
            itemOffered: {
              "@type": "Service",
              name: "Programul de reeducare 1:1",
              provider: { "@id": `${SITE}/#gina` },
            },
          },
        ],
        sameAs: [
          "https://www.instagram.com/healthybyginna/",
          "https://www.facebook.com/healthybyginna/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        url: SITE,
        name: "Healthy by Ginna — Gina Tăujan",
        inLanguage: "ro-RO",
        publisher: { "@id": `${SITE}/#gina` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE}/#faq`,
        mainEntity: FAQ.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
