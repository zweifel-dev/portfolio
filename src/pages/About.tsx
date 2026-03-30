import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">Brandon Zweifel</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              Senior Software, Data, & AI Executive
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              $125M in cost savings delivered &bull; $500M to $1.2B valuation growth &bull; 65+ person team built
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl space-y-16">

            {/* Executive Profile */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg">
                <CardContent className="space-y-8 p-0">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <img
                      src="/images/Brandon-Zweifel-headshot.jpg"
                      alt="Brandon Zweifel - Senior Software, Data, & AI Executive"
                      className="w-48 h-48 rounded-2xl object-cover shadow-executive-md mx-auto md:mx-0 flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Senior Software, Data, and AI executive who delivers measurable business outcomes through AI-augmented data organizations.
                        Built and scaled teams, platforms, and cultures where LLM-powered agents and governed data infrastructure
                        multiply what a data team can deliver.
                      </p>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        Career arc from <span className="font-semibold text-foreground">U.S. Army Intelligence Officer</span> to
                        {' '}<span className="font-semibold text-foreground">Senior Director of Data Strategy & AI</span> — applying
                        analytical rigor and leadership under pressure to enterprise technology at scale.
                      </p>
                      <div className="flex flex-wrap gap-3 pt-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">AI Leadership</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Healthcare SaaS</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">M&A Integration</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Data Platforms</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Roscoe, IL</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a href="mailto:Brandon@Zweifel.tech" className="font-medium hover:text-primary transition-colors">Brandon@Zweifel.tech</a>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">608.931.4726</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <a href="https://www.linkedin.com/in/bzweifel/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">bzweifel</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Professional Experience */}
            <div>
              <ScrollReveal>
                <h2 className="section-title">Professional Experience</h2>
              </ScrollReveal>

              <div className="space-y-10">
                <ScrollReveal>
                  <div className="border-l-4 border-primary pl-6 lg:pl-8">
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                      <h3 className="text-xl font-bold">Sr. Director of Data Strategy & Analytics</h3>
                      <span className="text-muted-foreground">Experity &bull; 2022 – Present</span>
                    </div>
                    <p className="text-lg font-medium text-primary mb-4">
                      Deployed 7 production AI agents, built a six-layer data platform, and created a product analytics practice the CEO called the highest-value internal function.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Transformed the data team from manual producers to <strong className="text-foreground">agent-augmented reviewers</strong> — agents produce first-draft models, metrics, tests, and documentation; engineers review and merge.</li>
                      <li>Architected and delivered a <strong className="text-foreground">six-layer enterprise data platform</strong> on Snowflake with semantic layer governance, reducing new metric delivery from weeks to 2-5 days.</li>
                      <li>Eliminated per-dashboard metric rebuilding that consumed <strong className="text-foreground">30-40% of analyst capacity</strong> through certified, governed semantic views.</li>
                      <li>Built a product analytics practice that quantified <strong className="text-foreground">$1.1M/month</strong> in AI Scribe value, shaping pricing and go-to-market strategy.</li>
                      <li>Presented data monetization strategy directly to the CEO, securing executive alignment on treating data as enterprise infrastructure.</li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="border-l-4 border-accent pl-6 lg:pl-8">
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                      <h3 className="text-xl font-bold">Director of Software Development</h3>
                      <span className="text-muted-foreground">Experity &bull; 2016 – 2022</span>
                    </div>
                    <p className="text-lg font-medium text-primary mb-4">
                      Led post-M&A integration delivering $125M in cost reductions and contributing to $500M → $1.2B valuation growth in 24 months.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Directed migration from legacy monolith to cloud-native architecture, eliminating <strong className="text-foreground">$12M in annual maintenance</strong>.</li>
                      <li>Scaled the team from 15 to <strong className="text-foreground">65+ professionals</strong>, building performance frameworks that improved productivity by 30%.</li>
                      <li>Improved delivery velocity by 20%, contributing to <strong className="text-foreground">$150M in additional annual revenue</strong>.</li>
                    </ul>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="border-l-4 border-secondary pl-6 lg:pl-8">
                    <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                      <h3 className="text-xl font-bold">Earlier Career</h3>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Manager of Software Engineering <span className="text-muted-foreground">&bull; Fatwallet &bull; 2015 – 2016</span></p>
                        <p className="text-muted-foreground">Drove $5M in additional revenue through UX optimization; reduced load times by 40%.</p>
                      </div>
                      <div>
                        <p className="font-medium">Manager of Software Data Engineering <span className="text-muted-foreground">&bull; Supplycore &bull; 2012 – 2015</span></p>
                        <p className="text-muted-foreground">Deployed ERP solutions saving clients $2.5M annually; built real-time analytics generating $10M in revenue.</p>
                      </div>
                      <div>
                        <p className="font-medium">Intelligence Analyst Officer <span className="text-muted-foreground">&bull; U.S. Army &bull; 2005 – 2013</span></p>
                        <p className="text-muted-foreground">Led strategic intelligence analytics during Iraq deployment, delivering data-driven briefings to General officers that informed operational decisions.</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Core Competencies */}
            <div>
              <ScrollReveal>
                <h2 className="section-title">Core Competencies</h2>
              </ScrollReveal>
              <StaggerContainer className="grid md:grid-cols-3 gap-8">
                <StaggerItem>
                  <Card className="p-6 h-full">
                    <h3 className="text-lg font-bold mb-4">AI-Augmented Leadership</h3>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      <li>Agent-Augmented Operating Models</li>
                      <li>Agentic AI Architecture & Deployment</li>
                      <li>Organizational AI Transformation</li>
                      <li>Enterprise Data Platform Strategy</li>
                      <li>Product Research Analytics</li>
                      <li>Data Monetization</li>
                      <li>M&A Data Integration</li>
                      <li>Executive Stakeholder Management</li>
                    </ul>
                  </Card>
                </StaggerItem>
                <StaggerItem>
                  <Card className="p-6 h-full">
                    <h3 className="text-lg font-bold mb-4">Technical Depth</h3>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      <li><strong className="text-foreground">AI/Agents:</strong> Strands SDK, Bedrock AgentCore, LangGraph, CrewAI</li>
                      <li><strong className="text-foreground">Data:</strong> Snowflake, dbt MetricFlow, Kafka CDC</li>
                      <li><strong className="text-foreground">Architecture:</strong> Medallion, Kimball, Semantic Layer</li>
                      <li><strong className="text-foreground">Cloud:</strong> AWS (EKS, Lambda, Bedrock)</li>
                      <li><strong className="text-foreground">Languages:</strong> Python, SQL, Node.js</li>
                    </ul>
                  </Card>
                </StaggerItem>
                <StaggerItem>
                  <Card className="p-6 h-full">
                    <h3 className="text-lg font-bold mb-4">Domain Expertise</h3>
                    <ul className="space-y-1.5 text-muted-foreground text-sm">
                      <li>Healthcare SaaS</li>
                      <li>EMR/EHR & Revenue Cycle</li>
                      <li>HIPAA-Compliant Analytics</li>
                      <li>Metric Certification & Governance</li>
                      <li>Multi-Agent Orchestration</li>
                      <li>Data-as-a-Product</li>
                    </ul>
                  </Card>
                </StaggerItem>
              </StaggerContainer>
            </div>

            {/* Education */}
            <ScrollReveal>
              <div>
                <h2 className="section-title">Education</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <p className="font-bold">MBA, AI & Analytics Strategy</p>
                    <p className="text-muted-foreground">Milwaukee School of Engineering</p>
                    <p className="text-sm text-muted-foreground italic mt-1">Delta Mu Delta International Honor Society</p>
                  </Card>
                  <Card className="p-6">
                    <p className="font-bold">B.S., Computer Science</p>
                    <p className="text-muted-foreground">University of Illinois Springfield</p>
                    <p className="text-sm text-muted-foreground italic mt-1">Software Engineering, Architecture, Security</p>
                  </Card>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal>
              <div className="text-center space-y-4 pt-4">
                <h3 className="text-2xl font-bold">Let's Connect</h3>
                <p className="text-muted-foreground text-lg">Ready to discuss AI-augmented data strategy or leadership opportunities?</p>
                <Link to="/contact">
                  <Button size="lg" className="btn-executive mt-2">Get in Touch</Button>
                </Link>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
