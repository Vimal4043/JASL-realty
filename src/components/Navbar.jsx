import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { BRAND } from "../data/properties.js";
import logo from "../assets/jasl-realty-logowithname.png";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

function Brand({ onClick, compact = false }) {
  return (
    <Link
      to="/"
      data-testid="nav-home"
      onClick={onClick}
      className="flex items-center"
      aria-label="JASL Realty - Home"
    >
      <img
        src={logo}
        alt="JASL Realty"
        className={`w-auto object-contain ${
          compact ? "h-12 sm:h-14" : "h-16 sm:h-18 md:h-20"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      data-testid="navbar"
      className="fixed inset-x-0 top-0 z-50 bg-[#FAF8F1]/95 text-[#063D2E] backdrop-blur"
    >
      {/* =========================================================
          TOP UTILITY BAR (email only)
          ========================================================= */}
      <div className="bg-[#063D2E] text-[#FAF8F1] md:flex">
        <div className="mx-auto flex h-9 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <a
            href={`mailto:${BRAND.email}`}
            data-testid="nav-email"
            className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide transition-colors duration-300 hover:text-[#E3C875]"
          >
            <Mail className="h-3.5 w-3.5 text-[#C9A24A]" strokeWidth={2} />
            {BRAND.email}
          </a>
          <span className="hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#E3C875] sm:inline-flex">
            JASL Realty • Panvel & New Panvel
          </span>
        </div>
      </div>

      {/* =========================================================
          MAIN NAVBAR
          ========================================================= */}
      <div className="border-b border-[#C9A24A]/25 bg-[#FAF8F1]">
        <div className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 py-2 sm:px-6 lg:px-8">
        {/* Brand */}
        <Brand />

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}
        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 hover:text-[#C9A24A] ${
                  isActive ? "text-[#C9A24A]" : "text-[#063D2E]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* =====================================================
            DESKTOP PHONE BUTTON
            ===================================================== */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
            className="group inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-6 py-2.5 text-sm font-semibold text-[#032F25] shadow-[0_8px_24px_rgba(201,162,74,0.30)] transition-all duration-300 hover:bg-[#A8823D] hover:text-white"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            Enquire
          </a>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}
        <button
          type="button"
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#063D2E] transition-colors hover:bg-[#F4F0E5] lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
        </div>
      </div>

      {/* =======================================================
          MOBILE MENU
          ======================================================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 flex flex-col bg-[#FAF8F1] text-[#063D2E] lg:hidden"
          >
            {/* Mobile menu header */}
            <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between px-5 py-2 sm:px-6">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="flex items-center"
                aria-label="JASL Realty - Home"
              >
                <img
                  src={logo}
                  alt="JASL Realty"
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#063D2E] transition-colors hover:bg-[#F4F0E5]"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile navigation */}
            <nav className="mx-auto flex w-full max-w-7xl flex-col px-5 pt-6 sm:px-6">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.07,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    to={l.to}
                    data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-[#063D2E]/10 py-5 font-heading text-2xl font-extrabold tracking-tight text-[#063D2E] transition-colors hover:text-[#032F25]"
                  >
                    {l.label}

                    <ArrowUpRight className="h-6 w-6 text-[#C9A24A]" />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile actions */}
            <div className="mx-auto mt-auto w-full max-w-7xl p-5 sm:p-6">
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${BRAND.email}`}
                  data-testid="nav-mobile-email"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#063D2E]/15 px-6 py-3 text-sm font-semibold text-[#063D2E] transition-colors duration-300 hover:bg-[#F4F0E5]"
                >
                  <Mail className="h-4 w-4" />
                  {BRAND.email}
                </a>

                <a
                  href={`tel:${BRAND.phone.replace(/\s+/g, "")}`}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#C9A24A] px-7 py-3.5 text-sm font-semibold text-[#032F25] transition-all duration-300 hover:bg-[#A8823D] hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  Enquire
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}