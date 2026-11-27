import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/services", label: "Services" },
  { to: "/method", label: "Method" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const NotFound = () => (
  <section className="page-container flex min-h-[60vh] flex-col justify-center py-20">
    <p className="eyebrow">Error 404</p>
    <h1 className="mt-4 max-w-2xl">This page doesn't exist, or it has moved.</h1>
    <p className="mt-4 max-w-xl text-lg text-muted-foreground">
      The site was reorganized recently. One of these pages may have what you were looking for.
    </p>
    <div className="mt-8 flex flex-wrap gap-3">
      <Button asChild size="lg">
        <Link to="/">Home</Link>
      </Button>
      {links.map((l) => (
        <Button key={l.to} asChild variant="outline" size="lg">
          <Link to={l.to}>{l.label}</Link>
        </Button>
      ))}
    </div>
  </section>
);

export default NotFound;
