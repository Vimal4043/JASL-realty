import { Reveal, Overline } from "../../components/Reveal.jsx";
import FAQAccordion from "../../components/FAQAccordion.jsx";

const QUESTIONS = [
  {
    q: "What is the starting price of the homes?",
    a: "Priyansh offers 1 RK homes starting at ₹28 Lakhs all inclusive and 1 BHK homes starting at ₹37 Lakhs all inclusive. Shree Astavinayak offers 1 BHK homes starting at ₹48 Lakhs plus government taxes and 2 BHK homes starting at ₹70 Lakhs plus government taxes. Harigram offers 1 RK homes from ₹21,39,792 and 1 BHK homes from ₹30,67,940, all inclusive.",
  },
  {
    q: "Are the quoted prices all inclusive?",
    a: "The pricing differs by project. Priyansh and Harigram have specified all-inclusive pricing, while Shree Astavinayak pricing is mentioned separately from government taxes. Please confirm the final payable amount with our team before booking.",
  },
  {
    q: "Do the prices vary based on configuration?",
    a: "Yes. Pricing depends on the configuration and size of the home. For example, 1 RK, 1 BHK and 2 BHK homes have different price ranges depending on the project.",
  },
  {
    q: "Can I enquire about a specific budget?",
    a: "Yes. You can use the budget filter on our Properties page to explore homes according to your preferred price range, or contact our team directly for current availability.",
  },
];

export default function FAQPricing() {
  return (
    <section
      data-testid="faq-pricing"
      className="scroll-mt-12 bg-[#F4F0E5] px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <Overline>Pricing</Overline>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Questions about prices and budgets
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <FAQAccordion questions={QUESTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
