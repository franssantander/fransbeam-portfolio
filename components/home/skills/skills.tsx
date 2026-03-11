import SkillsData from "@/data/SKILLS_DATA.json";
import SkillsCard from "./skills-card";

// Group skills by category
function groupByCategory(data: typeof SkillsData) {
  return data.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SkillsData>,
  );
}

export default function Skills() {
  const grouped = groupByCategory(SkillsData);

  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">Tech Stack</h1>
          <h1>& Tools</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {SkillsData.length} tools
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category} className="flex flex-col sm:flex-row gap-6 py-8">
            {/* Category label */}
            <div className="sm:w-48 shrink-0">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {category}
              </p>
            </div>

            {/* Icons row */}
            <div className="flex flex-wrap gap-5">
              {skills.map((skill) => (
                <SkillsCard key={skill.icon} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
