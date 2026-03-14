"use client";
import ProjectData from "@/data/PROJECT_DATA.json";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import ProjectPageCard from "@/components/projects/project-page-card";
import { motion } from "framer-motion";
import { ScrambleText } from "@/components/animations/scramble-text";
import { CountUp } from "@/components/animations/count-up";

export default function ProjectsPage() {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
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
          <h1 className="text-muted-foreground">
            <ScrambleText text="All" delay={0} />
          </h1>
          <h1>
            <ScrambleText text="Projects" delay={0.1} />
          </h1>
        </div>
        <motion.span
          className="text-muted-foreground text-sm tabular-nums mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <CountUp to={ProjectData.length} delay={0.5} /> works
        </motion.span>
      </div>

      {/* Project list */}
      <div className="flex flex-col divide-y divide-border">
        {ProjectData.map((project, index) => (
          <ProjectPageCard project={project} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
