// The site's one list of pages. It drives the router (App.tsx), page titles and link previews (PageMeta),
// the navigation, the prerender step, redirects and sitemap.xml (scripts/prerender.mjs).
// Keep this file free of `@/` imports and JSX: scripts/prerender.mjs loads it directly with Node.
import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

export type Section = "company" | "services" | "method" | "projects" | "personal";

/** A lazily loaded page that can also be loaded ahead of the first render (see src/main.tsx). */
export type PageComponent = LazyExoticComponent<ComponentType> & { preload: () => Promise<void> };

export interface RouteEntry {
  path: string;
  component: PageComponent;
  title: string;
  description: string;
  ogImage?: string;
  nav?: { area: "primary" | "footer"; label: string; order: number };
  section: Section;
  prerender?: boolean;
}

export interface RedirectEntry {
  from: string;
  to: string;
}

export const SITE_URL = "https://zweifel.tech";
export const DEFAULT_OG_IMAGE = "/brand/og-default.png";

type PageModule = { default: ComponentType };

/**
 * React.lazy with a preload hook. Once preloaded, the page renders on the first pass instead of showing the
 * loading spinner, so the prerendered HTML is replaced by identical content without a flash.
 */
function page(loader: () => Promise<PageModule>): PageComponent {
  let loaded: PageModule | undefined;
  const load = () => loader().then((m) => (loaded = m));
  // A thenable that resolves synchronously when the module is already loaded, so React does not suspend
  const component = lazy(() =>
    loaded ? ({ then: (resolve: (m: PageModule) => void) => resolve(loaded) } as unknown as Promise<PageModule>) : load()
  );
  return Object.assign(component, { preload: () => load().then(() => undefined) });
}

const Home = page(() => import("../pages/Home"));
const ServicesIndex = page(() => import("../pages/services/ServicesIndex"));
const SoftwareArchitecture = page(() => import("../pages/services/SoftwareArchitecture"));
const AiSdlc = page(() => import("../pages/services/AiSdlc"));
const AiTraining = page(() => import("../pages/services/AiTraining"));
const MethodPage = page(() => import("../pages/method/MethodPage"));
const Projects = page(() => import("../pages/Projects"));
const Company = page(() => import("../pages/Company"));
const Support = page(() => import("../pages/Support"));
const Contact = page(() => import("../pages/Contact"));
const PersonalAbout = page(() => import("../pages/personal/About"));
const PersonalWork = page(() => import("../pages/personal/Work"));
const PersonalContact = page(() => import("../pages/personal/Contact"));
const AIAugmentedSDLC = page(() => import("../pages/AIAugmentedSDLC"));
const TeamScalingLeadership = page(() => import("../pages/TeamScalingLeadership"));
const DeltaFrameworkImplementation = page(() => import("../pages/DeltaFrameworkImplementation"));
const Reflections = page(() => import("../pages/Reflections"));

