import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
          <p className="text-xl leading-relaxed">Interested in AI-augmented data strategy, technology leadership, or strategic collaboration? Let's connect.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                <div className="space-y-4">
                  <p className="text-lg">
                    <strong>Email:</strong> <a href="mailto:brandon@zweifel.tech" className="text-blue-600 hover:text-blue-800">brandon@zweifel.tech</a>
                  </p>
                  <p className="text-lg">
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bzweifel/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">linkedin.com/in/bzweifel/</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;