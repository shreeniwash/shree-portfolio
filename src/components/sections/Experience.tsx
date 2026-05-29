"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { slideUp, fadeIn } from "@/lib/animations";
import { experience } from "@/data/portfolio";

function TimelineItem({
  item,
  index,
}: {
  item: typeof experience[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={slideUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex md:items-center w-full mb-10 md:mb-16 last:mb-0"
    >
      <div className="hidden md:flex items-center w-full">
        <div
          className={`flex items-center w-[calc(50%-20px)] ${
            isLeft
              ? "order-1 justify-end"
              : "order-3 justify-start"
          }`}
        >
          {isLeft && (
            <>
              <div className="glass rounded-2xl p-6 md:p-7 border border-border hover:border-border-hover transition-all duration-500 max-w-lg glow-card">
                <span className="text-xl font-mono text-muted tracking-wider uppercase block mb-1">
                  {item.period}
                </span>

                <span className="text-2xl text-muted/70 block mb-3">
                  {item.company}
                </span>

                <h3 className="text-4xl md:text-4xl font-semibold mb-3 tracking-tight">
                  {item.role}
                </h3>

                <p className="text-[25px] text-muted leading-relaxed mb-5 font-light">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xl text-muted/80 flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <motion.div
                className="w-10 h-px bg-gradient-to-r from-white/10 to-white/20"
                initial={{ scaleX: 0 }}
                animate={
                  isInView
                    ? { scaleX: 1 }
                    : { scaleX: 0 }
                }
                style={{ originX: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />
            </>
          )}

          {!isLeft && (
            <>
              <motion.div
                className="w-10 h-px bg-gradient-to-l from-white/10 to-white/20"
                initial={{ scaleX: 0 }}
                animate={
                  isInView
                    ? { scaleX: 1 }
                    : { scaleX: 0 }
                }
                style={{ originX: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              />

              <div className="glass rounded-2xl p-6 md:p-7 border border-border hover:border-border-hover transition-all duration-500 max-w-lg glow-card">
                <span className="text-xl font-mono text-muted tracking-wider uppercase block mb-1">
                  {item.period}
                </span>

                <span className="text-2xl text-muted/70 block mb-3">
                  {item.company}
                </span>

                <h3 className="text-4xl md:text-4xl font-semibold mb-3 tracking-tight">
                  {item.role}
                </h3>

                <p className="text-[25px] text-muted leading-relaxed mb-5 font-light">
                  {item.description}
                </p>

                {item.highlights && (
                  <ul className="space-y-2.5">
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xl text-muted/80 flex items-start gap-2"
                      >
                        <span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </>
          )}
        </div>

        <div className="order-2 flex-shrink-0 w-10 flex items-center justify-center">
          <motion.div
            className="w-[11px] h-[11px] rounded-full border-2 border-white/30 bg-background z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    scale: 1,
                    opacity: 1,
                    backgroundColor:
                      "rgba(255,255,255,0.5)",
                  }
                : {
                    scale: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
          />
        </div>

        <div
          className={`w-[calc(50%-20px)] ${
            isLeft ? "order-3" : "order-1"
          }`}
        />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden w-full">
        <div className="relative pl-8">
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/15 to-transparent"
            style={{ originY: 0 }}
            initial={{ scaleY: 0 }}
            animate={
              isInView
                ? { scaleY: 1 }
                : { scaleY: 0 }
            }
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-white/30 bg-background z-10"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isInView
                ? {
                    scale: 1,
                    opacity: 1,
                    backgroundColor:
                      "rgba(255,255,255,0.4)",
                  }
                : {
                    scale: 0,
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
          />

          <div className="glass rounded-2xl p-6 border border-border hover:border-border-hover transition-all duration-500 glow-card">
            <span className="text-xl font-mono text-muted tracking-wider uppercase block mb-1">
              {item.period}
            </span>

            <span className="text-2xl text-muted/70 block mb-3">
              {item.company}
            </span>

            <h3 className="text-4xl md:text-4xl font-semibold mb-3 tracking-tight">
              {item.role}
            </h3>

            <p className="text-[25px] text-muted leading-relaxed mb-5 font-light">
              {item.description}
            </p>

            {item.highlights && (
              <ul className="space-y-2.5">
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="text-xl text-muted/80 flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  const lineOpacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="section-padding relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.6 },
        },
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.008] to-transparent pointer-events-none" />

      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 container-custom max-w-5xl mx-auto">
        <SectionHeading
          title="Work Experience"
          subtitle="Career"
        />

        <div className="relative">
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 rounded-full"
            style={{
              scaleY: lineScale,
              originY: 0,
              opacity: lineOpacity,
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(255,255,255,0.15), rgba(255,255,255,0.06))",
            }}
          />

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((item, i) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}