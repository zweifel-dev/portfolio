import { Card, CardContent } from '@/components/ui/card';

const Reflections = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Reflections</h1>
          <p className="text-xl leading-relaxed">Insights on AI Transformation, Data Leadership, and Technology Strategy</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Leadership Reflections</h2>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Leading the AI Transformation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The hardest part of deploying AI agents into a data organization isn't the technology — it's the people. When we introduced LLM-powered pipeline agents, the team's first reaction wasn't excitement; it was anxiety. "Are we being replaced?" The answer required more than reassurance — it required demonstration. We started with low-risk domains, let agents produce first drafts, and showed engineers that their job wasn't disappearing — it was evolving from writing every line to reviewing, refining, and ensuring quality. The constraint shifted from build capacity to review capacity, and that turned out to be a fundamentally better bottleneck. Review is faster than creation, and it preserves the human judgment that makes output production-ready. The lesson: don't lead an AI transformation by announcing it. Lead by building trust incrementally, one successful domain at a time.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">The Practitioner-Leader Advantage</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I personally built production agents across Strands, LangGraph, CrewAI, and OpenAI Agents SDK before asking my team to adopt any of them. This wasn't a side project — it was a strategic decision. When you've built the thing yourself, your architecture decisions carry practitioner credibility. You can explain why Strands was selected over LangGraph for the enterprise pipeline because you've hit the edge cases in both. You can teach the team model routing because you've implemented it. You can set realistic expectations about agent quality because you know what "good enough for review" actually looks like. The counterpoint is that executives aren't supposed to be in the code. I disagree — at least during transformational moments. You can't lead an agentic AI transformation from a PowerPoint deck. The team knows the difference between a leader who's read about agents and one who's built them.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">From Dashboard Factory to Metric-Certified Operation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    One of the most impactful shifts we made wasn't technical — it was organizational. We stopped being a dashboard factory. Before the transformation, analysts spent 30-40% of their capacity rebuilding the same metric logic across dozens of dashboards. Every new dashboard was a fresh interpretation of "revenue" or "patient volume." The fix wasn't a better BI tool — it was metric certification. We ran formal definition workshops with Finance, Product, and Operations to agree on what each metric actually meant. Those certified definitions went into the semantic layer, and every downstream consumer — dashboard, API, AI agent — reused them without re-engineering. The result: conflicting figures disappeared from executive meetings, and analysts could focus on insight rather than infrastructure. The lesson learned the hard way: I inherited a three-year Tableau contract renewal without evaluating it against the platform's strategic direction. The future for a SaaS platform is embedded analytics, not a separate BI product. That mistake informed every subsequent vendor and architecture decision.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">From Military Intelligence to AI-Augmented Data Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    My transition from military intelligence to data leadership has been a twenty-year arc, but the through-line is consistent: turning raw information into decisions under uncertainty. In Iraq, the data was intelligence reports and satellite imagery; now it's CDC event streams and semantic layer metrics. The analytical discipline is the same — synthesize multi-source inputs, validate quality, present actionable conclusions to decision-makers. What's changed is the scale of the tooling. LLM-powered agents now do in minutes what would have taken my intelligence team hours — but the human judgment about what matters, what's reliable, and what to act on remains irreplaceable. That's why every agent in our pipeline has a human reviewer. The military taught me that the best intelligence is useless without trusted delivery, and the best AI output is useless without trusted review.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Building High-Performance Teams Through Transformation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scaling a team from 15 to 65+ through M&A integration taught me that technical capability is table stakes — culture is the differentiator. The teams that thrived through the merger weren't the ones with the best individual contributors; they were the ones with psychological safety, clear communication, and shared purpose. That same principle applied when we introduced AI agents. The teams that adopted agent-augmented workflows fastest weren't the most technically sophisticated — they were the ones where trust was already established, where engineers felt safe saying "this agent output looks wrong" without fear of being seen as resistant to change. The investment in DEI, mentorship, and team culture during the M&A years paid dividends during the AI transition in ways I couldn't have predicted.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Strategic Technology Decisions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The best architecture decisions are not about choosing the most capable technology — they're about choosing the right technology for your team's current capabilities and your organization's trajectory. When we selected Strands over LangGraph for enterprise pipeline agents, it wasn't because Strands was objectively superior — it was because Strands' model-driven approach aligned better with how our team thinks about data pipelines, and its native AWS integration reduced operational friction for a team already deep in the AWS ecosystem. The same principle guided our strangler-pattern platform migration: we could have done a big-bang cutover to Snowflake, but the team and the organization needed iterative wins to build confidence. Every architecture choice is also a people choice.
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Reflections;
