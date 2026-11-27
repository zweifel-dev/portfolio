// Structured data for the Method section, transcribed from the white paper "AI-Enabled Software Delivery" (v9.3)
// by Brandon Zweifel and Zweifel Tech LLC. Employer-internal names are replaced: the internal orchestration
// service is "the orchestration layer", its code index is "the code index", and the internal repository is
// "the main repository". scripts/check-content.mjs fails the build if any of those names come back.

export type LevelId = "L0" | "L1" | "L2" | "L3" | "L4";

export interface MaturityLevel {
  id: LevelId;
  name: string;
  shortName: string;
  operatingMode: string;
  behaviors: string[];
  typicalBehavior: string;
  exitEvidence: string;
  exitEvidenceShort: string;
  graduation?: string;
}

export interface FoundationCapability {
  key: "govern" | "instruct" | "ground" | "equip" | "connect" | "operate";
  name: string;
  tagline: string;
  examples: string[];
  assets: string;
  suggestedOwner: string;
  setupTitle: string;
  setupItems: string[];
}

export interface StageContractField {
  key: "event" | "input" | "execution" | "output" | "validation" | "transition";
  name: string;
  summary: string;
  properties: string;
  example: string;
  implementationExample: string;
}

export interface LifecycleStage {
  n: number;
  name: string;
  shortName: string;
  group: 1 | 2 | 3 | 4 | 5;
  summary: string;
  output: string;
  activities: string[];
  contract: { event: string; input: string; execution: string; output: string; validation: string; transition: string };
}

export interface ProveStep {
  key: "predict" | "run" | "observe" | "validate" | "evolve";
  name: string;
  what: string;
  contractField: "execution" | "output" | "validation" | "transition";
  failureMode: string;
}

export interface ApprovalClass {
  id: "A" | "B" | "C" | "D";
  name: string;
  examples: string[];
  authorization: string;
}

export interface ScorecardArea {
  name: string;
  measures: string[];
  interpretation: string;
}

export interface Reference {
  n: number;
  title: string;
  url: string;
}

const maturity: MaturityLevel[] = [
  {
    id: "L0",
    name: "Manual work",
    shortName: "Manual",
    operatingMode: "Human-executed delivery",
    behaviors: ["Individual habits", "Manual approvals", "Knowledge lives in people"],
    typicalBehavior: "People interpret requests, research dependencies, write code, test, review and coordinate the release.",
    exitEvidence: "The baseline value stream and its owners are documented.",
    exitEvidenceShort: "Reliable baseline",
    graduation:
      "To reach L1: automate builds, unit and integration tests, linting, security checks, protected-trunk rules, deployments and release provenance.",
  },
  {
    id: "L1",
    name: "Deterministic automation",
    shortName: "Deterministic",
    operatingMode: "Rules-based automation",
    behaviors: ["CI, tests and security scans", "Branch protection", "Repeatable scripts"],
    typicalBehavior: "Builds, tests, security scans, branch rules, release and audit steps run the same way every time.",
    exitEvidence: "Pass and fail checks can be trusted, and deployments are reproducible.",
    exitEvidenceShort: "Reproducible gates",
    graduation:
      "To reach L2: provide trustworthy code retrieval, repository instructions, authorized tools, skills, templates and a discipline for approving artifacts.",
  },
  {
    id: "L2",
    name: "Augmented agentic delivery",
    shortName: "Augmented",
    operatingMode: "Agent-assisted, human-driven flow",
    behaviors: ["Agents read, research and plan", "Code and test support", "People drive each stage"],
    typicalBehavior:
      "People drive the stages. Agents research, write specifications and plans, write code and tests, and summarize, with a person reviewing.",
    exitEvidence: "Agent output is grounded and useful, and rework stays low with human verification.",
    exitEvidenceShort: "Evidence-backed assistance",
    graduation:
      "To reach L3: standardize the stage contract and add persistent workflow state, dependency-aware tasks, timeouts, retries, queued decisions and independent verifiers.",
  },
  {
    id: "L3",
    name: "Automated agentic delivery",
    shortName: "Automated",
    operatingMode: "Agent-orchestrated flow",
    behaviors: ["State machine and review queue", "Agents execute stages", "Risk-based approvals"],
    typicalBehavior:
      "An orchestration layer coordinates work contracts and dependencies. Agents carry out approved work, and exceptions and approvals go to a review queue.",
    exitEvidence: "Transitions are auditable, retries are bounded, checks are independent and throughput is stable.",
    exitEvidenceShort: "Repeatable agent delivery",
    graduation:
      "To reach L4: set meaningful product and business objectives, baseline telemetry and usage signals, risk-bounded proactive triage and measured outcome feedback.",
  },
  {
    id: "L4",
    name: "Adaptive, outcome-driven agentic delivery",
    shortName: "Adaptive",
    operatingMode: "Outcome-driven and governed",
    behaviors: ["Observe and triage", "Propose targeted changes", "Low-risk remediation only"],
    typicalBehavior:
      "Production and product-usage signals start triage and improvement proposals, and only preauthorized low-risk fixes.",
    exitEvidence: "Outcome loops are traceable, without any loss of reliability or governance.",
    exitEvidenceShort: "Closed-loop improvement",
  },
];

