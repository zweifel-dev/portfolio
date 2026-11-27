import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import PersonalLayout from "./components/PersonalLayout";
import NotFound from "./pages/NotFound";
import { redirects, routes } from "./lib/routes";

const queryClient = new QueryClient();

// Pages, titles and redirects all come from src/lib/routes.ts. Personal pages (/brandon) use their own layout.
const companyRoutes = routes.filter((r) => r.section !== "personal");
const personalRoutes = routes.filter((r) => r.section === "personal");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {companyRoutes.map(({ path, component: Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
            {redirects.map(({ from, to }) => (
              <Route key={from} path={from} element={<Navigate to={to} replace />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route element={<PersonalLayout />}>
            {personalRoutes.map(({ path, component: Page }) => (
              <Route key={path} path={path} element={<Page />} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

