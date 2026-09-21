import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/ProjectCard.jsx";
import { PROJECTS } from "../../data/projects.js";

export default function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="featured"
      data-testid="featured-section"
      className="scroll-mt-12 bg-white py-10 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
            ===================================================== */}
        <div className="text-center">
          {/* <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A24A]">
            Featured Projects
          </p> */}

          <h2 className="mx-auto mt-3 max-w-4xl font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#063D2E]/65 md:text-base">
            Explore our latest featured projects and find the right space for
            you.
          </p>
        </div>

        {/* =====================================================
            FEATURED PROJECT CARDS
            ===================================================== */}
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* =====================================================
            VIEW ALL
            ===================================================== */}
        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            to="/projects"
            data-testid="featured-view-all"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#063D2E]/15 bg-[#063D2E] px-7 py-3.5 text-sm font-semibold text-white"
          >
            {/* Yellow hover sweep */}
            <span className="absolute inset-y-0 left-0 w-[115%] translate-x-[-105%] -skew-x-12 rounded-full bg-[#C9A24A] transition-transform duration-500 ease-out group-hover:translate-x-[-5%]" />

            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-[#063D2E]">
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
