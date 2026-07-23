import Link from "next/link";
import { CategoryIndex } from "~/components/piece-of-pie-yearbook/CategoryIndex";
import {
  YearbookFooter,
  YearbookLayout,
} from "~/components/piece-of-pie-yearbook/YearbookLayout";
import { projects, YEARBOOK_BASE_PATH } from "~/data/piece-of-pie-yearbook";

export default function YearbookHome() {
  return (
    <YearbookLayout title="Piece of Pie — 2026 Yearbook">
      <section className="yb-hero">
        <p className="yb-eyebrow">Gimbalabs · Builder Season · 2026</p>
        <h1>
          Piece of Pie
          <br />
          <em>Yearbook</em>
        </h1>
        <div className="yb-hero-footer">
          <p>
            Twenty-one projects that qualified through public progress and
            verifiable final work across twelve weeks.
          </p>
          <span>April — July 2026</span>
        </div>
      </section>

      <section
        className="yb-index-section"
        id="categories"
        aria-labelledby="category-heading"
      >
        <div className="yb-section-heading">
          <div>
            <p className="yb-eyebrow">The index</p>
            <h2 id="category-heading">Browse by category</h2>
          </div>
          <p>
            Categories describe what each product does. Filter the full yearbook
            by Cardano and non-Cardano projects.
          </p>
        </div>
        <CategoryIndex projects={projects} />
      </section>

      <YearbookFooter>
        <p>Public progress. Clear rules. Real output.</p>
        <Link href={`${YEARBOOK_BASE_PATH}/print`}>
          Open the printable edition →
        </Link>
      </YearbookFooter>
    </YearbookLayout>
  );
}
