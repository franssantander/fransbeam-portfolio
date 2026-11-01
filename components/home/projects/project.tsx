import VentureCard from "./venture-card";
import { visibleProjects } from "@/lib/projects";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function Project() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="Featured" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="Projects" delay={0.1} />
          </span>
        </h2>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </span>
      </div>

      <div className="flex flex-col gap-16">
        {visibleProjects.map((project) => (
          <VentureCard project={project} key={project.project_name} />
        ))}
      </div>
    </section>
  );
}
