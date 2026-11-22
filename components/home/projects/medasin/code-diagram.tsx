"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useLeaderLines } from "@/hooks/useLeaderLines";
import { CaseStudy } from "@/interfaces";
import { leaderPath } from "@/lib/medasin/leader-lines";
import { cn } from "@/lib/utils";
import BrainCanvas from "./brain-canvas";
import CodeStepLabel, { MARKERS } from "./code-step";
import DotGridCanvas from "./dot-grid-canvas";

// Where each step sits round the brain, in reading order: clockwise from the top left
const CELLS = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-1 lg:row-start-2",
];

const LEGEND = [
  { group: "collect", label: "Collect" },
  { group: "create", label: "Create" },
];

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
const LINE_DELAY = 0.7;
const LINE_STAGGER = 0.12;

// Medasin's landing hero: the brain with the four CODE steps round it, joined by
// lines from `lg`, and stacked beneath it on smaller screens
export default function CodeDiagram({
  eyebrow,
  headline,
  steps,
  places,
}: {
  eyebrow?: string;
  headline?: string;
  steps: CaseStudy["code"]["steps"];
  places: CaseStudy["para"];
}) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const brainRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lines = useLeaderLines(diagramRef, brainRef, anchorRefs, steps);
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <DotGridCanvas clearAround='[data-slot="medasin-brain"]' />
      <div className="relative flex flex-col items-center px-4 py-10 sm:px-6 sm:py-12">
        {eyebrow && (
          <p className="text-center text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        )}
        {headline && (
          <p className="mt-3 max-w-lg text-center font-spectral text-[1.8rem] leading-[1.02] font-bold tracking-[-0.025em] text-balance sm:text-4xl xl:text-5xl">
            {headline}
          </p>
        )}

        <div
          ref={diagramRef}
          data-slot="code-diagram"
          className="relative mt-8 flex w-full flex-col items-center lg:mt-20 lg:grid lg:max-w-[64rem] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:grid-rows-[1fr_auto] lg:items-start lg:gap-x-8 lg:gap-y-5"
        >
          <div
            ref={brainRef}
            className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center"
          >
            <BrainCanvas className="w-56 sm:w-72 lg:w-[280px] xl:w-[360px]" />
          </div>

          <div className="mt-5 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-full lg:mt-0 lg:mb-5">
            <div className="flex items-center gap-3 rounded-md border border-dashed border-foreground/35 bg-muted/70 px-2.5 py-1.5 text-xs">
              {LEGEND.map(({ group, label }) => (
                <span key={group} className="flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "size-3 rounded-[3px] border border-foreground/25",
                      MARKERS[group],
                    )}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <ol
            aria-label="The CODE method"
            className="mt-7 grid w-full max-w-xl gap-x-8 gap-y-7 sm:grid-cols-2 lg:contents"
          >
            {steps.map((step, index) => (
              <CodeStepLabel
                key={step.name}
                step={step}
                number={index + 1}
                places={places}
                className={CELLS[index]}
                titleRef={(element) => {
                  anchorRefs.current[index] = element;
                }}
              />
            ))}
          </ol>

          {lines && (
            <svg
              aria-hidden="true"
              data-slot="code-lines"
              className="pointer-events-none absolute inset-0 hidden size-full overflow-visible lg:block"
            >
              {lines.map(({ from, to }, index) => {
                const delay = LINE_DELAY + index * LINE_STAGGER;
                const path = leaderPath(from, to);
                const draw = {
                  initial: reduce ? (false as const) : { pathLength: 0 },
                  animate: { pathLength: 1 },
                  transition: { duration: 0.8, ease: EASE, delay: delay + 0.2 },
                };
                const land = {
                  initial: reduce
                    ? (false as const)
                    : { opacity: 0, scale: 0.4 },
                  animate: { opacity: 1, scale: 1 },
                  transition: {
                    duration: 0.3,
                    ease: EASE,
                    delay: delay + 0.85,
                  },
                };
                return (
                  <g key={steps[index].name}>
                    {/* A halo in the card's colour keeps the line readable over the brain */}
                    <motion.path
                      d={path}
                      fill="none"
                      stroke="var(--muted)"
                      strokeWidth={6}
                      strokeLinecap="round"
                      {...draw}
                    />
                    <motion.circle
                      cx={to.x}
                      cy={to.y}
                      r={7}
                      fill="var(--muted)"
                      {...land}
                    />
                    <motion.path
                      d={path}
                      fill="none"
                      stroke="var(--foreground)"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      {...draw}
                    />
                    <motion.circle
                      data-slot="code-dot"
                      cx={to.x}
                      cy={to.y}
                      r={5}
                      fill="var(--foreground)"
                      {...land}
                    />
                    <motion.circle
                      cx={from.x}
                      cy={from.y}
                      r={4.5}
                      fill="var(--muted)"
                      stroke="var(--foreground)"
                      strokeWidth={2.5}
                      {...land}
                      transition={{ duration: 0.3, ease: EASE, delay }}
                    />
                  </g>
                );
              })}
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
