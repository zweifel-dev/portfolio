import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const proveSteps = [
  { letter: 'P', name: 'Predict', text: 'Form falsifiable hypotheses with competing predictions before any action' },
  { letter: 'R', name: 'Run', text: 'Execute targeted experiments that maximize diagnostic value between hypotheses' },
  { letter: 'O', name: 'Observe', text: 'Collect factual results separated from interpretation to prevent confirmation bias' },
  { letter: 'V', name: 'Validate', text: 'Compare observations against predictions: supported, falsified, or inconclusive' },
  { letter: 'E', name: 'Evolve', text: 'Update understanding based on evidence, then iterate or conclude with confidence' },
];

const agenticAreas = [
  ['Framework evaluation', 'Strands Agents SDK vs LangGraph vs CrewAI vs OpenAI Agents SDK, with selection criteria tied to team capability and infrastructure fit'],
  ['Production agent architecture', 'Model-driven loops, graph pipelines, and multi-agent orchestration at enterprise scale'],
  ['Quality gates', 'Human-in-the-loop review for agent-generated code, documentation, and metric definitions'],
  ['MCP & composability', 'Tool integration patterns that let agents operate across data platform layers'],
  ['Change management', 'Moving teams from manual production to agent-augmented review without losing trust or quality'],
  ['Local AI infrastructure', 'Model routing, RAG patterns, and cloud vs. local vs. hybrid inference trade-offs'],
];

const topics = [
  {
    tag: 'Healthcare SaaS',
    title: 'AI/ML in Healthcare SaaS',
    why: 'AI-powered clinical tools only drive value when analytics can prove it. Measured impact is what earns executive buy-in.',
    intro: 'Applied research into AI and ML products within healthcare technology, and the analytics practices that measure their value.',
    points: [
      ['Measuring AI features', 'Time saved, adoption, and correlation between feature usage and outcomes'],
      ['Product research analytics', 'Segmentation, correlation analysis, and operational insights for customer success and leadership'],
      ['Predictive analytics', 'Patient flow optimization and real-time clinical decision support'],
      ['Privacy by design', 'Data governance and privacy architecture in HIPAA-compliant medical systems'],
    ],
  },
  {
    tag: 'Platform architecture',
    title: 'Enterprise Data Platform Architecture',
    why: 'A well-architected data platform ends the "dashboard factory," stops metric rebuilding, and gives every consumer, human or AI, a single source of truth.',
    intro: 'Modern enterprise data platform design, semantic layer governance, and metric certification: the layer that makes both analytics and AI agents trustworthy.',
    points: [
      ['Layered architecture', 'Ingestion through delivery, designed for iterative deployment instead of big-bang launches'],
      ['Semantic layer governance', 'dbt MetricFlow with a formal certification lifecycle and stakeholder alignment'],
      ['CDC pipeline design', 'Kafka, Schema Registry, and Debezium for real-time data movement'],
      ['Strangler pattern migration', 'Iterative platform cutover that builds organizational confidence through early wins'],
      ['Entity resolution', 'Kimball star schema with crosswalks for cross-system identity mapping'],
    ],
  },
  {
    tag: 'Culture & transformation',
    title: 'Data Culture & Organizational Transformation',
    why: 'AI agent adoption fails without data trust, governance maturity, and cultural readiness. The technology is the easy part.',
    intro: 'Building data cultures that support both human and AI-augmented decision-making at enterprise scale.',
    points: [
      ['DELTA framework', 'Structured implementation for measuring and advancing data-driven maturity'],
      ['Cultural shift', 'Moving from dashboard factory to metric-certified operation, reducing rework and increasing trust'],
      ['Executive alignment', 'Frameworks for getting leadership buy-in on data strategy and governance investment'],
      ['ROI measurement', 'Quantifying the business value of analytics maturity and infrastructure investment'],
      ['AI readiness', 'The governance, trust, and process discipline that AI agent adoption requires'],
    ],
  },
];

