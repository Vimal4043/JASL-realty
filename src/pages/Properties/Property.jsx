export default function Property() {

  return (
    <section
      id="find-property"
      data-testid="find-property-section"
      className="scroll-mt-12 overflow-hidden bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold leading-tight text-[#063D2E] md:text-4xl">
          Find Property
        </h2>

        {/* =====================================================
            BREADCRUMB
            ===================================================== */}
        <div className="mt-4 flex items-center gap-2 border border-[#063D2E]/5 bg-[#F4F0E5] px-4 py-3 text-sm">
          <a href="/" className="text-[#C9A24A] hover:text-[#063D2E]">
            Home
          </a>

          <span className="text-[#063D2E]/30">›</span>

          <a href="/properties" className="font-medium text-[#063D2E]">
            properties
          </a>
        </div>

        {/* =====================================================
            INTRODUCTION
            ===================================================== */}
        <p className="mt-4 max-w-6xl text-sm leading-7 text-[#333333] md:text-base">
          Explore residential properties available in and around Panvel and New
          Panvel. Choose the location, property type and budget that match your
          requirements, and find a property that suits your needs.
        </p>

        
      </div>
    </section>
  );
}
