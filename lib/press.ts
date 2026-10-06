// Aparițiile Ginei Tăujan în presă, TV și podcasturi.
// Fiecare intrare a fost deschisă și verificată pe sursă (oct. 2026).
// Citatele sunt copiate exact din pagina sursă. Dosarul complet: ../research-aparitii-media/gina-media.json (în afara repo-ului)

export type Source = {
  id: string;
  date: string; // YYYY-MM-DD
  outlet: string;
  show?: string;
  title: string;
  url: string;
  video?: string; // id YouTube; thumbnail local în /public/images/press/<id>.webp
  quote?: string;
};

// ——— Televiziune și podcast (cu video) ———
export const TV: Source[] = [
  {
    id: "a1-2026-05",
    date: "2026-05-18",
    outlet: "Antena 1",
    show: "Super Neatza cu Răzvan și Dani",
    title: "Capcana curelor de slăbire. De ce avem nevoie de reeducare alimentară, nu de restricții",
    url: "https://a1.ro/neatza-cu-razvan-si-dani/info-medical/super-neatza-capcana-curelor-de-slabire-de-ce-avem-nevoie-de-reeducare-alimentara-nu-de-restrictii-id1156497.html",
    video: "jBYNtV6Aa48",
  },
  {
    id: "ela-2024",
    date: "2024-05-16",
    outlet: "Podcast",
    show: "Cu Ela la doctor · episodul 6",
    title: "Cum să slăbești fără dietă. Ela Crăciun în dialog cu Gina Tăujan",
    url: "https://elacraciun.ro/cu-ela-la-doctor-i-episodul-6-gina-taujan-psihonutritionist-ne-invata-cum-sa-slabim-fara-diete/",
    video: "q9n4rNAgxiM",
    quote:
      "În reeducarea alimentară nu există frustrări alimentare. Nu facem foamea, nu cântărim mâncarea, nu numărăm caloriile.",
  },
  {
    id: "a1-2026-01b",
    date: "2026-01-30",
    outlet: "Antena 1",
    show: "Super Neatza cu Răzvan și Dani",
    title: "Cum ne afectează oboseala alegerile alimentare",
    url: "https://a1.ro/neatza-cu-razvan-si-dani/info-medical/super-neatza-30-ianuarie-2026-cum-ne-afecteaza-oboseala-alegerile-alimentare-id1150975.html",
    video: "U6vXDwmkCOk",
  },
  {
    id: "a1-2026-01a",
    date: "2026-01-16",
    outlet: "Antena 1",
    show: "Super Neatza cu Răzvan și Dani",
    title: "Obiceiuri simple pentru un corp sănătos și multă energie în ianuarie",
    url: "https://a1.ro/neatza-cu-razvan-si-dani/invitati/super-neatza-16-ianuarie-2026-obiceiuri-simple-pentru-un-corp-sanatos-si-multa-energie-in-luna-ianuarie-id1150282.html",
    video: "SKCSd3s3FD8",
  },
  {
    id: "a1-2025-12",
    date: "2025-12-22",
    outlet: "Antena 1",
    show: "Super Neatza cu Răzvan și Dani",
    title: "Mâncatul emoțional de sărbători. De ce apare și ce îl declanșează",
    url: "https://a1.ro/neatza-cu-razvan-si-dani/info-medical/super-neatza-22-decembrie-2025-mancatul-emotional-de-sarbatori-de-ce-apare-si-ce-il-declanseaza-id1149203.html",
    video: "IrNv1kiiTvM",
  },
  {
    id: "a1-2025-10",
    date: "2025-10-17",
    outlet: "Antena 1",
    show: "Super Neatza cu Răzvan și Dani",
    title: "Dovleacul, vedeta toamnei în farfurie",
    url: "https://a1.ro/neatza-cu-razvan-si-dani/invitati/super-neatza-17-octombrie-2025-dovleacul-vedeta-toamnei-in-farfurie-id1145472.html",
    video: "5zWpOtyf-YY",
  },
];

