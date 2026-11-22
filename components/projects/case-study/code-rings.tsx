"use client";
import { motion, useReducedMotion } from "framer-motion";
import { CaseStudy } from "@/interfaces";

// Four rings a radius of 100 apart on each side, so their centre lines touch and one path can run through all four
const CENTERS = [100, 300, 500, 700];
const Y = 116;

// Forward through C, O, D and E (under, over, under, over), then back the other way round to the start
const FORWARD = `M 0 ${Y} A 100 100 0 0 0 200 ${Y} A 100 100 0 0 1 400 ${Y} A 100 100 0 0 0 600 ${Y} A 100 100 0 0 1 800 ${Y}`;
const BACK = `M 800 ${Y} A 100 100 0 0 1 600 ${Y} A 100 100 0 0 0 400 ${Y} A 100 100 0 0 1 200 ${Y} A 100 100 0 0 0 0 ${Y}`;

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

const arrowAt = (x: number) =>
  `M ${x - 9} ${Y - 11} L ${x} ${Y} L ${x + 9} ${Y - 11}`;

// The CODE method as linked rings: a path out from collecting to creating, and back round
export default function CodeRings({
  steps,
}: {
  steps: CaseStudy["code"]["steps"];
}) {
  const reduce = useReducedMotion();
  const draw = (delay: number) => ({
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : { duration: 1.4, ease: EASE, delay },
    },
  });
  const land = (delay: number) => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { duration: 0.3, delay },
    },
  });

  return (
    <motion.figure
      data-slot="code-rings"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <svg
        viewBox="-14 0 828 232"
        aria-hidden="true"
        className="block w-full"
        fill="none"
      >
        {CENTERS.map((x, index) => {
          const forwardIsBelow = index % 2 === 0;
          return (
            <g key={x} strokeWidth={28}>
              <path
                d={`M ${x - 100} ${Y} A 100 100 0 0 1 ${x + 100} ${Y}`}
                className={
                  forwardIsBelow
                    ? "stroke-foreground/10"
                    : "stroke-foreground/20"
                }
              />
              <path
                d={`M ${x - 100} ${Y} A 100 100 0 0 0 ${x + 100} ${Y}`}
                className={
                  forwardIsBelow
                    ? "stroke-foreground/20"
                    : "stroke-foreground/10"
                }
              />
            </g>
          );
        })}

        <g strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round">
          <motion.path
            d={FORWARD}
            className="stroke-foreground"
            variants={draw(0.1)}
          />
          <motion.path
            d={arrowAt(800)}
            className="stroke-foreground"
            variants={land(1.4)}
          />
          <motion.path
            d={BACK}
            className="stroke-muted-foreground"
            variants={draw(1.4)}
          />
          <motion.path
            d={arrowAt(0)}
            className="stroke-muted-foreground"
            variants={land(2.7)}
          />
        </g>

        {steps.map(({ name }, index) => (
          <text
            key={name}
            x={CENTERS[index]}
            y={Y}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground font-geist text-[104px] font-black"
          >
            {name[0]}
          </text>
        ))}
      </svg>

      {/* Inset by the drawing's margin, so each label is centred under its ring */}
      <figcaption className="mt-3 grid grid-cols-4 px-[1.69%] text-center">
        {steps.map(({ name, tagline }) => (
          <div key={name} className="min-w-0">
            <p className="font-geist text-xs font-semibold sm:text-base">
              {name}
            </p>
            <p className="mx-auto mt-1 hidden max-w-[8rem] text-sm leading-snug text-balance text-muted-foreground sm:block">
              {tagline}
            </p>
          </div>
        ))}
      </figcaption>
    </motion.figure>
  );
}
