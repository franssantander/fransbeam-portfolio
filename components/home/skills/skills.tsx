"use client";
import SkillsData from "@/data/SKILLS_DATA.json";
import SkillsCard from "./skills-card";
import { ScrambleText } from "@/components/animations/scramble-text";
import { CountUp } from "@/components/animations/count-up";
import { motion, Variants } from "framer-motion";

function groupByCategory(data: typeof SkillsData) {
  return data.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SkillsData>,
  );
}

const rowVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
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

export default function Skills() {
  const grouped = groupByCategory(SkillsData);

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">
            <ScrambleText text="Tech Stack" delay={0} />
          </h1>
          <h1>
            <ScrambleText text="& Tools" delay={0.1} />
          </h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          <CountUp to={SkillsData.length} delay={0.2} /> tools
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {Object.entries(grouped).map(([category, skills], rowIndex) => (
          <motion.div
            key={category}
            className="flex flex-col sm:flex-row gap-6 py-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: rowIndex * 0.05 }}
          >
            {/* Category label — fades in with row */}
            <motion.div
              className="sm:w-48 shrink-0"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
                },
              }}
            >
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {category}
              </p>
              <p className="text-sm text-muted-foreground tabular-nums mt-0.5">
                {skills.length} {skills.length === 1 ? "tool" : "tools"}
              </p>
            </motion.div>

            {/* Icons — stagger pop in */}
            <motion.div className="flex flex-wrap gap-5" variants={rowVariants}>
              {skills.map((skill) => (
                <motion.div key={skill.icon} variants={iconVariants}>
                  <SkillsCard {...skill} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
