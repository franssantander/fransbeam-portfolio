import { CaseStudy } from "@/interfaces";
import ParaCards from "./para-cards";

// What was built for each CODE step; the one that works by PARA shows its four places
export default function BuildSteps({
  steps,
  para,
}: {
  steps: CaseStudy["code"]["steps"];
  para: CaseStudy["para"];
}) {
  return (
    <ol className="divide-y divide-border border-y border-border">
      {steps.map(({ name, built, system }, index) => (
        <li key={name} className="space-y-5 py-6">
          <div className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <h4 className="flex items-center gap-2 self-start font-geist text-lg font-semibold">
              <span
                aria-hidden="true"
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs text-background"
              >
                {index + 1}
              </span>
              {name}
            </h4>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {built}
            </p>
          </div>
          {system && <ParaCards para={para} />}
        </li>
      ))}
    </ol>
  );
}
