import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Building, Users, DollarSign, Database, Settings, GraduationCap, Target, BarChart3, Eye, Mail, User, FolderOpen, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';

const DeltaFrameworkImplementation: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">DELTA Framework Implementation</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Transforming Experity into a Data-Driven Healthcare Technology Leader
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Organizational Data Culture Transformation at Experity
              </h1>
              <p className="text-lg text-blue-600 font-medium mb-6">
                A comprehensive case study on implementing the DELTA Plus framework to drive $20M+ in revenue impact and build a sustainable data culture across a merged healthcare technology organization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Implementation: 2019 - 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  <span>Organization: Experity (Practice Velocity + DocuTAP Merger)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Team Scale: 15 to 65+ Professionals</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>Business Impact: $20M+ Revenue</span>
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  As Senior Director of Data Strategy & Analytics at Experity, I led the implementation of the DELTA Plus framework to transform our merged organization into a data-driven healthcare technology leader. This comprehensive transformation involved building data culture, implementing modern analytics infrastructure, and scaling high-performing teams across the organization.
                </p>
                <p>
                  The initiative delivered measurable business impact including <strong>$20M+ in annual revenue growth</strong>, <strong>$10M+ in cost savings through M&A integration</strong>, and the successful scaling of our data organization from 15 to 65+ professionals while maintaining industry-leading retention rates.
                </p>
                <p>
                  This cultural foundation proved essential for the subsequent AI transformation — the team's data literacy and governance discipline made the transition to an agent-augmented operating model dramatically smoother.
                </p>
              </div>
            </section>

            {/* Organizational Context */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Organizational Context: The Experity Transformation</h2>
              <p className="mb-4">
                In May 2019, Warburg Pincus merged DocuTAP and Practice Velocity—two leaders in urgent care technology—to form Experity. This created the largest healthcare technology platform serving over 4,000 on-demand healthcare practices worldwide. However, the merger also presented significant data integration challenges:
              </p>
              
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Fragmented Data Architecture:</strong> Two separate technology stacks with incompatible data models</li>
                <li><strong>Siloed Analytics Teams:</strong> Competing approaches to data analysis and reporting</li>
                <li><strong>Inconsistent Data Governance:</strong> Different compliance standards and data quality processes</li>
                <li><strong>Cultural Misalignment:</strong> Varying degrees of data literacy across combined organization</li>
                <li><strong>Rapid Growth Pressure:</strong> Need to deliver immediate value while building long-term capabilities</li>
              </ul>
            </section>

            {/* DELTA Plus Framework */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The DELTA Plus Framework: Our Strategic Foundation</h2>
              <p className="mb-6">
                I selected the DELTA Plus framework as our transformation methodology because it addresses both technical and cultural aspects of organizational change. The framework's seven pillars provided a comprehensive roadmap for building sustainable data capabilities:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Data</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Modern data stack migration (Snowflake, dbt/Coalesce)</li>
                    <li>• Real-time data integration across platforms</li>
                    <li>• HIPAA-compliant data governance framework</li>
                    <li>• Self-service analytics capabilities</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Enterprise</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Hub-and-spoke analytics operating model</li>
                    <li>• Cross-functional data literacy programs</li>
                    <li>• Executive sponsor alignment and KPI frameworks</li>
                    <li>• Data-as-a-Product strategy implementation</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Leadership</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• C-suite data strategy alignment</li>
                    <li>• Middle management analytics adoption</li>
                    <li>• Change management and cultural transformation</li>
                    <li>• Executive reporting and board-level communications</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Targets</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Revenue optimization through predictive analytics</li>
                    <li>• Operational efficiency improvements</li>
                    <li>• Customer experience enhancement</li>
                    <li>• Clinical outcomes measurement and improvement</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Analysts</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Hub-and-spoke analytics model with center of excellence</li>
                    <li>• Built analytics capabilities from ground up</li>
                    <li>• Diverse hiring practices and inclusive culture</li>
                    <li>• Continuous learning and development programs</li>
                    <li>• Performance management and retention strategies</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Technology</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Cloud-native architecture (AWS, Snowflake)</li>
                    <li>• Modern analytics stack (Tableau Cloud, dbt/Coalesce)</li>
                    <li>• Automated data pipelines and observability</li>
                    <li>• AI/ML platform development and deployment</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Analytical Techniques</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Predictive analytics for patient flow optimization</li>
                    <li>• Machine learning for clinical decision support</li>
                    <li>• Statistical modeling for revenue forecasting</li>
                    <li>• Advanced visualization and storytelling methods</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Implementation Strategy */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Strategy:</h2>
              
              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-2">Foundation Building:</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Establish data infrastructure and governance framework</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• Migrated to modern data stack (Snowflake, dbt/Coalesce, Tableau Cloud)</li>
                    <li>• Implemented HIPAA-compliant data governance policies</li>
                    <li>• Established data quality monitoring and observability (Datadog)</li>
                    <li>• Created initial hub-and-spoke team structure</li>
                    <li>• Negotiated and managed multi-million dollar vendor contracts</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Results:</strong> 60% faster time-to-insight, 40% reduction in data quality issues</p>
                </Card>

                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-2">Culture and Capability Development:</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Build data literacy and analytical capabilities across organization</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• Launched enterprise-wide data literacy training programs</li>
                    <li>• Implemented self-service analytics capabilities for business users</li>
                    <li>• Established Center of Excellence with standardized methodologies</li>
                    <li>• Created cross-functional analytics councils and governance bodies</li>
                    <li>• Developed Data-as-a-Product strategy and implementation roadmap</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Results:</strong> 300% increase in self-service analytics adoption, 45% improvement in data literacy scores</p>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-2">Advanced Analytics and AI/ML:</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Deploy predictive analytics and machine learning capabilities</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• Built predictive models for patient flow optimization and revenue forecasting</li>
                    <li>• Implemented AI-powered clinical decision support systems</li>
                    <li>• Deployed real-time analytics for operational efficiency improvements</li>
                    <li>• Created automated reporting and alerting systems</li>
                    <li>• Established ML model governance and monitoring frameworks</li>
                    <li>• Built foundation for seven production pipeline agents by establishing metric certification and governance standards that AI agents now consume</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Results:</strong> 20% improvement in patient wait times, $10M+ in operational cost savings</p>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-2">Scale and Optimization:</h4>
                  <p className="font-medium mb-3"><strong>Objective:</strong> Scale capabilities and drive continuous improvement</p>
                  <ul className="space-y-2 text-sm mb-3">
                    <li>• Expanded analytics team from 15 to 65+ professionals across multiple functions</li>
                    <li>• Implemented advanced AI/ML use cases for clinical outcomes improvement</li>
                    <li>• Created industry-leading data products for external market opportunities</li>
                    <li>• Established thought leadership through conference presentations and publications</li>
                    <li>• Achieved measurable business impact across all strategic objectives</li>
                  </ul>
                  <p className="text-sm font-medium text-green-600"><strong>Key Results:</strong> $20M+ revenue impact, 15% improvement in team retention, industry recognition</p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Key Challenges and Solutions */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Challenges and Solutions</h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "The biggest challenge wasn't technical, it was cultural. We had to help people see data not as a burden, but as their competitive advantage."
                </blockquote>
                <cite className="text-sm text-gray-600">— Reflection on DELTA Framework Implementation</cite>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge 1: M&A Data Integration Complexity</h4>
                  <p className="mb-2"><strong>Issue:</strong> Merging two different technology platforms with incompatible data models and governance standards.</p>
                  <p className="mb-2"><strong>Solution:</strong> Implemented a unified data architecture using modern cloud technologies and established common data governance framework. Created automated ETL processes to harmonize data from both legacy systems.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> $10M+ in recurring infrastructure cost savings and successful platform consolidation.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge 2: Scaling Analytics Team in Competitive Market</h4>
                  <p className="mb-2"><strong>Issue:</strong> High demand for data professionals in healthcare technology market made recruitment and retention difficult.</p>
                  <p className="mb-2"><strong>Solution:</strong> Developed comprehensive DEI initiatives, mentorship programs, and competitive compensation packages. Created clear career progression paths and learning opportunities.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> Successfully scaled team from 15 to 65+ professionals with 15% improvement in retention rates.</p>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-2">Challenge 3: Healthcare Regulatory Compliance</h4>
                  <p className="mb-2"><strong>Issue:</strong> Ensuring all analytics initiatives met HIPAA compliance and healthcare industry standards.</p>
                  <p className="mb-2"><strong>Solution:</strong> Integrated compliance requirements into every aspect of the DELTA framework implementation. Established dedicated compliance review processes and automated monitoring.</p>
                  <p className="text-green-600 font-medium"><strong>Result:</strong> 98% compliance audit success rate with zero data security incidents.</p>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Quantified Business Impact */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quantified Business Impact</h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Financial Results</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">$20M+ Annual Revenue Impact</span>
                  </div>
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">$10M+ M&A Cost Savings</span>
                  </div>
                  <div className="text-center">
                    <Eye className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">60% Faster Time-to-Insight</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">65+ Team Members Led</span>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Operational Excellence Metrics</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Data Quality:</strong> 40% reduction in data quality issues through automated monitoring</li>
                    <li><strong>Self-Service Adoption:</strong> 300% increase in business user analytics adoption</li>
                    <li><strong>Decision Speed:</strong> 60% faster time-to-insight for critical business decisions</li>
                    <li><strong>Team Performance:</strong> 30% improvement in team productivity metrics</li>
                    <li><strong>Customer Satisfaction:</strong> 20% improvement in client Net Promoter Score</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Strategic Outcomes</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Market Position:</strong> Established Experity as leader in healthcare analytics technology</li>
                    <li><strong>Competitive Advantage:</strong> Created defensible moat through data network effects</li>
                    <li><strong>Innovation Pipeline:</strong> Enabled AI/ML product development and new revenue streams</li>
                    <li><strong>Valuation Growth:</strong> Contributed to company valuation increase from $500M to $1.2B</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Lessons Learned */}
            <ScrollReveal>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lessons Learned and Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3">Critical Success Factors</h4>
                  <ol className="space-y-2 text-sm list-decimal ml-4">
                    <li><strong>Executive Sponsorship:</strong> Consistent C-suite support and visible leadership commitment to data transformation</li>
                    <li><strong>Cultural Change Management:</strong> Investing in people and culture alongside technology improvements</li>
                    <li><strong>Phased Implementation:</strong> Delivering incremental value while building long-term capabilities</li>
                    <li><strong>Measurement and Communication:</strong> Regular progress reporting and celebrating wins across organization</li>
                    <li><strong>External Partnerships:</strong> Strategic vendor relationships and industry thought leadership engagement</li>
                  </ol>
                </Card>

                <Card className="p-6 border-l-4 border-red-500">
                  <h4 className="font-bold text-lg mb-3">Common Pitfalls Avoided</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Technology-First Approach:</strong> Avoided focusing solely on tools without addressing organizational readiness</li>
                    <li><strong>Big Bang Implementation:</strong> Chose incremental approach over risky wholesale transformation</li>
                    <li><strong>Siloed Execution:</strong> Ensured cross-functional collaboration from day one</li>
                    <li><strong>Neglecting Change Management:</strong> Invested heavily in training, communication, and cultural transformation</li>
                    <li><strong>Underestimating Compliance:</strong> Built regulatory requirements into core framework rather than afterthought</li>
                  </ul>
                </Card>
              </div>
            </section>

            </ScrollReveal>

            {/* Industry Recognition */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition and Thought Leadership</h2>
              <p className="mb-4">
                The success of our DELTA framework implementation at Experity has generated significant industry interest and recognition:
              </p>
              
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Conference Presentations:</strong> Delivered presentations on DELTA framework implementation at major healthcare technology conferences</li>
                <li><strong>Peer Recognition:</strong> Invited to participate in industry roundtables and advisory panels on healthcare analytics transformation</li>
                <li><strong>Vendor Partnerships:</strong> Recognized by Snowflake and Tableau as implementation excellence partner</li>
              </ul>
            </section>

            {/* Future State */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future State and Continuous Evolution</h2>
              <p className="mb-4">
                The DELTA framework implementation at Experity established a foundation for continuous innovation and improvement:
              </p>
              
              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Ongoing Innovation Areas</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>AI-Augmented Operating Model:</strong> The cultural transformation achieved through DELTA implementation — data literacy, governance discipline, and metric certification — proved essential for the subsequent AI agent deployment. The team's comfort with governed, certified data made the transition to agent-augmented workflows dramatically smoother.</li>
                  <li><strong>Real-Time Analytics:</strong> Implementing streaming analytics for immediate operational insights and patient care optimization</li>
                  <li><strong>Data Monetization:</strong> Developing external data products and industry benchmarking services</li>
                  <li><strong>Predictive Healthcare:</strong> Building predictive models for patient outcomes and preventive care recommendations</li>
                  <li><strong>Industry Leadership:</strong> Continuing thought leadership through research, and conference presentations</li>
                </ul>
              </Card>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Connect for More Details</h3>
              <p className="mb-6">
                This case study represents one of the most comprehensive DELTA framework implementations in the healthcare technology industry. I'm available to discuss specific methodologies, technical implementation details, and lessons learned from this transformation.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">
                    <User className="w-4 h-4 mr-2" />
                    View Background
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/ai-augmented-data-org">
                    <Layers className="w-4 h-4 mr-2" />
                    View AI-Augmented Data Org
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
                <Badge variant="secondary">DELTA Framework</Badge>
                <Badge variant="secondary">Data Transformation</Badge>
                <Badge variant="secondary">Healthcare Technology</Badge>
                <Badge variant="secondary">Organizational Change</Badge>
                <Badge variant="secondary">Team Leadership</Badge>
                <Badge variant="secondary">M&A Integration</Badge>
                <Badge variant="secondary">Analytics Strategy</Badge>
                <Badge variant="secondary">Cultural Transformation</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeltaFrameworkImplementation;