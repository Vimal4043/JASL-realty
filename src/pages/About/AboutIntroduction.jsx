import { BRAND } from "../../data/projects.js";
import { Reveal } from "../../components/Reveal.jsx";
import hero from "../../assets/hero.jpeg";

export default function AboutIntroduction() {
  return (
    <section
      data-testid="about-intro"
      className="scroll-mt-24 overflow-hidden bg-white py-8 md:py-10"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            PAGE TITLE
            ===================================================== */}
        <Reveal>
          <h2 className="font-heading text-3xl font-bold leading-tight text-[#063D2E] md:text-4xl">
            About Us
          </h2>
        </Reveal>

        {/* =====================================================
            BREADCRUMB
            ===================================================== */}
        <Reveal delay={0.05}>
          <div className="mt-4 flex items-center gap-2 border border-[#063D2E]/5 bg-[#F4F0E5] px-4 py-3 text-sm">
            <a href="/" className="text-[#C9A24A] hover:text-[#063D2E]">
              Home
            </a>

            <span className="text-[#063D2E]/30">›</span>

            <a href="/about" className="font-medium text-[#063D2E]">
              About Us
            </a>
          </div>
        </Reveal>

        {/* =====================================================
            ABOUT CONTENT
            ===================================================== */}
        <Reveal delay={0.1}>
          <div className="mt-5">
            {/* =================================================
                FIRST CONTENT ROW
                ================================================= */}
            <div className="text-[15px] leading-7 text-[#333333] md:text-base md:leading-7">
              {/* Image floated to the right on desktop */}
              <div className="ml-0 w-full md:float-right md:ml-7 md:w-[48%] lg:w-[49%]">
                <div className="overflow-hidden rounded-xl border-2 border-[#C9A24A]">
                  <img
                    src={hero}
                    alt="JASL Realty"
                    className="block h-60 w-full object-cover sm:h-75 md:h-80 lg:h-82"
                  />
                </div>
              </div>

              {/* Main introduction */}
              <p>
                {BRAND.name} is focused on helping people find residential
                projects that match their needs, lifestyle and budget. We
                bring together selected homes in growing locations such as
                Panvel and New Panvel.
              </p>

              <p className="mt-5">
                We understand that buying a home is an important decision.
                That's why we focus on understanding each customer's
                requirements and helping them explore suitable projects
                based on their preferences and budget.
              </p>

              <p className="mt-5">
                From understanding your requirement to sharing project
                details and arranging a site visit, we aim to keep the
                home-buying journey simple, clear and comfortable.
              </p>

              <p className="mt-5">
                Our goal is to make the project search process easier by
                providing clear information and practical assistance at every
                stage. Whether you are looking for a compact home or a
                comfortable family residence, we help you explore options that
                suit your needs.
              </p>

              {/* Clear the float */}
              <div className="clear-both" />
            </div>

            {/* =================================================
                ADDITIONAL CONTENT BELOW IMAGE
                ================================================= */}
            <div className="mt-7 text-[15px] leading-7 text-[#333333] md:text-base md:leading-7">
              <p>
                We bring together projects in locations that offer
                convenience, connectivity and opportunities for future growth.
                Our approach is centred around making project information
                easier to understand so that customers can make informed
                decisions.
              </p>

              <p className="mt-5">
                We believe that every home search is different. Our team takes
                the time to understand your preferred location, configuration
                and budget before helping you explore the available
                possibilities.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}