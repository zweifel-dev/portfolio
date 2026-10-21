import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { currentRoles, profile } from "@/lib/profile";

// Experity entries stay at résumé level: what I led, without internal figures, systems or quotes.
const experience = [
  ...currentRoles.map((r) => ({ ...r, points: r.points ?? [] })),
  {
    org: "Experity",
    role: "Sr. Director of Data Strategy, Analytics & AI",
    period: "2022 – 2026",
    summary: "Led data engineering, analytics and applied AI for a healthcare SaaS company serving urgent care.",
    points: [
      "Moved the data and analytics team to an agent-augmented operating model: agents draft models, metrics, tests and documentation; engineers review and merge.",
      "Shipped seven production AI agents, piloting on low-risk work first and keeping a human reviewer on every change.",
      "Built the enterprise data platform and a governed semantic layer, so metrics are defined and certified once and reused everywhere.",
      "Started a product analytics practice that gave product and executive leadership evidence to decide with.",
      "Led the change management for the AI transition: review guardrails, quality standards and hands-on upskilling.",
    ],
  },
  {
    org: "Experity (formerly Practice Velocity)",
    role: "Director of Software Development",
    period: "2016 – 2022",
    summary: "Led software engineering through the merger of DocuTAP and Practice Velocity that formed Experity.",
    points: [
      "Led the software side of the post-merger platform integration.",
      "Led the move from a legacy monolith to cloud-native microservices.",
      "Grew the R&D team from 15 to 65+ people and built the mentoring and leadership programs to support it.",
    ],
  },
  {
    org: "Fatwallet",
    role: "Manager of Software Engineering",
    period: "2015 – 2016",
    summary: "",
    points: ["Drove $5M in additional revenue through UX optimization and cut page load times by 40%."],
  },
  {
    org: "Supplycore",
    role: "Manager of Software Engineering",
    period: "2012 – 2015",
    summary: "",
    points: [
      "Deployed ERP solutions saving clients $2.5M a year, and built real-time analytics generating $10M in revenue.",
    ],
  },
  {
    org: "U.S. Army",
    role: "Intelligence Analyst Officer",
    period: "2005 – 2013",
    summary: "",
    points: [
      "Led strategic intelligence analysis during a 13-month Iraq deployment, briefing General officers on decisions that shaped operations.",
    ],
  },
];

const competencies = [
  {
    title: "Leadership",
    items: [
      "Engineering organization design and scaling",
      "Agent-augmented operating models",
      "Post-merger platform integration",
      "Data strategy and governance",
      "Change management",
      "Mentoring and leadership development",
    ],
  },
  {
    title: "Technical",
    items: [
      "AI and agents: Strands Agents SDK, LangGraph, CrewAI, OpenAI Agents SDK, MCP",
      "Data: Snowflake, dbt, Kafka and CDC, Kimball modeling",
      "Cloud: AWS",
      "Languages: Python, SQL, JavaScript and TypeScript, C#",
      "Apps: React, Capacitor",
    ],
  },
  {
    title: "Domain",
    items: [
      "Healthcare SaaS",
      "EMR/EHR and revenue cycle",
      "HIPAA-compliant systems",
      "Metric certification and governance",
      "Consumer mobile apps",
    ],
  },
];

const facts = [
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, external: true },
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="From Army intelligence to engineering leadership."
        lead="Twenty years of the same job at different scales: take messy information, find what matters, and help people act on it."
      />

      {/* Intro */}
      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-16">
          <ScrollReveal>
            <Portrait className="mx-0" />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I started as an intelligence analyst in the U.S. Army, moved into software engineering, and then spent a
                decade with Practice Velocity and Experity, a healthcare SaaS company, leading software development and later
                data, analytics and AI.
              </p>
              <p>
                Today I'm <span className="font-medium text-foreground">{profile.title} at HHAeXchange</span>. On my own time I
                run <span className="font-medium text-foreground">Zweifel Tech LLC</span>, which publishes Midnight Alibi. I
                still write code: the agents, lab and puzzle engine on this site are my own work.
              </p>
              <dl className="grid gap-x-8 gap-y-5 border-t pt-6 text-base sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="eyebrow">{f.label}</dt>
                    <dd className="mt-1 font-medium text-foreground">
                      {f.href ? (
                        <a
                          href={f.href}
                          target={f.external ? "_blank" : undefined}
                          rel={f.external ? "noopener noreferrer" : undefined}
                          className="hover:text-primary hover:underline"
                        >
                          {f.value}
                        </a>
                      ) : (
                        f.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section className="page-section border-t bg-muted">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Experience" title="Where I've worked" />
          </ScrollReveal>
          <ol>
            {experience.map((job) => (
              <li key={`${job.org}-${job.role}`}>
                <ScrollReveal>
                  <article className="grid gap-3 border-t py-8 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-10">
                    <div>
                      <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
                      <p className="mt-1 font-semibold text-foreground">{job.org}</p>
                    </div>
                    <div className="max-w-3xl">
                      <h3>{job.role}</h3>
                      {job.summary && <p className="mt-2 leading-relaxed text-muted-foreground">{job.summary}</p>}
                      {job.points.length > 0 && (
                        <ul className="mt-4 space-y-2.5">
                          {job.points.map((point) => (
                            <li key={point} className="flex gap-3 leading-relaxed text-muted-foreground">
                              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Competencies */}
      <section className="page-section">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Skills" title="What I bring" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-3">
            {competencies.map((group) => (
              <StaggerItem key={group.title} className="h-full">
                <div className="surface-card h-full p-7">
                  <h3>{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Education */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Education" title="Study" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            <StaggerItem className="h-full">
              <div className="ruled-card h-full p-7">
                <h3>MBA</h3>
                <p className="mt-1 font-medium text-primary">Milwaukee School of Engineering</p>
                <p className="mt-3 text-muted-foreground">
                  Advanced Business Strategy Using AI and Analytics. Delta Mu Delta International Honor Society.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem className="h-full">
              <div className="ruled-card h-full p-7">
                <h3>B.S., Computer Science</h3>
                <p className="mt-1 font-medium text-primary">University of Illinois Springfield</p>
                <p className="mt-3 text-muted-foreground">Software engineering, architecture and security.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <ScrollReveal>
            <div className="mt-16 flex flex-col items-start gap-4 border-t pt-10 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-lg text-muted-foreground">Want to compare notes on engineering leadership or agentic AI?</p>
              <Button asChild size="lg">
                <Link to="/contact">Get in touch</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default About;
