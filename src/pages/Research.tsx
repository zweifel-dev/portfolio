import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const Research = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">Research</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              Applied research that drives enterprise outcomes.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Agentic AI &bull; Healthcare Analytics &bull; Enterprise Platforms &bull; Data Culture Transformation
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl space-y-12">

            {/* Agentic AI & AI-Augmented Organizations */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg">
                <CardContent className="space-y-6 p-0">
                  <div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">AI Leadership</span>
                  </div>
                  <h2 className="section-title !mb-2">Agentic AI &amp; AI-Augmented Organizations</h2>
                  <p className="text-lg font-semibold text-foreground">
                    Why it matters: Organizations that deploy AI agents into production workflows unlock step-function
                    gains in throughput, consistency, and speed-to-delivery — while shifting human effort from creation to review.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Primary focus on building and deploying agentic AI systems that transform how data teams operate.
                    This work spans framework evaluation, production agent architecture, and organizational change
                    management for AI adoption.
                  </p>

                  {/* PROVE Pattern Highlight */}
                  <Card className="bg-primary/5 border border-primary/20">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-semibold text-foreground">The PROVE Pattern — Original Research</h3>
                        {/*<span className="px-2 py-0.5 bg-accent/20 text-accent-foreground rounded text-xs font-medium">Published</span>*/}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        PROVE (Predict, Run, Observe, Validate, Evolve) applies the scientific method as an agentic AI
                        reasoning loop. Developed from analysis of documented failure modes in production ReAct-based
                        architectures — looping, premature commitment, error propagation, and confabulation — the pattern
                        addresses each by implementing the complete hypothesis-driven cycle that existing frameworks only
                        partially recover.
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2">
                          <span className="font-mono font-bold text-primary flex-shrink-0">P</span>
                          <span><span className="font-medium text-foreground">Predict</span> — Form falsifiable hypotheses with competing predictions before any action</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="font-mono font-bold text-primary flex-shrink-0">R</span>
                          <span><span className="font-medium text-foreground">Run</span> — Execute targeted experiments that maximize diagnostic value between hypotheses</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="font-mono font-bold text-primary flex-shrink-0">O</span>
                          <span><span className="font-medium text-foreground">Observe</span> — Collect factual results separated from interpretation to prevent confirmation bias</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="font-mono font-bold text-primary flex-shrink-0">V</span>
                          <span><span className="font-medium text-foreground">Validate</span> — Compare observations against predictions: supported, falsified, or inconclusive</span>
                        </p>
                        <p className="flex items-start gap-2">
                          <span className="font-mono font-bold text-primary flex-shrink-0">E</span>
                          <span><span className="font-medium text-foreground">Evolve</span> — Update understanding based on evidence, then iterate or conclude with confidence</span>
                        </p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        The pattern operates recursively across four abstraction layers — Meta, Strategic, Tactical,
                        and Operational — and maps naturally to multi-agent architectures with specialized roles.
                        Analyzed against 8+ existing frameworks including ReAct, Reflexion, Tree of Thoughts, LATS,
                        and Plan-and-Execute to demonstrate how each independently rediscovered pieces of what PROVE
                        implements as a complete loop.
                      </p>
                      <StaggerContainer className="grid grid-cols-4 gap-4">
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">26</div>
                            <div className="text-xs text-muted-foreground">Academic Sources</div>
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">8+</div>
                            <div className="text-xs text-muted-foreground">Frameworks Analyzed</div>
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">4</div>
                            <div className="text-xs text-muted-foreground">Abstraction Layers</div>
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">5</div>
                            <div className="text-xs text-muted-foreground">Step Cycle</div>
                          </div>
                        </StaggerItem>
                      </StaggerContainer>
                    </CardContent>
                  </Card>

                  {/* Resource Guide Highlight */}
                  <Card className="bg-muted/50 border border-border">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="font-semibold text-foreground">Agentic AI Resource Guide — Thought Leadership</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Authored a comprehensive 85+ resource guide covering architecture patterns, foundational research
                        (ReAct, Chain of Thought, Tree of Thoughts, CoALA), production operations, and evaluation methodology.
                        Adopted as the team's onboarding standard for the AI transition — accelerating ramp time and
                        establishing a shared vocabulary across engineering, product, and leadership.
                      </p>
                      <StaggerContainer className="grid grid-cols-3 gap-4">
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">85+</div>
                            <div className="text-sm text-muted-foreground">Curated Resources</div>
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">14</div>
                            <div className="text-sm text-muted-foreground">Sections</div>
                          </div>
                        </StaggerItem>
                        <StaggerItem>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary">6+</div>
                            <div className="text-sm text-muted-foreground">Frameworks Covered</div>
                          </div>
                        </StaggerItem>
                      </StaggerContainer>
                    </CardContent>
                  </Card>

                  {/* Key Research Areas */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Research Areas</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><span className="font-medium text-foreground">Framework evaluation:</span> Strands Agents SDK vs LangGraph vs CrewAI vs OpenAI Agents SDK — selection criteria tied to team capability and infrastructure fit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><span className="font-medium text-foreground">Production agent architecture:</span> Model-driven loops, graph pipelines, multi-agent orchestration at enterprise scale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><span className="font-medium text-foreground">Quality gates:</span> Human-in-the-loop review for agent-generated code, documentation, and metric definitions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><span className="font-medium text-foreground">MCP &amp; composability:</span> Tool integration patterns that let agents operate across data platform layers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><span className="font-medium text-foreground">Change management:</span> Moving teams from manual production to agent-augmented review without losing trust or quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                        <span><span className="font-medium text-foreground">Local AI infrastructure:</span> Model routing, RAG patterns, and cloud vs. local vs. hybrid inference trade-offs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <Link to="/prove-pattern">
                      <Button>Read: The PROVE Pattern</Button>
                    </Link>
                    <Link to="/ai-development-lab">
                      <Button variant="outline">View AI Development Lab Case Study</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* AI/ML in Healthcare SaaS */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg">
                <CardContent className="space-y-6 p-0">
                  <div>
                    <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">Healthcare SaaS</span>
                  </div>
                  <h2 className="section-title !mb-2">AI/ML in Healthcare SaaS</h2>
                  <p className="text-lg font-semibold text-foreground">
                    Why it matters: AI-powered clinical tools only drive value when analytics can prove it —
                    quantified impact shapes pricing, go-to-market, and executive buy-in.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Applied research into AI and ML products within healthcare technology, including product
                    analytics practices that quantify the business value of AI-powered clinical tools.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">AI Scribe Value Analysis:</span> Quantified 12.4 minutes of documentation time savings per visit ($1.1M monthly impact) — shaped product pricing and go-to-market positioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Care Agent Analytics:</span> Adoption analysis and correlation studies for a patient-facing LLM delivering medical lab results, tying feature usage to operational outcomes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Product Research Analytics:</span> Segmentation, correlation analysis, and operational insights delivered to customer success and leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span>Predictive analytics for patient flow optimization and real-time clinical decision support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span>Data governance and privacy architecture in HIPAA-compliant medical systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Enterprise Data Platform Architecture */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg">
                <CardContent className="space-y-6 p-0">
                  <div>
                    <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">Platform Architecture</span>
                  </div>
                  <h2 className="section-title !mb-2">Enterprise Data Platform Architecture</h2>
                  <p className="text-lg font-semibold text-foreground">
                    Why it matters: A well-architected data platform eliminates the "dashboard factory" problem,
                    cuts metric rebuilding overhead by 30-40%, and gives every consumer — human or AI — a single source of truth.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Research into modern enterprise data platform design, semantic layer governance, and metric
                    certification — the infrastructure layer that makes both analytics and AI agents trustworthy.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Six-layer architecture:</span> Ingestion through Delivery — designed for iterative deployment, not big-bang launches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Semantic layer governance:</span> dbt MetricFlow with formal certification lifecycle and stakeholder alignment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">CDC pipeline design:</span> Kafka, Schema Registry, and Debezium for real-time data movement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Strangler pattern migration:</span> Iterative platform cutover that builds organizational confidence through early wins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Entity resolution:</span> Kimball star schema with crosswalks for cross-system identity mapping</span>
                    </li>
                  </ul>
                  <div className="text-center pt-2">
                    <Link to="/enterprise-data-platform">
                      <Button variant="outline">View Enterprise Data Platform Case Study</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Data Culture & Organizational Transformation */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg">
                <CardContent className="space-y-6 p-0">
                  <div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Culture &amp; Transformation</span>
                  </div>
                  <h2 className="section-title !mb-2">Data Culture &amp; Organizational Transformation</h2>
                  <p className="text-lg font-semibold text-foreground">
                    Why it matters: AI agent adoption fails without an existing foundation of data trust, governance
                    maturity, and cultural readiness — the technology is the easy part.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Research into building sustainable data cultures that enable both human and AI-augmented
                    decision-making at enterprise scale.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">DELTA framework:</span> Structured implementation for measuring and advancing data-driven maturity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Cultural shift:</span> Moving from dashboard factory to metric-certified operation — reducing rework, increasing trust</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">Executive alignment:</span> Frameworks for getting leadership buy-in on data strategy and governance investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">ROI measurement:</span> Quantifying the business value of analytics maturity and infrastructure investment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 flex-shrink-0">&#8226;</span>
                      <span><span className="font-medium text-foreground">AI readiness:</span> Building the organizational foundation — governance, trust, process discipline — that AI agent adoption requires</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Research;
