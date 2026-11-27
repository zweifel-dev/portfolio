import ServiceLayout from "@/components/ServiceLayout";
import SectionHeading from "@/components/SectionHeading";
import { serviceBySlug } from "@/lib/services";

const steps = [
  { title: "Understand", body: "A short discovery: the product goal, the users, the constraints and the system as it stands today." },
  { title: "Decide", body: "Architecture options with their trade-offs, written up as decision records you keep." },
  { title: "Build", body: "Working software in short, reviewed increments, with tests and a deployment pipeline from the first week." },
  { title: "Scale and hand over", body: "Load, cost and observability work, then runbooks and a walkthrough so your team owns it." },
];

const SoftwareArchitecture = () => {
  const service = serviceBySlug("software-architecture");
  return (
    <ServiceLayout service={service}>
      <section className="page-section border-t">
        <div className="page-container">
          <SectionHeading
            eyebrow="How an engagement runs"
            title="Fast, without skipping the design"
            description="Speed comes from making the important decisions early and writing them down, then building in small steps that are tested and reviewed."
          />
          <ol className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t-2 border-accent pt-5">
                <p className="font-mono text-sm text-accent-ink">0{i + 1}</p>
                <h3 className="mt-1">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl leading-relaxed text-muted-foreground">
            We built our own products this way: Midnight Alibi, a puzzle game with its own case generator on iPhone,
            iPad and Android, and Vulpen Design, a floor-plan web app with live subscriptions.
          </p>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default SoftwareArchitecture;
