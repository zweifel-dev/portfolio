# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Brandon Zweifel, hosted on GitHub Pages at zweifel.tech. React + TypeScript SPA built with Vite.

## Commands

```bash
npm run dev        # Start dev server on port 8080
npm run build      # Production build to dist/
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build
```

## Architecture

**React 18 SPA** using react-router-dom for client-side routing with BrowserRouter.

### Routing
Routes are defined in `src/App.tsx`. Home is eagerly loaded; all other pages use `React.lazy()` with Suspense. The `Layout` component wraps all routes with a fixed top navigation bar and footer.

### Adding a New Page
1. Create component in `src/pages/`
2. Add lazy import and `<Route>` in `src/App.tsx`
3. Add nav entry in `src/components/Navigation.tsx` `navItems` array (if it should appear in nav)

### UI Components
- **shadcn/ui** components in `src/components/ui/` — Radix UI primitives styled with Tailwind. These are library code; modify only if customizing component behavior.
- **Custom components** (`Layout.tsx`, `Navigation.tsx`) in `src/components/`
- `cn()` utility in `src/lib/utils.ts` merges Tailwind classes via clsx + tailwind-merge

### Styling
- **Tailwind CSS 3** with a custom design system defined as CSS variables in `src/index.css`
- Color palette: navy blue primary, gold accent, all colors in HSL format
- Custom gradients (`gradient-primary`, `gradient-hero`, `gradient-card`, `gradient-accent`) and shadows (`executive-sm/md/lg/xl`) configured in `tailwind.config.ts`
- Fonts: Inter (sans), JetBrains Mono (mono)
- Path alias: `@/` maps to `src/`

### Deployment
GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages on push to main. The build copies `CNAME` and `.nojekyll` into `dist/`.

## TypeScript Config

Strict null checks and unused variable checks are **disabled** (`noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`, `noUnusedParameters: false`).

## Active Technologies
- TypeScript 5.8.3 / React 18.3.1 + react-router-dom 6.30, Tailwind CSS 3.4.17, shadcn/ui (Radix UI), tailwindcss-animate 1.0.7, Vite 5.4.19, **motion 12.x (to add)** (001-portfolio-executive-refresh)
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
- 002-prove-methodology-enhancement: Added Markdown (Claude Code configuration files) + None — pure markdown definitions consumed by Claude Code
- 001-portfolio-executive-refresh: Added TypeScript 5.8.3 / React 18.3.1 + react-router-dom 6.30, Tailwind CSS 3.4.17, shadcn/ui (Radix UI), tailwindcss-animate 1.0.7, Vite 5.4.19, **motion 12.x (to add)**
