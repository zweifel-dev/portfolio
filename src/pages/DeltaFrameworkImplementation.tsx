import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CaseFacts, RelatedWork } from "@/components/CaseStudy";

const startingPoint = [
  ["Two architectures", "Separate technology stacks with incompatible data models"],
  ["Competing answers", "Analytics teams with different definitions of the same metrics"],
  ["Uneven governance", "Different compliance standards and data-quality practices"],
  ["Uneven literacy", "Very different comfort with data across the combined company"],
  ["Pressure to deliver", "Value needed now, while the long-term foundation was still being built"],
];

const pillars = [
  {
    letter: "D",
    name: "Data",
    principle: "Accessible, integrated, high-quality data that people trust.",
    moves: [
      "One governed foundation integrating both platforms",
      "HIPAA-compliant governance designed in, not bolted on",
      "Metrics defined and certified once, then reused everywhere",
      "Self-service built on certified data",
    ],
  },
  {
    letter: "E",
    name: "Enterprise",
    principle: "An enterprise view instead of departmental silos.",
    moves: [
      "Hub-and-spoke model: the hub owns the platform, standards and certification",
      "Analysts embedded in departments, close to the decisions",
      "Data treated as a product, with owners and named consumers",
    ],
  },
  {
    letter: "L",
    name: "Leadership",
    principle: "Leaders who ask for evidence and act on it.",
    moves: [
      "Executive sponsors for each domain",
      "Formal workshops aligning Finance, Product and Operations on certified KPIs",
      "A cross-functional analytics board that sets priorities",
    ],
  },
  {
    letter: "T",
    name: "Targets",
    principle: "Aim analytics at a few decisions that matter.",
    moves: [
      "A short list of targets: revenue, operations, client experience and clinical outcomes",
      "Every data request mapped to a decision and a named consumer before it's accepted",
    ],
  },
  {
    letter: "A",
    name: "Analysts",
    principle: "Skilled people, organized to be effective.",
    moves: [
      "A center of excellence with shared methods",
      "Data-literacy programs for business users",
      "Career paths, mentoring and inclusive hiring for the analytics team",
    ],
  },
  {
    letter: "T",
    name: "Technology",
    principle: "Infrastructure that makes the rest repeatable.",
    plus: true,
    moves: [
      "A cloud-native platform with automated pipelines and observability",
      "A semantic layer, so every tool and every agent reads the same definitions",
      "Incremental migration instead of a big-bang cutover",
    ],
  },
  {
    letter: "A",
    name: "Analytical techniques",
    principle: "Methods matched to the question.",
    plus: true,
    moves: [
      "Predictive analytics for operations and forecasting",
      "Statistical modeling for forecasting",
      "Visualization and storytelling that end in a decision",
    ],
  },
];

const stages = [
  ["Analytically impaired", "Decisions run on instinct and anecdote", "Get core data in one place and find a sponsor"],
  ["Localized analytics", "Pockets of good analysis that disagree with each other", "Build the enterprise view and shared definitions"],
  ["Analytical aspirations", "Leaders want to be data-driven; the foundation lags", "A governed platform, certified metrics and clear targets"],
  ["Analytical companies", "Analytics is routine in most functions", "Advanced techniques, self-service at scale, data products"],
  ["Analytical competitors", "Analytics is a competitive advantage", "Put analytics and AI inside the product and the work itself"],
];

const phases = [
  {
    name: "Foundation",
    goal: "Establish the infrastructure and governance",
    moves: [
      "Moved to a modern, cloud-native data platform",
      "Put HIPAA-compliant governance policies in place",
      "Added data-quality monitoring and observability",
      "Stood up the first hub-and-spoke structure",
    ],
  },
  {
    name: "Culture and capability",
    goal: "Build data literacy and analytical capability across the company",
    moves: [
      "Launched data-literacy training for business users",
      "Opened self-service analytics on certified data",
      "Set up the center of excellence with standard methods",
      "Formed cross-functional analytics councils and a data-as-a-product roadmap",
    ],
  },
  {
    name: "Advanced analytics",
    goal: "Bring predictive analytics and machine learning into the work",
    moves: [
      "Built predictive models for operations and forecasting",
      "Set up automated reporting and alerting",
      "Established governance and monitoring for ML models",
      "Made metric certification the standard that AI agents would later consume",
    ],
  },
  {
    name: "Scale",
    goal: "Grow the capability and keep improving it",
    moves: [
      "Grew the team across engineering, analytics and data science",
      "Extended analytics into new products and markets",
      "Treated the platform as an ongoing capability, not a fixed project",
    ],
  },
];

