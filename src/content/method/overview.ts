import type { MethodPage } from "../../lib/method";
import { method } from "./data";

const page: MethodPage = {
  slug: "",
  order: 1,
  navTitle: "Overview and maturity",
  title: "AI-enabled software delivery",
  summary:
    "A reference model for bringing AI agents into software delivery while people keep control. It covers the organizational foundation, a contract every stage follows, a twelve-stage lifecycle, deterministic controls and how to measure the results.",
  sourceMap: ["Cover", "Executive summary", "Contents", "Operating constraints", "1", "1.1", "1.2", "Figure 1", "Figure 1a"],
  references: "method",
  sections: [
    {
      heading: "What this method covers",
      body: [
        "The method connects approved requirements to specifications, plans, tasks, validated code, controlled releases and recorded production outcomes. Each step leaves evidence that the next step, a reviewer or an auditor can check.",
        "It has five parts: standing organizational controls, architecture and repository context, a six-field stage contract, objective test evidence with protected branch and release controls, and production observations that feed the next round of work.",
        "It is a reference design: what a well-run AI-enabled delivery organization puts in place. Most organizations will have some of these integrations, permissions and safeguards and still need to add others.",
      ],
      callout: {
        label: "The stage contract",
        text: "Event, input, execution, output, validation, transition. The same six-part structure applies to every stage, whether a person does the work by hand, an agent does it under review, or an orchestration layer runs it.",
      },
    },
    {
      heading: "What does each part of the method answer?",
      id: "contents",
      table: {
        columns: ["Part", "The question it answers"],
        rows: [
          ["Overview and maturity", "What is the progression from manual work to adaptive agentic engineering?"],
          ["Organizational foundation", "Which governance, context, permissions, agent assets and platforms are required?"],
          ["The stage contract", "How is every stage triggered, executed, validated and moved on?"],
          ["How agents work a stage", "How does an agent reason inside one bounded stage without looping or guessing?"],
          ["The twelve-stage lifecycle", "How does a product requirement become a reviewed, tested, deployed and observed change?"],
          ["Policy, testing and approvals", "What must stay deterministic, and what needs human approval?"],
          ["Measurement and readiness", "How are impact, reliability, adoption and readiness measured?"],
        ],
      },
    },
    {
      heading: "What rules hold everywhere?",
      id: "operating-constraints",
      list: [
        "The specification is the authoritative statement of approved intent. Code is validated against it, not the other way around.",
        "Outputs are durable business and engineering artifacts: work-item updates, specifications, plans, pull requests, review decisions, test runs, deployment records and monitoring reports. A chat reply is not an output.",
        "Agent reasoning is probabilistic. CI, permissions, quality gates and branch protection must be deterministic.",
        "Production performance and product adoption feed back into the next round of work. Correct code can still fail to help customers, so delivery is judged on both.",
      ],
    },
    {
      heading: "What are the five maturity levels?",
      id: "maturity",
      body: [
        "The levels describe who starts and coordinates the work, and how much decision-making is delegated to agents. A team with many agents can still be at a low level. Even at high maturity, higher-risk work may stay under human control.",
      ],
      figure: "MaturityLadder",
      figureCaption: "Figure 1. From manual to adaptive agentic delivery. Autonomy grows; deterministic verification and accountable release controls stay in place at every level.",
      table: {
        caption: "What each level looks like, and the evidence that a team has reached it",
        columns: ["Level", "Typical operating behavior", "Graduation evidence"],
        rows: method.maturity.map((l) => [`${l.id} · ${l.name}`, l.typicalBehavior, l.exitEvidence]),
      },
      after: [
        "L4 is a proposed maturity category, not an established certification. Production feedback may start an investigation or a low-risk fix, but authorization and required quality checks stay in force. [1][2]",
      ],
    },
    {
      heading: "How does a team move up a level?",
      id: "graduation",
      list: [
        "L0 to L1: automate builds, unit and integration tests, linting, security checks, protected-trunk rules, deployments and release provenance.",
        "L1 to L2: provide trustworthy retrieval over the code and architecture, repository instructions, authorized MCP tools, skills, templates and a discipline for approving artifacts.",
        "L2 to L3: standardize the stage contract and add persistent workflow state, dependency-aware tasks, timeouts, retries, queued decisions and independent verifiers.",
        "L3 to L4: set meaningful product and business objectives, baseline signals from monitoring and product analytics, risk-bounded proactive triage and measured outcome feedback.",
      ],
      figure: "CapabilityPhases",
      figureCaption: "Figure A3. Capability progression and exit criteria: the prerequisites for moving from manual work to adaptive workflows.",
    },
    {
      heading: "Is automation the same as autonomy?",
      id: "automation-vs-autonomy",
      body: [
        "No. Deterministic automation runs predefined logic: compile, scan, test, deploy, compare against policy and block failures. Agentic execution interprets ambiguous context and chooses next actions within a permitted scope.",
        "A mature platform combines both. Agents can choose how to carry out a bounded task, but they cannot choose to waive required checks or grant themselves access.",
        "Levels can differ by kind of work. A team may run L3 for documentation or tests, L2 for architecture decisions, and still authorize every release that touches protected data by hand. The approval rule follows the risk of the action, whatever the team's level.",
      ],
      figure: "ResponsibilityMatrix",
      figureCaption:
        "Figure 1a. Responsibility by maturity level: the illustrative dominant operating mode for each kind of work. Action risk can require stricter human oversight at every level.",
    },
  ],
};

export default page;
