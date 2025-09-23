import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Search, MessageCircle } from 'lucide-react';

const Research = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Research</h1>
          <p className="text-xl leading-relaxed">Exploring Data Analytics, Technology Innovation, and Strategic Leadership</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Research Interests</h2>
                
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Data Analytics in Healthcare Technology</h3>
                  <p className="text-gray-700 leading-relaxed">
                    My research focuses on leveraging data analytics to improve healthcare delivery and operational efficiency. Key areas include:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Predictive analytics for patient flow optimization</li>
                    <li>Real-time dashboards for clinical decision support</li>
                    <li>Machine learning applications in healthcare operations</li>
                    <li>Data governance and privacy in medical systems</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Data Culture & Organizational Data Transformation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Leading organizations through comprehensive data transformations using proven frameworks and strategic methodologies. My research focuses on building sustainable data cultures that drive business value:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>DELTA framework implementation for data-driven organizations</li>
                    <li>Cultural change management in data transformation initiatives</li>
                    <li>Executive leadership alignment on data strategy and governance</li>
                    <li>Measuring data maturity and ROI of analytics investments</li>
                    <li>Building cross-functional data literacy and capabilities</li>
                    <li>Engineering metrics as a foundation for broader data culture</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Strategic Technology Adoption</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Research into how organizations successfully adopt and integrate new technologies:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Change management strategies for technical transformations</li>
                    <li>ROI measurement for technology investments</li>
                    <li>Build vs. buy decision frameworks</li>
                    <li>Technology stack modernization approaches</li>
                  </ul>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Financial Market Analytics & Quantitative Research</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Applying data science and software engineering methodologies to financial market analysis. This research combines traditional technical analysis with modern machine learning approaches and systematic risk management strategies.
                  </p>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Research Areas:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Systematic approach to day trading using data-driven methodologies</li>
                      <li>Python automation for trade analysis and performance tracking</li>
                      <li>AI-powered trade journal analysis using ChatGPT and Claude</li>
                      <li>Technical indicator effectiveness and statistical validation</li>
                      <li>Risk management frameworks and ATR-based strategies</li>
                      <li>M&A financial modeling and data integration analysis</li>
                      <li>Private equity portfolio analytics and performance measurement</li>
                      <li>Market pattern recognition and algorithmic trading potential</li>
                    </ul>
                  </div>
                  
                  <Card className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Active Research Project: Systematic Financial Analytics</h4>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        A comprehensive analysis of applying software engineering principles to financial markets, including automated data collection, AI-powered analysis, and systematic risk management. This research documents a methodical approach to financial analytics using technical expertise and DELTA framework principles.
                      </p>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">7+</div>
                          <div className="text-sm text-gray-600">Books Studied</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">$28K</div>
                          <div className="text-sm text-gray-600">Research Capital</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">2 Months</div>
                          <div className="text-sm text-gray-600">Intensive Study</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Methodology Highlights:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Data-driven approach using Python for trade analysis automation</li>
                          <li>• AI-powered journaling and pattern recognition using GPT models</li>
                          <li>• Statistical validation of technical indicators and market patterns</li>
                          <li>• Systematic risk management using ATR-based position sizing</li>
                          <li>• Integration of fundamental analysis with technical execution</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Current Projects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Healthcare Analytics Platform</h4>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Developing a comprehensive analytics platform for healthcare providers to optimize patient care delivery and operational efficiency.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Healthcare</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Analytics</span>
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Data Science</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-gray-200">
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">Data Culture Metrics Dashboard</h4>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Developing an integrated dashboard that demonstrates DELTA framework implementation through engineering metrics as a foundation for broader organizational data transformation and culture building.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">DELTA Framework</span>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Data Culture</span>
                          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">DORA Metrics</span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">Open Source</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Healthcare Technology Vision & Future Perspectives</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Strategic insights and predictions for the future of healthcare technology, data analytics, and organizational transformation in regulated environments.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">2025-2030 Healthcare Technology Predictions:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>AI-First Clinical Workflows:</strong> Integration of AI/ML models directly into clinical decision-making processes, with real-time patient risk scoring becoming standard practice</li>
                      <li><strong>Interoperability Breakthrough:</strong> FHIR R5 adoption will enable seamless data exchange, creating true patient data portability across health systems</li>
                      <li><strong>Population Health at Scale:</strong> Predictive analytics will shift focus from individual patient care to community health management and prevention strategies</li>
                      <li><strong>Privacy-Preserving Analytics:</strong> Federated learning and differential privacy will enable multi-institutional research without compromising patient privacy</li>
                      <li><strong>Voice-First Healthcare:</strong> Natural language processing will revolutionize clinical documentation, reducing physician administrative burden by 40%</li>
                      <li><strong>Data-as-a-Product Maturity:</strong> Healthcare organizations will monetize anonymized data insights while improving care delivery through advanced analytics platforms</li>
                    </ul>
                  </div>
                  
                  <Card className="bg-gray-50 border border-gray-300">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Strategic Leadership in Healthcare Digital Transformation</h4>
                      <p className="text-gray-700 leading-relaxed">
                        The next decade will require healthcare technology leaders to balance innovation with regulatory compliance, patient safety, and cost containment. Success will depend on building data-literate teams, implementing robust governance frameworks, and maintaining focus on patient outcomes while driving operational efficiency. Organizations that invest in DELTA framework implementation and modern data stack architecture today will lead tomorrow's healthcare innovation.
                      </p>
                    </CardContent>
                  </Card>
                </section>

                <section className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Publications & Presentations</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stay tuned for upcoming publications and conference presentations on healthcare analytics, DELTA framework implementation, and technology strategy in regulated environments.
                  </p>
                  
                  <Card className="bg-yellow-50 border border-yellow-200">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Active Research Areas</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Currently conducting research in healthcare organizational data transformation, focusing on practical implementation of the DELTA framework for building data-driven cultures in regulated environments. This work includes developing measurement frameworks for healthcare data maturity, executive change management strategies specific to clinical settings, and engineering metrics as foundational elements of broader healthcare data transformation initiatives.
                      </p>
                    </CardContent>
                  </Card>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Research;