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
                    This MBA project management case study applies academic frameworks to a real-world M&A integration challenge. Post-merger, Experity operated two EMR platforms—Practice Velocity and DocuTAP—causing duplication, increased costs, client confusion, and delayed innovation. As Head of Engineering, I co-led the feature parity initiative to consolidate these platforms.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Over 1.5 years of coursework, I applied project management methodologies—including A3 analysis, project charter development, scope definition, and Gantt chart planning—to document and analyze this critical integration. The project goal: seamless, cost-effective consolidation achieving 80%+ feature parity, 90%+ client retention, and 35% cost reduction.
                  </p>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Project Management Methodologies Applied</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Throughout the MBA coursework, I applied formal project management tools to analyze and document the real-world EMR consolidation project:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                          A3 Problem Solving Analysis
                        </h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Root cause analysis of dual-platform inefficiencies</li>
                          <li>Current state vs future state mapping</li>
                          <li>Cost-benefit analysis for platform consolidation</li>
                          <li>Implementation roadmap with measurable outcomes</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Project Charter Development</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Defined project objectives: 80%+ feature parity, 90%+ retention</li>
                          <li>Stakeholder roles: PM, Engineering, Product, Data, Client Success</li>
                          <li>Success criteria: 35% cost reduction, unified roadmap</li>
                          <li>Resource allocation and timeline constraints</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Scope Definition & Management</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Gap analysis between Practice Velocity and DocuTAP platforms</li>
                          <li>Feature prioritization based on client usage data</li>
                          <li>Migration planning and client segmentation strategy</li>
                          <li>Iterative feedback loops and scope refinement</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Gantt Chart & Implementation</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li>Phased approach: Gap Analysis → Roadmap → Execution → Migration</li>
                          <li>Critical path identification for feature development</li>
                          <li>Resource allocation across engineering and product teams</li>
                          <li>Milestone tracking and performance monitoring</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Cross-Functional Team & Implementation</h3>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Project Team Structure</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Cassie Kennedy</strong> - Project Manager</li>
                      <li><strong>Brandon Zweifel</strong> - Head of Engineering</li>
                      <li><strong>Product Managers & SMEs</strong> - Feature Identification and Planning</li>
                      <li><strong>Data Analysts</strong> - Usage & Cost Data Modeling</li>
                      <li><strong>Engineering Managers</strong> - Feasibility Assessment and Delivery</li>
                      <li><strong>Client Success Managers</strong> - Migration Planning, Communication, & Training</li>
                    </ul>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Implementation & Learning Outcomes</h3>
                  
                  <div className="space-y-6">
                    <Card className="bg-blue-50 border border-blue-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Implementation Phases Applied</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Gap Analysis:</strong> Documented feature differences between platforms</li>
                          <li><strong>Cost-Benefit Modeling:</strong> Client value vs. development cost analysis</li>
                          <li><strong>Roadmap Alignment:</strong> Unified product and engineering roadmap</li>
                          <li><strong>Feature Execution:</strong> Iterative development and deployment</li>
                          <li><strong>Client Migration:</strong> Phased rollout with continuous monitoring</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border border-green-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Project Management Skills Developed</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>A3 Problem Solving:</strong> Structured approach to complex business problems</li>
                          <li><strong>Charter Development:</strong> Clear project scope and success criteria</li>
                          <li><strong>Gantt Chart Planning:</strong> Resource optimization and timeline management</li>
                          <li><strong>Stakeholder Management:</strong> Cross-functional team coordination</li>
                          <li><strong>Risk Management:</strong> Proactive identification and mitigation strategies</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border border-purple-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-4">Real-World Impact & Results</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                          <li><strong>Cost Reduction:</strong> Achieved 35%+ reduction in operational costs</li>
                          <li><strong>Feature Parity:</strong> Delivered 85%+ feature coverage</li>
                          <li><strong>Client Retention:</strong> Maintained 92%+ client retention during migration</li>
                          <li><strong>Platform Unification:</strong> Successfully consolidated to single EMR platform</li>
                          <li><strong>Innovation Velocity:</strong> Unified roadmap accelerated feature delivery</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Academic Application to Real-World Challenge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This MBA project demonstrates how academic project management methodologies enhance real-world execution. By applying A3, project charter, scope management, and Gantt chart planning to the actual EMR consolidation, I developed a comprehensive framework for managing complex technology integrations:
                  </p>
                  
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                    <p className="text-lg text-gray-700 font-medium">
                      "Applying project management frameworks to real-world challenges during the coursework allowed me to validate methodologies while solving actual business problems."
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <em>— Bridging academic theory with practical execution</em>
                    </p>
                  </blockquote>

                  <Card className="bg-yellow-50 border border-yellow-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Key Lessons from Academic Analysis</h4>
                      <ul className="list-disc pl-6 space-y-1 text-gray-700">
                        <li><strong>Structured Problem Solving:</strong> A3 methodology provided clear framework for complex integration challenges</li>
                        <li><strong>Stakeholder Alignment:</strong> Project charter ensured all teams understood objectives and success metrics</li>
                        <li><strong>Resource Optimization:</strong> Gantt charts revealed critical path dependencies and resource conflicts</li>
                        <li><strong>Continuous Improvement:</strong> Academic documentation enabled iterative refinement of approach</li>
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
                        
                        <a href="https://drive.google.com/file/d/1k2AOcW-TPBbAMt5XnZa0rD8ugkagaVZb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
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
                        
                        <a href="https://docs.google.com/presentation/d/1_myyd5pvGAk6Fz1pBnMPeTjpH3fA5xOb/edit?usp=sharing&ouid=104353410864813976568&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
                          <div className="flex items-start gap-3">
                            <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h5 className="font-bold text-gray-900">Final PowerPoint Presentation</h5>
                                <ExternalLink className="w-4 h-4 text-gray-400" />
                              </div>
                              <p className="text-sm text-gray-600">Comprehensive project presentation and analysis summary</p>
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