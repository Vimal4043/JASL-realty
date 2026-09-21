import { Reveal, Overline } from "../../../components/Reveal.jsx";
import { MapPin, ArrowUpRight, Navigation } from "lucide-react";

export default function PropertyLocation({ property }) {
  const hasConnectivity = property.connectivity?.length > 0;

  const locationText = [property.location, property.city, property.state]
    .filter(Boolean)
    .join(", ");

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    locationText,
  )}`;

  return (
    <section
      data-testid="property-location"
      className="scroll-mt-12 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline>Location</Overline>

          <h3 className="mt-4 flex items-center gap-2 font-heading text-3xl font-extrabold tracking-tight text-[#063D2E] md:text-4xl">
            <MapPin className="h-7 w-7 shrink-0 text-[#C9A24A]" />
            {property.location}
          </h3>

          <p className="mt-3 text-base text-[#66756F] md:text-lg">
            {property.city}
            {property.state ? `, ${property.state}` : ""}
          </p>
        </Reveal>

        {hasConnectivity && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {property.connectivity.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-[#E7DFC8] bg-white p-5">
                  <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24A]" />

                  <p className="text-sm font-semibold leading-6 text-[#063D2E]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-3xl border border-[#E7DFC8] bg-white">
            <div className="flex min-h-70 items-center justify-center bg-[#F4F0E5] p-8 text-center md:min-h-88">
              <div className="max-w-md">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A24A] text-[#063D2E]">
                  <MapPin className="h-7 w-7" />
                </div>

                <h3 className="mt-5 font-heading text-2xl font-bold text-[#063D2E]">
                  {property.location}
                </h3>

                <p className="mt-2 text-sm text-[#66756F]">
                  {property.city}
                  {property.state ? `, ${property.state}` : ""}
                </p>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-3 text-sm font-bold text-[#063D2E] transition hover:bg-[#A8823D]"
                >
                  Open in Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
