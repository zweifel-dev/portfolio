import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Users, TrendingUp, Handshake, Briefcase, GitMerge, ChartLine, UserCog } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Brandon Zweifel</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Senior Director of Data Strategy & Analytics • DELTA Framework Expert • Data-Driven Transformation Leader
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Leadership</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">65+</div>
              <div className="text-sm">M&A Integration Team</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">$125M+</div>
              <div className="text-sm">Cost Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-executive-lg">
            <CardContent className="pt-8 text-center">
              <img 
                src="/images/Brandon-Zweifel-headshot.jpg" 
                alt="Brandon Zweifel - Senior Director of Data Strategy & Analytics"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-executive-md"
              />
              <h2 className="text-3xl font-bold mb-4">Executive Summary</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Military Intelligence Officer turned Data Strategy & Analytics Senior Director
              </p>
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg leading-relaxed">
                  Data strategy executive who transformed urgent care technology during critical healthcare market consolidation. 
                  Led enterprise data integration during <span className="font-semibold">$500M private equity acquisition</span>, 
                  delivering <span className="font-semibold">$125M+ recurring cost savings</span> through strategic platform 
                  consolidation and DELTA framework implementation. Specialized in healthcare technology M&A integration 
                  where data unification drives competitive advantage and operational efficiency at scale.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <Database className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Data Strategy</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <GitMerge className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">DELTA Framework</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <ChartLine className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Financial Analytics</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <UserCog className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Team Leadership</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Executive Portfolio Card */}
            <Card className="shadow-executive-md hover:shadow-executive-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Executive Portfolio</CardTitle>
                <CardDescription className="text-base">
                  Strategic initiatives enabling $500M valuation growth through M&A data integration, 
                  platform consolidation, and enterprise analytics transformation during healthcare market consolidation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Data Transformation
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    DELTA Framework
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Financial Analytics
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/projects">View Executive Portfolio</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Leadership Journey Card */}
            <Card className="shadow-executive-md hover:shadow-executive-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Data Leadership Journey</CardTitle>
                <CardDescription className="text-base">
                  From Military Intelligence to Data Strategy Senior Director - proven expertise in building data cultures, 
                  implementing DELTA framework, and driving organizational transformation through analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    DELTA Expert
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Data Culture
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Analytics Transformation
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/about">View Background</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Strategic Collaboration Card */}
            <Card className="shadow-executive-md hover:shadow-executive-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Strategic Collaboration</CardTitle>
                <CardDescription className="text-base">
                  Ready to discuss technology leadership opportunities, strategic partnerships, or industry insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Open to Opportunities
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Industry Speaking
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Advisory Roles
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/contact">Connect</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;