import ProjectCard from "./project-card";
import ProjectData from "@/data/PROJECT_DATA.json";
import { ScrambleText } from "@/components/animations/scramble-text";
import { CountUp } from "@/components/animations/count-up";

export default function Project() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">
            <ScrambleText text="Recent" delay={0} />
          </h1>
          <h1>
            <ScrambleText text="Projects" delay={0.1} />
          </h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          <CountUp to={ProjectData.length} delay={0.2} /> works
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {ProjectData.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}
