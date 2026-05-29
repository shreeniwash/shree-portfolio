"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16 md:mb-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-muted mb-4 block font-mono">
        {subtitle || "Portfolio"}
      </span>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
        {title}
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-white/20 to-transparent mt-8 rounded-full" />
    </motion.div>
  );
}
