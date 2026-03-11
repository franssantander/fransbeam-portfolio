import SkillsData from "@/data/SKILLS_DATA.json";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import SkillsCard from "@/components/home/skills/skills-card";
import { groupByCategory } from "@/utils/groupByCategory";

export default function SkillsPage() {
  const grouped = groupByCategory(SkillsData);

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
          <h1 className="text-muted-foreground">Tech Stack</h1>
          <h1>& Tools</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {SkillsData.length} tools
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {Object.entries(grouped).map(([category, skills]) => (
          <div key={category} className="py-10 flex flex-col sm:flex-row gap-8">
            <div className="sm:w-64 shrink-0 space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {category}
              </p>
              <p className="text-sm text-muted-foreground tabular-nums">
                {skills.length} {skills.length === 1 ? "tool" : "tools"}
              </p>
            </div>

            <div className="hidden sm:block w-px bg-border shrink-0" />

            <div className="flex-1 flex flex-wrap gap-6">
              {skills.map((skill) => (
                <SkillsCard key={skill.icon} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
