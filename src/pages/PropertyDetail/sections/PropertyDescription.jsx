import { Reveal } from "../../../components/Reveal.jsx";

export default function PropertyDescription({ property }) {
  if (!property.description) return null;

  return (
    <section
      data-testid="property-description"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#032F25]">
              About the Project
            </p>

            <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#063D2E] md:text-4xl">
              About {property.title}
            </h3>

            <p className="mt-6 text-base leading-8 text-[#66756F] md:text-lg">
              {property.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
