"use client";
import { visibleProjects } from "@/lib/projects";
import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";
import VentureCard from "@/components/home/projects/venture-card";
import CaseStudy from "@/components/projects/case-study/case-study";
import { motion } from "framer-motion";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function ProjectsPage() {
  return (
    <section className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ChevronLeftIcon size={16} />
          Back to home
        </Link>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
        <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="Featured" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="Projects" delay={0.1} />
          </span>
        </h1>
        <motion.span
          className="text-muted-foreground text-sm tabular-nums mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </motion.span>
      </div>

      {/* Projects */}
      <div className="flex flex-col gap-24">
        {visibleProjects.map((project) =>
          project.case_study ? (
            <CaseStudy project={project} key={project.project_name} />
          ) : (
            <VentureCard project={project} key={project.project_name} />
          ),
        )}
      </div>
    </section>
  );
}
