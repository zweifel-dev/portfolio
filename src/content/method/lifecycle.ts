import type { MethodPage } from "../../lib/method";

const page: MethodPage = {
  slug: "lifecycle",
  order: 5,
  navTitle: "The twelve-stage lifecycle",
  title: "The twelve-stage lifecycle",
  summary:
    "One product requirement becomes one traceable delivery chain: intake, specification, grounded discovery, plan and tasks, analysis, implementation, testing, independent review, merge, release, observation and learning.",
  sourceMap: ["4", "4.0", "4.1", "4.2", "4.3", "4.4", "Stages 01–12", "Figure 4", "Figure A2"],
  sections: [
    {
      heading: "What are the twelve stages?",
      id: "stages",
      body: [
        "The stages keep a clean chain from requirement intake to production learning. Planning produces both architecture decisions and a dependency-ordered task set, and analysis is an explicit gate before any code is written.",
      ],
      figure: "DeliveryChain",
      figureCaption:
        "Figure 4. The end-to-end lifecycle, read in a serpentine order. Failed validation loops back to implementation or upstream artifacts, and production learning creates new intake.",
    },
    {
      heading: "What evidence is needed at each gate?",
      id: "gates",
      list: [
        "Requirements gate: the approved specification defines expected behavior, nonfunctional constraints and objective acceptance tests.",
        "Planning gate: the design and dependency-ordered tasks reflect the retrieved architecture and pass an explicit consistency analysis.",
        "Quality gate: checks run against the correct commit, and browser and API test artifacts are attached to the pull request where they apply.",
        "Delivery gate: independent reviewers, protected trunk rules and release authorization apply before a change reaches shared environments.",
        "Outcome gate: monitoring and product-analytics observations decide whether customer value and technical health meet the accepted targets.",
      ],
    },
    {
      heading: "What is the contract for each stage?",
      id: "contracts",
      body: [
        "Each stage below uses the six-field stage contract. Requirement and design cover stages 1 to 3, preparation and delivery stages 4 to 6, validation and deployment stages 7 to 9, and release and learning stages 10 to 12.",
      ],
      figure: "StageContracts",
    },
  ],
};

export default page;
