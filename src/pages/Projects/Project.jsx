export default function Project() {

  return (
    <section
      id="find-project"
      data-testid="find-project-section"
      className="scroll-mt-12 overflow-hidden bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight text-forest md:text-4xl">
          Find Projects
        </h2>

        {/* =====================================================
            BREADCRUMB
            ===================================================== */}
        <div className="mt-4 flex items-center gap-2 border border-fprest/5 bg-cream-dark px-4 py-3 text-sm">
          <a href="/" className="text-gold hover:text-fprest">
            Home
          </a>

          <span className="text-fprest/30">›</span>

          <a href="/projects" className="font-medium text-fprest">
            projects
          </a>
        </div>

        {/* =====================================================
            INTRODUCTION
            ===================================================== */}
        <p className="mt-4 max-w-6xl text-sm leading-7 text-[#333333] md:text-base">
          Explore residential projects available in and around Panvel and New
          Panvel. Choose the location, project type and budget that match your
          requirements, and find a project that suits your needs.
        </p>

        
      </div>
    </section>
  );
}
