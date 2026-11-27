import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";

// A service in the Home and Services grids: name, one-line summary, who it's for and a link to its page.
const ServiceCard = ({ service, showAudience = false }: { service: Service; showAudience?: boolean }) => (
  <Link to={service.path} className="surface-card group flex h-full flex-col p-7 lg:p-8">
    <span className="card-icon">
      <service.icon className="h-5 w-5" />
    </span>
    <h3 className="mt-5">{service.name}</h3>
    <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{service.summary}</p>
    {showAudience && (
      <p className="mt-4 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">For: </span>
        {service.audience.map((a) => a.split(" who ")[0].split(" facing ")[0]).join("; ")}
      </p>
    )}
    <span className="arrow-link mt-5">
      About this service <ArrowRight />
    </span>
  </Link>
);

export default ServiceCard;
