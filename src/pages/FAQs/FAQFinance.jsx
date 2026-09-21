import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "Are home loans available?",
    a: "Home loan availability depends on the project, buyer eligibility and lending institution. Our team can help you understand the available options for the property you are interested in.",
  },
  {
    q: "Are loans available from nationalized banks?",
    a: "Harigram specifically mentions availability of loans from nationalized banks. For other projects, please confirm the currently available lending options with our team.",
  },
  {
    q: "Is PMAY available?",
    a: "PMAY availability is specifically mentioned for Harigram. Eligibility depends on the applicable government scheme requirements and the buyer's circumstances.",
  },
  {
    q: "Can you help me understand the financing process?",
    a: "Yes. Contact our team after selecting a property and we can guide you on the available financing and documentation requirements.",
  },
];

export default function FAQFinance() {
  return (
    <section
      data-testid="faq-finance"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>Finance</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Questions about home loans
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
