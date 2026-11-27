// Smoke suite for the built site (run `npm run build`, then `npm run test:site`).
// dist/ is served like GitHub Pages: folders answer with their index.html, /folder redirects to /folder/,
// and unknown paths get 404.html with status 404.
import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { routes, redirects, canonicalUrl } from "../src/lib/routes";
import { methodPages, methodPath } from "../src/lib/method";

const slash = (p: string) => (p === "/" ? "/" : `${p}/`);
const companyRoutes = routes.filter((r) => r.section !== "personal");
const personalRoutes = routes.filter((r) => r.section === "personal");

const hrefs = (page: Page, selector: string) =>
  page.locator(selector).evaluateAll((els) => els.map((e) => e.getAttribute("href") ?? ""));

test.describe("every page", () => {
  for (const r of routes) {
    test(`${r.path} is served with its own title and tags`, async ({ page }) => {
      const res = await page.goto(r.path);
      expect(res?.status()).toBe(200);
      expect(new URL(page.url()).pathname).toBe(slash(r.path));
      await expect(page).toHaveTitle(r.title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", r.description);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", canonicalUrl(r.path));
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /^https:\/\/zweifel\.tech\/.+\.(png|jpg|webp)$/);
      await expect(page.locator("h1")).toHaveCount(1);

      // The prerendered HTML itself carries the title, before any script runs
      const raw = await (await page.request.get(slash(r.path))).text();
      expect(raw).toContain(`<title>${r.title.replace(/&/g, "&amp;")}</title>`);

      // Nothing left invisible by a scroll animation, and no downloads (the Method is read on the site)
      const hidden = await page.locator("main [style*='opacity']").evaluateAll((els) => els.filter((e) => getComputedStyle(e).opacity === "0").length);
      expect(hidden).toBe(0);
      const links = await hrefs(page, "a[href]");
      expect(links.filter((h) => /\.(pdf|docx?)(\?|#|$)/i.test(h))).toEqual([]);
      expect(await page.locator("a[download]").count()).toBe(0);
    });
  }

  test("titles and descriptions are unique", () => {
    expect(new Set(routes.map((r) => r.title)).size).toBe(routes.length);
    expect(new Set(routes.map((r) => r.description)).size).toBe(routes.length);
  });
});

test.describe("redirects", () => {
  for (const { from, to } of redirects) {
    test(`${from} lands on ${to}`, async ({ page }) => {
      await page.goto(from);
      await expect(page).toHaveURL((u) => u.pathname === slash(to) || u.pathname === to);
      await expect(page).toHaveTitle(routes.find((r) => r.path === to)!.title);
    });
  }
});

test("unknown paths get the branded not-found page with status 404", async ({ page }) => {
  const res = await page.goto("/no-such-page");
  expect(res?.status()).toBe(404);
  await expect(page).toHaveTitle("Page not found · Zweifel Tech LLC");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", "noindex");
  const links = await hrefs(page, "main a");
  for (const p of ["/", "/services", "/method", "/projects", "/contact"]) expect(links).toContain(p);
});

test.describe("company pages", () => {
  test("home presents the company, its services and its projects", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText(/./);
    const links = await hrefs(page, "main a");
    for (const p of ["/services/software-architecture", "/services/ai-sdlc", "/services/ai-training", "/method"]) {
      expect(links).toContain(p);
    }
    expect(links).toContain("/midnight-alibi/");
    expect(links).toContain("https://vulpendesign.com");
  });

  test("services index lists the three services", async ({ page }) => {
    await page.goto("/services");
    const links = await hrefs(page, "main a");
    for (const p of ["/services/software-architecture", "/services/ai-sdlc", "/services/ai-training"]) expect(links).toContain(p);
  });

  test("every service page has a contact action", async ({ page }) => {
    for (const p of ["/services/software-architecture", "/services/ai-sdlc", "/services/ai-training"]) {
      await page.goto(p);
      expect((await hrefs(page, "main a")).some((h) => h.startsWith("mailto:brandon@zweifeltech.com") || h === "/contact")).toBe(true);
    }
  });

  test("AI SDLC page links to every Method page", async ({ page }) => {
    await page.goto("/services/ai-sdlc");
    const links = await hrefs(page, "main a");
    for (const m of methodPages) expect(links).toContain(methodPath(m.slug));
  });

  test("training page covers audience and learning path", async ({ page }) => {
    await page.goto("/services/ai-training");
    const main = page.locator("main");
    await expect(main).toContainText("Developers");
    await expect(main).toContainText(/tech leads/i);
    await expect(main).toContainText(/managers/i);
    await expect(main).toContainText("Learning path");
    for (const l of ["L1", "L2", "L3"]) await expect(main).toContainText(l);
  });

  test("projects page shows both products with their actions", async ({ page }) => {
    await page.goto("/projects");
    const main = page.locator("main");
    await expect(main).toContainText("Midnight Alibi");
    await expect(main).toContainText("Vulpen Design");
    const links = await hrefs(page, "main a");
    expect(links).toContain("/midnight-alibi/");
    expect(links).toContain("https://vulpendesign.com");
  });

  test("company page shows the legal name, mailing address and email", async ({ page }) => {
    await page.goto("/company");
    const main = page.locator("main");
    await expect(main).toContainText("Zweifel Tech LLC");
    await expect(main).toContainText("2501 Chatham Rd Ste 5816");
    await expect(main).toContainText("Springfield, IL 62704");
    await expect(main).toContainText("brandon@zweifeltech.com");
  });

  test("support page covers both products", async ({ page }) => {
    await page.goto("/support");
    const links = await hrefs(page, "main a");
    for (const p of ["/midnight-alibi/privacy/", "/midnight-alibi/terms/", "/midnight-alibi/delete-account/"]) expect(links).toContain(p);
    expect(links.some((h) => h.startsWith("https://vulpendesign.com"))).toBe(true);
  });

  test("contact page offers mailto links with preset subjects and no phone", async ({ page }) => {
    await page.goto("/contact");
    const mailtos = (await hrefs(page, "main a")).filter((h) => h.startsWith("mailto:"));
    const company = mailtos.filter((h) => h.startsWith("mailto:brandon@zweifeltech.com"));
    expect(company.length).toBeGreaterThanOrEqual(3);
    for (const m of company) expect(m).toMatch(/^mailto:brandon@zweifeltech\.com\?subject=/);
    // Any other address is a product's own support inbox
    for (const m of mailtos.filter((h) => !company.includes(h))) expect(m).toMatch(/^mailto:support@/);
    expect(await page.locator('a[href^="tel:"]').count()).toBe(0);
  });
});

test.describe("Method", () => {
  test("seven pages in order with previous and next links", async ({ page }) => {
    expect(methodPages).toHaveLength(7);
    for (const [i, m] of methodPages.entries()) {
      await page.goto(methodPath(m.slug));
      const pager = page.getByRole("navigation", { name: "Method pages" });
      const links = await pager.locator("a").evaluateAll((els) => els.map((e) => e.getAttribute("href")));
      if (i > 0) expect(links).toContain(methodPath(methodPages[i - 1].slug));
      if (i < methodPages.length - 1) expect(links).toContain(methodPath(methodPages[i + 1].slug));
    }
  });

  test("covers the maturity levels, contract fields, PROVE steps and twelve stages", async ({ page }) => {
    await page.goto("/method");
    for (const l of ["L0", "L1", "L2", "L3", "L4"]) await expect(page.locator("main")).toContainText(l);

    await page.goto("/method/stage-contract");
    for (const f of ["Event", "Input", "Execution", "Output", "Validation", "Transition"]) {
      await expect(page.locator("main")).toContainText(f);
    }

    await page.goto("/method/prove");
    for (const s of ["Predict", "Run", "Observe", "Validate", "Evolve"]) await expect(page.locator("main")).toContainText(s);

    await page.goto("/method/lifecycle");
    const text = await page.locator("main").innerText();
    for (let n = 1; n <= 12; n++) expect(text).toMatch(new RegExp(`\\b0?${n}\\b`));
  });
});

test.describe("brand", () => {
  test("header and footer belong to the company", async ({ page }) => {
    for (const r of companyRoutes) {
      await page.goto(r.path);
      const header = page.locator("header").first();
      await expect(header).toContainText("Zweifel Tech LLC");
      await expect(header).not.toContainText("BZ");
      await expect(page.locator("footer")).toContainText(
        `© ${new Date().getFullYear()} Zweifel Tech LLC. Midnight Alibi and Vulpen Design are Zweifel Tech LLC projects.`
      );
      await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute("content", "Zweifel Tech LLC");

      // The personal site is linked only from the footer
      const outsideFooter = await page.locator("a[href^='/brandon']").evaluateAll((els) => els.filter((e) => !e.closest("footer")).length);
      expect(outsideFooter, r.path).toBe(0);
    }
  });

  test("icons and manifest", async ({ page, request }) => {
    await page.goto("/");
    await expect(page.locator('link[rel="icon"][href="/icons/fox.svg"]')).toHaveCount(1);
    await expect(page.locator('link[rel="icon"][href="/icons/favicon.ico"]')).toHaveCount(1);
    const manifest = await (await request.get("/site.webmanifest")).json();
    expect(manifest.name).toBe("Zweifel Tech LLC");
    expect(manifest.short_name).toBe("Zweifel Tech");
  });

  test("no personal phone or home town on company pages", async ({ request }) => {
    for (const r of companyRoutes) {
      const html = await (await request.get(slash(r.path))).text();
      expect(html, r.path).not.toMatch(/608\.?931|Roscoe|HHAeXchange/i);
    }
  });
});

test.describe("personal site", () => {
  test("uses its own header with a link back to the company", async ({ page }) => {
    for (const r of personalRoutes) {
      await page.goto(r.path);
      await expect(page.locator("header").first()).toContainText("Brandon Zweifel");
      expect(await page.locator("a[href='/']").filter({ hasText: "Zweifel Tech LLC" }).count(), r.path).toBeGreaterThan(0);
      await expect(page.locator('meta[property="og:site_name"]')).toHaveAttribute("content", "Brandon Zweifel");
      expect(await page.locator('a[href^="tel:"]').count()).toBe(0);
    }
  });
});

test.describe("accessibility", () => {
  for (const r of routes) {
    test(`${r.path} has no contrast or WCAG A/AA violations`, async ({ page }) => {
      await page.goto(r.path);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
      const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 5).join(", ")}`);
      expect(summary).toEqual([]);
    });
  }

  test("links and buttons in the header, footer and actions are at least 44 px tall at 375 px", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    for (const r of routes) {
      await page.goto(r.path);
      const small = await page
        .locator("header a, header button, footer a, main button, main a.arrow-link, main a[class*='inline-flex']")
        .evaluateAll((els) =>
          els
            .filter((e) => (e as HTMLElement).offsetParent !== null)
            .map((e) => ({ text: (e.textContent ?? "").trim().slice(0, 40), h: e.getBoundingClientRect().height }))
            .filter((x) => x.h < 44)
        );
      expect(small, r.path).toEqual([]);
    }
  });
});

test.describe("screenshots for review", () => {
  for (const width of [1280, 375]) {
    test(`all pages at ${width} px`, async ({ page }, testInfo) => {
      test.setTimeout(120_000);
      await page.setViewportSize({ width, height: 900 });
      for (const r of routes) {
        await page.goto(r.path);
        await testInfo.attach(`${r.path === "/" ? "home" : r.path.slice(1).replace(/\//g, "_")}-${width}.png`, {
          body: await page.screenshot({ fullPage: true }),
          contentType: "image/png",
        });
      }
    });
  }
});
