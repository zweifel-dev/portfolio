import type { MethodPage } from "../../lib/method";

const page: MethodPage = {
  slug: "controls",
  order: 6,
  navTitle: "Policy, testing and approvals",
  title: "Policy, testing and approvals",
  summary:
    "What stays deterministic and what needs a person: branch policy, the test and verification pyramid, four classes of action risk, and the controls no agent can bypass.",
  sourceMap: ["5", "5.1", "5.2", "5.3", "Required controls", "5.4"],
  references: "method",
  sections: [
    {
      heading: "Which branch is the trunk?",
      id: "branching",
      body: [
        "The model assumes one integration trunk for the main repository (develop, in many teams). Agents create short-lived task branches from the trunk for isolated changes and open pull requests that target it.",
        "Builds and deployments to shared environments come only from the trunk, never from a release, hotfix, epic, feature or personal branch. Production fixes are made and merged into the trunk first, then deployed through the same approved path. Feature flags separate deploying a change from exposing it.",
        "Branch rules and CI/CD enforce this policy; an instruction in CLAUDE.md would only ask for it. Required status checks, reviews, conversation resolution and protected-branch restrictions are all configurable in the source-control platform. [4]",
      ],
    },
    {
      heading: "What evidence does each test layer produce?",
      id: "test-pyramid",
      table: {
        columns: ["Layer", "Tool or method", "Required evidence"],
        rows: [
          [
            "Fast static and unit",
            "Linting, type checks, compiler, unit tests, secret and vulnerability scanning",
            "Check ID, commit, pass or fail log and duration",
          ],
          [
            "Integration and contract",
            "Test harness, integration environments, provider and consumer contracts, API collections (for example Postman)",
            "Environment, collection version, results and failing cases",
          ],
          [
            "End-to-end and UI",
            "Browser tests (for example Playwright), cross-browser checks, critical user journeys",
            "Traces and artifacts, assertions, screenshots where needed, the tested commit",
          ],
          [
            "Pre-release",
            "Smoke tests, migration validation, rollout and rollback rehearsal, release approvals",
            "Pipeline run ID, artifact provenance and authorization",
          ],
          [
            "Production",
            "Service-level objectives and error budgets, logs and traces (for example Datadog), product adoption and user paths (for example Pendo)",
            "Tagged deployment, baseline comparison and a product outcome report",
          ],
        ],
      },
      after: [
        "Browser end-to-end tests run in CI, and API collections can run automatically from the command line with results CI can read. [5][6]",
      ],
    },
    {
      heading: "Who may authorize which actions?",
      id: "approvals",
      body: ["Who may authorize an action depends on its risk and the environment it touches. The team's maturity level does not change that."],
      figure: "ApprovalClasses",
      figureCaption: "Action risk and approval model: four classes from read-only advice to high-impact change.",
      callout: {
        label: "Required controls",
        text: "Agents cannot approve their own pull requests, suppress failed checks, change approved requirements without review, bypass protected branches or expand their own permissions. Approval authority is always independent of the agent doing the work.",
      },
    },
    {
      heading: "Which system does what?",
      id: "tools",
      body: [
        "The method was designed with the stack below, but any tool that fills the same role works.",
      ],
      table: {
        columns: ["System", "Role in the workflow"],
        rows: [
          ["Work tracking and requirements (for example Jira)", "Intake, acceptance, clarification, task breakdown, status, closure and follow-up."],
          ["The orchestration layer, code index and knowledge graph", "Retrieve current code and architecture, ownership, dependencies and grounded references; hold stage state."],
          ["Coding agent and skills (for example Claude Code)", "Run bounded analysis, specification, code, test and review procedures."],
          ["MCP servers and plugins", "Least-privilege connections to authorized repositories, work systems and execution tools."],
          ["Source control and CI/CD (for example GitHub)", "Branch and pull-request lifecycle, enforced checks, independent review, build provenance and trunk deployment."],
          ["Browser and API testing (for example Playwright and Postman)", "Real browser and API validation with traces, reports and pass or fail results."],
          ["Monitoring and product analytics (for example Datadog and Pendo)", "Evidence of reliability and product behavior that feeds the backlog and knowledge."],
          ["Model access (for example an inference gateway on Amazon Bedrock)", "Controlled, logged access to models with cost limits."],
        ],
      },
    },
  ],
};

export default page;
