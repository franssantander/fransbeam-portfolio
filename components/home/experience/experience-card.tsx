import Image from "next/image";
import { Experience } from "@/interfaces/index";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="w-full py-8 flex flex-col sm:flex-row gap-6 group border-b border-border last:border-0">
      <div className="flex flex-col gap-3 sm:w-48 shrink-0">
        <div className="flex items-center gap-3">
          {/* Timeline dot — sits on the vertical line */}
          <div className="hidden sm:flex absolute left-[11.33rem] w-[7px] h-[7px] rounded-full bg-foreground ring-2 ring-background mt-1 shrink-0" />

          <Image
            className="rounded-lg ring-1 ring-border"
            src={experience.img}
            alt={experience.company_name}
            width={40}
            height={40}
          />
          <div>
            <h2 className="font-bold text-sm leading-tight">
              {experience.company_name}
            </h2>
            <p className="text-xs text-muted-foreground">
              {experience.years_active}
            </p>
          </div>
        </div>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          {experience.position}
        </span>
      </div>

      <div className="hidden sm:block w-px bg-transparent shrink-0" />

      <ul className="flex-1 space-y-3">
        {experience.experiences.map((exp, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
          >
            <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
            {exp}
          </li>
        ))}
      </ul>
    </div>
  );
}
