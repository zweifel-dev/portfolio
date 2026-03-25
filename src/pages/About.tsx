import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Brandon Zweifel</h1>
          <p className="text-xl leading-relaxed">Senior Data & AI Executive | Building AI-Augmented Data Organizations | Healthcare SaaS</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <figure className="text-center">
                  <img
                    src="/images/Brandon-Zweifel-headshot.jpg"
                    alt="Brandon Zweifel - Senior Data & AI Executive"
                    className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg"
                    loading="lazy"
                  />
                </figure>

                <section className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                  <div className="space-y-2 text-lg">
                    <p><strong>Location:</strong> Roscoe, Illinois</p>
                    <p><strong>Phone:</strong> 608.931.4726</p>
                    <p><strong>Email:</strong> Brandon@Zweifel.tech</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bzweifel/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">linkedin.com/in/bzweifel</a></p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
                  <p className="text-lg font-semibold text-blue-600">From Military Intelligence Officer to Senior Data & AI Executive.</p>
                  <p className="text-gray-700 leading-relaxed">
                    Senior data and AI executive who builds AI-augmented data organizations — teams, platforms, and cultures where LLM-powered agents and governed data infrastructure work together to multiply what a data team can deliver. Built and deployed seven production pipeline agents on AWS Strands Agents SDK, shifting a data organization from manual producers to agent-augmented reviewers. Architected and operationalized a six-layer enterprise data platform with semantic layer governance and metric certification across one of the nation's largest urgent care datasets. Led from the front: personally built production agents across Strands, LangGraph, and CrewAI; evaluated frameworks hands-on; and used that practitioner depth to drive architecture selection, team upskilling, and organizational readiness for an agentic future. Delivered $125M in post-M&A infrastructure cost reductions, contributed to a $500M to $1.2B valuation increase, and built a product research analytics practice the CEO called the highest-value function delivered internally.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Leadership Philosophy</h2>
                  <p className="text-lg text-gray-700">The future of data leadership is managing agents and reviewing output, not writing every line. Strong leadership builds both people and AI-augmented performance. By shaping strategy with data and empowering teams to work alongside intelligent agents, success becomes sustainable, scalable, and repeatable.</p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                  <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Current Role & Key Achievements</h2>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Sr. Director of Data Strategy & Analytics</strong> at Experity (2022 – Present), leading enterprise-wide data and AI initiatives.</li>
                      <li>Deployed <strong>seven domain-specialized pipeline agents</strong> to production on AWS Bedrock AgentCore with MCP tool integration — Source Discovery, Source Onboarding, Transformation Modeling, Metric Authoring, Semantic Materialization, Quality Investigation, and Dashboard Generation.</li>
                      <li>Transformed the data team's operating model from <strong>manual producers to agent-augmented reviewers</strong>: LLM agents produce first-draft dbt models, metric YAML definitions, quality tests, and documentation; engineers review and merge via pull requests.</li>
                      <li>Built and operationalized a <strong>six-layer enterprise data platform</strong> (Ingestion, Processing, Transformation, Metric Authoring, Semantic Layer, Delivery) on Snowflake using a strangler pattern.</li>
                      <li>Deployed <strong>dbt MetricFlow semantic layer</strong> materialized through CI/CD into Snowflake semantic views — Tableau, Node.js APIs, embedded analytics, and AI systems query a single governed endpoint.</li>
                      <li>Built a <strong>product research analytics practice</strong> delivering segmentation, correlation analysis, and operational insights — the CEO identified this as the highest-value function the analytics team delivered internally.</li>
                      <li>Presented <strong>data monetization strategy</strong> and platform roadmap directly to the CEO, securing executive alignment on treating the data platform as enterprise infrastructure.</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Education</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold">MBA, Specialization in Advanced Business Strategy Using AI and Analytics</p>
                        <p>Milwaukee School of Engineering</p>
                        <p className="text-gray-600 italic">Delta Mu Delta International Honor Society in Business, Pi Pi Chapter</p>
                      </div>

                      <div>
                        <p className="font-bold">Certificate, Advanced Business Strategy Using AI and Analytics</p>
                        <p>Milwaukee School of Engineering</p>
                      </div>

                      <div>
                        <p className="font-bold">B.S., Computer Science (Software Engineering, Architecture, Security)</p>
                        <p>University of Illinois Springfield</p>
                      </div>
                    </div>
                  </section>
                </div>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>

                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-bold">Sr. Director of Data Strategy & Analytics</h4>
                      <p className="text-gray-600 italic">Experity | 2022 – Present</p>
                      <p className="mt-2 text-sm font-semibold text-blue-600 mb-2">Building the AI-Augmented Data Organization</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Deployed seven domain-specialized pipeline agents to production on AWS Bedrock AgentCore with MCP tool integration, piloted on low-risk domains, then expanded across the pipeline.</li>
                        <li>Transformed the data team from manual producers to agent-augmented reviewers — LLM agents now produce first-draft dbt models, metric YAML definitions, quality tests, and documentation.</li>
                        <li>Built a production-ready source onboarding framework using agent-generated specialists with human-in-the-loop quality gates — designed to future-proof M&A integration.</li>
                        <li>Personally built and evaluated production agents across Strands Agents SDK, LangGraph, CrewAI, and OpenAI Agents SDK in a hands-on AI development lab. Framework evaluations drove the selection of Strands for the enterprise pipeline.</li>
                        <li>Ran organizational change management for the AI transition — established no-auto-merge guardrails, structured review quality standards, and built trust incrementally through low-stakes wins.</li>
                      </ul>
                      <p className="mt-3 text-sm font-semibold text-blue-600 mb-2">Enterprise Data Platform & Pipeline Delivery</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Built and operationalized a six-layer enterprise data platform on Snowflake using a strangler pattern — infrastructure in approximately one month, certified metrics delivered iteratively.</li>
                        <li>Shipped the Gold Model — canonical Kimball star schema resolving business entities across EMR/PM, Salesforce, and NetSuite through cross-system crosswalks.</li>
                        <li>Deployed dbt MetricFlow semantic layer materialized through CI/CD into Snowflake semantic views with pre-validation PR gates, eliminating per-dashboard metric rebuilding that consumed 30–40% of analyst capacity.</li>
                        <li>Implemented CDC pipelines (Kafka, Confluent Schema Registry, Debezium) with ingestion contracts enforcing schema validation at the platform boundary.</li>
                      </ul>
                      <p className="mt-3 text-sm font-semibold text-blue-600 mb-2">Product Analytics & Executive Leadership</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Built and led a team of 10+ (data engineers, analysts, Product Director).</li>
                        <li>Built a product research analytics practice — the CEO identified this as the highest-value function delivered internally, accelerating the shift to data-driven decision-making.</li>
                        <li>Launched the practice with the AI Scribe value analysis — quantified 12.4 minutes of documentation time savings per visit ($1.1M monthly impact) — shaping product pricing and go-to-market positioning.</li>
                        <li>Extended to Care Agent (patient-facing LLM for medical lab results), delivering adoption analysis and correlation studies tying feature usage to operational outcomes.</li>
                        <li>Presented data monetization strategy directly to the CEO, securing alignment on treating the data platform as enterprise infrastructure.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-bold">Director of Software Development</h4>
                      <p className="text-gray-600 italic">Experity | Jun 2016 – 2022</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Directed migration from legacy monolith to microservices on AWS (EKS, EC2, Lambda), eliminating $12M in annual maintenance costs.</li>
                        <li>Led post-M&A platform integration delivering $125M in infrastructure cost reductions and contributing to a valuation increase from $500M to $1.2B within two years.</li>
                        <li>Improved agile delivery processes, increasing development productivity by 30% and reducing time-to-market by 20%, contributing to $150M in additional annual revenue.</li>
                        <li>Built professional development frameworks that improved team productivity by 20% and drove retention across engineering and analytics teams.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-xl font-bold">Manager of Software Engineering</h4>
                      <p className="text-gray-600 italic">Fatwallet | Mar 2015 – Jun 2016</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Partnered with UX/UI to optimize the user interface, reducing clicks by 15% and driving $5M in additional annual revenue.</li>
                        <li>Led performance optimization that reduced website load times by 40% and increased user engagement by 20%.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="text-xl font-bold">Manager of Software Data Engineering</h4>
                      <p className="text-gray-600 italic">Supplycore | Aug 2012 – Feb 2015</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Deployed custom ERP solutions improving operational efficiency by 20% and saving clients $2.5M annually.</li>
                        <li>Built a real-time analytics reporting module, increasing customer satisfaction by 30% and generating $10M in additional revenue.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-6">
                      <h4 className="text-xl font-bold">Intelligence Analyst Officer</h4>
                      <p className="text-gray-600 italic">U.S. Army | Nov 2005 – Dec 2013</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Led strategic intelligence analytics during a 13-month Iraq deployment, delivering data-driven briefings to General officers that directly informed operational decisions and mission outcomes.</li>
                        <li>Directed cross-functional intelligence teams integrating multi-source data analysis with international partners, enhancing operational readiness and effectiveness.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Core Competencies</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">AI-Augmented Leadership</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>Agent-Augmented Operating Models</li>
                        <li>Agentic AI Architecture & Deployment</li>
                        <li>AI/ML Pipeline Design & MLOps</li>
                        <li>Organizational AI Transformation</li>
                        <li>Enterprise Data Platform Strategy</li>
                        <li>Product Research Analytics</li>
                        <li>Data Monetization</li>
                        <li>M&A Data Integration</li>
                        <li>Executive & CEO Stakeholder Management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4">Technical</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li><strong>AI/Agents:</strong> Strands Agents SDK, Bedrock AgentCore, LangChain/LangGraph, CrewAI, OpenAI Agents SDK, MCP</li>
                        <li><strong>RAG & Search:</strong> Qdrant, Vector Search</li>
                        <li><strong>Data Platform:</strong> Snowflake, Semantic Views, dbt & MetricFlow</li>
                        <li><strong>Streaming:</strong> Kafka, Schema Registry, CDC (Debezium)</li>
                        <li><strong>Architecture:</strong> Medallion, Kimball Modeling</li>
                        <li><strong>Languages:</strong> Python, SQL, Node.js</li>
                        <li><strong>Cloud:</strong> AWS (EKS, Lambda, Bedrock)</li>
                        <li><strong>BI:</strong> Tableau</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4">Domain</h4>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>Healthcare SaaS</li>
                        <li>EMR/EHR & Revenue Cycle Management</li>
                        <li>HIPAA-Compliant Analytics</li>
                        <li>Semantic Layer Architecture</li>
                        <li>Metric Certification & Governance</li>
                        <li>Multi-Agent Orchestration</li>
                        <li>Data-as-a-Product</li>
                        <li>AI/LLM Product Analytics</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Agentic AI — Practitioner Depth</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The enterprise agent architecture was informed by hands-on practitioner work — building, evaluating, and benchmarking agentic AI systems across multiple frameworks to make grounded architecture and tooling decisions. Built a local AI development platform orchestrating Ollama, vLLM, and Qdrant with three production agents: a Research Agent (LangGraph) delivering daily academic digests from six sources, an Email Agent (LangGraph) clustering and labeling 5,000+ emails, and a Knowledge Agent (Strands SDK) providing interactive RAG Q&A. Authored a curated 85+ resource guide covering architecture patterns, foundational research (ReAct, CoT, Tree of Thoughts, CoALA), production operations, and evaluation methodology — adopted as the team's onboarding standard.
                  </p>
                </section>

                <section className="text-center space-y-4 pt-8">
                  <h3 className="text-2xl font-bold">Let's Connect</h3>
                  <p className="text-gray-700">Want to discuss AI-augmented data strategy, technology leadership, or industry collaboration?</p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Contact Me</Button>
                  </Link>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
