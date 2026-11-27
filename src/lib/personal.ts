// The personal site at /brandon: Brandon's bio, résumé and leadership case studies.
// Kept apart from the company catalogs on purpose; the company site links here only from its footer.
// Experity entries stay at résumé level, and the case studies stay anonymized (see "Content rules" in CLAUDE.md).
// No phone number or home location: they are not shown anywhere on the site.
import { Bot, FlaskConical, Microscope, Triangle, Users, type LucideIcon } from "lucide-react";

export const personal = {
  name: "Brandon Zweifel",
  title: "Director of Software Engineering",
  email: "Brandon@Zweifel.tech",
  linkedin: "https://www.linkedin.com/in/bzweifel/",
  linkedinLabel: "linkedin.com/in/bzweifel",
};

export const personalNav = [
  { path: "/brandon", label: "About" },
  { path: "/brandon/work", label: "Work" },
  { path: "/brandon/reflections", label: "Reflections" },
];

export interface WorkItem {
  to: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  summary: string;
  /** One line for compact cards ("Keep reading") */
  short: string;
  tags: string[];
}

// Leadership case studies. They're anonymized on purpose: no company name, internal figures,
// system names or org charts (see "Content rules" in CLAUDE.md).
export const caseStudies: WorkItem[] = [
  {
    to: "/brandon/work/ai-augmented-sdlc",
    icon: Bot,
    kicker: "Operating model",
    title: "The AI-Augmented SDLC Organization",
    summary:
      "Agents draft at every stage of the software lifecycle; engineers review, decide and own what ships. The model, the guardrails, and how roles change.",
    short: "Agents draft at every stage of the software lifecycle; engineers review, decide and own what ships.",
    tags: ["Agentic AI", "Operating model", "Change management"],
  },
  {
    to: "/brandon/work/team-scaling-leadership",
    icon: Users,
    kicker: "Leadership",
    title: "Scaling a Team Through Change",
    summary:
      "Growing an R&D team from 15 to more than 65 people through a merger, a move to remote work and the AI transition, and the practices that held it together.",
    short: "Growing an R&D team from 15 to 65+ through a merger, remote work and the AI transition.",
    tags: ["Team building", "Inclusive leadership", "M&A integration"],
  },
  {
    to: "/brandon/work/delta-framework-implementation",
    icon: Triangle,
    kicker: "Data culture",
    title: "Building a Data Culture with DELTA Plus",
    summary:
      "Using the DELTA Plus model to turn post-merger data into trusted, shared infrastructure, and the foundation that made AI agents possible.",
    short: "Turning post-merger data into trusted, shared infrastructure with the DELTA Plus model.",
    tags: ["DELTA Plus", "Data governance", "Analytics maturity"],
  },
];

// Company pages a case study can point to under "Keep reading". The research and lab now live on the company site.
export const companyWork: WorkItem[] = [
  {
    to: "/method/prove",
    icon: Microscope,
    kicker: "Zweifel Tech Method",
    title: "The PROVE Loop",
    summary: "The scientific method as a reasoning loop for AI agents: Predict, Run, Observe, Validate, Evolve.",
    short: "The scientific method as a reasoning loop for AI agents: Predict, Run, Observe, Validate, Evolve.",
    tags: ["Agent architecture"],
  },
  {
    to: "/services/ai-training",
    icon: FlaskConical,
    kicker: "Zweifel Tech training",
    title: "AI Adoption Training",
    summary: "Hands-on training for engineering teams, built on a local lab with working agents and framework comparisons.",
    short: "Hands-on training for engineering teams, built on a local lab with working agents.",
    tags: ["Training"],
  },
];

export const allWork = [...caseStudies, ...companyWork];
