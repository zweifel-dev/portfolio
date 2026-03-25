import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Research = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl leading-relaxed">Agentic AI, Enterprise Data Platforms, Healthcare Analytics, and Financial Market Research</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Research Interests</h2>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Agentic AI & AI-Augmented Organizations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Primary research focus on building and deploying agentic AI systems that transform how data teams operate. This work spans framework evaluation, production agent architecture, and organizational change management for AI adoption.
                  </p>

                  <Card className="bg-gradient-to-r from-violet-50 to-blue-50 border border-violet-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Agentic AI Resource Guide</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Authored a curated 85+ resource guide covering architecture patterns, foundational research (ReAct, Chain of Thought, Tree of Thoughts, CoALA), production operations, and evaluation methodology. Spans Strands, LangChain/LangGraph, OpenAI, CrewAI, Ollama, MCP, tools, and context management. Adopted as the team's onboarding standard for the AI transition.
                      </p>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-violet-600">85+</div>
                          <div className="text-sm text-gray-600">Curated Resources</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">14</div>
                          <div className="text-sm text-gray-600">Sections</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">6+</div>
                          <div className="text-sm text-gray-600">Frameworks Covered</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Research Areas:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Framework evaluation: Strands Agents SDK vs LangGraph vs CrewAI vs OpenAI Agents SDK</li>
                      <li>Production agent architecture patterns (model-driven loops, graph pipelines, multi-agent orchestration)</li>
                      <li>Human-in-the-loop quality gates for agent-generated code and documentation</li>
                      <li>MCP tool integration and agent composability</li>
                      <li>Organizational change management for AI-augmented operating models</li>
                      <li>Local AI infrastructure: model routing, RAG patterns, vector search optimization</li>
                      <li>LLM provider comparison for local agent workstations (cloud vs. local vs. hybrid inference)</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <Link to="/ai-development-lab">
                      <Button>View AI Development Lab Case Study</Button>
                    </Link>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">AI/ML in Healthcare SaaS</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Applied research into AI and ML products within healthcare technology, including product analytics practices that quantify the business value of AI-powered clinical tools.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li><strong>AI Scribe Value Analysis:</strong> Quantified 12.4 minutes of documentation time savings per visit ($1.1M monthly impact) — shaped product pricing and go-to-market positioning</li>
                    <li><strong>Care Agent Analytics:</strong> Adoption analysis and correlation studies for a patient-facing LLM delivering medical lab results, tying feature usage to operational outcomes</li>
                    <li><strong>Product Research Analytics:</strong> Segmentation, correlation analysis, and operational insights delivered to customer success managers and internal leadership</li>
                    <li>Predictive analytics for patient flow optimization</li>
                    <li>Real-time analytics for clinical decision support</li>
                    <li>Data governance and privacy in HIPAA-compliant medical systems</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Enterprise Data Platform Architecture</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Research into modern enterprise data platform design, semantic layer governance, and metric certification:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Six-layer enterprise data platform architecture (Ingestion through Delivery)</li>
                    <li>Semantic layer governance with dbt MetricFlow</li>
                    <li>Metric Certification Lifecycle and stakeholder alignment processes</li>
                    <li>CDC pipeline design with Kafka, Schema Registry, and Debezium</li>
                    <li>Strangler pattern for platform migration vs. monolithic launches</li>
                    <li>Cross-system entity resolution (Kimball star schema with crosswalks)</li>
                  </ul>
                  <div className="text-center mt-4">
                    <Link to="/enterprise-data-platform">
                      <Button variant="outline">View Enterprise Data Platform Case Study</Button>
                    </Link>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Data Culture & Organizational Transformation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Research into building sustainable data cultures that enable both human and AI-augmented decision-making:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>DELTA framework implementation for data-driven organizations</li>
                    <li>Cultural change management — from dashboard factory to metric-certified operation</li>
                    <li>Executive leadership alignment on data strategy and governance</li>
                    <li>Measuring data maturity and ROI of analytics investments</li>
                    <li>Building the organizational foundation required for AI agent adoption</li>
                  </ul>
                </section>

              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Research;
