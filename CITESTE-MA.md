# Site personal — Gina Tăujan · Healthy by Ginna

Site premium one-page, construit de Orevo pentru **Gina Tăujan** (psihonutriționist, „Fondatoarea Reeducării Alimentare în România"). Stack: **Next.js 16 + TypeScript + Tailwind v4 + Motion + Lenis**. Ton: anti-dietă, cald, `#WEDONTDIETWELIFESTYLE`.

## Cum îl pornești local

```bash
npm install
npm run dev        # http://localhost:3000  (în preview a rulat pe -p 3300)
npm run build      # verifică build-ul de producție
```

Publicare recomandată: **Vercel** (conectezi folderul, setezi domeniul real).

## Structura

- `app/` — layout + SEO/OpenGraph, `robots`, `sitemap`, JSON-LD (`components/StructuredData.tsx`).
- `components/` — secțiunile: Hero (video), PressBar, Manifesto, About, Method, Services (Programe), **Journey** (cei 56 de zile), Recipes, Testimonials, Pricing, Faq, Contact, Footer, FloatingCTA.
- `lib/content.ts` — **TOT textul site-ului** într-un singur loc (ușor de editat).
- `lib/media.json` + `lib/alt.ts` — imaginile optimizate (webp + blur) și alt-text-ul lor.
- `public/video/hero.mp4` — video-ul din hero (autoplay, mut, buclă + buton de sunet).
- `public/images/` — pozele optimizate (portret magazin + rețete).
- `scripts/process-images.mjs` — reprocesează pozele (rulează `node scripts/process-images.mjs`).

## Ce am folosit din materialele ei

- **Hero:** video-ul ei „Scurt și la obiect" (vertical), cu buton de pornit sunetul.
- **Despre:** portretul din magazinul de delicatese **les_figs** (coșul de cumpărături) — exact vibe-ul „farmer's market".
- **Rețete (6):** farfurii reale gătite de ea — mic dejun cu ou & cartof dulce, omletă cu ierburi, salată cu chiftele de năut, hummus de ardei copt, terci de ovăz, apă infuzată cu grapefruit.
- **Copywriting:** în vocea ei reală („Nu ai nevoie de încă o dietă. Ai nevoie de un proces.", „Gândim în culori", „Fă pace cu mâncarea", `#WEDONTDIETWELIFESTYLE`).
- **Testimoniale:** Ela Crăciun (verbatim) + 2 mesaje reale din comunitatea ei (anonimizate).
- Am evitat intenționat **pozele before/after** de pe Facebook — contrazic brandul ei anti-dietă (fără cântar, fără „minus X kg").

## ⚠️ DE CONFIRMAT CU GINA înainte de publicare

1. **Canal de contact.** CTA-ul „Scrie-mi START" duce acum spre **Instagram DM** (`ig.me/m/healthybyginna`), pentru că acolo vinde ea. Dacă preferă **WhatsApp**, dă-ne numărul și schimbăm `startHref` în `lib/content.ts` pe `https://wa.me/40...`.
2. **Prețuri.** Program 1:1 = „la cerere"; curs = „de la 499,99 lei"; KUWG = 39,99 lei/lună. Confirmă cifrele exacte și dacă vrea să le afișeze.
3. **Domeniul.** Folosit ca URL canonic: `healthybyginna.ro`. Confirmă/înregistrează-l (apare în `layout.tsx`, `sitemap.ts`, `robots.ts`, `StructuredData.tsx`).
4. **Testimoniale.** Cere-i acordul pentru cele 2 mesaje reale afișate (sunt anonimizate) și, ideal, 2–3 testimoniale cu prenume + poză.
5. **Credibilitate.** Ce vrea exact la titlul „psihonutriționist" (studii/atestat) — ca să nu afirmăm nimic nedovedit.
6. **Poze profesionale.** Un set hi-res (portret + food + lifestyle) ar ridica și mai mult nivelul; acum folosim ce era disponibil.
7. **Cifra reală de urmăritori** (afișăm ~39.000) și dacă vrea să apară.

## Editări rapide

- **Text:** `lib/content.ts` (toate secțiunile).
- **Culori/tipografie:** `app/globals.css` (paletă crem + verde salvie + accent piersică/caisă).
- **Poze:** pune sursele noi și rulează `node scripts/process-images.mjs`.
- **Video:** înlocuiește `public/video/hero.mp4` (păstrează numele).