const problems = [
  {
    title: "Integrating two data worlds",
    issue: "Two platforms with incompatible data models and different governance.",
    approach:
      "A unified, cloud-based architecture with one governance framework, and automated pipelines that harmonized data from both legacy systems.",
  },
  {
    title: "Hiring in a hot market",
    issue: "Data professionals in healthcare technology were hard to hire and harder to keep.",
    approach:
      "Inclusive hiring, mentoring, clear career paths and real learning opportunities, so the team competed on growth and mission, not pay alone.",
  },
  {
    title: "Healthcare compliance",
    issue: "Every analytics initiative had to meet HIPAA and healthcare industry standards.",
    approach: "Compliance requirements built into every pillar from the start, with dedicated review and automated monitoring.",
  },
];

const successFactors = [
  ["Executive sponsorship", "Consistent, visible support from senior leadership"],
  ["Culture alongside technology", "Investing in people as deliberately as in tools"],
  ["Phased delivery", "Incremental value while the long-term foundation was built"],
  ["Measure and communicate", "Regular progress reporting and celebrating wins across the company"],
];

const pitfalls = [
  ["Technology first", "Buying tools before the organization is ready to use them"],
  ["Big bang", "One risky, wholesale cutover instead of steady increments"],
  ["Silos", "Building without cross-functional partners from day one"],
  ["Skipping change management", "Underinvesting in training and communication"],
  ["Compliance as an afterthought", "Bolting on regulatory requirements at the end"],
];

