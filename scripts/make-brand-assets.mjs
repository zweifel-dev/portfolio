// Writes the web-sized logo files in public/brand/ from the full-size sources in assets/.
// The sources are 1.7 to 2.6 MB, too heavy to serve. Run after replacing a logo:
//   node scripts/make-brand-assets.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = (f) => path.join(root, "assets", f);
const out = (f) => path.join(root, "public", "brand", f);
await mkdir(out(""), { recursive: true });

const crest = src("Mystical_Nine_Tailed_Fox_Crest.png");
const emblem = src("Emblem.png");
const mono = src("Monochrome_emblem.png");

for (const w of [640, 1280]) {
  await sharp(crest).resize(w).webp({ quality: 82 }).toFile(out(`crest-${w}.webp`));
}
for (const w of [160, 320, 640]) {
  await sharp(emblem).resize(w).webp({ quality: 85 }).toFile(out(`emblem-${w}.webp`));
}
await sharp(mono).resize(320).webp({ quality: 85 }).toFile(out("emblem-mono-320.webp"));

// Link-preview image: emblem on navy with the company name, 1200x630 PNG for social crawlers.
const navy = "#0f1d3a";
const gold = "#dfbe7e";
const mark = await sharp(emblem).resize(400).png().toBuffer();
const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <text x="560" y="290" font-family="Inter, Helvetica, Arial, sans-serif" font-size="72" font-weight="600" fill="#f7f4ee">Zweifel Tech LLC</text>
  <rect x="562" y="322" width="64" height="3" fill="${gold}"/>
  <text x="560" y="380" font-family="Inter, Helvetica, Arial, sans-serif" font-size="30" fill="#b3bdd3">Software architecture and</text>
  <text x="560" y="422" font-family="Inter, Helvetica, Arial, sans-serif" font-size="30" fill="#b3bdd3">AI-enabled delivery</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: navy } })
  .composite([
    { input: mark, left: 110, top: 115 },
    { input: text, left: 0, top: 0 },
  ])
  .png({ compressionLevel: 9 })
  .toFile(out("og-default.png"));

// Vulpen Design's own share image (fox head on navy), copied from its repository by hand to assets/.
const vd = src("vulpen-design-share.jpg");
for (const w of [640, 1280]) {
  await sharp(vd).resize(w).webp({ quality: 82 }).toFile(out(`vulpen-design-${w}.webp`));
}

console.log("Brand images written to public/brand/");
