import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { figures } from "@/components/method/Figures";
import { method } from "@/content/method/data";
import { methodPageByPath, methodPages, methodPath, type MethodSection } from "@/lib/method";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const Section = ({ section }: { section: MethodSection }) => {
  const Figure = section.figure ? figures[section.figure] : null;
  const List = section.ordered ? "ol" : "ul";
  const id = section.id ?? slugify(section.heading);
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-24 border-t pt-10 first:border-t-0 first:pt-0">
      <h2 id={`${id}-h`} className="max-w-3xl">
        {section.heading}
      </h2>
      {section.body && (
        <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          {section.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}
      {section.list && (
        <List className={cn("mt-5 max-w-3xl space-y-3 leading-relaxed", section.ordered && "list-decimal pl-5")}>
          {section.list.map((item) =>
            section.ordered ? (
              <li key={item} className="pl-1 text-muted-foreground">
                {item}
              </li>
            ) : (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />
                <span>{item}</span>
              </li>
            )
          )}
        </List>
      )}
      {Figure && (
        <figure className="mt-8">
          <Figure />
          {section.figureCaption && (
            <figcaption className="mt-3 max-w-3xl text-sm text-muted-foreground">{section.figureCaption}</figcaption>
          )}
        </figure>
      )}
      {section.table && (
        <div className="mt-8 overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[32rem] text-left text-sm">
            {section.table.caption && (
              <caption className="border-b bg-muted px-4 py-3 text-left font-medium">{section.table.caption}</caption>
            )}
            <thead className="bg-navy text-navy-foreground">
              <tr>
                {section.table.columns.map((c) => (
                  <th key={c} scope="col" className="px-4 py-3 font-medium">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {section.table.rows.map((row) => (
                <tr key={row.join("|")} className="align-top">
                  {row.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="w-48 px-4 py-3 font-semibold">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="px-4 py-3 leading-relaxed text-muted-foreground">
                        {cell}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.callout && (
        <aside className="ruled-card mt-8 max-w-3xl p-6 pl-7">
          <p className="eyebrow">{section.callout.label}</p>
          <p className="mt-2 leading-relaxed">{section.callout.text}</p>
        </aside>
      )}
      {section.after && (
        <div className="mt-6 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
          {section.after.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}
    </section>
  );
};

// Renders any Method page from src/lib/method.ts, chosen by the current path.
const MethodPage = () => {
  const { pathname } = useLocation();
  const page = methodPageByPath(pathname.replace(/\/+$/, "") || "/method") ?? methodPages[0];
  const index = methodPages.indexOf(page);
  const prev = methodPages[index - 1];
  const next = methodPages[index + 1];
  const refs =
    page.references === "prove" ? method.proveReferences : page.references === "method" ? method.references : [];

  return (
    <>
      <PageHero eyebrow={`The Method · Part ${page.order} of ${methodPages.length}`} title={page.title} lead={page.summary} />

      <div className="page-container grid gap-12 py-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:py-16">
        <nav aria-label="Method" className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow mb-3">The Method</p>
          <ol className="space-y-1 border-l text-sm">
            {methodPages.map((p) => {
              const current = p === page;
              return (
                <li key={p.slug}>
                  <Link
                    to={methodPath(p.slug)}
                    aria-current={current ? "page" : undefined}
                    className={cn(
                      "-ml-px flex min-h-11 items-center gap-2 border-l-2 border-transparent py-2 pl-4 text-muted-foreground transition-colors hover:text-foreground",
                      current && "border-accent font-medium text-foreground"
                    )}
                  >
                    <span className="font-mono text-xs">{p.order}</span>
                    {p.navTitle}
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>

        <article className="min-w-0">
          <div className="space-y-12">
            {page.sections.map((s) => (
              <Section key={s.heading} section={s} />
            ))}
          </div>

          {refs.length > 0 && (
            <section aria-labelledby="refs-h" className="mt-14 border-t pt-10">
              <h2 id="refs-h" className="text-[1.375rem]">
                References
              </h2>
              <ol className="mt-5 space-y-2 text-sm text-muted-foreground">
                {refs.map((r) => (
                  <li key={r.n} className="flex gap-3">
                    <span className="w-7 shrink-0 font-mono text-xs leading-6">[{r.n}]</span>
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="break-words hover:text-primary hover:underline">
                      {r.title}
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          )}

          <p className="mt-14 border-t pt-6 text-sm text-muted-foreground">
            From <cite className="not-italic font-medium text-foreground">{method.title}</cite>, version {method.version},{" "}
            {method.date}. {method.author}.
          </p>

          <nav aria-label="Method pages" className="mt-8 grid gap-3 sm:grid-cols-2">
            {prev ? (
              <Link to={methodPath(prev.slug)} className="surface-card group flex flex-col p-5">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <ArrowLeft className="h-4 w-4" /> Previous
                </span>
                <span className="mt-1 font-semibold">{prev.navTitle}</span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={methodPath(next.slug)} className="surface-card group flex flex-col p-5 sm:text-right">
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground sm:justify-end">
                  Next <ArrowRight className="h-4 w-4" />
                </span>
                <span className="mt-1 font-semibold">{next.navTitle}</span>
              </Link>
            )}
          </nav>

          <aside className="mt-12 rounded-lg bg-navy p-7 text-navy-foreground">
            <p className="eyebrow text-accent">Put the method to work</p>
            <p className="mt-2 max-w-2xl text-lg">
              We assess where your teams are on this model and help them move up a level safely.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button asChild variant="accent">
                <Link to="/services/ai-sdlc">AI-enabled delivery service</Link>
              </Button>
              <Button asChild variant="on-navy">
                <Link to="/contact">Start a conversation</Link>
              </Button>
            </div>
          </aside>
        </article>
      </div>
    </>
  );
};

export default MethodPage;
