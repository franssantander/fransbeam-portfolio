import ProjectData from "@/data/PROJECT_DATA.json";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import ProjectPageCard from "@/components/projects/project-page-card";


export default function ProjectsPage() {
  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
        Back to home
      </Link>

      <div className="flex items-end justify-between mb-12">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">All</h1>
          <h1>Projects</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {ProjectData.length} works
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {ProjectData.map((project, index) => (
          <ProjectPageCard project={project} key={index} index={index} />
        ))}
      </div>
    </main>
  );
}
