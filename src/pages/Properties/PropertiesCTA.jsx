import { Reveal } from '../../components/Reveal.jsx'
import { Link } from 'react-router-dom'

export default function PropertiesCTA() {
  return (
    <section data-testid="properties-cta" className="scroll-mt-12 bg-[#063D2E] px-5 py-8 text-white md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Need a space that fits your business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Tell us your requirement â€” area, type, power and location â€” and our advisors will
            shortlist the right properties and arrange site visits.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-7 py-3.5 text-sm font-semibold text-[#063D2E] transition-colors duration-300 hover:bg-[#A8823D]"
            >
              Enquire about a property
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-[#063D2E]"
            >
              Read our FAQs
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}