import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CaseFacts, RelatedWork } from "@/components/CaseStudy";

const before = [
  "Engineers write every line of code, every test and every doc from scratch",
  "Tests and documentation are separate manual efforts that trail the code",
  "Throughput is capped by typing time and context switching",
  "Senior engineers spend review time on scaffolding instead of design and risk",
];

const after = [
  "Agents open draft pull requests with code, tests and docs together",
  "Engineers review, refine or reject, and own everything that merges",
  "Documentation ships with every change because it's drafted with it",
  "Senior attention goes to correctness, design and risk",
];

const firstAgents = [
  ["Source discovery", "Catalogs new data sources and drafts integration-readiness notes"],
  ["Source onboarding", "Drafts onboarding specs, designed to work for any new source or acquired system"],
  ["Transformation modeling", "Drafts data models from source schemas, with tests"],
  ["Metric authoring", "Drafts metric definitions and docs to the team's standards"],
  ["Semantic publishing", "Keeps certified definitions consistent from the metric layer to every consumer"],
  ["Quality investigation", "Investigates anomalies and drafts the tests that would have caught them"],
  ["Dashboard generation", "Drafts dashboard specs from stakeholder requirements"],
];

const stages = [
  {
    stage: "Plan",
    agent: "User stories, acceptance criteria and edge cases, drafted from tickets, notes and earlier work",
    person: "Product and tech leads accept, cut or rewrite",
    guardrail: "Every criterion has to be testable",
  },
  {
    stage: "Design",
    agent: "Design options and an ADR draft with trade-offs, citing earlier decisions",
    person: "The tech lead or architect chooses",
    guardrail: "Decisions get recorded, not just made",
  },
  {
    stage: "Build",
    agent: "Code on a branch, opened as a pull request that explains its reasoning",
    person: "An engineer reviews, refines and merges",
    guardrail: "No auto-merge; the same CI as human code",
  },
  {
    stage: "Test",
    agent: "Unit and integration tests from the acceptance criteria, plus a first pass at failure analysis",
    person: "An engineer checks coverage and intent",
    guardrail: "A test has to fail before the fix counts",
  },
  {
    stage: "Review",
    agent: "A pre-review for standards, security and missed cases",
    person: "A human reviewer owns the approval",
    guardrail: "Agent comments are advisory",
  },
  {
    stage: "Release",
    agent: "Release notes, changelog, migration steps and runbook updates",
    person: "The release owner signs off",
    guardrail: "The rollback plan is written before release",
  },
  {
    stage: "Operate",
    agent: "Alert triage, log correlation, an incident timeline and a postmortem draft",
    person: "On-call decides and acts",
    guardrail: "Agents read production; people change it",
  },
];

const decisions = [
  {
    title: "Specialists, not one generalist",
    body: "Narrow agents with one job, a small toolset and their own review checklist are easier to evaluate, trust and fix than a single agent that does everything.",
  },
  {
    title: "Pick the loop for the job",
    body: "Model-driven tool loops suit open-ended work like investigation. Graph-based workflows suit structured, auditable steps. I choose per agent, after building both in my lab.",
    link: { to: "/ai-development-lab", label: "AI Development Lab" },
  },
  {
    title: "Tools over a standard protocol",
    body: "Exposing tools through the Model Context Protocol (MCP) makes them composable: add a tool once and any agent can use it, and swap a model without rewriting adapters.",
  },
  {
    title: "The pull request is the interface",
    body: "Agents work on branches and open pull requests. Their output runs through the same CI/CD, tests and code owners as human work, so there's one quality system, not two.",
  },
  {
    title: "Human in the loop by design",
    body: "No auto-merge is a design choice, not a temporary limitation. Review is where quality is enforced, and it's how the team learns what the agents are good at.",
  },
  {
    title: "Route models by task",
    body: "Match the model to the task: small, fast models for classification and formatting, larger ones for reasoning-heavy drafting. It cuts cost without cutting quality.",
  },
  {
    title: "Close the loop",
    body: "Rejected or heavily edited output feeds back into prompts, tools and checklists, so the agents improve exactly where review shows they're weak.",
  },
];

