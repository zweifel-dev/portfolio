import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Buttons or links under the lead */
  children?: ReactNode;
  /** Shown to the right on large screens, e.g. a portrait */
  aside?: ReactNode;
  className?: string;
}

// The navy band at the top of every page. Left-aligned, no animation, so it paints immediately.
const PageHero = ({ eyebrow, title, lead, children, aside, className }: PageHeroProps) => (
  <section className={cn("hero-band", className)}>
    <div
      className={cn(
        "page-container grid gap-10 py-16 lg:py-24",
        aside && "lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16"
      )}
    >
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
        <h1 className="hero-title">{title}</h1>
        {lead && <p className="hero-lead mt-6">{lead}</p>}
        {children && <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div>}
      </div>
      {aside}
    </div>
  </section>
);

export default PageHero;
