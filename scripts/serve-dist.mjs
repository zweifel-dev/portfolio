// A small static server for dist/ that behaves like GitHub Pages: a folder answers with its index.html
// (and /folder redirects to /folder/),
// and an unknown path gets 404.html with status 404. With { spa: true } (used while prerendering)
// unknown paths get index.html instead, so the app can render them.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
};

async function fileAt(p) {
  try {
    const s = await stat(p);
    if (s.isFile()) return p;
    if (s.isDirectory()) return fileAt(path.join(p, "index.html"));
  } catch {
    return null;
  }
  return null;
}

export function serveDist({ root, port = 0, spa = false }) {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, "http://localhost");
    const rel = decodeURIComponent(url.pathname);
    const target = path.join(root, rel);
    if (!target.startsWith(root)) {
      res.writeHead(400).end();
      return;
    }
    // Like GitHub Pages: a folder asked for without its trailing slash answers with a 301 to the slash form
    if (!rel.endsWith("/")) {
      try {
        if ((await stat(target)).isDirectory()) {
          res.writeHead(301, { location: `${rel}/${url.search}` }).end();
          return;
        }
      } catch {
        // not there; fall through
      }
    }
    let file = await fileAt(target);
    let status = 200;
    if (!file) {
      file = spa ? path.join(root, "index.html") : await fileAt(path.join(root, "404.html"));
      status = spa ? 200 : 404;
    }
    if (!file) {
      res.writeHead(404).end("Not found");
      return;
    }
    const body = await readFile(file);
    res.writeHead(status, { "content-type": types[path.extname(file)] ?? "application/octet-stream" });
    res.end(body);
  });
  return new Promise((resolve) => {
    server.listen(port, "127.0.0.1", () => resolve({ server, port: server.address().port }));
  });
}

// `node scripts/serve-dist.mjs [port]` serves dist/ for the Playwright suite.
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const root = path.resolve(import.meta.dirname, "..", "dist");
  const port = Number(process.argv[2] ?? 4173);
  const { port: p } = await serveDist({ root, port });
  console.log(`Serving dist/ on http://127.0.0.1:${p} (no SPA fallback)`);
}