/** Figure 1a: dominant operating mode by kind of work. H human-led, D deterministic automation, A agent-led. */
const responsibility: { work: string; cells: [string, string, string, string, string] }[] = [
  { work: "Requirements and scope", cells: ["H", "H", "H+A", "H+A", "A+H"] },
  { work: "Architecture and plans", cells: ["H", "H", "H+A", "A+H", "A+H"] },
  { work: "Implementation", cells: ["H", "D+H", "H+A", "A", "A"] },
  { work: "Execution and tests", cells: ["H", "D", "D+A", "D+A", "D+A"] },
  { work: "Review and release", cells: ["H", "D+H", "D+H", "D+H", "D+H"] },
  { work: "Production triage", cells: ["H", "D+H", "H+A", "A+H", "A+H"] },
];

const foundation: FoundationCapability[] = [
  {
    key: "govern",
    name: "Govern",
    tagline: "Constitution, policy and approval rights",
    examples: ["Risk classes and autonomy limits", "Security, privacy and compliance", "Guardrails that are audited and enforced"],
    assets:
      "Engineering constitution, security and privacy policy, change classes, autonomy policy, approval authority, logging and the exception procedure.",
    suggestedOwner: "Engineering and Security",
    setupTitle: "Governance and safety",
    setupItems: [
      "Engineering constitution and guardrails",
      "Security, privacy, compliance and role-based access",
      "Autonomy limits and human approval gates",
      "Policy ownership, audits and exceptions",
    ],
  },
  {
    key: "instruct",
    name: "Instruct",
    tagline: "Repository instructions and decisions",
    examples: ["Repository commands and conventions", "Ownership and Definition of Done", "A versioned source of truth"],
    assets:
      "CLAUDE.md, and AGENTS.md where supported; coding and build conventions; code owners; architecture decisions; Definition of Done.",
    suggestedOwner: "Repository owners",
    setupTitle: "Repository instructions",
    setupItems: [
      "CLAUDE.md and agent-specific AGENTS.md",
      "Conventions, build and test commands",
      "Architecture decisions and ownership",
      "Definition of Done and review standards",
    ],
  },
  {
    key: "ground",
    name: "Ground",
    tagline: "Code index and knowledge graph",
    examples: ["Code, APIs and dependencies", "Architecture and system context", "Provenance and freshness checks"],
    assets:
      "A code search index, architecture, ownership, API contracts, deployment inventory, a knowledge graph, and provenance and freshness indicators.",
    suggestedOwner: "Platform and Architecture",
    setupTitle: "Engineering knowledge",
    setupItems: [
      "Code and repository search index",
      "Knowledge graph of services and dependencies",
      "Architecture, contracts and domain model",
      "Grounded retrieval with source citations",
    ],
  },
  {
    key: "equip",
    name: "Equip",
    tagline: "Skills, subagents, hooks and plugins",
    examples: ["Reusable stage procedures", "Delegated roles and tool scopes", "Repeatable enforcement checks"],
    assets: "Stage skills, specialized subagents, templates, plugins, deterministic hooks and reviewer criteria.",
    suggestedOwner: "Platform Engineering",
    setupTitle: "Agent behaviors",
    setupItems: [
      "Agent roles and agent definition files",
      "Reusable skills, plugins and hooks",
      "Requirement, specification, plan and task templates",
      "Deterministic checks and stop conditions",
    ],
  },
  {
    key: "connect",
    name: "Connect",
    tagline: "Scoped tools and work systems",
    examples: ["Access to requirements and work items", "Browser and API test execution", "Telemetry and product analytics"],
    assets:
      "Work tracking, source control, documentation, API and browser testing, monitoring and product analytics, through scoped MCP or API integrations.",
    suggestedOwner: "Platform and application owners",
    setupTitle: "MCP and connections",
    setupItems: [
      "The orchestration layer's MCP server and other authorized integrations",
      "Work tracking, source control and documentation sources",
      "Browser and API test tooling",
      "Read access to monitoring and product analytics",
    ],
  },
  {
    key: "operate",
    name: "Operate",
    tagline: "Runtime, pipeline and trunk",
    examples: ["Isolated workspace and credentials", "A protected trunk and release path", "Telemetry, tracing and cost limits"],
    assets:
      "An inference gateway, sandbox, secrets, CI/CD, a protected trunk branch, feature flags, telemetry and cost limits.",
    suggestedOwner: "SRE and Platform",
    setupTitle: "Runtime and delivery",
    setupItems: [
      "Model access through a controlled inference gateway",
      "Sandbox, secrets and traceable tool calls",
      "Trunk branch protection and CI/CD",
      "Ephemeral environments and feature flags",
    ],
  },
];

