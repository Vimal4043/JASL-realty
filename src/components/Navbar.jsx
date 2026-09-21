import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { BRAND } from "../data/projects.js";
import logo from "../assets/jasl-realty-logowithname.png";

const PANEL_EASE = [0.22, 1, 0.36, 1];

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

function Brand({ onClick, compact = false }) {
  return (
    <Link
      to="/"
      data-testid="nav-home"
      onClick={onClick}
      className="flex shrink-0 items-center"
      aria-label="JASL Realty - Home"
    >
      <img
        src={logo}
        alt="JASL Realty"
        className={`w-auto object-contain ${
          compact
            ? "h-11 sm:h-12"
            : "h-16 sm:h-[4.5rem] md:h-20"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleRef = useRef(null);
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  const skipFocusRestore = useRef(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /* ============================================================
     CLOSE MENU WHEN ROUTE CHANGES
     ============================================================ */

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /* ============================================================
     LOCK PAGE SCROLL WHEN MENU IS OPEN
     ============================================================ */

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    return () => {
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
    };
  }, [isMenuOpen]);

  /* ============================================================
     CLOSE MENU WHEN SCREEN BECOMES DESKTOP
     ============================================================ */

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleBreakpointChange = (event) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleBreakpointChange
      );
    };
  }, []);

  /* ============================================================
     KEYBOARD ACCESSIBILITY
     ============================================================ */

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      /* Escape */
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      /* Focus trap */
      if (event.key !== "Tab" || !panelRef.current) {
        return;
      }

      const focusableElements =
        panelRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );

      if (!focusableElements.length) return;

      const first = focusableElements[0];
      const last =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    requestAnimationFrame(() => {
      closeRef.current?.focus();
    });

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      if (!skipFocusRestore.current) {
        toggleRef.current?.focus();
      }

      skipFocusRestore.current = false;
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    skipFocusRestore.current = true;
    closeMenu();
  };

  return (
    <>
      {/* =========================================================
          NAVBAR
          ========================================================= */}

      <header
        data-testid="navbar"
        className="fixed inset-x-0 top-0 z-50 bg-[#FAF8F1]/95 text-[#063D2E] backdrop-blur"
      >
        {/* =======================================================
            TOP UTILITY BAR
            ======================================================= */}

        <div className="hidden bg-[#063D2E] text-[#FAF8F1] md:flex">
          <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <a
              href={`mailto:${BRAND.email}`}
              data-testid="nav-email"
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-[#E3C875]"
            >
              <Mail
                className="h-3.5 w-3.5 text-[#C9A24A]"
                strokeWidth={2}
              />

              {BRAND.email}
            </a>

            <span className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E3C875] sm:inline-flex">
              JASL Realty • Panvel &amp; New Panvel
            </span>
          </div>
        </div>

        {/* =======================================================
            MAIN NAVBAR
            ======================================================= */}

        <div className="border-b border-[#C9A24A]/25 bg-[#FAF8F1]">
          <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-6 lg:px-8">
            {/* BRAND */}

            <Brand />

            {/* ===================================================
                DESKTOP NAVIGATION
                =================================================== */}

            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  data-testid={`nav-${link.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-[#C9A24A]"
                        : "text-[#063D2E] hover:text-[#C9A24A]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* ===================================================
                DESKTOP CTA
                =================================================== */}

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gold/70 px-6 py-2.5 text-sm font-semibold text-pine shadow-[0_8px_24px_rgba(201,162,74,0.30)] transition-all duration-300 hover:bg-gold hover:text-white"
              >
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />

                Enquire
              </a>
            </div>

            {/* ===================================================
                MOBILE MENU BUTTON
                =================================================== */}

            <button
              ref={toggleRef}
              type="button"
              data-testid="nav-mobile-toggle"
              onClick={openMenu}
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#063D2E]/15 bg-white/70 text-[#063D2E] transition-all duration-300 hover:border-[#C9A24A] hover:bg-[#F4F0E5] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A24A] lg:hidden"
            >
              <Menu
                className="h-6 w-6"
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY

          IMPORTANT:
          This is OUTSIDE the header so fixed positioning is
          relative to the viewport.
          ========================================================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* ===================================================
                BLURRED BACKDROP
                =================================================== */}

            <motion.button
              key="mobile-backdrop"
              type="button"
              tabIndex={-1}
              aria-label="Close menu"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0.1 : 0.3,
                ease: "easeOut",
              }}
              className="fixed inset-0 z-55 cursor-default bg-pine/35 backdrop-blur-md"
            />

            {/* ===================================================
                GOLD RIGHT-SIDE DRAWER
                =================================================== */}

            <motion.aside
              key="mobile-panel"
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={
                reduceMotion
                  ? { opacity: 0 }
                  : { x: "100%" }
              }
              animate={
                reduceMotion
                  ? { opacity: 1 }
                  : { x: 0 }
              }
              exit={
                reduceMotion
                  ? { opacity: 0 }
                  : { x: "100%" }
              }
              transition={
                reduceMotion
                  ? { duration: 0.15 }
                  : {
                      type: "tween",
                      duration: 0.42,
                      ease: PANEL_EASE,
                    }
              }
              className="fixed inset-y-0 right-0 z-60 flex h-dvh w-[86%] max-w-97.5 flex-col overflow-hidden bg-gold text-pine shadow-[-20px_0_60px_rgba(0,0,0,0.28)] lg:hidden"
            >
              {/* =================================================
                  DRAWER HEADER
                  ================================================= */}

              <div className="flex h-20 shrink-0 items-center justify-between border-b border-pine/15 px-5">
                <Brand
                  compact
                  onClick={handleNavClick}
                />

                <button
                  ref={closeRef}
                  type="button"
                  data-testid="nav-mobile-close"
                  onClick={closeMenu}
                  aria-label="Close menu"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-pine/20 bg-[#FAF8F1]/20 text-pine transition-all duration-300 hover:bg-[#FAF8F1]/40 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF8F1]"
                >
                  <X
                    className="h-6 w-6"
                    strokeWidth={2.2}
                  />
                </button>
              </div>

              {/* =================================================
                  MENU CONTENT
                  ================================================= */}

              <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-7">
                {/* <p className="mb-4 px-1 text-[10px] font-bold uppercase tracking-[0.3em] text-pine/55">
                  Navigation
                </p> */}

                <nav aria-label="Mobile navigation">
                  <ul className="flex flex-col">
                    {LINKS.map((link, index) => (
                      <motion.li
                        key={link.label}
                        initial={
                          reduceMotion
                            ? false
                            : {
                                opacity: 0,
                                x: 20,
                              }
                        }
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: reduceMotion
                            ? 0
                            : 0.08 + index * 0.055,
                          duration: 0.32,
                          ease: PANEL_EASE,
                        }}
                      >
                        <NavLink
                          to={link.to}
                          end={link.to === "/"}
                          data-testid={`nav-mobile-${link.label.toLowerCase()}`}
                          onClick={handleNavClick}
                          className={({ isActive }) =>
                            `group flex min-h-[4.2rem] items-center justify-between border-b border-pine/15 px-1 transition-colors duration-200 ${
                              isActive
                                ? "text-[#FAF8F1]"
                                : "text-pine hover:text-[#FAF8F1]"
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span className="flex items-center gap-3">
                                <span
                                  className={`h-2 w-2 rounded-full transition-transform duration-300 ${
                                    isActive
                                      ? "scale-100 bg-[#FAF8F1]"
                                      : "scale-0"
                                  }`}
                                />

                                <span className="font-heading text-[1.55rem] font-semibold tracking-tight">
                                  {link.label}
                                </span>
                              </span>

                              <ArrowUpRight
                                className={`h-5 w-5 transition-all duration-300 ${
                                  isActive
                                    ? "translate-x-0 text-[#FAF8F1]"
                                    : "text-pine/50 group-hover:translate-x-1 group-hover:-translate-y-1"
                                }`}
                              />
                            </>
                          )}
                        </NavLink>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* =================================================
                    CONTACT CARD
                    ================================================= */}

                <div className="mt-8 rounded-3xl bg-[#FAF8F1]/20 p-5 ring-1 ring-pine/10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-pine/55">
                    Get in touch
                  </p>

                  <div className="mt-4 flex flex-col gap-3">
                    <a
                      href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                      data-testid="nav-mobile-phone"
                      onClick={handleNavClick}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pine px-5 text-sm font-semibold text-[#FAF8F1] transition-all duration-200 hover:bg-[#063D2E] active:scale-[0.98]"
                    >
                      <Phone className="h-4 w-4" />

                      Call {BRAND.phone}
                    </a>

                    <a
                      href={`mailto:${BRAND.email}`}
                      data-testid="nav-mobile-email"
                      onClick={handleNavClick}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FAF8F1] px-5 text-sm font-semibold text-pine transition-all duration-200 hover:bg-white active:scale-[0.98]"
                    >
                      <Mail className="h-4 w-4" />

                      <span className="truncate">
                        {BRAND.email}
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DRAWER FOOTER
                  ================================================= */}

              {/* <div className="shrink-0 border-t border-pine/15 px-5 py-4">
                <p className="text-center text-[9px] font-bold uppercase tracking-[0.3em] text-pine/50">
                  JASL Realty • Panvel &amp; New Panvel
                </p>
              </div> */}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}