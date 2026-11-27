import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { findRoute } from "./lib/routes";
import "./index.css";

const render = () => createRoot(document.getElementById("root")!).render(<App />);

// Each page's HTML is prerendered. Load the current page's code before the first render, so React replaces the
// prerendered markup with the same page instead of a loading spinner.
const path = window.location.pathname.replace(/\/+$/, "") || "/";
const route = findRoute(path);
if (route) route.component.preload().catch(() => undefined).finally(render);
else render();
