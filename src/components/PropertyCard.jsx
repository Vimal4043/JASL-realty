import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property, index = 0 }) {
  const image = (property.images && property.images[0]) || "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link
        to={`/properties/${property.id}`}
        data-testid={`property-${property.id}`}
        className="group block overflow-hidden rounded-2xl border border-[#E7DFC8] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(6,61,46,0.12)]"
      >
        {/* Image */}
        <div className="relative aspect-4/3 overflow-hidden">
          <img
            src={image}
            alt={`${property.title}, ${property.location}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#66756F]">
            {property.location}
          </p>

          <h3 className="mt-2 font-heading text-xl font-bold text-[#063D2E]">
            {property.title}
          </h3>

          <p className="mt-3 font-heading text-xl font-extrabold tracking-tight text-[#032F25]">
            {property.area}
          </p>

          {property.highlights?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {property.highlights.slice(0, 3).map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-[#E7DFC8] px-3 py-1 text-xs font-semibold text-[#063D2E]"
                >
                  {highlight}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between border-t border-[#E7DFC8] pt-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-[#66756F]">
                Starting From
              </p>

              <p className="mt-1 font-heading text-lg font-bold text-[#063D2E]">
                {property.price || "Price on request"}
              </p>
            </div>

            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#032F25] transition-colors duration-300 group-hover:text-[#C9A24A]">
              View Property
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