const DeltaFrameworkImplementation = () => {
  return (
    <>
      <PageHero
        eyebrow="Case study · Data culture"
        title="Building a data culture with DELTA Plus"
        lead="A merger left a healthcare SaaS company with two data stacks, two sets of metrics and uneven trust in both. I used the DELTA Plus model to turn data into shared infrastructure, and the culture it built later made the move to AI agents possible."
      />
      <CaseFacts
        facts={[
          { label: "Framework", value: "DELTA Plus (Davenport)" },
          { label: "Context", value: "Post-merger healthcare SaaS" },
          { label: "Pillars", value: "Data, Enterprise, Leadership, Targets, Analysts, Technology, Techniques" },
          { label: "Led to", value: "The foundation for AI agents" },
        ]}
      />

      {/* The model */}
      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">The model</p>
            <h2 className="mt-3">Why DELTA Plus</h2>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-xl font-medium leading-relaxed text-foreground">
              The biggest challenge wasn't technical, it was cultural. We had to help people see data not as a burden, but as
              their competitive advantage.
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                DELTA comes from Tom Davenport, Jeanne Harris and Bob Morison's <em>Analytics at Work</em>. It names five things
                an organization needs to compete on analytics: accessible, high-quality <strong className="text-foreground">Data</strong>,
                an <strong className="text-foreground">Enterprise</strong> orientation, analytical{" "}
                <strong className="text-foreground">Leadership</strong>, strategic{" "}
                <strong className="text-foreground">Targets</strong> and skilled{" "}
                <strong className="text-foreground">Analysts</strong>. Davenport later added{" "}
                <strong className="text-foreground">Technology</strong> and{" "}
                <strong className="text-foreground">Analytical techniques</strong>; the extended model is often called DELTA Plus.
              </p>
              <p>
                I chose it because it treats culture and leadership as first-class, alongside the tools. After a merger, culture is
                the harder problem.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Starting point */}
      <section className="page-section border-t">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Starting point</p>
            <h2 className="mt-3">One company, two ways of knowing.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              The merged company needed one view of the business, and leaders who trusted it.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <dl className="divide-y border-y">
              {startingPoint.map(([name, text]) => (
                <div key={name} className="grid gap-1 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="font-semibold text-foreground">{name}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{text}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="page-section border-t bg-muted">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Seven pillars"
              title="How I applied each one"
              description="Each pillar pairs the model's principle with what we actually put in place."
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              // Seven cards: the last one spans the row instead of sitting alone
              <StaggerItem key={p.name} className={i === pillars.length - 1 ? "h-full md:col-span-2 lg:col-span-3" : "h-full"}>
                <div className="surface-card flex h-full flex-col p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md bg-navy font-mono text-base font-semibold text-accent">
                      {p.letter}
                    </span>
                    <h3>{p.name}</h3>
                    {p.plus && <span className="chip ml-auto">Plus</span>}
                  </div>
                  <p className="mt-4 font-medium leading-relaxed text-foreground">{p.principle}</p>
                  <ul className="mt-4 space-y-2.5">
                    {p.moves.map((m) => (
                      <li key={m} className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Maturity */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Maturity"
              title="Where you are decides what to do next"
              description="Analytics at Work describes five stages of analytical maturity. This is how I read them, and where I'd focus at each."
            />
          </ScrollReveal>
          <div className="hidden gap-8 border-b pb-3 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground lg:grid lg:grid-cols-[3rem_14rem_1fr_1fr]">
            <span />
            <span>Stage</span>
            <span>You'll notice</span>
            <span>Focus on</span>
          </div>
          <ol>
            {stages.map(([name, sign, focus], i) => (
              <li key={name}>
                <ScrollReveal>
                  <div className="grid gap-2 border-b py-5 lg:grid-cols-[3rem_14rem_1fr_1fr] lg:items-baseline lg:gap-8">
                    <span className="font-mono text-sm text-accent-ink">{i + 1}</span>
                    <h3 className="text-lg">{name}</h3>
                    <p className="leading-relaxed text-muted-foreground">
                      <span className="eyebrow mr-2 lg:hidden">Sign</span>
                      {sign}
                    </p>
                    <p className="font-medium leading-relaxed text-foreground">
                      <span className="eyebrow mr-2 lg:hidden">Focus</span>
                      {focus}
                    </p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Phases */}
      <section className="page-section border-t bg-muted">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Implementation" title="Four phases, each delivering value" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((ph, i) => (
              <StaggerItem key={ph.name} className="h-full">
                <div className="ruled-card flex h-full flex-col p-6">
                  <p className="font-mono text-sm text-accent-ink">Phase {i + 1}</p>
                  <h3 className="mt-2 text-lg">{ph.name}</h3>
                  <p className="mt-2 text-[0.9375rem] font-medium leading-relaxed text-foreground">{ph.goal}</p>
                  <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {ph.moves.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Hard problems */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Hard problems" title="Three challenges, and how we met them" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {problems.map((pr) => (
              <StaggerItem key={pr.title} className="h-full">
                <div className="surface-card h-full p-7">
                  <h3>{pr.title}</h3>
                  <p className="eyebrow mt-5">Problem</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{pr.issue}</p>
                  <p className="eyebrow mt-5">Approach</p>
                  <p className="mt-1 leading-relaxed text-foreground">{pr.approach}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* What it made possible */}
      <section className="hero-band">
        <div className="page-container grid gap-10 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16 lg:py-20">
          <ScrollReveal>
            <p className="eyebrow mb-4">What it made possible</p>
            <h2>The culture that made AI agents work.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <p className="text-lg leading-relaxed text-navy-muted">
              Data literacy, governance discipline and certified metrics turned out to be the prerequisites for AI agents. Agents
              that draft models and metric definitions need a governed layer to write into, and a team that already trusts
              certified data learns to trust governed agent output much faster.
            </p>
            <Link
              to="/ai-augmented-sdlc"
              className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline"
            >
              The AI-Augmented SDLC Organization <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Lessons */}
      <section className="page-section">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Lessons" title="What made the difference" />
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { label: "Success factors", items: successFactors },
              { label: "Pitfalls avoided", items: pitfalls },
            ].map((col) => (
              <ScrollReveal key={col.label}>
                <div className="surface-card h-full p-7">
                  <p className="eyebrow">{col.label}</p>
                  <dl className="mt-4 divide-y">
                    {col.items.map(([name, text]) => (
                      <div key={name} className="py-3">
                        <dt className="font-semibold text-foreground">{name}</dt>
                        <dd className="mt-0.5 leading-relaxed text-muted-foreground">{text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <RelatedWork routes={["/ai-augmented-sdlc", "/team-scaling-leadership", "/prove-pattern"]} />
    </>
  );
};

export default DeltaFrameworkImplementation;