const roles = [
  ["Engineers", "Move from writing every line to editing, owning and directing agent work. Review becomes a core, recognized engineering skill."],
  ["Tech leads and architects", "Design the agent workflows, review standards and decision records that agents work within."],
  ["Quality engineers", "Shift toward evaluation: test strategy, acceptance criteria and the checks that catch bad agent output."],
  ["Product managers", "Write sharper acceptance criteria, because agents and reviewers both work from them."],
  ["Engineering managers", "Plan around review capacity, protect hands-on time, and watch for review fatigue."],
];

const measure = [
  "Acceptance rate of agent pull requests",
  "Revision rate, and why changes get rejected",
  "Review time and review queue depth",
  "Cycle time from ticket to production",
  "Escaped defects and rework",
  "Review load and team sentiment",
];

const dontMeasure = ["Lines of code generated", "Number of agent runs", "Share of code written by AI"];

const AIAugmentedSDLC = () => {
  return (
    <>
      <PageHero
        eyebrow="Case study · Operating model"
        title="The AI-Augmented SDLC Organization"
        lead="Agents write the first draft at every stage of the software lifecycle. Engineers review, decide and own what ships. Here's how I build that organization, and what I learned running it in production."
      />
      <CaseFacts
        facts={[
          { label: "Model", value: "Agents draft, people decide" },
          { label: "First run in production", value: "Seven specialist agents" },
          { label: "Merge policy", value: "A person approves every change" },
          { label: "Scope", value: "Plan, design, build, test, review, release, operate" },
        ]}
      />

      {/* The shift */}
      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Why</p>
            <h2 className="mt-3">Move the bottleneck from building to reviewing.</h2>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-xl font-medium leading-relaxed text-foreground">
              The goal isn't to replace the team. It's to multiply what the team can deliver.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                In most engineering organizations the constraint is build capacity: the team ships as fast as it can write code,
                tests and documentation. An AI-augmented organization moves that constraint to{" "}
                <span className="font-medium text-foreground">review capacity</span>, and that's a better bottleneck. Reviewing a
                solid first draft takes a fraction of the time it takes to write one, and the quality bar doesn't move, because a
                person still approves every change.
              </p>
              <p>
                This isn't an automation story; it's a leverage story. Every engineer gets an agent that drafts the first version.
                The engineer's job shifts from writer to editor and owner, and editors work at a multiple of a writer's throughput
                while spending their attention on judgment instead of scaffolding.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="page-container mt-14">
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Before", title: "Manual producers", items: before, ruled: false },
              { label: "After", title: "Agent-augmented reviewers", items: after, ruled: true },
            ].map((col) => (
              <StaggerItem key={col.label} className="h-full">
                <div className={`${col.ruled ? "ruled-card" : "surface-card"} h-full p-7`}>
                  <p className="eyebrow">{col.label}</p>
                  <h3 className="mt-2">{col.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t pt-4 font-medium text-foreground">
                    Bottleneck: {col.ruled ? "review capacity" : "build capacity"}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Where it started */}
      <section className="page-section border-t">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">In production</p>
            <h2 className="mt-3">Seven specialist agents, one rule: a person merges.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              I first ran this model with a data and analytics engineering team. Seven domain-specialized agents drafted the
              team's everyday artifacts and opened pull requests for engineers to review. Each was piloted on low-risk work, held
              to full production review, and expanded only after it earned the team's trust.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              The pattern generalizes. Anything a team produces as a reviewable artifact, an agent can draft.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <ol className="divide-y border-y">
              {firstAgents.map(([name, text], i) => (
                <li key={name} className="flex gap-5 py-4">
                  <span className="font-mono text-sm text-accent-ink">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="font-semibold text-foreground">{name}</p>
                    <p className="mt-0.5 leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </section>

      {/* Across the lifecycle */}
      <section className="page-section border-t bg-muted">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Across the lifecycle"
              title="Agents draft, people decide, at every stage"
              description="The same split works from planning to production. What changes from stage to stage is who decides and which guardrail keeps the draft honest."
            />
          </ScrollReveal>
          <div className="hidden gap-8 border-b pb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground lg:grid lg:grid-cols-[8rem_1.3fr_1fr_1fr]">
            <span>Stage</span>
            <span>Agent drafts</span>
            <span>Person decides</span>
            <span>Guardrail</span>
          </div>
          <ol>
            {stages.map((s) => (
              <li key={s.stage}>
                <ScrollReveal>
                  <div className="grid gap-3 border-b py-6 lg:grid-cols-[8rem_1.3fr_1fr_1fr] lg:gap-8">
                    <h3 className="text-xl">{s.stage}</h3>
                    {[
                      ["Agent drafts", s.agent],
                      ["Person decides", s.person],
                      ["Guardrail", s.guardrail],
                    ].map(([label, text]) => (
                      <div key={label}>
                        <p className="eyebrow mb-1 lg:hidden">{label}</p>
                        <p className={label === "Guardrail" ? "font-medium text-foreground" : "leading-relaxed text-muted-foreground"}>
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Design decisions */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Architecture" title="Decisions that make it safe at scale" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {decisions.map((d, i) => (
              // Seven cards: the last one spans the row instead of sitting alone
              <StaggerItem key={d.title} className={i === decisions.length - 1 ? "h-full md:col-span-2 lg:col-span-3" : "h-full"}>
                <div className="surface-card flex h-full flex-col p-7">
                  <p className="font-mono text-sm text-accent-ink">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2">{d.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{d.body}</p>
                  {d.link && (
                    <Link to={d.link.to} className="arrow-link mt-4">
                      {d.link.label} <ArrowRight />
                    </Link>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* People */}
      <section className="page-section border-t bg-muted">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">People</p>
            <h2 className="mt-3">Every role changes. None of them goes away.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              An AI-augmented SDLC is an organization design problem as much as a technical one. The work moves toward judgment,
              and every role needs to know what that means for them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <dl className="divide-y border-y">
              {roles.map(([role, text]) => (
                <div key={role} className="grid gap-1 py-5 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="font-semibold text-foreground">{role}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{text}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {/* Change management */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Change management"
              title="Trust is built one domain at a time"
              description="The team's first reaction to agents was anxiety, not excitement. The fix wasn't reassurance. It was demonstration."
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Building trust",
                items: [
                  "Start with low-stakes work, where a mistake has a small blast radius",
                  "Hold every agent to full production review before widening its scope",
                  "Expand to higher-stakes work only after consistent quality",
                  "Share acceptance and revision rates openly with the team",
                ],
              },
              {
                title: "Keeping people strong",
                items: [
                  "Treat review as high-value engineering, not a demotion",
                  "Protect hands-on engineering time so skills don't fade",
                  "Give everyone a path to practitioner depth, like a shared resource guide and guided notebooks",
                  "Show that directing agents is the future of senior individual contribution",
                ],
              },
            ].map((col) => (
              <StaggerItem key={col.title} className="h-full">
                <div className="ruled-card h-full p-7">
                  <h3>{col.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {col.items.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Measures */}
      <section className="page-section border-t bg-muted">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Measures</p>
            <h2 className="mt-3">What to measure, and what not to.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Track whether agent work gets accepted, how fast it moves, and whether it holds up, and share those numbers with the
              team. Volume metrics reward the wrong behavior.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="surface-card p-7">
                <p className="eyebrow">Measure</p>
                <ul className="mt-4 space-y-2.5 leading-relaxed text-foreground">
                  {measure.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div className="surface-card p-7">
                <p className="eyebrow">Don't</p>
                <ul className="mt-4 space-y-2.5 leading-relaxed text-muted-foreground line-through decoration-muted-foreground/50">
                  {dontMeasure.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RelatedWork routes={["/team-scaling-leadership", "/delta-framework-implementation", "/prove-pattern"]} />
    </>
  );
};

export default AIAugmentedSDLC;