const contract: StageContractField[] = [
  {
    key: "event",
    name: "Event",
    summary: "Trigger and accountable owner",
    properties: "The trigger, stage and work-item ID, responsible actor, source and prior state.",
    example: "Requirement ready, approval, failure, alert",
    implementationExample: "An approved implementation task becomes READY.",
  },
  {
    key: "input",
    name: "Input",
    summary: "Revisioned sources and access",
    properties:
      "References and revisions of the requirement, specification, code, plan and tasks; permission scope, constraints and prerequisites.",
    example: "Specification, repository, constraints, prior evidence",
    implementationExample:
      "Specification v3, plan v2, task TASK-412, the target trunk commit, repository rules and scoped source-control access.",
  },
  {
    key: "execution",
    name: "Execution",
    summary: "Bounded objective and tools",
    properties: "A specific goal, allowed tools, stop conditions, timeout, retry policy and forbidden operations.",
    example: "What the agent does, and explicit stop rules",
    implementationExample: "Make bounded code changes and add unit tests. Direct merges and production deploys are prohibited.",
  },
  {
    key: "output",
    name: "Output",
    summary: "A human-visible artifact or action",
    properties: "Artifact type, link or identifier, content revision, author, status and timestamp.",
    example: "Work item, specification, commit, pull request, test run, report",
    implementationExample: "Task branch, commits, a draft pull request, a linked work-item comment and the test command results.",
  },
  {
    key: "validation",
    name: "Validation",
    summary: "Evidence and acceptance criteria",
    properties: "Acceptance criteria, machine evidence, reviewer, approved version and failure details.",
    example: "Automated checks plus a designated reviewer",
    implementationExample:
      "Changed behavior matches the specification, local checks were run, the secret scan is clean and nothing is out of scope.",
  },
  {
    key: "transition",
    name: "Transition",
    summary: "Next state and branch conditions",
    properties: "Next state and actor; the permitted advance, revise, rerun, block, escalate, archive or remediate paths.",
    example: "Advance, revise, rerun, block, escalate",
    implementationExample: "PASS goes to Run and verify; FAIL returns to implementation; BLOCKED goes to a named owner and the review queue.",
  },
];

