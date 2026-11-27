import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { company } from "@/lib/company";
import { services } from "@/lib/services";
import { activeProjects } from "@/lib/projects";

const Company = () => (
  <>
    <PageHero
      eyebrow="Company"
      title={company.legalName}
      lead={`An ${company.state} software company. ${company.shortName} sells software design, architecture and AI adoption services, and builds and sells its own products.`}
      aside={
        <picture className="hidden lg:block">
          <source type="image/webp" srcSet={`${company.logo.crest.src640} 640w, ${company.logo.crest.src1280} 1280w`} sizes="320px" />
          <img src={company.logo.crest.src640} alt="Zweifel Tech LLC crest: a nine-tailed fox" width={320} height={320} className="w-80 rounded-lg" />
        </picture>
      }
    />

    <section className="page-section">
      <div className="page-container grid gap-12 lg:grid-cols-3 lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Services</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path} className="arrow-link min-h-11">
                  {s.name} <ArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-3">Products</p>
          <ul className="space-y-4">
            {activeProjects.map((p) => (
              <li key={p.slug}>
                <p className="font-semibold">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.tagline}</p>
              </li>
            ))}
          </ul>
          <Link to="/projects" className="arrow-link mt-4 min-h-11">
            About the products <ArrowRight />
          </Link>
        </div>
        <div>
          <p className="eyebrow mb-3">Contact details</p>
          <dl className="space-y-5">
            <div>
              <dt className="text-sm text-muted-foreground">Legal name</dt>
              <dd className="font-medium">{company.legalName}</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Mailing address</dt>
              <dd className="font-medium">
                <address className="not-italic">
                  {company.mailingAddress.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${company.email}`} className="inline-flex min-h-11 items-center font-medium text-primary underline-offset-4 hover:underline">
                  {company.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Founder</dt>
              <dd className="font-medium">{company.founder}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section className="page-section border-t bg-muted">
      <div className="page-container max-w-3xl">
        <p className="eyebrow mb-3">Customers and reviewers</p>
        <p className="text-lg leading-relaxed">
          Looking for a product's privacy policy, terms or how to delete your data? Everything is on the{" "}
          <Link to="/support" className="font-medium text-primary underline-offset-4 hover:underline">
            Support page
          </Link>
          .
        </p>
      </div>
    </section>
  </>
);

export default Company;
