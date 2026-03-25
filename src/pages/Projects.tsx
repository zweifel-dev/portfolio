import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { Bot, Database, Users, Briefcase, FlaskConical, ArrowRight, Layers, GitBranch } from 'lucide-react';

const flagshipProjects = [
  {
    title: 'AI-Augmented Data Organization',
    route: '/ai-augmented-data-org',
    icon: Bot,
    summary:
      'Deployed 7 AI agents to production on AWS Bedrock AgentCore with MCP tool integration, transforming the data team from manual producers to agent-augmented reviewers. Engineers now review and merge LLM-generated dbt models, metric definitions, and quality tests via pull requests.',
    metrics: ['7 Production Agents', 'Team Model Transformed'],
    tags: ['Strands Agents SDK', 'AWS Bedrock', 'MCP', 'dbt'],
  },
  {
    title: 'M&A Integration Strategy',
    route: '/ma-integration-strategy',
    icon: Briefcase,
    summary:
      'Led post-M&A platform integration (DocuTAP + Practice Velocity = Experity) delivering $125M in infrastructure cost reductions and contributing to a valuation increase from $500M to $1.2B in 24 months. Directed migration from legacy monolith to microservices on AWS.',
    metrics: ['$125M Savings', '$1.2B Valuation'],
    tags: ['M&A Integration', 'AWS Microservices', 'Cost Optimization'],
  },
  {
    title: 'Enterprise Data Platform',
    route: '/enterprise-data-platform',
    icon: Database,
    summary:
      'Built and operationalized a six-layer enterprise data platform with semantic layer governance and metric certification on Snowflake. Deployed using a strangler pattern with iterative certified metric delivery reaching clients in 2-5 days. Eliminated per-dashboard metric rebuilding that consumed 30-40% of analyst capacity.',
    metrics: ['6-Layer Platform', '30-40% Capacity Recovered'],
    tags: ['Snowflake', 'dbt MetricFlow', 'Kafka CDC', 'Kimball'],
  },
  {
    title: 'Team Scaling Leadership',
    route: '/team-scaling-leadership',
    icon: Users,
    summary:
      'Built and scaled data and engineering teams from 15 to 65+ professionals through M&A integration, then led the team through the AI transition — shifting the operating model from manual producers to agent-augmented reviewers while improving retention by 15% and driving a 30% productivity gain.',
    metrics: ['15 to 65+ Team', '30% Productivity Gain'],
    tags: ['Team Leadership', 'AI Upskilling', 'Change Management'],
  },
];

const summaryProjects = [
  {
    title: 'AI Development Lab',
    route: '/ai-development-lab',
    icon: FlaskConical,
    outcome: '3 production agents, 4 frameworks evaluated',
    metrics: ['3 Agents', '4 Frameworks'],
  },
  {
    title: 'Enterprise Data Transformation',
    route: '/enterprise-data-transformation',
    icon: Layers,
    outcome: '$10M+ annual savings, 60% faster insights',
    metrics: ['$10M+ Savings', '60% Faster'],
  },
  {
    title: 'DELTA Framework',
    route: '/delta-framework-implementation',
    icon: GitBranch,
    outcome: '$20M+ revenue impact, data culture transformation',
    metrics: ['$20M+ Impact', 'Culture Shift'],
  },
  {
    title: 'M&A Feature Parity',
    route: '/ma-feature-parity',
    icon: Briefcase,
    outcome: 'Strategic analysis: DocuTAP + Practice Velocity merger',
    metrics: ['MBA Research', 'Strategic Analysis'],
  },
];

const Projects = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">Project Portfolio</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              Executive outcomes across AI transformation, platform engineering, M&A integration, and team leadership.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        {/* Flagship Case Studies */}
        <ScrollReveal>
          <h2 className="section-title mb-4">Flagship Case Studies</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            In-depth explorations of high-impact initiatives with measurable business outcomes.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          staggerDelay={0.12}
        >
          {flagshipProjects.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem
                key={project.route}
                className="lg:col-span-2"
              >
                <Card className="project-card h-full">
                  <CardContent className="p-8 lg:p-10 flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="card-icon flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {project.summary}
                    </p>

                    <div className="project-metrics mb-4">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="metric-highlight">
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="project-tags mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link to={project.route} className="mt-auto">
                      <Button className="w-full">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Summary Case Studies */}
        <ScrollReveal>
          <h2 className="section-title mb-4">Additional Case Studies</h2>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Supporting initiatives and academic research that complement the flagship portfolio.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {summaryProjects.map((project) => {
            const Icon = project.icon;
            return (
              <StaggerItem key={project.route}>
                <Link to={project.route} className="block h-full group">
                  <Card className="project-card h-full transition-colors">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-4">
                        <div className="card-icon flex items-center justify-center !w-10 !h-10 !p-2 !mb-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {project.outcome}
                      </p>

                      <div className="project-metrics">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="metric-highlight">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
    </main>
  );
};

export default Projects;
