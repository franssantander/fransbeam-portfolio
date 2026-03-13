import UiuxData from "@/data/UIUX_DATA.json";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight03Icon,
  ArrowLeft01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function DesignsPage() {
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
          <h1 className="text-muted-foreground">UI/UX</h1>
          <h1>Design</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {UiuxData.length} works
        </span>
      </div>

      <div className="columns-1 sm:columns-2 gap-5 space-y-5">
        {UiuxData.map((project, index) => (
          <Link key={index} href={`/designs/${project.slug}` || "/"}>
            <div className="group relative break-inside-avoid overflow-hidden rounded-xl bg-muted mb-5">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={project.img}
                  alt={project.project_name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover overlay */}
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
        ))}
      </div>
    </main>
  );
}
