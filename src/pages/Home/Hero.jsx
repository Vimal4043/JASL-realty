import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import homeHero1 from "../../assets/homeHero1.png";
import homeHero2 from "../../assets/homeHero2.png";
import homeHero3 from "../../assets/homeHero3.jpg";
import homeHero4 from "../../assets/homeHero4.jpg";
import homeHero5 from "../../assets/homeHero5.jpg";

const SLIDES = [
  {
    src: homeHero1,
    alt: "Modern residential apartment building in New Panvel",
  },
  {
    src: homeHero2,
    alt: "Contemporary home exterior",
  },
  {
    src: homeHero3,
    alt: "Luxury residential villa",
  },
  {
    src: homeHero4,
    alt: "Modern family home exterior",
  },
  {
    src: homeHero5,
    alt: "Premium residential exterior",
  },
];

const SLIDE_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [paused] = useState(false);

  /* =========================================================
     AUTO SLIDE + PROGRESS
     ========================================================= */
  useEffect(() => {
    if (paused) return;

    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / SLIDE_MS) * 100, 100);

      setProgress(percentage);

      if (percentage >= 100) {
        setPrev(index);

        setIndex((current) => {
          return (current + 1) % SLIDES.length;
        });

        setProgress(0);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [index, paused]);

  /* =========================================================
     MANUAL SLIDE
     ========================================================= */
  const goTo = (i) => {
    if (i === index) return;

    setPrev(index);
    setIndex(i);
    setProgress(0);
  };

  const slide = SLIDES[index];

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full overflow-hidden"
    >
      {/* =====================================================
          HERO IMAGE
          ===================================================== */}
      <div className="relative w-full bg-black/5">
        {/* Active image */}
        <motion.img
          key={`active-${index}`}
          src={slide.src}
          alt={slide.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="
            block
            h-auto
            max-h-[80vh]
            w-full
            object-contain
            object-center
          "
          loading="eager"
        />

        {/* Previous image for crossfade */}
        {prev >= 0 && prev !== index && (
          <motion.img
            key={`prev-${prev}-${index}`}
            src={SLIDES[prev].src}
            alt=""
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => {
              setPrev(-1);
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-contain
              object-center
              pointer-events-none
            "
          />
        )}

        {/* ===================================================
            CAROUSEL CONTROLS
            =================================================== */}
        <div className="absolute inset-x-0 bottom-5 z-20 flex justify-center">
          <div className="flex flex-col items-center gap-3">
            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {SLIDES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      i === index
                        ? "w-6 bg-[#C9A24A]"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }
                  `}
                />
              ))}
            </div>

            {/* Progress line */}
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/25">
              <div
                style={{
                  width: `${progress}%`,
                }}
                className="
                  h-full
                  rounded-full
                  bg-[#C9A24A]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
