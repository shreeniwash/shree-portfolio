"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));

      for (const section of sections.reverse()) {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);

    const el = document.querySelector(href);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? "bg-background/70 backdrop-blur-2xl border-b border-border shadow-[0_1px_0_0_rgba(255,255,255,0.02)]"
        : "bg-transparent"
        }`}
    >
      <nav className="container-custom h-16 md:h-20 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="text-[30px] md:text-xl font-semibold tracking-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          SY<span className="text-muted">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className={`relative px-4 py-2 text-[23px] cursor-pointer font-bold transition-colors duration-300 rounded-lg ${activeSection === link.href.slice(1)
                ? "text-foreground"
                : "text-muted hover:text-foreground"
                }`}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1 + i * 0.05,
              }}
            >
              {activeSection === link.href.slice(1) && (
                <motion.span
                  layoutId="navActive"
                  className="absolute inset-0 bg-white/5 rounded-lg border border-border"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">
                {link.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            className="w-5 h-px bg-foreground block"
            animate={
              isOpen
                ? { rotate: 45, y: 3.5 }
                : { rotate: 0, y: 0 }
            }
          />

          <motion.span
            className="w-5 h-px bg-foreground block"
            animate={
              isOpen
                ? { opacity: 0, x: -10 }
                : { opacity: 1, x: 0 }
            }
          />

          <motion.span
            className="w-5 h-px bg-foreground block"
            animate={
              isOpen
                ? { rotate: -45, y: -3.5 }
                : { rotate: 0, y: 0 }
            }
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-40 flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-3xl font-medium text-foreground hover:text-muted transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}