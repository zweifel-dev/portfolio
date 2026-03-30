import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import ProveDiagram from "@/components/ProveDiagram";

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
  { num: 15, text: 'Google Cloud. (2025). "Choose a Design Pattern for Your Agentic AI System."', url: "https://docs.google.com/architecture/choose-design-pattern-agentic-ai-system" },
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
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">The PROVE Pattern</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              A Scientific Method for Agentic AI
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Predict · Run · Observe · Validate · Evolve
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">

            {/* Opening */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg mb-10">
                <CardContent className="p-0">
                  <p className="text-xl lg:text-2xl font-bold text-primary leading-snug border-l-4 border-primary pl-4 mb-6">
                    We've been reinventing a wheel when it comes to Agentic Patterns.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Section: We Were So Close */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">ReAct is Close</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    If you've built and deployed to production anything with AI agents, you already know ReAct doesn't work reliably once you scale. You've watched an agent loop on the same failed API call six times in a row. You've seen it commit to a wrong answer in step two and spend the next fifteen steps rationalizing it. You've debugged traces where the agent's stated reasoning has nothing to do with what it actually did.
                  </p>
                  <p>
                    ReAct was a genuinely good idea. Take an LLM, let it reason about what to do, let it do the thing, let it see what happened, and repeat. <b>Reason, Act, Observe. Simple. Elegant.</b> It worked better than anything before it.
                  </p>
                  <p>
                    And then we spent the next three years building increasingly complex systems on top of it to handle context and decision making (tree search, self-reflection layers, planning frameworks, guardrails on guardrails) trying to fix problems that kept showing up in production.
                  </p>
                  <p>
                    Every one of those fixes are each independently rediscovering a piece of something that already exists. Something that's been stress-tested across every domain of human inquiry for centuries. Something most of us learned the basics of in middle school science class.
                  </p>
                  <p>
                    We accidentally built a stripped-down version of the scientific method giving the constraints at the time. ReAct removed the parts that make the scientific method actually work, and then spent years trying to bolt those parts back on one at a time without recognizing what we were rebuilding.
                  </p>
                  <p>
                    I'm not saying ReAct was wrong. I'm saying it was <em>incomplete</em> and the complete version has been sitting in every science textbook since before any of us were born.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Section: Side by Side */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Look at This Side by Side</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">Once you see it, you can't unsee it.</p>

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
                        <li>Form a hypothesis — a falsifiable prediction</li>
                        <li>Design an experiment to confirm OR disprove</li>
                        <li>Run the experiment and collect results</li>
                        <li>Analyze the results against your prediction</li>
                        <li>Conclude or iterate</li>
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  ReAct's "Reason" step collapses items 2, 3, and 4 into a single unstructured thought. Its "Observe" step skips item 6 entirely. And there's no concept of item 7 as a deliberate decision point. But we're not in that phase anymore. Models are bigger, context is longer, and we have three years of production failure data telling us exactly which simplifications are costing us.
                </p>
              </div>
            </ScrollReveal>

            {/* Section: Failures Map */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">The Failures Map Perfectly</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Walk through the most common agent failure modes and ask "which scientific method step would have caught this?"
                </p>

                <div className="space-y-6">
                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Looping → Missing: Falsification</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When a ReAct agent hits a dead end, it has no mechanism to recognize that its current approach has been disproven. It never formed a falsifiable prediction, so it can't evaluate whether evidence contradicts its reasoning. Production evaluations on diagnostic tasks have documented repetition rates around 12%, with stronger models abandoning their own stated investigation plans in over half of cases. A scientist who runs the same experiment three times and gets the same negative result doesn't run it a fourth time. They form a new hypothesis.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Premature Commitment → Missing: Competing Hypotheses</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        ReAct generates one line of reasoning and acts on it. There's no step where the agent considers alternative explanations. In practice, this means the agent latches onto whatever interpretation the LLM generates first, which is determined by token probability, not by evidence. Imagine a doctor who diagnosed every patient based on the first symptom they mentioned. You'd call that malpractice.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Error Propagation → Missing: Validation Against Predictions</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When a ReAct agent gets a bad result from a tool call, it feeds that result into the next reasoning step without evaluating whether the result makes sense. Production benchmarks show agents achieving near-97% accuracy in controlled settings dropping significantly under real-world conditions (rate limit errors, schema drift, unexpected null values) because errors compound unchecked.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-1">Confabulation → Missing: Structural Accountability</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The most dangerous one. The agent says "I'm investigating whether the database connection is timing out" and then proceeds to do something completely unrelated. Its reasoning and its actions are disconnected, and there's no structural check to catch the mismatch. In ReAct, reasoning, perception, action execution, learning, and communication are all implicitly and monolithically jammed into a single LLM interaction loop. There's no separation of concerns, so there's no place for accountability to live.
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
                  Instead of patching ReAct's gaps one at a time, implement the full scientific method as an agentic reasoning loop. Five steps. Each one exists because removing it causes a known failure mode.
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
                      This forces the agent to articulate what it <em>believes</em> before acting, creates success/failure criteria <em>before</em> seeing results (preventing post-hoc rationalization), and defines what would <em>disprove</em> the current hypothesis.
                    </p>
                    <p>
                      When the situation is ambiguous, the Predict step generates <strong className="text-foreground">competing predictions</strong>. The subsequent Run step then targets the action that best differentiates between these possibilities. This is the single biggest upgrade from ReAct.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Run</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Execute a targeted action designed to test the prediction. The key discipline: <strong className="text-foreground">choose the action that best differentiates between competing hypotheses.</strong> If three hypotheses would all produce the same result from the same action, that action has low diagnostic value. Pick the one where different hypotheses predict different outcomes. Scientists don't just run experiments that might tell them something. They design experiments that <em>will</em> tell them something regardless of outcome.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Observe</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collect the results. Deliberately keep this step factual and separate from interpretation. What status code came back? What data was returned? What error message appeared? How long did it take? ReAct has this step, but it immediately feeds observations into the next unstructured reasoning step where the agent can unconsciously filter evidence that contradicts its current belief.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-xl mb-2">Validate</h3>
                  <div className="space-y-3 text-muted-foreground leading-relaxed">
                    <p>
                      This is the step that matters most. Compare the observation against the prediction with three possible outcomes:
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Observation matches prediction:</strong> The hypothesis survives not "proven," but one piece of supporting evidence.</span>
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
                      This step kills most of ReAct's failure modes in one shot. Looping stops because falsified hypotheses are explicitly retired. Error propagation stops because unexpected results trigger investigation. Confabulation becomes visible because there's an external criterion to check reasoning against.
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
                        <span><strong className="text-foreground">Hypothesis falsified:</strong> Generate a new hypothesis that accounts for <em>all</em> evidence so far. The agent doesn't restart it incorporates what it's learned.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><strong className="text-foreground">Inconclusive:</strong> Refine the prediction to be more specific. Design a more targeted experiment.</span>
                      </li>
                    </ul>
                    <p>
                      The loop then recurses. It terminates when the agent reaches sufficient confidence through multiple validated predictions or when all candidate hypotheses have been exhausted and the agent escalates honestly rather than guessing.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Abstraction Layers */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">PROVE Across Abstraction Layers</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  PROVE isn't just a single-level reasoning loop. It works at every abstraction layer of an agentic system from strategic architecture decisions down to debugging a single line of code. The only things that change are the scope of the hypothesis, the timescale, and the tools available.
                </p>

                <div className="space-y-6">
                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#6A4B8E]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#6A4B8E]">META LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Self-Governance</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        PROVE operates above all other layers, governing the agent's confidence in its own reasoning. "My current approach should produce measurable progress within the next 3 cycles." If no progress after 3 cycles, the meta-hypothesis that "this approach is working" is itself falsified. This prevents the fifty-cycle death spiral.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#946B00]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#946B00]">STRATEGIC LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Big Decisions</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        "If daily data volume exceeds 10M rows, a streaming architecture will reduce end-to-end latency by at least 50% compared to batch." At this altitude, each PROVE cycle might take hours or days in human terms, and minutes in agent terms. The cost of committing to a wrong answer is high, that's exactly when you need the rigor most.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#1A7A56]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#1A7A56]">TACTICAL LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Task Decomposition</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        "If this PR introduces a performance regression, profiling the payment processing hot path will show increased memory allocation compared to baseline." This prevents the code review antipattern of "something looks off so the whole PR is suspect." Instead of vibes-based review, you're forming specific claims and testing them.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md border-l-4 border-l-[#1F5CA0]">
                    <CardContent className="p-0">
                      <span className="font-mono text-xs tracking-widest text-[#1F5CA0]">OPERATIONAL LAYER</span>
                      <h3 className="font-bold text-foreground mt-1 mb-2">Individual Actions</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        "If the 401 is caused by an expired JWT, decoding the token will show an exp timestamp in the past." Even at this granularity, the pattern adds meaningful rigor. When the null check fixes the NPE but a different test fails, the senior engineer asks "but <em>why</em> was it null?" PROVE makes the senior engineer's instinct structural.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* Transparency */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Transparency and Governance</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    There's a growing argument in the security and compliance world that opaque agent reasoning isn't just an engineering problem, it's a security vulnerability. When an autonomous agent takes action in an enterprise environment, operators need to understand <em>why</em> it made that decision. Regulators are catching up, the EU AI Act, the NIST AI Risk Management Framework, and ISO 42001 all increasingly demand that high-risk AI systems be explainable.
                  </p>
                  <p>
                    Most current approaches try to achieve transparency through post-hoc interpretability, tools like LIME and SHAP that reverse-engineer model outputs after the fact. These work, but they're bolted on. <strong className="text-foreground">PROVE produces transparency structurally, not as an afterthought.</strong>
                  </p>
                  <Card className="p-6 shadow-executive-md bg-muted/50">
                    <CardContent className="p-0">
                      <p className="font-semibold text-foreground mb-3">Every PROVE cycle generates an inherently auditable record:</p>
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
                      <p className="mt-3 text-sm italic">This isn't a JSON log of tool calls. It's a narrative of decision-making, exactly what auditors, security teams, and regulators need.</p>
                    </CardContent>
                  </Card>
                  <p>
                    For regulated industries (healthcare, finance, government) this structural transparency isn't a nice-to-have. It's the difference between an AI system you can deploy and one you can't.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Multi-Agent */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Multi-Agent Implementation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  PROVE works fine as a single-agent loop with structured prompting. But it maps naturally to a multi-agent architecture where each step is owned by a specialist.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { role: "The Predictor", desc: "Generates competing hypotheses and falsifiable predictions. Its job is creative — coming up with plausible explanations and specific, testable claims." },
                    { role: "The Experimenter", desc: "Designs and executes actions that test hypotheses. Optimizes for diagnostic value — choosing actions that differentiate between hypotheses." },
                    { role: "The Observer", desc: "Collects and structures results without interpretation. Keeping this separate from analysis prevents premature interpretation and confirmation bias." },
                    { role: "The Validator", desc: "Compares observations against predictions using explicit criteria. Renders a verdict: supported, falsified, or inconclusive." },
                    { role: "The Evolver", desc: "Synthesizes validation results with the full evidence history. Generates the context for the next cycle." },
                    { role: "The Reviewer", desc: "Challenges the Validator's conclusions. Looks for confounds and alternative explanations. Adversarial by design — prevents premature convergence." },
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
                <h2 className="section-title">Why This Isn't Just "Better ReAct"</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    PROVE isn't a ReAct extension. It's a different starting point. ReAct started from "what can we get an LLM to do?" and built up from there. PROVE starts from "what does rigorous reasoning actually require?" and implements that.
                  </p>
                  <p>
                    The distinction matters because every major post-ReAct architecture (Reflexion, Tree of Thoughts, LATS, Plan-and-Execute) independently rediscovered a piece of the scientific method and bolted it onto ReAct's frame. They all work, and they all improve on ReAct, precisely because they each add back something the scientific method already had. But none of them implement the full loop. None enforce explicit falsification. None apply recursively across abstraction layers.
                  </p>
                  <p>
                    We don't need another ReAct variant. We need to recognize what we've been circling around and implement it directly. The complete reasoning framework already exists. It's been peer-reviewed by a few centuries of scientists across every domain imaginable.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Getting Started */}
            <ScrollReveal>
              <div className="mb-12">
                <h2 className="section-title">Getting Started</h2>
                <div className="space-y-6">
                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-2">If You Build Agents</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Start small. Take your existing agent loop and add two requirements:
                      </p>
                      <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                        <li>Before every action, the agent must state a falsifiable prediction, what it expects to happen and what would disprove its current reasoning.</li>
                        <li>After every observation, the agent must explicitly compare the result against the prediction, not just summarize what happened.</li>
                      </ol>
                      <p className="text-muted-foreground leading-relaxed mt-3">
                        That's Predict and Validate. Just those two steps will immediately reduce looping and premature commitment.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-2">If You Build Frameworks</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Build first-class support for hypothesis tracking, prediction-observation comparison, and confidence scoring. Agent orchestration tools should treat the reasoning trace as a structured evidence graph, hypotheses with links to the predictions they generated, the experiments that tested them, and the observations that supported or falsified them.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="p-6 shadow-executive-md">
                    <CardContent className="p-0">
                      <h3 className="font-bold text-foreground mb-2">If You Lead Engineering Teams</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        When evaluating agent architectures, ask three questions: Does this system form predictions before acting? Does it validate results against those predictions? Can it explicitly falsify a hypothesis and change course? If the answer to any of these is no, the system will hit the failure modes.
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
                  <h2 className="section-title">The Punchline</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We spent years building increasingly sophisticated patches for agent reasoning failures. The fix was in every science textbook the whole time. Not in the advanced chapters, in the introduction that we take for granted.
                    </p>
                    <p className="text-lg font-semibold text-foreground">
                      PROVE — Predict, Run, Observe, Validate, Evolve — doesn't reinvent anything. It just takes the most battle-tested reasoning loop in human history and implements it faithfully for autonomous AI systems.
                    </p>
                    <p>
                      Applied recursively across abstraction layers, from strategic planning down to individual tool calls, with transparency and auditability baked into the structure rather than bolted on after the fact.
                    </p>
                    <p className="text-primary font-semibold">
                      The models are ready. The frameworks can support it. The only thing we were missing was the obvious.
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
    </main>
  );
};

export default ProvePattern;
