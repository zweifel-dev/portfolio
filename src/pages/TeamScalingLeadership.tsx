import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, TrendingUp, Award, Database, BarChart3, Brain, Shield, UserCog, Heart, Star, Target, Lightbulb, TrendingDown, Mail, User, FolderOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const TeamScalingLeadership: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Team Scaling & Leadership Excellence</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Building High-Performance Data Teams: From 15 to 65+ Professionals
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Strategic Team Development & Organizational Leadership
              </h1>
              <p className="text-lg text-blue-600 font-medium mb-6">
                Scaling high-performance data and analytics teams from 15 to 65+ professionals while implementing DEI initiatives, mentorship programs, and performance frameworks that improved retention by 15% and productivity by 30%.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Timeline: 20-Year Leadership Journey</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Scale: 15 to 65+ Team Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Results: 15% Retention Improvement</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Impact: 30% Productivity Increase</span>
                </div>
              </div>
            </div>

            {/* Leadership Philosophy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership Philosophy & Approach</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p className="mb-4">
                  As Senior Director of Data Strategy & Analytics at Experity, I've had the privilege of building and leading one of the most successful data organizations in the healthcare technology industry. My leadership journey began with a 15-person team and has grown to encompass 65+ professionals across data engineering, analytics, data science, and business intelligence functions.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <blockquote className="text-lg italic text-gray-700 mb-2">
                  "Strong leadership builds both people and performance. By shaping strategy with data and empowering teams to act on it, success becomes sustainable, scalable, and repeatable."
                </blockquote>
                <cite className="text-sm text-gray-600">— Personal Leadership Philosophy</cite>
              </div>
              
              <p className="text-lg">
                My approach combines military discipline with empathetic leadership, focusing on creating psychological safety while maintaining high performance standards. The results speak for themselves: <strong>15% improvement in retention rates</strong>, <strong>30% increase in team productivity</strong>, and consistent recognition as a top-performing organization within Experity.
              </p>
            </section>

            {/* Organizational Structure */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Organizational Structure & Team Composition</h2>
              <p className="mb-6">
                Building a world-class data organization requires thoughtful structure and diverse talent acquisition. Here's how I've architected our teams for maximum impact:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-blue-600" />
                    <h4 className="font-bold text-lg">Data Engineering</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Senior Data Engineers leading pipeline architecture</li>
                    <li>• Cloud Infrastructure Engineers (AWS, Snowflake)</li>
                    <li>• DevOps Engineers focusing on DataOps automation</li>
                    <li>• Quality Engineers ensuring data integrity</li>
                    <li>• Platform Engineers building self-service capabilities</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 className="w-6 h-6 text-green-600" />
                    <h4 className="font-bold text-lg">Analytics & Business Intelligence</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Senior Analytics Managers leading business partnerships</li>
                    <li>• Business Intelligence Developers creating dashboards</li>
                    <li>• Healthcare Analytics Specialists with domain expertise</li>
                    <li>• Financial Analysts focusing on revenue optimization</li>
                    <li>• Product Analysts supporting product development</li>
                    <li>• Revenue Operations Analysts optimizing go-to-market</li>
                    <li>• Go-to-Market Analysts supporting sales and marketing</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-6 h-6 text-purple-600" />
                    <h4 className="font-bold text-lg">Data Science & ML</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Senior Data Scientists leading research initiatives</li>
                    <li>• Machine Learning Engineers deploying models</li>
                    <li>• Healthcare Outcomes Researchers with clinical background</li>
                    <li>• Predictive Analytics Specialists</li>
                    <li>• AI/ML Platform Engineers</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-orange-600" />
                    <h4 className="font-bold text-lg">Data Governance & Strategy</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Data Governance Managers ensuring compliance</li>
                    <li>• Data Quality Analysts monitoring integrity</li>
                    <li>• Privacy Officers managing HIPAA compliance</li>
                    <li>• Data Strategy Analysts supporting decision-making</li>
                    <li>• Vendor Management Specialists</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCog className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-lg">Leadership & Operations</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li>• Senior Director (myself) providing strategic leadership</li>
                    <li>• Engineering Managers leading technical teams</li>
                    <li>• Analytics Managers leading business partnerships</li>
                    <li>• Program Managers coordinating cross-functional initiatives</li>
                    <li>• Operations Specialists supporting team efficiency</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* DEI Leadership */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Diversity, Equity & Inclusion Leadership</h2>
              <p className="mb-6">
                Building high-performing teams requires intentional focus on diversity, equity, and inclusion. I've implemented comprehensive DEI initiatives that have transformed our organizational culture:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3">Gender Equity & Bias Elimination</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>HR Partnership:</strong> Advocated for and supported HR team's gender equity initiatives</li>
                    <li><strong>Structured Hiring Process:</strong> Championed diverse interview panels and equitable evaluation processes</li>
                    <li><strong>Pay Equity Audits:</strong> Regular compensation analysis ensuring equal pay for equal work</li>
                    <li><strong>Leadership Development:</strong> Targeted mentorship programs for underrepresented groups</li>
                    <li><strong>Bias Training:</strong> Company-wide unconscious bias training for all hiring managers</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-3">Generational Communication & Collaboration</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Cross-Generational Mentoring:</strong> Paired experienced professionals with early-career talent</li>
                    <li><strong>Communication Preferences:</strong> Flexible communication styles accommodating different generational preferences</li>
                    <li><strong>Knowledge Transfer Programs:</strong> Systematic capture and sharing of institutional knowledge</li>
                    <li><strong>Technology Adoption:</strong> Gradual introduction of new tools with comprehensive training</li>
                    <li><strong>Results:</strong> 95% satisfaction scores in cross-generational collaboration surveys</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-3">Introverted Leadership Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Alternative Leadership Styles:</strong> Recognition that leadership takes many forms beyond extroversion</li>
                    <li><strong>Individual Contribution Paths:</strong> Career advancement opportunities for high-impact individual contributors</li>
                    <li><strong>Presentation Skills Training:</strong> Optional workshops for those wanting to develop public speaking</li>
                    <li><strong>Written Communication Excellence:</strong> Emphasizing and rewarding strong written communication skills</li>
                    <li><strong>Results:</strong> 30% of leadership positions filled by self-identified introverts</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-orange-500">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-6 h-6 text-red-600" />
                    <h4 className="font-bold text-lg">Mental Health & Well-being Focus</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Mental Health Advocacy:</strong> Led company-wide "Day of Understanding" focused on mental health awareness</li>
                    <li><strong>Men's Mental Health:</strong> Championed breaking the stigma around men's mental health challenges</li>
                    <li><strong>Mental Health First Aid:</strong> Certified as company mental health first responder</li>
                    <li><strong>Psychological Safety Culture:</strong> Open discussions about mental health challenges and support</li>
                    <li><strong>Flexible Work Arrangements:</strong> Remote work options and flexible scheduling for work-life balance</li>
                    <li><strong>Stress Management Resources:</strong> Company-sponsored mindfulness training and mental health resources</li>
                    <li><strong>Workload Management:</strong> Regular check-ins on workload and capacity to prevent burnout</li>
                    <li><strong>Results:</strong> Reduction in stress-related absences and improved team satisfaction</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Talent Acquisition */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Talent Acquisition & Development Strategy</h2>
              
              <Card className="p-6 mb-6">
                <h4 className="font-bold text-lg mb-2">Competitive Hiring Market Navigation</h4>
                <p className="mb-2"><strong>Challenge:</strong> High demand for data professionals in healthcare technology created intense competition for talent.</p>
                <p className="mb-4"><strong>Strategy:</strong> Developed comprehensive talent acquisition approach focusing on culture, growth, and impact over compensation alone.</p>
                <ul className="space-y-2 text-sm mb-3">
                  <li><strong>Employer Branding:</strong> Built reputation as premier data organization through thought leadership</li>
                  <li><strong>University Partnerships:</strong> Established relationships with top universities for early talent pipeline</li>
                  <li><strong>Referral Programs:</strong> Employee referral incentives with emphasis on cultural fit</li>
                  <li><strong>Comprehensive Benefits:</strong> Competitive packages including professional development budgets</li>
                  <li><strong>Mission-Driven Appeal:</strong> Emphasized impact on healthcare outcomes and patient care</li>
                </ul>
                <p className="text-green-600 font-medium"><strong>Results:</strong> Reduced time-to-hire by 40% while maintaining high-quality candidate standards</p>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Professional Development & Career Growth</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Individual Development Plans:</strong> Personalized career roadmaps with quarterly check-ins</li>
                  <li><strong>Technical Skills Training:</strong> Annual professional development budget for each team member</li>
                  <li><strong>Conference Attendance:</strong> Sponsored attendance at industry conferences and training programs</li>
                  <li><strong>Internal Mobility:</strong> Clear pathways for advancement across different functional areas</li>
                  <li><strong>Certification Support:</strong> Company funding for relevant technical certifications</li>
                </ul>
              </Card>
            </section>

            {/* Performance Management */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Performance Management & Recognition</h2>
              
              <Card className="p-6 mb-6 border-l-4 border-green-500">
                <h4 className="font-bold text-lg mb-3">360-Degree Performance Framework</h4>
                <p className="mb-3 text-sm">Implemented comprehensive performance management system emphasizing both individual achievement and team collaboration:</p>
                <ol className="space-y-2 text-sm list-decimal ml-4">
                  <li><strong>Goal Setting:</strong> SMART objectives aligned with organizational priorities</li>
                  <li><strong>Continuous Feedback:</strong> Monthly one-on-ones with coaching and development focus</li>
                  <li><strong>Peer Recognition:</strong> Regular peer feedback and cross-functional project evaluations</li>
                  <li><strong>Impact Measurement:</strong> Clear metrics connecting individual work to business outcomes</li>
                  <li><strong>Career Development:</strong> Annual career planning sessions with advancement opportunities</li>
                </ol>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold text-lg mb-3">Recognition & Reward Systems</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Spot Recognition:</strong> Immediate acknowledgment of exceptional contributions</li>
                  <li><strong>Quarterly Awards:</strong> Team and individual recognition for outstanding performance</li>
                  <li><strong>Innovation Challenges:</strong> Hackathons and innovation contests with meaningful rewards</li>
                  <li><strong>Public Recognition:</strong> Company-wide announcements of team achievements</li>
                  <li><strong>Career Advancement:</strong> Clear promotion criteria with regular advancement opportunities</li>
                </ul>
              </Card>
            </section>

            {/* Quantified Results */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Quantified Leadership Results</h2>
              
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">Team Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">65+ Team Members</span>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">30% Productivity Increase</span>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">15% Retention Improvement</span>
                  </div>
                  <div className="text-center">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <span className="text-sm font-medium">95% Employee Satisfaction</span>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Detailed Performance Outcomes</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Team Scaling Success:</strong> Grew from 15 to 65+ professionals with 95% retention of key talent</li>
                    <li><strong>Productivity Improvements:</strong> 30% increase in deliverable output per team member</li>
                    <li><strong>Quality Excellence:</strong> 40% reduction in defects and rework across all team outputs</li>
                    <li><strong>Innovation Metrics:</strong> 200% increase in internal innovation projects and hackathon participation</li>
                    <li><strong>Employee Engagement:</strong> Consistently ranked in top 10% of company employee satisfaction surveys</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Business Impact Through Team Excellence</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Revenue Contribution:</strong> Team deliverables directly contributed to $20M+ annual revenue</li>
                    <li><strong>Cost Optimization:</strong> Process improvements generated $10M+ in annual cost savings</li>
                    <li><strong>Time-to-Market:</strong> 50% reduction in analytics project delivery times</li>
                    <li><strong>Customer Impact:</strong> Analytics products improved client satisfaction scores by 20%</li>
                    <li><strong>Competitive Advantage:</strong> Team capabilities became key differentiator in market positioning</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Leadership Development */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership Development & Mentorship</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Comprehensive Mentorship Framework</h4>
                  <p className="mb-3 text-sm">Developed industry-leading mentorship programs that have been recognized as best practices:</p>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Reverse Mentoring:</strong> Junior team members mentor senior leaders on emerging technologies</li>
                    <li><strong>Cross-Functional Mentoring:</strong> Partnerships with leaders from other departments</li>
                    <li><strong>External Mentorship:</strong> Connections with industry leaders and subject matter experts</li>
                    <li><strong>Group Mentoring:</strong> Cohort-based learning programs for professional development</li>
                    <li><strong>Structured Curriculum:</strong> Formal learning objectives and progress tracking</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Next-Generation Leader Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Leadership Rotation Programs:</strong> Emerging leaders gain experience across different functions</li>
                    <li><strong>Executive Shadowing:</strong> High-potential individuals shadow C-suite executives</li>
                    <li><strong>Project Leadership:</strong> Opportunities to lead high-visibility initiatives</li>
                    <li><strong>External Board Service:</strong> Support for participation in nonprofit and industry boards</li>
                    <li><strong>Succession Planning:</strong> Clear development paths for all leadership positions</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Crisis Leadership */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Crisis Leadership & Change Management</h2>
              <p className="mb-6">
                True leadership is tested during challenging times. I've successfully led the team through several major organizational changes:
              </p>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">COVID-19 Pandemic Response</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Immediate Transition:</strong> Seamlessly moved 65+ person team to remote work within 48 hours</li>
                    <li><strong>Rapid Hiring Scale-up:</strong> Accelerated hiring to support increased demand for telehealth capabilities</li>
                    <li><strong>Product Pivot Support:</strong> Led data initiatives to support EMR platform's rapid telehealth integration</li>
                    <li><strong>Mental Health Support:</strong> Enhanced check-ins and mental health resources during isolation</li>
                    <li><strong>Productivity Maintenance:</strong> Maintained team performance despite remote work challenges</li>
                    <li><strong>Technology Innovation:</strong> Accelerated digital collaboration tools and processes</li>
                    <li><strong>Results:</strong> Zero productivity loss and improved work-life balance satisfaction</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">M&A Integration Leadership</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Cultural Integration:</strong> Successfully merged teams from Practice Velocity and DocuTAP</li>
                    <li><strong>Retention Focus:</strong> Achieved 95% retention rate during integration period</li>
                    <li><strong>Clear Communication:</strong> Transparent updates on integration progress and impact</li>
                    <li><strong>Role Clarification:</strong> Swift resolution of overlapping responsibilities and career paths</li>
                    <li><strong>Results:</strong> Stronger unified team with enhanced capabilities and collaboration</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* Industry Recognition */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Recognition & Thought Leadership</h2>
              <p className="mb-4">
                The success of our team development approach has generated significant industry recognition:
              </p>
              
              <ul className="space-y-2 ml-6 list-disc">
                <li><strong>Speaking Engagements:</strong> Keynote presentations on building data teams at major conferences</li>
                <li><strong>Industry Awards:</strong> Team recognized for excellence in analytics and innovation</li>
                <li><strong>Best Practices Sharing:</strong> Regular participation in healthcare technology leadership roundtables</li>
                <li><strong>Mentorship Network:</strong> Active mentor for aspiring data leaders across the industry</li>
              </ul>
            </section>

            {/* Future Vision */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Vision & Continuous Evolution</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-bold text-lg mb-3">Next Phase of Team Development</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>AI/ML Specialization:</strong> Developing next-generation capabilities in artificial intelligence and machine learning</li>
                    <li><strong>Leadership Academy:</strong> Formal internal program for developing future leaders</li>
                    <li><strong>Industry Partnerships:</strong> Collaborations with universities and industry organizations</li>
                    <li><strong>Innovation Labs:</strong> Dedicated resources for exploring emerging technologies and methodologies</li>
                    <li><strong>Advanced Analytics:</strong> Expanding predictive modeling and real-time analytics capabilities</li>
                  </ul>
                </Card>

                <Card className="p-6 border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-3">Sustainable Leadership Model</h4>
                  <p className="text-sm">
                    The leadership approaches I've developed are designed for sustainability and scalability. By focusing on principles rather than prescriptive processes, the methodologies can adapt to changing business needs while maintaining core values of respect, growth, and excellence.
                  </p>
                </Card>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Leadership Development Partnership</h3>
              <p className="mb-6">
                Building high-performance teams is both an art and a science. I'm passionate about sharing these methodologies with other leaders and organizations committed to creating exceptional team cultures and driving meaningful business results.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Discuss Leadership Approaches
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/about">
                    <User className="w-4 h-4 mr-2" />
                    View Leadership Background
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/projects">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    View Other Initiatives
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Team Leadership</Badge>
                <Badge variant="secondary">Diversity & Inclusion</Badge>
                <Badge variant="secondary">Performance Management</Badge>
                <Badge variant="secondary">Talent Development</Badge>
                <Badge variant="secondary">Change Management</Badge>
                <Badge variant="secondary">Mentorship</Badge>
                <Badge variant="secondary">Cultural Transformation</Badge>
                <Badge variant="secondary">Organizational Excellence</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamScalingLeadership;