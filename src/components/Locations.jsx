import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Reveal, Overline } from './Reveal.jsx'
import { CITIES } from '../data/properties.js'

export default function Locations() {
  return (
    <section
      data-testid="locations-section"
      className="bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>Where we work</Overline>
          <h2 className="mt-6 max-w-5xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Neighbourhoods worth knowing.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CITIES.map((c, i) => (
            <motion.a
              key={c.name}
              href="#featured"
              data-testid={`location-${c.name.toLowerCase().replace(/\s/g, '-')}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-4/5 overflow-hidden rounded-3xl"
            >
              <img
                src={c.image}
                alt={`${c.name} residences`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/70" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <div>
                  <h3 className="font-heading text-xl font-extrabold tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-xs text-white/70">{c.count} residences</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur transition-colors duration-300 group-hover:bg-[#C9A24A] group-hover:text-[#063D2E]">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}