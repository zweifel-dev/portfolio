// Fails the build if a built page names the founder's employer or internal systems, or shows personal
// contact details that stay off the site. HHAeXchange may appear only on the personal pages under /brandon.
// Runs over every .html and .js file in dist/ after prerendering.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "dist");

const rules = [
  { pattern: /HHAeXchange/i, allowedUnder: ["brandon/"] },
  { pattern: /\bHHAX\b/i },
  { pattern: /\bAtlas\b/ },
  { pattern: /ENTMain/i },
  { pattern: /608\.?931/ },
  { pattern: /Roscoe/i },
];

async function* files(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* files(p);
    else if (/\.(html|js)$/.test(entry.name)) yield p;
  }
}

// The JS of the personal About page may name HHAeXchange too. Vite names lazy chunks after their source file,
// so that page's code is in About-*.js (with src/lib/resume.ts inlined, or as resume-*.js if it is ever shared).
const personalChunk = /^assets\/(About|resume)-[\w-]+\.js$/;

const failures = [];
for await (const file of files(root)) {
  const rel = path.relative(root, file).split(path.sep).join("/");
  const text = await readFile(file, "utf8");
  for (const { pattern, allowedUnder = [] } of rules) {
    if (!pattern.test(text)) continue;
    const allowed = allowedUnder.some((dir) => rel.startsWith(dir)) || (allowedUnder.length > 0 && personalChunk.test(rel));
    if (!allowed) {
      const at = text.search(pattern);
      failures.push(`${rel}: ${pattern} near "${text.slice(Math.max(0, at - 40), at + 40).replace(/\s+/g, " ")}"`);
    }
  }
}

if (failures.length) {
  console.error(`Content check failed (see "Content rules" in CLAUDE.md):\n  ${failures.join("\n  ")}`);
  process.exit(1);
}
console.log("Content check passed.");
