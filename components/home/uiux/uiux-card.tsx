import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import { UiuxProject } from "@/interfaces";

export default function UiuxCard({
  link,
  img,
  project_name,
  category,
}: UiuxProject) {
  return (
    <Link href={link || "/"}>
      <div className="group relative overflow-hidden rounded-xl bg-muted">
        <div className="relative w-full aspect-video">
          <Image
            src={img}
            alt={project_name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Bottom info bar — always visible */}
        <div className="p-4 flex items-start justify-between gap-3 border-t border-border bg-background/80 backdrop-blur-sm">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-0.5">
              {category}
            </p>
            <h3 className="font-semibold text-sm leading-snug">
              {project_name}
            </h3>
          </div>
          <HugeiconsIcon
            icon={ArrowUpRight03Icon}
            size={18}
            className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
          />
        </div>
      </div>
    </Link>
  );
}
