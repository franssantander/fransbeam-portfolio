import Image from "next/image";
import Experience from "@/interfaces/index";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <div className="w-full grid grid-cols-1 gap-6">
      <div className="flex items-center gap-3">
        <Image
          className="rounded-md"
          src={experience.img}
          alt={experience.company_name}
          width={46}
          height={46}
        />
        <div>
          <h1 className="font-bold text-xl">{experience.company_name}</h1>
          <p className="text-neutral-500 dark:text-neutral-200">
            {experience.position}
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <ul className="space-y-4">
          {experience.experiences.map((exp, index) => (
            <li
              className="text-neutral-500 dark:text-neutral-300 text-md"
              key={index}
            >
              {exp}
            </li>
          ))}
        </ul>
        <p className="text-neutral-300">{experience.years_active}</p>
      </div>
    </div>
  );
}
