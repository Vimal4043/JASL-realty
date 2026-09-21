import { motion } from 'framer-motion'
import { House, KeyRound, Building2 } from 'lucide-react'
import { Reveal, Overline } from './Reveal.jsx'

const SERVICES = [
  {
    icon: House,
    title: 'Buy a residence',
    body: 'Discover architect-led homes matched to how you actually live, with an advisor beside you from first viewing to keys.',
  },
  {
    icon: KeyRound,
    title: 'Sell with intent',
    body: 'Considered staging, editorial photography and a private buyer network that positions your home for its true worth.',
  },
  {
    icon: Building2,
    title: 'Invest & advise',
    body: 'Data-led guidance on emerging neighbourhoods and yields, so every acquisition strengthens your portfolio.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="scroll-mt-24 bg-[#FAF8F1] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-350">
        <Reveal>
          <Overline>What we do</Overline>
          <h2 className="mt-6 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Full-service, start to signature.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                data-testid={`service-card-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#C9A24A]/25 bg-white p-8 shadow-[0_2px_10px_rgba(6,61,46,0.06)] transition-all duration-500 hover:-translate-y-1 hover:bg-[#063D2E] hover:shadow-[0_24px_60px_rgba(6,61,46,0.25)]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#063D2E] text-[#E3C875] transition-colors duration-500 group-hover:bg-[#C9A24A] group-hover:text-[#032F25]">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-heading text-xl font-bold text-[#063D2E] transition-colors duration-500 group-hover:text-[#FAF8F1]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#66756F] transition-colors duration-500 group-hover:text-[#FAF8F1]/70">
                  {s.body}
                </p>
                <div className="mt-6 h-px w-12 bg-gradient-to-r from-[#C9A24A] to-transparent" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}