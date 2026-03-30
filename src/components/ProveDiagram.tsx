import { useState } from "react";

const STEPS = [
  {
    letter: "P",
    name: "Predict",
    short: "Form a falsifiable hypothesis",
    detail:
      "Before any action, state what you believe and what would disprove it. Generate competing predictions when ambiguous.",
    color: "#946B00",
    missing:
      "ReAct collapses this into an unstructured 'Thought' — no falsifiable claim, no competing hypotheses.",
  },
  {
    letter: "R",
    name: "Run",
    short: "Execute a targeted experiment",
    detail:
      "Choose the action that best differentiates between competing hypotheses. Maximize diagnostic value, not just coverage.",
    color: "#A93A24",
    missing:
      "ReAct acts on first instinct. No experimental design, no consideration of which action is most informative.",
  },
  {
    letter: "O",
    name: "Observe",
    short: "Collect results without interpretation",
    detail:
      "Record factual outcomes — status codes, data returned, timing. Keep observation separate from analysis to prevent confirmation bias.",
    color: "#1A7A56",
    missing:
      "ReAct has this step but immediately feeds it into the next unstructured reasoning step.",
  },
  {
    letter: "V",
    name: "Validate",
    short: "Compare results against predictions",
    detail:
      "Structured evaluation: Did the observation match, contradict, or neither? Track confidence. This is the step ReAct doesn't have at all.",
    color: "#1F5CA0",
    missing:
      "Completely absent from ReAct. No prediction-to-outcome comparison. No falsification mechanism.",
  },
  {
    letter: "E",
    name: "Evolve",
    short: "Update understanding and iterate",
    detail:
      "Hypothesis supported → build on it. Falsified → generate new hypothesis from all evidence. Inconclusive → sharpen the experiment.",
    color: "#6A4B8E",
    missing:
      "ReAct repeats without structured learning. 'Try again' instead of 'try smarter.'",
  },
];

const LAYERS = [
  {
    name: "Meta",
    desc: "Is my reasoning process itself productive?",
    example:
      '"If my approach is working, I should see progress within 3 cycles."',
  },
  {
    name: "Strategic",
    desc: "What overall approach should I take?",
    example:
      '"If streaming beats batch at our volume, latency drops 50%."',
  },
  {
    name: "Tactical",
    desc: "How do I decompose and sequence this?",
    example:
      '"If this PR regresses perf, profiling will show increased allocation."',
  },
  {
    name: "Operational",
    desc: "What should this specific action accomplish?",
    example:
      '"If the 401 is an expired JWT, decoding shows exp in the past."',
  },
];

const LAYER_COLORS = ["#6A4B8E", "#946B00", "#1A7A56", "#1F5CA0"];

const COMPARISON_ROWS = [
  {
    method: "Observe & Question",
    react: { text: "Collapsed into 'Thought'", present: false },
    prove: { text: "Explicit problem framing", present: true },
  },
  {
    method: "Hypothesize",
    react: { text: "No falsifiable predictions", present: false },
    prove: { text: "Predict — competing hypotheses", present: true },
  },
  {
    method: "Design Experiment",
    react: { text: "Ad hoc action selection", present: false },
    prove: { text: "Run — maximize diagnostic value", present: true },
  },
  {
    method: "Run Experiment",
    react: { text: "Act — tool invocation", present: true },
    prove: { text: "Run — targeted execution", present: true },
  },
  {
    method: "Collect Results",
    react: { text: "Observe — environment feedback", present: true },
    prove: { text: "Observe — separated from interpretation", present: true },
  },
  {
    method: "Analyze Against Predictions",
    react: { text: "Completely absent", present: false },
    prove: { text: "Validate — structured comparison", present: true },
  },
  {
    method: "Falsify or Confirm",
    react: { text: "No mechanism", present: false },
    prove: { text: "Validate — explicit falsification", present: true },
  },
  {
    method: "Revise Understanding",
    react: { text: "Implicit in next 'Thought'", present: false },
    prove: { text: "Evolve — deliberate refinement", present: true },
  },
];

const FRAMEWORKS = [
  { name: "Reflexion", found: "Validate + Evolve", desc: "Post-hoc self-critique" },
  { name: "Tree of Thoughts", found: "Predict", desc: "Competing reasoning paths" },
  { name: "LATS", found: "Predict + Validate", desc: "Exploration with evaluation" },
  { name: "Plan-and-Execute", found: "Predict (strategic)", desc: "Upfront approach hypothesis" },
];

type View = "cycle" | "layers" | "compare";

