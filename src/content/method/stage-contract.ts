import type { MethodPage } from "../../lib/method";
import { method } from "./data";

const page: MethodPage = {
  slug: "stage-contract",
  order: 3,
  navTitle: "The stage contract",
  title: "The stage contract",
  summary:
    "Every stage of delivery is a stateful unit of work with the same six parts. The contract lets the same process move from people to agents to orchestration without changing what it means.",
  sourceMap: ["3", "3.1", "System invariant", "3.2", "3.3", "Figure 3"],
  sections: [
    {
      heading: "What is a stage contract?",
      id: "contract",
      body: [
        "Each stage has a triggering event, revisioned inputs, bounded execution, an output a person can see, objective validation and a controlled transition to the next state.",
        "Because every stage declares the same six parts, a stage can be run by a person today and by an agent next quarter without its meaning changing.",
      ],
      figure: "StageContract",
      figureCaption:
        "Figure 3. The six-part execution contract. Each step is a stateful work unit with an evidence-based transition, not simply a prompt.",
    },
    {
      heading: "What must each field contain?",
      id: "schema",
      table: {
        columns: ["Field", "Mandatory properties"],
        rows: method.contract.map((f) => [f.name, f.properties]),
      },
      callout: {
        label: "System invariant",
        text: "No stage marks itself successful because it claimed success. A verifier must inspect actual test output, an external state or an authorized review decision. Revising an approved upstream artifact invalidates the downstream evidence that depended on it.",
      },
    },
    {
      heading: "What states can a stage be in?",
      id: "states",
      body: [
        "A stage moves through a small set of standard states. Each transition stores the artifact revisions and approvals that justified it.",
      ],
      figure: "StageStates",
      figureCaption: "Standard transition states. The main path runs left to right; exception states can be entered from any running stage.",
    },
    {
      heading: "What does a filled-in contract look like?",
      id: "example",
      body: ["Here is the contract for one implementation task:"],
      table: {
        columns: ["Field", "Implementation-stage example"],
        rows: method.contract.map((f) => [f.name, f.implementationExample]),
      },
      after: ["The output is a verifiable artifact or action, never only an agent's chat response."],
    },
  ],
};

export default page;