export const routes: RouteEntry[] = [
  {
    path: "/",
    component: Home,
    title: "Zweifel Tech LLC · Software architecture and AI-enabled delivery",
    description:
      "Zweifel Tech LLC designs, architects and scales software, and helps engineering teams adopt AI across the delivery lifecycle.",
    section: "company",
  },
  {
    path: "/services",
    component: ServicesIndex,
    title: "Services · Zweifel Tech LLC",
    description:
      "Three services: rapid software design, architecture and scale; AI maturity and AI-enabled SDLC adoption; and AI adoption training.",
    nav: { area: "primary", label: "Services", order: 1 },
    section: "services",
  },
  {
    path: "/services/software-architecture",
    component: SoftwareArchitecture,
    title: "Software design, architecture and scale · Zweifel Tech LLC",
    description:
      "Go from idea to a working, well-structured product quickly, then scale it: architecture reviews, rapid builds and platform modernization.",
    section: "services",
  },
  {
    path: "/services/ai-sdlc",
    component: AiSdlc,
    title: "AI maturity and AI-enabled SDLC adoption · Zweifel Tech LLC",
    description:
      "A maturity assessment, readiness checklist and phased rollout plan for bringing AI agents into your software delivery lifecycle safely.",
    section: "services",
  },
  {
    path: "/services/ai-training",
    component: AiTraining,
    title: "AI adoption training for engineering teams · Zweifel Tech LLC",
    description:
      "Hands-on training that takes developers, tech leads and managers from first agent use to running agents under review in real repositories.",
    section: "services",
  },
  {
    path: "/method",
    component: MethodPage,
    title: "The Method: overview and maturity levels · Zweifel Tech LLC",
    description:
      "How Zweifel Tech brings AI into software delivery: five maturity levels from manual work to adaptive agentic delivery, and how teams graduate.",
    nav: { area: "primary", label: "Method", order: 2 },
    section: "method",
  },
  {
    path: "/method/foundation",
    component: MethodPage,
    title: "The Method: organizational foundation · Zweifel Tech LLC",
    description:
      "The six standing capabilities an organization needs before agents can work safely: govern, instruct, ground, equip, connect and operate.",
    section: "method",
  },
  {
    path: "/method/stage-contract",
    component: MethodPage,
    title: "The Method: the stage contract · Zweifel Tech LLC",
    description:
      "Every delivery stage declares the same six parts: event, input, execution, output, validation and transition. Here is the schema and an example.",
    section: "method",
  },
  {
    path: "/method/prove",
    component: MethodPage,
    title: "The Method: how agents work a stage, the PROVE loop · Zweifel Tech LLC",
    description:
      "PROVE (Predict, Run, Observe, Validate, Evolve) is the reasoning loop an agent follows inside one stage, and why each step exists.",
    section: "method",
  },
  {
    path: "/method/lifecycle",
    component: MethodPage,
    title: "The Method: the twelve-stage lifecycle · Zweifel Tech LLC",
    description:
      "From product requirement to production learning in twelve stages, each with its own contract, decision gate and evidence.",
    section: "method",
  },
  {
    path: "/method/controls",
    component: MethodPage,
    title: "The Method: policy, testing and approvals · Zweifel Tech LLC",
    description:
      "Branch policy, the test and verification pyramid, the four action risk classes and the controls no agent can bypass.",
    section: "method",
  },
  {
    path: "/method/measurement",
    component: MethodPage,
    title: "The Method: measurement, readiness and traceability · Zweifel Tech LLC",
    description:
      "A balanced scorecard, the decisions to settle before rollout, a readiness checklist and the traceability chain every delivery should leave.",
    section: "method",
  },
  {
    path: "/projects",
    component: Projects,
    title: "Projects · Zweifel Tech LLC",
    description:
      "Products Zweifel Tech LLC designed, built and sells: Midnight Alibi, a mystery game and book, and Vulpen Design, floor-plan software.",
    nav: { area: "primary", label: "Projects", order: 3 },
    section: "projects",
  },
  {
    path: "/company",
    component: Company,
    title: "Company · Zweifel Tech LLC",
    description:
      "A small, veteran-owned software business in Illinois: our services, products, mailing address and how to reach us.",
    nav: { area: "primary", label: "Company", order: 4 },
    section: "company",
  },
  {
    path: "/support",
    component: Support,
    title: "Support · Zweifel Tech LLC",
    description:
      "Help, privacy policies, terms and data deletion for Midnight Alibi and Vulpen Design, the products of Zweifel Tech LLC.",
    nav: { area: "footer", label: "Support", order: 1 },
    section: "company",
  },
  {
    path: "/contact",
    component: Contact,
    title: "Contact · Zweifel Tech LLC",
    description:
      "Start a new engagement with Zweifel Tech LLC, or reach product support, press and partnerships by email at brandon@zweifeltech.com.",
    section: "company",
  },
  {
    path: "/brandon",
    component: PersonalAbout,
    title: "About · Brandon Zweifel",
    description:
      "Brandon Zweifel, founder of Zweifel Tech LLC: twenty years from Army intelligence to software, data and AI engineering leadership.",
    section: "personal",
  },
  {
    path: "/brandon/work",
    component: PersonalWork,
    title: "Work · Brandon Zweifel",
    description:
      "Leadership case studies by Brandon Zweifel on agent-augmented delivery, scaling a team through change and building a data culture.",
    section: "personal",
  },
  {
    path: "/brandon/work/ai-augmented-sdlc",
    component: AIAugmentedSDLC,
    title: "The AI-Augmented SDLC Organization · Brandon Zweifel",
    description:
      "A case study: agents draft at every stage of the software lifecycle while engineers review, decide and own what ships.",
    section: "personal",
  },
  {
    path: "/brandon/work/team-scaling-leadership",
    component: TeamScalingLeadership,
    title: "Scaling a Team Through Change · Brandon Zweifel",
    description:
      "A case study: growing an R&D team from 15 to more than 65 people through a merger, remote work and the AI transition.",
    section: "personal",
  },
  {
    path: "/brandon/work/delta-framework-implementation",
    component: DeltaFrameworkImplementation,
    title: "Building a Data Culture with DELTA Plus · Brandon Zweifel",
    description:
      "A case study: using the DELTA Plus model to turn post-merger data into trusted, shared infrastructure that made AI agents possible.",
    section: "personal",
  },
  {
    path: "/brandon/reflections",
    component: Reflections,
    title: "Reflections · Brandon Zweifel",
    description:
      "Short reflections by Brandon Zweifel on leading the AI transition, building before asking a team to adopt, and teams that change well.",
    section: "personal",
  },
  {
    path: "/brandon/contact",
    component: PersonalContact,
    title: "Contact · Brandon Zweifel",
    description:
      "Reach Brandon Zweifel by email or LinkedIn about engineering leadership, agentic AI or speaking. Company inquiries go to Zweifel Tech LLC.",
    section: "personal",
  },
];

