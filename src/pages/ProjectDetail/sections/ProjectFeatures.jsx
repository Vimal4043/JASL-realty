import { Reveal } from "../../../components/Reveal.jsx";
import { Check } from "lucide-react";

export default function ProjectFeatures({ project }) {
  if (!project.features?.length) return null;

  return (
    <section
      data-testid="project-features"
      className="scroll-mt-12 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#032F25]">
            Comfort & Convenience
          </p>

          <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#063D2E] md:text-4xl">
            Amenities
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <Reveal key={feature} delay={index * 0.04}>
              <div className="flex items-center gap-4 rounded-2xl border border-[#E7DFC8] bg-white p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C9A24A] text-[#063D2E]">
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>

                <p className="text-sm font-semibold text-[#063D2E]">
                  {feature}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
