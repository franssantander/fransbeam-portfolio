import ExperienceData from "@/data/EXPERIENCE_DATA.json";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import { getYearsOfExperience } from "@/utils/getYearsOfExperience";

export default function ExperiencePage() {
  const experience = getYearsOfExperience();

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
          <h1 className="text-muted-foreground">{experience} of</h1>
          <h1>Experience</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {ExperienceData.length} companies
        </span>
      </div>

      {/* Experience list */}
      <div className="flex flex-col divide-y divide-border">
        {ExperienceData.map((exp, index) => (
          <div key={index} className="py-10 flex flex-col lg:flex-row gap-8">
            {/* Left — company */}
            <div className="flex flex-col gap-4 lg:w-64 shrink-0">
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-lg ring-1 ring-border"
                  src={exp.img}
                  alt={exp.company_name}
                  width={44}
                  height={44}
                />
                <div>
                  <h2 className="font-bold text-base leading-tight">
                    {exp.company_name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {exp.years_active}
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Role
                </p>
                <p className="text-sm font-medium">{exp.position}</p>
              </div>

              {/* Employment type if available */}
              {exp.employment_type && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Type
                  </p>
                  <span className="inline-block text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {exp.employment_type}
                  </span>
                </div>
              )}
            </div>

            {/* Vertical divider */}
            <div className="hidden lg:block w-px bg-border shrink-0" />

            {/* Right — responsibilities */}
            <div className="flex-1 space-y-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
                Responsibilities
              </p>
              <ul className="space-y-4">
                {exp.experiences.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