const lifecycle: LifecycleStage[] = [
  {
    n: 1,
    name: "Intake and read the requirement",
    shortName: "Intake",
    group: 1,
    summary: "Read the requirement, clarify scope",
    output: "Aligned requirements",
    activities: ["Work item and product requirement", "Read intent and clarify gaps", "Acceptance and scope"],
    contract: {
      event: "A product item or requirement is marked ready for engineering.",
      input: "The work item, the requirement's revision, its owner and the stated business outcome.",
      execution: "Read the intent; identify actors, acceptance, exclusions and unresolved decisions.",
      output: "Clarification notes on the work item; agreed scope and measurable acceptance.",
      validation: "The product owner confirms there is enough information to specify.",
      transition: "Complete goes to Specify; unclear goes back to product for clarification.",
    },
  },
  {
    n: 2,
    name: "Specify",
    shortName: "Specify",
    group: 1,
    summary: "Behavior, nonfunctional requirements and tests",
    output: "Approved specification",
    activities: ["Functional and nonfunctional specification", "Acceptance tests and contracts", "Human sign-off on scope"],
    contract: {
      event: "Scope and requirement are clarified and approved for specification.",
      input: "The latest requirement, business rules, interfaces, risks and existing behavior.",
      execution: "Define functional behavior, nonfunctional requirements, data contracts, edge cases and testable criteria.",
      output: "A versioned specification linked to the requirement and work item.",
      validation: "Product and engineering approve it; completeness and contradictions are checked.",
      transition: "Approved goes to Discover; changes revise the specification and the artifacts it affects.",
    },
  },
  {
    n: 3,
    name: "Discover and analyze impact",
    shortName: "Discover",
    group: 2,
    summary: "Code index and architecture",
    output: "Cited impact analysis",
    activities: ["Code index and knowledge graph", "Find impacted code and owners", "Architecture and dependency map"],
    contract: {
      event: "The approved specification is ready for technical grounding.",
      input: "The specification revision, the code index and knowledge graph, architecture decisions and repository references.",
      execution: "Find impacted services, owners, tests, dependencies and alternatives, citing each source.",
      output: "An impact map, the affected repositories and architecture evidence.",
      validation: "The evidence is current and credible, and unknowns are named explicitly.",
      transition: "Enough grounding goes to Plan; gaps go to investigation or are blocked.",
    },
  },
  {
    n: 4,
    name: "Plan and decompose tasks",
    shortName: "Plan and tasks",
    group: 2,
    summary: "Design and decomposition",
    output: "Approved plan and tasks",
    activities: ["Technical plan and risks", "Sequence implementable tasks", "Human approval of the plan"],
    contract: {
      event: "The impact analysis and approved specification are available.",
      input: "The specification, dependency map, conventions, risk tier and rollout needs.",
      execution: "Decide the design, migrations, tests, feature flag and rollback; create ordered tasks.",
      output: "An architecture plan, design notes, a task list and child work items.",
      validation: "Architecture and engineering approve the plan; it covers every acceptance criterion.",
      transition: "Approved goes to Analyze; rejected revises the plan or the specification.",
    },
  },
  {
    n: 5,
    name: "Analyze and prepare",
    shortName: "Analyze",
    group: 2,
    summary: "Cross-artifact gaps",
    output: "Ready-to-build task",
    activities: ["Check ambiguities and gaps", "Assess tests, risk and data", "Short-lived branch from the trunk"],
    contract: {
      event: "The approved plan and tasks are ready to execute.",
      input: "Specification, plan and tasks, the current trunk commit, test data and environment.",
      execution:
        "Check cross-artifact consistency, ambiguities, test coverage and permissions; open a short-lived branch from the trunk.",
      output: "A gap analysis, resolved tasks, the branch and pinned work context.",
      validation: "No blocking contradictions; branch policy and required resources are verified.",
      transition: "Ready goes to Implement; gaps revise the specification, plan or tasks.",
    },
  },
  {
    n: 6,
    name: "Implement",
    shortName: "Implement",
    group: 3,
    summary: "Small changes and unit tests",
    output: "Code and linked commits",
    activities: ["Agent, skills and tools", "Small changes and unit tests", "Commit and open a draft pull request"],
    contract: {
      event: "One task passes analysis with authorized write tools.",
      input: "The pinned specification, plan and task; repository rules; the branch and known tests.",
      execution: "Write small code increments, tests and commits; update the work item; open a draft pull request.",
      output: "Commit hashes, changed tests, a draft pull request and its work-item link.",
      validation: "Local build and unit checks were actually run, and the scope matches the task.",
      transition: "Pass goes to Run and verify; failure is fixed and retried; deviation goes to review.",
    },
  },
  {
    n: 7,
    name: "Run and verify",
    shortName: "Run and test",
    group: 3,
    summary: "CI, API and browser tests",
    output: "Executed test evidence",
    activities: ["Run the app and CI validation", "API and contract tests", "Browser end-to-end and security tests"],
    contract: {
      event: "The implementation is ready for objective verification.",
      input: "The commit, test environment, acceptance cases, and API and UI test suites.",
      execution:
        "Run CI, unit, integration and security checks, API collections and browser end-to-end tests; record traces and screenshots where useful.",
      output: "Linked test runs, logs, failures, coverage and environment details.",
      validation: "Required checks pass, with evidence tied to the same commit and test environment.",
      transition: "Pass goes to Review; fail returns to Implement; an unstable environment is blocked.",
    },
  },
  {
    n: 8,
    name: "Independent pull-request review",
    shortName: "Review",
    group: 4,
    summary: "Independent review",
    output: "Approved pull request and checks",
    activities: ["Independent agent review", "Code owner and human review", "Failures return to Implement"],
    contract: {
      event: "The pull request has completed required validation.",
      input: "The pull request and diff, the specification, security and test evidence, and code owners.",
      execution: "An independent agent review and a designated human peer or code-owner review.",
      output: "Actionable comments, revisions, review approvals and resolved threads.",
      validation: "The right reviewers approved and required checks pass; nobody approves their own work.",
      transition: "Approved goes to Merge; changes required return to Implement and retest.",
    },
  },
  {
    n: 9,
    name: "Merge to the protected trunk",
    shortName: "Merge",
    group: 4,
    summary: "Protected trunk",
    output: "Merged change commit",
    activities: ["Specification, work item, commits and pull request linked", "Protected branch rules enforced", "Merge into the trunk"],
    contract: {
      event: "The pull request meets branch protection, approval and test gates.",
      input: "The approved pull request, required checks and the current trunk commit.",
      execution: "Enforce the merge policy, reconcile with the latest trunk and merge.",
      output: "The merged pull request, the trunk commit and the work-item transition.",
      validation: "Source control confirms the merge into the trunk and the merge commit is available.",
      transition: "Merged goes to Release; a gate failure goes back to fix or review.",
    },
  },
  {
    n: 10,
    name: "Release",
    shortName: "Release",
    group: 4,
    summary: "Deploy from the trunk",
    output: "Release record",
    activities: ["Build and deploy from the trunk", "Flags, canary and rollback plan", "Deployment authorization"],
    contract: {
      event: "A merged trunk change and release authorization are present.",
      input: "The trunk commit, environment policy, deployment pipeline and rollout plan.",
      execution: "Build and deploy only from the trunk; use flags, smoke checks, canary and rollback where relevant.",
      output: "A deployment record, build provenance, feature-flag state and a rollback link.",
      validation: "The deployment succeeded, and release health and authorization are validated.",
      transition: "Healthy goes to Observe; failure is rolled back or remediated.",
    },
  },
  {
    n: 11,
    name: "Observe the system and product",
    shortName: "Observe",
    group: 5,
    summary: "Telemetry and product analytics",
    output: "Health and usage evidence",
    activities: ["Monitoring: reliability and latency", "Product analytics: adoption and friction", "Compare baseline with outcome"],
    contract: {
      event: "The release is live, with a defined observation window.",
      input: "Deployment markers, the service-level baseline, monitoring telemetry and product-analytics goals.",
      execution: "Check availability, latency, errors, adoption, task completion and journey friction.",
      output: "A health report and product outcome observations linked to the change.",
      validation: "Telemetry coverage is adequate; agreed targets are compared with the baseline.",
      transition: "Outcome assessed goes to Learn; unhealthy goes to incident and remediation.",
    },
  },
  {
    n: 12,
    name: "Close and learn",
    shortName: "Learn",
    group: 5,
    summary: "Work item and knowledge updates",
    output: "Outcome and new context",
    activities: ["Confirm acceptance in production", "Close the work item and record findings", "Feed the backlog, skills and docs"],
    contract: {
      event: "The observation window and acceptance evidence are available.",
      input: "Specification acceptance, the deployed commit, monitoring results, product usage and open issues.",
      execution: "Confirm value, close the work item, update the knowledge graph, decisions and skills, and open follow-on work.",
      output: "An outcome decision, work-item changes, documented lessons and backlog candidates.",
      validation: "Product and engineering owners accept the closure or record an explicit exception.",
      transition: "Done is closed; gaps or opportunities become new intake.",
    },
  },
];

