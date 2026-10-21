// Case studies and research shown on Projects, Home and the "Keep reading" sections, so cards stay in sync.
import { Bot, FlaskConical, Microscope, Triangle, Users, type LucideIcon } from "lucide-react";

export interface WorkItem {
  to: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  summary: string;
  /** One line for compact cards (Home, "Keep reading") */
  short: string;
  tags: string[];
}

// Leadership case studies. They're anonymized on purpose: no company name, internal figures,
// system names or org charts (see "Content rules" in CLAUDE.md).
export const caseStudies: WorkItem[] = [
  {
    to: "/ai-augmented-sdlc",
    icon: Bot,
    kicker: "Operating model",
    title: "The AI-Augmented SDLC Organization",
    summary:
      "Agents draft at every stage of the software lifecycle; engineers review, decide and own what ships. The model, the guardrails, and how roles change.",
    short: "Agents draft at every stage of the software lifecycle; engineers review, decide and own what ships.",
    tags: ["Agentic AI", "Operating model", "Change management"],
  },
  {
    to: "/team-scaling-leadership",
    icon: Users,
    kicker: "Leadership",
    title: "Scaling a Team Through Change",
    summary:
      "Growing an R&D team from 15 to more than 65 people through a merger, a move to remote work and the AI transition, and the practices that held it together.",
    short: "Growing an R&D team from 15 to 65+ through a merger, remote work and the AI transition.",
    tags: ["Team building", "Inclusive leadership", "M&A integration"],
  },
  {
    to: "/delta-framework-implementation",
    icon: Triangle,
    kicker: "Data culture",
    title: "Building a Data Culture with DELTA Plus",
    summary:
      "Using the DELTA Plus model to turn post-merger data into trusted, shared infrastructure, and the foundation that made AI agents possible.",
    short: "Turning post-merger data into trusted, shared infrastructure with the DELTA Plus model.",
    tags: ["DELTA Plus", "Data governance", "Analytics maturity"],
  },
];

export const research: WorkItem[] = [
  {
    to: "/prove-pattern",
    icon: Microscope,
    kicker: "Original research",
    title: "The PROVE Pattern",
    summary:
      "The scientific method as a reasoning loop for AI agents. PROVE (Predict, Run, Observe, Validate, Evolve) answers the documented failure modes of ReAct-style agents: looping, premature commitment, error propagation and confabulation.",
    short: "The scientific method as a reasoning loop for AI agents: Predict, Run, Observe, Validate, Evolve.",
    tags: ["Agent architecture", "Multi-agent", "26 sources"],
  },
  {
    to: "/ai-development-lab",
    icon: FlaskConical,
    kicker: "Lab",
    title: "AI Development Lab",
    summary:
      "A fully local AI platform running Ollama, vLLM and Qdrant, with three working agents and head-to-head framework evaluations across Strands, LangGraph and CrewAI.",
    short: "A local platform with three working agents, used to compare agent frameworks on real workloads.",
    tags: ["LangGraph", "Strands Agents SDK", "CrewAI", "RAG"],
  },
];

export const allWork = [...caseStudies, ...research];
