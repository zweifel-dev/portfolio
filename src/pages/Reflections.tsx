import { Card, CardContent } from '@/components/ui/card';
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
    body: 'I personally built production agents across Strands, LangGraph, CrewAI, and OpenAI Agents SDK before asking my team to adopt any of them. When you\'ve hit the edge cases in both Strands and LangGraph, your architecture decisions carry practitioner credibility. You can teach model routing because you\'ve implemented it. You can set realistic quality expectations because you know what "good enough for review" looks like. During transformational moments, executives should be in the code.',
  },
  {
    title: 'From Dashboard Factory to Metric-Certified Operation',
    insight: 'Conflicting metrics in executive meetings are a governance failure, not a BI tool problem. Metric certification eliminates rework and rebuilds trust.',
    body: 'Before the transformation, analysts spent 30-40% of capacity rebuilding the same metric logic across dozens of dashboards — every new dashboard was a fresh interpretation of "revenue." The fix was metric certification: formal definition workshops with Finance, Product, and Operations, certified definitions in the semantic layer, and every downstream consumer reusing them without re-engineering. Conflicting figures disappeared from executive meetings, and analysts shifted to insight work. Lesson learned the hard way: I inherited a three-year Tableau contract without evaluating it against strategic direction. The future for SaaS is embedded analytics, not a separate BI product. That mistake informed every subsequent vendor decision.',
  },
  {
    title: 'From Military Intelligence to AI-Augmented Leadership',
    insight: 'The analytical discipline is identical: synthesize multi-source inputs, validate quality, deliver actionable conclusions. The scale of tooling has changed — the need for human judgment has not.',
    body: 'My transition from military intelligence to software leadership is a twenty-year arc with a consistent through-line: turning raw information into decisions under uncertainty. In Iraq, the data was intelligence reports and satellite imagery; now it\'s CDC event streams and semantic layer metrics. LLM-powered agents do in minutes what would have taken my intelligence team hours — but human judgment about what matters, what\'s reliable, and what to act on remains irreplaceable. Every agent in our pipeline has a human reviewer. The military taught me that the best intelligence is useless without trusted delivery.',
  },
  {
    title: 'Building High-Performance Teams Through Transformation',
    insight: 'The teams that adopt AI fastest are not the most technically sophisticated — they are the ones where trust is already established and engineers feel safe flagging bad output.',
    body: 'Scaling from 15 to 65+ through M&A integration taught me that technical capability is table stakes — culture is the differentiator. The teams that thrived through the merger had psychological safety, clear communication, and shared purpose. The same principle applied to AI agent adoption: trust was the prerequisite, not technical skill. The investment in DEI, mentorship, and team culture during the M&A years paid dividends during the AI transition in ways I could not have predicted.',
  },
  {
    title: 'Strategic Technology Decisions',
    insight: 'The best architecture decisions are not about the most capable technology — they are about the right technology for your team\'s current capabilities and your organization\'s trajectory.',
    body: 'When we selected Strands over LangGraph for enterprise pipeline agents, it was because Strands\' model-driven approach aligned with how our team thinks about data pipelines, and its native AWS integration reduced operational friction. The same principle guided our strangler-pattern platform migration: the team and organization needed iterative wins to build confidence, not a big-bang cutover. Every architecture choice is also a people choice.',
  },
];

const Reflections = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">Reflections</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              Lessons from leading AI transformation, building teams, and making hard calls.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              AI Adoption &bull; Software and Data Leadership &bull; Technology Strategy &bull; Organizational Change
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-10">

            {reflections.map((reflection, index) => (
              <ScrollReveal key={reflection.title} delay={index * 0.05}>
                <Card className="p-8 lg:p-10 shadow-executive-lg hover:shadow-executive-xl transition-shadow duration-300">
                  <CardContent className="space-y-4 p-0">
                    <h2 className="font-bold text-foreground text-xl lg:text-2xl">
                      {reflection.title}
                    </h2>
                    <p className="text-primary font-semibold leading-snug text-lg border-l-4 border-primary pl-4">
                      {reflection.insight}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {reflection.body}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>
    </main>
  );
};

export default Reflections;
