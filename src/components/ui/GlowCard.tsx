"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl border border-border bg-card backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-border-hover glow-card ${className}`}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-white/[0.02] to-transparent" />
      {children}
    </motion.div>
  );
}
