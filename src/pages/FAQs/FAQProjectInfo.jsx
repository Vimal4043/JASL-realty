import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "What types of homes are available?",
    a: "Our current residential projects offer 1 RK, 1 BHK and 2 BHK homes across Panvel and New Panvel, depending on the project.",
  },
  {
    q: "Are the homes ready to move in?",
    a: "Yes. Priyansh, Shree Astavinayak and Harigram are ready-to-move residential projects.",
  },
  {
    q: "Where are your projects located?",
    a: "Our current projects are located in Usarli, Devad and Panvel, providing convenient access to railway stations, schools, shopping and other essential facilities.",
  },
  {
    q: "Are the projects approved?",
    a: "The projects have the approvals mentioned on their respective project pages. Priyansh and Shree Astavinayak are CIDCO NAINA approved, while Harigram is listed as CIDCO / NAINA / RERA approved.",
  },
];

export default function FAQProjectInfo() {
  return (
    <section
      data-testid="faq-project-info"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>About Our Homes</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Questions about our residential projects
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#66756F] md:text-lg">
            Find answers to common questions about our homes, projects and
            locations.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
