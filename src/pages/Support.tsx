import { ArrowRight, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { company, mailto } from "@/lib/company";
import { activeProjects, type Project } from "@/lib/projects";

const SupportLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const external = href.startsWith("http");
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="arrow-link min-h-11"
    >
      {children} <Icon />
    </a>
  );
};

const links = (p: Project) =>
  [
    { href: p.support.help, label: p.support.helpLabel },
    { href: p.support.privacy, label: "Privacy policy" },
    { href: p.support.terms, label: "Terms" },
    p.support.deleteData && { href: p.support.deleteData, label: "Delete your data" },
  ].filter(Boolean) as { href: string; label: string }[];

const Support = () => (
  <>
    <PageHero
      eyebrow="Support"
      title="Help with our products."
      lead="Help, privacy policies, terms and data deletion for Midnight Alibi and Vulpen Design."
    />
    <section className="page-section">
      <div className="page-container grid gap-6 lg:grid-cols-2">
        {activeProjects.map((p) => (
          <section key={p.slug} aria-labelledby={`${p.slug}-h`} className="surface-card p-7 lg:p-8">
            <h2 id={`${p.slug}-h`} className="text-[1.5rem]">
              {p.name}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
            <ul className="mt-5 space-y-1">
              {links(p).map((l) => (
                <li key={l.href}>
                  <SupportLink href={l.href}>{l.label}</SupportLink>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t pt-4 text-sm text-muted-foreground">
              {p.support.note}{" "}
              {p.support.email ? (
                <>
                  Or email{" "}
                  <a href={`mailto:${p.support.email}`} className="font-medium text-primary underline-offset-4 hover:underline">
                    {p.support.email}
                  </a>
                  .
                </>
              ) : (
                <>
                  Email{" "}
                  <a href={mailto(`Support: ${p.name}`)} className="font-medium text-primary underline-offset-4 hover:underline">
                    {company.email}
                  </a>
                  .
                </>
              )}
            </p>
          </section>
        ))}
      </div>
    </section>
  </>
);

export default Support;
