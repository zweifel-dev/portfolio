import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import ProveDiagram from "@/components/ProveDiagram";
import PageHero from "@/components/PageHero";

const sources = [
  { num: 1, text: 'Yao, S., et al. (2022). "ReAct: Synergizing Reasoning and Acting in Language Models." ICLR 2023.', url: "https://arxiv.org/abs/2210.03629" },
  { num: 2, text: 'Shinn, N., et al. (2023). "Reflexion: Language Agents with Verbal Reinforcement Learning." NeurIPS 2023.', url: "https://arxiv.org/abs/2303.11366" },
  { num: 3, text: 'Yao, S., et al. (2023). "Tree of Thoughts: Deliberate Problem Solving with Large Language Models." NeurIPS 2023.', url: "https://arxiv.org/abs/2305.10601" },
  { num: 4, text: 'Zhou, A., et al. (2024). "Language Agent Tree Search Unifies Reasoning, Acting, and Planning in Language Models." ICML 2024.', url: "https://arxiv.org/abs/2310.04406" },
  { num: 5, text: 'Prasad, A., et al. (2024). "ADaPT: As-Needed Decomposition and Planning with Language Models." NAACL 2024 Findings.', url: "https://arxiv.org/abs/2311.05772" },
  { num: 6, text: 'Wang, L., et al. (2024). "Plan-and-Execute Agents." LangChain Blog.', url: "https://blog.langchain.com/planning-agents/" },
  { num: 7, text: 'Jha, S., et al. (2025). "Agent Evaluations on ITBench Diagnostic Tasks."', url: "https://arxiv.org/abs/2601.17915" },
  { num: 8, text: 'Huang, Q., et al. (2025). "POPPER: LLM Agents for Hypothesis-Driven Falsification Experiments." Stanford/Harvard.', url: "https://arxiv.org/abs/2502.09858" },
  { num: 9, text: 'Gottweis, J., et al. (2025). "AI Co-Scientist." Google DeepMind.', url: "https://arxiv.org/abs/2502.18864" },
  { num: 10, text: 'He, Z., et al. (2024). "IDEA: An Abduction-Deduction-Induction Agent Framework."', url: "https://arxiv.org/abs/2408.00300" },
  { num: 11, text: 'Wan, Y., et al. (2025). "Unveiling Confirmation Bias in Chain-of-Thought Reasoning." ACL 2025 Findings.', url: "https://aclanthology.org/2025.findings-acl.195" },
  { num: 12, text: 'Liu, R., Neubig, G., & Andreas, J. (2024). "An Incomplete Loop: Instruction Inference, Instruction Following, and In-context Learning." CMU & MIT.', url: "https://arxiv.org/abs/2404.03028" },
  { num: 13, text: 'Qiu, L., et al. (2024). "Phenomenal Yet Puzzling: Testing Inductive Reasoning Capabilities of Language Models."', url: "https://arxiv.org/abs/2310.08559" },
  { num: 14, text: 'Giannone, D., et al. (2025). "Agentic Design Patterns: A System-Theoretic Framework."', url: "https://arxiv.org/abs/2601.19752" },
  { num: 15, text: 'Google Cloud. (2025). "Choose a Design Pattern for Your Agentic AI System."', url: "https://cloud.google.com/architecture/choose-design-pattern-agentic-ai-system" },
  { num: 16, text: 'Klu.ai. (2024). "ReACT Agent Model."', url: "https://klu.ai/glossary/react-agent-model" },
  { num: 17, text: 'Token Security. (2026). "Transparency and Explainability in Agentic AI Decision-Making."', url: "https://www.token.security/blog/transparency-and-explainability-in-agentic-ai-decision-making" },
  { num: 18, text: 'Paracha, A. (2026). "The Two Agentic Loops: How to Design and Scale Agentic Apps." Plano AI Blog.', url: "https://planoai.dev/blog/the-two-agentic-loops-how-to-design-and-scale-agentic-apps" },
  { num: 19, text: 'Oracle. (2025). "What Is the AI Agent Loop?"', url: "https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems" },
  { num: 20, text: 'NVIDIA. (2025). "Optimizing Data Center Performance with AI Agents and the OODA Loop Strategy."', url: "https://developer.nvidia.com/blog/optimizing-data-center-performance-with-ai-agents-and-the-ooda-loop-strategy/" },
  { num: 21, text: 'Sogeti. (2025). "Harnessing the OODA Loop for Agentic AI."', url: "https://www.sogeti.com/featured-articles/harnessing-the-ooda-loop-for-agentic-ai/" },
  { num: 22, text: 'Huang, J., et al. (2024). "Large Language Models Cannot Self-Correct Reasoning Yet." ICLR 2024.', url: "https://arxiv.org/abs/2310.01798" },
  { num: 23, text: 'Yang, J., et al. (2024). "ReliabilityBench: Assessing LLM Agent Reliability Under Production Perturbations."', url: "https://arxiv.org/abs/2407.17966" },
  { num: 24, text: 'Xie, J., et al. (2025). "HiPER: Hierarchical Reinforcement Learning with Explicit Credit Assignment."', url: "https://arxiv.org/abs/2602.16165" },
  { num: 25, text: 'Nottingham, K., et al. (2025). "HERAKLES: Hierarchical Skill Compilation for Open-ended LLM Agents."', url: "https://arxiv.org/abs/2508.14751" },
  { num: 26, text: 'Arulkumaran, K., et al. (2025). "From AI for Science to Agentic Science."', url: "https://arxiv.org/abs/2508.14111" },
];

