import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <footer className="bg-background border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2025 Brandon Zweifel | <a href="/contact" className="hover:text-primary transition-colors">Contact</a> | <a href="https://www.linkedin.com/in/bzweifel/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;