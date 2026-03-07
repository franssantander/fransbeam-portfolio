import ProjectCard from "../project-card";
import ProjectData from "@/data/PROJECT_DATA.json";

export default function Project() {
  return (
    <div className="w-full">
      <div className="font-black text-5xl uppercase space-y-2 mb-10 lg:text-7xl">
        <h1 className="text-neutral-500">Recent</h1>
        <h1>Project</h1>
      </div>
      <div className="grid grid-cols-1 gap-7">
        {ProjectData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
