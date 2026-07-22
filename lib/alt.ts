// Alt-text în română pentru fiecare imagine (SEO + accesibilitate).
export const ALT: Record<string, string> = {
  "portrait-store":
    "Gina Tăujan, psihonutriționist Healthy by Ginna, cu un coș de cumpărături în magazinul de delicatese les_figs",
  "recipe-1":
    "Mic dejun sănătos: ouă cu gălbenuș, cartof dulce copt și salată de spanac, în două boluri",
  "recipe-2":
    "Omletă acoperită cu mărar și pătrunjel proaspăt, felii de roșie și semințe de cânepă",
  "recipe-3":
    "Salată colorată cu rucola, morcov și ardei, alături de chiftele de năut",
  "recipe-4":
    "Hummus de ardei copt cu ulei de măsline și mix de semințe, lângă un bol cu măsline",
  "recipe-5":
    "Terci de ovăz cremos cu unt de arahide, fulgi de cocos și curmale",
  "recipe-6":
    "Apă infuzată cu felii de grapefruit roșu, ținută în mână, într-o zi însorită",
  "lifestyle-water":
    "Trei carafe de sticlă cu apă infuzată cu castravete, rozmarin și coajă de lămâie",
  "transform-1":
    "Transformare reală înainte și după: aceeași persoană, mai încrezătoare, într-o rochie roșie elegantă",
  "transform-2":
    "Transformare reală înainte și după: talie și spate vizibil mai definite, văzute din spate",
  "transform-3":
    "Transformare reală înainte și după: abdomen mai tonifiat după schimbarea alimentației",
  "transform-4":
    "Transformare reală înainte și după: mai multă energie și un zâmbet regăsit",
  "transform-5":
    "Transformare reală înainte și după a unui bărbat: siluetă din profil, abdomen mai plat",
  "transform-6":
    "Transformare reală înainte și după: piele mai curată și mai luminoasă după schimbarea alimentației",
};

export function alt(name: string): string {
  return ALT[name] ?? "";
}
