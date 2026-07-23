import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import Link from "next/link";
import { CardanoBadge } from "~/components/piece-of-pie-yearbook/ProjectElements";
import {
  YearbookFooter,
  YearbookLayout,
} from "~/components/piece-of-pie-yearbook/YearbookLayout";
import {
  categorySlug,
  projectScreenshotUrl,
  projects,
  type Project,
  YEARBOOK_BASE_PATH,
} from "~/data/piece-of-pie-yearbook";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: projects.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{ project: Project }> = ({
  params,
}) => {
  const project = projects.find((item) => item.slug === params?.slug);
  return project ? { props: { project } } : { notFound: true };
};

export default function ProjectPage({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <YearbookLayout
      title={`${project.name} — Piece of Pie Yearbook`}
      description={project.summary}
    >
      <article className="yb-project-profile">
        <div className="yb-profile-art" aria-hidden="true">
          <Image
            src={projectScreenshotUrl(project.slug)}
            alt=""
            width={1280}
            height={720}
            priority
          />
        </div>

        <div className="yb-profile-heading">
          <Link
            href={`${YEARBOOK_BASE_PATH}/categories/${categorySlug(
              project.category,
            )}`}
          >
            {project.category}
          </Link>
          {project.builtOnCardano && <CardanoBadge />}
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
        </div>

        <div className="yb-profile-grid">
          <section>
            <p className="yb-eyebrow">The builders</p>
            <h2>{project.builders.join(" · ")}</h2>
            <p>
              Built during the 2026 Piece of Pie Hackathon and documented
              through public progress updates and a final submission.
            </p>
          </section>
          <aside>
            <p className="yb-eyebrow">Project tags</p>
            <ul className="yb-tag-list">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </aside>
        </div>

        <section className="yb-project-links" aria-label="Project links">
          <a
            className="yb-primary-link"
            href={project.appUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit the product ↗
          </a>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            Repository ↗
          </a>
          <a
            href={project.submissionUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Final submission ↗
          </a>
          <a
            href={project.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact the builder on X ↗
          </a>
        </section>

      </article>
      <YearbookFooter>
        <Link href={`${YEARBOOK_BASE_PATH}/projects`}>← All projects</Link>
        <Link href={`${YEARBOOK_BASE_PATH}/print`}>Printable edition →</Link>
      </YearbookFooter>
    </YearbookLayout>
  );
}
