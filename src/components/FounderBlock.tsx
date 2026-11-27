import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Portrait from "./Portrait";
import { company } from "@/lib/company";

// "Who you'll work with" on Home and the Services index. The figures are the ones already public on the
// /brandon About page; no employer name (see "Content rules" in CLAUDE.md).
const FounderBlock = () => (
  <section className="page-section border-t" aria-labelledby="founder-h" data-founder>
    <div className="page-container grid items-center gap-10 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14">
      <Portrait className="w-40 sm:w-44 lg:w-48" />
      <div className="max-w-2xl">
        <p className="eyebrow mb-3">Who you'll work with</p>
        <h2 id="founder-h">{company.founder}, founder</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Every engagement is led by Brandon, a U.S. veteran and software engineering leader who grew an R&amp;D team from 15 to more
          than 65 people and shipped seven production AI agents with a human reviewer on every change. He wrote the
          Method published on this site.
        </p>
        <Link to="/brandon" className="arrow-link mt-5">
          About Brandon <ArrowRight />
        </Link>
      </div>
    </div>
  </section>
);

export default FounderBlock;
