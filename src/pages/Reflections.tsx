import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

const reflections = [
  {
    title: 'Leading the AI Transformation',
    insight: 'The bottleneck in AI adoption is trust, not technology. Shift your team from creation to review — incrementally, one domain at a time.',
    body: 'When we introduced LLM-powered pipeline agents, the team\'s first reaction was anxiety, not excitement. The fix wasn\'t reassurance — it was demonstration. We started with low-risk domains, let agents produce first drafts, and showed engineers their job was evolving from writing every line to reviewing, refining, and ensuring quality. Review is faster than creation, and it preserves the human judgment that makes output production-ready. Don\'t announce an AI transformation. Build trust incrementally, one successful domain at a time.',
  },
  {
    title: 'The Practitioner-Leader Advantage',
    insight: 'You cannot lead an agentic AI transformation from a PowerPoint deck. Teams know the difference between a leader who has read about agents and one who has built them.',
    body: 'I personally built agents across Strands, LangGraph, CrewAI, and OpenAI Agents SDK before asking my team to adopt any of them. When you\'ve hit the edge cases yourself, your architecture decisions carry practitioner credibility. You can teach model routing because you\'ve implemented it. You can set realistic quality expectations because you know what "good enough for review" looks like. During transformational moments, executives should be in the code.',
  },
  {
    title: 'From Dashboard Factory to Metric-Certified Operation',
    insight: 'Conflicting metrics in executive meetings are a governance failure, not a BI tool problem. Metric certification eliminates rework and rebuilds trust.',
    body: 'In a dashboard factory, analysts spend a large share of their time rebuilding the same metric logic across dozens of dashboards, and every new dashboard is a fresh interpretation of "revenue." The fix is metric certification: formal definition workshops with Finance, Product, and Operations, certified definitions in the semantic layer, and every downstream consumer reusing them instead of re-engineering them. Conflicting figures disappear from executive meetings, and analysts move on to insight work. A lesson I learned the hard way: renew a tooling contract without weighing it against where the product is going, and you can lock yourself in for years. For SaaS, the future is embedded analytics, not a separate BI product.',
  },
  {
    title: 'From Military Intelligence to AI-Augmented Leadership',
    insight: 'The analytical discipline is identical: synthesize multi-source inputs, validate quality, deliver actionable conclusions. The scale of tooling has changed — the need for human judgment has not.',
    body: 'My transition from military intelligence to software leadership is a twenty-year arc with a consistent through-line: turning raw information into decisions under uncertainty. In Iraq, the data was intelligence reports and satellite imagery; later it was CDC event streams and semantic layer metrics. LLM-powered agents do in minutes what would have taken my intelligence team hours — but human judgment about what matters, what\'s reliable, and what to act on remains irreplaceable. Every agent in a pipeline should have a human reviewer. The military taught me that the best intelligence is useless without trusted delivery.',
  },
  {
    title: 'Building High-Performance Teams Through Transformation',
    insight: 'The teams that adopt AI fastest are not the most technically sophisticated — they are the ones where trust is already established and engineers feel safe flagging bad output.',
    body: 'Scaling from 15 to 65+ through a merger integration taught me that technical capability is table stakes — culture is the differentiator. The teams that thrived through the merger had psychological safety, clear communication, and shared purpose. The same principle applied to AI agent adoption: trust was the prerequisite, not technical skill. The investment in DEI, mentorship, and team culture during the merger years paid dividends during the AI transition in ways I could not have predicted.',
  },
  {
    title: 'Strategic Technology Decisions',
    insight: 'The best architecture decisions are not about the most capable technology — they are about the right technology for your team\'s current capabilities and your organization\'s trajectory.',
    body: 'When I choose between agent frameworks, benchmark capability is rarely the deciding factor. Fit is: a model-driven framework suits a team that already thinks in data pipelines, and native integration with the cloud you already run removes operational friction. The same principle favors a strangler-pattern platform migration over a big-bang cutover, because teams and organizations need iterative wins to build confidence. Every architecture choice is also a people choice.',
  },
];

const Reflections = () => {
  return (
    <>
      <PageHero
        eyebrow="Reflections"
        title="Lessons from leading through change."
        lead="AI adoption, engineering and data leadership, technology strategy, and the hard calls in between."
      />

      <section className="page-section">
        <div className="page-container">
          <ol className="mx-auto max-w-4xl">
            {reflections.map((reflection, index) => (
              <li key={reflection.title} className="border-t py-12 first:border-t-0 first:pt-0 lg:py-14">
                <ScrollReveal>
                  <article className="grid gap-4 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8">
                    <p className="font-mono text-sm text-accent-ink">{String(index + 1).padStart(2, '0')}</p>
                    <div>
                      <h2 className="text-[1.625rem] lg:text-[2rem]">{reflection.title}</h2>
                      <p className="mt-5 border-l-2 border-accent pl-5 text-lg font-medium leading-relaxed text-foreground">
                        {reflection.insight}
                      </p>
                      <p className="mt-5 leading-relaxed text-muted-foreground">{reflection.body}</p>
                    </div>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
};

export default Reflections;
