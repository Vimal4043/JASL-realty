import { ArrowUpRight } from 'lucide-react'
import { Reveal, Overline } from './Reveal.jsx'
import PropertyCard from './PropertyCard.jsx'
import { PROPERTIES } from '../data/properties.js'

export default function FeaturedProperties() {
  const featured = PROPERTIES.filter((p) => p.featured).slice(0, 3)

  return (
    <section
      id="featured"
      data-testid="featured-section"
      className="scroll-mt-24 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>Featured residences</Overline>
          <h2 className="mt-6 max-w-5xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            A collection you won&apos;t
            <br className="hidden md:block" /> find listed anywhere else.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>
        </Reveal>

        <div className="mt-14 flex justify-center">
          <a
            href="#featured"
            data-testid="featured-view-all"
            className="group inline-flex items-center gap-2 rounded-full border border-[#063D2E]/15 px-7 py-3.5 text-sm font-semibold text-[#063D2E] transition-colors duration-300 hover:bg-[#063D2E] hover:text-white"
          >
            View all residences
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}