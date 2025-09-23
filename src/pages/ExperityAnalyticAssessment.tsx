import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Video, Download, BarChart3, ArrowLeft } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExperityAnalyticAssessment: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Analytic Assessment of Experity</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Ensuring feature parity and cost analysis during the merger process
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Project Resources</h2>
            <p className="text-center text-gray-600 mb-8">Download relevant project documentation below:</p>

            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left side: Download Links */}
              <div className="md:col-span-2 space-y-4">
                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">PowerPoint Presentation</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Comprehensive analytic assessment documenting feature parity analysis and strategic recommendations for the Experity merger.
                      </p>
                      <Button asChild>
                        <a 
                          href="/files/Analytic-Assessment-of-Experity.pptx" 
                          download
                          className="inline-flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download PowerPoint
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Video className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">Video Presentation</h3>
                      <p className="text-gray-600 text-sm mb-3">
                        Executive presentation recording detailing the analytic assessment findings and integration strategy recommendations.
                      </p>
                      <Button asChild variant="outline">
                        <a 
                          href="https://drive.google.com/uc?export=download&id=1ztVrqu6BI49agwgPr25MuBZxZ0m1zp4z" 
                          download
                          className="inline-flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download Video
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Right side: Image */}
              <div className="text-center">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">Analytics Assessment</h3>
                  <p className="text-sm text-gray-600">Comprehensive evaluation of platform capabilities and integration opportunities</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Large Video Card */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Watch the Analytic Assessment of Experity</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://drive.google.com/file/d/1ztVrqu6BI49agwgPr25MuBZxZ0m1zp4z/preview" 
                className="absolute top-0 left-0 w-full h-full rounded-lg border"
                allowFullScreen
                title="Analytic Assessment of Experity Presentation"
              />
            </div>
            <p className="text-center text-gray-600 text-sm mt-4">
              This presentation provides a detailed overview of the analytic assessment conducted during the Practice Velocity and DocuTAP merger process.
            </p>
          </Card>

          {/* Back Navigation */}
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperityAnalyticAssessment;