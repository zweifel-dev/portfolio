import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Bot, Cloud, Target, Search, Upload, GitBranch, BarChart3, Layers, Shield, Zap, ArrowRight, ArrowLeftRight, Users, CheckCircle, Wrench, Mail, FolderOpen, FlaskConical, Cpu, Eye, BookOpen, Puzzle, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AIAugmentedDataOrg: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-600 to-violet-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI-Augmented Data Organization</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Transforming a Data Team from Manual Producers to Agent-Augmented Reviewers
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Augmented Data Organization
              </h1>
              <p className="text-lg text-violet-600 font-medium mb-6">
                Senior data and AI executive who deployed seven domain-specialized pipeline agents to production, shifting the team's operating model from manual build capacity to agent-augmented review capacity — a fundamentally better bottleneck.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Timeline: 2024–2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  <span>Platform: AWS Bedrock AgentCore, Strands Agents SDK</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Scope: Enterprise Pipeline Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span>Impact: 7 Production Agents Deployed</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  As a senior data and AI executive, I transformed a data organization's operating model by deploying seven domain-specialized pipeline agents to production. LLM agents now produce first-draft dbt models, metric YAML definitions, quality tests, and documentation. Engineers review and merge via pull requests.
                </p>
                <p>
                  The team's constraint shifted from <strong>build capacity</strong> to <strong>review capacity</strong> — a fundamentally better bottleneck. Review is faster than creation and preserves quality judgment at every merge point.
                </p>
              </div>
            </section>

            {/* Vision & Strategy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vision & Strategy</h2>
              <div className="bg-violet-50 border-l-4 border-violet-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "The goal was not to replace the team but to multiply what they can deliver."
                </blockquote>
                <cite className="text-sm text-gray-600">— On the AI-Augmented Operating Model</cite>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  By positioning LLM agents as first-draft producers and engineers as reviewers, the team operates at higher throughput while maintaining quality through human judgment at every merge point. The agents handle the repetitive scaffolding — generating dbt models from source schemas, writing metric YAML, producing quality tests — while engineers focus on what they do best: reviewing correctness, enforcing business logic, and making judgment calls that require context no model has.
                </p>
                <p>
                  This is not an automation story. This is a leverage story. Every engineer now has an AI pair that drafts the first version. The engineer's role shifts from writer to editor — and editors operate at multiples of writer throughput.
                </p>
              </div>
            </section>

            {/* Production Pipeline Agents */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Production Pipeline Agents</h2>
              <p className="mb-6">
                Seven domain-specialized agents deployed on AWS Bedrock AgentCore with MCP tool integration. Each agent was piloted on low-risk domains, validated under production review rigor, then expanded across the pipeline:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-violet-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-6 h-6 text-violet-600" />
                    <h4 className="font-bold text-lg">Source Discovery Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Identifies and catalogs new data sources for integration. Scans available systems, documents schemas, and produces integration readiness assessments for engineer review.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Upload className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Source Onboarding Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Generates onboarding specifications using agent-generated specialists with human-in-the-loop quality gates. Company- and industry-agnostic by design, future-proofing M&A integration.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Transformation Modeling Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Produces first-draft dbt transformation models from source schemas. Generates staging, intermediate, and mart layer models with appropriate materializations and tests.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-yellow-600" />
                    <h4 className="font-bold text-lg">Metric Authoring Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Generates metric YAML definitions and documentation. Produces semantically correct metric specs aligned with the organization's metric layer standards and naming conventions.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Semantic Materialization Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Manages semantic layer materialization into Snowflake semantic views. Ensures consistent definitions propagate from the metric layer to the consumption layer.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-lg">Quality Investigation Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Investigates data quality issues and generates quality tests. Performs root cause analysis on anomalies and produces dbt tests and documentation for engineer review.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Dashboard Generation Agent</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Creates dashboard specifications and initial implementations. Generates layout definitions, metric selections, and filter configurations based on stakeholder requirements.
                  </p>
                </Card>
              </div>
            </section>

            {/* Operating Model Transformation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Operating Model Transformation</h2>
              <p className="mb-6">
                The deployment of pipeline agents fundamentally changed how the data team operates — shifting the bottleneck from build capacity to review capacity:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-red-50 border-l-4 border-red-400">
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowLeftRight className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-lg">Before: Manual Producers</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Engineers wrote every dbt model from scratch</li>
                    <li>• Every metric definition was manually authored</li>
                    <li>• Quality tests were hand-written for each pipeline</li>
                    <li>• Documentation was a separate manual effort</li>
                    <li>• <strong>Build capacity was the bottleneck</strong> — the team could only deliver as fast as they could write</li>
                  </ul>
                </Card>

                <Card className="p-6 bg-green-50 border-l-4 border-green-400">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">After: Agent-Augmented Reviewers</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• LLM agents produce first-draft dbt models</li>
                    <li>• Metric YAML definitions are agent-generated</li>
                    <li>• Quality tests are drafted by investigation agents</li>
                    <li>• Documentation is produced alongside every artifact</li>
                    <li>• <strong>Review capacity is the bottleneck</strong> — fundamentally better because review is faster than creation and preserves quality judgment</li>
                  </ul>
                </Card>
              </div>

              <Card className="p-6 mt-6">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowRight className="w-6 h-6 text-violet-600" />
                  <h4 className="font-bold text-lg">The Key Insight</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Review capacity is a fundamentally better bottleneck than build capacity. An engineer reviewing an agent-generated dbt model can approve, refine, or reject in a fraction of the time it takes to write from scratch. The quality bar stays the same — every merge requires human approval — but the throughput multiplier is significant. Engineers spend their cognitive budget on judgment, not scaffolding.
                </p>
              </Card>
            </section>

            {/* Framework Evaluation & Selection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Framework Evaluation & Selection</h2>
              <p className="mb-6">
                Built and evaluated production agents across multiple frameworks in a hands-on AI development lab. Framework evaluations conducted in the AI Lab directly drove the selection for the enterprise pipeline and informed the architectural patterns the team adopted:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-violet-500">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-violet-600" />
                    <h4 className="font-bold text-lg">Strands Agents SDK (AWS) — Selected for Enterprise Pipeline</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Selected as the primary framework for the enterprise pipeline agents. Model-driven tool loops align with how the team thinks about data pipelines. Native AWS integration with Bedrock and AgentCore eliminates infrastructure overhead.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Strengths:</strong> Native AWS integration, MCP tool support, model-driven agent loops, production-ready deployment via AgentCore</li>
                    <li><strong>Use Case:</strong> All seven production pipeline agents</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <FlaskConical className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">LangGraph — Used in AI Lab</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Deployed for structured pipeline agents in the AI development lab including Research Agent and Email Agent. Best suited for graph-based multi-step workflows where explicit state management matters.
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li><strong>Strengths:</strong> Graph-based workflow orchestration, explicit state management, strong debugging tooling</li>
                    <li><strong>Use Case:</strong> Research Agent, Email Agent in the AI Lab</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-gray-400">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-gray-600" />
                    <h4 className="font-bold text-lg">CrewAI — Evaluated</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Evaluated for multi-agent orchestration patterns. Useful mental model for role-based agent collaboration, evaluated as part of the comprehensive framework assessment.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-gray-400">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench className="w-6 h-6 text-gray-600" />
                    <h4 className="font-bold text-lg">OpenAI Agents SDK — Evaluated</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Evaluated for comparison benchmarking against the AWS-native stack. Provided useful baseline measurements for agent performance and capability comparisons.
                  </p>
                </Card>
              </div>
            </section>

            {/* Change Management */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Change Management</h2>
              <p className="mb-6">
                Deploying agents is a technology problem. Getting a team to trust and adopt them is a people problem. The change management strategy was as deliberate as the technical architecture:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-violet-600" />
                    <h4 className="font-bold text-lg">Organizational Change Management</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Ran organizational change management for the AI transition — teaching the team that the future of individual contribution is managing agents and reviewing output, not writing every line. This required reframing what "engineering work" means in an agent-augmented world.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Mindset Shift:</strong> Repositioned agent output review as a high-value engineering skill, not a reduction in responsibility</li>
                    <li><strong>Skill Preservation:</strong> Maintained hands-on engineering work alongside agent usage to keep technical skills sharp</li>
                    <li><strong>Career Framing:</strong> Demonstrated that agent management and output curation are the future of senior individual contribution</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Guardrails & Quality Standards</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>No-Auto-Merge Policy:</strong> Every agent output goes through human review before merge — this is a deliberate design choice, not a temporary limitation</li>
                    <li><strong>Review Quality Standards:</strong> Structured review checklists ensure consistent evaluation of agent-generated artifacts</li>
                    <li><strong>Hands-On Engineering:</strong> Preserved dedicated time for manual engineering to maintain and build technical skills</li>
                    <li><strong>Feedback Loops:</strong> Agent outputs that fail review are fed back into prompt refinement and tool calibration</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <RefreshCw className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Incremental Trust Building</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Low-Stakes Pilots:</strong> Started with low-risk domains where agent errors had minimal blast radius</li>
                    <li><strong>Production Validation:</strong> Validated every agent under full production review rigor before expanding scope</li>
                    <li><strong>Gradual Expansion:</strong> Only expanded agents to higher-stakes domains after demonstrating consistent quality in low-risk areas</li>
                    <li><strong>Transparent Metrics:</strong> Shared agent acceptance rates, revision rates, and time savings openly with the team</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Architecture Decisions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Architecture Decisions</h2>
              <p className="mb-6">
                Three core architectural decisions shaped the agent platform. Each was made deliberately, with clear rationale:
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Decision: Why Strands Agents SDK</h4>
                  <p className="mb-2"><strong>Challenge:</strong> Needed a framework that integrates natively with AWS infrastructure (Bedrock, AgentCore) without requiring custom orchestration layers.</p>
                  <p className="mb-2"><strong>Solution:</strong> Strands Agents SDK provides model-driven agent loops with native MCP tool support and direct AgentCore deployment. The framework aligns with how the team already thinks about data pipelines — as sequences of tool-augmented transformations.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Production agents deployed directly to AgentCore with minimal infrastructure overhead. MCP tools are composable and reusable across agents.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Decision: Why MCP (Model Context Protocol)</h4>
                  <p className="mb-2"><strong>Challenge:</strong> Agent tools needed to be composable and swappable without rewriting adapters each time a tool or model changed.</p>
                  <p className="mb-2"><strong>Solution:</strong> MCP provides a standardized tool integration protocol. Each tool (dbt CLI, Snowflake queries, GitHub API, metric validators) is exposed through MCP, making agents composable by design.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> New tools can be added to any agent without rewriting integration code. Tool adapters are shared across the agent fleet, reducing maintenance burden.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Decision: Why Human-in-the-Loop</h4>
                  <p className="mb-2"><strong>Challenge:</strong> Agent-generated code and configurations must meet production quality standards. Auto-merge introduces unacceptable risk to data pipeline integrity.</p>
                  <p className="mb-2"><strong>Solution:</strong> Quality gates at every merge point ensure agent output meets production standards. No auto-merge — this is a deliberate design choice, not a limitation. Every pull request opened by an agent requires human review and approval.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Zero production incidents from agent-generated code. Team confidence in agents increased steadily as they verified quality through review. The review process itself became a training mechanism for understanding agent capabilities.</p>
                </Card>
              </div>
            </section>

            {/* Technical Stack */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Stack & Integration</h2>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-violet-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Cloud className="w-6 h-6 text-violet-600" />
                    <h4 className="font-bold text-lg">AWS Bedrock AgentCore</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Agent Hosting:</strong> Managed runtime for all seven production agents with auto-scaling</li>
                    <li><strong>Model Access:</strong> Bedrock foundation models powering agent reasoning and generation</li>
                    <li><strong>Security:</strong> IAM-based access controls and VPC integration for enterprise security requirements</li>
                    <li><strong>Monitoring:</strong> CloudWatch integration for agent performance and error tracking</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Puzzle className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">MCP Tool Integration</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>dbt CLI Tools:</strong> Model generation, test creation, documentation writing via MCP</li>
                    <li><strong>Snowflake Tools:</strong> Schema introspection, query execution, view management</li>
                    <li><strong>GitHub Tools:</strong> Pull request creation, branch management, code review workflows</li>
                    <li><strong>Metric Tools:</strong> YAML validation, semantic layer interaction, metric registry updates</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Pipeline Integration</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Git Workflow:</strong> Agents create feature branches and open pull requests for human review</li>
                    <li><strong>CI/CD Integration:</strong> Agent-generated code runs through the same CI/CD pipelines as human-authored code</li>
                    <li><strong>Quality Gates:</strong> Automated tests validate agent output before human review begins</li>
                    <li><strong>Feedback Loop:</strong> Review outcomes feed back into agent prompt refinement</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Explore Related Work</h3>
              <p className="mb-6">
                This case study covers the organizational and technical transformation of a data team through AI agent deployment. Related case studies cover the enterprise data platform these agents operate on and the AI development lab where the frameworks were evaluated.
              </p>

              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Discuss This Work
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/enterprise-data-transformation">
                    <Layers className="w-4 h-4 mr-2" />
                    Enterprise Data Platform
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    View Other Projects
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Agentic AI</Badge>
                <Badge variant="secondary">Strands Agents SDK</Badge>
                <Badge variant="secondary">AWS Bedrock</Badge>
                <Badge variant="secondary">MCP</Badge>
                <Badge variant="secondary">dbt</Badge>
                <Badge variant="secondary">Pipeline Automation</Badge>
                <Badge variant="secondary">Operating Model</Badge>
                <Badge variant="secondary">Change Management</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AIAugmentedDataOrg;
