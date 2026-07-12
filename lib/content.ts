// Toate textele site-ului Gina Tăujan · Healthy by Ginna.
// Copywriting în vocea ei reală (anti-dietă, #WEDONTDIETWELIFESTYLE).
// Fapte din brief-ul Orevo + material real de pe pagina ei. Fără prețuri/afirmații inventate.
//
// ⚠️ TODO ÎNAINTE DE PUBLICARE (cere-i Ginei):
//   1. Numărul de WhatsApp business — momentan canalul principal „START” e Instagram DM
//      (ig.me/m/healthybyginna, funcțional). Dacă preferă WhatsApp, schimbă startHref pe wa.me.
//   2. Prețurile exacte (Program 1:1, Familie, În DOI) — acum sunt „la cerere”.
//   3. Domeniul real (folosit acum: healthybyginna.ro).
//   4. Acordul pentru testimonialele reale de mai jos (preluate din mesajele ei publice, anonimizate).
//   5. Studii/credibilitate exactă în spatele titlului „psihonutriționist”.

export const CONTACT = {
  brand: "Gina Tăujan",
  brandFull: "Healthy by Ginna",
  role: "Psihonutriționist",
  startWord: "START",
  instagram: "https://www.instagram.com/healthybyginna/",
  instagramHandle: "@healthybyginna",
  // Deep-link direct în DM-ul de Instagram (canalul ei real pentru „scrie-mi START”).
  startHref: "https://ig.me/m/healthybyginna",
  facebook: "https://www.facebook.com/healthybyginna/",
  courses: "https://enspire.ro/ginna/",
  courseMain: "https://enspire.ro/product/curs-reeducare-alimentara/",
  kuwg: "https://enspire.ro/product/kuwg/",
};

