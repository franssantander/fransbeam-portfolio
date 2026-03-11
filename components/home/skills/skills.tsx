import SkillsData from "@/data/SKILLS_DATA.json";
import SkillsCard from "./skills-card";

export default function Skills() {
  return (
    <div className="w-full">
      <div className="font-black text-5xl uppercase space-y-2 mb-10 lg:text-7xl">
        <h1 className="text-neutral-500">Tech Stack</h1>
        <h1>& Tools</h1>
      </div>
      <div className="grid grid-cols-2 gap-7 md:grid-cols-2 md:gap-12">
        {SkillsData.map((skill, index) => (
          <SkillsCard {...skill} key={index} />
        ))}
      </div>
    </div>
  );
}
