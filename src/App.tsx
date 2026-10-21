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
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Case studies that were taken down. Old links (LinkedIn, résumés, search results) land on Projects instead of a 404.
const retiredRoutes = [
  "/experity-analytic-assessment",
  "/ma-feature-parity",
  "/delta-framework-implementation",
  "/enterprise-data-transformation",
  "/ma-integration-strategy",
  "/team-scaling-leadership",
  "/ai-augmented-data-org",
  "/enterprise-data-platform",
];

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
              {retiredRoutes.map((path) => (
                <Route key={path} path={path} element={<Navigate to="/projects" replace />} />
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