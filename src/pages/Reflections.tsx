import { Card, CardContent } from '@/components/ui/card';

const Reflections = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Reflections</h1>
          <p className="text-xl leading-relaxed">Insights on Leadership, Software Engineering, and Technology Strategy</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Card className="p-8">
              <CardContent className="space-y-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Leadership Reflections</h2>
                
                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">From Military Intelligence to Tech Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    My transition from military intelligence to software engineering leadership has provided unique perspectives on team building, strategic planning, and operational excellence. The principles of mission-focused execution and data-driven decision making translate seamlessly between these domains.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Building High-Performance Engineering Teams</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Leading engineering teams requires balancing technical excellence with human factors. I've found that empowering developers with autonomy while maintaining clear strategic direction creates an environment where innovation thrives. Key insights include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Trust and psychological safety are foundational to team performance</li>
                    <li>Clear communication of vision and objectives aligns autonomous teams</li>
                    <li>Continuous learning and improvement culture drives long-term success</li>
                    <li>Data-driven metrics help teams understand their impact</li>
                  </ul>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Strategic Technology Decisions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Technology choices should align with business objectives while maintaining flexibility for future growth. Throughout my career, I've learned that the best architectural decisions consider not just current requirements but also team capabilities, maintenance costs, and evolutionary potential.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">The Power of Data-Driven Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Analytics and metrics transform leadership from intuition-based to evidence-based decision making. However, data should inform, not replace, human judgment. The key is finding the right balance between quantitative insights and qualitative understanding of team dynamics and market conditions.
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Continuous Evolution</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The technology landscape evolves rapidly, requiring leaders to maintain a learning mindset. I regularly engage with emerging technologies, industry trends, and leadership practices to ensure my teams have the guidance they need to succeed in an ever-changing environment.
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