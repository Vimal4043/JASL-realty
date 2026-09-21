import { motion } from "framer-motion";
import {
  Building2,
  Home,
  KeyRound,
  MapPin,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { Reveal, Overline } from "../../components/Reveal.jsx";

const FEATURES = [
  {
    icon: Home,
    title: "1 RK & 1 BHK Homes",
    body: "Comfortable residential options for individuals, couples and small families.",
  },
  {
    icon: Building2,
    title: "2 BHK Homes",
    body: "Spacious homes designed for families looking for additional room and comfort.",
  },
  {
    icon: MapPin,
    title: "Panvel & New Panvel",
    body: "Residential projects located in well-connected and developing areas.",
  },
  {
    icon: ShieldCheck,
    title: "Approved Projects",
    body: "Selected projects with relevant approvals and project information available.",
  },
  {
    icon: KeyRound,
    title: "Ready-to-Move Homes",
    body: "Explore homes that are ready for possession without waiting for construction.",
  },
  {
    icon: Ruler,
    title: "Different Home Sizes",
    body: "Options across different configurations and sizes to suit different requirements.",
  },
];

export default function AboutProjects() {
  return (
    <section
      data-testid="about-projects"
      className="scroll-mt-12 bg-white px-5 py-8 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Overline>What We Offer</Overline>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] md:text-5xl">
            Residential projects made for everyday living.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#66756F] md:text-lg">
            Explore thoughtfully selected homes across Panvel and New Panvel,
            with options for different family sizes, budgets and lifestyles.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-[#E7DFC8] bg-[#F4F0E5] p-7 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A24A] text-[#063D2E]">
                    <Icon className="h-5 w-5" />
                  </span>

                  <h4 className="font-heading text-xl font-bold">
                    {item.title}
                  </h4>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-[#66756F]">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
