import { useEffect, useState } from "react";
import {
  filterProjects,
  type Project,
  type ProjectFilter,
} from "~/data/piece-of-pie-yearbook";
import { ProjectCard } from "./ProjectElements";

const filterOptions: Array<{ value: ProjectFilter; label: string }> = [
  { value: "all", label: "All projects" },
  { value: "cardano", label: "Built on Cardano" },
  { value: "non-cardano", label: "Non-Cardano projects" },
];

export function FilterControls({
  filter,
  onChange,
}: {
  filter: ProjectFilter;
  onChange: (filter: ProjectFilter) => void;
}) {
  return (
    <div className="yb-filter-controls" aria-label="Filter projects">
      {filterOptions.map((option) => (
        <button
          className={filter === option.value ? "is-active" : undefined}
          type="button"
          aria-pressed={filter === option.value}
          onClick={() => onChange(option.value)}
          key={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function ProjectGridFilter({
  projects,
  initialFilter = "all",
}: {
  projects: Project[];
  initialFilter?: ProjectFilter;
}) {
  const [filter, setFilter] = useState<ProjectFilter>(initialFilter);

  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const visible = filterProjects(projects, filter);

  return (
    <>
      <div className="yb-filter-row yb-compact-filter">
        <FilterControls filter={filter} onChange={setFilter} />
        <span aria-live="polite">
          Showing {visible.length}{" "}
          {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>
      <div className="yb-project-grid">
        {visible.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </>
  );
}
