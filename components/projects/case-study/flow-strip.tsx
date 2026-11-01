"use client";
import { ArrowDownIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { CaseStudy } from "@/interfaces";

const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

// A linked workflow, step by step: each step and its arrow appear in turn, so the chain reads left to right
export default function FlowStrip({ flow }: { flow: CaseStudy["flow"] }) {
  return (
    <motion.ol
      className="grid gap-2 md:grid-cols-4 md:gap-0"
      aria-label="From task to journal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {flow.map((step, index) => (
        <motion.li
          key={step.label}
          className="flex flex-col items-start gap-2 md:flex-row md:items-stretch"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
          }}
        >
          <div className="w-full flex-1 rounded-lg border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground">{step.label}</p>
            <p className="mt-1 text-sm font-medium">{step.value}</p>
          </div>
          {index < flow.length - 1 && (
            <span className="ml-4 shrink-0 self-start text-muted-foreground md:mx-1.5 md:self-center">
              <ArrowDownIcon size={16} className="md:hidden" />
              <ArrowRightIcon size={16} className="hidden md:block" />
            </span>
          )}
        </motion.li>
      ))}
    </motion.ol>
  );
}