const stageGroups = [
  { group: 1, stages: "01–02", name: "Intake and specify", record: "Work item, requirement and specification" },
  { group: 2, stages: "03–05", name: "Discover, plan and analyze", record: "Decisions, plan and tasks" },
  { group: 3, stages: "06–07", name: "Implement, run and test", record: "Source control, CI and test runs" },
  { group: 4, stages: "08–10", name: "Review, merge and release", record: "Source control and delivery records" },
  { group: 5, stages: "11–12", name: "Observe and learn", record: "Telemetry and follow-on work" },
] as const;

const prove: ProveStep[] = [
  {
    key: "predict",
    name: "Predict",
    what:
      "Before acting, state a falsifiable prediction, with competing ones when the situation is ambiguous, and say in advance what would count as success and what would disprove it.",
    contractField: "execution",
    failureMode: "Premature commitment: acting on the first explanation the model produces.",
  },
  {
    key: "run",
    name: "Run",
    what: "Take the bounded action that best tells the competing predictions apart, within the tools the contract allows.",
    contractField: "execution",
    failureMode: "Looping: repeating an action that cannot tell the agent anything new.",
  },
  {
    key: "observe",
    name: "Observe",
    what: "Record the raw result (status, data, errors, timing) as an artifact, kept separate from interpretation.",
    contractField: "output",
    failureMode: "Confabulation: a summary of what happened that does not match what happened.",
  },
  {
    key: "validate",
    name: "Validate",
    what: "Compare the observation with the prediction: supported, falsified or inconclusive. The verdict rests on evidence, never on the agent's own claim.",
    contractField: "validation",
    failureMode: "Error propagation: feeding a bad result into the next step unchecked.",
  },
  {
    key: "evolve",
    name: "Evolve",
    what: "Decide deliberately: build on a supported prediction, replace a falsified one, sharpen an inconclusive one, or stop and escalate.",
    contractField: "transition",
    failureMode: "Death spirals: fifty cycles on an approach that stopped working after three.",
  },
];

