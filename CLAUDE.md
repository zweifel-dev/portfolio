# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Company website for Zweifel Tech LLC, hosted on GitHub Pages at zweifel.tech: services, the Method (the company's published AI-enabled delivery method), projects (Midnight Alibi, Vulpen Design), company and support pages. Brandon Zweifel's personal site lives under `/brandon` with its own header and is linked from the company footer and the "Who you'll work with" block (`FounderBlock`) on Home and Services. React + TypeScript SPA built with Vite and prerendered to static HTML per page.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # vite build, then prerender every page, then the content check
npm run test:site  # Playwright smoke suite against dist/ (run build first)
npm run brand      # Regenerate public/brand/ images from assets/ (sharp)
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Architecture

**React 18 SPA** using react-router-dom for client-side routing with BrowserRouter.

### Routing and pages
- **`src/lib/routes.ts` is the single list of pages.** Each entry has path, lazy component, title, description, section and optional nav entry. It drives the router (`App.tsx`), per-page meta tags (`PageMeta.tsx`), the header and footer nav (`navItems(area)`), the prerender step, the redirect stubs and `sitemap.xml`. Keep it free of `@/` imports and JSX: Node loads it directly in `scripts/prerender.mjs`.
- Old URLs live in `redirects` in the same file. Each becomes an in-app `<Navigate replace>` and a static redirect stub in `dist/`. `manifestProblems()` fails the build on duplicate titles or descriptions, bad descriptions (70 to 160 characters) or broken redirects.
- Company pages use `Layout` (emblem header, company footer); `/brandon/*` pages use `PersonalLayout`. Both render `PageOutlet` (meta tags, scroll to top, Suspense).
- Canonical URLs end in a slash (`canonicalUrl()`), because GitHub Pages answers `/services` with a 301 to `/services/`.

### Build: prerender and content check
- `scripts/prerender.mjs` serves `dist/` with an SPA fallback, renders every route in headless Chromium (Playwright) and writes `dist/<path>/index.html`, the branded `404.html`, redirect stubs and `sitemap.xml`. `src/main.tsx` preloads the current page's chunk before the first render so the prerendered HTML is replaced without a spinner.
- `scripts/check-content.mjs` fails the build if built HTML or JS contains HHAeXchange (allowed only on `/brandon` pages and the personal About chunk), HHAX, Atlas, ENTMain, the personal phone number or home town. Don't weaken this list.
- `scripts/serve-dist.mjs` mimics GitHub Pages for the tests (404.html with status 404, folder redirects).

### Adding a New Page
1. Create the component in `src/pages/`, starting with `<PageHero>` and wrapping content in `page-container`
2. Add a `RouteEntry` in `src/lib/routes.ts` (unique title and a 70 to 160 character description; `nav` if it belongs in the header or footer)
3. If it replaces an old URL, add a `redirects` entry
4. Run `npm run build && npm run test:site`. The sitemap is generated; don't hand-edit one

### UI Components
- **shadcn/ui** components in `src/components/ui/` — Radix UI primitives styled with Tailwind. These are library code; modify only if customizing component behavior.
- **Custom components** in `src/components/`: `Layout.tsx`, `Navigation.tsx`, `PageHero.tsx` (navy band at the top of each page), `SectionHeading.tsx` (eyebrow + heading), `Portrait.tsx` (headshot from the 480/960 px copies; the original is 9 MB), `ScrollReveal.tsx` (plain wrappers kept for layout; no animation, content is visible without JavaScript)
- **Company data**: `src/lib/company.ts` (legal name, email, mailing address, logo set), `src/lib/services.ts` (the three services), `src/lib/projects.ts` (Midnight Alibi and Vulpen Design, their art, colors and support links)
- **Method**: `src/lib/method.ts` lists the seven pages; their content is structured data in `src/content/method/` (from white paper v9.3, employer names removed), rendered by `src/pages/method/MethodPage.tsx` with figures from `src/components/method/Figures.tsx`. No download link: the Method is read on the site
- **Personal site**: `src/lib/personal.ts` (name, email, LinkedIn, case-study cards) and `src/lib/resume.ts` (experience, loaded only by the personal About page). No phone number or home location anywhere. Case study pages use `CaseFacts` and `RelatedWork` from `src/components/CaseStudy.tsx`
- **Contact form**: `/contact` is an intake form (`src/pages/Contact.tsx`, `src/lib/inquiry.ts`). It writes to the Firestore collection `inquiries` in the website's Firebase project, and an Apps Script under the company Workspace account (`firebase/apps-script/`) emails each one to the company inbox every five minutes, so the project stays on the free Spark plan. The web app config goes in `src/lib/firebase-config.ts`; rules and setup steps are in `firebase/`. "Start a conversation" buttons link to `/contact?topic=...`, never to a mailto
- **Brand**: the nine-tailed fox. Sources in `assets/`, derived web images in `public/brand/` (`npm run brand`), tab icons in `public/icons/`. Use the color emblem; there is no monochrome version. Under 64 px (header, footer) use `company.logo.mark`, the fox head on a navy disc
- `cn()` utility in `src/lib/utils.ts` merges Tailwind classes via clsx + tailwind-merge

