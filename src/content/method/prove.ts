import type { MethodPage } from "../../lib/method";

const page: MethodPage = {
  slug: "prove",
  order: 4,
  navTitle: "How agents work a stage: PROVE",
  title: "How agents work a stage: the PROVE loop",
  summary:
    "The stage contract says what a stage must declare. PROVE (Predict, Run, Observe, Validate, Evolve) is how an agent reasons inside one stage so it checks its work instead of guessing.",
  sourceMap: ["PROVE pattern article", "PROVE sources [P1]–[P26]"],
  references: "prove",
  sections: [
    {
      heading: "Where does PROVE fit in the method?",
      id: "placement",
      body: [
        "The stage contract fixes the boundaries of a stage: what triggers it, what it may use, what it must produce, how it is validated and where it goes next. It does not say how an agent should think while it is inside those boundaries.",
        "PROVE covers that part. It is the scientific method run as an agent's reasoning loop, and each of its steps lines up with a field of the contract.",
      ],
      figure: "ProveLoop",
      figureCaption: "The PROVE loop inside one stage. Evolve either starts another cycle or ends the stage through the contract's transition.",
    },
    {
      heading: "Why do agents need it?",
      id: "why",
      body: [
        "Most agent loops today descend from ReAct: reason, act, observe, repeat. ReAct was simple and beat everything before it, but in production it fails in four recognizable ways. [1]",
        "Over three years the field added tree search, self-reflection layers and planning frameworks on top of it. [2][3][4][6] Each added back one piece of the scientific method, but none put the whole loop back together.",
      ],
      list: [
        "Looping. An agent with no falsifiable prediction cannot tell that its approach has been disproven, so it repeats it. Diagnostic-task evaluations have documented repetition rates around 12%, and strong models abandoning their own stated plans in over half of cases. [7]",
        "Premature commitment. The agent acts on its first line of reasoning, so whichever interpretation the model produces first wins, chosen by token probability rather than by evidence. [11]",
        "Error propagation. A bad tool result goes straight into the next step. Agents near 97% accuracy in controlled settings drop sharply under rate limits, schema drift and unexpected nulls. [23]",
        "Confabulation. The agent says it is checking one thing and does another, and nothing in the loop notices, because reasoning, action and reporting all happen in one undivided step. [17][22]",
      ],
    },
    {
      heading: "What happens at each step?",
      id: "steps",
      figure: "ProveMapping",
      figureCaption: "Each PROVE step, the contract field it serves, and the failure mode it prevents.",
    },
    {
      heading: "What makes a good prediction?",
      id: "predict",
      body: [
        "\"I should probably check the logs\" is a plan. \"If the service is failing from memory pressure, the container logs will show out-of-memory kills in the last 30 minutes\" is a prediction.",
        "The agent states what it believes before acting, sets success and failure criteria before it sees results, and says what would disprove it. When the situation is ambiguous it states competing predictions, and the Run step picks the action that best separates them. [8][10]",
      ],
    },
    {
      heading: "How does validation work?",
      id: "validate",
      body: ["Validation compares the observation with the prediction. There are three outcomes:"],
      list: [
        "Supported: the prediction survives and has one more piece of evidence, though it is still not proven.",
        "Falsified: the prediction is retired, which narrows the search.",
        "Inconclusive: the action was not diagnostic enough. Sharpen the prediction or pick a more targeted action.",
      ],
      after: [
        "This is the step that maps to the contract's validation field, and the reason for the system invariant: the verdict rests on test output, external state or an authorized review, never on the agent's own claim that it succeeded. Looping stops because falsified predictions are explicitly retired. Errors stop propagating because unexpected results trigger investigation. Confabulation becomes visible because there is an external criterion to check reasoning against. [22]",
      ],
    },
    {
      heading: "How does a stage end?",
      id: "evolve",
      body: [
        "At Evolve the agent decides what comes next. A supported prediction is built on with the next one. A falsified prediction is replaced by one that accounts for all the evidence so far; the agent keeps what it has learned. An inconclusive result leads to a more specific prediction.",
        "The loop stops when enough predictions have held up to meet the stage's validation criteria, which moves the stage forward through its transition. It also stops when the agent runs out of hypotheses or hits a stop condition, timeout or retry limit. Then it escalates to a person through the review queue instead of guessing.",
      ],
      callout: {
        label: "Self-governance",
        text: "PROVE applies to the agent's own progress too. \"This approach should show measurable progress within three cycles\" is itself a prediction. If it fails, the approach is falsified and the stage escalates, so the agent does not spend fifty cycles on an approach that is going nowhere. [14][18]",
      },
    },
    {
      heading: "Does PROVE work at every level of a system?",
      id: "layers",
      body: ["Yes. The scope of the prediction, the timescale and the tools change from level to level:"],
      table: {
        columns: ["Layer", "Example prediction"],
        rows: [
          [
            "Strategic (Plan stage)",
            "If daily data volume exceeds 10 million rows, a streaming architecture will cut end-to-end latency by at least half compared with batch.",
          ],
          [
            "Tactical (Review stage)",
            "If this pull request introduces a performance regression, profiling the payment hot path will show more memory allocation than the baseline.",
          ],
          [
            "Operational (Implement and Run stages)",
            "If the 401 error comes from an expired token, decoding it will show an expiry time in the past.",
          ],
        ],
      },
    },
    {
      heading: "What record does each cycle leave?",
      id: "audit",
      body: [
        "Every cycle records what the agent believed and why (Predict), which action it chose over the alternatives (Run), the raw result (Observe), whether the result matched (Validate) and how its understanding changed (Evolve).",
        "That record is the stage's decision and execution record. A log of tool calls shows what happened. This record also shows why, which reviewers, security teams and auditors ask for. Regulation asks for it too: the EU AI Act, the NIST AI Risk Management Framework and ISO 42001 all ask for explainable high-risk AI. [17]",
      ],
    },
    {
      heading: "Can each step be its own agent?",
      id: "multi-agent",
      body: [
        "PROVE works as a single-agent loop with structured prompting. It also maps onto a multi-agent design where a specialist owns each step, which helps on high-risk stages where independence matters. [9][15]",
      ],
      table: {
        columns: ["Role", "Responsibility"],
        rows: [
          ["Predictor", "Generates competing hypotheses and falsifiable predictions."],
          ["Experimenter", "Designs and runs the action that best tells the hypotheses apart."],
          ["Observer", "Collects and structures results without interpreting them."],
          ["Validator", "Compares observations with predictions against explicit criteria and gives a verdict."],
          ["Evolver", "Combines the verdict with the full evidence history and sets up the next cycle."],
          ["Reviewer", "Challenges the Validator's conclusion and looks for confounds, so the team does not settle too early."],
        ],
      },
    },
    {
      heading: "How do you start using it?",
      id: "start",
      body: ["Take an existing agent loop and add two requirements:"],
      ordered: true,
      list: [
        "Before every action, the agent states a falsifiable prediction: what it expects to happen and what would disprove its current reasoning.",
        "After every observation, the agent compares the result with the prediction and says whether it held.",
      ],
      after: [
        "Those two rules are enough to deal with looping and premature commitment. Then add the stop conditions and escalation from the stage contract.",
      ],
    },
  ],
};

export default page;
