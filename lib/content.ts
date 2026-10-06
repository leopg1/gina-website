// Toate textele site-ului Gina Tăujan · Healthy by Ginna.
//
// Două voci, separate intenționat:
//   • GINA: secțiunea despre ea, la persoana a III-a, cu surse verificate (lib/press.ts).
//   • Restul: despre reeducarea alimentară și program, adresat cititorului cu „tu”.
// Citatele puse între ghilimele sunt cuvintele ei reale, din interviuri.
//
// ⚠️ TODO ÎNAINTE DE PUBLICARE (cere-i Ginei):
//   1. Numărul de WhatsApp business — momentan canalul „START” e Instagram DM (funcțional).
//   2. Prețul Programului 1:1 — acum e „personalizat, la cerere”.
//   3. Domeniul real (folosit acum: healthybyginna.ro).
//   4. Acordul pentru testimonialele reale (sunt mesajele ei publice, anonimizate).
//   5. Anul exact în care a pornit primul program (sursele indică 2016).

export const CONTACT = {
  brand: "Gina Tăujan",
  brandFull: "Healthy by Ginna",
  role: "Psihonutriționist",
  startWord: "START",
  instagram: "https://www.instagram.com/healthybyginna/",
  instagramHandle: "@healthybyginna",
  // Deep-link direct în DM-ul de Instagram (canalul ei real pentru „START”).
  startHref: "https://ig.me/m/healthybyginna",
  facebook: "https://www.facebook.com/healthybyginna/",
};

