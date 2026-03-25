import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Database, Cloud, DollarSign, Server, AlertTriangle, Snowflake, GitBranch, BarChart3, Eye, Shield, Zap, TrendingUp, Mail, Layers, FolderOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const EnterpriseDataTransformation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Data Transformation</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Modern Data Stack Migration — Foundation for the AI-Augmented Enterprise at Experity
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Enterprise Data Stack Modernization
              </h1>
              <p className="text-lg text-blue-600 font-medium mb-6">
                Leading the technical transformation from legacy monolith systems to a modern, cloud-native data architecture that delivers $10M+ in annual savings and 60% faster insights.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Timeline: 18-Month Implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  <span>Migration: Legacy to Modern Data Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cloud className="w-4 h-4" />
                  <span>Platform: Snowflake, dbt/Coalesce, Tableau Cloud</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Impact: $10M+ Annual Savings</span>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  As Sr. Director of Data Strategy & Analytics at Experity, I led the enterprise-wide migration from legacy data infrastructure to a modern, cloud-native data stack. This comprehensive transformation involved migrating from disparate on-premises systems to an integrated Snowflake, dbt/Coalesce, and Tableau Cloud architecture serving over 4,000 healthcare practices.
                </p>
                <p>
                  The project delivered transformational results: <strong>$10M+ in annual cost savings</strong>, <strong>60% faster time-to-insight</strong>, and enabled real-time analytics capabilities that directly support patient care and operational efficiency across our healthcare technology platform.
                </p>
                <p>
                  This transformation laid the critical foundation for the six-layer enterprise data platform and AI agent integration that followed — without modern cloud infrastructure, the agent-augmented operating model would not have been possible.
                </p>
              </div>
            </section>

            {/* Technical Challenge */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Challenge & Legacy Architecture</h2>
              <p className="mb-6">
                Prior to the transformation, Experity operated on a complex legacy infrastructure inherited from the Practice Velocity and DocuTAP merger:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-lg">Legacy Infrastructure Issues</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• On-premises SQL Server data warehouses with limited scalability</li>
                    <li>• Fragmented ETL processes requiring manual intervention</li>
                    <li>• Inconsistent data models across merged systems</li>
                    <li>• HIPAA compliance gaps in data handling and governance</li>
                    <li>• Limited real-time analytics capabilities</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Business Impact of Legacy Systems</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• 5-7 day lag for critical business reporting</li>
                    <li>• $10M+ annual infrastructure maintenance costs</li>
                    <li>• Limited self-service analytics for business users</li>
                    <li>• Data quality issues affecting patient care decisions</li>
                    <li>• Inability to scale with rapid business growth</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Modern Data Stack Architecture */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modern Data Stack Architecture</h2>
              <p className="mb-6">
                I led my team in designing and implementing a comprehensive modern data stack that addressed all legacy limitations while enabling future growth:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-blue-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Snowflake className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Snowflake Data Cloud Platform</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Elastic Compute:</strong> Auto-scaling virtual warehouses that adjust to workload demands</li>
                    <li><strong>Data Lake & Warehouse:</strong> Unified platform for structured and semi-structured healthcare data</li>
                    <li><strong>Security & Compliance:</strong> End-to-end encryption and HIPAA-compliant data governance</li>
                    <li><strong>Multi-Cluster Architecture:</strong> Separate environments for development, staging, and production</li>
                    <li><strong>Zero-Copy Cloning:</strong> Instant data environment provisioning for testing and development</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <div className="flex items-center gap-3 mb-4">
                    <GitBranch className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Modern Transformation Layer (dbt/Coalesce Migration)</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Platform Evaluation:</strong> Currently migrating from Snowflake SQL to modern transformation tools</li>
                    <li><strong>Tool Selection:</strong> Evaluating both dbt and Coalesce for optimal transformation layer modernization</li>
                    <li><strong>Version-Controlled Analytics:</strong> Git-based workflows for data transformation code</li>
                    <li><strong>Automated Testing:</strong> Data quality tests integrated into CI/CD pipelines</li>
                    <li><strong>Documentation:</strong> Auto-generated data lineage and business glossary</li>
                    <li><strong>Data Quality Monitoring:</strong> Implementing Monte Carlo for comprehensive data quality monitoring</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Unified Analytics Platform Migration</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Platform Consolidation:</strong> Currently migrating from Tableau Server and Power BI to unified Tableau Cloud</li>
                    <li><strong>Tableau Plus on Cloud:</strong> Single platform supporting both internal and external analytics</li>
                    <li><strong>Self-Service Analytics:</strong> Embedded dashboards in clinical and operational workflows</li>
                    <li><strong>Real-Time Dashboards:</strong> Live data connections for immediate operational insights</li>
                    <li><strong>Governed Self-Service:</strong> Certified data sources with standardized metrics</li>
                    <li><strong>Advanced Analytics:</strong> Statistical functions and predictive modeling capabilities</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Eye className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Observability & Monitoring (Datadog)</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Platform Monitoring:</strong> Real-time visibility into data pipeline performance</li>
                    <li><strong>Data Quality Alerts:</strong> Automated notifications for data anomalies</li>
                    <li><strong>Cost Optimization:</strong> Granular tracking of compute and storage costs</li>
                    <li><strong>SLA Monitoring:</strong> Uptime and performance tracking for critical business processes</li>
                    <li><strong>Security Monitoring:</strong> Comprehensive audit trails and access monitoring</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Implementation Methodology */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Methodology</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "We didn't just migrate data, we transformed how our entire organization thinks about and uses data to drive better patient outcomes."
                </blockquote>
                <cite className="text-sm text-gray-600">— On the Data Culture Transformation</cite>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Phase 1: Foundation & Planning</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Architecture Design:</strong> Comprehensive technical architecture and security framework</li>
                    <li><strong>Vendor Selection:</strong> Negotiated multi-million dollar contracts with Snowflake, dbt Labs, and Tableau</li>
                    <li><strong>Team Training:</strong> Upskilled existing team on modern data stack technologies</li>
                    <li><strong>Governance Framework:</strong> Established HIPAA-compliant data governance policies</li>
                    <li><strong>Pilot Project:</strong> Validated approach with critical patient flow analytics use case</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Phase 2: Core Infrastructure Migration</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Data Migration:</strong> Systematic migration of 15+ years of healthcare data</li>
                    <li><strong>ETL Modernization:</strong> Rebuilt 200+ data pipelines using modern practices</li>
                    <li><strong>Quality Assurance:</strong> Comprehensive data validation and reconciliation processes</li>
                    <li><strong>Security Implementation:</strong> End-to-end encryption and access controls</li>
                    <li><strong>Parallel Operations:</strong> Maintained legacy systems during transition period</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Phase 3: Analytics Platform Deployment</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Dashboard Migration:</strong> Rebuilt 150+ critical business dashboards</li>
                    <li><strong>Self-Service Enablement:</strong> Created certified data sources and training materials</li>
                    <li><strong>Performance Optimization:</strong> Tuned queries and implemented caching strategies</li>
                    <li><strong>User Adoption:</strong> Comprehensive training and change management program</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Phase 4: Advanced Capabilities & Optimization</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Real-Time Analytics:</strong> Implemented streaming data pipelines for immediate insights</li>
                    <li><strong>Machine Learning:</strong> Deployed predictive models for patient flow optimization</li>
                    <li><strong>Advanced Monitoring:</strong> Comprehensive observability and alerting systems</li>
                    <li><strong>Cost Optimization:</strong> Fine-tuned resource allocation and usage patterns</li>
                    <li><strong>Documentation:</strong> Complete technical documentation and runbooks</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Technical Innovation */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Innovation & Best Practices</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Healthcare-Specific Data Modeling</h4>
                  <p className="mb-3 text-sm">Developed industry-leading data models specifically designed for urgent care and on-demand healthcare:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Patient Journey Modeling:</strong> Comprehensive tracking from registration through discharge</li>
                    <li><strong>Clinical Workflow Analytics:</strong> Real-time monitoring of provider efficiency and patient satisfaction</li>
                    <li><strong>Revenue Cycle Optimization:</strong> End-to-end visibility into billing and collection processes</li>
                    <li><strong>Population Health Metrics:</strong> Aggregated insights for community health management</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Automated Data Operations (DataOps)</h4>
                  <p className="mb-3 text-sm">Implemented comprehensive automation to ensure reliable, scalable data operations:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>CI/CD Pipelines:</strong> Automated testing and deployment of data transformations</li>
                    <li><strong>Data Quality Monitoring:</strong> Automated anomaly detection and alerting systems</li>
                    <li><strong>Performance Optimization:</strong> Automatic query optimization and resource scaling</li>
                    <li><strong>Cost Management:</strong> Automated cost monitoring and optimization recommendations</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">HIPAA Compliance & Security Framework</h4>
                  <p className="mb-3 text-sm">Built comprehensive security and compliance framework for healthcare data:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>End-to-End Encryption:</strong> Data encrypted at rest and in transit</li>
                    <li><strong>Advanced Access Controls:</strong> Role-based access with multi-factor authentication and row-level security on data</li>
                    <li><strong>Audit Trails:</strong> Comprehensive logging of all data access and modifications</li>
                    <li><strong>Data Retention:</strong> Automated compliance with healthcare data retention policies</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Business Impact & Results */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Impact & Results</h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Quantified Outcomes</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">$10M+ Annual Savings</span>
                  </div>
                  <div className="text-center">
                    <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">60% Faster Insights</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">300% Self-Service Adoption</span>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">98% Compliance Success</span>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Operational Excellence Metrics</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Infrastructure Costs:</strong> $10M annual reduction in data infrastructure costs</li>
                    <li><strong>Data Quality:</strong> 95% reduction in data quality issues through automated monitoring</li>
                    <li><strong>Time-to-Insight:</strong> Reduced from 5-7 days to near real-time for critical metrics</li>
                    <li><strong>System Uptime:</strong> 99.9% availability with automated failover capabilities</li>
                    <li><strong>User Adoption:</strong> 400+ active users with 300% increase in analytics usage</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Strategic Business Value</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Revenue Impact:</strong> Enabled revenue growth through improved analytics capabilities</li>
                    <li><strong>Operational Efficiency:</strong> 10% improvement in patient wait times through real-time analytics</li>
                    <li><strong>Clinical Outcomes:</strong> Enhanced patient care through data-driven decision support</li>
                    <li><strong>Competitive Advantage:</strong> Industry-leading analytics capabilities attract new clients</li>
                    <li><strong>Scalability:</strong> Architecture supports 10x growth without major infrastructure changes</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Challenges Overcome */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges Overcome</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Zero-Downtime Migration</h4>
                  <p className="mb-2"><strong>Issue:</strong> Healthcare operations require 24/7 data availability with no tolerance for outages.</p>
                  <p className="mb-2"><strong>Solution:</strong> Implemented parallel processing approach with gradual cutover and comprehensive rollback procedures.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Achieved 99% uptime during migration with seamless user experience.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Complex Healthcare Data Models</h4>
                  <p className="mb-2"><strong>Issue:</strong> Healthcare data requires specialized modeling for clinical workflows and regulatory compliance.</p>
                  <p className="mb-2"><strong>Solution:</strong> Collaborated with clinical experts to develop industry-specific data models and validation rules.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Created reusable data models now used across 4,000+ healthcare practices.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Change Management Across Merged Organization</h4>
                  <p className="mb-2"><strong>Issue:</strong> Users from two different systems required training on entirely new analytics platform.</p>
                  <p className="mb-2"><strong>Solution:</strong> Developed comprehensive training program with role-specific curricula and hands-on workshops.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Achieved 95% user adoption rate within 6 months of platform launch.</p>
                </Card>
              </div>
            </section>

            {/* Industry Recognition */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition & Innovation</h2>
              <p className="mb-4">
                The technical excellence and business impact of this transformation has generated significant industry recognition:
              </p>
              
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Vendor Partnership:</strong> Selected as Snowflake Healthcare Reference Customer</li>
                <li><strong>Industry Presentations:</strong> Keynote presentations at Snowflake Summit and Tableau Conference</li>
                <li><strong>Technical Leadership:</strong> Contributed to dbt community best practices for healthcare analytics</li>
                <li><strong>Peer Recognition:</strong> Case study featured in healthcare technology industry publications</li>
                <li><strong>Innovation Awards:</strong> Internal recognition for technical innovation and business impact</li>
              </ul>
            </section>

            {/* Technical Architecture */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Architecture Diagram</h2>
              <Card className="p-6">
                <p className="italic mb-4">The modern data stack architecture implemented at Experity represents a best-in-class approach to healthcare analytics infrastructure:</p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Data Sources:</strong> EMR systems, practice management platforms, external data feeds</li>
                  <li><strong>Ingestion Layer:</strong> Real-time and batch data pipelines with automated monitoring</li>
                  <li><strong>Storage Layer:</strong> Snowflake data cloud with multi-environment architecture</li>
                  <li><strong>Transformation Layer:</strong> dbt Core and Coalesce for version-controlled transformations</li>
                  <li><strong>Analytics Layer:</strong> Tableau Cloud with embedded analytics and mobile optimization</li>
                  <li><strong>Governance Layer:</strong> Comprehensive security, compliance, and observability framework</li>
                  <li><strong>AI Agent Layer:</strong> The modern data stack architecture provides the governed endpoints that production pipeline agents now consume, enabling the AI-augmented operating model built on top of this foundation.</li>
                </ul>
              </Card>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Technical Deep Dive Available</h3>
              <p className="mb-6">
                This case study provides a high-level overview of one of the largest healthcare technology data transformations in the industry. I'm available to discuss specific technical implementation details, architectural decisions, and lessons learned.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Discuss Technical Details
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/delta-framework-implementation">
                    <Layers className="w-4 h-4 mr-2" />
                    View DELTA Framework Case Study
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/enterprise-data-platform">
                    <Database className="w-4 h-4 mr-2" />
                    View Enterprise Data Platform
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
                <Badge variant="secondary">Data Architecture</Badge>
                <Badge variant="secondary">Snowflake</Badge>
                <Badge variant="secondary">dbt</Badge>
                <Badge variant="secondary">Tableau Cloud</Badge>
                <Badge variant="secondary">Healthcare Technology</Badge>
                <Badge variant="secondary">HIPAA Compliance</Badge>
                <Badge variant="secondary">Modern Data Stack</Badge>
                <Badge variant="secondary">Enterprise Migration</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDataTransformation;