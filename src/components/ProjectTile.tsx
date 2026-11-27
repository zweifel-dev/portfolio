import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

// Each project keeps its own colors (--project-* tokens) inside the company site. Plain <a> links: the targets are
// static pages outside the React app or another site.
const tone = {
  ma: { bg: "bg-project-ma-bg", ink: "text-project-ma-ink", accent: "text-project-ma-accent", fill: "bg-project-ma-accent", onFill: "text-project-ma-bg", from: "from-project-ma-bg via-project-ma-bg/90" },
  vd: { bg: "bg-project-vd-bg", ink: "text-project-vd-ink", accent: "text-project-vd-accent", fill: "bg-project-vd-accent", onFill: "text-project-vd-bg", from: "from-project-vd-bg via-project-vd-bg/90" },
};

const ProjectTile = ({ project, detailed = false }: { project: Project; detailed?: boolean }) => {
  const t = tone[project.colors];
  const Icon = project.primaryAction.external ? ArrowUpRight : ArrowRight;
  return (
    <article className={cn("relative flex h-full flex-col overflow-hidden rounded-lg", t.bg, t.ink)}>
      <div aria-hidden="true" className="absolute inset-0">
        <img
          src={project.art.image}
          srcSet={project.art.srcSet}
          sizes="(min-width: 1024px) 40vw, 100vw"
          alt=""
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full opacity-60",
            project.art.contain ? "object-contain object-right" : "object-cover"
          )}
          style={{ objectPosition: project.art.contain ? undefined : project.art.position }}
        />
        <div className={cn("absolute inset-0 bg-gradient-to-r to-transparent", t.from)} />
      </div>
      <div className="relative flex flex-1 flex-col p-7 lg:p-9">
        <p className={cn("font-mono text-xs uppercase tracking-[0.18em]", t.accent)}>
          {project.category} · {project.platforms.join(", ")}
        </p>
        <h3 className="mt-3 text-3xl font-semibold">{project.name}</h3>
        <p className="mt-3 max-w-md leading-relaxed opacity-90">{project.tagline}</p>
        {detailed && (
          <ul className="mt-5 max-w-md space-y-2 text-sm opacity-90">
            {project.built.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden="true" className={cn("mt-[0.6em] h-px w-3 shrink-0", t.fill)} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-5 text-xs opacity-80">Built and owned by Zweifel Tech LLC</p>
        <div className="mt-auto pt-6">
          <a
            href={project.primaryAction.href}
            target={project.primaryAction.external ? "_blank" : undefined}
            rel={project.primaryAction.external ? "noopener noreferrer" : undefined}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded-lg px-5 py-2.5 font-semibold transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
              t.fill,
              t.onFill
            )}
          >
            {project.primaryAction.label} <span className="sr-only">: {project.name}</span>
            <Icon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectTile;