const approvals: ApprovalClass[] = [
  {
    id: "A",
    name: "Read and advise",
    examples: ["Read the requirement", "Inspect code", "Analyze traces", "Draft a proposed plan"],
    authorization: "Scoped read permission; sources and outputs are logged.",
  },
  {
    id: "B",
    name: "Bounded sandbox write",
    examples: ["Create a specification or task", "Edit a branch", "Run isolated tests", "Draft a pull request"],
    authorization: "Allowed within the approved task and its tool and branch limits.",
  },
  {
    id: "C",
    name: "Controlled shared change",
    examples: ["Merge into the trunk", "Modify shared build configuration", "Turn on a feature flag"],
    authorization: "Existing branch and release controls and designated approvals.",
  },
  {
    id: "D",
    name: "High impact",
    examples: ["Write production data", "Expand access", "Change security policy", "Run a destructive migration"],
    authorization: "A named human owner and separate authorization; no unilateral agent action.",
  },
];

const scorecard: ScorecardArea[] = [
  {
    name: "Delivery flow",
    measures: ["Lead time from ready requirement to production", "Task cycle time", "Approval queue delay"],
    interpretation: "Did end-to-end flow improve, not just code generation?",
  },
  {
    name: "Stability",
    measures: ["Change failure rate", "Rollbacks", "Recovery time", "Escaped defects", "Service-level compliance"],
    interpretation: "Did faster delivery stay safe?",
  },
  {
    name: "Specification quality",
    measures: ["Requirements traced to tests", "Rate of invalidated artifacts", "Rework loops"],
    interpretation: "Is intent complete, and does the implementation match it?",
  },
  {
    name: "Agent effectiveness",
    measures: ["Accepted first-pass output", "Revisions per task", "Tool cost", "Interventions", "Blocked actions"],
    interpretation: "Is autonomy improving economics and quality?",
  },
  {
    name: "Product results",
    measures: ["Adoption", "Task success", "Usage by segment", "Path friction", "The stated outcome metric"],
    interpretation: "Did the released functionality matter to customers?",
  },
  {
    name: "Organizational enablement",
    measures: ["Source freshness", "Permission coverage", "CI flakiness", "Onboarding time"],
    interpretation: "Is the foundation sustainable?",
  },
];

