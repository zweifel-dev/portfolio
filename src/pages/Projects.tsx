import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { caseStudies, research, type WorkItem } from '@/lib/work';

// One card for a case study or research piece
const WorkCard = ({ item }: { item: WorkItem }) => (
  <Link to={item.to} className="surface-card group flex h-full flex-col p-7 lg:p-8">
    <div className="flex items-center gap-3">
      <span className="card-icon">
        <item.icon className="h-5 w-5" />
      </span>
      <p className="eyebrow">{item.kicker}</p>
    </div>
    <h3 className="mt-5">{item.title}</h3>
    <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{item.summary}</p>
    <div className="project-tags mt-6">
      {item.tags.map((tag) => (
        <span key={tag} className="project-tag">
          {tag}
        </span>
      ))}
    </div>
    <span className="arrow-link">
      Read more <ArrowRight />
    </span>
  </Link>
);

const Projects = () => {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Things I've built, led and published."
        lead="Leadership case studies, products from Zweifel Tech LLC, and my independent research on agentic AI. The case studies cover approach and lessons; details that belong to the companies involved stay with them."
      />

      {/* Leadership case studies */}
      <section className="page-section">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Case studies"
              title="How I lead engineering organizations"
              description="Operating models, team building and data culture, drawn from leading engineering and data teams in healthcare SaaS."
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 lg:grid-cols-3" staggerDelay={0.1}>
            {caseStudies.map((item) => (
              <StaggerItem key={item.to} className="h-full">
                <WorkCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Zweifel Tech LLC */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Zweifel Tech LLC"
              title="Published titles"
              description="Zweifel Tech LLC is my independent software publisher."
            />
          </ScrollReveal>

          <ScrollReveal>
            {/* A plain link, not <Link>: /midnight-alibi/ is a static page in public/, outside the React app. */}
            <a
              href="/midnight-alibi/"
              className="group relative block overflow-hidden rounded-lg border border-[#d6a54d]/30 bg-[#141217] text-[#ece4d1] transition-shadow hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a54d]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-[center_30%] opacity-60 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                style={{ backgroundImage: "url('/midnight-alibi/assets/manor-night.webp')" }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#141217] via-[#141217]/85 to-[#141217]/20" />
              <div className="relative grid gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
                <div className="max-w-2xl">
                  <div className="mb-5 flex items-center gap-4">
                    <img src="/midnight-alibi/assets/seal.svg" alt="" className="h-14 w-14 rounded-full shadow-lg" />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d6a54d]">iPhone, iPad &amp; Android · Book</p>
                      <h3 className="text-3xl font-semibold lg:text-4xl">
                        Midnight <em className="text-[#d6a54d]">Alibi</em>
                      </h3>
                    </div>
                  </div>
                  <p className="mb-6 leading-relaxed text-[#ece4d1]/80">
                    A murder-mystery logic puzzle: rebuild every suspect's night, hour by hour, and name the killer. Under
                    the noir art is a constraint solver that builds and grades every case by the deduction techniques it
                    needs. The game is a web app wrapped for iOS and Android with Capacitor, with in-app purchases and
                    optional Cloud Save through Game Center and Google Play Games. Midnight Alibi is also a book.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['JavaScript', 'Constraint Solving', 'Capacitor', 'Firebase', 'App Store', 'Google Play'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#ece4d1]/20 px-3 py-1 text-xs text-[#ece4d1]/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="inline-flex items-center justify-center gap-2 self-start rounded-lg bg-[#d6a54d] px-6 py-3 font-semibold text-[#141217] transition-colors group-hover:bg-[#eadcb8] lg:self-center">
                  Visit the game
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Research & lab */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Research & lab"
              title="Independent work on agentic AI"
              description="Where I test ideas before I'd ask a team to rely on them."
            />
          </ScrollReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
            {research.map((item) => (
              <StaggerItem key={item.to} className="h-full">
                <WorkCard item={item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
};

export default Projects;