### Styling
- **Tailwind CSS 3** with a custom design system defined as CSS variables in `src/index.css`
- Look: flat navy and gold. Solid navy bands (`hero-band`, `bg-navy`), white surfaces with 1px borders (`surface-card`, `ruled-card` with a gold left rule), gold used sparingly for rules and `eyebrow` labels. No gradients or glass
- Color palette: navy `--primary` (buttons, links) and `--navy` (bands), gold `--accent` (fills, rules) and `--accent-ink` (gold text on white), all colors in HSL format
- The gradient tokens (`gradient-primary`, `gradient-hero`, `gradient-card`, `gradient-accent`) are deliberately flat, and the `executive-*` shadows are quiet; both are configured in `tailwind.config.ts`
- Buttons: `variant="accent"` (gold) and `variant="on-navy"` (outline for navy bands) in `src/components/ui/button.tsx`
- Fonts: Inter Variable (sans, optical sizes) and JetBrains Mono Variable (mono), self-hosted through `@fontsource-variable` and imported at the top of `src/index.css`
- Path alias: `@/` maps to `src/`

### Deployment
GitHub Actions workflow (`.github/workflows/deploy.yml`) installs Chromium for the prerender, builds and deploys to GitHub Pages on push to main. The build copies `CNAME` and `.nojekyll` into `dist/`.

### Content rules
- **Company pages never name Brandon's employer** (HHAeXchange) or its internal systems; the build's content check enforces this. The employer appears only on the personal About page.
- **Experity is under an NDA.** Brandon left Experity in 2026. Describe that work only at résumé level, as on the About page: no internal dollar figures or metrics, executive quotes, product analytics findings, vendor contracts, system names, org charts or internal documents. The Experity deep dives and MBA files about Experity were removed for this reason; don't bring them back. Three leadership case studies (`/brandon/work/ai-augmented-sdlc`, `/brandon/work/team-scaling-leadership`, `/brandon/work/delta-framework-implementation`) are deliberately anonymized: they don't name the company, and carry no internal figures, system or vendor names, or org charts. Keep them that way. The only figures they use are ones on the About page (team growth from 15 to 65+, seven production agents).
- Brandon is Director of Software Engineering at HHAeXchange (2026 – present) and founder of Zweifel Tech LLC, which sells software design, architecture and AI-adoption services and owns Midnight Alibi and Vulpen Design. Consulting through Zweifel Tech is cleared with his employer.

## TypeScript Config

Strict null checks and unused variable checks are **disabled** (`noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`, `noUnusedParameters: false`).

## Active Technologies
- TypeScript 5.8.3 / React 18.3.1 + react-router-dom 6.30, Tailwind CSS 3.4.17, shadcn/ui (Radix UI), tailwindcss-animate 1.0.7, Vite 5.4.19 (001-portfolio-executive-refresh)
- N/A (fully static site) (001-portfolio-executive-refresh)
- Markdown (Claude Code configuration files) + None — pure markdown definitions consumed by Claude Code (002-prove-methodology-enhancement)
- N/A (evidence tracking within session context; no persistent storage this iteration) (002-prove-methodology-enhancement)

## PROVE Reasoning Methodology

