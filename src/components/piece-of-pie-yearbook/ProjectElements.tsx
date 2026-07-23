import Image from "next/image";
import Link from "next/link";
import {
  projectScreenshotUrl,
  type Project,
  YEARBOOK_BASE_PATH,
} from "~/data/piece-of-pie-yearbook";

export function CardanoBadge() {
  return <span className="yb-cardano-badge">Built on Cardano</span>;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="yb-project-card">
      <Link
        href={`${YEARBOOK_BASE_PATH}/projects/${project.slug}`}
        className="yb-project-card-link"
      >
        <div className="yb-project-card-art" aria-hidden="true">
          <Image
            src={projectScreenshotUrl(project.slug)}
            alt=""
            width={1280}
            height={720}
            sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
        </div>
        <div className="yb-project-card-body">
          <div className="yb-project-card-meta">
            <span>{project.category}</span>
            {project.builtOnCardano && <CardanoBadge />}
          </div>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
          <span className="yb-project-builder">
            {project.builders.join(" · ")}
          </span>
        </div>
      </Link>
    </article>
  );
}
