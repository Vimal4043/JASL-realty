import PropertyCard from "../../components/PropertyCard.jsx";
import { Reveal } from "../../components/Reveal.jsx";

export default function PropertiesGrid({ properties }) {
  return (
    <section
      data-testid="properties-grid"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#032F25]">
                Our Properties
              </p>

              <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
                Find your next home
              </h2>
            </div>

            <p className="text-sm text-[#66756F]">
              Showing{" "}
              <span className="font-semibold text-[#063D2E]">
                {properties.length}
              </span>{" "}
              {properties.length === 1 ? "property" : "properties"}
            </p>
          </div>
        </Reveal>

        {properties.length === 0 ? (
          <Reveal>
            <div
              data-testid="no-properties"
              className="mt-12 rounded-3xl border border-[#E7DFC8] bg-[#F4F0E5] p-10 text-center md:p-14"
            >
              <h3 className="font-heading text-xl font-bold text-[#063D2E] md:text-2xl">
                No homes match your search
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#66756F] md:text-base">
                We couldn't find a property matching all your selected filters.
                Try changing your home type, budget or location.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
