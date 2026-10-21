import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="page-container flex min-h-[60vh] flex-col justify-center py-20">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 max-w-2xl">This page doesn't exist, or it has moved.</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        Some older case studies were retired. The projects page has what's current.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <Link to="/">Go home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/projects">See projects</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
