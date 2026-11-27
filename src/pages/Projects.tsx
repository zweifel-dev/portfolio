import PageHero from "@/components/PageHero";
import ProjectTile from "@/components/ProjectTile";
import { activeProjects } from "@/lib/projects";
import { Link } from "react-router-dom";

const Projects = () => (
  <>
    <PageHero
      eyebrow="Projects"
      title="Products we built, and you can buy."
      lead="Zweifel Tech designs, builds and runs its own products. They're on sale today, and they're the proof behind the services: the same design, architecture and delivery practices, in production."
    />
    <section className="page-section">
      <div className="page-container">
        <ul className="grid gap-6 lg:grid-cols-2">
          {activeProjects.map((p) => (
            <li key={p.slug}>
              <ProjectTile project={p} detailed />
            </li>
          ))}
        </ul>
        <p className="mt-10 text-muted-foreground">
          Need help with one of them?{" "}
          <Link to="/support" className="font-medium text-primary underline-offset-4 hover:underline">
            Support, privacy and terms
          </Link>{" "}
          for each product are in one place.
        </p>
      </div>
    </section>
  </>
);

export default Projects;
