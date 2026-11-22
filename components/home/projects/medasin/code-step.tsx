import type { Ref } from "react";
import { CaseStudy, CodeStep } from "@/interfaces";
import { PARA_ICONS } from "@/lib/medasin/para-icons";
import { cn } from "@/lib/utils";

export const MARKERS: Record<string, string> = {
  collect: "bg-marker-collect",
  create: "bg-marker-create",
};

/** One CODE step's label beside the brain. A step that works by a system lists that system's places. */
export default function CodeStepLabel({
  step,
  number,
  places,
  titleRef,
  className,
}: {
  step: CodeStep;
  number: number;
  places: CaseStudy["para"];
  /** The title row, where the step's line starts */
  titleRef: Ref<HTMLDivElement>;
  className?: string;
}) {
  const isLeft = step.side === "left";

  return (
    <li
      data-slot="code-step"
      className={cn(
        "min-w-0 lg:w-full lg:max-w-72",
        isLeft ? "lg:justify-self-end lg:text-right" : "lg:justify-self-start",
        className,
      )}
    >
      <div
        ref={titleRef}
        className={cn(
          "flex flex-wrap items-center gap-2",
          isLeft && "lg:justify-end",
        )}
      >
        <span
          aria-hidden="true"
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-semibold text-background"
        >
          {number}
        </span>
        <p className="font-geist text-lg font-semibold tracking-tight xl:text-xl">
          {step.name}
        </p>
        {step.system && (
          <span className="rounded-full border border-foreground/30 px-2 text-[10px] leading-5 font-semibold tracking-wider">
            {step.system}
          </span>
        )}
      </div>

      <p className="mt-2 font-spectral-italic text-base leading-7 italic">
        <span
          className={cn(
            "rounded px-1 py-0.5 box-decoration-clone text-marker-ink",
            MARKERS[step.group],
          )}
        >
          {step.tagline}
        </span>
      </p>

      {step.summary && (
        <p className="mt-1.5 text-[13px]/5 text-muted-foreground xl:text-sm">
          {step.summary}
        </p>
      )}

      {step.system && (
        <ul className="mt-2 space-y-0.5 text-xs/5 xl:text-[13px]/5">
          {places.map(({ name, icon, purpose }) => {
            const Icon = PARA_ICONS[icon];
            return (
              <li key={name} className="flex items-start gap-1.5">
                {Icon && (
                  <Icon
                    size={14}
                    aria-hidden="true"
                    className="mt-[3px] shrink-0 text-muted-foreground"
                  />
                )}
                <span className="w-[4.5rem] shrink-0 font-medium">{name}</span>
                <span className="min-w-0 text-muted-foreground">{purpose}</span>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
