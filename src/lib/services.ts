// The three services. Home, the Services index, each service page and the footer read this list.
import { Boxes, GraduationCap, Workflow, type LucideIcon } from "lucide-react";
import type { MethodSlug } from "./method";

export interface Service {
  slug: "software-architecture" | "ai-sdlc" | "ai-training";
  path: string;
  icon: LucideIcon;
  name: string;
  shortName: string;
  summary: string;
  problem: string;
  audience: string[];
  deliverables: string[];
  measures: string[];
  cta: { label: string; mailSubject: string };
  relatedMethod: MethodSlug[];
  learningPath?: { level: "L1" | "L2" | "L3"; title: string; developersLearn: string[] }[];
  labBasis?: string[];
}

export const services: Service[] = [
  {
    slug: "software-architecture",
    path: "/services/software-architecture",
    icon: Boxes,
    name: "Software design, architecture and scale",
    shortName: "Software architecture",
    summary: "Get from idea to a working, well-structured product quickly, then make it hold up as usage grows.",
    problem:
      "A product idea needs to become working software fast, or a system that worked at launch is slowing the team down: releases are risky, the architecture fights every change and nobody is sure what will break at ten times the load.",
    audience: [
      "Founders and product owners who need a first version built and structured to last",
      "Engineering leaders facing a rewrite, a monolith split or a cloud move",
      "Teams whose delivery has slowed because the architecture no longer fits the product",
    ],
    deliverables: [
      "Architecture review: current state, the risks that matter and a target design, written down as decision records",
      "Rapid build: a working first version, delivered in short increments with tests and a deployment pipeline",
      "Scaling plan: data, service boundaries, cloud cost and observability, sequenced so the product keeps shipping",
      "Hand-over: repository guidance, runbooks and a walkthrough so your team owns what was built",
    ],
    measures: [
      "Lead time from approved change to production",
      "Change failure and recovery time",
      "Load the system handles within its targets",
      "Time for a new engineer to make a first safe change",
    ],
    cta: { label: "Start a conversation", mailSubject: "New engagement: software architecture" },
    relatedMethod: ["stage-contract", "lifecycle", "controls"],
  },
  {
    slug: "ai-sdlc",
    path: "/services/ai-sdlc",
    icon: Workflow,
    name: "AI maturity and AI-enabled SDLC adoption",
    shortName: "AI-enabled delivery",
    summary:
      "Find out where your teams are on the path from manual work to agent-assisted delivery, and move up a level without losing control.",
    problem:
      "Developers are using AI tools, but nobody can say whether delivery is faster or safer. Agents write code nobody reviews properly, the rules they follow live in chat prompts, and leaders cannot tell which work is safe to hand to an agent.",
    audience: [
      "CTOs and VPs of Engineering deciding how far to take AI in delivery",
      "Engineering managers and tech leads who will run the new way of working",
      "Platform, security and quality teams who own the controls",
    ],
    deliverables: [
      "Maturity assessment: where each team sits on the five levels (L0 to L4), with the evidence behind it",
      "Readiness checklist: the foundation, permissions, tests and branch rules to put in place before agents write code",
      "Phased rollout plan: which work moves to agents first, the stage contracts and approval rules for it, and how to measure it",
      "Pilot support: setting up repository instructions, skills, review queues and the scorecard on a real team",
    ],
    measures: [
      "Delivery flow",
      "Stability",
      "Specification quality",
      "Agent effectiveness",
      "Product results",
      "Organizational enablement",
    ],
    cta: { label: "Start a conversation", mailSubject: "New engagement: AI-enabled delivery" },
    relatedMethod: ["", "foundation", "stage-contract", "prove", "lifecycle", "controls", "measurement"],
  },
  {
    slug: "ai-training",
    path: "/services/ai-training",
    icon: GraduationCap,
    name: "AI adoption training for engineering teams",
    shortName: "AI adoption training",
    summary:
      "Hands-on training that takes developers from trying AI tools to running agents under review in their own repositories.",
    problem:
      "Teams have licenses for AI tools but adoption is uneven: a few enthusiasts, many skeptics and no shared way of working. Developers learn by trial and error, and leaders cannot tell who is ready for more autonomy.",
    audience: [
      "Developers who want to work with agents rather than around them",
      "Tech leads who will review agent output and set the rules for their repositories",
      "Engineering managers responsible for adoption, quality and the change in roles",
    ],
    deliverables: [
      "A learning path keyed to maturity levels L1 to L3, run as hands-on labs on your own code",
      "Repository instructions, skills and review checklists your team writes during the labs and keeps",
      "A completed readiness checklist and a recommendation for which work each team can hand to agents next",
    ],
    measures: [
      "Share of developers working with agents under review",
      "Accepted first-pass output and revisions per task",
      "Review time and defects escaped to production",
      "Repositories with current instructions and skills",
    ],
    cta: { label: "Plan a training", mailSubject: "New engagement: AI adoption training" },
    relatedMethod: ["", "foundation", "prove"],
    learningPath: [
      {
        level: "L1",
        title: "Trust the deterministic floor",
        developersLearn: [
          "Why builds, tests, scans and branch rules must pass before any agent work counts",
          "Reading CI evidence instead of trusting a summary",
          "Writing tests that make agent changes safe to review",
        ],
      },
      {
        level: "L2",
        title: "Work with an agent, under review",
        developersLearn: [
          "Writing repository instructions and skills that ground the agent in your code",
          "Specify, plan and task before code: driving an agent through the stage contract",
          "Reviewing agent output well: scope, tests, evidence and when to reject",
          "Choosing the right model and tool for the task",
        ],
      },
      {
        level: "L3",
        title: "Hand bounded work to agents",
        developersLearn: [
          "Running agents on approved tasks with stop conditions, timeouts and retries",
          "The PROVE loop: making agents predict, check and escalate instead of guessing",
          "Review queues, approval classes and what an agent may never do on its own",
        ],
      },
    ],
    labBasis: [
      "A fully local AI platform (Ollama, vLLM and Qdrant) with task-based model routing, so labs run without sending code to outside services",
      "Three working agents built on different frameworks: a research digest and an email organizer on LangGraph, and a question-answering agent on the Strands Agents SDK",
      "Head-to-head comparisons of LangGraph, CrewAI, Strands and the OpenAI Agents SDK, plus embedding, classification and temperature experiments",
      "Eight guided notebooks, eight experiment notebooks and a guide to more than 85 resources on agentic AI",
    ],
  },
];

export const serviceBySlug = (slug: Service["slug"]) => services.find((s) => s.slug === slug);
