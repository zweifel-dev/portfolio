import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, LifeBuoy, Newspaper, Handshake } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { company, mailto } from "@/lib/company";
import { activeProjects } from "@/lib/projects";

const others = [
  { icon: Newspaper, title: "Press", body: "Interviews, articles and speaking about software delivery and AI adoption.", subject: "Press" },
  { icon: Handshake, title: "Partners", body: "Agencies, consultancies and vendors who want to work together.", subject: "Partnership" },
];

const Contact = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Start a conversation."
      lead={`Email is the way to reach ${company.legalName}. Pick the topic below so your message lands in the right place.`}
    />

    <section className="page-section">
      <div className="page-container">
        <article className="ruled-card grid gap-6 p-7 pl-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-10 lg:pl-11">
          <div>
            <div className="flex items-center gap-3">
              <span className="card-icon">
                <Briefcase className="h-5 w-5" />
              </span>
              <p className="eyebrow">New engagement</p>
            </div>
            <h2 className="mt-4">Software architecture, AI-enabled delivery or training</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
              A few lines are enough: what you're building or changing, the team involved, and when you need it.
            </p>
          </div>
          <Button asChild size="lg">
            <a href={mailto("New engagement")}>Email {company.email}</a>
          </Button>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="surface-card p-7">
            <span className="card-icon">
              <LifeBuoy className="h-5 w-5" />
            </span>
            <h3 className="mt-4">Product support</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">Help with a product, your account or your data.</p>
            <ul className="mt-4 space-y-1">
              {activeProjects.map((p) => (
                <li key={p.slug}>
                  <a href={p.support.email ? `mailto:${p.support.email}` : mailto(`Support: ${p.name}`)} className="arrow-link min-h-11">
                    {p.name} support <ArrowRight />
                  </a>
                </li>
              ))}
              <li>
                <Link to="/support" className="arrow-link min-h-11">
                  Privacy, terms and data deletion <ArrowRight />
                </Link>
              </li>
            </ul>
          </article>
          {others.map((o) => (
            <article key={o.title} className="surface-card p-7">
              <span className="card-icon">
                <o.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4">{o.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{o.body}</p>
              <a href={mailto(o.subject)} className="arrow-link mt-4 min-h-11">
                Email about {o.title.toLowerCase()} <ArrowRight />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Mail: {company.mailingAddress.join(", ")}.
        </p>
      </div>
    </section>
  </>
);

export default Contact;
