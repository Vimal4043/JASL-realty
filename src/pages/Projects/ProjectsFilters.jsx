import { Search, X } from "lucide-react";
import { PROJECT_TYPES, BUDGETS, LOCATIONS } from "../../data/projects.js";

const inputCls =
  "w-full rounded-xl border border-[#E7DFC8] bg-[#F4F0E5] px-4 py-3 text-sm text-[#17352D] outline-none transition-colors duration-300 focus:border-[#032F25] focus:ring-2 focus:ring-[#032F25]/20";

const DEFAULT_FILTERS = {
  type: "all",
  budget: "all",
  location: "all",
  query: "",
};

export default function ProjectsFilters({ filters, onChange }) {
  const set = (key) => (event) => {
    onChange({
      ...filters,
      [key]: event.target.value,
    });
  };

  const reset = () => {
    onChange({ ...DEFAULT_FILTERS });
  };

  return (
    <section
      data-testid="projects-filters"
      className="scroll-mt-12 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[#E7DFC8] bg-white p-6 md:p-8">
          {/* <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#032F25]">
              Find Your Home
            </p>

            <h2 className="mt-2 font-heading text-2xl font-bold text-[#063D2E]">
              Search residential projects
            </h2>
          </div> */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {/* HOME TYPE */}
            <div>
              <label
                htmlFor="filter-type"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#032F25]"
              >
                Home Type
              </label>

              <select
                id="filter-type"
                value={filters.type}
                onChange={set("type")}
                data-testid="filter-type"
                className={inputCls}
              >
                <option value="all">All home types</option>

                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* BUDGET */}
            <div>
              <label
                htmlFor="filter-budget"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#032F25]"
              >
                Budget
              </label>

              <select
                id="filter-budget"
                value={filters.budget}
                onChange={set("budget")}
                data-testid="filter-budget"
                className={inputCls}
              >
                <option value="all">All budgets</option>

                {BUDGETS.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </div>

            {/* LOCATION */}
            <div>
              <label
                htmlFor="filter-location"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#032F25]"
              >
                Location
              </label>

              <select
                id="filter-location"
                value={filters.location}
                onChange={set("location")}
                data-testid="filter-location"
                className={inputCls}
              >
                <option value="all">All locations</option>

                {LOCATIONS.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* SEARCH */}
            <div>
              <label
                htmlFor="filter-keyword"
                className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#032F25]"
              >
                Search
              </label>

              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#66756F]" />

                <input
                  id="filter-keyword"
                  type="text"
                  value={filters.query}
                  onChange={set("query")}
                  placeholder="Search homes or location"
                  data-testid="filter-keyword"
                  className={`${inputCls} pl-10`}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={reset}
              data-testid="filter-reset"
              className="inline-flex items-center gap-2 rounded-full border border-[#063D2E]/15 px-5 py-2.5 text-sm font-semibold text-[#063D2E] transition-colors duration-300 hover:bg-[#063D2E] hover:text-white"
            >
              <X className="h-4 w-4" />
              Reset filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
