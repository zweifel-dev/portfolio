# zweifel.tech

Personal portfolio website for Brandon Zweifel — Senior Software, Data, & AI Executive.

**Live site:** [zweifel.tech](https://zweifel.tech)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build:** Vite 5
- **Styling:** Tailwind CSS 3 + shadcn/ui (Radix UI)
- **Animations:** Motion 12
- **Routing:** react-router-dom 6 (client-side SPA)
- **Hosting:** GitHub Pages

## Getting Started

```bash
npm install
npm run dev       # Dev server at http://localhost:8080
```

## Scripts

| Command            | Description              |
| ------------------ | ------------------------ |
| `npm run dev`      | Start dev server         |
| `npm run build`    | Production build         |
| `npm run build:dev`| Development build        |
| `npm run preview`  | Preview production build |
| `npm run lint`     | Run ESLint               |

## Project Structure

```
src/
├── components/       # Layout, Navigation, ScrollReveal, shared components
│   └── ui/           # shadcn/ui primitives (Radix-based)
├── pages/            # Route-level page components
├── lib/              # Utilities (cn helper)
└── index.css         # Tailwind config + CSS custom properties
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages. The workflow copies `CNAME` and `.nojekyll` into the build output and generates a `404.html` for SPA routing.
