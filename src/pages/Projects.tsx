import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Database, Handshake, Network, UsersRound, GraduationCap } from 'lucide-react';

const Projects = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Executive Portfolio</h1>
          <p className="text-xl leading-relaxed">Strategic initiatives delivering measurable business impact and organizational transformation.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Project 1: Healthcare Data Transformation */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Executive Initiative
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                <Database className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Data Transformation</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> During healthcare market consolidation, legacy data systems became a competitive liability. Led enterprise migration to modern data stack (Snowflake, dbt/Coalesce, Tableau Cloud) to position for M&A opportunities and enable rapid decision-making in fast-changing market conditions. This foundation proved critical for subsequent private equity acquisition and platform integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">$10M+ Annual Savings</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">60% Faster Insights</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">15-Person Data Team</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Snowflake</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">dbt/Coalesce</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Tableau Cloud</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">DELTA Framework</span>
              </div>
              <Link to="/enterprise-data-transformation">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 2: M&A Integration Strategy */}
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
                <strong>Strategic Context:</strong> Private equity acquisition required rapid cost synergies to justify $1.2B valuation. Led comprehensive platform consolidation across Practice Velocity and DocuTAP acquisitions, identifying $10M+ recurring cost savings through strategic infrastructure elimination while maintaining competitive product capabilities.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">$10M Cost Savings</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">$500M to $1.2B Valuation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">18-Month Timeline</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">M&A Integration</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Platform Consolidation</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Cost Optimization</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Stakeholder Alignment</span>
              </div>
              <Link to="/ma-integration-strategy">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 3: DELTA Framework Implementation */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Organizational Transformation
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-lg mb-6">
                <Network className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">DELTA Framework & Data Culture</h3>
              <p className="text-gray-700 mb-6">
                <strong>Strategic Context:</strong> To compete in consolidated healthcare market, organization needed data-driven decision making at all levels. Implemented DELTA framework to transform from reactive reporting to predictive analytics, enabling competitive advantage through faster market response and evidence-based strategy development.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Enterprise-Wide Adoption</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Data Literacy +40%</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Self-Service Analytics</span>
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

          {/* Project 4: Team Scaling & Development */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Leadership Excellence
            </div>
            <CardContent className="p-8">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-lg mb-6">
                <UsersRound className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">High-Performance Team Scaling</h3>
              <p className="text-gray-700 mb-6">
                Built and scaled high-performing data and engineering teams from 15 to 65+ professionals, implementing DEI initiatives, mentorship programs, and performance frameworks that improved retention by 15%.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">65+ Team Members</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">15% Retention Increase</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">30% Productivity Boost</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Team Leadership</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">DEI Initiatives</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Mentorship</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">Performance Management</span>
              </div>
              <Link to="/team-scaling-leadership">
                <Button className="w-full">View Case Study</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Project 5: Academic M&A Analysis */}
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
                MBA coursework demonstrating strategic analytical frameworks for technology integration decisions during merger and acquisition processes, including cost-benefit analysis and stakeholder alignment strategies.
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