// ——— Presa scrisă: unde e citată ca specialist ———
export const ARTICLES: Source[] = [
  {
    id: "digi-cafea",
    date: "2026-10-01",
    outlet: "Digi24",
    title: "Greșeala pe care multe persoane o fac când beau cafea",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/greseala-pe-care-multe-persoane-o-fac-cand-beau-cafea-specialistii-explica-efectul-asupra-absorbtiei-unui-mineral-esential-3971611",
    quote:
      "Atunci când este consumată cu moderație, cafeaua poate fi integrată într-un stil de viață echilibrat.",
  },
  {
    id: "digi-oregano",
    date: "2026-09-22",
    outlet: "Digi24",
    title: "Planta aromatică pe care mulți o folosesc fără să-i cunoască proprietățile",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/planta-aromatica-pe-care-multi-o-folosesc-fara-sa-i-cunoasca-proprietatile-ce-beneficii-are-si-cum-se-consuma-corect-3957651",
  },
  {
    id: "digi-ton",
    date: "2026-09-16",
    outlet: "Digi24",
    title: "Alimentul consumat frecvent în România care poate conține mercur",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/alimentul-consumat-frecvent-in-romania-care-poate-contine-mercur-specialistii-in-nutritie-explica-la-ce-trebuie-sa-fim-atenti-3948805",
    quote: "În practică, mesele nu trebuie transformate într-un calcul permanent.",
  },
  {
    id: "digi-dovleac",
    date: "2026-09-12",
    outlet: "Digi24",
    title: "Alimentul de sezon cu puține calorii și bogat în nutrienți",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/alimentul-de-sezon-cu-putine-calorii-si-bogat-in-nutrienti-specialistii-explica-ce-beneficii-are-si-cum-poate-fi-consumat-3944273",
  },
  {
    id: "digi-canicula",
    date: "2026-08-04",
    outlet: "Digi24",
    title: "Câtă apă trebuie să bei pe caniculă în funcție de câte kilograme ai",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/cata-apa-trebuie-sa-bei-pe-canicula-in-functie-de-cate-kilograme-ai-ce-alimente-recomanda-specialistii-pentru-hidratare-3890817",
  },
  {
    id: "digi-gheata",
    date: "2026-07-25",
    outlet: "Digi24",
    title: "Ce se întâmplă dacă bei apă cu gheață pe caniculă",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/ce-se-intampla-daca-bei-apa-cu-gheata-pe-canicula-recomandarile-specialistilor-pentru-o-hidratare-corecta-3875831",
  },
  {
    id: "gds-plante",
    date: "2026-07-21",
    outlet: "Gazeta de Sud",
    title: "Plantele medicinale care se recoltează în iulie și beneficiile lor",
    url: "https://www.gds.ro/Sanatate/2026-07-21/plantele-medicinale-care-se-recolteaza-in-iulie-si-beneficiile-lor/",
    quote: "Faptul că un produs este natural nu înseamnă că este lipsit de riscuri",
  },
  {
    id: "digi-plante",
    date: "2026-07-19",
    outlet: "Digi24",
    title: "Plante medicinale care se culeg la mijlocul verii",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/plante-medicinale-care-se-culeg-la-mijlocul-verii-ce-beneficii-au-pentru-sanatate-si-cum-se-consuma-corect-potrivit-specialistilor-3866737",
  },
  {
    id: "capital-hidratare",
    date: "2026-06-27",
    outlet: "Capital",
    title: "Hidratarea corectă în sezonul cald. Alimentele care completează aportul de apă",
    url: "https://www.capital.ro/hidratarea-corecta-in-sezonul-cald-alimentele-care-completeaza-aportul-de-apa-nu-trebuie-sa-ti-lipseasca-din-casa.html",
  },
  {
    id: "capital-apa",
    date: "2026-06-23",
    outlet: "Capital",
    title: "Hidratarea corectă: când este cel mai bine să bem apă",
    url: "https://www.capital.ro/hidratarea-corecta-cand-este-cel-mai-bine-sa-bem-apa-ce-cantitate-de-apa-este-recomandat-sa-consumam-zilnic.html",
  },
  {
    id: "digi-apa",
    date: "2026-06-21",
    outlet: "Digi24",
    title: "Câtă apă trebuie să bei zilnic în funcție de greutatea corporală",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/cata-apa-trebuie-sa-bei-zilnic-in-functie-de-greutatea-corporala-specialistii-explica-semnele-deshidratarii-3820003",
    quote:
      "Necesarul de apă diferă de la o persoană la alta, motiv pentru care nu există o cantitate universal valabilă.",
  },
  {
    id: "digi-rozmarin",
    date: "2026-06-21",
    outlet: "Digi24",
    title: "Planta aromatică asociată cu îmbunătățirea memoriei și reducerea stresului",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/planta-aromatica-asociata-cu-imbunatatirea-memoriei-si-reducerea-stresului-specialistii-explica-beneficiile-multiple-pentru-organism-3820791",
  },
  {
    id: "digi-stevie",
    date: "2026-04-26",
    outlet: "Digi24",
    title: "Verdeața de primăvară bogată în fibre și vitamine",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/verdeata-de-primavara-bogata-in-fibre-si-vitamine-recomandarile-specialistilor-in-nutritie-este-benefica-si-pentru-functia-hepatica-3742987",
  },
  {
    id: "digi-adouazi",
    date: "2026-04-26",
    outlet: "Digi24",
    title: "Alimente gătite care nu ar trebui consumate a doua zi",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/alimente-gatite-care-nu-ar-trebui-consumate-a-doua-zi-specialistii-avertizeaza-pot-provoca-toxiinfectie-alimentara-3743081",
  },
  {
    id: "digi-lapte",
    date: "2026-01-31",
    outlet: "Digi24",
    title: "Ce lapte să eviți ca să nu ai probleme digestive",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/ce-lapte-sa-eviti-ca-sa-nu-ai-probleme-digestive-specialistii-in-nutritie-explica-ce-alternative-se-potrivesc-fiecarui-organism-3609407",
    quote: "Nu există un lapte ideal pentru toată lumea.",
  },
  {
    id: "digi-coacaze",
    date: "2026-01-18",
    outlet: "Digi24",
    title: "Fructul care a inspirat „aroma anului 2026” și sprijină sănătatea cardiovasculară",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/fructul-care-a-inspirat-aroma-anului-2026-si-sprijina-sanatatea-cardiovasculara-nutritionistii-explica-are-efect-antiinflamator-3588539",
  },
  {
    id: "digi-post",
    date: "2025-12-13",
    outlet: "Digi24",
    title: "Ce este și cum funcționează postul intermitent",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/ce-este-si-cum-functioneaza-postul-intermitent-specialistii-avertizeaza-o-forma-de-infometare-stimulata-3542459",
    quote:
      "Este important de știut că, atunci când bem cafea pe stomacul gol, nu mai vorbim despre un post autentic, ci despre o formă de înfometare stimulată.",
  },
  {
    id: "click-ela",
    date: "2024-05-16",
    outlet: "Click!",
    title: "Ela Crăciun, secretul slăbirii fără înfometare: „S-a întâmplat un miracol”",
    url: "https://click.ro/primetime/ela-craciun-secretul-slabirii-fara-infometare-2361754.html",
  },
  {
    id: "csid-ela",
    date: "2024-05-16",
    outlet: "CSID",
    title: "Ela Crăciun, secretul slăbitului fără pastile sau dietă",
    url: "https://www.csid.ro/lifestyle/vedete/ela-craciun-secretul-slabitului-fara-pastile-sau-dieta-20537096/",
  },
  {
    id: "click-ela-2",
    date: "2024-05-17",
    outlet: "Click!",
    title: "Ela Crăciun, totul despre o dietă și un corp de invidiat: „Are foarte multe rețete geniale!”",
    url: "https://click.ro/vedete/vedete-romanesti/ela-craciun-totul-despre-o-dieta-si-un-corp-de-2361866.html",
    quote:
      "Cel mai important este ca omul să își asculte corpul, fără să cântărească mâncarea sau să numere caloriile.",
  },
  {
    id: "ciao-ela",
    date: "2024-05-17",
    outlet: "Ciao.ro",
    title: "Ela Crăciun te învață secretul slăbitului fără pastile sau dietă",
    url: "https://ciao.ro/ela-craciun-te-invata-secretul-slabitului-fara-pastille-sau-dieta-in-podcastul-cu-ela-la-doctor/",
  },
  {
    id: "nightclubber",
    date: "2023-02-28",
    outlet: "Nightclubber.ro",
    title: "An interview with psycho-nutritionist Gina Taujan (interviu în engleză)",
    url: "https://web.archive.org/web/20230326151924/https://nightclubber.ro/an-interview-with-psycho-nutrionist-gina-taujan/",
  },
  {
    id: "mediaflux-fructe",
    date: "2022-01-25",
    outlet: "Mediaflux",
    show: "Dimineți cu Georgia · Metropola TV",
    title: "Fructele îngrașă. Mit sau adevăr. Părerea nutriționistului",
    url: "https://mediaflux.ro/fructele-ingrasa-mit-sau-adevar-parerea-nutritionistului-video/",
    quote:
      "Recomand respectarea sezonului. Nu mănânc afine sau zmeură în mijlocul iernii, decât dacă le am congelate din timpul verii.",
  },
  {
    id: "smark-clinique",
    date: "2020-09-28",
    outlet: "SMARK",
    title: "S-a deschis cea mai modernă clinică de estetică din nordul Bucureștiului",
    url: "https://www.smark.ro/articol/52185/s-a-deschis-cea-mai-moderna-clinica-de-estetica-din-nordul-bucurestiului-dotata",
  },
];

// ——— Surse pentru biografie (note de subsol în „Despre Gina”) ———
export const BIO_SOURCES: Record<string, { label: string; url: string }> = {
  nightclubber: {
    label: "Interviu Nightclubber.ro, feb. 2023",
    url: "https://web.archive.org/web/20230326151924/https://nightclubber.ro/an-interview-with-psycho-nutrionist-gina-taujan/",
  },
  clinique: {
    label: "Profilul ei la The Clinique Herăstrău, 2021 (arhivă)",
    url: "https://web.archive.org/web/20210512211440/https://theclinique.ro/gina-taujan/",
  },
  enspire: {
    label: "Pagina cursului ei pe Enspire, 2022 (arhivă)",
    url: "https://web.archive.org/web/20221025115817/https://enspire.ro/product/reeducare-alimentara/",
  },
  smark: {
    label: "SMARK, sept. 2020",
    url: "https://www.smark.ro/articol/52185/s-a-deschis-cea-mai-moderna-clinica-de-estetica-din-nordul-bucurestiului-dotata",
  },
  bianca: {
    label: "Video pe canalul Biancăi Adam, dec. 2020",
    url: "https://www.youtube.com/watch?v=CKFfdhS2zYM",
  },
  rawmantic: {
    label: "Concurs Lesna × Rawmantic × Healthy by Gina, mar. 2022 (arhivă)",
    url: "https://web.archive.org/web/20230204114756/https://lesna.ro/concurs-rawmantic-x-healthy-by-gina/",
  },
  poaw: {
    label: "Portrait of a Woman, invitații edițiilor trecute (arhivă)",
    url: "https://web.archive.org/web/20221117190959/https://portraitofawoman.ro/",
  },
  ela: {
    label: "Cu Ela la doctor, episodul 6, mai 2024",
    url: "https://elacraciun.ro/cu-ela-la-doctor-i-episodul-6-gina-taujan-psihonutritionist-ne-invata-cum-sa-slabim-fara-diete/",
  },
  click: {
    label: "Click!, mai 2024",
    url: "https://click.ro/primetime/ela-craciun-secretul-slabirii-fara-infometare-2361754.html",
  },
  familie: {
    label: "Cursul pentru familie pe Enspire, 2025 (arhivă)",
    url: "https://web.archive.org/web/20250422095148/https://enspire.ro/ginna2/",
  },
  kuwg: {
    label: "Keepin' Up With Ginny pe Enspire, 2024 (arhivă)",
    url: "https://web.archive.org/web/20240528194858/https://enspire.ro/product/kuwg/",
  },
  a1: {
    label: "Super Neatza, Antena 1",
    url: "https://a1.ro/neatza-cu-razvan-si-dani/invitati/super-neatza-22-septembrie-2025-reeducare-alimentara-primii-trei-pasi-simpli-dar-esentiali-id1143814.html",
  },
  digi: {
    label: "Digi24, articole din secțiunea Sănătate",
    url: "https://www.digi24.ro/stiri/actualitate/sanatate/ce-este-si-cum-functioneaza-postul-intermitent-specialistii-avertizeaza-o-forma-de-infometare-stimulata-3542459",
  },
  instagram: {
    label: "Instagram @healthybyginna",
    url: "https://www.instagram.com/healthybyginna/",
  },
};

export const MEDIA_COUNT = TV.length + ARTICLES.length;

const LUNI = ["ian.", "feb.", "mar.", "apr.", "mai", "iun.", "iul.", "aug.", "sept.", "oct.", "nov.", "dec."];
export function fmtDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${LUNI[m - 1]} ${y}`;
}
