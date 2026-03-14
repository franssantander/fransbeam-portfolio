import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight03Icon,
  Github01FreeIcons,
} from "@hugeicons/core-free-icons";
import { Project } from "@/interfaces";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isLive = !!project.link;

  return (
    <Link href={project.link || project.github || "/"} target="_blank">
      <div className="group flex flex-col sm:flex-row items-start gap-6 py-8 transition-all duration-200">
        <span className="hidden sm:block text-xs text-muted-foreground tabular-nums pt-1 w-6 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative w-full sm:w-44 md:w-52 lg:w-60 aspect-video overflow-hidden rounded-lg shrink-0 bg-muted">
          <Image
            src={project.img}
            alt={project.project_name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between gap-3 min-w-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {project.category}
              </p>
              {isLive ? (
                <span className="flex items-center gap-1 text-xs text-emerald-500 font-semibold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  Live
                </span>
              ) : project.github ? (
                <span className="text-xs text-muted-foreground flex items-center gap-1 font-semibold">
                  <HugeiconsIcon icon={Github01FreeIcons} size={12} />
                  Source only
                </span>
              ) : null}
            </div>

            <h2 className="font-bold text-xl md:text-2xl leading-tight group-hover:text-muted-foreground transition-colors duration-200 truncate">
              {project.project_name}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-lg">
              {project.description}
            </p>
          </div>
        </div>

        <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          {isLive ? (
            <HugeiconsIcon
              icon={ArrowUpRight03Icon}
              size={20}
              className="text-muted-foreground"
            />
          ) : (
            <HugeiconsIcon
              icon={Github01FreeIcons}
              size={20}
              className="text-muted-foreground"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
