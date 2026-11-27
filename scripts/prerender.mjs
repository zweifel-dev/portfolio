// Prerenders every page in src/lib/routes.ts after `vite build`, so GitHub Pages answers each URL with status 200
// and its own title, description and link-preview tags. It also writes:
//   404.html      the branded not-found page, served by GitHub Pages for unknown paths with status 404
//   redirect stubs at each old URL in `redirects` (meta refresh, canonical, script and a visible link)
//   sitemap.xml   every page plus the static Midnight Alibi pages
// Needs Chromium for Playwright (`npx playwright install chromium`; CI installs it in deploy.yml).
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { serveDist } from "./serve-dist.mjs";
import { routes, redirects, manifestProblems, canonicalUrl, SITE_URL } from "../src/lib/routes.ts";

const root = path.resolve(import.meta.dirname, "..", "dist");
const NOT_FOUND_TITLE = "Page not found · Zweifel Tech LLC";

const problems = manifestProblems();
if (problems.length) {
  console.error(`Route manifest problems:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

async function snapshot(page, base, urlPath, expectedTitle) {
  const errors = [];
  const onError = (e) => errors.push(e.message);
  page.on("pageerror", onError);
  await page.goto(`${base}${urlPath}`, { waitUntil: "networkidle" });
  await page.waitForFunction((t) => document.title === t, expectedTitle, { timeout: 15000 });
  await page.waitForFunction(() => !document.querySelector("#main .animate-spin"), null, { timeout: 15000 });
  page.off("pageerror", onError);
  if (errors.length) throw new Error(`${urlPath}: ${errors.join("; ")}`);
  return `<!DOCTYPE html>\n${await page.evaluate(() => document.documentElement.outerHTML)}\n`;
}

const { server, port } = await serveDist({ root, spa: true });
const base = `http://127.0.0.1:${port}`;
const browser = await chromium.launch();
const pages = new Map();
try {
  const page = await browser.newPage();
  for (const r of routes) pages.set(r.path, await snapshot(page, base, r.path, r.title));
  pages.set("404", await snapshot(page, base, "/this-page-does-not-exist", NOT_FOUND_TITLE));
} finally {
  await browser.close();
  server.close();
}

// Write only after every page rendered, so the SPA server above always served the untouched shell.
for (const [p, html] of pages) {
  const file = p === "404" ? path.join(root, "404.html") : path.join(root, p, "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

for (const { from, to } of redirects) {
  const target = canonicalUrl(to);
  const rel = to === "/" ? "/" : `${to}/`;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved · Zweifel Tech LLC</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${escapeHtml(target)}">
<meta http-equiv="refresh" content="0; url=${escapeHtml(rel)}">
<script>location.replace(${JSON.stringify(rel)} + location.search + location.hash)</script>
</head>
<body>
<p>This page has moved to <a href="${escapeHtml(rel)}">${escapeHtml(target)}</a>.</p>
</body>
</html>
`;
  const file = path.join(root, from, "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

// The static Midnight Alibi pages: every folder under dist/midnight-alibi with an index.html
async function staticPages(dir, urlBase) {
  const out = [];
  try {
    await stat(path.join(dir, "index.html"));
    out.push(urlBase);
  } catch {
    // no page here
  }
  for (const entry of await readdir(dir, { withFileTypes: true }).catch(() => [])) {
    if (entry.isDirectory() && entry.name !== "assets") out.push(...(await staticPages(path.join(dir, entry.name), `${urlBase}${entry.name}/`)));
  }
  return out;
}

const urls = [...routes.map((r) => canonicalUrl(r.path)), ...(await staticPages(path.join(root, "midnight-alibi"), `${SITE_URL}/midnight-alibi/`))];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${escapeHtml(u)}</loc></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(root, "sitemap.xml"), sitemap);

console.log(`Prerendered ${routes.length} pages and 404.html, wrote ${redirects.length} redirect stubs and a sitemap with ${urls.length} URLs.`);
