"use client";
import UiuxData from "@/data/UIUX_DATA.json";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight03Icon,
  ArrowLeft01FreeIcons,
} from "@hugeicons/core-free-icons";
import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/count-up";
import RevealLine from "@/components/animations/reveal-line";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function DesignsPage() {
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
          <RevealLine delay={0.1}>
            <h1 className="text-muted-foreground">
              <ScrambleText text="UI/UX" delay={0} />
            </h1>
          </RevealLine>
          <h1>
            <ScrambleText text="Design" delay={0.1} />
          </h1>
        </div>
        <motion.span
          className="text-muted-foreground text-sm tabular-nums mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <CountUp to={UiuxData.length} delay={0.5} /> works
        </motion.span>
      </div>

      {/* Masonry grid */}
      <motion.div
        className="columns-1 sm:columns-2 gap-5 space-y-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.3 },
          },
        }}
      >
        {UiuxData.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 24, scale: 0.98 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.55,
                  ease: [0.21, 0.47, 0.32, 0.98] as [
                    number,
                    number,
                    number,
                    number,
                  ],
                },
              },
            }}
            className="break-inside-avoid mb-5"
          >
            <Link href={`/designs/${project.slug}`}>
              <div className="group relative overflow-hidden rounded-xl bg-muted">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={project.img}
                    alt={project.project_name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="text-xs text-white/60 uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {project.project_name}
                    </h3>
                    <HugeiconsIcon
                      icon={ArrowUpRight03Icon}
                      size={20}
                      className="text-white shrink-0"
                    />
                  </div>
                  {project.description && (
                    <p className="text-white/60 text-xs mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
