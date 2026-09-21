import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal, Overline } from '../../components/Reveal.jsx'
import { PROJECTS } from '../../data/projects.js'

export default function TopProjects() {
  const spot = PROJECTS.find((p) => p.featured)
  const rest = PROJECTS.filter((p) => p.id !== (spot && spot.id))

  if (spot) {
    const image = (spot.images && spot.images[0]) || ''
    return (
      <section data-testid="top-projects-section" className="scroll-mt-24 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12">
        <div className="mx-auto max-w-350">
          <Reveal>
            <Overline>Featured Project</Overline>
            <h2 className="mt-6 max-w-full font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
              Find a home that fits your lifestyle and budget.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-16 grid items-stretch overflow-hidden rounded-3xl border border-black/[0.07] bg-white lg:grid-cols-2">
              <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto">
                <img
                  src={image}
                  alt={spot.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#063D2E] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    For Sale
                  </span>
                  <span className="rounded-full bg-[#032F25]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#032F25]">
                    {spot.type}
                  </span>
                </div>
                <h3 className="mt-6 font-heading text-2xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-4xl">
                  {spot.title}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#032F25]">
                  {spot.location}
                </p>
                <p className="mt-6 text-base leading-relaxed text-[#66756F]">{spot.description}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {spot.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-[#063D2E]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-black/6 pt-6">
                  <p className="font-heading text-2xl font-extrabold text-[#063D2E]">
                    {spot.price}
                  </p>
                  <Link
                    to={`/projects/${spot.id}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-[#063D2E] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#C9A24A]"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    )
  }

  // Fallback grid if the spotlight project is not available.
  return (
    <section data-testid="top-projects-section" className="scroll-mt-24 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12">
      <div className="mx-auto max-w-350">
        <Overline>Featured Projects</Overline>
        <h2 className="mt-6 max-w-5xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
          Find your next home
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="group block overflow-hidden rounded-2xl border border-black/[0.07] bg-white"
            >
              <img
                src={(p.images && p.images[0]) || ''}
                alt={p.title}
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-[#063D2E]">{p.title}</h3>
                <p className="mt-2 text-sm font-semibold text-[#C9A24A]">{p.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
