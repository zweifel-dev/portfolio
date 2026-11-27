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

for (const w of [640, 1280]) {
  await sharp(crest).resize(w).webp({ quality: 82 }).toFile(out(`crest-${w}.webp`));
}
for (const w of [160, 320, 640]) {
  await sharp(emblem).resize(w).webp({ quality: 85 }).toFile(out(`emblem-${w}.webp`));
}

// Small mark for the header and footer (under 64 px the nine tails blur): the fox head on a navy disc
// with a gold ring, cropped from the emblem.
{
  const size = 512;
  // The emblem's gold ring passes just right of the muzzle: drop gold pixels from the right part of the crop.
  const crop = { left: 640, top: 190, width: 600, height: 600 };
  const { data, info } = await sharp(emblem).extract(crop).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let y = 0; y < info.height; y++) {
    for (let x = Math.floor(info.width * 0.7); x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
      if (r - b > 20 && r >= g - 10) data[i + 3] = 0;
    }
  }
  const head = await sharp(data, { raw: info }).resize(size - 96).png().toBuffer();
  const disc = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 12}" fill="#0f1d3a" stroke="#dfbe7e" stroke-width="20"/></svg>`);
  const mask = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 22}" fill="#fff"/></svg>`);
  const clipped = await sharp({ create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: head, left: 40, top: 56 }, { input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
  const mark = await sharp(disc).composite([{ input: clipped }]).png().toBuffer();
  for (const w of [96, 192]) await sharp(mark).resize(w).webp({ quality: 90 }).toFile(out(`mark-${w}.webp`));
}

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
