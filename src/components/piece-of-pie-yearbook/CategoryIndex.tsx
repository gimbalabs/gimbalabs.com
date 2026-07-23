import Link from "next/link";
import { useState } from "react";
import {
  categoryDescriptions,
  categorySlug,
  filterProjects,
  type Project,
  type ProjectFilter,
  YEARBOOK_BASE_PATH,
} from "~/data/piece-of-pie-yearbook";
import { FilterControls } from "./ProjectGridFilter";

export function CategoryIndex({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const visibleProjects = filterProjects(projects, filter);
  const categories = Object.keys(categoryDescriptions)
    .map((category) => ({
      category,
      count: visibleProjects.filter((project) => project.category === category)
        .length,
    }))
    .filter(({ count }) => count > 0)
    .sort((a, b) => a.category.localeCompare(b.category));

  return (
    <>
      <div className="yb-filter-row">
        <FilterControls filter={filter} onChange={setFilter} />
        <span aria-live="polite">
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="yb-category-grid">
        {categories.map(({ category, count }, index) => (
          <Link
            className={`yb-category-card yb-category-tone-${(index % 3) + 1}`}
            href={`${YEARBOOK_BASE_PATH}/categories/${categorySlug(category)}${
              filter === "all" ? "" : `?track=${filter}`
            }`}
            key={category}
          >
            <span className="yb-category-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2>{category}</h2>
            <p>{categoryDescriptions[category]}</p>
            <span className="yb-category-count">
              {count} {count === 1 ? "project" : "projects"} →
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
