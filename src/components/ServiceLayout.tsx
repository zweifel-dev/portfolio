import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { mailto } from "@/lib/company";
import { methodPages, methodPath } from "@/lib/method";
import { services, type Service } from "@/lib/services";

const Dash = () => <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />;

/** The shared structure of a service page: problem, audience, deliverables, measures, related method pages and one contact action. */
const ServiceLayout = ({ service, lead, children }: { service: Service; lead?: string; children?: ReactNode }) => {
  const related = methodPages.filter((p) => service.relatedMethod.includes(p.slug));
  const others = services.filter((s) => s.slug !== service.slug);
  return (
    <>
      <PageHero eyebrow="Service" title={service.name} lead={lead ?? service.summary}>
        <Button asChild variant="accent" size="lg">
          <a href={mailto(service.cta.mailSubject)}>{service.cta.label}</a>
        </Button>
        <Button asChild variant="on-navy" size="lg">
          <Link to="/method">Read the method</Link>
        </Button>
      </PageHero>

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">The problem</p>
            <p className="text-lg leading-relaxed">{service.problem}</p>
          </div>
          <div>
            <p className="eyebrow mb-3">Who it's for</p>
            <ul className="space-y-3">
              {service.audience.map((a) => (
                <li key={a} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <Dash />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section border-t bg-muted">
        <div className="page-container">
          <SectionHeading eyebrow="What you get" title="Deliverables" />
          <ol className="grid gap-4 md:grid-cols-2">
            {service.deliverables.map((d, i) => {
              const [head, ...rest] = d.split(": ");
              return (
                <li key={d} className="ruled-card flex gap-4 p-6 pl-7">
                  <span className="font-mono text-sm text-accent-ink">0{i + 1}</span>
                  <p className="leading-relaxed">
                    {rest.length ? (
                      <>
                        <span className="font-semibold">{head}.</span>{" "}
                        <span className="text-muted-foreground">{rest.join(": ")}</span>
                      </>
                    ) : (
                      d
                    )}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {children}

      <section className="page-section border-t">
        <div className="page-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">How success is measured</p>
            <ul className="space-y-3">
              {service.measures.map((m) => (
                <li key={m} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <Dash />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">From the method</p>
            <ul className="space-y-2">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link to={methodPath(p.slug)} className="arrow-link min-h-11">
                    {p.navTitle} <ArrowRight />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hero-band">
        <div className="page-container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Next step</p>
            <h2>Talk it through.</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-muted">
              Describe where you are and what you need. The reply will propose a first step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <a href={mailto(service.cta.mailSubject)}>{service.cta.label}</a>
            </Button>
            {others.map((s) => (
              <Button key={s.slug} asChild variant="on-navy" size="lg">
                <Link to={s.path}>{s.shortName}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLayout;
