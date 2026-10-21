import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { CaseFacts, RelatedWork } from "@/components/CaseStudy";

const chapters = [
  {
    label: "Growth",
    title: "From 15 to more than 65",
    intro: "Doubling a team twice over is where culture either gets written down or gets lost.",
    points: [
      "Recruited on culture, growth and impact, not compensation alone",
      "Ran structured interviews with diverse panels and consistent evaluation",
      "Sold the mission: software that helps clinicians take care of patients",
      "Aligned roles to clear ownership, so a bigger team didn't trip over itself",
      "Used employee referrals to find people who would thrive in the culture",
    ],
  },
  {
    label: "Merger",
    title: "Two teams, one culture",
    intro: "A merger asks people to trust a future no one can fully describe yet.",
    points: [
      "Gave frequent, honest updates on what was decided and what wasn't yet",
      "Settled overlapping roles quickly, because ambiguity costs more than a hard answer",
      "Brought the two teams together around shared goals and one way of working",
      "Focused on keeping key people through the uncertainty",
    ],
  },
  {
    label: "Remote",
    title: "A distributed team, overnight",
    intro: "The pandemic turned an office team into a remote one while the business needed more from it, not less.",
    points: [
      "Moved the whole team to remote work at the start of the pandemic",
      "Added check-ins about workload and well-being, not just status",
      "Moved collaboration onto digital tools and processes built for distance",
      "Sped up hiring to meet new demand while keeping delivery on track",
    ],
  },
  {
    label: "AI transition",
    title: "From producers to reviewers",
    intro: "The biggest operating-model shift in the team's history, and the one that tested trust the most.",
    points: [
      "Met fear of replacement with demonstration: agents multiply capacity, people keep the judgment",
      "Built trust with low-risk wins before expanding",
      "Trained engineers on agent frameworks and production agent deployment",
      "Kept hands-on engineering time so skills stayed sharp",
    ],
    link: { to: "/ai-augmented-sdlc", label: "The AI-Augmented SDLC Organization" },
  },
];

const inclusion = [
  {
    title: "Gender equity",
    points: [
      "Championed structured hiring with diverse interview panels",
      "Partnered with HR on gender-equity initiatives",
      "Mentoring for engineers from under-represented groups",
    ],
  },
  {
    title: "Across generations",
    points: [
      "Mentoring in both directions, including reverse mentoring on new technology",
      "Room for different communication styles",
      "Deliberate knowledge transfer, so expertise didn't leave with people",
      "New tools introduced gradually, with training",
    ],
  },
  {
    title: "Introverted leadership",
    points: [
      "Recognized that leadership takes more forms than the loudest voice in the room",
      "Senior individual-contributor paths valued as much as management",
      "Rewarded clear written communication",
      "Optional presentation coaching for anyone who wanted it",
    ],
  },
  {
    title: "Mental health",
    points: [
      "Led a company-wide mental health awareness day",
      "Worked to break the stigma around men's mental health",
      "Certified as a mental health first responder",
      "Regular workload check-ins to catch burnout early",
    ],
  },
];

const growth = [
  ["Development plans", "Personal career roadmaps with quarterly check-ins"],
  ["One-on-ones", "Monthly, and about coaching and growth rather than status"],
  ["360-degree feedback", "Collaboration weighed alongside individual results"],
  ["Two career tracks", "Clear promotion criteria for management and for senior individual contributors"],
  ["Stretch assignments", "Emerging leaders lead visible projects, with support"],
  ["Succession planning", "Leadership programs so key roles had people ready to step in"],
  ["Recognition", "Spot and peer recognition, and hackathons with meaningful rewards"],
];

const lessons = [
  ["Culture compounds", "The mentoring and culture work of the merger years paid off during the AI transition in ways I couldn't have predicted."],
  ["Skill is table stakes", "Technical capability gets a team in the room. Psychological safety, clear communication and shared purpose decide which teams thrive through change."],
  ["Clarity beats comfort", "Settle overlapping roles and open questions quickly. A hard answer now is kinder than ambiguity later."],
  ["Trust comes before AI", "The teams that adopt AI fastest aren't the most technical. They're the ones where people feel safe flagging bad output."],
  ["Grow leaders early", "Succession planning is a growth strategy, not HR paperwork."],
];

const TeamScalingLeadership = () => {
  return (
    <>
      <PageHero
        eyebrow="Case study · Leadership"
        title="Scaling a team through change"
        lead="I grew an R&D team from 15 people to more than 65 and led it through a merger, a sudden move to remote work and the shift to AI-augmented engineering. This is what held it together."
      />
      <CaseFacts
        facts={[
          { label: "Team size", value: "15 → 65+ people" },
          { label: "Changes led", value: "Growth, merger, remote work, AI" },
          { label: "Industry", value: "Healthcare SaaS" },
          { label: "Leadership roots", value: "U.S. Army intelligence" },
        ]}
      />

      {/* Philosophy */}
      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Philosophy</p>
            <h2 className="mt-3">People and performance, together.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <blockquote className="border-l-2 border-accent pl-5 text-xl font-medium leading-relaxed text-foreground">
              Strong leadership builds both people and performance. By shaping strategy with data and empowering teams to act on
              it, success becomes sustainable, scalable, and repeatable.
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I pair the discipline I learned in the Army with empathy: creating psychological safety while holding high
              performance standards. The two aren't in tension; each depends on the other.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Four kinds of change */}
      <section className="page-section border-t bg-muted">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Four kinds of change"
              title="What each one asked of the team"
              description="Each change stressed something different: hiring, identity, connection and trust."
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {chapters.map((c, i) => (
              <StaggerItem key={c.label} className="h-full">
                <article className="ruled-card flex h-full flex-col p-7 lg:p-8">
                  <p className="eyebrow">
                    {String(i + 1).padStart(2, "0")} · {c.label}
                  </p>
                  <h3 className="mt-3">{c.title}</h3>
                  <p className="mt-2 leading-relaxed text-foreground/80">{c.intro}</p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3 leading-relaxed text-muted-foreground">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  {c.link && (
                    <Link to={c.link.to} className="arrow-link mt-6">
                      {c.link.label} <ArrowRight />
                    </Link>
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Inclusion */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Inclusion"
              title="Inclusion as an operating practice"
              description="Not a program on the side. These were part of how the team hired, met, promoted and looked after each other."
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {inclusion.map((card) => (
              <StaggerItem key={card.title} className="h-full">
                <div className="surface-card h-full p-6">
                  <h3 className="text-lg">{card.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {card.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Growing people */}
      <section className="page-section border-t bg-muted">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow">Development</p>
            <h2 className="mt-3">Growing the next leaders.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A team that grows from 15 to 65 needs new leaders faster than it can hire them, so I built the paths to grow them
              from within.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <dl className="divide-y border-y">
              {growth.map(([name, text]) => (
                <div key={name} className="grid gap-1 py-4 sm:grid-cols-[12rem_minmax(0,1fr)] sm:gap-6">
                  <dt className="font-semibold text-foreground">{name}</dt>
                  <dd className="leading-relaxed text-muted-foreground">{text}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      {/* Lessons */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Lessons"
              title="What I'd tell a leader scaling a team now"
              action={
                <Link to="/reflections" className="arrow-link">
                  More reflections <ArrowRight />
                </Link>
              }
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map(([title, body], i) => (
              <StaggerItem key={title}>
                <p className="font-mono text-sm text-accent-ink">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <RelatedWork routes={["/ai-augmented-sdlc", "/delta-framework-implementation", "/ai-development-lab"]} />
    </>
  );
};

export default TeamScalingLeadership;