export const NAV = [
  { label: "Despre Gina", href: "#despre" },
  { label: "În presă", href: "#presa" },
  { label: "Metoda", href: "#metoda" },
  { label: "Program", href: "#programe" },
  { label: "Rezultate", href: "#rezultate" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  // Tagline-ul ei (din brief, de confirmat cu ea): „Redescoperă libertatea în relația cu mâncarea."
  titleLines: ["Redescoperă", "libertatea", "în relația cu mâncarea."],
  emphasis: "libertatea",
  sub: "Programul de reeducare alimentară al Ginei Tăujan, psihonutriționist. Opt săptămâni în care reînveți să mănânci ca un om normal, cu mâncare de la piață și fără să rabzi de foame. Totul se face online.",
  ctaPrimary: "Vreau în program",
  ctaSecondary: "Scrie START",
  trust: [
    "Invitată la Super Neatza, Antena 1",
    "Citată de Digi24",
    "~39.000 pe Instagram",
    "56 de zile",
    "Online, din orice oraș",
  ],
};

export const PRESS = {
  label: "Au vorbit despre ea",
  items: [
    "Super Neatza · Antena 1",
    "Digi24",
    "Cu Ela la doctor",
    "Capital",
    "Ciao.ro",
    "Click!",
    "CSID",
  ],
};

export const MANIFESTO = {
  eyebrow: "Ce e reeducarea alimentară",
  title: "Fă pace cu mâncarea.",
  paragraphs: [
    "Reeducarea alimentară nu vine cu o listă de lucruri pe care n-ai voie să le mănânci. Pâinea rămâne, cafeaua cu lapte rămâne, iar duminica mănânci liniștită ce a pus mama pe masă. Se schimbă felul în care îți faci farfuria în restul săptămânii, și asta se întâmplă treptat.",
    "Dacă ai mai ținut diete, știi deja scenariul. Primele două săptămâni merg bine, apoi te saturi, scapi un weekend de sub control și kilogramele se întorc, de obicei cu încă două pe deasupra. Aici lucrezi în ritmul tău, cu mâncare obișnuită, până când ajungi să mănânci așa fără să te mai abții.",
  ],
  // Din brief (postările ei); de confirmat.
  pull: "Rezultatele apar. Nu peste noapte. Ci atunci când începi, în sfârșit, să ai răbdare cu tine.",
  bullets: ["Fără foame", "Fără cântar", "Fără numărat calorii", "Gândim în culori"],
};

// ——— Secțiunea despre ea: persoana a III-a, fiecare afirmație cu sursă ———
// `refs` trimite la cheile din BIO_SOURCES (lib/press.ts).
export const GINA = {
  eyebrow: "Despre Gina",
  title: "Gina Tăujan, psihonutriționist",
  lead: "Face reeducare alimentară de aproape zece ani. Numerele mici de la finalul paragrafelor trimit la surse: interviuri, emisiuni și articole în care apare.",
  paragraphs: [
    {
      text: "A început cu propria farfurie. Și-a schimbat întâi ea alimentația, a văzut că are mai multă energie și că zilele îi trec altfel, și abia după aceea a început să lucreze cu alți oameni. Într-un interviu din 2023 spunea că tot ce recomandă a încercat întâi pe pielea ei.",
      refs: ["nightclubber", "clinique"],
    },
    {
      text: "Primul program de reeducare alimentară l-a pus pe picioare prin 2016. Clinica la care a lucrat mai târziu îl descria drept un program care „nu este nici dietă, nici regim”. Regulile de bază au rămas aceleași de atunci: nu numeri calorii, nu cântărești mâncarea și nu stai cu stomacul gol.",
      refs: ["enspire", "clinique", "ela"],
    },
    {
      text: "Din 2020 a lucrat la The Clinique Herăstrău, în București, unde apărea în echipă ca nutriționist licențiat și psihonutriționist. Le analiza pacienților obiceiurile alimentare și le făcea planuri personalizate. Pe pagina ei de la clinică scria că obținuse de curând și certificarea în psihonutriție, ramura care se ocupă de legătura dintre ce mâncăm și ce simțim.",
      refs: ["clinique", "smark"],
    },
    {
      text: "Din septembrie 2025 vine regulat la „Super Neatza”, pe Antena 1, unde a vorbit despre mâncatul emoțional de sărbători, despre ce mâncăm când suntem obosiți și despre capcana curelor de slăbire. Între timp, Digi24 a început s-o întrebe pentru articolele de sănătate: cât să bei pe caniculă, ce e cu postul intermitent, ce lapte se potrivește la stomac sensibil.",
      refs: ["a1", "digi"],
    },
    {
      text: "Pe Ela Crăciun a avut-o mai întâi clientă. În mai 2024, Ela a chemat-o în podcastul ei, „Cu Ela la doctor”, și a povestit acolo că, lucrând cu Gina, a reînvățat să mănânce. Click!, CSID și Ciao.ro au preluat povestea în zilele următoare.",
      refs: ["ela", "click"],
    },
    {
      text: "A colaborat cu Bianca Adam și cu Nuță Kiki și a fost invitată la „Portrait of a Woman”, maratonul Cristinei Ich. Câțiva ani a avut și cursuri online pe Enspire, printre care unul pentru familie, care pornea de la alimentația din sarcină și ajungea la diversificarea bebelușului. Acum lucrează doar unu la unu. Pe Instagram o urmăresc în jur de 39.000 de oameni.",
      refs: ["bianca", "poaw", "familie"],
    },
  ],
  facts: [
    { k: "Titlu", v: "Nutriționist licențiat și psihonutriționist" },
    { k: "Lucrează din", v: "aprox. 2016" },
    { k: "Program", v: "1:1, online" },
    { k: "Instagram", v: "@healthybyginna, ~39.000" },
  ],
  timeline: [
    { year: "2016", text: "Primul program de reeducare alimentară", ref: "enspire" },
    { year: "2020", text: "Intră în echipa The Clinique Herăstrău. Filmează cu Bianca Adam", ref: "smark" },
    { year: "2021", text: "Certificarea în psihonutriție apare pe pagina ei de la clinică", ref: "clinique" },
    { year: "2022", text: "Lansează cursul online pe Enspire. Campanie cu cofetăria Rawmantic", ref: "rawmantic" },
    { year: "2023", text: "Interviu pentru Nightclubber.ro", ref: "nightclubber" },
    { year: "2024", text: "Podcastul „Cu Ela la doctor”. Pornește seria săptămânală Keepin' Up With Ginny", ref: "ela" },
    { year: "2025", text: "Din septembrie, invitată la Super Neatza, pe Antena 1. Curs pentru familie", ref: "a1" },
    { year: "2026", text: "Digi24 o citează tot mai des pe teme de nutriție", ref: "digi" },
  ],
  // Citatul de sub portret: cuvintele ei, din podcastul cu Ela Crăciun.
  quoteCard: "Când eu mă gândesc doar să slăbesc, am ajuns doar până la jumătatea drumului.",
  quoteSource: "Cu Ela la doctor, 2024",
};

export const MEDIA = {
  eyebrow: "În presă",
  title: "La TV și în presă",
  intro:
    "Emisiunile în care a fost invitată și articolele în care e citată. Fiecare duce la pagina originală, ca să le poți vedea cu ochii tăi.",
  tvLabel: "Emisiuni și podcasturi",
  pressLabel: "Articole",
  more: "Vezi toate articolele",
  less: "Arată mai puține",
};

export const METHOD = {
  eyebrow: "Metoda",
  title: "Cum funcționează",
  sub: "Regulile sunt puține. Partea grea e să le ții și într-o marți oarecare, și vineri seara, și de-asta ai pe cineva lângă tine.",
  steps: [
    {
      n: "01",
      title: "Pornești de unde ești",
      desc: "Prima discuție e despre ce mănânci acum: la ce oră, cât timp ai de gătit, ce nu-ți place deloc. Planul se face pe viața pe care o ai, cu serviciu, copii și zile în care nu apuci să mănânci la prânz.",
    },
    {
      n: "02",
      title: "Nu tai nimic",
      desc: "Ciocolata nu dispare din viața ta. Lucrezi la cât și când o mănânci, iar de cele mai multe ori pofta scade singură după câteva săptămâni.",
    },
    {
      n: "03",
      title: "Un obicei pe rând",
      desc: "Nu schimbi totul de luni. Azi poate fi o ciorbă de lobodă cu leuștean în locul celei de burtă, mâine altceva. Treci la următorul obicei abia când primul a devenit firesc.",
    },
    {
      n: "04",
      title: "Gândești în culori",
      desc: "Dacă ai trei-patru culori în farfurie, aproape sigur ai destule legume. E un test pe care îl faci în două secunde, acasă sau la restaurant.",
    },
  ],
};

export const SERVICES = {
  eyebrow: "Pentru cine e",
  title: "De ce vin oamenii",
  sub: "Puțini vin doar pentru kilograme. De obicei e un amestec de balonare, poftă de dulce seara și oboseala că le-au încercat deja pe toate.",
  items: [
    {
      title: "Slăbit și menținut",
      desc: "Slăbești fără să-ți fie foame și fără grabă. Nu ții totul în frâu cu dinții strânși, așa că nu vine nici momentul în care cedezi și pui totul la loc.",
      tag: "cel mai des",
      cta: "Scrie START",
      href: CONTACT.startHref,
    },
    {
      title: "Digestie",
      desc: "Te balonezi după aproape orice masă și seara abia îți închei pantalonii? De multe ori problema ține de ritmul meselor și de combinații, și se poate rezolva fără să-ți întorci viața pe dos.",
      tag: "",
      cta: "Întreabă de digestie",
      href: CONTACT.startHref,
    },
    {
      title: "Hormoni și ciclu",
      desc: "La unele femei, cea mai mare diferență e la ciclu. Vine mai regulat, doare mai puțin, iar corpul e mai pregătit pentru o sarcină.",
      tag: "",
      cta: "Întreabă de hormoni",
      href: CONTACT.startHref,
    },
    {
      title: "După sarcină",
      desc: "Cu un bebeluș în brațe și nopți nedormite, nu e momentul pentru restricții. Îți revii încet, și ca energie, și ca siluetă, cât te lasă cel mic.",
      tag: "",
      cta: "Scrie când ești gata",
      href: CONTACT.startHref,
    },
    {
      title: "În doi sau cu familia",
      desc: "Când toată casa mănâncă la fel, gătești o singură dată și nu mai stai cu ochii pe punga de chipsuri a partenerului.",
      tag: "",
      cta: "Veniți împreună",
      href: CONTACT.startHref,
    },
    {
      title: "Pofte și ronțăit",
      desc: "Dulcele de după masă are de multe ori o cauză banală: ai băut prea puțină apă, ai sărit o masă sau ai avut o zi lungă. După ce afli care e, pofta se potolește.",
      tag: "",
      cta: "Începe cu poftele",
      href: CONTACT.startHref,
    },
  ],
};

export const JOURNEY = {
  eyebrow: "Cum decurge programul",
  title: "Opt săptămâni, în două etape",
  intro:
    "Nu primești un PDF pe mail cu „baftă”. În cele 56 de zile vorbești cu Gina în fiecare zi.",
  phases: [
    {
      label: "Etapa 1",
      days: "Zilele 1–35",
      title: "Planuri făcute pentru tine",
      desc: "Planurile pleacă de la ce-ți place, ce nu mănânci și cât timp ai de stat la cratiță. Ingredientele le găsești la piață sau la magazinul de la colț, nu în plicuri cu pudră.",
      points: [
        "Planuri după gustul și programul tău",
        "Nu cântărești și nu numeri nimic",
        "Îi trimiți poze cu mesele și primești răspuns",
        "Planul se schimbă din mers, dacă e nevoie",
      ],
    },
    {
      label: "Etapa 2",
      days: "Zilele 36–56",
      title: "Te descurci singură",
      desc: "În ultimele trei săptămâni îți faci singură mesele, iar Gina rămâne pe fir pentru întrebări. La final știi ce să pui în farfurie fără să mai întrebi pe nimeni.",
      points: [
        "Îți compui singură farfuria",
        "Mănânci așa fără să te mai gândești",
        "Știi ce să comanzi la restaurant sau în concediu",
        "Nu te mai certi cu mâncarea",
      ],
    },
  ],
  support:
    "Din prima până în ultima zi îi scrii direct Ginei. Ea îți citește mesajele și tot ea îți răspunde.",
};

// numele imaginilor (media.json) se leagă în lib/media + scripts/process-images.mjs
// Titlurile corespund fotografiilor reale gătite de ea.
export const RECIPES = {
  eyebrow: "Din bucătărie",
  title: "Gândim în culori",
  intro:
    "Câteva farfurii gătite de Gina acasă, din ce era de sezon. Nu-ți trebuie nimic special ca să le faci.",
  items: [
    { name: "recipe-1", title: "Mic dejun cu ou și cartof dulce" },
    { name: "recipe-2", title: "Omletă verde cu ierburi de grădină" },
    { name: "recipe-3", title: "Salată cu chiftele de năut" },
    { name: "recipe-4", title: "Hummus de ardei copt cu semințe" },
    { name: "recipe-5", title: "Terci de ovăz cu curmale și cocos" },
    { name: "recipe-6", title: "Apă cu grapefruit" },
  ],
};

export const TRANSFORMARI = {
  eyebrow: "Rezultate",
  title: "Rezultatele lor",
  intro:
    "Oameni care au trecut prin program și au acceptat să-și arate pozele. Nimeni n-a ținut foame, iar kilogramele n-au plecat peste noapte.",
  disclaimer:
    "Pozele sunt publicate cu acordul lor. Rezultatele diferă de la om la om.",
  // TODO: de cerut Ginei detaliul real din spatele fiecărei poze (durată, context) — titlurile devin și mai personale.
  items: [
    { name: "transform-1", title: "Rochia roșie, în sfârșit", caption: "Cea pe care o ținea în dulap" },
    { name: "transform-2", title: "Talie nouă", caption: "Cu mese normale" },
    { name: "transform-3", title: "Abdomen mai tonifiat", caption: "În câteva luni" },
    { name: "transform-4", title: "Mișcarea a venit de la sine", caption: "Nu a obligat-o nimeni" },
    { name: "transform-5", title: "Merge și la bărbați", caption: "Aceleași reguli" },
    { name: "transform-6", title: "Ten mai curat", caption: "Un efect la care nu se aștepta" },
  ],
};

export const TESTIMONIALS = {
  eyebrow: "Mesaje primite",
  title: "Ce îi scriu oamenii",
  items: [
    {
      quote:
        "Când am apelat eu la Gina, s-a întâmplat un miracol și practic am reînvățat să mănânc. Dacă respect regulile și mănânc corect, nu mai simt nevoia de dulciuri.",
      author: "Ela Crăciun, în podcastul „Cu Ela la doctor”",
      kind: "quote",
    },
    {
      quote:
        "Datorită ție am reușit să nu mai mănânc după ora 20, haotic și prost, să păstrez pauzele între mese și să îmi stăpânesc poftele. Nu aș fi crezut că e atât de simplu. Love you forever!",
      author: "Mesaj de la o clientă",
      kind: "quote",
    },
    {
      quote:
        "Stomăcelul e super happy, nu mă doare, nu mă simt înfometată. Sora mea îmi tot spune că nu mai sunt umflată. Până și lucrurile din viața mea merg mai bine de când am început acest stil de viață.",
      author: "Mesaj primit din comunitate",
      kind: "quote",
    },
  ],
  stats: [
    { to: 39000, decimals: 0, prefix: "~", suffix: "", label: "urmăritori pe Instagram" },
    { to: 30, decimals: 0, prefix: "", suffix: "+", label: "apariții la TV și în presă" },
    { to: 56, decimals: 0, prefix: "", suffix: "", label: "zile de program" },
    { to: 100, decimals: 0, prefix: "", suffix: "%", label: "online" },
  ],
};

export const PRICING = {
  eyebrow: "Cum lucrezi cu Gina",
  title: "Doar unu la unu",
  sub: "Cursurile online s-au încheiat. Acum Gina lucrează doar individual, ca să aibă timp să răspundă fiecăruia.",
  cards: [
    {
      name: "Programul de reeducare 1:1",
      price: null,
      currency: "",
      highlight: true,
      desc: "56 de zile cu planuri făcute pentru tine și cu cineva care chiar îți răspunde la mesaje.",
      includes: [
        "Planuri personalizate în primele 35 de zile",
        "Ultimele 21 de zile, pe cont propriu",
        "Mesaje zilnice direct cu Gina",
        "Mâncare normală, nu porții la gram",
      ],
      cta: "Scrie START",
      href: CONTACT.startHref,
    },
    {
      name: "Încă te gândești?",
      price: "Gratuit",
      currency: "",
      highlight: false,
      desc: "Nu te grăbește nimeni. Uită-te întâi pe Instagram la rețete, la rezultate și la cum vorbește Gina despre mâncare.",
      includes: [
        "Rețete simple, de sezon",
        "Poveștile oamenilor din program",
        "Sfaturi despre relația cu mâncarea",
        "Când te hotărăști, scrii START",
      ],
      cta: "Urmărește pe Instagram",
      href: CONTACT.instagram,
    },
  ],
  note: "Prețul nu e afișat pentru că fiecare program se face de la zero. Scrie START pe Instagram și primești toate detaliile.",
};

export const FAQ = {
  eyebrow: "Întrebări",
  title: "Întrebări frecvente",
  items: [
    {
      q: "E o dietă?",
      a: "Nu. O dietă se termină la un moment dat și de cele mai multe ori te întorci exact de unde ai plecat. Reeducarea alimentară schimbă felul în care mănânci de acum înainte. Mulți ajung aici după câteva diete ținute cu dinții.",
    },
    {
      q: "Trebuie să număr caloriile sau să cântăresc mâncarea?",
      a: "Nu. Nu numeri calorii și nu cântărești nimic. Te uiți la farfurie, la cât de colorată e și la cum te simți după masă.",
    },
    {
      q: "Trebuie să renunț la ce-mi place?",
      a: "Aproape toată lumea întreabă asta la început. Mâncarea preferată o păstrezi. Se schimbă cât de des o mănânci și ce pui lângă ea.",
    },
    {
      q: "Cât durează?",
      a: "56 de zile. În primele 35 primești planuri făcute pentru tine, iar în ultimele 21 înveți să-ți faci singură mesele.",
    },
    {
      q: "Merge dacă mănânc des la restaurant sau comand?",
      a: "Da. Înveți să citești meniul altfel: o salată cu două garnituri, cartofi copți, pește cu legume, sparanghel la grătar. Variante de felul ăsta găsești aproape peste tot.",
    },
    {
      q: "Cât costă?",
      a: "Depinde de ce ai nevoie, așa că prețul îl afli după prima discuție. Scrie START pe Instagram și Gina îți trimite detaliile.",
    },
    {
      q: "Vin pentru digestie și hormoni, nu pentru slăbit. Mă ajută?",
      a: "Da. Multe femei vin pentru balonare, dureri menstruale sau oboseală, iar kilogramele sunt pe locul doi.",
    },
    {
      q: "Cine e Gina Tăujan?",
      a: "Psihonutriționist, face reeducare alimentară din jurul lui 2016. E invitată la Super Neatza, pe Antena 1, iar Digi24 o citează des. Mai multe, cu surse, găsești la „Despre Gina”.",
    },
  ],
};

export const CONTACT_SECTION = {
  eyebrow: "Începe",
  title: "Ultimul tău „de luni” poate fi azi",
  intro:
    "Scrie START pe Instagram și primești detaliile despre program. Îți răspunde chiar Gina.",
  formLabels: {
    name: "Numele tău",
    phone: "Instagram sau telefon",
    message: "Ce te-a adus aici?",
    messagePlaceholder: "Câteva rânduri despre ce te frământă.",
    submit: "Trimite pe Instagram",
    success:
      "Mesajul e copiat și se deschide Instagram. Lipește-l în conversație și primești răspuns cât mai repede.",
  },
  dmMsg: "START. Bună, Gina! Aș vrea să aflu mai multe despre programul 1:1.",
};

export const FOOTER = {
  tagline: "We don't diet. We lifestyle. 🍉",
  credit:
    "Gina Tăujan · Psihonutriționist · #WEDONTDIETWELIFESTYLE",
};
