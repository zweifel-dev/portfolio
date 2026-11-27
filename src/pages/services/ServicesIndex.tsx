import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";

const ServicesIndex = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="Three ways we can help."
      lead="Build and scale software, bring AI into how your teams deliver it, and train developers to work with agents. Each engagement starts with a conversation and a short, fixed-scope first step."
    >
      <Button asChild variant="accent" size="lg">
        <Link to="/contact">Start a conversation</Link>
      </Button>
    </PageHero>
    <section className="page-section">
      <div className="page-container">
        <ul className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} showAudience />
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default ServicesIndex;
