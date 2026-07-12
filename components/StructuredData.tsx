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
          "Psihonutriționist și fondatoarea Reeducării Alimentare în România. Peste 7 ani de experiență într-un proces anti-dietă: fără foame, fără numărat calorii, fără cântărit — cu libertate și liniște în relația cu mâncarea.",
        url: SITE,
        image: `${SITE}/images/portraits/portrait-store.webp`,
        gender: "Female",
        knowsLanguage: ["ro"],
        knowsAbout: [
          "Reeducare alimentară",
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
            name: "Programul de Reeducare Alimentară 1:1",
            description:
              "Proces personalizat de 56 de zile (35 de zile planuri personalizate + 21 de zile autonomie), cu ghidare zilnică. Preț la cerere.",
            category: "Coaching nutrițional personalizat",
            url: `${SITE}/#programe`,
            itemOffered: {
              "@type": "Service",
              name: "Programul de Reeducare Alimentară 1:1",
              provider: { "@id": `${SITE}/#gina` },
            },
          },
          {
            "@type": "Offer",
            name: "Curs de Reeducare Alimentară",
            description:
              "Curs online, în ritm propriu: principiile reeducării, planuri de masă pe 4 anotimpuri și 100 de rețete.",
            priceCurrency: "RON",
            price: "499.99",
            url: "https://enspire.ro/product/curs-reeducare-alimentara/",
            itemOffered: { "@type": "Service", name: "Curs de Reeducare Alimentară" },
          },
          {
            "@type": "Offer",
            name: "Keepin' Up With Ginny (KUWG)",
            description: "Abonament recurent cu un episod pe săptămână, pentru absolvenții cursului.",
            priceCurrency: "RON",
            price: "39.99",
            url: "https://enspire.ro/product/kuwg/",
            itemOffered: { "@type": "Service", name: "Keepin' Up With Ginny" },
          },
        ],
        sameAs: [
          "https://www.instagram.com/healthybyginna/",
          "https://www.facebook.com/healthybyginna/",
          "https://enspire.ro/ginna/",
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
