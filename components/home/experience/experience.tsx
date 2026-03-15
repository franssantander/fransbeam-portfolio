"use client";
import ExperienceData from "@/data/EXPERIENCE_DATA.json";
import ExperienceCard from "./experience-card";
import { getYearsOfExperience } from "@/utils/getYearsOfExperience";
import { ScrambleText } from "@/components/animations/scramble-text";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Experience() {
  const experience = getYearsOfExperience();
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">{experience} of</h1>
          <h1>
            <ScrambleText text="Experience" delay={0} />
          </h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {ExperienceData.length} companies
        </span>
      </div>

      {/* Timeline container */}
      <div className="relative" ref={lineRef}>
        {/* Animated vertical line */}
        <div className="absolute left-0 sm:left-[11.5rem] top-0 bottom-0 w-px bg-border overflow-hidden">
          <motion.div
            className="w-full bg-foreground origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 1.8,
              delay: 0.2,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ height: "100%" }}
          />
        </div>

        {/* Cards */}
        <div className="flex flex-col">
          {ExperienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