const ProvePattern = () => {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Original research"
        title="The PROVE Pattern"
        lead="A scientific method for agentic AI: Predict · Run · Observe · Validate · Evolve."
      />

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">

            {/* Opening */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg mb-10">
                <CardContent className="p-0">
                  <p className="text-xl lg:text-2xl font-bold text-primary leading-snug border-l-4 border-primary pl-4 mb-6">
                    Most agent reasoning patterns are partial copies of the scientific method.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Section: We Were So Close */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">ReAct got close</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you've put AI agents into production, you know ReAct gets unreliable at scale. I've watched an agent retry the same failed API call six times in a row, and another commit to a wrong answer in step two and spend fifteen more steps justifying it. I've also debugged traces where the reasoning the agent wrote down had nothing to do with what it did.
                  </p>
                  <p>
                    ReAct was a good idea. An LLM reasons about what to do, does it, looks at the result and repeats: <b>Reason, Act, Observe.</b> It was simple, and it beat everything that came before it.
                  </p>
                  <p>
                    Over the next three years we stacked more and more on top of it (tree search, self-reflection layers, planning frameworks, guardrails on guardrails) to fix the problems that kept showing up in production.
                  </p>
                  <p>
                    Each of those fixes recovers a piece of a method people have used in every field for centuries, and that most of us first met in middle school science class.
                  </p>
                  <p>
                    Given the limits of the models at the time, we ended up with a stripped-down scientific method. ReAct left out the parts that make the method work, and the field has spent years adding them back one at a time without noticing what it was rebuilding.
                  </p>
                  <p>
                    ReAct wasn't wrong. It was <em>incomplete</em>, and the complete version is in any science textbook.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section: Side by Side */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Look at this side by side</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">Put the two loops next to each other and the gaps are easy to spot.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-3">What a ReAct agent does:</h3>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Think about the problem (Reason)</li>
                        <li>Do something (Act)</li>
                        <li>Look at what happened (Observe)</li>
                        <li>Repeat</li>
                      </ol>
                    </CardContent>
                  </Card>
                  <Card className="p-6 shadow-executive-md border-primary/20">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-3">What a scientist does:</h3>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Observe the situation and gather information</li>
                        <li>Ask a specific question</li>
                        <li>Form a hypothesis: a falsifiable prediction</li>
                        <li>Design an experiment that could confirm or disprove it</li>
                        <li>Run the experiment and collect results</li>
                        <li>Analyze the results against your prediction</li>
                        <li>Conclude or iterate</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  ReAct's "Reason" step collapses items 2, 3, and 4 into a single unstructured thought. Its "Observe" step skips item 6 entirely. And it has no concept of item 7 as a deliberate decision point. Those shortcuts made sense when ReAct came out. Models are bigger now, context windows are longer, and three years of production failures show which shortcuts are costing us.
                </p>
              </div>
            </ScrollReveal>

            {/* Section: Failures Map */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Each failure maps to a missing step</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For each common agent failure, ask which step of the scientific method would have caught it.
                </p>

                <div className="space-y-6">
                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Looping: missing falsification</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When a ReAct agent hits a dead end, it has no way to recognize that its approach has been disproven. It never made a falsifiable prediction, so it can't tell when the evidence contradicts it. Production evaluations on diagnostic tasks have documented repetition rates around 12%, with stronger models abandoning their own stated investigation plans in over half of cases. A scientist who gets the same negative result three times doesn't run the experiment a fourth time. They come up with a new hypothesis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Premature commitment: missing competing hypotheses</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        ReAct generates one line of reasoning and acts on it. There's no step where the agent considers alternative explanations. So the agent latches onto whatever interpretation the LLM produces first, and token probability decides that, not evidence. A doctor who diagnosed every patient from the first symptom they mentioned would be committing malpractice.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Error propagation: missing validation against predictions</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When a tool call returns a bad result, a ReAct agent feeds it into the next reasoning step without checking whether it makes sense. Production benchmarks show agents that reach nearly 97% accuracy in controlled settings dropping sharply under real-world conditions (rate limit errors, schema drift, unexpected null values) because errors compound unchecked.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Confabulation: missing structural accountability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        This is the most dangerous one. The agent says "I'm investigating whether the database connection is timing out" and then does something unrelated, and nothing in the loop catches the mismatch. ReAct jams reasoning, perception, action, learning and communication into a single LLM loop. With nothing separated, there's no place to check one against another.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Interactive Diagram */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">PROVE: Predict, Run, Observe, Validate, Evolve</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Instead of patching ReAct's gaps one at a time, implement the full scientific method as an agent's reasoning loop. It has five steps, and each one is there because leaving it out causes a known failure mode.
                </p>
                <ProveDiagram />
              </div>
            </ScrollReveal>

            {/* Detailed Steps */}
            <ScrollReveal>
              <div className="mb-12 space-y-8">
                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Predict</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      Before any action, the agent forms a <strong className="text-foreground">falsifiable prediction.</strong> Not "I should probably check the logs" but "If the service is failing due to memory pressure, then the container logs should show OOM kill events in the last 30 minutes."
                    </p>
                    <p>
                      The agent has to say what it <em>believes</em> before acting and set its success and failure criteria <em>before</em> it sees results, so it can't rationalize afterward. It also has to say what would <em>disprove</em> the current hypothesis.
                    </p>
                    <p>
                      When the situation is ambiguous, the Predict step generates <strong className="text-foreground">competing predictions</strong>. The Run step then picks the action that best tells these possibilities apart. This is the biggest single improvement over ReAct.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Run</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Take an action designed to test the prediction, and <strong className="text-foreground">choose the one that best tells the competing hypotheses apart.</strong> If three hypotheses would all produce the same result from the same action, that action has low diagnostic value. Pick the one where different hypotheses predict different outcomes. Scientists design experiments that <em>will</em> tell them something whatever the outcome, instead of ones that might.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Observe</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Record the results: the status code, the data returned, any error message and how long it took. Keep this step factual and leave interpretation for later. ReAct has an Observe step, but it pipes observations straight into the next unstructured reasoning step, where the agent can quietly ignore evidence that contradicts what it already believes.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Validate</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      This step matters most. Compare the observation against the prediction. There are three possible outcomes:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Observation matches prediction:</strong> The hypothesis survives. It isn't proven, but it has one more piece of supporting evidence.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Observation contradicts prediction:</strong> The hypothesis is falsified. Every falsified hypothesis narrows the search space.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Observation is ambiguous:</strong> The experiment wasn't diagnostic enough. Sharpen the prediction or choose a more targeted action.</span>
                      </li>
                    </ul>
                    <p>
                      This one step handles most of ReAct's failure modes. Looping stops because falsified hypotheses are explicitly retired. Error propagation stops because unexpected results trigger investigation. Confabulation becomes visible because there's an external criterion to check reasoning against.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Evolve</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>Based on validation, the agent makes a deliberate decision:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Hypothesis supported:</strong> Build on it. Generate the next prediction that extends the current understanding.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Hypothesis falsified:</strong> Generate a new hypothesis that accounts for <em>all</em> evidence so far. The agent doesn't start over; it keeps what it has learned.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Inconclusive:</strong> Refine the prediction to be more specific. Design a more targeted experiment.</span>
                      </li>
                    </ul>
                    <p>
                      Then the loop runs again. It stops when enough predictions have held up for the agent to be confident, or when it has run out of hypotheses, in which case it escalates instead of guessing.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Abstraction Layers */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">PROVE at every layer</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  PROVE works at every layer of an agent system, from architecture decisions down to debugging a single line of code. What changes is the scope of the hypothesis, the timescale and the tools available.
                </p>

                <div className="space-y-6">
                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#6A4B8E]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#6A4B8E]">META LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Self-governance</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        At the top, PROVE checks the agent's confidence in its own reasoning. "My current approach should produce measurable progress within the next 3 cycles." If no progress after 3 cycles, the meta-hypothesis that "this approach is working" is itself falsified. That stops the fifty-cycle death spiral.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#946B00]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#946B00]">STRATEGIC LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Big decisions</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        "If daily data volume exceeds 10M rows, a streaming architecture will reduce end-to-end latency by at least 50% compared to batch." At this level a PROVE cycle might take a person hours or days, and an agent minutes. Committing to a wrong answer is expensive here, which is when you need the rigor most.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#1A7A56]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#1A7A56]">TACTICAL LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Task decomposition</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        "If this PR introduces a performance regression, profiling the payment processing hot path will show increased memory allocation compared to baseline." That beats the usual "something looks off, so the whole PR is suspect" review, because you're making a specific claim and testing it.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#1F5CA0]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#1F5CA0]">OPERATIONAL LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Individual actions</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        "If the 401 is caused by an expired JWT, decoding the token will show an exp timestamp in the past." The pattern helps even at this level. When the null check fixes the NPE but a different test fails, the senior engineer asks "but <em>why</em> was it null?" PROVE builds that instinct into the loop.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Transparency */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Transparency and governance</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    More and more people in security and compliance argue that opaque agent reasoning is a security vulnerability as well as an engineering problem. When an autonomous agent takes action in an enterprise environment, operators need to understand <em>why</em> it made that decision. Regulators are catching up: the EU AI Act, the NIST AI Risk Management Framework and ISO 42001 all increasingly demand that high-risk AI systems be explainable.
                  </p>
                  <p>
                    Most current approaches add transparency after the fact with interpretability tools like LIME and SHAP, which reverse-engineer model outputs. They work, but they're bolted on. <strong className="text-foreground">In PROVE, the transparency comes from the structure of the loop itself.</strong>
                  </p>
                  <Card className="p-6 shadow-executive-md bg-muted/50">
                    <CardContent className="p-0">
                      <p className="font-semibold text-foreground mb-3">Every PROVE cycle leaves an auditable record:</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                          <span><strong className="text-foreground">Predict</strong> captures what the agent believed and why, before it acts.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                          <span><strong className="text-foreground">Run</strong> captures what action was chosen and why <em>this</em> action over alternatives.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                          <span><strong className="text-foreground">Observe</strong> captures raw factual results, separated from interpretation.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                          <span><strong className="text-foreground">Validate</strong> captures whether the result matched expectations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                          <span><strong className="text-foreground">Evolve</strong> captures how the agent's understanding changed.</span>
                        </li>
                      </ul>
                      <p className="mt-3 text-sm italic">A JSON log of tool calls doesn't tell you why. This record tells the story of each decision, which is what auditors, security teams and regulators ask for.</p>
                    </CardContent>
                  </Card>
                  <p>
                    In regulated industries like healthcare, finance and government, that record can decide whether you're allowed to deploy an AI system at all.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Multi-Agent */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Multi-agent implementation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  PROVE works fine as a single-agent loop with structured prompting. It also maps cleanly onto a multi-agent architecture where a specialist agent owns each step.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { role: "The Predictor", desc: "Generates competing hypotheses and falsifiable predictions. Its job is the creative part: plausible explanations and specific, testable claims." },
                    { role: "The Experimenter", desc: "Designs and executes actions that test hypotheses. It picks the actions that best tell the hypotheses apart." },
                    { role: "The Observer", desc: "Collects and structures results without interpretation. Keeping this apart from analysis guards against jumping to conclusions and confirmation bias." },
                    { role: "The Validator", desc: "Compares observations against predictions using explicit criteria. Renders a verdict: supported, falsified, or inconclusive." },
                    { role: "The Evolver", desc: "Combines the validation results with the full evidence history and sets up the next cycle." },
                    { role: "The Reviewer", desc: "Challenges the Validator's conclusions. Looks for confounds and alternative explanations. It's adversarial on purpose, so the team doesn't settle on an answer too early." },
                  ].map((agent) => (
                    <Card key={agent.role} className="p-5 shadow-executive-sm">
                      <CardContent className="p-0">
                        <h4 className="font-bold text-foreground mb-1">{agent.role}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{agent.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Why Not Just Better ReAct */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Why this isn't just a better ReAct</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    PROVE doesn't extend ReAct; it starts somewhere else. ReAct started from "what can we get an LLM to do?" and built up from there. PROVE starts from "what does rigorous reasoning actually require?" and implements that.
                  </p>
                  <p>
                    Every major post-ReAct architecture (Reflexion, Tree of Thoughts, LATS, Plan-and-Execute) independently rediscovered a piece of the scientific method and bolted it onto ReAct's frame. They all improve on ReAct because each adds back something the scientific method already had. None of them implements the full loop, enforces explicit falsification or runs recursively across layers.
                  </p>
                  <p>
                    We don't need another ReAct variant. We need to build the loop we've been circling, all of it, on purpose.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Getting Started */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Getting started</h2>
                <div className="space-y-6">
                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-2">If you build agents</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Start small. Take your existing agent loop and add two requirements:
                      </p>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Before every action, the agent must state a falsifiable prediction: what it expects to happen and what would disprove its current reasoning.</li>
                        <li>After every observation, the agent must compare the result against the prediction instead of only summarizing what happened.</li>
                      </ol>
                      <p className="text-muted-foreground leading-relaxed mt-3">
                        That's Predict and Validate. Those two steps alone will cut down on looping and premature commitment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-2">If you build frameworks</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Build in support for tracking hypotheses, comparing predictions with observations and scoring confidence. Agent orchestration tools should treat the reasoning trace as a structured evidence graph: hypotheses linked to the predictions they generated, the experiments that tested them, and the observations that supported or falsified them.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-2">If you lead engineering teams</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When evaluating agent architectures, ask three questions: Does this system form predictions before acting? Does it validate results against those predictions? Can it explicitly falsify a hypothesis and change course? If the answer to any of these is no, the system will hit the failure modes above.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Punchline */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg mb-12 border-primary/20">
                <CardContent className="p-0">
                  <h2 className="section-title">The punchline</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We spent years patching agent reasoning failures one at a time. The fix was in the first chapter of every science textbook.
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      PROVE (Predict, Run, Observe, Validate, Evolve) doesn't invent anything new. It implements the scientific method, in full, as the reasoning loop for AI agents.
                    </p>
                    <p>
                      It runs at every layer, from strategic planning down to single tool calls, and it leaves an audit trail as it goes. Today's models and frameworks can already support it.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Sources */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Sources</h2>
                <div className="space-y-2">
                  {sources.map((s) => (
                    <div key={s.num} className="flex gap-3 text-sm">
                      <span className="text-muted-foreground font-mono w-6 flex-shrink-0 text-right">{s.num}.</span>
                      <span className="text-muted-foreground leading-relaxed">
                        {s.text}{" "}
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline break-all"
                        >
                          {s.url}
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Back to Research */}
            <div className="text-center pt-4 pb-8">
              <Link to="/research">
                <Button variant="outline">Back to Research</Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProvePattern;
