// Toate textele site-ului Gina Tăujan · Healthy by Ginna.
// Scrise în vocea ei reală: fraze din bio-ul și interviurile ei, ton de story de Instagram.
// Ofertă actuală: DOAR Programul de reeducare 1:1. Cursul online (499 lei) s-a încheiat.
//
// ⚠️ TODO ÎNAINTE DE PUBLICARE (cere-i Ginei):
//   1. Numărul de WhatsApp business — momentan canalul „START” e Instagram DM (funcțional).
//   2. Prețul Programului 1:1 — acum e „personalizat, la cerere”.
//   3. Domeniul real (folosit acum: healthybyginna.ro).
//   4. Acordul pentru testimonialele reale (sunt mesajele ei publice, anonimizate).

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
};

export const NAV = [
  { label: "Despre", href: "#despre" },
  { label: "Metoda", href: "#metoda" },
  { label: "Program", href: "#programe" },
  { label: "Rezultate", href: "#rezultate" },
  { label: "Rețete", href: "#retete" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  // Tagline-ul ei real, din bio: „Redescoperă libertatea în relația cu mâncarea."
  titleLines: ["Redescoperă", "libertatea", "în relația cu mâncarea."],
  emphasis: "libertatea",
  sub: "Sunt Gina, psihonutriționist. De peste 7 ani îi învăț pe oameni să mănânce normal: fără foame, fără cântar, fără numărat calorii. Și da, se poate.",
  ctaPrimary: "Începe Programul 1:1",
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
    "La mine nu-ți iau nimic. Nici pâinea, nici cafeaua cu lapte, nici mesele cu ai tăi. Slăbești mâncând. Știu cum sună, dar exact asta fac de peste 7 ani. Iar când corpul simte că ai grijă de el, se relaxează și dă drumul la ce are în plus.",
    "Știu cum e. Ții dietă, slăbești, pui la loc, te simți vinovată. Se iese din cercul ăsta. Am văzut-o de sute de ori.",
  ],
  // Citatul ei real, din interviuri.
  pull: "Rezultatele apar. Nu peste noapte. Ci atunci când începi, în sfârșit, să ai răbdare cu tine.",
  bullets: ["Fără foame", "Fără cântar", "Fără numărat calorii", "Gândim în culori"],
};

export const ABOUT = {
  eyebrow: "Despre mine",
  title: "Am reînvățat să mănânc. Acum te învăț și pe tine.",
  paragraphs: [
    "Am început cu mine. Mi-am schimbat felul în care mănânc și nu m-am mai oprit. De peste 7 ani fac asta cu oamenii, unul câte unul.",
    "Astăzi lucrez doar unu la unu, în programul meu de reeducare de 56 de zile. Fără cursuri, fără planuri de-a gata. Eu și omul din fața mea, zi de zi.",
    "În rest, gătesc și mănânc colorat, de sezon, cu poftă. Mă găsești online, de oriunde ai fi, și uneori la les_figs, locul meu preferat de delicatese.",
  ],
  quoteCard: "Vreau să gândim în culori.",
  credentials: [
    { title: "Psihonutriționist", desc: "Lucrez cu farfuria și cu ce e în spatele ei." },
    { title: "7+ ani de lucru cu oamenii", desc: "Sute de oameni ghidați, unul câte unul." },
    { title: "Ca la TV și în presă", desc: "Super Neatza, Antena 3, podcasturi." },
    { title: "O comunitate de ~39.000", desc: "Oameni care au ales să mănânce normal." },
  ],
};

export const METHOD = {
  eyebrow: "Cum lucrez",
  title: "Ce înseamnă să mănânci echilibrat",
  sub: "Nu vin cu reguli și interdicții. Corpul tău îți spune deja ce are nevoie. Eu doar te învăț să-l asculți.",
  steps: [
    {
      n: "01",
      title: "Pornim de la tine",
      desc: "Ce mănânci acum, cum arată zilele tale, ce îți dorești. Plecăm de la viața ta așa cum e ea azi.",
    },
    {
      n: "02",
      title: "Fără liste de interdicții",
      desc: "Nu tai nimic din ce iubești. Nici măcar ciocolata. Învățăm cum și cât.",
    },
    {
      n: "03",
      title: "Pas cu pas",
      desc: "Schimbăm câte un obicei. Unul. Dacă ieri ai mâncat o ciorbă de burtă, azi poți încerca o ciorbă de lobodă cu leuștean. Când s-a lipit, trecem la următorul.",
    },
    {
      n: "04",
      title: "Gândim în culori",
      desc: "Farfurii colorate, mâncare de sezon, multe legume. Simplu și cu gust.",
    },
  ],
};

