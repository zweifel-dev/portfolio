import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Database, Users, Handshake, Briefcase, Brain, Layers, FlaskConical } from "lucide-react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Brandon Zweifel</h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Senior Data & AI Executive • Building AI-Augmented Data Organizations • Healthcare SaaS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm">Production AI Agents</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">6-Layer</div>
              <div className="text-sm">Enterprise Data Platform</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">$125M</div>
              <div className="text-sm">Post-M&A Cost Reductions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold">$1.2B</div>
              <div className="text-sm">Valuation Growth</div>
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
                alt="Brandon Zweifel - Senior Data & AI Executive"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-executive-md"
              />
              <h2 className="text-3xl font-bold mb-4">Executive Summary</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Military Intelligence Officer turned Senior Data & AI Executive
              </p>
              <div className="max-w-4xl mx-auto mb-8">
                <p className="text-lg leading-relaxed">
                  Senior data and AI executive who builds <span className="font-semibold">AI-augmented data organizations</span> — teams,
                  platforms, and cultures where LLM-powered agents and governed data infrastructure work together to multiply
                  what a data team can deliver. Built and deployed <span className="font-semibold">seven production pipeline agents</span> on
                  AWS Strands Agents SDK, shifting a data organization from manual producers to agent-augmented reviewers.
                  Architected a <span className="font-semibold">six-layer enterprise data platform</span> with semantic layer governance
                  and metric certification across one of the nation's largest urgent care datasets. Delivered <span className="font-semibold">$125M
                  in post-M&A infrastructure cost reductions</span>, contributed to a <span className="font-semibold">$500M to $1.2B valuation
                  increase</span>, and built a product research analytics practice the CEO called the highest-value function delivered internally.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <Bot className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Agentic AI</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <Database className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Data Platforms</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <Layers className="w-8 h-8 text-primary mb-2" />
                  <span className="text-sm font-medium">Semantic Layer</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                  <Users className="w-8 h-8 text-primary mb-2" />
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
            {/* AI & Agentic Work Card */}
            <Card className="shadow-executive-md hover:shadow-executive-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">AI-Augmented Data Organization</CardTitle>
                <CardDescription className="text-base">
                  Seven production pipeline agents on AWS Strands SDK, transforming a data team's operating model
                  from manual producers to agent-augmented reviewers with human-in-the-loop quality gates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Strands Agents SDK
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    MCP Integration
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Bedrock AgentCore
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/ai-augmented-data-org">View Case Study</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Data Platform Card */}
            <Card className="shadow-executive-md hover:shadow-executive-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Enterprise Data Platform</CardTitle>
                <CardDescription className="text-base">
                  Six-layer enterprise data platform with semantic layer governance, metric certification,
                  and CDC pipelines serving one of the nation's largest urgent care datasets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Snowflake
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    dbt MetricFlow
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Kafka CDC
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/enterprise-data-platform">View Case Study</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Executive Portfolio Card */}
            <Card className="shadow-executive-md hover:shadow-executive-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Executive Portfolio</CardTitle>
                <CardDescription className="text-base">
                  M&A integration delivering $125M in cost reductions, DELTA framework implementation,
                  team scaling from 15 to 65+ professionals, and product analytics leadership.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    M&A Integration
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    DELTA Framework
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Team Leadership
                  </span>
                </div>
                <div className="text-center">
                  <Button asChild>
                    <Link to="/projects">View All Projects</Link>
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
                  Ready to discuss AI-augmented data strategy, technology leadership opportunities,
                  strategic partnerships, or industry insights.
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
