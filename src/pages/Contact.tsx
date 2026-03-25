import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Brandon@Zweifel.tech',
    href: 'mailto:Brandon@Zweifel.tech',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '608.931.4726',
    href: 'tel:+16089314726',
    color: 'bg-success/10 text-success',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/bzweifel',
    href: 'https://www.linkedin.com/in/bzweifel/',
    external: true,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Roscoe, IL',
    color: 'bg-accent/10 text-accent-foreground',
  },
];

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-hero text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="hero-title">Let's Connect</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="hero-subtitle">
              Strategic conversations start here.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Executive data &amp; AI leadership &bull; Advisory partnerships &bull; Strategic consulting
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 page-section">
        <div className="flex justify-center">
          <div className="w-full max-w-4xl space-y-12">

            {/* Positioning Statement */}
            <ScrollReveal>
              <Card className="p-8 lg:p-10 shadow-executive-lg">
                <CardContent className="space-y-6 p-0">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Whether you're looking for executive data &amp; AI leadership, exploring advisory partnerships,
                    or want to discuss how AI-augmented data organizations can transform your business — I welcome
                    the conversation. My background spans enterprise platform architecture, agentic AI deployment,
                    M&amp;A data integration, and building high-performance teams from the ground up.
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="font-semibold text-foreground text-lg">
                      Open to executive leadership opportunities, advisory roles, board positions, and strategic consulting engagements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Methods Grid */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method) => (
                <StaggerItem key={method.label}>
                  <Card className="h-full hover:shadow-executive-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0 ${method.color}`}>
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                        {method.href ? (
                          <a
                            href={method.href}
                            target={method.external ? '_blank' : undefined}
                            rel={method.external ? 'noopener noreferrer' : undefined}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground">{method.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* CTA */}
            <ScrollReveal>
              <div className="text-center space-y-6">
                <p className="text-muted-foreground">
                  Prefer to start with my background? Review the executive portfolio first.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/about">
                    <Button variant="outline" size="lg">View Full Profile</Button>
                  </Link>
                  <Link to="/projects">
                    <Button size="lg">Executive Portfolio</Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
