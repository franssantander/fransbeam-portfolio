"use client";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight03Icon,
  Github01FreeIcons,
} from "@hugeicons/core-free-icons";
import { Project } from "@/interfaces";
import StackIcon from "tech-stack-icons";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";
import { Badge, Button } from "../ui";
import { motion } from "framer-motion";

export default function ProjectPageCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { isDark } = useResolvedTheme();
  const isLive = !!project.link;

  return (
    <motion.div
      className="group py-10 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: index < 3 ? index * 0.1 : 0, 
        ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
      }}
    >
      <Link
        href={project.link || project.github || "/"}
        target="_blank"
        className="block overflow-hidden rounded-xl"
      >
        <motion.div
          className="relative w-full aspect-video bg-muted"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Image
            src={project.img}
            alt={project.project_name}
            fill
            className="object-cover"
          />
        </motion.div>
      </Link>

      {/* Right — content */}
      <div className="flex flex-col gap-5 justify-between h-full">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground">·</span>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {project.category}
            </p>
            {isLive ? (
              <span className="flex items-center gap-1 text-xs text-emerald-500">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Live
              </span>
            ) : project.github ? (
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <HugeiconsIcon icon={Github01FreeIcons} size={12} />
                Source only
              </span>
            ) : null}
          </div>

          <h2 className="font-black text-2xl md:text-3xl leading-tight tracking-tight">
            {project.project_name}
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech stack */}
        {project.techstack && project.techstack.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Built with
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map(
                (tech: { icon: string; name: string; hasVariant: boolean }) => (
                  <Badge
                    key={tech.icon}
                    variant="secondary"
                    className="gap-1.5 px-2.5 py-1 rounded-full"
                  >
                    <StackIcon
                      name={tech.icon}
                      className="w-3.5 h-3.5"
                      variant={
                        tech.hasVariant
                          ? isDark
                            ? "dark"
                            : "light"
                          : undefined
                      }
                    />
                    <span className="text-xs">{tech.name}</span>
                  </Badge>
                ),
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3 pt-2">
          {isLive && (
            <Link href={project.link} target="_blank">
              <Button size="sm" className="gap-2 rounded-full px-5">
                <HugeiconsIcon icon={ArrowUpRight03Icon} size={15} />
                View Live
              </Button>
            </Link>
          )}
          {project.github && (
            <Link href={project.github} target="_blank">
              <Button
                size="sm"
                variant="outline"
                className="gap-2 rounded-full px-5"
              >
                <HugeiconsIcon icon={Github01FreeIcons} size={15} />
                View Source
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
