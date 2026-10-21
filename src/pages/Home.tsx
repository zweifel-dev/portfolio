import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import Portrait from "@/components/Portrait";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { currentRoles, profile } from "@/lib/profile";
import { allWork } from "@/lib/work";

const stats = [
  { value: "20+", label: "years leading people, from Army intelligence to engineering leadership" },
  { value: "15 → 65+", label: "people on the R&D team I grew through a merger integration" },
  { value: "7", label: "production AI agents shipped, each with a human reviewer" },
  { value: "MBA", label: "in business strategy using AI and analytics, Milwaukee School of Engineering" },
];

const principles = [
  {
    title: "Trust before tooling",
    body: "AI adoption stalls on trust, not technology. Start with low-risk work, let agents draft, and keep people as reviewers.",
  },
  {
    title: "Leaders in the code",
    body: "I build with the tools before asking a team to adopt them. It's how you set expectations that hold up.",
  },
  {
    title: "Architecture is a people choice",
    body: "The right technology is the one that fits the team you have and where the organization is heading.",
  },
];

const featured = ["/ai-augmented-sdlc", "/prove-pattern", "/ai-development-lab"].map((to) =>
  allWork.find((w) => w.to === to)
);

const Home = () => {
  return (
    <>
      <PageHero
        eyebrow={`${profile.title} · HHAeXchange`}
        title={profile.name}
        lead="Engineering leader with twenty years of turning information into decisions, from Army intelligence to building software, data and AI teams in healthcare SaaS. I also run Zweifel Tech LLC, a small software publisher."
        aside={<Portrait eager className="mx-0 w-44 sm:w-64 lg:w-72" />}
      >
        <Button asChild variant="accent" size="lg">
          <Link to="/about">About me</Link>
        </Button>
        <Button asChild variant="on-navy" size="lg">
          <Link to="/contact">Get in touch</Link>
        </Button>
      </PageHero>

      {/* Now */}
      <section className="page-section">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading eyebrow="Now" title="What I'm working on" />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {currentRoles.map((role) => (
              <StaggerItem key={role.org} className="h-full">
                <article className="ruled-card h-full p-7 lg:p-8">
                  <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
                  <h3 className="mt-3">{role.org}</h3>
                  <p className="font-medium text-primary">{role.role}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{role.summary}</p>
                  {role.org === "Zweifel Tech LLC" && (
                    // A plain link: /midnight-alibi/ is a static page outside the React app
                    <a href="/midnight-alibi/" className="arrow-link mt-5">
                      Visit Midnight Alibi <ArrowRight />
                    </a>
                  )}
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Track record */}
      <section className="border-y bg-muted">
        <div className="page-container page-section-sm">
          <StaggerContainer className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.value}>
                <div className="border-t-2 border-accent pt-5">
                  <p className="stat-value">{stat.value}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Selected work */}
      <section className="page-section">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Things I've built"
              action={
                <Link to="/projects" className="arrow-link">
                  All projects <ArrowRight />
                </Link>
              }
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-6 lg:grid-cols-3">
            <StaggerItem className="lg:col-span-3">
              <a
                href="/midnight-alibi/"
                className="group relative block overflow-hidden rounded-lg border border-[#d6a54d]/30 bg-[#141217] text-[#ece4d1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a54d]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-[center_30%] opacity-60 transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  style={{ backgroundImage: "url('/midnight-alibi/assets/manor-night.webp')" }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#141217] via-[#141217]/85 to-[#141217]/10" />
                <div className="relative max-w-xl p-8 lg:p-12">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#d6a54d]">Zweifel Tech LLC · Game &amp; book</p>
                  <h3 className="mt-3 text-3xl font-semibold lg:text-4xl">
                    Midnight <em className="text-[#d6a54d]">Alibi</em>
                  </h3>
                  <p className="mt-4 leading-relaxed text-[#ece4d1]/80">
                    A murder-mystery logic puzzle: rebuild every suspect's night, hour by hour, and name the killer.
                    Now on the App Store and Google Play.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[#d6a54d]">
                    Visit the game
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </StaggerItem>
            {featured.map((item) => (
              <StaggerItem key={item.to} className="h-full">
                <Link to={item.to} className="surface-card group flex h-full flex-col p-7 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="card-icon">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <p className="eyebrow">{item.kicker}</p>
                  </div>
                  <h3 className="mt-5">{item.title}</h3>
                  <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{item.short}</p>
                  <span className="arrow-link mt-5">
                    Read more <ArrowRight />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How I lead */}
      <section className="page-section border-t">
        <div className="page-container">
          <ScrollReveal>
            <SectionHeading
              eyebrow="How I lead"
              title="A few things I believe"
              action={
                <Link to="/reflections" className="arrow-link">
                  Read the reflections <ArrowRight />
                </Link>
              }
            />
          </ScrollReveal>
          <StaggerContainer className="grid gap-10 md:grid-cols-3">
            {principles.map((p, i) => (
              <StaggerItem key={p.title}>
                <p className="font-mono text-sm text-accent-ink">0{i + 1}</p>
                <h3 className="mt-2">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact band */}
      <section className="hero-band">
        <div className="page-container flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Contact</p>
            <h2>Let's talk.</h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-muted">
              Engineering leadership, agentic AI, or a Midnight Alibi case that got the better of you. I'm glad to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="accent" size="lg">
              <a href={`mailto:${profile.email}`}>Email me</a>
            </Button>
            <Button asChild variant="on-navy" size="lg">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
