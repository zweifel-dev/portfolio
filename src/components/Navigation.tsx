import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/profile";

const navItems = [
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/research", label: "Research" },
  { path: "/reflections", label: "Reflections" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu after navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 border-b bg-background">
      <nav className="page-container flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="flex items-center gap-3" aria-label={`${profile.name}, home`}>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-md bg-navy text-[0.8125rem] font-semibold tracking-tight text-navy-foreground">
            BZ
            <span aria-hidden="true" className="absolute inset-x-1.5 bottom-1 h-px bg-accent" />
          </span>
          <span className="text-[0.9375rem] font-semibold tracking-tight">{profile.name}</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              aria-current={isActive(item.path) ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                isActive(item.path) &&
                  "text-foreground after:absolute after:inset-x-3 after:-bottom-[13px] after:h-0.5 after:bg-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-3">
            <Link to="/contact" aria-current={isActive("/contact") ? "page" : undefined}>
              Contact
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
            {[...navItems, { path: "/contact", label: "Contact" }].map((item) => (
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
