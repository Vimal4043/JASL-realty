import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ABOUT_IMG from "../../assets/HomeAbousUs.jpg";

export default function AboutUs() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-[#F4F0E5] py-8 md:py-12"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={ABOUT_IMG}
              alt="Modern residential apartment building"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </motion.div> */}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9A24A]">
              About Us
            </p> */}

            <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#063D2E] sm:text-4xl md:text-5xl">
              About JASL Realty
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-7 text-[#66756F] md:text-base">
              <p>
                JASL Realty is a real estate platform focused on helping
                people find suitable residential properties for their needs. We
                bring together available homes in and around New Panvel and
                other growing locations, making it easier for buyers to explore
                properties and connect with the right opportunities.
              </p>

              <p>
                We offer a
                range of residential options, including 1 RK, 1 BHK and 2 BHK
                homes, with properties available for different budgets and
                requirements. Our goal is to make the property search process
                simple, transparent, and convenient for homebuyers.
              </p>

              <p>
                We also
                help property owners and sellers list their available
                residences, giving them a platform to showcase their properties
                to potential buyers. From property listings to enquiries and
                site visits, we aim to make the process of buying and selling
                residential property straightforward.
              </p>
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#A8823D]"
            >
              Know More About Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={ABOUT_IMG}
              alt="Modern residential apartment building"
              className="aspect-4/3 w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
