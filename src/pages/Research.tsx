import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHero from '@/components/PageHero';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const proveSteps = [
  { letter: 'P', name: 'Predict', text: 'Write down competing hypotheses, each with a prediction that could prove it wrong, before acting' },
  { letter: 'R', name: 'Run', text: 'Run the experiment that best tells the hypotheses apart' },
  { letter: 'O', name: 'Observe', text: 'Record what happened, kept apart from what it means, to guard against confirmation bias' },
  { letter: 'V', name: 'Validate', text: 'Compare observations against predictions: supported, falsified, or inconclusive' },
  { letter: 'E', name: 'Evolve', text: 'Update what you believe from the evidence, then go around again or stop' },
];

const agenticAreas = [
  ['Framework evaluation', 'Strands Agents SDK vs LangGraph vs CrewAI vs OpenAI Agents SDK, with selection criteria tied to team capability and infrastructure fit'],
  ['Production agent architecture', 'Model-driven loops, graph pipelines and multi-agent orchestration for large organizations'],
  ['Quality gates', 'Human-in-the-loop review for agent-generated code, documentation, and metric definitions'],
  ['MCP & composability', 'Tool integration patterns that let agents work across the layers of a data platform'],
  ['Change management', 'Moving teams from manual production to agent-augmented review without losing trust or quality'],
  ['Local AI infrastructure', 'Model routing, RAG patterns, and cloud vs. local vs. hybrid inference trade-offs'],
];

const topics = [
  {
    tag: 'Healthcare SaaS',
    title: 'AI/ML in healthcare SaaS',
    why: 'An AI clinical tool is only worth what analytics can show it does, and measured results are what convince executives to keep funding it.',
    intro: 'AI and ML products in healthcare technology, and the analytics that measure whether they work.',
    points: [
      ['Measuring AI features', 'Time saved, adoption, and correlation between feature usage and outcomes'],
      ['Product research analytics', 'Segmentation, correlation analysis and operational reporting for customer success and leadership'],
      ['Predictive analytics', 'Patient flow optimization and real-time clinical decision support'],
      ['Privacy by design', 'Data governance and privacy architecture in HIPAA-compliant medical systems'],
    ],
  },
  {
    tag: 'Platform architecture',
    title: 'Enterprise data platform architecture',
    why: 'A good data platform ends the "dashboard factory": metrics get defined once, and every consumer, human or AI, reads the same numbers.',
    intro: 'Data platform design, semantic layer governance and metric certification. Analysts and AI agents can only be trusted if the numbers underneath them can.',
    points: [
      ['Layered architecture', 'Ingestion through delivery, designed for iterative deployment instead of big-bang launches'],
      ['Semantic layer governance', 'dbt MetricFlow, with a formal process for certifying metrics and getting stakeholders to agree on them'],
      ['CDC pipeline design', 'Kafka, Schema Registry, and Debezium for real-time data movement'],
      ['Strangler pattern migration', 'Moving to a new platform piece by piece, so early wins build confidence'],
      ['Entity resolution', 'Kimball star schema with crosswalks for cross-system identity mapping'],
    ],
  },
  {
    tag: 'Culture & transformation',
    title: 'Data culture and organizational change',
    why: 'Agent adoption fails when people don\'t trust the data, governance is immature or the culture isn\'t ready. Those are harder problems than the technology.',
    intro: 'Building a data culture where both people and AI agents can make decisions from the same data.',
    points: [
      ['DELTA framework', 'A structured way to measure how data-driven an organization is and to improve it'],
      ['Cultural shift', 'Moving from a dashboard factory to certified metrics, with less rework and more trust in the numbers'],
      ['Executive alignment', 'Getting leadership to back data strategy and governance spending'],
      ['ROI measurement', 'Putting a business value on analytics maturity and infrastructure spending'],
      ['AI readiness', 'The governance, trust, and process discipline that AI agent adoption requires'],
    ],
    link: { to: '/delta-framework-implementation', label: 'Case study: Building a data culture with DELTA Plus' },
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
          title="Agentic AI and AI-augmented organizations"
          why="When agents do the first draft in a team's production work, the team ships more, more consistently, and people spend their time reviewing instead of writing."
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Building and deploying agent systems that change how engineering and data teams work, from picking a
            framework to production architecture to the change management that adoption needs.
          </p>

          {/* PROVE */}
          <div className="ruled-card mt-8 p-7">
            <p className="eyebrow">Original research</p>
            <h3 className="mt-2">The PROVE Pattern</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              PROVE (Predict, Run, Observe, Validate, Evolve) uses the scientific method as a reasoning loop for AI agents.
              I started from the documented ways production ReAct-based agents fail (looping, committing too early,
              propagating errors and confabulating). PROVE addresses each one by running the full hypothesis-testing cycle,
              where existing frameworks cover only parts of it.
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
              The pattern runs recursively at four levels (Meta, Strategic, Tactical and Operational) and maps cleanly onto
              multi-agent systems. I compared it with eight or more existing frameworks, including ReAct, Reflexion, Tree of
              Thoughts, LATS and Plan-and-Execute. Each of them rediscovered part of the loop.
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
              Tree of Thoughts, CoALA), running agents in production, and evaluating them. I wrote it to give engineering,
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
              <Link to="/ai-augmented-sdlc">The AI-Augmented SDLC</Link>
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
            {topic.link && (
              <Link to={topic.link.to} className="arrow-link mt-6">
                {topic.link.label} <ArrowRight />
              </Link>
            )}
          </Topic>
        ))}
      </div>
    </>
  );
};

export default Research;
