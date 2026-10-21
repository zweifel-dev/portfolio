import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";

// Eagerly load Home page since it's the landing page
import Home from "./pages/Home";

// Lazy load all other pages
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Reflections = lazy(() => import("./pages/Reflections"));
const Research = lazy(() => import("./pages/Research"));
const AIDevelopmentLab = lazy(() => import("./pages/AIDevelopmentLab"));
const ProvePattern = lazy(() => import("./pages/ProvePattern"));
const AIAugmentedSDLC = lazy(() => import("./pages/AIAugmentedSDLC"));
const TeamScalingLeadership = lazy(() => import("./pages/TeamScalingLeadership"));
const DeltaFrameworkImplementation = lazy(() => import("./pages/DeltaFrameworkImplementation"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Old URLs that still have links pointing at them (LinkedIn, résumés, search results). Retired case studies land
// on Projects instead of a 404; renamed ones go to their new address.
const retiredRoutes = [
  "/experity-analytic-assessment",
  "/ma-feature-parity",
  "/enterprise-data-transformation",
  "/ma-integration-strategy",
  "/enterprise-data-platform",
];
const renamedRoutes = [{ from: "/ai-augmented-data-org", to: "/ai-augmented-sdlc" }];

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
              <Route path="/ai-development-lab" element={<AIDevelopmentLab />} />
              <Route path="/prove-pattern" element={<ProvePattern />} />
              <Route path="/ai-augmented-sdlc" element={<AIAugmentedSDLC />} />
              <Route path="/team-scaling-leadership" element={<TeamScalingLeadership />} />
              <Route path="/delta-framework-implementation" element={<DeltaFrameworkImplementation />} />
              {retiredRoutes.map((path) => (
                <Route key={path} path={path} element={<Navigate to="/projects" replace />} />
              ))}
              {renamedRoutes.map(({ from, to }) => (
                <Route key={from} path={from} element={<Navigate to={to} replace />} />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;