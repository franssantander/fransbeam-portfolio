"use client";
import SkillsData from "@/data/SKILLS_DATA.json";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import SkillsCard from "@/components/home/skills/skills-card";
import { groupByCategory } from "@/utils/groupByCategory";
import { motion, Variants } from "framer-motion";
import { ScrambleText } from "@/components/animations/scramble-text";
import { CountUp } from "@/components/animations/count-up";

const rowVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function SkillsPage() {
  const grouped = groupByCategory(SkillsData);

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

      <div className="flex items-end justify-between mb-12">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">
            <ScrambleText text="Tech Stack" delay={0} />
          </h1>

          <h1>
            <ScrambleText text="& Tools" delay={0.1} />
          </h1>
        </div>
        <motion.span
          className="text-muted-foreground text-sm tabular-nums mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <CountUp to={SkillsData.length} delay={0.5} /> tools
        </motion.span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {Object.entries(grouped).map(([category, skills], rowIndex) => (
          <motion.div
            key={category}
            className="py-10 flex flex-col sm:flex-row gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: rowIndex * 0.05 }}
          >
            <motion.div
              className="sm:w-64 shrink-0 space-y-1"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.21, 0.47, 0.32, 0.98] as [
                      number,
                      number,
                      number,
                      number,
                    ],
                  },
                },
              }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {category}
              </p>
              <p className="text-sm text-muted-foreground tabular-nums">
                {skills.length} {skills.length === 1 ? "tool" : "tools"}
              </p>
            </motion.div>

            <div className="hidden sm:block w-px bg-border shrink-0" />
            <motion.div
              className="flex-1 flex flex-wrap gap-6"
              variants={rowVariants}
            >
              {skills.map((skill) => (
                <motion.div key={skill.icon} variants={iconVariants}>
                  <SkillsCard {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