The PROVE pattern (Predict, Run, Observe, Validate, Evolve) is the scientific method implemented as an agentic AI reasoning loop. It is available as slash commands and agent definitions in this project.

### Slash Commands
- `/prove [task]` — Full PROVE loop (single-agent) applied to any task or problem
- `/prove.orchestrate [task]` — Full multi-agent pipeline with governance and evidence tracking
- `/prove.diagnose [issue]` — Hypothesis-driven debugging and troubleshooting
- `/prove.review [target]` — Structured code/architecture review through hypothesis testing
- `/prove.plan [context]` — Strategic-layer planning through hypothesis-driven approach evaluation
- `/prove.tactical [task]` — Tactical-layer task decomposition and sequencing decisions
- `/prove.operational [issue]` — Operational-layer debugging of specific code/API behavior
- `/prove.audit` — Generate compliance-ready audit trail from PROVE session evidence

### Multi-Agent Definitions (`.claude/agentx/`)
- `prove-predictor` — Generates competing hypotheses and falsifiable predictions
- `prove-experimenter` — Designs and executes targeted experiments with maximum diagnostic value
- `prove-observer` — Collects and structures results without interpretation
- `prove-validator` — Compares observations against predictions, renders verdicts
- `prove-evolver` — Synthesizes validation results, generates context for next cycle
- `prove-reviewer` — Adversarial agent that challenges conclusions to prevent premature convergence
- `prove-governor` — Meta-layer governance that monitors reasoning quality and prevents death spirals

### Skills (`.claude/skills/`)
- `prove-hypothesis` — Techniques for diverse hypothesis generation across causal categories
- `prove-experiment-design` — Diagnostic value scoring and experimental design techniques

### Core Cycle
1. **Predict**: Form falsifiable hypotheses with competing predictions
2. **Run**: Execute the action that best differentiates between hypotheses
3. **Observe**: Record factual results separated from interpretation
4. **Validate**: Compare observations against predictions (supported / falsified / inconclusive)
5. **Evolve**: Update understanding based on accumulated evidence, iterate or conclude

### When to Use PROVE
- Complex multi-step investigation (use `/prove.orchestrate`)
- Debugging non-trivial issues (use `/prove.diagnose`)
- Evaluating architecture or technology choices (use `/prove.plan`)
- Task decomposition and sequencing (use `/prove.tactical`)
- Specific code/API behavior (use `/prove.operational`)
- Reviewing code or technical decisions (use `/prove.review`)
- Quick single-agent reasoning (use `/prove`)
- Generating audit trails (use `/prove.audit`)

## Recent Changes
- 003-zweifel-tech-company-site: Company site, Method section, personal site at /brandon; Playwright prerender, content check and smoke suite (tests/site.spec.ts); motion removed
- 003-rd-narrative-reframe: Added TypeScript 5.8.3 / React 18.3.1 + react-router-dom 6.30, Tailwind CSS 3.4.17, shadcn/ui (Radix UI)
- 002-prove-methodology-enhancement: Added Markdown (Claude Code configuration files) + None — pure markdown definitions consumed by Claude Code
- 001-portfolio-executive-refresh: Added TypeScript 5.8.3 / React 18.3.1 + react-router-dom 6.30, Tailwind CSS 3.4.17, shadcn/ui (Radix UI), tailwindcss-animate 1.0.7, Vite 5.4.19, **motion 12.x (to add)**

## Midnight Alibi pages (`public/midnight-alibi/`)

Static HTML outside the React app, styled by its own `assets/site.css`, in the game's noir look (not the portfolio theme). `npm run midnight-alibi` (`scripts/build-midnight-alibi.cjs`) reads the game repo at `../midnight-alibi` (or `--game <path>`): it copies the game art the pages use and regenerates `how-to-play/`, `ranks/`, `challenges/`, `honours/`, `rooms/` and `suspects/`. Edit the script, not those six pages. Run it again whenever the game's rules, ranks, challenges or commendations change, so the pages match the app. Every page footer links back to the company site ("A product of Zweifel Tech LLC"). The home page (`index.html`), `privacy/`, `terms/`, `delete-account/` and `site.css` are hand-written. Play Console links to the privacy, terms and delete-account pages, so they must stay online.
