import { Reveal } from "../../../components/Reveal.jsx";
import { MapPin, Home, BadgeCheck } from "lucide-react";

export default function PropertyOverview({ property }) {
  return (
    <section
      data-testid="property-overview"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                {property.availabilityNote && (
                  <span className="rounded-full bg-[#C9A24A] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#063D2E]">
                    {property.availabilityNote}
                  </span>
                )}

                {property.approvals && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#063D2E] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Approved Project
                  </span>
                )}
              </div>

              <h2 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl lg:text-6xl">
                {property.title}
              </h2>

              <p className="mt-4 flex items-center gap-2 text-base text-[#66756F] md:text-lg">
                <MapPin className="h-5 w-5 shrink-0 text-[#C9A24A]" />
                {property.location}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-7 text-[#66756F] md:text-lg">
                {property.description}
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DFC8] bg-[#F4F0E5] p-5 lg:min-w-65">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#66756F]">
                Starting From
              </p>

              <p className="mt-2 font-heading text-3xl font-extrabold text-[#063D2E]">
                {property.price || "Price on request"}
              </p>

              {property.area && (
                <div className="mt-4 flex items-center gap-2 border-t border-[#E7DFC8] pt-4 text-sm font-semibold text-[#032F25]">
                  <Home className="h-4 w-4" />
                  {property.area}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
