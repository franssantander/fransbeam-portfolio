"use client";
import ExperienceData from "@/data/EXPERIENCE_DATA.json";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import { getYearsOfExperience } from "@/utils/getYearsOfExperience";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "@/components/animations/count-up";
import RevealLine from "@/components/animations/reveal-line";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function ExperiencePage() {
  const experience = getYearsOfExperience();
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
          Back to home
        </Link>
      </div>

      {/* Header */}
      <div className="flex items-end justify-between mb-12">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">{experience} of</h1>
          <h1>
            <ScrambleText text="Experience" delay={0} />
          </h1>
        </div>
        <motion.span
          className="text-muted-foreground text-sm tabular-nums mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <CountUp to={ExperienceData.length} delay={0.5} /> companies
        </motion.span>
      </div>

      {/* Timeline container */}
      <div className="relative" ref={lineRef}>
        {/* Animated vertical line */}
        <div className="absolute left-0 lg:left-[16rem] top-0 bottom-0 w-px bg-border overflow-hidden">
          <motion.div
            className="w-full bg-foreground origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98] as [
                number,
                number,
                number,
                number,
              ],
            }}
            style={{ height: "100%" }}
          />
        </div>

        {/* Experience list */}
        <div className="flex flex-col divide-y divide-border">
          {ExperienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="py-10 flex flex-col lg:flex-row gap-8"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98] as [
                  number,
                  number,
                  number,
                  number,
                ],
              }}
            >
              {/* Left — company */}
              <div className="flex flex-col gap-4 lg:w-64 shrink-0">
                <div className="flex items-center gap-3 relative">
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute -left-[4.35rem] w-[7px] h-[7px] rounded-full bg-foreground ring-2 ring-background shrink-0" />

                  <Image
                    className="rounded-lg ring-1 ring-border"
                    src={exp.img}
                    alt={exp.company_name}
                    width={44}
                    height={44}
                  />
                  <div>
                    <h2 className="font-bold text-base leading-tight">
                      {exp.company_name}
                    </h2>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {exp.years_active}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Role
                  </p>
                  <p className="text-sm font-medium">{exp.position}</p>
                </div>

                {exp.employment_type && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">
                      Type
                    </p>
                    <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                      {exp.employment_type}
                    </span>
                  </div>
                )}
              </div>

              {/* Vertical divider */}
              <div className="hidden lg:block w-px bg-border shrink-0" />

              {/* Right — responsibilities */}
              <div className="flex-1 space-y-4">
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
                  Responsibilities
                </p>
                <ul className="space-y-4">
                  {exp.experiences.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0, x: -8 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: 0.5 + index * 0.15 + i * 0.06,
                        ease: "easeOut",
                      }}
                    >
                      <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
