import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import PageOutlet from "./PageOutlet";
import { company, copyright } from "@/lib/company";
import { navItems } from "@/lib/routes";

const linkClass = "inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground md:min-h-0";

// The company site's frame: header, the current page and the company footer.
// The footer's founder link is the only link from the company site to the personal pages.
const Layout = () => {
  const siteLinks = [...navItems("primary"), { path: "/contact", label: "Contact" }];
  const helpLinks = navItems("footer");

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="flex-1">
        <PageOutlet />
      </main>
      <footer className="border-t">
        <div className="page-container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={company.logo.mark.src96} srcSet={`${company.logo.mark.src96} 1x, ${company.logo.mark.src192} 2x`} alt="" width={40} height={40} className="h-10 w-10" loading="lazy" />
              <p className="font-semibold">{company.legalName}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Software design, architecture and scale, and AI-enabled delivery for engineering teams.
            </p>
            <address className="mt-4 text-sm not-italic text-muted-foreground">
              {company.mailingAddress.slice(1).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-3">Company</p>
            <ul className="text-sm md:space-y-2">
              {siteLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-3">Help</p>
            <ul className="text-sm md:space-y-2">
              {helpLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className={linkClass}>
                  {company.email}
                </a>
              </li>
              <li>
                <Link to="/brandon" className={linkClass}>
                  Founder: {company.founder}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <p className="page-container py-6 text-xs text-muted-foreground">
            {copyright()}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
