import type { MethodPage } from "../../lib/method";
import { method } from "./data";

const page: MethodPage = {
  slug: "foundation",
  order: 2,
  navTitle: "Organizational foundation",
  title: "The organizational foundation",
  summary:
    "Six standing capabilities every piece of delivery work depends on. They are maintained continuously, not rebuilt for each feature, and agents cannot work safely until they are in place.",
  sourceMap: ["2", "2.1", "2.2", "2.3", "2.4", "Figure 2", "Figure 2a", "Figure A1"],
  references: "method",
  sections: [
    {
      heading: "What has to exist before agents can work?",
      id: "capabilities",
      body: [
        "The foundation sets the standards every team must meet, gives agents the context they need, packages repeatable behavior as tools, and limits what agents can reach outside the repository.",
        "It is grouped into six capabilities: govern, instruct, ground, equip, connect and operate.",
      ],
      figure: "FoundationGrid",
      figureCaption:
        "Figure 2. Six standing foundation capabilities. Work passes a readiness gate only when context is grounded, tools are authorized, controls are deterministic and owners are named.",
    },
    {
      heading: "What does each capability require, and who owns it?",
      id: "ownership",
      table: {
        columns: ["Capability", "Required assets", "Suggested owner"],
        rows: method.foundation.map((c) => [c.name, c.assets, c.suggestedOwner]),
      },
    },
    {
      heading: "Which rules are enforced, and which are guidance?",
      id: "rules-vs-guidance",
      body: ["The foundation separates what an agent is told from what the system enforces. Each layer has a different job:"],
      list: [
        "Constitution: sets organization-level engineering and security obligations.",
        "Repository guidance: explains the actual architecture and repository-specific conventions. Keep it concise, versioned and owned.",
        "Skills and subagents: package repeatable procedures and delegated specializations. They do not enforce organization policy on their own.",
        "Hooks, permissions, CI, branch rules and deployment controls: enforce prohibitions and quality requirements no matter how the model behaves.",
        "MCP servers and plugins: grant narrow, task-specific capabilities. Tool descriptions and retrieved text are untrusted input, never higher-level policy.",
      ],
      after: [
        "Anthropic draws the same lines between CLAUDE.md, skills, hooks and subagents, and recommends implementing hard restrictions with permissions or deterministic enforcement rather than natural-language instructions alone. [3]",
      ],
    },
    {
      heading: "What must discovery output contain?",
      id: "context-contract",
      body: [
        "Every discovery output names the sources it queried, the code revision, owners, dependency edges, relevant architecture decisions, missing facts, and its confidence and limits.",
        "A code search index grounds the agent in the current repositories, and a knowledge graph connects services to each other and to their owners.",
        "Stale or contradictory material either stops the stage or is recorded as an explicit risk, so the agent does not fill the gap with a guess.",
      ],
    },
    {
      heading: "How does the whole system fit together?",
      id: "system-graph",
      body: [
        "The six capabilities feed one orchestration layer that holds stage state, work contracts, the review queue and decision records. Human and agent work use the same six-field contract.",
        "For readability, the graph groups the twelve lifecycle stages into five. Horizontal arrows are handoffs between stage groups; vertical connectors are orchestration and evidence dependencies. Production findings route back to intake and to engineering knowledge.",
      ],
      figure: "SystemGraph",
      figureCaption:
        "Figure 2a. Integrated system and workflow dependency graph. Standing capabilities are shared across work items; each stage group writes to its system of record.",
      after: ["The lifecycle page keeps all twelve stages and their individual contracts."],
    },
    {
      heading: "What does a first setup checklist look like?",
      id: "setup",
      figure: "FoundationSetup",
      figureCaption:
        "Figure A1. Initial foundation checklist: organizational configuration, repository instructions, engineering knowledge, behaviors, authorized tools and runtime prerequisites. The goal is execution that is repeatable, secure and traceable.",
    },
  ],
};

export default page;
