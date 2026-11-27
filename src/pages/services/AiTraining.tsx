import ServiceLayout from "@/components/ServiceLayout";
import SectionHeading from "@/components/SectionHeading";
import { serviceBySlug } from "@/lib/services";

const format = [
  { title: "On your code", body: "Labs run in your own repositories, so what people learn is what they use on Monday." },
  { title: "Hands-on first", body: "Short framing, then practice: every session ends with something committed and reviewed." },
  { title: "By role", body: "Developers, tech leads and managers share the core labs and split for the parts that differ." },
  { title: "Measured", body: "A readiness check before and after, and the scorecard measures that show adoption is working." },
];

const outcomes = [
  "A team that can run agents under review on real work, with shared rules for when to accept, revise or reject agent output",
  "Repository instructions, skills and review checklists in place and owned",
  "A completed readiness checklist and a clear next step on the maturity path for each team",
];

const AiTraining = () => {
  const service = serviceBySlug("ai-training");
  return (
    <ServiceLayout service={service}>
      <section className="page-section border-t">
        <div className="page-container">
          <SectionHeading eyebrow="Format" title="A hands-on lab, not a lecture" />
          <ul className="grid gap-6 md:grid-cols-4">
            {format.map((f) => (
              <li key={f.title} className="border-t-2 border-accent pt-5">
                <h3>{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section border-t">
        <div className="page-container">
          <SectionHeading
            eyebrow="Learning path"
            title="Keyed to the maturity levels"
            description="Developers move up one level at a time. Each level has its own labs and its own evidence that the team is ready for the next."
          />
          <ol className="grid gap-6 lg:grid-cols-3">
            {service.learningPath.map((step) => (
              <li key={step.level} className="surface-card p-7">
                <p className="font-mono text-2xl font-semibold text-primary">{step.level}</p>
                <h3 className="mt-1">{step.title}</h3>
                <p className="mt-4 text-sm font-medium">Developers learn</p>
                <ul className="mt-2 space-y-2">
                  {step.developersLearn.map((d) => (
                    <li key={d} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-section border-t">
        <div className="page-container grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow mb-3">What the organization gets</p>
            <ul className="space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">The lab behind the training</p>
            <p className="leading-relaxed text-muted-foreground">
              The curriculum comes from a working AI development lab, built to test agent frameworks and models on real workloads
              before recommending them to a team.
            </p>
            <ul className="mt-4 space-y-3">
              {service.labBasis.map((l) => (
                <li key={l} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default AiTraining;
