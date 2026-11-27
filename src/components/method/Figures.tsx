// The Method section's figures, redrawn from the white paper as HTML in the site's navy and gold palette.
// They are real text (lists, tables, headings), so screen readers, search and narrow screens all work.
import { ArrowDown, ArrowRight, RotateCcw } from "lucide-react";
import { method } from "@/content/method/data";
import type { FigureName } from "@/lib/method";
import { cn } from "@/lib/utils";

const Arrow = ({ className }: { className?: string }) => (
  <ArrowRight aria-hidden="true" className={cn("h-4 w-4 shrink-0 text-accent-ink", className)} />
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent-ink">{children}</p>
);

const Note = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-5 rounded-md border border-accent/50 bg-accent/10 px-5 py-4 text-center text-sm font-medium text-foreground">
    {children}
  </div>
);

// Figure 1
export const MaturityLadder = () => (
  <div>
    <ol className="grid gap-3 md:grid-cols-5">
      {method.maturity.map((l, i) => (
        <li key={l.id} className="surface-card relative flex flex-col p-5">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 rounded-t-lg bg-navy" style={{ opacity: 0.45 + i * 0.13 }} />
          <p className="font-mono text-2xl font-semibold text-primary">{l.id}</p>
          <h4 className="mt-1 text-base font-semibold uppercase tracking-wide">{l.shortName}</h4>
          <p className="text-sm text-muted-foreground">{l.operatingMode}</p>
          <ul className="mt-4 flex-1 space-y-1.5 text-sm text-muted-foreground">
            {l.behaviors.map((b) => (
              <li key={b} className="flex gap-2">
                <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-accent" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-3">
            <Eyebrow>Exit evidence</Eyebrow>
            <p className="mt-1 text-sm font-semibold">{l.exitEvidenceShort}</p>
          </div>
        </li>
      ))}
    </ol>
    <Note>
      Deterministic verification and policy gates persist from L0 to L4. Autonomy is granted per action, risk and environment, never
      by maturity label alone.
    </Note>
  </div>
);

const cellTone = (v: string) =>
  v === "H"
    ? "bg-muted"
    : v.startsWith("D") && !v.includes("A")
      ? "bg-primary/[0.06]"
      : v.includes("A") && v.includes("D")
        ? "bg-accent/15"
        : v.startsWith("A")
          ? "bg-accent/30"
          : "bg-accent/10";

// Figure 1a
export const ResponsibilityMatrix = () => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[36rem] border-separate border-spacing-1 text-center text-sm">
      <caption className="sr-only">Who leads each kind of work at each maturity level</caption>
      <thead>
        <tr>
          <th scope="col" className="text-left font-medium text-muted-foreground">
            Work
          </th>
          {method.maturity.map((l) => (
            <th key={l.id} scope="col" className="rounded-md bg-navy px-2 py-2 font-medium text-navy-foreground">
              {l.id} · {l.shortName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {method.responsibility.map((row) => (
          <tr key={row.work}>
            <th scope="row" className="pr-3 text-left font-semibold">
              {row.work}
            </th>
            {row.cells.map((c, i) => (
              <td key={i} className={cn("rounded-md border px-2 py-3 font-mono font-semibold", cellTone(c))}>
                {c}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <p className="mt-3 text-sm text-muted-foreground">
      H = human-led · D = deterministic automation · A = agent-led · + = shared, the first letter leads. The matrix describes
      operating patterns, not measured automation percentages.
    </p>
  </div>
);

// Figure 2
export const FoundationGrid = () => (
  <div>
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {method.foundation.map((c) => (
        <li key={c.key} className="ruled-card p-5 pl-6">
          <h4 className="text-base font-semibold uppercase tracking-wide">{c.name}</h4>
          <p className="text-sm text-muted-foreground">{c.tagline}</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {c.examples.map((e) => (
              <li key={e} className="flex gap-2">
                <span aria-hidden="true" className="mt-[0.6em] h-px w-2.5 shrink-0 bg-accent" />
                {e}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <Note>Readiness gate: grounded context · authorized tools · deterministic controls · owners defined</Note>
  </div>
);

// Figure A1
export const FoundationSetup = () => (
  <div className="rounded-lg bg-navy p-5 text-navy-foreground sm:p-6">
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {method.foundation.map((c, i) => (
        <li key={c.key} className="rounded-md border border-white/10 bg-white/[0.04] p-4">
          <p className="text-sm font-semibold uppercase tracking-wide">
            <span className="mr-2 font-mono text-accent">0{i + 1}</span>
            {c.setupTitle}
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-navy-muted">
            {c.setupItems.map((s) => (
              <li key={s} className="flex gap-2">
                <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
    <ArrowDown aria-hidden="true" className="mx-auto my-3 h-5 w-5 text-accent" />
    <div className="rounded-md border border-accent/60 px-5 py-4 text-center">
      <p className="font-semibold uppercase tracking-wide">Agent execution readiness gate</p>
      <p className="mt-1 text-sm text-navy-muted">
        Policies known · context grounded · tools authorized · quality gates enforceable
      </p>
    </div>
  </div>
);

// Figure 2a
export const SystemGraph = () => (
  <div className="space-y-3">
    <div>
      <Eyebrow>Standing organizational capabilities</Eyebrow>
      <ul className="mt-2 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        {method.foundation.map((c) => (
          <li key={c.key} className="rounded-md border bg-card px-3 py-2.5 text-sm">
            <p className="font-semibold">{c.setupTitle}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{c.tagline}</p>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-muted-foreground">Inputs are versioned, permissioned and checked for readiness.</p>
    </div>
    <ArrowDown aria-hidden="true" className="mx-auto h-5 w-5 text-accent-ink" />
    <div className="mx-auto max-w-xl rounded-lg bg-navy px-5 py-4 text-center text-navy-foreground">
      <p className="font-semibold uppercase tracking-wide">Orchestration layer and workflow control</p>
      <p className="mt-1 text-sm text-navy-muted">Stage state · work contracts · review queue · decision records</p>
      <p className="mt-1 text-xs text-accent">Human and agent work use the same six-field contract</p>
    </div>
    <ArrowDown aria-hidden="true" className="mx-auto h-5 w-5 text-accent-ink" />
    <div>
      <Eyebrow>Stage groups and systems of record</Eyebrow>
      <ol className="mt-2 grid gap-2 md:grid-cols-5">
        {method.stageGroups.map((g) => (
          <li key={g.group} className="surface-card flex flex-col p-4 text-sm">
            <p className="font-mono text-lg font-semibold text-primary">{g.stages}</p>
            <p className="font-semibold">{g.name}</p>
            <ul className="mt-2 flex-1 space-y-1 text-xs text-muted-foreground">
              {method.lifecycle
                .filter((s) => s.group === g.group)
                .map((s) => (
                  <li key={s.n}>{s.summary}</li>
                ))}
            </ul>
            <p className="mt-3 border-t pt-2 text-xs font-medium text-primary">{g.record}</p>
          </li>
        ))}
      </ol>
    </div>
    <p className="text-center text-xs text-muted-foreground">
      Evidence chain: requirement · specification · architecture · tasks · commit · CI and test evidence · pull request · deployment ·
      outcome
    </p>
    <p className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-accent-ink">
      <RotateCcw aria-hidden="true" className="h-4 w-4" /> Production findings become new work and updated knowledge
    </p>
  </div>
);

// Figure 3
export const StageContract = () => (
  <div>
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {method.contract.map((f, i) => (
        <li key={f.key} className="surface-card p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm font-semibold text-navy-foreground">
              0{i + 1}
            </span>
            <h4 className="text-base font-semibold uppercase tracking-wide">{f.name}</h4>
          </div>
          <p className="mt-3 text-sm">{f.summary}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            <span className="font-semibold text-accent-ink">Example: </span>
            {f.example}
          </p>
        </li>
      ))}
    </ol>
    <Note>No transition without recorded criteria, current artifact revisions and a responsible actor.</Note>
  </div>
);

export const StageStates = () => (
  <div className="space-y-4">
    <ol className="flex flex-wrap items-center gap-2" aria-label="Main path">
      {method.states.main.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className="rounded-md bg-navy px-3 py-1.5 font-mono text-xs font-medium text-navy-foreground">{s}</span>
          {i < method.states.main.length - 1 && <Arrow />}
        </li>
      ))}
    </ol>
    <div>
      <Eyebrow>Exception states</Eyebrow>
      <ul className="mt-2 flex flex-wrap gap-2">
        {method.states.exceptions.map((s) => (
          <li key={s} className="rounded-md border border-accent/60 px-3 py-1.5 font-mono text-xs">
            {s}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// PROVE loop inside a stage
export const ProveLoop = () => (
  <div className="rounded-lg border bg-card p-5 sm:p-6">
    <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
      <div className="rounded-md border bg-muted px-4 py-3 text-sm lg:w-40">
        <Eyebrow>Contract</Eyebrow>
        <p className="mt-1 font-semibold">Event and input</p>
        <p className="text-xs text-muted-foreground">Trigger, pinned inputs, scope</p>
      </div>
      <Arrow className="mx-auto rotate-90 lg:rotate-0" />
      <div className="flex-1 rounded-lg bg-navy p-4 text-navy-foreground">
        <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.14em] text-accent">Inside execution: the PROVE loop</p>
        <ol className="grid gap-2 sm:grid-cols-5">
          {method.prove.map((p, i) => (
            <li key={p.key} className="relative rounded-md border border-white/15 bg-white/[0.05] px-3 py-3 text-center">
              <p className="font-mono text-xl font-semibold text-accent">{p.name[0]}</p>
              <p className="text-sm font-semibold">{p.name}</p>
              <span className="sr-only">{i < method.prove.length - 1 ? ", then" : ", then back to Predict or on to the transition"}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 flex items-center justify-center gap-2 text-xs text-navy-muted">
          <RotateCcw aria-hidden="true" className="h-3.5 w-3.5 text-accent" />
          Evolve starts the next cycle until validation criteria are met or a stop condition is hit
        </p>
      </div>
      <Arrow className="mx-auto rotate-90 lg:rotate-0" />
      <div className="rounded-md border bg-muted px-4 py-3 text-sm lg:w-40">
        <Eyebrow>Contract</Eyebrow>
        <p className="mt-1 font-semibold">Validation and transition</p>
        <p className="text-xs text-muted-foreground">Advance, revise, rerun or escalate</p>
      </div>
    </div>
  </div>
);

const fieldName = (k: string) => method.contract.find((f) => f.key === k)?.name ?? k;

export const ProveMapping = () => (
  <ol className="space-y-3">
    {method.prove.map((p) => (
      <li key={p.key} className="grid gap-3 rounded-lg border bg-card p-5 md:grid-cols-[10rem_minmax(0,1fr)_14rem] md:gap-6">
        <div>
          <h4 className="text-lg font-semibold">{p.name}</h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Contract field: <span className="font-semibold text-foreground">{fieldName(p.contractField)}</span>
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{p.what}</p>
        <p className="text-sm">
          <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent-ink">Prevents</span>
          {p.failureMode}
        </p>
      </li>
    ))}
  </ol>
);

// Figure 4 and A2
export const DeliveryChain = () => {
  const rows = [method.lifecycle.slice(0, 4), method.lifecycle.slice(4, 8), method.lifecycle.slice(8, 12)];
  return (
    <div>
      <ol className="space-y-3">
        {rows.map((row, r) => (
          <li key={r}>
            <ol className={cn("grid gap-3 sm:grid-cols-2 lg:grid-cols-4", r === 1 && "lg:[direction:rtl]")}>
              {row.map((s) => (
                <li key={s.n} className="surface-card p-4 lg:[direction:ltr]">
                  <p className="flex items-baseline gap-2">
                    <span className="font-mono text-xl font-semibold text-primary">{String(s.n).padStart(2, "0")}</span>
                    <span className="font-semibold uppercase tracking-wide">{s.shortName}</span>
                  </p>
                  <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                    {s.activities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                  <p className="mt-3 border-t pt-2 text-xs font-semibold text-accent-ink">Output: {s.output}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      <Note>
        Failed validation → repair and rerun · Changed intent → re-specify · Production insight → new intake
      </Note>
    </div>
  );
};

const contractRows = ["event", "input", "execution", "output", "validation", "transition"] as const;

export const StageContracts = () => (
  <div className="space-y-4">
    {method.lifecycle.map((s) => (
      <section key={s.n} id={`stage-${s.n}`} className="surface-card overflow-hidden" aria-labelledby={`stage-${s.n}-title`}>
        <h4 id={`stage-${s.n}-title`} className="flex items-baseline gap-3 bg-navy px-5 py-3 text-navy-foreground">
          <span className="font-mono text-accent">{String(s.n).padStart(2, "0")}</span>
          {s.name}
        </h4>
        <dl className="divide-y">
          {contractRows.map((k) => (
            <div key={k} className="grid gap-1 px-5 py-2.5 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
              <dt className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-accent-ink sm:pt-0.5">
                {fieldName(k)}
              </dt>
              <dd className="text-sm leading-relaxed">{s.contract[k]}</dd>
            </div>
          ))}
        </dl>
      </section>
    ))}
  </div>
);

export const ApprovalClasses = () => (
  <ol className="grid gap-3 md:grid-cols-2">
    {method.approvals.map((a, i) => (
      <li key={a.id} className="surface-card relative overflow-hidden p-5">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1 bg-accent" style={{ opacity: 0.3 + i * 0.23 }} />
        <p className="flex items-baseline gap-3">
          <span className="font-mono text-2xl font-semibold text-primary">{a.id}</span>
          <span className="font-semibold">{a.name}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{a.examples.join(" · ")}</p>
        <p className="mt-3 border-t pt-3 text-sm">
          <span className="font-semibold">Authorization: </span>
          {a.authorization}
        </p>
      </li>
    ))}
  </ol>
);

export const Scorecard = () => (
  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {method.scorecard.map((s) => (
      <li key={s.name} className="ruled-card flex flex-col p-5 pl-6">
        <h4 className="font-semibold">{s.name}</h4>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.measures.join(" · ")}</p>
        <p className="mt-3 border-t pt-3 text-sm italic">{s.interpretation}</p>
      </li>
    ))}
  </ul>
);

// Figure A3
export const CapabilityPhases = () => (
  <div className="rounded-lg bg-navy p-5 text-navy-foreground sm:p-6">
    <ol className="grid gap-3 md:grid-cols-5">
      {method.capabilityPhases.map((p) => (
        <li key={p.n} className="flex flex-col rounded-md border border-white/10 bg-white/[0.04] p-4">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">Phase 0{p.n}</p>
          <h4 className="mt-1 text-base font-semibold uppercase tracking-wide">{p.name}</h4>
          <p className="text-sm text-navy-muted">{p.goal}</p>
          <p className="mt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">Required</p>
          <ul className="mt-1 flex-1 space-y-1 text-sm text-navy-muted">
            {p.required.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="mt-3 border-t border-white/10 pt-3 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-accent">
            Exit evidence
          </p>
          <ul className="mt-1 space-y-1 text-sm">
            {p.exit.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
    <p className="mt-4 text-center text-sm text-navy-muted">
      End state: spec-driven, policy-governed, continuously verified. Reliable intent, grounded implementation, reviewed release and
      measured outcomes.
    </p>
  </div>
);

const chain = [
  "Epic or requirement revision",
  "Approved specification revision",
  "Architecture impact references",
  "Plan revision",
  "Task IDs",
  "Branch and commits",
  "Pull request and reviewer",
  "Test-suite run IDs",
  "Merged trunk commit",
  "Deployed build",
  "Release markers in monitoring",
  "Product outcome report",
  "Closure and follow-up",
];

export const TraceabilityChain = () => (
  <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-2 text-sm">
    {chain.map((c, i) => (
      <li key={c} className="flex items-center gap-1.5">
        <span className="rounded-md border bg-card px-2.5 py-1">{c}</span>
        {i < chain.length - 1 && <Arrow className="h-3.5 w-3.5" />}
      </li>
    ))}
  </ol>
);

export const figures: Record<FigureName, () => JSX.Element> = {
  MaturityLadder,
  ResponsibilityMatrix,
  FoundationGrid,
  FoundationSetup,
  SystemGraph,
  StageContract,
  StageStates,
  ProveLoop,
  ProveMapping,
  DeliveryChain,
  StageContracts,
  ApprovalClasses,
  Scorecard,
  CapabilityPhases,
  TraceabilityChain,
};
