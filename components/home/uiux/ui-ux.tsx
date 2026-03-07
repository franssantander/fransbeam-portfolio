import React from "react";
import ProjectCard from "../project-card";
import UiuxData from "@/data/UIUX_DATA.json";

export default function Uiux() {
  return (
    <div className="w-full py-20">
      <div className="font-black text-5xl uppercase space-y-2 mb-10 lg:text-7xl">
        <h1 className="text-neutral-500">UIUX</h1>
        <h1>Design</h1>
      </div>
      <div className="grid grid-cols-1 gap-7">
        {UiuxData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
