import Link from "next/link";
import { PrintButton } from "~/components/piece-of-pie-yearbook/PrintButton";
import { CardanoBadge } from "~/components/piece-of-pie-yearbook/ProjectElements";
import { YearbookLayout } from "~/components/piece-of-pie-yearbook/YearbookLayout";
import {
  categories,
  projectInitials,
  projects,
  YEARBOOK_BASE_PATH,
} from "~/data/piece-of-pie-yearbook";

export default function PrintEdition() {
  return (
    <YearbookLayout title="Printable Edition — Piece of Pie Yearbook">
      <div className="yb-print-toolbar yb-no-print">
        <Link href={YEARBOOK_BASE_PATH}>← Back to yearbook</Link>
        <PrintButton />
      </div>

      <section className="yb-print-cover">
        <p>Gimbalabs · 2026</p>
        <h1>
          Piece of Pie
          <br />
          <em>Yearbook</em>
        </h1>
        <div>
          <span>21 qualified projects</span>
          <span>12 weeks</span>
          <span>Built in public</span>
        </div>
      </section>

      <section className="yb-print-index">
        <p className="yb-eyebrow">Index</p>
        <h2>Product categories</h2>
        <ol>
          {categories.map((category) => {
            const count = projects.filter(
              (project) => project.category === category,
            ).length;
            return count > 0 ? (
              <li key={category}>
                <span>{category}</span>
                <strong>{count}</strong>
              </li>
            ) : null;
          })}
        </ol>
      </section>

      {categories.map((category) => {
        const categoryProjects = projects.filter(
          (project) => project.category === category,
        );
        if (categoryProjects.length === 0) return null;
        return (
          <section className="yb-print-category" key={category}>
            <header>
              <p className="yb-eyebrow">Product category</p>
              <h2>{category}</h2>
            </header>
            {categoryProjects.map((project) => (
              <article className="yb-print-project" key={project.slug}>
                <div className="yb-print-project-art">
                  <span>{projectInitials(project.name)}</span>
                </div>
                <div>
                  {project.builtOnCardano && <CardanoBadge />}
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <p className="yb-print-builders">
                    {project.builders.join(" · ")}
                  </p>
                  <p className="yb-print-url">{project.repoUrl}</p>
                  <p className="yb-print-url">{project.appUrl}</p>
                </div>
              </article>
            ))}
          </section>
        );
      })}
    </YearbookLayout>
  );
}
