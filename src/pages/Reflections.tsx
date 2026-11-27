import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

const reflections = [
  {
    title: 'Leading the AI transition',
    insight: 'AI adoption stalls on trust before it stalls on technology. Move the team from writing to reviewing one domain at a time.',
    body: 'When we introduced LLM-powered pipeline agents, the team\'s first reaction was anxiety. Reassurance didn\'t help much; showing them did. We started with low-risk domains, let the agents write first drafts, and showed engineers that their job was shifting from writing every line to reviewing and refining what the agents produced. Reviewing is faster than writing from scratch, and it keeps a person\'s judgment on everything that ships. I didn\'t announce an AI transformation. Each domain that went well made the next one easier.',
  },
  {
    title: 'Why leaders should build the thing',
    insight: 'You can\'t lead an agentic AI rollout from a slide deck. Engineers can tell a leader who has read about agents from one who has built them.',
    body: 'I built agents in Strands, LangGraph, CrewAI and the OpenAI Agents SDK before I asked my team to adopt any of them. Having hit the edge cases myself, I could defend my architecture calls with experience. I could teach model routing because I had implemented it, and I could set realistic quality expectations because I knew what "good enough for review" looked like. When the way a team works is changing, I think its executives should be in the code.',
  },
  {
    title: 'From dashboard factory to certified metrics',
    insight: 'When executives bring conflicting numbers to the same meeting, the problem is governance. Swapping BI tools won\'t fix it; certifying metrics will.',
    body: 'In a dashboard factory, analysts spend much of their time rebuilding the same metric logic across dozens of dashboards, and each new dashboard is a fresh interpretation of "revenue." Metric certification fixes that. Finance, Product and Operations agree on definitions in workshops, the certified definitions live in the semantic layer, and every downstream report reuses them instead of rebuilding them. The conflicting figures stop showing up in executive meetings, and analysts get time back for actual analysis. One lesson I learned the hard way: if you renew a tooling contract without checking it against where the product is going, you can lock yourself in for years. For SaaS, I think the future is analytics embedded in the product, not a separate BI tool.',
  },
  {
    title: 'From military intelligence to engineering leadership',
    insight: 'The analytical work is the same: pull together sources, check their quality, and give people a conclusion they can act on. The tools have changed. The need for human judgment hasn\'t.',
    body: 'I\'ve spent twenty years moving from military intelligence to software leadership, and the common thread is turning raw information into decisions when you can\'t be sure. In Iraq the inputs were intelligence reports and satellite imagery; later they were CDC event streams and semantic layer metrics. LLM-powered agents now do in minutes what took my intelligence team hours, but deciding what matters, what\'s reliable and what to act on is still a person\'s job. Every agent in a pipeline should have a human reviewer. The Army taught me that the best intelligence is useless if the people receiving it don\'t trust it.',
  },
  {
    title: 'Teams that change well',
    insight: 'The teams that adopt AI fastest aren\'t the most technical ones. They\'re the ones where trust already exists and engineers feel safe flagging bad output.',
    body: 'Growing a team from 15 to 65+ through a merger integration taught me that technical skill is the minimum and culture decides the rest. The teams that did well through the merger felt safe speaking up, communicated clearly and agreed on what they were working toward. AI agent adoption went the same way: trust mattered more than technical skill. The time we put into DEI, mentoring and team culture during the merger years paid off during the AI transition in ways I couldn\'t have predicted.',
  },
  {
    title: 'Choosing technology',
    insight: 'The best architecture choice is rarely the most capable technology. It\'s the one that fits what your team can do now and where the organization is heading.',
    body: 'When I choose between agent frameworks, benchmark scores rarely decide it. Fit does. A model-driven framework suits a team that already thinks in data pipelines, and native integration with the cloud you already run means less to operate. The same reasoning favors a strangler-pattern platform migration over a big-bang cutover, because teams need a run of small wins to build confidence. Every architecture choice is also a choice about people.',
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
