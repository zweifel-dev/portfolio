import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import { profile } from "@/lib/profile";

interface LayoutProps {
  children: ReactNode;
}

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/research", label: "Research" },
  { to: "/reflections", label: "Reflections" },
  { to: "/contact", label: "Contact" },
];

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Start each page at the top; the router keeps the old scroll position otherwise
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="page-container grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {profile.title}, HHAeXchange
              <br />
              Founder, Zweifel Tech LLC
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow mb-3">Site</p>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow mb-3">Elsewhere</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${profile.email}`} className="text-muted-foreground transition-colors hover:text-foreground">
                  {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
                  LinkedIn
                </a>
              </li>
              <li>
                {/* A plain link: /midnight-alibi/ is a static page outside the React app */}
                <a href="/midnight-alibi/" className="text-muted-foreground transition-colors hover:text-foreground">
                  Midnight Alibi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t">
          <p className="page-container py-6 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {profile.name}. Midnight Alibi is published by Zweifel Tech LLC.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
