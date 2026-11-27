import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { company } from "@/lib/company";
import { navItems as manifestNav } from "@/lib/routes";

export interface NavLink {
  path: string;
  label: string;
}

interface NavigationProps {
  /** Links shown in the bar; defaults to the company site's primary navigation. */
  items?: NavLink[];
  /** The call-to-action button at the end of the bar. */
  cta?: NavLink;
  /** The name and mark on the left. */
  brand?: { to: string; name: string; mark?: React.ReactNode };
  /** Path prefixes that count as the home of this site, so "/brandon" is not active on every personal page. */
  exact?: string[];
}

const CompanyMark = () => (
  <img src={company.logo.emblem.src160} alt="" width={36} height={36} className="h-9 w-9 shrink-0" />
);

const Navigation = ({
  items = manifestNav("primary"),
  cta = { path: "/contact", label: "Contact" },
  brand = { to: "/", name: company.legalName, mark: <CompanyMark /> },
  exact = [],
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    exact.includes(path)
      ? location.pathname === path
      : location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <nav className="page-container flex h-16 items-center justify-between" aria-label="Main">
        <Link to={brand.to} className="flex min-h-11 items-center gap-3" aria-label={`${brand.name}, home`}>
          {brand.mark}
          <span className="text-[0.9375rem] font-semibold tracking-tight">{brand.name}</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={cn(
                "relative flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                isActive(item.path) &&
                  "text-foreground after:absolute after:inset-x-3 after:-bottom-[10px] after:h-0.5 after:bg-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3">
            <Link to={cta.path} aria-current={isActive(cta.path) ? "page" : undefined}>
              {cta.label}
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </nav>

      {/* Mobile */}
      {isOpen && (
        <div id="mobile-menu" className="border-t bg-background md:hidden">
          <div className="page-container flex flex-col py-3">
            {[...items, cta].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={cn(
                  "border-l-2 border-transparent px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:text-foreground",
                  isActive(item.path) && "border-accent text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
