import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Eagerly load Home page since it's the landing page
import Home from "./pages/Home";

// Lazy load all other pages
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Reflections = lazy(() => import("./pages/Reflections"));
const Research = lazy(() => import("./pages/Research"));
const ExperityAnalyticAssessment = lazy(() => import("./pages/ExperityAnalyticAssessment"));
const MAFeatureParity = lazy(() => import("./pages/MAFeatureParity"));
const DeltaFrameworkImplementation = lazy(() => import("./pages/DeltaFrameworkImplementation"));
const EnterpriseDataTransformation = lazy(() => import("./pages/EnterpriseDataTransformation"));
const MAIntegrationStrategy = lazy(() => import("./pages/MAIntegrationStrategy"));
const TeamScalingLeadership = lazy(() => import("./pages/TeamScalingLeadership"));
const AIAugmentedDataOrg = lazy(() => import("./pages/AIAugmentedDataOrg"));
const EnterpriseDataPlatform = lazy(() => import("./pages/EnterpriseDataPlatform"));
const AIDevelopmentLab = lazy(() => import("./pages/AIDevelopmentLab"));
const ProvePattern = lazy(() => import("./pages/ProvePattern"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Loading component for lazy-loaded pages
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/reflections" element={<Reflections />} />
              <Route path="/research" element={<Research />} />
              <Route path="/experity-analytic-assessment" element={<ExperityAnalyticAssessment />} />
              <Route path="/ma-feature-parity" element={<MAFeatureParity />} />
              <Route path="/delta-framework-implementation" element={<DeltaFrameworkImplementation />} />
              <Route path="/enterprise-data-transformation" element={<EnterpriseDataTransformation />} />
              <Route path="/ma-integration-strategy" element={<MAIntegrationStrategy />} />
              <Route path="/team-scaling-leadership" element={<TeamScalingLeadership />} />
              <Route path="/ai-augmented-data-org" element={<AIAugmentedDataOrg />} />
              <Route path="/enterprise-data-platform" element={<EnterpriseDataPlatform />} />
              <Route path="/ai-development-lab" element={<AIDevelopmentLab />} />
              <Route path="/prove-pattern" element={<ProvePattern />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;