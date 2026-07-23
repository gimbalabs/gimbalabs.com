import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProjectGridFilter } from "~/components/piece-of-pie-yearbook/ProjectGridFilter";
import { YearbookLayout } from "~/components/piece-of-pie-yearbook/YearbookLayout";
import {
  categories,
  categoryDescriptions,
  categoryFromSlug,
  categorySlug,
  projectFilterFromQuery,
  projects,
  YEARBOOK_BASE_PATH,
} from "~/data/piece-of-pie-yearbook";

export const getStaticPaths: GetStaticPaths = () => ({
  paths: categories.map((category) => ({
    params: { slug: categorySlug(category) },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<{
  category: string;
}> = ({ params }) => {
  const slug = String(params?.slug ?? "");
  const category = categoryFromSlug(slug);
  return category ? { props: { category } } : { notFound: true };
};

export default function CategoryPage({
  category,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const initialFilter = projectFilterFromQuery(router.query.track);
  const categoryProjects = projects.filter(
    (project) => project.category === category,
  );

  return (
    <YearbookLayout title={`${category} — Piece of Pie Yearbook`}>
      <section className="yb-page-intro yb-category-intro">
        <Link href={`${YEARBOOK_BASE_PATH}/#categories`}>← Category index</Link>
        <p className="yb-eyebrow">Product category</p>
        <h1>{category}</h1>
        <p>{categoryDescriptions[category]}</p>
      </section>
      <section className="yb-listing-section">
        <ProjectGridFilter
          projects={categoryProjects}
          initialFilter={initialFilter}
        />
      </section>
    </YearbookLayout>
  );
}
