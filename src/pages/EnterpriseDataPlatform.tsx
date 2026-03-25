import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Layers, Server, Zap, BarChart3, Shield, TrendingUp, Mail, FolderOpen, GitBranch, Clock, CheckCircle, Users, ArrowRight, Target, AlertTriangle, Settings, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const EnterpriseDataPlatform: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Data Platform</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Delivering Certified Metrics in Days, Not Months — Recovering 30-40% of Analyst Capacity
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header Metadata */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise Data Platform
              </h1>
              <p className="text-lg text-blue-600 font-medium mb-6">
                Built and operationalized a six-layer enterprise data platform on Snowflake, delivering certified metrics iteratively through a strangler pattern with value reaching consumers in weeks, not months.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>Platform: Snowflake, dbt MetricFlow, Kafka CDC</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>Architecture: Six-Layer Enterprise Model</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className="w-4 h-4" />
                  <span>Delivery: Strangler Pattern, Iterative Metric Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Impact: 2-5 Day New Metric Delivery</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Built and operationalized a six-layer enterprise data platform — Ingestion, Processing, Transformation, Metric Authoring, Semantic Layer, and Delivery — on Snowflake. The platform was delivered using a strangler pattern: infrastructure stood up in approximately one month, then certified metrics delivered iteratively based on prioritized consumption needs.
                </p>
                <p>
                  Value reached internal and external clients quickly rather than waiting for a monolithic launch. The platform continuously expands based on prioritized consumption needs — it is an ongoing enterprise capability, not a project with a fixed end date.
                </p>
              </div>
            </section>

            {/* How the Platform Delivers Value — The Six Layers */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Platform Delivers Value</h2>
              <p className="mb-6">
                The platform is organized into six distinct layers, each with clear responsibilities, contracts, and ownership. This separation of concerns ensures that changes in one layer do not cascade unpredictably through the system.
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Layer 1: Ingestion Layer</h4>
                  </div>
                  <p className="text-sm mb-3">
                    CDC pipelines via Kafka, Confluent Schema Registry, and Debezium. Ingestion contracts enforce schema validation at the platform boundary. Upstream change notification protocols require source system teams to notify the data team before deploying schema changes.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Kafka + Debezium:</strong> Real-time change data capture from source systems</li>
                    <li><strong>Confluent Schema Registry:</strong> Schema evolution management and contract enforcement</li>
                    <li><strong>Ingestion Contracts:</strong> Formal agreements governing schema validation at the platform boundary</li>
                    <li><strong>Upstream Notification Protocols:</strong> Source system teams notify before deploying schema changes</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Layer 2: Processing Layer</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Raw data landing, deduplication, and initial quality checks. Automated quality tests catch issues at ingestion before they propagate downstream.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Raw Landing Zone:</strong> Unmodified source data preserved for auditability</li>
                    <li><strong>Deduplication:</strong> Automated removal of duplicate records from CDC streams</li>
                    <li><strong>Quality Gates:</strong> Automated quality tests catch issues at ingestion</li>
                    <li><strong>Schema Validation:</strong> Structural integrity checks before downstream processing</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Layer 3: Transformation Layer</h4>
                  </div>
                  <p className="text-sm mb-3">
                    dbt-based transformations producing the Gold Model. One fix in the transformation layer corrects every downstream consumer automatically — eliminating the dashboard-by-dashboard remediation chase that previously consumed significant engineering time.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>dbt Core:</strong> Version-controlled, testable SQL transformations</li>
                    <li><strong>Gold Model Production:</strong> Canonical Kimball star schema output</li>
                    <li><strong>Single-Fix Propagation:</strong> One correction automatically flows to all downstream consumers</li>
                    <li><strong>Automated Testing:</strong> Data quality tests integrated into CI/CD pipelines</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Layer 4: Metric Authoring Layer</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Metric definitions in YAML via dbt MetricFlow. The Metric Certification Lifecycle manages new metrics from definition through stakeholder alignment to production certification.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>YAML Metric Definitions:</strong> Declarative metric specifications in code</li>
                    <li><strong>dbt MetricFlow:</strong> Semantic metric framework with dimension and measure management</li>
                    <li><strong>Certification Lifecycle:</strong> Formal workflow from definition through stakeholder alignment to production</li>
                    <li><strong>Version Control:</strong> All metric definitions tracked in Git with full audit history</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-cyan-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-cyan-600" />
                    <h4 className="font-bold text-lg">Layer 5: Semantic Layer</h4>
                  </div>
                  <p className="text-sm mb-3">
                    dbt MetricFlow semantic layer materialized through CI/CD into Snowflake semantic views with pre-validation PR gates. Tableau, Node.js APIs, embedded analytics, and AI systems query a single governed endpoint — eliminating per-dashboard metric rebuilding that previously consumed 30-40% of analyst capacity.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>CI/CD Materialization:</strong> Semantic views deployed through automated pipelines with PR gates</li>
                    <li><strong>Single Governed Endpoint:</strong> All consumers query the same certified metric definitions</li>
                    <li><strong>Multi-Consumer Support:</strong> Tableau, Node.js APIs, embedded analytics, and AI systems</li>
                    <li><strong>Capacity Recovery:</strong> Eliminated per-dashboard metric rebuilding (previously 30-40% of analyst time)</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-red-500">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-lg">Layer 6: Delivery Layer</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Certified metrics served to dashboards, APIs, embedded analytics, and AI agent consumers through the governed semantic endpoint.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Dashboards:</strong> Certified visualizations built on governed metrics</li>
                    <li><strong>APIs:</strong> Node.js services exposing metrics to internal and external applications</li>
                    <li><strong>Embedded Analytics:</strong> Metrics surfaced directly within product workflows</li>
                    <li><strong>AI Agent Consumers:</strong> AI systems access the same governed endpoint as human consumers</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Unified Business Entity Model */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Single Source of Truth for Business Entities</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  The Gold Model is a canonical Kimball star schema resolving business entities across EMR/PM, Salesforce, and NetSuite through cross-system crosswalks. This is the single source of truth for business entities across the organization.
                </p>
              </div>

              <Card className="p-6 mt-4">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-lg">Cross-System Entity Resolution</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li><strong>Kimball Star Schema:</strong> Canonical dimensional model optimized for analytical queries</li>
                  <li><strong>Cross-System Crosswalks:</strong> Entity resolution across EMR/PM, Salesforce, and NetSuite</li>
                  <li><strong>Single Source of Truth:</strong> One authoritative representation of every business entity</li>
                  <li><strong>Conformed Dimensions:</strong> Shared dimensional definitions ensuring consistency across all fact tables</li>
                  <li><strong>Slowly Changing Dimensions:</strong> Historical tracking of entity attribute changes over time</li>
                </ul>
              </Card>
            </section>

            </ScrollReveal>

            {/* Pipeline Resilience & Cross-Team Governance */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pipeline Resilience & Cross-Team Governance</h2>
              <p className="mb-6">
                Formal contracts between source systems and the data platform eliminated the fragility that previously caused multi-week blocking incidents, reducing resolution time from weeks to same-day.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Ingestion Infrastructure</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Kafka + Confluent Schema Registry + Debezium for change data capture</li>
                    <li>• Ingestion contracts enforcing schema validation at the platform boundary</li>
                    <li>• Automated schema drift detection and alerting</li>
                    <li>• Replay capabilities for recovery from upstream incidents</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Cross-Team Protocols</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Partnered with Product Engineering to implement upstream change notification protocols</li>
                    <li>• Source system teams notify before deploying schema changes</li>
                    <li>• Eliminated dashboard-by-dashboard remediation chase</li>
                    <li>• One fix in the transformation layer corrects every downstream consumer automatically</li>
                  </ul>
                </Card>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mt-6">
                <p className="text-lg font-medium text-gray-700">
                  <strong>Result:</strong> Reduced pipeline fragility from multi-week blocking CDC incidents to same-day resolution.
                </p>
              </div>
            </section>

            </ScrollReveal>

            {/* Metric Certification Lifecycle */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Metric Certification Lifecycle</h2>
              <p className="mb-6">
                The metric certification lifecycle transformed how the organization defines, validates, and trusts its key performance indicators. Formal definition workshops replaced competing spreadsheet-driven KPIs with certified governed metrics.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Delivery Speed</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Cut new metric delivery time from weeks to 2-5 days on established domains. The combination of the Gold Model, semantic layer, and YAML-based metric definitions means new metrics build on proven foundations rather than starting from scratch.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Stakeholder Alignment</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Formal definition workshops with Finance, Product, and Operations leadership to replace competing spreadsheet-driven KPIs with certified governed metrics. Eliminated conflicting figures in executive meetings — Finance, Product, Ops, and the C-suite now reference the same numbers.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Continuous Expansion</h4>
                  </div>
                  <p className="text-sm mb-3">
                    The platform continuously expands based on prioritized consumption needs — it is an ongoing enterprise capability, not a project with a fixed end date. Each new domain follows the same certification lifecycle, building institutional muscle memory for metric governance.
                  </p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Delivery Pattern */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Delivery Pattern</h2>
              <p className="mb-6">
                The strangler pattern allowed the platform to deliver value incrementally while systematically replacing legacy data flows. This approach de-risked the transformation and built organizational confidence through early wins.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "Infrastructure stood up in approximately one month, certified metrics delivered iteratively. Value reaches internal and external clients quickly rather than waiting for a monolithic launch."
                </blockquote>
                <cite className="text-sm text-gray-600">— On the Delivery Approach</cite>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Strangler Pattern Execution</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Infrastructure stood up in approximately one month</li>
                    <li>• Certified metrics delivered iteratively based on prioritized needs</li>
                    <li>• Legacy flows replaced incrementally, not all at once</li>
                    <li>• Each iteration validated before the next domain onboarded</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Cross-Functional Analytics Board</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Product, Finance, Operations, and Client Success representation</li>
                    <li>• Evaluates and sequences data requests against strategic priorities</li>
                    <li>• Every request maps to a platform layer and a named consumer before acceptance</li>
                    <li>• Replaced ad-hoc request culture with lifecycle discipline</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Culture & Governance */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Culture & Governance</h2>
              <p className="mb-6">
                The platform transformation was not just a technology change — it fundamentally shifted how the analytics organization operates and how the broader company consumes data.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">From Dashboard Factory to Metric-Certified Operation</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Shifted the analytics organization from a dashboard factory — where analysts rebuilt the same logic across dozens of dashboards — to a metric-certified operation. Analysts now own metric definitions, run stakeholder alignment workshops, and certify KPIs rather than perpetually rebuilding visualizations.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Reuse Without Re-Engineering</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Any downstream consumer — dashboard, API, AI model — reuses certified metrics without re-engineering. The semantic layer guarantees that every consumer sees the same number, calculated the same way, with the same business logic applied.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Lifecycle Discipline</h4>
                  </div>
                  <p className="text-sm mb-3">
                    Replaced ad-hoc request culture with lifecycle discipline. Every data request follows a defined path: intake, prioritization by the Analytics Board, mapping to a platform layer, assignment to a named consumer, certification, and ongoing governance.
                  </p>
                </Card>
              </div>
            </section>

            {/* Business Impact */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Impact</h2>

              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Quantified Outcomes</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">30-40% Analyst Capacity Recovered</span>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">2-5 Day New Metric Delivery</span>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Same-Day CDC Incident Resolution</span>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">Single Governed Endpoint for All Consumers</span>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Operational Efficiency Gains</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Analyst Capacity:</strong> Eliminated per-dashboard metric rebuilding that consumed 30-40% of analyst time</li>
                    <li><strong>Metric Delivery:</strong> New metric delivery reduced from weeks to 2-5 days on established domains</li>
                    <li><strong>Incident Resolution:</strong> CDC incidents reduced from multi-week blocking events to same-day resolution</li>
                    <li><strong>Stakeholder Alignment:</strong> Eliminated conflicting figures in executive meetings</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Strategic Business Value</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Single Source of Truth:</strong> Finance, Product, Ops, and C-suite reference the same numbers</li>
                    <li><strong>Consumer Flexibility:</strong> Dashboards, APIs, embedded analytics, and AI systems all use the same governed endpoint</li>
                    <li><strong>Continuous Expansion:</strong> Platform grows based on prioritized consumption needs</li>
                    <li><strong>Organizational Maturity:</strong> Analytics team shifted from dashboard factory to metric-certified operation</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Strategic Judgment & Lessons Learned */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Judgment & Lessons Learned</h2>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Vendor Strategy Reflection</h4>
                  </div>
                  <p className="mb-2 text-sm">
                    <strong>Context:</strong> Inherited a three-year Tableau contract renewal without evaluating it against the platform's strategic direction.
                  </p>
                  <p className="mb-2 text-sm">
                    <strong>Lesson:</strong> Recognized in hindsight that the future for a SaaS platform is not a separate BI product but a unified platform with embedded analytics. The renewal locked in a tool that may not align with where the platform needs to go.
                  </p>
                  <p className="text-green-600 font-medium text-sm">
                    <strong>Application:</strong> Applied that lesson to subsequent vendor and architecture decisions — every tool choice is now evaluated against the platform's long-term embedded analytics direction.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Governance as an Operating Model</h4>
                  </div>
                  <p className="mb-2 text-sm">
                    <strong>Context:</strong> The analytics organization historically operated as a request-response service desk, producing dashboards on demand without lifecycle governance.
                  </p>
                  <p className="mb-2 text-sm">
                    <strong>Action:</strong> Stood up a cross-functional Analytics Board that replaced ad-hoc request culture with lifecycle discipline — every request maps to a platform layer and a named consumer before acceptance.
                  </p>
                  <p className="text-green-600 font-medium text-sm">
                    <strong>Result:</strong> The board creates institutional alignment on priorities and ensures the platform invests in the highest-value work, not just the loudest requests.
                  </p>
                </Card>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Continue Exploring</h3>
              <p className="mb-6">
                This case study covers the enterprise data platform architecture and delivery approach. Related case studies cover the broader data transformation, team scaling, and AI-augmented analytics capabilities built on this platform.
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
                    <Database className="w-4 h-4 mr-2" />
                    Enterprise Data Transformation
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
                <Badge variant="secondary">Data Platform</Badge>
                <Badge variant="secondary">Snowflake</Badge>
                <Badge variant="secondary">dbt MetricFlow</Badge>
                <Badge variant="secondary">Kafka</Badge>
                <Badge variant="secondary">CDC</Badge>
                <Badge variant="secondary">Semantic Layer</Badge>
                <Badge variant="secondary">Metric Certification</Badge>
                <Badge variant="secondary">Kimball</Badge>
                <Badge variant="secondary">Enterprise Architecture</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDataPlatform;
