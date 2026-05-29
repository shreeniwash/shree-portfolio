"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, scaleIn, slideUp } from "@/lib/animations";
import { aboutHighlights } from "@/data/portfolio";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section-padding relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-white/[0.005] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-white/[0.015] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-white/[0.015] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 container-custom">
        <SectionHeading title="About Me" subtitle="Introduction" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.12] mb-8 tracking-tight">
              Crafting digital experiences through{" "}
              <span className="text-muted">code & creativity</span>
            </h3>
            <div className="space-y-5 text-muted text-[25px] leading-[1.5] font-light">
              <p>
                I&apos;m a frontend developer specializing in React.js and WordPress, with experience building dynamic, responsive web applications and custom themes. I focus on creating seamless user experiences with clean, performant code.
              </p>
              <p>
                I specialize in UI/UX design, API integration, and website optimization. From React.js SPAs to custom WordPress themes, I bring designs to life with attention to detail and a focus on cross-browser compatibility and responsiveness.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {["React.js", "WordPress", "TailwindCSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-xl font-mono text-muted border border-border rounded-md bg-white/[0.03]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                className="glass rounded-2xl p-6 md:p-8 text-center border border-border hover:border-border-hover transition-all duration-500 glow-card"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2">
                  {item.value}
                </div>
                <div className="text-xl text-muted uppercase tracking-wider font-mono">
                  {item.label}
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={scaleIn}
              className="col-span-2 glass rounded-2xl p-6 md:p-8 border border-border hover:border-border-hover transition-all duration-500 overflow-hidden relative group glow-card"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-lg md:text-xl font-semibold mb-1 relative z-10">Let&apos;s Work Together</h4>
              <p className="text-[22px] text-muted mb-3 relative z-10 font-light">
                Available for freelance projects and full-time opportunities.
              </p>
              <a
                href="#contact"
                className="text-xl text-foreground hover:text-muted transition-colors relative z-10 font-mono"
              >
                Get in touch &rarr;
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
