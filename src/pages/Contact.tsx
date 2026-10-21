import { Mail, Phone, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import { profile } from '@/lib/profile';

const contactMethods = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin, external: true },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: 'Location', value: profile.location },
];

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        lead="I'm glad to hear from fellow engineering leaders, people working on agentic AI, and Midnight Alibi players. Email is the fastest way to reach me."
      />

      <section className="page-section">
        <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
          <StaggerContainer className="grid content-start gap-3">
            {contactMethods.map((method) => {
              const content = (
                <>
                  <span className="card-icon">
                    <method.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="eyebrow">{method.label}</p>
                    <p className="mt-1 break-words font-medium text-foreground">{method.value}</p>
                  </div>
                </>
              );
              return (
                <StaggerItem key={method.label}>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.external ? '_blank' : undefined}
                      rel={method.external ? 'noopener noreferrer' : undefined}
                      className="surface-card flex items-center gap-4 px-6 py-5"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="surface-card flex items-center gap-4 px-6 py-5">{content}</div>
                  )}
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal delay={0.1}>
            <aside className="ruled-card p-7">
              <p className="eyebrow">Midnight Alibi players</p>
              <h2 className="mt-3 text-[1.375rem]">Questions about the game or your data?</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Email me and include your Player ID from Settings → About if it's about your account. The privacy policy
                and the deletion steps are also online.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                {/* Plain links: these are static pages outside the React app */}
                <a href="/midnight-alibi/privacy/" className="arrow-link">
                  Privacy policy <ArrowRight />
                </a>
                <a href="/midnight-alibi/delete-account/" className="arrow-link">
                  Delete your data <ArrowRight />
                </a>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
