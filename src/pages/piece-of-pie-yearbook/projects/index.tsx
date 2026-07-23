import Link from "next/link";
import { ProjectGridFilter } from "~/components/piece-of-pie-yearbook/ProjectGridFilter";
import {
  YearbookFooter,
  YearbookLayout,
} from "~/components/piece-of-pie-yearbook/YearbookLayout";
import { projects, YEARBOOK_BASE_PATH } from "~/data/piece-of-pie-yearbook";

export default function ProjectsPage() {
  return (
    <YearbookLayout
      title="All Projects — Piece of Pie Yearbook"
      mainClassName="yb-projects-page"
    >
      <section className="yb-page-intro">
        <p className="yb-eyebrow">Final cohort</p>
        <h1>All projects</h1>
        <p>
          Twenty-one qualified projects, presented alphabetically and without
          ranking.
        </p>
      </section>
      <section className="yb-listing-section">
        <ProjectGridFilter projects={projects} />
      </section>
      <YearbookFooter>
        <Link href={`${YEARBOOK_BASE_PATH}/#categories`}>
          ← Return to categories
        </Link>
        <Link href={`${YEARBOOK_BASE_PATH}/print`}>Printable edition →</Link>
      </YearbookFooter>
    </YearbookLayout>
  );
}
