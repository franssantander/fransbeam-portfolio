import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { Project } from "@/interfaces";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Link href={project.link || "/"} target="_blank">
      <div className="group flex flex-col sm:flex-row items-start gap-6 py-8 transition-all duration-200">
        {/* Index number */}
        <span className="hidden sm:block text-xs text-muted-foreground tabular-nums pt-1 w-6 shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Thumbnail */}
        <div className="relative w-full sm:w-44 md:w-52 aspect-video overflow-hidden rounded-lg shrink-0 bg-muted">
          <Image
            src={project.img}
            alt={project.project_name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between gap-3 min-w-0">
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {project.category}
            </p>
            <h2 className="font-bold text-xl md:text-2xl leading-tight group-hover:text-muted-foreground transition-colors duration-200 truncate">
              {project.project_name}
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 max-w-lg">
              {project.description}
            </p>
          </div>

          {/* Tags if available */}
          {/* {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )} */}
        </div>

        {/* Arrow */}
        <div className="shrink-0 self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
          <HugeiconsIcon
            icon={ArrowUpRight03Icon}
            size={20}
            className="text-muted-foreground"
          />
        </div>
      </div>
    </Link>
  );
}
