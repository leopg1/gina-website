// Optimizes source photos into web-ready webp + generates a blur-up manifest.
// Run: node scripts/process-images.mjs
import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const GINA = "/Users/padurean.leonard/Desktop/website gina taujan";
const RAW = path.join(ROOT, "_raw");
const OUT_DIR = path.join(ROOT, "public", "images");

// name → [absoluteSource, category, maxWidth]
const MAP = [
  // Portret Gina (magazinul les_figs) — folosit în Despre + poster video hero
  ["portrait-store", path.join(RAW, "gina-store.jpg"), "portraits", 1400],
  // Rețete / mâncare reală (titlurile corespund cu ce se vede în poze)
  ["recipe-1", path.join(GINA, "474974183_8916025278525856_7574424746119409461_n.jpg"), "recipes", 1300], // ou + cartof dulce + spanac
  ["recipe-2", path.join(GINA, "474995688_8905395836255467_1612508230432183795_n.jpg"), "recipes", 1300], // omletă cu ierburi
  ["recipe-3", path.join(GINA, "476007517_8975718149223235_6978203914963764394_n.jpg"), "recipes", 1300], // salată + chiftele de năut
  ["recipe-4", path.join(GINA, "476280159_8975711515890565_666928364015415964_n.jpg"), "recipes", 1300],  // hummus de ardei copt
  ["recipe-5", path.join(GINA, "478886570_9006074716187578_4118337039846260617_n.jpg"), "recipes", 1300], // terci de ovăz
  ["recipe-6", path.join(GINA, "475220572_8912003675594683_4242177176780638394_n.jpg"), "recipes", 1300], // apă infuzată cu grapefruit
  // Lifestyle (opțional, band decorativ)
  ["lifestyle-water", path.join(GINA, "475112178_8916025655192485_2115321655765047031_n.jpg"), "lifestyle", 1300],
  // Transformări reale (colaje before/after de la clienți)
  ["transform-1", path.join(GINA, "476113111_8960098314118552_1025117944017935281_n.jpg"), "results", 1300], // top sport → rochie roșie
  ["transform-2", path.join(GINA, "480430702_9028372633957786_3098199348485218598_n.jpg"), "results", 1300], // talie/spate definite
  ["transform-3", path.join(GINA, "475138475_8921421264652924_1515099397297173972_n.jpg"), "results", 1300], // abdomen tonifiat
  ["transform-4", path.join(GINA, "476118792_8967976286664088_3665248929418164060_n.jpg"), "results", 1300], // activă, zâmbet
  ["transform-5", path.join(GINA, "475788545_8946116305516753_3553458190355395748_n.jpg"), "results", 1300], // bărbat, profil
  ["transform-6", path.join(GINA, "477787314_9006074292854287_223134368284653428_n.jpg"), "results", 1300], // piele mai curată
];

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  for (const c of ["portraits", "recipes", "lifestyle", "results"]) {
    await fs.mkdir(path.join(OUT_DIR, c), { recursive: true });
  }

  const manifest = {};
  for (const [name, srcPath, category, maxW] of MAP) {
    const outRel = `/images/${category}/${name}.webp`;
    const outPath = path.join(ROOT, "public", outRel);

    const meta = await sharp(srcPath).rotate().metadata();
    const width = Math.min(meta.width, maxW);

    await sharp(srcPath)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(outPath);

    const outMeta = await sharp(outPath).metadata();

    const blurBuf = await sharp(srcPath)
      .rotate()
      .resize({ width: 24 })
      .blur(1)
      .webp({ quality: 40 })
      .toBuffer();
    const blurDataURL = `data:image/webp;base64,${blurBuf.toString("base64")}`;

    manifest[name] = {
      src: outRel,
      width: outMeta.width,
      height: outMeta.height,
      blurDataURL,
      category,
    };
    console.log(`✓ ${name.padEnd(18)} ${outMeta.width}x${outMeta.height}`);
  }

  const libDir = path.join(ROOT, "lib");
  await fs.writeFile(
    path.join(libDir, "media.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`\nWrote manifest with ${Object.keys(manifest).length} images → lib/media.json`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