// Old URLs that still have links pointing at them (LinkedIn, résumés, search results). Each lands on its new page in one hop.
export const redirects: RedirectEntry[] = [
  { from: "/about", to: "/brandon" },
  { from: "/reflections", to: "/brandon/reflections" },
  { from: "/research", to: "/method" },
  { from: "/prove-pattern", to: "/method/prove" },
  { from: "/ai-development-lab", to: "/services/ai-training" },
  { from: "/ai-augmented-sdlc", to: "/brandon/work/ai-augmented-sdlc" },
  { from: "/team-scaling-leadership", to: "/brandon/work/team-scaling-leadership" },
  { from: "/delta-framework-implementation", to: "/brandon/work/delta-framework-implementation" },
  { from: "/ai-augmented-data-org", to: "/brandon/work/ai-augmented-sdlc" },
  { from: "/experity-analytic-assessment", to: "/brandon/work" },
  { from: "/ma-feature-parity", to: "/brandon/work" },
  { from: "/enterprise-data-transformation", to: "/brandon/work" },
  { from: "/ma-integration-strategy", to: "/brandon/work" },
  { from: "/enterprise-data-platform", to: "/brandon/work" },
];

export const findRoute = (path: string) => routes.find((r) => r.path === path);

/**
 * The public URL of a page. GitHub Pages serves each page from a folder (dist/services/index.html) and answers
 * /services with a 301 to /services/, so the slash form is the address that actually returns the page.
 */
export const canonicalUrl = (path: string) => `${SITE_URL}${path === "/" ? "/" : `${path}/`}`;

export const navItems = (area: "primary" | "footer") =>
  routes
    .filter((r) => r.nav?.area === area)
    .sort((a, b) => a.nav.order - b.nav.order)
    .map((r) => ({ path: r.path, label: r.nav.label, section: r.section }));

/** Problems with the manifest, empty when it is valid. The prerender step fails the build on any. */
export function manifestProblems(): string[] {
  const problems: string[] = [];
  const seen = (key: (r: RouteEntry) => string, label: string) => {
    const counts = new Map<string, number>();
    for (const r of routes) counts.set(key(r), (counts.get(key(r)) ?? 0) + 1);
    for (const [k, n] of counts) if (n > 1) problems.push(`${label} used ${n} times: ${k}`);
  };
  seen((r) => r.path, "path");
  seen((r) => r.title, "title");
  seen((r) => r.description, "description");
  for (const r of routes) {
    if (r.path !== r.path.toLowerCase()) problems.push(`path not lowercase: ${r.path}`);
    if (r.path !== "/" && r.path.endsWith("/")) problems.push(`path has a trailing slash: ${r.path}`);
    const len = r.description.length;
    if (len < 70 || len > 160) problems.push(`description is ${len} characters (70 to 160): ${r.path}`);
  }
  const paths = new Set(routes.map((r) => r.path));
  for (const { from, to } of redirects) {
    if (paths.has(from)) problems.push(`redirect source is also a page: ${from}`);
    if (!paths.has(to)) problems.push(`redirect target is not a page: ${from} -> ${to}`);
  }
  return problems;
}
