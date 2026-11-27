import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import PageOutlet from "./PageOutlet";
import { company, copyright } from "@/lib/company";
import { personal, personalNav } from "@/lib/personal";

const linkClass = "inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground md:min-h-0";

const Monogram = () => (
  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-navy text-[0.8125rem] font-semibold tracking-tight text-navy-foreground">
    BZ
    <span aria-hidden="true" className="absolute inset-x-1.5 bottom-1 h-px bg-accent" />
  </span>
);

// The personal site under /brandon: Brandon's own header and footer, with a way back to the company site.
const PersonalLayout = () => (
  <div className="flex min-h-screen flex-col bg-background">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow"
    >
      Skip to content
    </a>
    <div className="border-b bg-navy text-navy-foreground">
      <div className="page-container flex min-h-11 items-center justify-between text-sm">
        <span className="text-navy-foreground/80">Personal site of the founder</span>
        <Link to="/" className="flex min-h-11 items-center font-medium underline-offset-4 hover:underline">
          {company.legalName} →
        </Link>
      </div>
    </div>
    <Navigation
      items={personalNav}
      cta={{ path: "/brandon/contact", label: "Contact" }}
      brand={{ to: "/brandon", name: personal.name, mark: <Monogram /> }}
      exact={["/brandon"]}
    />
    <main id="main" className="flex-1">
      <PageOutlet />
    </main>
    <footer className="border-t">
      <div className="page-container flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold">{personal.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {personal.title}
            <br />
            Founder, {company.legalName}
          </p>
        </div>
        <ul className="text-sm md:space-y-2">
          <li>
            <a href={`mailto:${personal.email}`} className={linkClass}>
              {personal.email}
            </a>
          </li>
          <li>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
              LinkedIn
            </a>
          </li>
          <li>
            <Link to="/" className={linkClass}>
              {company.legalName}
            </Link>
          </li>
        </ul>
      </div>
      <div className="border-t">
        <p className="page-container py-6 text-xs text-muted-foreground">
          {copyright()}. This is the personal site of the company's founder.
        </p>
      </div>
    </footer>
  </div>
);

export default PersonalLayout;
