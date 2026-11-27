import { defineConfig } from "@playwright/test";

// The smoke suite runs against the built site in dist/, served like GitHub Pages
// (no SPA fallback: unknown paths get 404.html with status 404). Run `npm run build` first.
export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: [["list"]],
  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "off",
  },
  webServer: {
    command: "node scripts/serve-dist.mjs 4173",
    url: "http://127.0.0.1:4173/",
    reuseExistingServer: !process.env.CI,
  },
});