export const SERVICES = {
  eyebrow: "Programul 1:1",
  title: "Cu ce te pot ajuta",
  sub: "Programul 1:1 este pentru tine dacă simți că ai încercat multe variante până acum, dar încă îți dorești o relație mai liniștită cu mâncarea și cu propriul corp. Astea sunt lucrurile cu care vin oamenii la mine cel mai des.",
  items: [
    {
      title: "Slăbire și menținere",
      desc: "Nu doar că vine slăbitul. De aici vine chiar menținutul. Fac rost de siluetă și o păstrez pentru tot restul vieții.",
      tag: "cel mai des",
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
    {
      title: "Digestie liniștită",
      desc: "Te balonezi de la orice și seara te simți umflată? Știu. Punem ordine în mese, în ritmul tău, fără să-ți întorc viața pe dos.",
      tag: "",
      cta: "Hai să vorbim despre asta",
      href: CONTACT.startHref,
    },
    {
      title: "Echilibru hormonal",
      desc: "Pe lista mea de impresionat nu sunt kilogramele. Sunt analizele mai bune, durerile de menstruație care dispar, un corp pregătit pentru sarcină.",
      tag: "",
      cta: "Povestim în DM?",
      href: CONTACT.startHref,
    },
    {
      title: "Mame, după sarcină",
      desc: "Îți recapeți energia și silueta încet, cum poți tu acum. Nu se grăbește nimeni.",
      tag: "",
      cta: "Când ești gata, scrie-mi",
      href: CONTACT.startHref,
    },
    {
      title: "În doi sau cu familia",
      desc: "Vii cu partenerul sau schimbați obiceiurile în toată casa. Merge mai ușor împreună.",
      tag: "",
      cta: "Veniți împreună?",
      href: CONTACT.startHref,
    },
    {
      title: "Poftele și ronțăitul",
      desc: "„Șoricelul” din capul pieptului care cere ceva dulce după fiecare masă? Îl știu pe de rost. De multe ori e doar lipsa apei sau o masă sărită. Ne uităm de unde vine și îl liniștim.",
      tag: "",
      cta: "Începem de aici",
      href: CONTACT.startHref,
    },
  ],
};

export const JOURNEY = {
  eyebrow: "Cum decurge Programul 1:1",
  title: "56 de zile, în doi pași",
  intro:
    "Nu primești un plan pe mail și baftă. Suntem în legătură în fiecare zi, 56 de zile.",
  phases: [
    {
      label: "Etapa 1",
      days: "Zilele 1–35",
      title: "Planuri personalizate",
      desc: "Îți fac planurile după viața ta. Ce îți place, ce nu, cât timp ai de gătit. Mâncare normală, de la piață, nu pudre și cutiuțe.",
      points: [
        "Planuri pe gustul și programul tău",
        "Mâncăm normal, nu numărăm nimic",
        "Îmi trimiți mesele, eu îți răspund",
        "Ajustăm din mers, după cum te simți",
      ],
    },
    {
      label: "Etapa 2",
      days: "Zilele 36–56",
      title: "Te descurci singură",
      desc: "Ultimele trei săptămâni sunt despre tine, fără mine. Înveți să-ți compui singură mesele, ca să nu mai ai nevoie de nimeni de aici încolo.",
      points: [
        "Îți faci farfuria fără să mă mai întrebi nimic",
        "Obiceiurile devin ale tale",
        "Restaurant, vacanță, zile pline? Te descurci",
        "Ieși cu liniște în relația cu mâncarea",
      ],
    },
  ],
  support:
    "În toate cele 56 de zile îmi scrii direct mie. Nu unui asistent, nu unui robot. Mie.",
};

// numele imaginilor (media.json) se leagă în lib/media + scripts/process-images.mjs
// Titlurile corespund fotografiilor reale gătite de ea.
export const RECIPES = {
  eyebrow: "Bucătăria mea",
  title: "Gândim în culori",
  intro:
    "Așa arată mâncarea la mine acasă. Simplă, colorată, făcută cu poftă:",
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
  title: "Așa arată răbdarea cu tine.",
  intro:
    "Oameni adevărați din programul meu. Fără înfometare și fără minuni peste noapte.",
  disclaimer:
    "Rezultate individuale, publicate cu acordul lor. Fiecare corp are ritmul lui.",
  // TODO: de cerut Ginei detaliul real din spatele fiecărei poze (durată, context) — titlurile devin și mai personale.
  items: [
    { name: "transform-1", title: "Rochia aia roșie, în sfârșit", caption: "În ținuta ei preferată" },
    { name: "transform-2", title: "Talie nouă, fără nicio dietă", caption: "Doar mese normale" },
    { name: "transform-3", title: "Abdomen mai tonifiat", caption: "Cu răbdare, pas cu pas" },
    { name: "transform-4", title: "Pofta de mișcare a venit singură", caption: "Nimeni n-a obligat-o" },
    { name: "transform-5", title: "Rezultate și pentru el", caption: "Da, merge și la bărbați" },
    { name: "transform-6", title: "Piele mai curată", caption: "S-a văzut și pe ten" },
  ],
};

export const TESTIMONIALS = {
  eyebrow: "Din conversațiile mele",
  title: "Ce îmi scriu oamenii",
  items: [
    {
      quote:
        "Când am apelat eu la Gina, s-a întâmplat un miracol și practic am reînvățat să mănânc. Dacă respect regulile și mănânc corect, nu mai simt nevoia de dulciuri.",
      author: "Ela Crăciun",
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
    { to: 39000, decimals: 0, prefix: "~", suffix: "", label: "comunitate Instagram" },
    { to: 7, decimals: 0, prefix: "", suffix: "+", label: "ani experiență" },
    { to: 56, decimals: 0, prefix: "", suffix: "", label: "zile de program" },
    { to: 100, decimals: 0, prefix: "", suffix: "%", label: "online, de oriunde" },
  ],
};

export const PRICING = {
  eyebrow: "Cum lucrăm",
  title: "Lucrez doar unu la unu",
  sub: "Am renunțat la cursuri și la planurile de-a gata. Vreau să fiu cu adevărat acolo pentru fiecare om cu care lucrez.",
  cards: [
    {
      name: "Programul de reeducare 1:1",
      price: null,
      currency: "",
      highlight: true,
      desc: "56 de zile în care lucrăm împreună, zi de zi. Planuri făcute pentru tine și un om care chiar îți răspunde.",
      includes: [
        "Planuri personalizate, primele 35 de zile",
        "Autonomie, ultimele 21 de zile",
        "Mesaje zilnice, direct cu mine",
        "Mâncare normală, nu porții la gram",
      ],
      cta: "Scrie-mi START",
      href: CONTACT.startHref,
    },
    {
      name: "Mă cunoști întâi",
      price: "Gratuit",
      currency: "",
      highlight: false,
      desc: "Nu e nicio grabă. Vezi cum gândesc și cum arată rezultatele.",
      includes: [
        "Rețete simple și colorate",
        "Transformările oamenilor din program",
        "Mesajele mele despre relația cu mâncarea",
        "Când ești gata, scrie-mi START",
      ],
      cta: "Urmărește-mă pe Instagram",
      href: CONTACT.instagram,
    },
  ],
  note: "Nu am preț afișat. Sincer, nu există două programe la fel. Scrie-mi START și îți răspund chiar eu.",
};

export const FAQ = {
  eyebrow: "Mă întrebați des",
  title: "Ce mă întreabă toată lumea",
  items: [
    {
      q: "E o dietă?",
      a: "Pe bune, nu. Dietele sunt exact motivul pentru care oamenii ajung la mine. Înveți să mănânci normal, fără să-ți mai fie frică de mâncare.",
    },
    {
      q: "Trebuie să număr caloriile sau să cântăresc mâncarea?",
      a: "Nu. La mine nu se numără calorii și nu se cântărește nimic. Gândim în culori. De cifre ne-am săturat toate.",
    },
    {
      q: "Renunț la ce-mi place?",
      a: "Asta e prima frică a tuturor. Nu trebuie să renunțăm la nimic. Schimbarea vine natural, fără stres.",
    },
    {
      q: "Cât durează?",
      a: "56 de zile. În primele 35 primești planuri făcute pentru tine, iar în ultimele 21 înveți să te descurci singură.",
    },
    {
      q: "Merge dacă mănânc la restaurant sau comand?",
      a: "Da, sigur. La restaurant îmi pot comanda o salată lângă care mai pun două garnituri, o porție de cartofi copți sau sparanghel la grătar. Sau legume cu pește. Exact asta înveți: să alegi oriunde ai fi.",
    },
    {
      q: "Cât costă?",
      a: "Programul e făcut pe tine, așa că și prețul e personalizat. Scrie-mi START pe Instagram și vorbim.",
    },
    {
      q: "Vin pentru digestie și hormoni, nu pentru slăbit. Mă ajută?",
      a: "Da. Multe dintre fetele cu care lucrez vin pentru digestie, menstruație fără dureri sau energie. Kilogramele sunt doar o parte din poveste.",
    },
  ],
};

export const CONTACT_SECTION = {
  eyebrow: "Hai să începem",
  title: "Ultimul tău „de luni” poate fi azi",
  intro:
    "Dacă simți că e momentul să faci pace cu mâncarea și să construiești obiceiuri care să reziste, scrie-mi START pe Instagram și îți dau toate detaliile. 🤍",
  formLabels: {
    name: "Numele tău",
    phone: "Instagram sau telefon",
    message: "Ce te aduce aici?",
    messagePlaceholder: "Scrie-mi în două vorbe ce te frământă.",
    submit: "Scrie-mi START pe Instagram",
    success:
      "Ți-am copiat mesajul și îți deschid Instagram. Lipește-l în conversație și îți răspund cât pot de repede. 🤍",
  },
  dmMsg: "START — Bună, Gina! Aș vrea să aflu mai multe despre programul 1:1.",
};

export const FOOTER = {
  tagline: "We don't diet. We lifestyle. 🍉",
  credit:
    "Gina Tăujan · Psihonutriționist · 7+ ani alături de oameni · #WEDONTDIETWELIFESTYLE",
};