const references: Reference[] = [
  { n: 1, title: "DORA, 2025 State of AI-assisted Software Development", url: "https://dora.dev/research/2025/dora-report/" },
  { n: 2, title: "DORA, AI Capabilities Model", url: "https://dora.dev/ai/capabilities-model/report/" },
  {
    n: 3,
    title: "Anthropic, Steering Claude Code: CLAUDE.md, skills, hooks and subagents (2026)",
    url: "https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more",
  },
  {
    n: 4,
    title: "GitHub, About protected branches",
    url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches",
  },
  { n: 5, title: "Playwright documentation", url: "https://playwright.dev/docs/intro" },
  {
    n: 6,
    title: "Postman, Running API collections and CI",
    url: "https://learning.postman.com/docs/tests-and-scripts/running-collections/running-collections-overview",
  },
  { n: 7, title: "DORA, software delivery performance metrics", url: "https://dora.dev/guides/dora-metrics/" },
  {
    n: 8,
    title: "Pendo, Power your goal with Pendo",
    url: "https://support.pendo.io/hc/en-us/articles/360031871192-Power-your-goal-with-Pendo",
  },
  {
    n: 9,
    title: "GitHub Spec Kit, Agentic SDD: constitution, specify, plan, tasks, analyze, implement",
    url: "https://github.com/github/spec-kit/blob/main/docs/reference/agentic-sdd.md",
  },
];

/** Sources for the PROVE page, carried over from the original PROVE article. */
const proveReferences: Reference[] = [
  { n: 1, title: 'Yao, S., et al. (2022). "ReAct: Synergizing Reasoning and Acting in Language Models." ICLR 2023.', url: "https://arxiv.org/abs/2210.03629" },
  { n: 2, title: 'Shinn, N., et al. (2023). "Reflexion: Language Agents with Verbal Reinforcement Learning." NeurIPS 2023.', url: "https://arxiv.org/abs/2303.11366" },
  { n: 3, title: 'Yao, S., et al. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." NeurIPS 2023.', url: "https://arxiv.org/abs/2305.10601" },
  { n: 4, title: 'Zhou, A., et al. (2024). "Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models." ICML 2024.', url: "https://arxiv.org/abs/2310.04406" },
  { n: 5, title: 'Prasad, A., et al. (2024). "ADaPT: As-Needed Decomposition and Planning with Language Models." NAACL 2024 Findings.', url: "https://arxiv.org/abs/2311.05772" },
  { n: 6, title: 'Wang, L., et al. (2024). "Plan-and-Execute Agents." LangChain Blog.', url: "https://blog.langchain.com/planning-agents/" },
  { n: 7, title: 'Jha, S., et al. (2025). "Agent Evaluations on ITBench Diagnostic Tasks."', url: "https://arxiv.org/abs/2601.17915" },
  { n: 8, title: 'Huang, Q., et al. (2025). "POPPER: LLM Agents for Hypothesis-Driven Falsification Experiments." Stanford/Harvard.', url: "https://arxiv.org/abs/2502.09858" },
  { n: 9, title: 'Gottweis, J., et al. (2025). "AI Co-Scientist." Google DeepMind.', url: "https://arxiv.org/abs/2502.18864" },
  { n: 10, title: 'He, Z., et al. (2024). "IDEA: An Abduction-Deduction-Induction Agent Framework."', url: "https://arxiv.org/abs/2408.00300" },
  { n: 11, title: 'Wan, Y., et al. (2025). "Unveiling Confirmation Bias in Chain-of-Thought Reasoning." ACL 2025 Findings.', url: "https://aclanthology.org/2025.findings-acl.195" },
  { n: 12, title: 'Liu, R., Neubig, G., & Andreas, J. (2024). "An Incomplete Loop: Instruction Inference, Instruction Following, and In-context Learning." CMU & MIT.', url: "https://arxiv.org/abs/2404.03028" },
  { n: 13, title: 'Qiu, L., et al. (2024). "Phenomenal Yet Puzzling: Testing Inductive Reasoning Capabilities of Language Models."', url: "https://arxiv.org/abs/2310.08559" },
  { n: 14, title: 'Giannone, D., et al. (2025). "Agentic Design Patterns: A System-Theoretic Framework."', url: "https://arxiv.org/abs/2601.19752" },
  { n: 15, title: 'Google Cloud. (2025). "Choose a Design Pattern for Your Agentic AI System."', url: "https://cloud.google.com/architecture/choose-design-pattern-agentic-ai-system" },
  { n: 16, title: 'Klu.ai. (2024). "ReACT Agent Model."', url: "https://klu.ai/glossary/react-agent-model" },
  { n: 17, title: 'Token Security. (2026). "Transparency and Explainability in Agentic AI Decision-Making."', url: "https://www.token.security/blog/transparency-and-explainability-in-agentic-ai-decision-making" },
  { n: 18, title: 'Paracha, A. (2026). "The Two Agentic Loops: How to Design and Scale Agentic Apps." Plano AI Blog.', url: "https://planoai.dev/blog/the-two-agentic-loops-how-to-design-and-scale-agentic-apps" },
  { n: 19, title: 'Oracle. (2025). "What Is the AI Agent Loop?"', url: "https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems" },
  { n: 20, title: 'NVIDIA. (2025). "Optimizing Data Center Performance with AI Agents and the OODA Loop Strategy."', url: "https://developer.nvidia.com/blog/optimizing-data-center-performance-with-ai-agents-and-the-ooda-loop-strategy/" },
  { n: 21, title: 'Sogeti. (2025). "Harnessing the OODA Loop for Agentic AI."', url: "https://www.sogeti.com/featured-articles/harnessing-the-ooda-loop-for-agentic-ai/" },
  { n: 22, title: 'Huang, J., et al. (2024). "Large Language Models Cannot Self-Correct Reasoning Yet." ICLR 2024.', url: "https://arxiv.org/abs/2310.01798" },
  { n: 23, title: 'Yang, J., et al. (2024). "ReliabilityBench: Assessing LLM Agent Reliability Under Production Perturbations."', url: "https://arxiv.org/abs/2407.17966" },
  { n: 24, title: 'Xie, J., et al. (2025). "HiPER: Hierarchical Reinforcement Learning with Explicit Credit Assignment."', url: "https://arxiv.org/abs/2602.16165" },
  { n: 25, title: 'Nottingham, K., et al. (2025). "HERAKLES: Hierarchical Skill Compilation for Open-ended LLM Agents."', url: "https://arxiv.org/abs/2508.14751" },
  { n: 26, title: 'Arulkumaran, K., et al. (2025). "From AI for Science to Agentic Science."', url: "https://arxiv.org/abs/2508.14111" },
];