export const NAV = [
  { label: "Despre", href: "#despre" },
  { label: "Metoda", href: "#metoda" },
  { label: "Programe", href: "#programe" },
  { label: "Rezultate", href: "#rezultate" },
  { label: "Rețete", href: "#retete" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  eyebrow: "Fondatoarea Reeducării Alimentare în România",
  titleLines: ["Nu ai nevoie", "de încă o dietă.", "Ai nevoie de un proces."],
  emphasis: "Ai nevoie de un proces.",
  sub: "Te învăț să mănânci fără frustrări, fără foame și fără să numeri caloriile. Îți recapeți silueta și o păstrezi pentru tot restul vieții — cu liniște în relația cu mâncarea.",
  ctaPrimary: "Începe cu Programul 1:1",
  ctaSecondary: "Scrie-mi START",
  trust: [
    "7+ ani experiență",
    "~39.000 comunitate",
    "Ca la TV",
    "56 de zile",
    "100% online",
  ],
};

export const PRESS = {
  label: "M-ai văzut la",
  items: [
    "Super Neatza cu Răzvan și Dani · Antena 1",
    "Numai de Bine · Antena 3 CNN",
    "Cu Ela la doctor · podcast",
    "Portrait of a Woman by Cristina Ich",
    "Rawmantic",
    "les_figs",
  ],
};

export const MANIFESTO = {
  eyebrow: "Filozofia mea",
  title: "Fă pace cu mâncarea.",
  paragraphs: [
    "În reeducarea alimentară nu există frustrări alimentare. Nu facem foamea, nu cântărim mâncarea, nu numărăm caloriile. Fac rost de siluetă și o păstrez pentru tot restul vieții. Mai mult, am liniște în relația cu mâncarea.",
    "Ai încercat de zeci de ori. Ai ținut, ai renunțat, ai luat kilogramele înapoi și, de fiecare dată, ai rămas cu un gust amar: senzația că tu ești problema. Nu ești. Dietele sunt.",
  ],
  pull: "Oamenii nu mai au nevoie de încă o dietă. Au nevoie de un proces.",
  bullets: ["Fără foame", "Fără calorii", "Fără interdicții", "Gândim în culori"],
};

export const ABOUT = {
  eyebrow: "Despre mine",
  title: "Am reînvățat să mănânc. Acum te învăț și pe tine.",
  paragraphs: [
    "Ceea ce a început ca o schimbare în alimentația mea personală s-a transformat într-o pasiune care, de mai bine de 7 ani, schimbă viețile oamenilor. Nu am pornit dintr-o teorie. Am pornit din propria mea nevoie de echilibru.",
    "Acum aproape 6 ani am pus bazele primului Program de Reeducare Alimentară din România — un proces care a inspirat și a ajutat sute de oameni să iasă din cercul dietelor yo-yo și să-și regăsească liniștea în farfurie.",
    "Cred în mâncare vie, de sezon, colorată. Lucrez online, cu oameni de oriunde, și local, alături de magazinul de delicatese les_figs — pentru că sănătatea începe de la ce pui în coș, nu de la ce tai din listă.",
  ],
  quoteCard: "Vreau să gândim în culori.",
  credentials: [
    { title: "Psihonutriționist", desc: "Lucrez deopotrivă cu farfuria și cu relația ta cu mâncarea." },
    { title: "7+ ani în reeducare alimentară", desc: "Un proces testat pe sute de oameni reali, nu pe promisiuni." },
    { title: "Fondatoarea metodei în România", desc: "Primul Program de Reeducare Alimentară din țară." },
    { title: "O comunitate de ~39.000", desc: "Oameni care au ales lifestyle-ul în locul dietei." },
  ],
};

export const METHOD = {
  eyebrow: "Cum gândim",
  title: "Ce e reeducarea alimentară",
  sub: "Nu e o dietă. E felul în care înveți să mănânci pentru tot restul vieții — fără reguli absurde și fără vină.",
  steps: [
    {
      n: "01",
      title: "Pornim de la obiectivul tău",
      desc: "Siluetă, energie, digestie, echilibru hormonal — stabilim împreună unde vrei să ajungi și de ce contează pentru tine.",
    },
    {
      n: "02",
      title: "Îți observăm obiceiurile",
      desc: "Nu te judecăm. Ne uităm la cum mănânci acum, la programul tău și la preferințe, ca să construim pe realitatea ta, nu pe una ideală.",
    },
    {
      n: "03",
      title: "Schimbăm treptat, cu răbdare",
      desc: "Rezultatele apar. Nu peste noapte. Ci atunci când începi, în sfârșit, să ai răbdare cu tine. Pas cu pas, obiceiurile bune rămân.",
    },
    {
      n: "04",
      title: "Gândim în culori",
      desc: "Mâncare de sezon, colorată, cu multe legume. Nu interdicții și porții cântărite — echilibru, varietate și plăcere în farfurie.",
    },
  ],
};

export const SERVICES = {
  eyebrow: "Programe & cursuri",
  title: "Alegi cât de aproape vrei să fim",
  sub: "De la un curs în ritmul tău până la un proces personalizat, cu mine lângă tine în fiecare zi.",
  items: [
    {
      title: "Programul 1:1",
      desc: "Procesul complet, gândit doar pentru tine. 56 de zile, planuri personalizate și ghidare zilnică, până când obiceiurile bune devin ale tale.",
      tag: "cel mai popular",
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
    {
      title: "Curs de Reeducare Alimentară",
      desc: "Online, în ritmul tău. Lecții video cu principiile reeducării, planuri de masă pe 4 anotimpuri și 100 de rețete. 14 zile trial.",
      tag: "",
      cta: "Vezi cursul online",
      href: CONTACT.courseMain,
    },
    {
      title: "Keepin' Up With Ginny",
      desc: "Abonament pentru cei care au făcut cursul. Un episod pe săptămână, sâmbăta, „la o cafea”, cu invitați specialiști. 39,99 lei/lună, 14 zile trial gratuit.",
      tag: "",
      cta: "Descoperă KUWG",
      href: CONTACT.kuwg,
    },
    {
      title: "Reeducare pentru Familie",
      desc: "Un proces pentru părinți și copii deopotrivă — schimbăm obiceiurile întregii case, cu blândețe. Preț la cerere.",
      tag: "",
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
    {
      title: "Reeducare în DOI",
      desc: "Pentru cupluri. Formați cea mai bună echipă: aceleași obiceiuri sănătoase, împreună, în ritmul vostru. Preț la cerere.",
      tag: "",
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
    {
      title: "Cohorte tematice",
      desc: "Ediții de grup cu temă: Reset · Digest · MOM Find Your Flow · Slăbire & Menținere. Pentru un obiectiv anume, cu o comunitate alături.",
      tag: "",
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
  ],
};

export const JOURNEY = {
  eyebrow: "Cum decurge Programul 1:1",
  title: "56 de zile, în doi pași",
  intro:
    "Nu îți dau o dietă și te las singură cu ea. Construim un proces, pas cu pas, până când mâncatul sănătos devine felul tău firesc de a fi.",
  phases: [
    {
      label: "Etapa 1",
      days: "Zilele 1–35",
      title: "Planuri personalizate",
      desc: "Îți construiesc planuri alimentare adaptate nevoilor, programului și preferințelor tale. Mănânci mâncare adevărată, pe gustul tău, fără foame și fără restricții inutile.",
      points: [
        "Planuri făcute pe realitatea ta, nu pe un șablon",
        "Fără numărat calorii, fără cântărit obsesiv",
        "Feedback pentru mesele tale, zi de zi",
        "Ajustăm din mers, în funcție de cum te simți",
      ],
    },
    {
      label: "Etapa 2",
      days: "Zilele 36–56",
      title: "Autonomie",
      desc: "Acum îți iei zborul. Fixăm obiceiurile și înveți să-ți construiești singură mesele, ca să păstrezi rezultatul pentru tot restul vieții — nu doar 56 de zile.",
      points: [
        "Devii autonomă: alegi singură, cu încredere",
        "Fixăm obiceiurile care rămân pe termen lung",
        "Înveți să te descurci la restaurant și în vacanță",
        "Ieși cu liniște în relația cu mâncarea",
      ],
    },
  ],
  support:
    "În toate cele 56 de zile ești ghidată zilnic: îmi scrii mesele, îmi pui întrebări, iar eu îți răspund. Nu ești singură nicio zi.",
};

// numele imaginilor (media.json) se leagă în lib/media + scripts/process-images.mjs
// Titlurile corespund fotografiilor reale gătite de ea.
export const RECIPES = {
  eyebrow: "Bucătăria sănătoasă",
  title: "Gândim în culori",
  intro:
    "Mâncare de sezon, colorată și vie — dovada că sănătos nu înseamnă niciodată trist. Câteva farfurii reale din bucătăria mea:",
  items: [
    { name: "recipe-1", title: "Mic dejun cu ou și cartof dulce" },
    { name: "recipe-2", title: "Omletă verde cu ierburi de grădină" },
    { name: "recipe-3", title: "Salată colorată cu chiftele de năut" },
    { name: "recipe-4", title: "Hummus de ardei copt cu semințe" },
    { name: "recipe-5", title: "Terci de ovăz cu curmale și cocos" },
    { name: "recipe-6", title: "Apă infuzată cu grapefruit" },
  ],
};

export const TRANSFORMARI = {
  eyebrow: "Transformări reale",
  title: "Schimbări care se văd — și se simt",
  intro:
    "Fiecare poveste de mai jos e a unui om care a ales echilibrul în locul înfometării. Rezultatele diferă de la om la om, dar drumul e mereu același: sănătos, uman, fără chin.",
  disclaimer:
    "Rezultate individuale, publicate cu acordul clienților. Fiecare organism e diferit; rezultatele variază de la o persoană la alta.",
  items: [
    { name: "transform-1", title: "Din nou încrezătoare", caption: "În ținuta ei preferată" },
    { name: "transform-2", title: "O siluetă schimbată firesc", caption: "Fără foame, fără cântar" },
    { name: "transform-3", title: "Abdomen mai tonifiat", caption: "Cu răbdare, pas cu pas" },
    { name: "transform-4", title: "Energie și zâmbet regăsite", caption: "Mișcarea, cu plăcere" },
    { name: "transform-5", title: "Rezultate și pentru el", caption: "Reeducarea nu ține de gen" },
    { name: "transform-6", title: "Piele mai curată", caption: "Sănătatea începe în farfurie" },
  ],
};

export const TESTIMONIALS = {
  eyebrow: "Ce spun oamenii",
  title: "Miracolul e că înveți să mănânci din nou",
  items: [
    {
      quote:
        "Când am apelat eu la Gina, s-a întâmplat un miracol și practic am reînvățat să mănânc. Dacă respect regulile și mănânc corect, nu mai simt nevoia de dulciuri.",
      author: "Ela Crăciun",
      kind: "quote",
    },
    {
      quote:
        "Datorită ție am reușit să nu mai mănânc haotic, să-mi păstrez pauzele dintre mese și, mai mult, să-mi stăpânesc poftele și să îmbrățișez stilul de viață sănătos, mâncând colorat. Nu aș fi crezut că e atât de simplu. Mi-ai schimbat viața!",
      author: "Mesaj de la o cursantă",
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
    { to: 39000, decimals: 0, prefix: "~", suffix: "", label: "comunitate Instagram" },
    { to: 7, decimals: 0, prefix: "", suffix: "+", label: "ani experiență" },
    { to: 56, decimals: 0, prefix: "", suffix: "", label: "zile de transformare" },
    { to: 100, decimals: 0, prefix: "", suffix: "", label: "rețete incluse" },
  ],
};

export const PRICING = {
  eyebrow: "De unde începi",
  title: "Alege felul în care lucrăm împreună",
  sub: "Fie mă vrei alături în fiecare zi, fie preferi să înveți în ritmul tău — ai un drum limpede spre echilibru.",
  cards: [
    {
      name: "Programul 1:1 personalizat",
      price: null,
      currency: "",
      highlight: true,
      desc: "Procesul complet, gândit doar pentru tine, cu mine lângă tine în fiecare zi. 56 de zile care îți schimbă relația cu mâncarea pentru totdeauna.",
      includes: [
        "Planuri alimentare 100% personalizate (35 de zile)",
        "Autonomie și fixarea obiceiurilor (21 de zile)",
        "Ghidare și suport zilnic, direct de la mine",
        "Fără foame, fără calorii, fără cântărit",
      ],
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
    {
      name: "Învață în ritmul tău",
      price: "de la 499,99",
      currency: "lei",
      highlight: false,
      desc: "Curs online + acces la KUWG",
      includes: [
        "Lecții video cu principiile reeducării alimentare",
        "Planuri de masă pentru cele 4 anotimpuri și 100 de rețete",
        "14 zile trial ca să vezi dacă ți se potrivește",
        "Acces la Keepin' Up With Ginny — 39,99 lei/lună",
      ],
      cta: "Vezi cursul online",
      href: CONTACT.courseMain,
    },
  ],
  note: "Prețul Programului 1:1 este personalizat și ți-l trimit la cerere. Scrie-mi START și vorbim despre ce ți se potrivește.",
};

export const FAQ = {
  eyebrow: "Întrebări firești",
  title: "Ce mă întreabă toată lumea",
  items: [
    {
      q: "E o dietă?",
      a: "Nu, e exact opusul. Reeducarea alimentară nu îți ia mâncarea, ci îți dă înapoi libertatea de a mânca fără frustrări, fără foame și fără vină.",
    },
    {
      q: "Trebuie să număr caloriile sau să cântăresc mâncarea?",
      a: "Nu. Nu numărăm caloriile și nu cântărim obsesiv nimic. Gândim în culori și în porții, nu în cifre.",
    },
    {
      q: "Renunț la ce-mi place?",
      a: "Nu. Nu lucrăm cu interdicții. Înveți să echilibrezi, să alegi și să te bucuri de mâncare — nu să te privezi.",
    },
    {
      q: "Cât durează?",
      a: "Programul 1:1 durează 56 de zile: 35 de zile cu planuri personalizate și 21 de zile în care înveți autonomia și îți fixezi obiceiurile.",
    },
    {
      q: "Merge dacă mănânc la restaurant sau comand?",
      a: "Da. Ocazional e absolut firesc — te învăț cum să alegi, oriunde ai fi, ca viața ta reală să încapă în proces.",
    },
    {
      q: "Cât costă?",
      a: "Cursul online este de la 499,99 lei, iar KUWG 39,99 lei/lună. Programul 1:1 este personalizat, așa că prețul ți-l trimit la cerere — scrie-mi START.",
    },
    {
      q: "Vreau sănătate hormonală și digestie, nu doar kilograme. Mă ajută?",
      a: "Da. Mulți oameni vin la mine pentru energie, digestie mai bună, menstruație fără dureri sau un corp pregătit pentru sarcină. Reeducarea alimentară e despre sănătate, nu doar despre cifra de pe cântar.",
    },
  ],
};

export const CONTACT_SECTION = {
  eyebrow: "Hai să începem",
  title: "Corpul tău îți spune deja de ce are nevoie",
  intro:
    "Hai să facem echipă. Scrie-mi un cuvânt — START — și pornim împreună drumul spre liniște în relația cu mâncarea.",
  formLabels: {
    name: "Numele tău",
    phone: "Instagram sau telefon",
    message: "Ce te aduce aici?",
    messagePlaceholder:
      "Spune-mi în două vorbe ce te frământă și ce ți-ai dori să schimbi.",
    submit: "Scrie-mi START pe Instagram",
    success:
      "Ți-am copiat mesajul și îți deschid Instagram — lipește-l în conversație și îți răspund cât pot de repede. 🤍",
  },
  dmMsg:
    "START — Salut, Gina! Vreau să aflu mai multe despre Programul de Reeducare Alimentară 1:1.",
};

export const FOOTER = {
  tagline: "We don't diet. We lifestyle. 🍉",
  credit:
    "Gina Tăujan · Psihonutriționist · Fondatoarea Reeducării Alimentare în România · 7+ ani alături de oameni",
};