export default function ProveDiagram() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [view, setView] = useState<View>("cycle");

  return (
    <div className="rounded-2xl overflow-hidden bg-card text-foreground border border-border shadow-executive-lg">
      <div className="p-6 sm:p-10">
        {/* Header */}
        <div className="mb-8">
          <h2
            className="font-mono text-4xl sm:text-5xl font-normal tracking-[0.875rem] mb-2"
            style={{
              background: "linear-gradient(135deg, #946B00, #A93A24, #1A7A56, #1F5CA0, #6A4B8E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PROVE
          </h2>
          <p className="text-lg text-muted-foreground">
            Predict · Run · Observe · Validate · Evolve
          </p>
          <p className="text-sm italic mt-1 text-muted-foreground/70">
            The scientific method as an agentic AI reasoning loop
          </p>
        </div>

        {/* View Toggle */}
        <div className="inline-flex gap-1 rounded-lg p-1 mb-8 bg-muted">
          {([
            { id: "cycle" as View, label: "The Loop" },
            { id: "layers" as View, label: "Abstraction Layers" },
            { id: "compare" as View, label: "vs. ReAct" },
          ]).map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className={`text-[13px] tracking-wide px-4 sm:px-5 py-2.5 rounded-md border-none cursor-pointer transition-all duration-200 ${
                view === v.id
                  ? "bg-background text-foreground shadow-sm font-medium"
                  : "bg-transparent text-muted-foreground"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {/* Cycle View */}
        {view === "cycle" && (
          <div>
            {/* Circular Diagram */}
            <div className="relative w-full max-w-[520px] aspect-square mx-auto mb-10">
              <svg viewBox="0 0 520 520" className="w-full h-full">
                <circle cx="260" cy="260" r="220" fill="none" stroke="hsl(220, 13%, 88%)" strokeWidth="1" />
                <circle cx="260" cy="260" r="180" fill="none" stroke="hsl(220, 13%, 88%)" strokeWidth="1" />

                {STEPS.map((step, i) => {
                  const angle1 = (i * 72 - 90) * (Math.PI / 180);
                  const angle2 = ((i + 1) * 72 - 90) * (Math.PI / 180);
                  const r = 200;
                  const x1 = 260 + r * Math.cos(angle1);
                  const y1 = 260 + r * Math.sin(angle1);
                  const x2 = 260 + r * Math.cos(angle2);
                  const y2 = 260 + r * Math.sin(angle2);
                  const arrowAngle = ((i * 72 + 54) - 90) * (Math.PI / 180);
                  const ax = 260 + r * Math.cos(arrowAngle);
                  const ay = 260 + r * Math.sin(arrowAngle);

                  return (
                    <g key={`arc-${i}`}>
                      <path
                        d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`}
                        fill="none"
                        stroke={step.color}
                        strokeWidth="1.5"
                        strokeDasharray="4,6"
                        opacity={activeStep === null || activeStep === i ? 0.7 : 0.2}
                        style={{ transition: "opacity 0.3s ease" }}
                      />
                      <circle
                        cx={ax}
                        cy={ay}
                        r="3"
                        fill={step.color}
                        opacity={activeStep === null || activeStep === i ? 0.9 : 0.2}
                        style={{ transition: "opacity 0.3s ease" }}
                      />
                    </g>
                  );
                })}

                {STEPS.map((step, i) => {
                  const angle = (i * 72 - 90) * (Math.PI / 180);
                  const r = 200;
                  const x = 260 + r * Math.cos(angle);
                  const y = 260 + r * Math.sin(angle);
                  const isActive = activeStep === i;

                  return (
                    <g
                      key={step.letter}
                      className="cursor-pointer"
                      onClick={() => setActiveStep(isActive ? null : i)}
                    >
                      {isActive && (
                        <circle cx={x} cy={y} r="48" fill={step.color} opacity="0.06" />
                      )}
                      <circle
                        cx={x}
                        cy={y}
                        r="36"
                        fill={isActive ? step.color + "12" : "white"}
                        stroke={step.color}
                        strokeWidth={isActive ? 2.5 : 1.5}
                        opacity={activeStep === null || isActive ? 1 : 0.35}
                        style={{ transition: "all 0.3s ease" }}
                      />
                      <text
                        x={x}
                        y={y - 4}
                        textAnchor="middle"
                        fill={step.color}
                        fontSize="22"
                        fontFamily="'JetBrains Mono', 'Courier New', monospace"
                        fontWeight="bold"
                        opacity={activeStep === null || isActive ? 1 : 0.35}
                        style={{ transition: "opacity 0.3s ease" }}
                      >
                        {step.letter}
                      </text>
                      <text
                        x={x}
                        y={y + 14}
                        textAnchor="middle"
                        fill={activeStep === null || isActive ? "hsl(220, 13%, 40%)" : "hsl(220, 13%, 72%)"}
                        fontSize="9"
                        fontFamily="'Inter', sans-serif"
                        fontWeight="500"
                        letterSpacing="1"
                        style={{ transition: "fill 0.3s ease" }}
                      >
                        {step.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                <text x="260" y="252" textAnchor="middle" fill="hsl(220, 13%, 60%)" fontSize="10" fontFamily="'JetBrains Mono', 'Courier New', monospace" letterSpacing="2">
                  SCIENTIFIC
                </text>
                <text x="260" y="268" textAnchor="middle" fill="hsl(220, 13%, 60%)" fontSize="10" fontFamily="'JetBrains Mono', 'Courier New', monospace" letterSpacing="2">
                  METHOD
                </text>
              </svg>
            </div>

            {/* Step Detail Cards */}
            <div className="flex flex-col gap-0.5">
              {STEPS.map((step, i) => {
                const isActive = activeStep === i;
                return (
                  <div
                    key={step.letter}
                    onClick={() => setActiveStep(isActive ? null : i)}
                    className="cursor-pointer transition-all duration-300 px-5 py-4"
                    style={{
                      background: isActive ? "hsl(var(--muted))" : "transparent",
                      borderLeft: `3px solid ${isActive ? step.color : "hsl(var(--border))"}`,
                    }}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className="font-mono text-[28px] font-bold w-7 transition-opacity duration-300"
                        style={{ color: step.color, opacity: isActive ? 1 : 0.6 }}
                      >
                        {step.letter}
                      </span>
                      <div>
                        <span
                          className={`text-base transition-colors duration-300 ${isActive ? "text-foreground font-medium" : "text-muted-foreground"}`}
                        >
                          {step.name}
                        </span>
                        <span className="text-sm ml-3 text-muted-foreground">
                          — {step.short}
                        </span>
                      </div>
                    </div>
                    {isActive && (
                      <p className="mt-3.5 ml-[42px] text-sm leading-7 text-muted-foreground">
                        {step.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Recurse note */}
            <div className="mt-10 p-5 rounded-lg bg-muted border-l-[3px] border-border">
              <p className="text-sm leading-7 italic m-0 text-muted-foreground">
                The loop recurses. Evolved understanding generates new predictions,
                driving new experiments, new observations, new validation. It terminates
                when confidence is sufficient through multiple validated predictions or
                when all hypotheses are exhausted and the agent escalates honestly.
              </p>
            </div>
          </div>
        )}

        {/* Layers View */}
        {view === "layers" && (
          <div>
            <p className="text-base leading-7 mb-9 max-w-[620px] text-muted-foreground">
              The same five steps apply at every altitude. The only things that change
              are the scope of the hypothesis, the timescale, and the tools available.
            </p>

            <div className="relative">
              <div
                className="absolute left-[14px] top-5 bottom-5 w-px"
                style={{
                  background: "linear-gradient(to bottom, #6A4B8E, #946B00, #1A7A56, #1F5CA0)",
                  opacity: 0.4,
                }}
              />

              {LAYERS.map((layer, i) => (
                <div
                  key={layer.name}
                  className="relative flex gap-6 pl-10"
                  style={{ padding: "24px 0 24px 40px", marginBottom: i < LAYERS.length - 1 ? 8 : 0 }}
                >
                  <div
                    className="absolute left-2 top-[30px] w-[13px] h-[13px] rounded-full"
                    style={{ border: `2px solid ${LAYER_COLORS[i]}`, background: "hsl(var(--card))" }}
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="font-mono text-[13px] tracking-widest font-medium" style={{ color: LAYER_COLORS[i] }}>
                        {layer.name.toUpperCase()}
                      </span>
                      <span className="text-sm text-muted-foreground">{layer.desc}</span>
                    </div>
                    <div className="rounded-md p-3.5 bg-muted">
                      <p className="font-mono text-[13px] leading-relaxed m-0 text-muted-foreground">
                        {layer.example}
                      </p>
                    </div>
                    <div className="flex gap-1.5 mt-2.5 items-center">
                      {STEPS.map((s) => (
                        <span
                          key={s.letter}
                          className="w-[22px] h-[22px] rounded-full flex items-center justify-center font-mono text-[10px]"
                          style={{ border: `1px solid ${s.color}50`, color: s.color }}
                        >
                          {s.letter}
                        </span>
                      ))}
                      <span className="text-[11px] italic ml-1.5 text-muted-foreground/70">
                        same loop, different altitude
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 rounded-lg bg-muted border-l-[3px] border-border">
              <p className="text-sm leading-7 italic m-0 text-muted-foreground">
                The pattern is fractal. Each agent in a multi-agent PROVE implementation
                can run its own PROVE loop internally. The Experimenter runs PROVE to
                select the best action. The Reviewer runs PROVE to validate its own
                critique. Recursion all the way down.
              </p>
            </div>
          </div>
        )}

        {/* Compare View */}
        {view === "compare" && (
          <div>
            <p className="text-base leading-7 mb-9 max-w-[620px] text-muted-foreground">
              ReAct wasn't wrong, it was a necessarily simplified version of the
              scientific method. Every post-ReAct framework independently rediscovered a
              piece that was missing.
            </p>

            {/* Comparison table */}
            <div className="rounded-lg overflow-hidden bg-muted">
              {/* Header */}
              <div className="hidden sm:grid border-b border-border" style={{ gridTemplateColumns: "180px 1fr 1fr" }}>
                <div className="p-4 font-mono text-[11px] tracking-widest text-muted-foreground">
                  SCIENTIFIC METHOD
                </div>
                <div className="p-4 font-mono text-[11px] tracking-widest text-muted-foreground border-l border-border">
                  REACT
                </div>
                <div
                  className="p-4 font-mono text-[11px] tracking-widest font-medium border-l border-border"
                  style={{
                    background: "linear-gradient(135deg, #946B00, #A93A24, #1A7A56, #1F5CA0, #6A4B8E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  PROVE
                </div>
              </div>

              {/* Rows - Desktop */}
              <div className="hidden sm:block">
                {COMPARISON_ROWS.map((row, i) => (
                  <div
                    key={i}
                    className={i < COMPARISON_ROWS.length - 1 ? "border-b border-border" : ""}
                    style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr" }}
                  >
                    <div className="p-3.5 text-[13px] text-foreground">
                      {row.method}
                    </div>
                    <div
                      className="p-3.5 text-[13px] flex items-center gap-2 border-l border-border"
                      style={{ color: row.react.present ? "#1A7A56" : "hsl(var(--muted-foreground))" }}
                    >
                      <span className="text-[11px] opacity-70">{row.react.present ? "\u25CF" : "\u25CB"}</span>
                      {row.react.text}
                    </div>
                    <div
                      className="p-3.5 text-[13px] flex items-center gap-2 border-l border-border"
                      style={{ color: "#1A7A56" }}
                    >
                      <span className="text-[11px] opacity-70">{"\u25CF"}</span>
                      {row.prove.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Rows - Mobile */}
              <div className="sm:hidden divide-y divide-border">
                {COMPARISON_ROWS.map((row, i) => (
                  <div key={i} className="p-4 space-y-2">
                    <div className="text-[13px] font-medium text-foreground">{row.method}</div>
                    <div className="text-[12px] flex items-center gap-2" style={{ color: row.react.present ? "#1A7A56" : "hsl(var(--muted-foreground))" }}>
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground">REACT</span>
                      {row.react.text}
                    </div>
                    <div className="text-[12px] flex items-center gap-2" style={{ color: "#1A7A56" }}>
                      <span className="font-mono text-[10px] tracking-widest" style={{ color: "#946B00" }}>PROVE</span>
                      {row.prove.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework rediscoveries */}
            <div className="mt-10">
              <p className="font-mono text-[11px] tracking-widest mb-4 text-muted-foreground">
                WHAT EACH FRAMEWORK REDISCOVERED
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {FRAMEWORKS.map((fw) => (
                  <div key={fw.name} className="rounded-md p-3.5 bg-muted">
                    <div className="text-sm mb-1 font-medium text-foreground">{fw.name}</div>
                    <div className="font-mono text-xs mb-1" style={{ color: "#946B00" }}>
                      → {fw.found}
                    </div>
                    <div className="text-xs text-muted-foreground">{fw.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="mt-10 p-5 rounded-lg bg-muted"
              style={{ borderLeft: "3px solid #946B00" }}
            >
              <p className="text-sm leading-7 italic m-0 text-muted-foreground">
                They all improve on ReAct precisely because they each add back
                something the scientific method already had. PROVE implements the
                complete loop, applied recursively across abstraction layers.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
