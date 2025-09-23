import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Brandon Zweifel</h1>
          <p className="text-xl leading-relaxed">Senior Director of Data Strategy & Analytics | SaaS Healthcare Technology Executive | DELTA Framework Expert</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <figure className="text-center">
                  <img 
                    src="/images/Brandon-Zweifel-headshot.jpg" 
                    alt="Brandon Zweifel - Professional headshot of Senior Director of Data Strategy & Analytics" 
                    className="w-64 h-64 mx-auto rounded-lg object-cover shadow-lg"
                    loading="lazy"
                  />
                </figure>
                
                <section className="text-center space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Contact Information</h2>
                  <div className="space-y-2 text-lg">
                    <p><strong>Location:</strong> Roscoe, Illinois</p>
                    <p><strong>Phone:</strong> 608.931.4726</p>
                    <p><strong>Email:</strong> Brandon@Zweifel.tech</p>
                    <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bzweifel/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">linkedin.com/in/bzweifel</a></p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
                  <p className="text-lg font-semibold text-blue-600">From Military Intelligence Officer to Data Strategy Senior Director.</p>
                  <p className="text-gray-700 leading-relaxed">
                    Data strategy executive with over a decade of success leading healthcare technology M&A integrations that deliver measurable business results. I combine military intelligence discipline with analytical expertise to architect enterprise data strategies during critical market consolidation. Led platform unification strategies that enabled $500M valuation growth and $10M+ recurring cost savings through strategic platfrom consolidation and DELTA framework implementation. Passionate about healthcare analytics, M&A data integration, and quantitative research methodologies.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Data Leadership Philosophy</h2>
                  <p className="text-lg text-gray-700">Strong leadership builds both people and performance. By shaping strategy with data and empowering teams to act on it, success becomes sustainable, scalable, and repeatable.</p>
                </section>   

                <div className="grid md:grid-cols-2 gap-8">
                  <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Current Role & Key Achievements</h2>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Senior Director of Data Strategy & Analytics</strong> at Experity, leading enterprise-wide data initiatives and governance across all business functions.</li>
                      <li>Spearheading transition to modern data stack with <strong>Snowflake, dbt/Coalesce, and Tableau Cloud</strong>, enabling real-time insights and scalable analytics.</li>
                      <li>Architected <strong>Data-as-a-Product strategy</strong> integrating predictive analytics and AI/ML models to improve client workflows and patient outcomes.</li>
                      <li>Led M&A data integration efforts resulting in <strong>$10M+ in recurring infrastructure cost savings</strong> and platform consolidation.</li>
                      <li>Successfully managed <strong>$500M to $1.2B company valuation growth</strong> through strategic technology initiatives and team leadership.</li>
                      <li>Implemented <strong>DELTA framework</strong> for organizational data transformation and culture building.</li>
                    </ul>
                  </section>
                  
                  <section className="space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Education & Continuous Learning</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold">MBA in Advanced Business Strategy Using A.I. and Analytics</p>
                        <p>Milwaukee School of Engineering (Expected Dec. 2025)</p>
                        <p className="text-gray-600 italic">Currently integrating strategic AI and analytics insights into leadership roles to optimize business growth and technology-driven innovation.</p>
                      </div>
                      
                      <div>
                        <p className="font-bold">Bachelor's in Computer Science</p>
                        <p>University of Illinois – Springfield</p>
                        <p className="text-gray-600 italic">Emphasis in Software Engineering, Architecture, and Security</p>
                      </div>
                    </div>
                  </section>
                </div>
                

                
                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Professional Experience</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-bold">Senior Director of Data Strategy & Analytics</h4>
                      <p className="text-gray-600 italic">Experity | January 2025 - Present</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Spearhead enterprise-wide data strategy, governance, and analytics initiatives, aligning data capabilities with corporate objectives across product, operations, RCM, and client success teams.</li>
                        <li>Lead a high-performing team of 15+ professionals including data engineers, analysts, and a data scientist, fostering a culture of innovation, collaboration, and data literacy.</li>
                        <li>Architect and execute the company's transition to a modern data stack including Snowflake, dbt/Coalesce, and Tableau Cloud, enabling real-time insights and scalable analytics delivery.</li>
                        <li>Partner with C-suite and executive leaders to define key metrics, OKRs, and self-service analytics capabilities, driving operational efficiency and informed decision-making.</li>
                        <li>Developed and launched a Data-as-a-Product strategy, integrating predictive analytics and AI/ML models to improve client workflows and patient outcomes.</li>
                        <li>Oversaw M&A data integration efforts including feature parity, cost analysis, and stakeholder alignment, resulting in platform consolidation and increased ROI.</li>
                        <li>Implemented a Hub-and-Spoke analytics model to support department-level insight generation while maintaining centralized governance and tooling consistency.</li>
                        <li>Negotiated and managed multi-million-dollar contracts for data and analytics platforms, ensuring HIPAA compliance, license optimization, and vendor accountability.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-bold">Director of Software Development</h4>
                      <p className="text-gray-600 italic">Experity / Practice Velocity | June 2016 - January 2025</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Led cross-functional teams of 50+ engineers during Practice Velocity acquisition, scaling M&A integration efforts to 65+ professionals for feature parity initiatives, driving 40% increase in product efficiency.</li>
                        <li>Directed comprehensive migration from legacy monolith to micro-services architecture during M&A consolidation, reducing maintenance costs by $10M annually and enabling scalable platform integration.</li>
                        <li>Enhanced agile methodologies, boosting team productivity by 30% and reducing time-to-market by 20%, enabling faster feature parity during M&A integration.</li>
                        <li>Spearheaded feature parity initiatives post-merger, resulting in $0M in recurring infrastructure cost savings and increasing company valuation from $500M to $1.2B within two years.</li>
                        <li>Implemented decision-making frameworks that improved product performance and provided strategic insights.</li>
                        <li>Launched successful DEI initiatives to address gender bias, foster communication across generations, promote introverted leadership, and break mental health stigmas, improving team satisfaction and retention by 15%.</li>
                        <li>Mentored and developed engineering talent, increasing employee retention and performance through leadership coaching and technical skills development.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-6">
                      <h4 className="text-xl font-bold">Manager of Software Engineering</h4>
                      <p className="text-gray-600 italic">FatWallet | March 2015 - June 2016</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Led feature development, improving site performance by 30% and attracting 1.5M additional monthly users.</li>
                        <li>Partnered with UX/UI designers to optimize user interface during platform consolidation, reducing clicks by 15% and improving user adoption across merged systems.</li>
                        <li>Led junior engineers in performance optimization, improving website loading times by 40%.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <h4 className="text-xl font-bold">Manager of Software Engineering</h4>
                      <p className="text-gray-600 italic">SupplyCore | August 2012 - February 2015</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Developed and deployed custom ERP solutions that improved operational efficiency by 20% and saved clients $2.5M annually.</li>
                        <li>Led development of real-time analytics reporting module for unified platform, increasing customer satisfaction by 30% and supporting post-acquisition client retention.</li>
                        <li>Conducted technical training sessions, reducing support tickets by 25% and saving 500 hours of support time monthly.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-6">
                      <h4 className="text-xl font-bold">Intel Analyst Non-Commissioned Officer</h4>
                      <p className="text-gray-600 italic">United States Army | November 2005 - December 2013</p>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        <li>Led intelligence analysis operations, using advanced data tools to drive mission-critical outcomes.</li>
                        <li>Trained and mentored junior personnel, improving team performance and operational readiness.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">Technical Skills & Expertise</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-xl font-bold mb-4">Leadership & Strategy</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>Strategic Leadership</li>
                        <li>Data-Driven Decision Making</li>
                        <li>Agile Methodologies</li>
                        <li>Cloud Migration</li>
                        <li>Cross-Functional Collaboration</li>
                        <li>Program Management</li>
                        <li>Continuous Improvement</li>
                        <li>CI/CD Implementation</li>
                        <li>Effective Communication</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-4">Technology</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Cloud Technologies:</strong> AWS, EKS, EC2, Kafka, Lambdas, Serverless</li>
                        <li><strong>Data Stack:</strong> Snowflake, dbt/Coalesce, Tableau Cloud</li>
                        <li><strong>Monitoring Tools:</strong> Kibana, Elasticsearch, CloudWatch, New Relic, Open Telemetry, Datadog</li>
                        <li><strong>Programming Languages:</strong> C#, VB.NET, Java</li>
                        <li><strong>Web Technologies:</strong> Angular, Node.js, React</li>
                        <li><strong>Databases:</strong> SQL, PostgreSQL, DynamoDB</li>
                        <li><strong>CI/CD:</strong> Jenkins, GitLab CI, CircleCI</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">Data Strategy Expertise & Strategic Focus</h2>
                  <p className="text-gray-700 leading-relaxed">
                    I specialize in <strong>enterprise data strategy, DELTA framework implementation, and organizational transformation</strong>. My passion lies in building data cultures that drive business value—from architecting modern data stacks (Snowflake, dbt, Tableau) to developing Data-as-a-Product strategies and financial analytics platforms. I thrive on turning complex data challenges into competitive advantages while leading high-performing, diverse teams. Particularly interested in financial data science, M&A analytics, and quantitative investment strategies.
                  </p>
                </section>
                
                <section className="text-center space-y-4 pt-8">
                  <h3 className="text-2xl font-bold">Let's Connect</h3>
                  <p className="text-gray-700">Want to collaborate or learn more? Reach out below!</p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Contact Me</Button>
                  </Link>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;