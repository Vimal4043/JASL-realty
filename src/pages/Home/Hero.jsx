import { useCallback, useEffect, useRef, useState } from "react";
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
const FADE_MS = 900;

/* Preload a single image; resolves true on load, false on error. */
function preload(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused] = useState(false);
  // Slide 0 renders immediately so it counts as visible; the rest flip to
  // true once preloaded (or via onLoad). Failed slides stay false.
  const [loaded, setLoaded] = useState(() => [
    true,
    ...SLIDES.slice(1).map(() => false),
  ]);

  const indexRef = useRef(0);
  const loadedRef = useRef(loaded);
  const transitioningRef = useRef(false);
  const cancelledRef = useRef(false);

  indexRef.current = index;
  loadedRef.current = loaded;

  const markLoaded = useCallback((i) => {
    setLoaded((prev) => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });
  }, []);

  /* Preload every slide once on mount so transitions never wait on network.
     Failures are safe: that slide is simply skipped during rotation. */
  useEffect(() => {
    cancelledRef.current = false;

    SLIDES.forEach((s, i) => {
      if (i === 0) return;
      preload(s.src).then((ok) => {
        if (!cancelledRef.current && ok) markLoaded(i);
      });
    });

    return () => {
      cancelledRef.current = true;
    };
  }, [markLoaded]);

  /* Advance to the next *loaded* slide. The current image stays mounted
     until the next one is confirmed ready, so the hero never blanks. */
  const advance = useCallback(() => {
    if (transitioningRef.current || cancelledRef.current) return;

    const current = indexRef.current;
    let next = (current + 1) % SLIDES.length;
    for (let n = 0; n < SLIDES.length; n++) {
      if (loadedRef.current[next]) break;
      preload(SLIDES[next].src).then((ok) => {
        if (!cancelledRef.current && ok) markLoaded(next);
      });
      next = (next + 1) % SLIDES.length;
      if (next === current) return; // nothing else ready: hold current image
    }
    if (next === current) return;

    transitioningRef.current = true;
    setIndex(next);
    setProgress(0);
    window.setTimeout(() => {
      transitioningRef.current = false;
    }, FADE_MS);
  }, [markLoaded]);

  /* =========================================================
     AUTO SLIDE + PROGRESS — never swaps in an unloaded image.
     If the next image isn't ready, progress holds at 100%.
     ========================================================= */
  useEffect(() => {
    if (paused) return;

    const startTime = Date.now();

    const timer = setInterval(() => {
      if (transitioningRef.current) return;
      const elapsed = Date.now() - startTime;
      const percentage = Math.min((elapsed / SLIDE_MS) * 100, 100);

      setProgress(percentage);

      if (percentage >= 100) {
        advance();
      }
    }, 50);

    return () => clearInterval(timer);
  }, [index, paused, advance]);

  /* =========================================================
     MANUAL SLIDE — instant if loaded, else preload first while
     keeping the current image visible.
     ========================================================= */
  const goTo = (i) => {
    if (i === indexRef.current || transitioningRef.current) return;

    if (loadedRef.current[i]) {
      transitioningRef.current = true;
      setIndex(i);
      setProgress(0);
      window.setTimeout(() => {
        transitioningRef.current = false;
      }, FADE_MS);
    } else {
      transitioningRef.current = true;
      preload(SLIDES[i].src).then((ok) => {
        if (cancelledRef.current) {
          transitioningRef.current = false;
          return;
        }
        if (ok) {
          markLoaded(i);
          setIndex(i);
          setProgress(0);
        }
        window.setTimeout(() => {
          transitioningRef.current = false;
        }, FADE_MS);
      });
    }
  };

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative w-full overflow-hidden"
    >
      {/* =====================================================
          HERO IMAGE — stable container, layered crossfade.
          Every slide stays mounted; only opacity toggles, so the
          hero can never go blank mid-transition.
          ===================================================== */}
      <div className="relative w-full bg-[#F4F0E5]">
        <div className="relative mx-auto aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9] lg:max-h-[80vh]">
          {SLIDES.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={i === index ? s.alt : ""}
              aria-hidden={i === index ? undefined : true}
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              onLoad={() => markLoaded(i)}
              onError={() => {
                // Keep the currently displayed image; `advance` skips
                // slides that never mark as loaded.
              }}
              className="absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === index ? 1 : 0 }}
            />
          ))}
        </div>

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
