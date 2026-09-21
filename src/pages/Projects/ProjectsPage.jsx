import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Project from "./Project.jsx";
import ProjectsFilters from "./ProjectsFilters.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";
import { PROJECTS } from "../../data/projects.js";

export default function ProjectsPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    type: searchParams.get("type") || "all",
    budget: searchParams.get("budget") || "all",
    location: searchParams.get("location") || "all",
    query: searchParams.get("query") || "",
  });

  const filteredProjects = PROJECTS.filter((project) => {
    if (filters.type !== "all") {
      const projectType = (project.type || "").toLowerCase();
      if (!projectType.includes(filters.type.toLowerCase())) return false;
    }

    if (filters.budget !== "all") {
      const minPrice = Number(project.minPrice || 0);
      const budgetMatches = {
        "Under ₹30 Lakhs": minPrice < 3000000,
        "₹30 - ₹40 Lakhs": minPrice >= 3000000 && minPrice <= 4000000,
        "₹40 - ₹50 Lakhs": minPrice >= 4000000 && minPrice <= 5000000,
        "₹50 - ₹70 Lakhs": minPrice >= 5000000 && minPrice <= 7000000,
        "Above ₹70 Lakhs": minPrice > 7000000,
      };
      if (!budgetMatches[filters.budget]) return false;
    }

    if (filters.location !== "all") {
      const locationText = [project.location, project.city, project.state]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (!locationText.includes(filters.location.toLowerCase())) return false;
    }

    if (filters.query.trim()) {
      const query = filters.query.trim().toLowerCase();
      const searchableText = [
        project.title,
        project.location,
        project.city,
        project.state,
        project.type,
        project.area,
        project.price,
        project.description,
        ...(project.highlights || []),
        ...(project.features || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (!searchableText.includes(query)) return false;
    }

    return true;
  });

  return (
    <main className="pt-19 md:pt-28">
      <Project />
      <ProjectsFilters filters={filters} onChange={setFilters} />
      <ProjectsGrid projects={filteredProjects} />
    </main>
  );
}
