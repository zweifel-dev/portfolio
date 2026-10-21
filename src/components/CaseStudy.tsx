import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { allWork } from "@/lib/work";

interface Fact {
  label: string;
  value: string;
}

// Key facts under a case study's hero, with the note that company details are left out.
export const CaseFacts = ({ facts }: { facts: Fact[] }) => (
  <section className="border-b bg-muted">
    <div className="page-container py-8">
      <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="eyebrow">{fact.label}</dt>
            <dd className="mt-1.5 font-medium leading-snug text-foreground">{fact.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 border-t pt-4 text-sm text-muted-foreground">
        Drawn from my experience leading engineering and data teams in healthcare SaaS. Company-specific details are left
        out; this covers the approach, the decisions and the lessons.
      </p>
    </div>
  </section>
);

// "Keep reading" cards at the bottom of a case study, looked up by route in src/lib/work.ts.
export const RelatedWork = ({ routes }: { routes: string[] }) => {
  const items = routes.map((to) => allWork.find((item) => item.to === to)).filter(Boolean);
  return (
    <section className="page-section border-t">
      <div className="page-container">
        <SectionHeading
          eyebrow="Related"
          title="Keep reading"
          action={
            <Link to="/projects" className="arrow-link">
              All projects <ArrowRight />
            </Link>
          }
        />
        <StaggerContainer className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <StaggerItem key={item.to} className="h-full">
              <Link to={item.to} className="surface-card group flex h-full flex-col p-7">
                <div className="flex items-center gap-3">
                  <span className="card-icon">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <p className="eyebrow">{item.kicker}</p>
                </div>
                <h3 className="mt-5">{item.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{item.short}</p>
                <span className="arrow-link mt-5">
                  Read more <ArrowRight />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