const Topic = ({ tag, title, why, children }: { tag: string; title: string; why: string; children: ReactNode }) => (
  <article className="grid gap-8 border-t py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16 lg:py-20">
    <ScrollReveal>
      <div className="lg:sticky lg:top-24">
        <p className="eyebrow">{tag}</p>
        <h2 className="mt-3">{title}</h2>
        <p className="mt-4 text-lg font-medium leading-relaxed text-foreground/80">{why}</p>
      </div>
    </ScrollReveal>
    <ScrollReveal delay={0.05}>
      <div>{children}</div>
    </ScrollReveal>
  </article>
);

const PointList = ({ points }: { points: string[][] }) => (
  <ul className="divide-y border-y">
    {points.map(([name, text]) => (
      <li key={name} className="py-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="mt-1 leading-relaxed text-muted-foreground">{text}</p>
      </li>
    ))}
  </ul>
);

const Research = () => {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Applied research, tested in practice."
        lead="Agentic AI, healthcare analytics, enterprise data platforms, and the culture that makes them work."
      />

      <div className="page-container">
        {/* Agentic AI */}
        <Topic
          tag="AI leadership"
          title="Agentic AI & AI-Augmented Organizations"
          why="Teams that put AI agents into production workflows gain throughput, consistency, and speed, while human effort shifts from creation to review."
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Building and deploying agentic AI systems that change how engineering and data teams operate: framework
            evaluation, production agent architecture, and the change management that adoption needs.
          </p>

          {/* PROVE */}
          <div className="ruled-card mt-8 p-7">
            <p className="eyebrow">Original research</p>
            <h3 className="mt-2">The PROVE Pattern</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              PROVE (Predict, Run, Observe, Validate, Evolve) applies the scientific method as an agentic AI reasoning loop.
              It grew out of the documented failure modes of production ReAct-based architectures (looping, premature
              commitment, error propagation, and confabulation) and answers each by implementing the full hypothesis-driven
              cycle that existing frameworks only partly recover.
            </p>
            <ol className="mt-6 space-y-3">
              {proveSteps.map((step) => (
                <li key={step.letter} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy font-mono text-sm font-semibold text-accent">
                    {step.letter}
                  </span>
                  <p className="leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">{step.name}:</span> {step.text}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-muted-foreground">
              The pattern works recursively across four abstraction layers (Meta, Strategic, Tactical, and Operational) and
              maps naturally to multi-agent architectures. It's analyzed against eight or more existing frameworks, including
              ReAct, Reflexion, Tree of Thoughts, LATS, and Plan-and-Execute, each of which rediscovered part of the loop.
            </p>
            <StaggerContainer className="mt-6 grid grid-cols-2 gap-4 border-t pt-6 sm:grid-cols-4">
              {[
                ['26', 'Academic sources'],
                ['8+', 'Frameworks analyzed'],
                ['4', 'Abstraction layers'],
                ['5', 'Step cycle'],
              ].map(([value, label]) => (
                <StaggerItem key={label}>
                  <p className="text-2xl font-semibold tabular-nums text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Resource guide */}
          <div className="surface-card mt-6 bg-muted p-7">
            <p className="eyebrow">Field guide</p>
            <h3 className="mt-2">Agentic AI Resource Guide</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A guide to more than 85 resources on architecture patterns, foundational research (ReAct, Chain of Thought,
              Tree of Thoughts, CoALA), production operations, and evaluation methodology. I wrote it to give engineering,
              product, and leadership a shared vocabulary when a team starts working with agents.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 border-t pt-6">
              {[
                ['85+', 'Curated resources'],
                ['14', 'Sections'],
                ['6+', 'Frameworks covered'],
              ].map(([value, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold tabular-nums text-foreground">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <h3 className="mb-2 mt-10 text-lg">Key research areas</h3>
          <PointList points={agenticAreas} />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/prove-pattern">
                Read: The PROVE Pattern <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/ai-development-lab">AI Development Lab</Link>
            </Button>
          </div>
        </Topic>

        {topics.map((topic) => (
          <Topic key={topic.title} tag={topic.tag} title={topic.title} why={topic.why}>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">{topic.intro}</p>
            <PointList points={topic.points} />
          </Topic>
        ))}
      </div>
    </>
  );
};

export default Research;
