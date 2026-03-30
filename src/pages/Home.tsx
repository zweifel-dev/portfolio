import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, Users, Handshake, Briefcase, Layers } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">Brandon Zweifel</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              Senior Software, Data, & AI Executive
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg lg:text-xl mb-12 text-white/80 max-w-2xl mx-auto">
              Building AI-augmented data organizations that deliver measurable business outcomes in healthcare SaaS
            </p>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto" staggerDelay={0.08}>
            <StaggerItem>
              <div className="metric-card">
                <div className="text-3xl lg:text-4xl font-bold text-accent">$125M</div>
                <div className="text-sm mt-1 text-white/80">Cost Savings Delivered</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="metric-card">
                <div className="text-3xl lg:text-4xl font-bold text-accent">$1.2B</div>
                <div className="text-sm mt-1 text-white/80">Valuation Growth</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="metric-card">
                <div className="text-3xl lg:text-4xl font-bold text-accent">65+</div>
                <div className="text-sm mt-1 text-white/80">Team Built & Led</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="metric-card">
                <div className="text-3xl lg:text-4xl font-bold text-accent">7</div>
                <div className="text-sm mt-1 text-white/80">Production AI Agents</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="page-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="shadow-executive-lg">
              <CardContent className="pt-10 pb-10 text-center">
                <img
                  src="/images/Brandon-Zweifel-headshot.jpg"
                  alt="Brandon Zweifel - Senior Software, Data, & AI Executive"
                  className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-executive-md"
                />
                <h2 className="text-3xl font-bold mb-6">Executive Summary</h2>
                <div className="max-w-4xl mx-auto mb-10">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Senior Software, Data, and AI executive who delivers measurable business outcomes through <span className="font-semibold text-foreground">AI-augmented data organizations</span>.
                    Drove <span className="font-semibold text-foreground">$125M in post-M&A cost reductions</span> and
                    contributed to <span className="font-semibold text-foreground">$500M to $1.2B valuation growth</span> at
                    Experity. Built and scaled a <span className="font-semibold text-foreground">65+ person data organization</span>,
                    deployed <span className="font-semibold text-foreground">seven production AI agents</span> that transformed
                    the team's operating model, and architected a six-layer enterprise data platform governing
                    one of the nation's largest urgent care datasets. The CEO identified the product analytics practice
                    built under this leadership as the highest-value function delivered internally.
                  </p>
                </div>
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <StaggerItem>
                    <div className="flex flex-col items-center p-4 bg-primary/5 rounded-xl">
                      <Bot className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium">AI Leadership</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex flex-col items-center p-4 bg-primary/5 rounded-xl">
                      <Database className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium">Data Platforms</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex flex-col items-center p-4 bg-primary/5 rounded-xl">
                      <Layers className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium">M&A Integration</span>
                    </div>
                  </StaggerItem>
                  <StaggerItem>
                    <div className="flex flex-col items-center p-4 bg-primary/5 rounded-xl">
                      <Users className="w-8 h-8 text-primary mb-2" />
                      <span className="text-sm font-medium">Team Building</span>
                    </div>
                  </StaggerItem>
                </StaggerContainer>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="page-section-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            <StaggerItem>
              <Card className="shadow-executive-md hover:shadow-executive-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">AI-Augmented Data Organization</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Transformed a data team from manual producers to agent-augmented reviewers, deploying seven
                    production agents that shifted the team's constraint from build capacity to review capacity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button asChild>
                    <Link to="/ai-augmented-data-org">View Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="shadow-executive-md hover:shadow-executive-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Enterprise Data Platform</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Built a six-layer platform with semantic layer governance, delivering certified metrics
                    in weeks instead of months and recovering 30-40% of analyst capacity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button asChild>
                    <Link to="/enterprise-data-platform">View Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="shadow-executive-md hover:shadow-executive-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Full Project Portfolio</CardTitle>
                  <CardDescription className="text-base mt-2">
                    M&A integration delivering $125M in savings, team scaling from 15 to 65+, data culture
                    transformation driving $20M+ in revenue impact, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button asChild>
                    <Link to="/projects">View All Projects</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
              <Card className="shadow-executive-md hover:shadow-executive-lg transition-all duration-300 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">Let's Connect</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Open to executive leadership opportunities, advisory roles, and strategic conversations
                    about AI-augmented data organizations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <Button asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};

export default Home;