/** Figure A3: the five phases of capability progression and their exit criteria. */
const capabilityPhases = [
  {
    n: 1,
    name: "Govern",
    goal: "Establish the rules",
    required: ["Engineering constitution", "Approval and autonomy policy", "Security and trunk protections"],
    exit: ["Clear ownership and boundaries", "Enforceable quality gates"],
  },
  {
    n: 2,
    name: "Ground",
    goal: "Give agents correct context",
    required: ["Repository and agent instructions", "Knowledge graph, code index and architecture", "MCP access, skills and plugins"],
    exit: ["Relevant context is retrieved", "Actions are scoped and audited"],
  },
  {
    n: 3,
    name: "Specify",
    goal: "Control engineering intent",
    required: ["Requirement to specification and acceptance", "Discovery, plan and task set", "Analyze and approve before building"],
    exit: ["Traceability to requirements", "No ambiguous execution"],
  },
  {
    n: 4,
    name: "Deliver",
    goal: "Prove implementation quality",
    required: ["Implement in a short-lived branch", "API, browser and CI checks", "Review, then trunk, then release"],
    exit: ["Reproducible test evidence", "Reviewed, deployable changes"],
  },
  {
    n: 5,
    name: "Learn",
    goal: "Validate production outcomes",
    required: ["Service health and reliability", "Product usage and behavior", "Backlog and knowledge updates"],
    exit: ["Value measured, not assumed", "A continuous improvement loop"],
  },
];

export const method = {
  title: "AI-Enabled Software Delivery",
  subtitle: "Organizational foundation, stage contracts, delivery process and controls",
  version: "9.3",
  date: "October 31, 2026",
  author: "Brandon Zweifel, Zweifel Tech LLC" as const,
  maturity,
  responsibility,
  foundation,
  contract,
  states: {
    main: ["CREATED", "READY", "RUNNING", "VALIDATING", "REVIEW_REQUIRED", "APPROVED", "COMPLETED"],
    exceptions: ["FAILED", "BLOCKED", "NEEDS_REVISION", "RETRY_PENDING", "CANCELED", "REMEDIATION_REQUIRED"],
  },
  lifecycle,
  stageGroups,
  prove,
  approvals,
  scorecard,
  references,
  proveReferences,
  capabilityPhases,
};
