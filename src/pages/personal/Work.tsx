import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/lib/personal";

// The three leadership case studies. They are anonymized on purpose (see "Content rules" in CLAUDE.md).
const Work = () => (
  <>
    <PageHero
      eyebrow="Work"
      title="Leadership case studies."
      lead="How I've led engineering and data teams through a merger, rapid growth and the move to agent-augmented delivery. Company-specific details are left out."
    />
    <section className="page-section">
      <div className="page-container">
        <ol className="grid gap-6">
          {caseStudies.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="surface-card group grid gap-5 p-7 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8">
                <span className="card-icon">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="eyebrow">{item.kicker}</p>
                  <h2 className="mt-2 text-[1.5rem]">{item.title}</h2>
                  <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{item.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Topics">
                    {item.tags.map((tag) => (
                      <li key={tag} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="arrow-link mt-5">
                    Read the case study <ArrowRight />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  </>
);

export default Work;
