import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectTile from "@/components/ProjectTile";
import { company, mailto } from "@/lib/company";
import { services } from "@/lib/services";
import { activeProjects } from "@/lib/projects";
import { method } from "@/content/method/data";

const Home = () => (
  <>
    <section className="hero-band">
      <div className="page-container grid gap-10 py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Software architecture · AI-enabled delivery</p>
          <h1 className="hero-title">{company.legalName}</h1>
          <p className="hero-lead mt-6">{company.positioning}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Services">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={s.path}
                  className="inline-flex min-h-11 items-center rounded-full border border-navy-foreground/25 px-4 text-sm font-medium text-navy-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="accent" size="lg">
              <a href={mailto("New engagement")}>Start a conversation</a>
            </Button>
            <Button asChild variant="on-navy" size="lg">
              <Link to="/services">See services</Link>
            </Button>
          </div>
        </div>
        <picture className="hidden justify-self-center sm:block">
          <source type="image/webp" srcSet={`${company.logo.emblem.src320} 320w, ${company.logo.emblem.src640} 640w`} sizes="288px" />
          <img
            src={company.logo.emblem.src320}
            alt=""
            width={288}
            height={277}
            className="w-44 lg:w-72"
          />
        </picture>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Services"
          title="What Zweifel Tech does"
          action={
            <Link to="/services" className="arrow-link">
              All services <ArrowRight />
            </Link>
          }
        />
        <ul className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="border-y bg-muted">
      <div className="page-container page-section-sm grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow mb-3">The Method</p>
          <h2>AI in delivery, without giving up control.</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Zweifel Tech publishes its method in full: five maturity levels, a six-part contract every stage follows, a
            twelve-stage lifecycle and the controls agents can never bypass.
          </p>
          <Link to="/method" className="arrow-link mt-6">
            Read the method <ArrowRight />
          </Link>
        </div>
        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-5" aria-label="Maturity levels">
          {method.maturity.map((l) => (
            <li key={l.id} className="flex items-baseline gap-3 rounded-md border bg-card p-3 sm:block sm:text-center">
              <p className="font-mono text-lg font-semibold text-primary">{l.id}</p>
              <p className="text-sm leading-tight sm:mt-1 sm:text-xs text-muted-foreground">{l.shortName}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="page-section">
      <div className="page-container">
        <SectionHeading
          eyebrow="Projects"
          title="Products built and sold by Zweifel Tech"
          action={
            <Link to="/projects" className="arrow-link">
              All projects <ArrowRight />
            </Link>
          }
        />
        <ul className="grid gap-6 lg:grid-cols-2">
          {activeProjects.map((p) => (
            <li key={p.slug}>
              <ProjectTile project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="hero-band">
      <div className="page-container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Contact</p>
          <h2>Have a project or a team to bring along?</h2>
          <p className="mt-4 text-lg leading-relaxed text-navy-muted">
            Write to {company.email} with a few lines about where you are and what you need.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="accent" size="lg">
            <a href={mailto("New engagement")}>Start a conversation</a>
          </Button>
          <Button asChild variant="on-navy" size="lg">
            <Link to="/contact">Other ways to reach us</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Home;
