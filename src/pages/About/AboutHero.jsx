import { motion } from "framer-motion";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85&auto=format&fit=crop";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.25,
    },
  },
};

const lineVar = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function AboutHero() {
  return (
    <section
      data-testid="about-hero"
      className="mt-15 relative flex min-h-[55vh] items-center justify-center overflow-hidden md:min-h-[62vh]"
    >
      <motion.img
        src={HERO_IMG}
        alt="Modern residential home"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/35 to-black/15" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={lineVar}
            className="text-xs font-bold uppercase tracking-[0.28em] text-[#C9A24A]"
          >
            About JASL Realty
          </motion.p>

          <motion.h1
            variants={lineVar}
            className="mx-auto mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Helping you find a place
            <span className="block text-[#C9A24A]">to call home.</span>
          </motion.h1>

          <motion.p
            variants={lineVar}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/90 md:text-lg"
          >
            We help homebuyers discover thoughtfully selected residential
            properties in Panvel and New Panvel, with clear guidance from
            enquiry to possession.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}