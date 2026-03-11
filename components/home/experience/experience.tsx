import ExperienceData from "@/data/EXPERIENCE_DATA.json";
import ExperienceCard from "./experience-card";

export default function Experience() {
  return (
    <section className="w-full py-10">
      <div className="font-black text-5xl uppercase space-y-2 mb-10 lg:text-7xl">
        <h1 className="text-neutral-500">2 Years of</h1>
        <h1>Experience</h1>
      </div>
      <div className="grid grid-cols-1 gap-16">
        {ExperienceData.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </section>
  );
}
