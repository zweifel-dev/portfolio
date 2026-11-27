import type { MethodPage } from "../../lib/method";

const page: MethodPage = {
  slug: "measurement",
  order: 7,
  navTitle: "Measurement and readiness",
  title: "Measurement, readiness and traceability",
  summary:
    "How to tell whether AI-enabled delivery is working: a balanced scorecard, the decisions to settle before rollout, a readiness checklist, and the chain of evidence every delivery should leave.",
  sourceMap: ["6", "6.1", "6.2", "Appendix A", "Appendix B", "Appendix C", "Appendix D note"],
  references: "method",
  sections: [
    {
      heading: "What should be measured?",
      id: "scorecard",
      body: [
        "Measure six areas together, because faster code generation can make releases less stable or ship features nobody uses.",
      ],
      figure: "Scorecard",
      figureCaption: "A balanced scorecard: example measures and the question each area answers.",
      after: [
        "Take a baseline for each measure before rollout. DORA recommends tracking throughput and stability together, working in small batches, and watching the capabilities that support continuous delivery; product analytics can measure page and feature goals and user paths. [1][7][8]",
      ],
    },
    {
      heading: "What must be decided before rollout?",
      id: "decisions",
      list: [
        "Which constitution clauses are hard policy, and where will they be enforced?",
        "Who approves the requirement and specification, the architecture plan, pull-request merges, production releases and high-risk exceptions?",
        "Which artifact store is authoritative for specifications, plans, tasks and architecture decisions?",
        "Exactly which tools may agents call, in which environment, with what identity and audit retention?",
        "How will CI test evidence be joined to a specification revision, a pull-request commit and a deployed release?",
        "Which service metrics and product-usage outcomes identify a successful feature?",
        "Which low-risk actions can go ahead without synchronous human approval?",
      ],
    },
    {
      heading: "What should a team have in place before a pilot?",
      id: "readiness",
      list: [
        "A constitution and risk classification, published with named owners.",
        "Current CLAUDE.md or other supported agent rules, and architecture decisions, maintained per repository.",
        "The provenance of code-index and knowledge-graph sources verified.",
        "Scoped MCP tools and gateway authorization tested with restricted identities.",
        "Templates for specification, plan, tasks and review, and the stage contracts, under version control.",
        "CI, browser and API tests running on representative changes.",
        "A protected trunk branch with required reviews and checks enforced.",
        "A rollback path, a telemetry baseline, monitored services and product outcomes defined.",
        "A review queue that captures approve, edit, feedback, rerun and block decisions and who made them.",
        "Pilot success thresholds and responsibilities for exceptions and incidents agreed.",
      ],
    },
    {
      heading: "What chain of evidence should every delivery leave?",
      id: "traceability",
      body: ["Every delivery produces a chain of related identifiers that can be queried end to end:"],
      figure: "TraceabilityChain",
      table: {
        caption: "Records along the chain",
        columns: ["Record", "What it holds"],
        rows: [
          ["Decision record", "Actor, review type, timestamp, artifact ID, revision, decision and reason."],
          ["Execution record", "Worker identity, environment, permitted tools, constraints, run ID, status and tool trace."],
          ["Test record", "Commit, test-suite revision, runtime environment, pass or fail, and attachments."],
          ["Deployment record", "Build digest or commit, source branch, environment, authorization, health and rollback."],
          ["Observation record", "Baseline and window, metrics, product objective, deviations and the follow-up owner."],
        ],
      },
    },
    {
      heading: "Which parts are fixed, and which should be adapted?",
      id: "adapt",
      body: [
        "The tool references are supporting documentation. The six-part contract, the twelve-stage lifecycle, the risk classes and the L0 to L4 maturity model are proposed design choices, meant to be adapted to each organization's policy.",
        "We use this method in our AI maturity and AI-enabled SDLC engagements, starting with an assessment against the maturity levels and the readiness checklist above.",
      ],
    },
  ],
};

export default page;
