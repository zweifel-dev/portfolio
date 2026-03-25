import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Database, FlaskConical, Layers, Handshake, Network, UsersRound, GraduationCap } from 'lucide-react';

const Projects = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Executive Portfolio</h1>
          <p className="text-xl leading-relaxed">Strategic initiatives delivering AI-augmented data organizations, enterprise platforms, and measurable business impact.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project 1: AI-Augmented Data Organization */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              AI Leadership
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-violet-100 rounded-lg mb-6">
                <Bot className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI-Augmented Data Organization</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> Deployed seven domain-specialized pipeline agents to production on AWS Bedrock AgentCore with MCP tool integration, transforming the data team's operating model from manual producers to agent-augmented reviewers. Engineers now review and merge LLM-generated dbt models, metric definitions, and quality tests via pull requests.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm font-semibold">7 Production Agents</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Operating Model Shift</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Human-in-the-Loop</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Strands Agents SDK</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">AWS Bedrock</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">MCP</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">dbt</span>
              </div>
              <Link to="/ai-augmented-data-org">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 2: Enterprise Data Platform */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Platform Architecture
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-lg mb-6">
                <Database className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Data Platform</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> Built and operationalized a six-layer enterprise data platform with semantic layer governance and metric certification on Snowflake. Deployed using a strangler pattern — iterative certified metric delivery reaching clients quickly. Eliminated per-dashboard metric rebuilding that consumed 30–40% of analyst capacity.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold">6-Layer Architecture</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">2-5 Day Metric Delivery</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Semantic Layer</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Snowflake</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">dbt MetricFlow</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Kafka CDC</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Kimball</span>
              </div>
              <Link to="/enterprise-data-platform">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 3: AI Development Lab */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Practitioner AI
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6">
                <FlaskConical className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Development Lab</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> Built a fully local AI development platform orchestrating Ollama, vLLM, and Qdrant with three production agents — Research Agent (LangGraph), Email Agent (LangGraph), and Knowledge Agent (Strands SDK). Framework evaluations here directly drove enterprise Strands SDK selection and agent architecture patterns. Authored an 85+ resource agentic AI guide adopted as the team's onboarding standard.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">3 Production Agents</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Framework Evaluations</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">85+ Resource Guide</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">LangGraph</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Strands SDK</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Ollama</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Qdrant</span>
              </div>
              <Link to="/ai-development-lab">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 4: Enterprise Data Transformation */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Data Modernization
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Layers className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Data Transformation</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> Led enterprise migration from legacy on-premises infrastructure to a modern cloud-native data stack (Snowflake, dbt/Coalesce, Tableau Cloud), laying the foundation for the six-layer enterprise data platform and AI agent integration that followed. This transformation proved critical for the subsequent private equity acquisition.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">$10M+ Annual Savings</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">60% Faster Insights</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Foundation for AI</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Snowflake</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">dbt/Coalesce</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Tableau Cloud</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Datadog</span>
              </div>
              <Link to="/enterprise-data-transformation">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 5: M&A Integration Strategy */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Strategic Leadership
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-lg mb-6">
                <Handshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">M&A Integration & Platform Consolidation</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> Led post-M&A platform integration (DocuTAP + Practice Velocity = Experity) delivering $125M in infrastructure cost reductions and contributing to a valuation increase from $500M to $1.2B. Directed migration from legacy monolith to microservices on AWS (EKS, EC2, Lambda).
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">$125M Cost Reductions</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">$500M to $1.2B Valuation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">24-Month Integration</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">M&A Integration</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">AWS Microservices</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Platform Consolidation</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Cost Optimization</span>
              </div>
              <Link to="/ma-integration-strategy">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 6: DELTA Framework */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Organizational Transformation
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                <Network className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DELTA Framework & Data Culture</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> Implemented the DELTA Plus framework to transform the merged organization into a data-driven healthcare technology leader. This cultural transformation — from reactive reporting to certified metric governance — laid the organizational foundation for the subsequent AI-augmented operating model.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Enterprise-Wide Adoption</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Data Literacy +40%</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Foundation for AI</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">DELTA Framework</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Data Governance</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Culture Change</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Analytics Strategy</span>
              </div>
              <Link to="/delta-framework-implementation">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 7: Team Scaling */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Leadership Excellence
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-teal-100 rounded-lg mb-6">
                <UsersRound className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">High-Performance Team Scaling</h3>
              <p className="text-gray-700 mb-6">
                Built and scaled data and engineering teams from 15 to 65+ professionals through M&A integration, then led the team through the AI transition — shifting the operating model from manual producers to agent-augmented reviewers while maintaining retention and building new AI capabilities across the team.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">15 to 65+ Team</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">15% Retention Increase</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">AI Transition Led</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Team Leadership</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">AI Upskilling</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">DEI Initiatives</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Change Management</span>
              </div>
              <Link to="/team-scaling-leadership">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 8: M&A Feature Parity Analysis */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Academic Research
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-lg mb-6">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">M&A Feature Parity Analysis</h3>
              <p className="text-gray-700 mb-6">
                MBA coursework analyzing the Warburg Pincus acquisition that formed Experity — demonstrating strategic analytical frameworks for technology integration decisions, cost-benefit analysis, and stakeholder alignment strategies during merger and acquisition processes.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">MBA Research</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Strategic Analysis</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Cost-Benefit Analysis</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Academic Framework</span>
              </div>
              <Link to="/ma-feature-parity">
                <Button variant="outline" className="w-full">View Analysis</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default Projects;
