import { Reveal } from "../../../components/Reveal.jsx";
import PropertyCard from "../../../components/PropertyCard.jsx";
import { PROPERTIES } from "../../../data/properties.js";

export default function SimilarProperties({ currentId }) {
  const current = PROPERTIES.find((p) => p.id === currentId);

  const others = PROPERTIES.filter((p) => p.id !== currentId);

  const sameLocation = others.filter((p) => current && p.city === current.city);

  const sameType = others.filter(
    (p) =>
      current &&
      p.type === current.type &&
      !sameLocation.some((item) => item.id === p.id),
  );

  const remaining = others.filter(
    (p) =>
      !sameLocation.some((item) => item.id === p.id) &&
      !sameType.some((item) => item.id === p.id),
  );

  const similar = [...sameLocation, ...sameType, ...remaining].slice(0, 3);

  if (!similar.length) return null;

  return (
    <section
      data-testid="similar-properties"
      className="scroll-mt-12 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#032F25]">
            Explore More
          </p>

          <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#063D2E] md:text-4xl">
            You May Also Like
          </h3>

          <p className="mt-3 max-w-2xl text-base leading-7 text-[#66756F]">
            Explore more ready-to-move homes available in Panvel and New Panvel.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {similar.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
