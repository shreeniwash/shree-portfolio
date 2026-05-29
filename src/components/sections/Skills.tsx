"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, staggerContainer, scaleIn, slideUp } from "@/lib/animations";
import { skills, skillCategories } from "@/data/portfolio";

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-xl font-medium">{name}</span>
        <span className="text-xl text-muted font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-white/15 to-white/30"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ title, skills: categorySkills }: { title: string; skills: string[] }) {
  return (
    <motion.div
      variants={scaleIn}
      className="glass rounded-2xl p-6 border border-border hover:border-border-hover transition-all duration-500 group glow-card"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
        <h3 className="text-xl md:text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {categorySkills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 text-base md:text-sm font-mono text-muted border border-border rounded-md bg-white/[0.03] group-hover:border-border-hover group-hover:text-foreground transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="section-padding relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.6 } } }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.008] to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10 container-custom">
        <SectionHeading title="Skills & Expertise" subtitle="Technologies" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight">Technical Proficiency</h3>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-10 tracking-tight">Specializations</h3>
            <div className="grid gap-4 ">
              {skillCategories.map((cat) => (
                <CategoryCard key={cat.title} {...cat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
