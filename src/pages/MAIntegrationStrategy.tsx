import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Handshake, Building, DollarSign, Server, Database, AlertTriangle, Target, Users, Settings, TrendingUp, Mail, GraduationCap, FolderOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MAIntegrationStrategy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">M&A Integration Strategy</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Driving 140% Valuation Growth: From $500M to $1.2B GTCR Exit Through Strategic Integration
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Post-Merger Technology Integration Excellence
              </h1>
              <p className="text-lg text-blue-600 font-medium mb-6">
                Leading the strategic integration of Practice Velocity and DocuTAP systems following Warburg Pincus merger, delivering an increasing company valuation from $500M to $1.2B.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Timeline: 24-Month Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Handshake className="w-4 h-4" />
                  <span>Transaction: Warburg Pincus Merger</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>Scale: 4,000+ Healthcare Practices</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Impact: $10M+ Cost Savings</span>
                </div>
              </div>
            </div>

            {/* Strategic Transaction Overview */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Transaction Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  In May 2019, Warburg Pincus executed a strategic merger combining DocuTAP and Practice Velocity, the two leading companies in urgent care technology, to form Experity. 
                  As Director of Software Engineering at that time, I was tasked with leading the critical technology integration that would determine the success of this $500M+ transaction.
                </p>
                <p className="mb-4">
                  The merger combined complementary but distinct technology platforms serving over 4,000 on-demand healthcare practices. 
                  My role was to design and execute an integration strategy that would eliminate redundant infrastructure, harmonize disparate systems, and create a unified platform capable of supporting aggressive growth targets.
                </p>
                <p>
                  <strong>The results exceeded all expectations:</strong> 
                  $10M+ in recurring infrastructure cost savings, successful platform consolidation, and direct contribution to company valuation growth from $500M to $1.2B within 24 months.
                </p>
              </div>
            </section>

            {/* Pre-Merger Landscape */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Merger Landscape Analysis</h2>
              <p className="mb-6">
                My first priority was conducting a comprehensive analysis of both organizations' technology assets, identifying integration opportunities and potential risks:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Practice Velocity Infrastructure</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Cloud-native AWS architecture with modern microservices</li>
                    <li>• Sophisticated analytics platform serving 2,000+ clinics</li>
                    <li>• Advanced reporting and dashboard capabilities</li>
                    <li>• Scalable data warehouse and ETL processes</li>
                    <li>• Strong security and compliance framework</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">DocuTAP Infrastructure</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Hybrid cloud and on-premises systems</li>
                    <li>• Legacy data warehouse with complex ETL processes</li>
                    <li>• Established client base of 2,000+ clinics</li>
                    <li>• Proprietary urgent care workflow optimizations</li>
                    <li>• Deep integration with clinical protocols</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Integration Challenges</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Incompatible data models and schema designs</li>
                    <li>• Overlapping but non-standardized functionality</li>
                    <li>• Different compliance and security approaches</li>
                    <li>• Competing vendor relationships and contracts</li>
                    <li>• Company Cultural differences</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Strategic Objectives</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Eliminate duplicate infrastructure costs</li>
                    <li>• Create unified customer experience</li>
                    <li>• Accelerate product innovation through combined R&D</li>
                    <li>• Achieve synergies to support valuation growth</li>
                    <li>• Maintain zero disruption to client operations</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Integration Strategy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Integration Strategy & Methodology</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "Success in M&A integration isn't about choosing the 'best' system—it's about creating something better than either company had before."
                </blockquote>
                <cite className="text-sm text-gray-600">— Integration Philosophy</cite>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-2">Phase 1: Strategic Assessment & Planning</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Comprehensive analysis and integration roadmap development</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• <strong>Technical Due Diligence:</strong> Deep-dive analysis of both technology stacks, identifying 200+ integration points</li>
                    <li>• <strong>Cost-Benefit Analysis:</strong> Quantified potential savings and investment requirements for each integration scenario</li>
                    <li>• <strong>Stakeholder Alignment:</strong> Facilitated executive decision-making on integration priorities and timelines</li>
                    <li>• <strong>Risk Assessment:</strong> Identified and mitigated potential disruption to client operations and churn</li>
                    <li>• <strong>Resource Planning:</strong> Assembled cross-functional integration teams with clear accountability</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Deliverable:</strong> Board-approved integration roadmap with $10M+ savings target</p>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2">Phase 2: Feature Parity & Optimization</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Deliver enhanced functionality exceeding capabilities of either legacy system</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• <strong>Feature Mapping:</strong> Analysis identifying best-of-both functionality from platforms</li>
                    <li>• <strong>Product Roadmap Integration:</strong> Unified development priorities maximizing customer value</li>
                    <li>• <strong>Performance Optimization:</strong> Achieved 40% improvement in system response times</li>
                    <li>• <strong>User Experience Enhancement:</strong> Streamlined workflows reducing user clicks by 30%</li>
                    <li>• <strong>Feature Acceleration:</strong> Combined and scaled R&D teams from 15 to over 100+ engineers</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Result:</strong> Customer satisfaction scores increased 25% post-integration, measured NPS</p>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-2">Phase 3: Infrastructure Consolidation</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Eliminate redundant systems and optimize infrastructure costs</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• <strong>Data Center Consolidation:</strong> Migrated DocuTap's infrastructure to Experit's removing cost of infrastructure</li>
                    <li>• <strong>Enterprise Scalability:</strong> Migrated Practice Velocity (Experity) on-premises infrastructure to AWS cloud platform, and removed DocuTap's infrastructure</li>
                    <li>• <strong>Vendor Rationalization:</strong> Negotiated consolidated contracts, eliminating duplicate vendor relationships</li>
                    <li>• <strong>Platform Modernization:</strong> Upgraded legacy systems to modern, scalable architecture</li>
                    <li>• <strong>Security Harmonization:</strong> Implemented unified security and compliance framework</li>
                    <li>• <strong>Network Optimization:</strong> Redesigned network architecture for optimal performance and cost efficiency</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Result:</strong> $10M in annual infrastructure cost savings achieved</p>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-2">Phase 4: Data Integration & Harmonization</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Create unified platform supporting combined customer base</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• <strong>Schema Unification:</strong> Developed master data model accommodating both platforms' requirements, migrating all data from legacy platform to unified upgraded platform</li>
                    <li>• <strong>ETL Modernization:</strong> Built robust data pipelines supporting near real-time integration</li>
                    <li>• <strong>Data Quality Framework:</strong> Implemented comprehensive data validation and cleansing processes</li>
                    <li>• <strong>Analytics Consolidation:</strong> Migrated 300+ reports and dashboards to unified platform</li>
                    <li>• <strong>API Integration:</strong> Created seamless data exchange between previously isolated systems</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Result:</strong> Unified analytics platform serving 4,000+ practices with 99.9% uptime</p>
                </Card>
              </div>
            </section>

            {/* Financial Analysis */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Financial Analysis & Value Creation</h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Cost Savings Breakdown</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Server className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">$10M Infrastructure Savings</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">$500k Personnel Optimization</span>
                  </div>
                  <div className="text-center">
                    <Handshake className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">$2M Vendor Consolidation</span>
                  </div>
                  <div className="text-center">
                    <Settings className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">20% Process Efficiency</span>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Detailed Cost Savings Analysis</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Infrastructure Consolidation ($10M annually):</strong> Eliminated duplicate data centers, reduced cloud costs through optimized resource allocation</li>
                    <li><strong>Personnel Optimization ($500k annually):</strong> Eliminated redundant roles while investing in high-value positions</li>
                    <li><strong>Vendor Rationalization ($2M annually):</strong> Consolidated software licenses, renegotiated contracts with improved terms</li>
                    <li><strong>Process Efficiency (20% annually):</strong> Automated manual processes, eliminated duplicate workflows</li>
                    <li><strong>Total Recurring Savings:</strong> $22.5M+ annually with 18-month payback period</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Strategic Value Creation</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Valuation Growth:</strong> Direct contribution to company valuation increase from $500M to $1.2B</li>
                    <li><strong>Market Leadership:</strong> Created dominant position in urgent care technology market</li>
                    <li><strong>Innovation Acceleration:</strong> Combined R&D capabilities enabling faster product development</li>
                    <li><strong>Customer Value:</strong> Enhanced service offerings attracting new clients and improving retention</li>
                    <li><strong>Competitive Moat:</strong> Scale advantages creating barriers to entry for competitors</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Critical Success Factors */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Critical Success Factors</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3">Integration Leadership Principles</h4>
                  <ol className="space-y-2 text-sm list-decimal ml-4">
                    <li><strong>Customer-First Approach:</strong> Every integration decision prioritized minimal disruption to client operations</li>
                    <li><strong>Data-Driven Decision Making:</strong> Comprehensive analysis and measurement of all integration activities</li>
                    <li><strong>Transparent Communication:</strong> Regular stakeholder updates and proactive issue resolution</li>
                    <li><strong>Cultural Integration:</strong> Balanced representation from both organizations in key decisions</li>
                    <li><strong>Continuous Optimization:</strong> Ongoing refinement based on performance metrics and user feedback</li>
                  </ol>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-3">Risk Mitigation Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Parallel Operations:</strong> Maintained both systems during transition to ensure zero downtime</li>
                    <li><strong>Comprehensive Testing:</strong> Extensive UAT with real client scenarios before each migration phase</li>
                    <li><strong>Rollback Procedures:</strong> Detailed contingency plans for every critical integration milestone</li>
                    <li><strong>Performance Monitoring:</strong> Real-time dashboards tracking system performance and user satisfaction</li>
                    <li><strong>Change Management:</strong> Structured training and support programs for affected users</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Complex Challenges */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Complex Challenges & Solutions</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Zero-Downtime Integration for Healthcare Operations</h4>
                  <p className="mb-2"><strong>Issue:</strong> Healthcare practices cannot tolerate system outages that would disrupt patient care.</p>
                  <p className="mb-2"><strong>Solution:</strong> Designed sophisticated parallel processing architecture with real-time data synchronization.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Achieved 99% uptime during integration with seamless user experience.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Regulatory Compliance Across Different Standards</h4>
                  <p className="mb-2"><strong>Issue:</strong> Both companies had different interpretations of HIPAA and healthcare compliance requirements.</p>
                  <p className="mb-2"><strong>Solution:</strong> Implemented highest common standard approach with external compliance validation.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Achieved 98% compliance audit success rate with enhanced security posture.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Cultural Integration of Technical Teams</h4>
                  <p className="mb-2"><strong>Issue:</strong> Engineering cultures and technical approaches differed significantly between organizations.</p>
                  <p className="mb-2"><strong>Solution:</strong> Created cross-functional integration teams with shared objectives and recognition programs.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> 75% retention rate of key technical personnel throughout integration period.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge: Client Communication During Transition</h4>
                  <p className="mb-2"><strong>Issue:</strong> 4,000+ healthcare practices required clear communication about integration impact.</p>
                  <p className="mb-2"><strong>Solution:</strong> Developed comprehensive communication strategy with dedicated client success resources.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Client satisfaction scores improved 25% during integration period.</p>
                </Card>
              </div>
            </section>

            {/* Innovation Through Integration */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Innovation Through Integration</h2>
              <p className="mb-6">
                The merger enabled breakthrough innovations that neither company could achieve independently:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">New Capabilities Delivered</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Unified Platform:</strong> Combined best features from both systems into industry-leading solution</li>
                    <li><strong>Improved Clinical Workflows:</strong> Integrated urgent care protocols optimizing patient care delivery</li>
                    <li><strong>Advanced Reporting & Analytics:</strong> Comprehensive BI suite exceeding capabilities of either legacy system</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Market Positioning Results</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Market Share Leadership:</strong> Combined entity became dominant player in urgent care technology</li>
                    <li><strong>Barriers to Entry:</strong> Scale and feature advantages created significant competitive moat</li>
                    <li><strong>Customer Acquisition:</strong> Enhanced capabilities attracted new enterprise clients</li>
                    <li><strong>Retention Improvement:</strong> Superior platform reduced client churn by 30%</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Industry Recognition */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition & Best Practices</h2>
              <p className="mb-4">
                The integration's success has generated significant industry recognition and established new best practices for healthcare technology M&A:
              </p>
              
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Industry Case Study:</strong> Featured as best-practice example in healthcare technology M&A and covid response publications</li>
                <li><strong>Conference Presentations:</strong> Keynote presentations on integration strategies and scaling fast at industry conferences</li>
                <li><strong>Peer Recognition:</strong> Invited to participate in healthcare technology executive roundtables</li>
                <li><strong>Academic Collaboration:</strong> MBA coursework studying integration methodology and results</li>
                <li><strong>Investor Recognition:</strong> Warburg Pincus highlighted integration as key value creation driver</li>
              </ul>
            </section>

            {/* Lessons Learned */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lessons Learned & Best Practices</h2>
              
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Key Success Principles for Healthcare M&A Integration</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Customer Impact Assessment:</strong> Evaluate every decision through lens of patient care and provider workflow</li>
                  <li><strong>Technical Due Diligence:</strong> Invest heavily in understanding both systems before making integration decisions</li>
                  <li><strong>Cultural Integration:</strong> Technology decisions must account for organizational culture and change management</li>
                  <li><strong>Regulatory Compliance:</strong> Healthcare integration requires specialized expertise in regulatory requirements</li>
                  <li><strong>Performance Measurement:</strong> Establish clear metrics and regular reporting to track integration success</li>
                </ul>
              </Card>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">M&A Integration Expertise Available</h3>
              <p className="mb-6">
                This case study represents one of the most successful healthcare technology M&A integrations in recent years. I'm available to discuss specific methodologies, technical approaches, and lessons learned for organizations considering similar transactions.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Discuss M&A Strategy
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/ma-feature-parity">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    View Academic Analysis
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
                <Badge variant="secondary">M&A Integration</Badge>
                <Badge variant="secondary">Strategic Planning</Badge>
                <Badge variant="secondary">Cost Optimization</Badge>
                <Badge variant="secondary">Healthcare Technology</Badge>
                <Badge variant="secondary">Change Management</Badge>
                <Badge variant="secondary">Value Creation</Badge>
                <Badge variant="secondary">Private Equity</Badge>
                <Badge variant="secondary">Data Integration</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MAIntegrationStrategy;