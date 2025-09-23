import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart3, ExternalLink, GraduationCap, Handshake, BookOpen } from 'lucide-react';

const MAFeatureParity = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">M&A Feature Parity Analysis</h1>
          <p className="text-xl leading-relaxed">MBA Project Management Case Study: Warburg Pincus Acquisition of Practice Velocity</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">MBA Project Management Case Study</h2>
                  <p className="text-lg text-blue-600 font-semibold">
                    Academic analysis of the successful 2019 Warburg Pincus acquisition of Practice Velocity and DocuTAP that formed Experity, applying project management principles to a completed M&A integration.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      Academic Project: MBA Coursework
                    </span>
                    <span className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Institution: Milwaukee School of Engineering
                    </span>
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      Focus: Strategic Business Analysis
                    </span>
                    <span className="flex items-center gap-2">
                      <Handshake className="w-4 h-4" />
                      M&A Transaction: 2019
                    </span>
                  </div>
                </div>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Project Overview</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This MBA project management case study analyzes the successful 2019 acquisition where Warburg Pincus purchased Practice Velocity and merged it with DocuTAP to form Experity. As a key member of the integration team, I led the feature parity analysis that enabled this $320M healthcare technology consolidation.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    The academic project applies formal project management methodologies retrospectively to this completed M&A transaction, demonstrating how structured frameworks could enhance future integration efforts. This analysis bridges practical experience with academic theory, examining what made this integration successful and identifying opportunities for process improvement.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Academic Framework & Methodology</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This case study applies MBA project management principles to analyze the Experity formation, examining how formal methodologies align with the successful integration approach:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          Strategic Analysis
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Comprehensive stakeholder analysis and impact assessment</li>
                          <li>Cost-benefit evaluation methodologies</li>
                          <li>Risk assessment and mitigation strategies</li>
                          <li>Timeline and resource optimization frameworks</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Decision Framework</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Multi-criteria decision analysis (MCDA)</li>
                          <li>Weighted scoring models for feature prioritization</li>
                          <li>Financial modeling and ROI calculations</li>
                          <li>Sensitivity analysis for key variables</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Stakeholder Management</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Cross-functional team coordination strategies</li>
                          <li>Communication and change management planning</li>
                          <li>Executive reporting and decision support</li>
                          <li>Client impact assessment and mitigation</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Project Management</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Work breakdown structure development</li>
                          <li>Critical path analysis and scheduling</li>
                          <li>Resource allocation and capacity planning</li>
                          <li>Quality assurance and testing protocols</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Key Learning Outcomes</h3>
                  
                  <div className="space-y-6">
                    <Card className="bg-blue-50 border border-blue-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Business Analysis Skills</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Quantitative Analysis:</strong> Advanced financial modeling and statistical analysis techniques</li>
                          <li><strong>Qualitative Assessment:</strong> Stakeholder impact evaluation and organizational change considerations</li>
                          <li><strong>Risk Management:</strong> Comprehensive risk identification and mitigation planning</li>
                          <li><strong>Decision Support:</strong> Executive-level reporting and recommendation development</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border border-green-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Technology Integration Expertise</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Feature Mapping:</strong> Systematic comparison of platform capabilities and user requirements</li>
                          <li><strong>Cost Optimization:</strong> Total cost of ownership analysis and budget planning</li>
                          <li><strong>Timeline Management:</strong> Critical path analysis for complex technology projects</li>
                          <li><strong>Quality Assurance:</strong> Testing protocols and validation methodologies</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border border-purple-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Professional Development Impact</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Enhanced Analytical Rigor:</strong> Formal frameworks complement practical experience</li>
                          <li><strong>Improved Communication:</strong> Academic writing and presentation skills development</li>
                          <li><strong>Strategic Thinking:</strong> Broader perspective on business strategy and decision-making</li>
                          <li><strong>Leadership Credibility:</strong> Advanced degree enhances executive presence and capabilities</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Integration with Professional Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This MBA case study examines the actual 2019 Warburg Pincus transaction that created Experity, analyzing how project management principles were applied in practice. The retrospective analysis provides insights for future M&A integrations:
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <p className="text-lg text-gray-700 font-medium">
                      "The best leaders combine practical experience with formal analytical frameworks to make better decisions and communicate more effectively with stakeholders."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <em>— On the value of academic rigor in executive leadership</em>
                    </p>
                  </blockquote>

                  <Card className="bg-yellow-50 border border-yellow-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Real-World Application</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li><strong>Methodology Validation:</strong> Academic frameworks confirm and enhance proven professional approaches</li>
                        <li><strong>Communication Enhancement:</strong> Formal analytical language improves stakeholder engagement</li>
                        <li><strong>Risk Mitigation:</strong> Structured analysis identifies potential issues earlier in planning process</li>
                        <li><strong>Reproducible Results:</strong> Documented frameworks enable consistent application across future projects</li>
                      </ul>
                    </CardContent>
                  </Card>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Project Documentation & Resources</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Complete MBA project documentation analyzing the Experity M&A transaction through a project management lens. These resources demonstrate the application of academic frameworks to a successful real-world integration:
                  </p>
                  
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200">
                    <CardContent className="p-6">
                      <div className="text-center mb-6">
                        <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h4 className="text-xl font-bold text-gray-900">Academic Project Documentation</h4>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <a href="/files/A3-v1.pdf" download className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-red-600 mt-1" />
                            <div>
                              <h5 className="font-bold text-gray-900">A3 Analysis Document</h5>
                              <p className="text-sm text-gray-600">Comprehensive problem-solving framework and solution analysis</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="/files/project-charter-v1.pdf" download className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-red-600 mt-1" />
                            <div>
                              <h5 className="font-bold text-gray-900">Project Charter</h5>
                              <p className="text-sm text-gray-600">Formal project initiation and stakeholder alignment document</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="/files/Scope-Statement-v1.pdf" download className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-red-600 mt-1" />
                            <div>
                              <h5 className="font-bold text-gray-900">Scope Statement</h5>
                              <p className="text-sm text-gray-600">Detailed project scope, deliverables, and success criteria</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="/files/project-determination-form.pdf" download className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-red-600 mt-1" />
                            <div>
                              <h5 className="font-bold text-gray-900">Project Determination Form</h5>
                              <p className="text-sm text-gray-600">Project classification and management approach determination</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://drive.google.com/file/d/1VzN64Nk2MuAR-Uv2utTU_Ij71oTm_bz5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <BarChart3 className="w-6 h-6 text-green-600 mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-bold text-gray-900">Gantt Chart Schedule</h5>
                                <ExternalLink className="w-4 h-4 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-600">Visual project timeline and critical path analysis</p>
                            </div>
                          </div>
                        </a>
                        
                        <a href="https://drive.google.com/file/d/1Vyf2AV2gV6pMEyf8TGslJgSDEGzw1YpU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <FileText className="w-6 h-6 text-green-600 mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-bold text-gray-900">Microsoft Project File</h5>
                                <ExternalLink className="w-4 h-4 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-600">Detailed project management plan with resource allocation</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Academic Excellence & Professional Growth</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This case study of the 2019 Experity formation demonstrates how MBA education enhances the ability to analyze and learn from successful business transactions. By applying project management frameworks to this completed M&A, the analysis provides valuable insights for future healthcare technology integrations.
                  </p>
                  
                  <Card className="bg-gray-50 border border-gray-300">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Continuing Education Value</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Analyzing the successful Experity integration through an MBA lens demonstrates how formal education enhances practical experience. This case study of the 2019 Warburg Pincus transaction provides a blueprint for applying project management principles to future M&A opportunities.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <div className="space-y-6 pt-8">
                  <h3 className="text-xl font-bold text-gray-900">Academic & Professional Integration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This project demonstrates how formal business education enhances practical leadership experience, providing frameworks for more effective decision-making and stakeholder communication in complex M&A environments.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link to="/ma-integration-strategy">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Handshake className="w-4 h-4 mr-2" />
                        View Real-World M&A Case Study
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button variant="outline">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        View Educational Background
                      </Button>
                    </Link>
                    <Link to="/projects">
                      <Button variant="outline">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Executive Portfolio
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">MBA Research</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Strategic Analysis</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">M&A Integration</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Cost-Benefit Analysis</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Project Management</span>
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">Academic Excellence</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-semibold">Professional Development</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Analytical Framework</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MAFeatureParity;