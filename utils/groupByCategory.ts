import SkillsData from "@/data/SKILLS_DATA.json";

export function groupByCategory(data: typeof SkillsData) {
  return data.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof SkillsData>,
  );
}
