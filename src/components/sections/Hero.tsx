"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { socialLinks } from "@/data/portfolio";
import { blurReveal, staggerContainer, fadeUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={containerRef}
    >
      <DottedSurface />

      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 container-custom w-full">
        <div className="grid lg:grid-cols-2 items-center min-h-screen py-28">
          <div className="lg:pr-12">
            <motion.p
              className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted mb-6 font-mono"
              variants={blurReveal}
              initial="hidden"
              animate="visible"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.92] mb-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span variants={blurReveal} className="block">
                Frontend
              </motion.span>
              <motion.span variants={blurReveal} className="block text-muted">
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-[25px] text-muted leading-relaxed mb-10 max-w-lg font-light"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Building dynamic, responsive web experiences with React.js, WordPress, and modern web technologies. Specializing in clean UI design, performance optimization, and seamless user interfaces.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp}>
                <Button variant="primary" size="lg" href="#projects">
                  View Projects
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </motion.div>
              <motion.div variants={fadeUp}>
                <Button variant="secondary" size="lg" href="#contact">
                  Contact Me
                </Button>
              </motion.div>
              <motion.div variants={fadeUp}>
                <a
                  href="/cv.pdf"
                  download
                  className="group relative inline-flex items-center gap-2 px-6 py-4 text-xl font-medium text-muted hover:text-foreground transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV
                  </span>
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 mt-12"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.2 }}
            >
              <span className="text-xs text-muted font-mono tracking-wider mr-2">SOCIAL</span>
              {socialLinks.map((link) => (
                <MagneticButton key={link.label} strength={0.15}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-border glass-sm flex items-center justify-center text-muted hover:text-foreground hover:border-border-hover transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon === "github" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )}
                    {link.icon === "linkedin" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {link.icon === "twitter" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )}
                    {link.icon === "email" && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                  </a>
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex items-center justify-center w-full"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="relative animate-float scale-125">
              <div
                className="w-80 h-80 xl:w-96 xl:h-96 rounded-full border border-border/50 bg-card backdrop-blur-2xl flex items-center justify-center overflow-hidden glow-card"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 30px rgba(255,255,255,0.02)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />
                <div className="relative z-10 text-center">
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border border-border mb-5 grayscale contrast-110 brightness-90">
                    <Image
                      src="/profile-icon.png"
                      alt="Profile"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Shreeniwash Yadav</h3>
                  <p className="text-[22px] text-muted mt-1 font-light">React.js &bull; WordPress</p>
                  <div className="flex items-center justify-center gap-1.5 mt-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse" />
                    <span className="text-xs text-muted font-mono">Available for work</span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full border border-border glass-sm flex items-center justify-center glow-card">
                <span className="text-sm font-mono text-muted">6+</span>
              </div>
              <div className="absolute -bottom-3 -left-5 w-20 h-20 rounded-full border border-border glass-sm flex items-center justify-center glow-card">
                <span className="text-sm font-mono text-muted">50+</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border border-border rounded-full flex items-start justify-center p-1.5"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-2.5 bg-muted rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
