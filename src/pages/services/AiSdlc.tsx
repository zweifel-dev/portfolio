import { Link } from "react-router-dom";
import ServiceLayout from "@/components/ServiceLayout";
import SectionHeading from "@/components/SectionHeading";
import { method } from "@/content/method/data";
import { serviceBySlug } from "@/lib/services";

const phases = [
  {
    title: "Assess",
    body: "Interviews, repository and pipeline review against the five maturity levels and the readiness checklist. You get a level per team, with the evidence.",
  },
  {
    title: "Ground",
    body: "Close the foundation gaps first: governance, repository instructions, code context, tool permissions and the deterministic controls agents depend on.",
  },
  {
    title: "Pilot",
    body: "One team, real work, stage contracts and approval classes in place, with the scorecard baselined before the pilot starts.",
  },
  {
    title: "Scale",
    body: "Widen to more teams and more stages as the scorecard shows flow improving without losing stability.",
  },
];

const AiSdlc = () => {
  const service = serviceBySlug("ai-sdlc");
  return (
    <ServiceLayout service={service}>
      <section className="page-section border-t">
        <div className="page-container">
          <SectionHeading
            eyebrow="The method behind it"
            title="Five levels, one contract, measured results"
            description="Every engagement uses the Zweifel Tech method, published in full on this site."
          />
          <ol className="grid gap-3 md:grid-cols-5">
            {method.maturity.map((l) => (
              <li key={l.id} className="surface-card p-5">
                <p className="font-mono text-xl font-semibold text-primary">{l.id}</p>
                <p className="font-semibold">{l.shortName}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l.operatingMode}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
            Each stage of delivery follows the same{" "}
            <Link to="/method/stage-contract" className="font-medium text-primary underline-offset-4 hover:underline">
              six-part contract
            </Link>{" "}
            ({method.contract.map((f) => f.name.toLowerCase()).join(", ")}), agents reason inside a stage with the{" "}
            <Link to="/method/prove" className="font-medium text-primary underline-offset-4 hover:underline">
              PROVE loop
            </Link>{" "}
            ({method.prove.map((p) => p.name).join(", ")}), and the{" "}
            <Link to="/method/lifecycle" className="font-medium text-primary underline-offset-4 hover:underline">
              twelve-stage lifecycle
            </Link>{" "}
            runs from requirement to production learning.
          </p>
        </div>
      </section>

      <section className="page-section border-t">
        <div className="page-container">
          <SectionHeading eyebrow="How an engagement runs" title="Assess, ground, pilot, scale" />
          <ol className="grid gap-6 md:grid-cols-4">
            {phases.map((s, i) => (
              <li key={s.title} className="border-t-2 border-accent pt-5">
                <p className="font-mono text-sm text-accent-ink">0{i + 1}</p>
                <h3 className="mt-1">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </ServiceLayout>
  );
};

export default AiSdlc;
