import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "What amenities are available?",
    a: "Amenities vary by project. Current projects include facilities such as lifts, CCTV surveillance and security. Harigram additionally offers a garden and kids play area.",
  },
  {
    q: "Is parking available?",
    a: "Parking availability can vary by project and should be confirmed for the specific home you are interested in.",
  },
  {
    q: "Are the projects suitable for families?",
    a: "Yes. The residential projects offer 1 RK, 1 BHK and 2 BHK configurations and are located close to everyday facilities such as schools, hospitals, shopping and transport.",
  },
  {
    q: "Is public transport easily accessible?",
    a: "Yes. The projects are located in and around Panvel and New Panvel with access to railway stations, roads, taxis and shared auto services. Exact connectivity varies by project.",
  },
  {
    q: "Are schools and hospitals nearby?",
    a: "Yes. Nearby facilities vary by project. Harigram, for example, is around 200 metres from a hospital and approximately 4 km from D.A.V. International School, Panvel.",
  },
];

export default function FAQAmenities() {
  return (
    <section
      data-testid="faq-amenities"
      className="scroll-mt-12 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>Amenities &amp; Location</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Questions about amenities and connectivity
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
