import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import { personal } from "@/lib/personal";

const methods = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: Linkedin, label: "LinkedIn", value: personal.linkedinLabel, href: personal.linkedin, external: true },
];

const Contact = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Let's talk."
      lead="I'm glad to hear from fellow engineering leaders and people working on agentic AI, and to talk about speaking. Email is the fastest way to reach me."
    />
    <section className="page-section">
      <div className="page-container grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16">
        <ul className="grid content-start gap-3">
          {methods.map((m) => (
            <li key={m.label}>
              <a
                href={m.href}
                target={m.external ? "_blank" : undefined}
                rel={m.external ? "noopener noreferrer" : undefined}
                className="surface-card flex items-center gap-4 px-6 py-5"
              >
                <span className="card-icon">
                  <m.icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="eyebrow block">{m.label}</span>
                  <span className="mt-1 block break-words font-medium text-foreground">{m.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <aside className="ruled-card p-7">
          <p className="eyebrow">Company inquiries</p>
          <h2 className="mt-3 text-[1.375rem]">Looking for Zweifel Tech LLC?</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Engagements, product support for Midnight Alibi and Vulpen Design, press and partnerships go through the
            company.
          </p>
          <Link to="/contact" className="arrow-link mt-5 min-h-11">
            Contact Zweifel Tech LLC <ArrowRight />
          </Link>
        </aside>
      </div>
    </section>
  </>
);

export default Contact;
