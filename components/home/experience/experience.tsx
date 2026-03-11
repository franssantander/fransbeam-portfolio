import ExperienceData from "@/data/EXPERIENCE_DATA.json";
import ExperienceCard from "./experience-card";
import { getYearsOfExperience } from "@/utils/getYearsOfExperience";

export default function Experience() {
  const experience = getYearsOfExperience();

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">{experience} of</h1>
          <h1>Experience</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {ExperienceData.length} companies
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {ExperienceData.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </section>
  );
}
