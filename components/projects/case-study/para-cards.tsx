import {
  type LucideIcon,
  ArchiveIcon,
  LibraryIcon,
  ShapesIcon,
  TargetIcon,
} from "lucide-react";
import { CaseStudy } from "@/interfaces";

// Maps the `icon` key in a case study's `para` entries to its Lucide icon
const ICONS: Record<string, LucideIcon> = {
  target: TargetIcon,
  shapes: ShapesIcon,
  library: LibraryIcon,
  archive: ArchiveIcon,
};

function WindowDots() {
  return (
    <span className="flex gap-1.5" aria-hidden="true">
      <span className="size-2 rounded-full bg-foreground/70" />
      <span className="size-2 rounded-full border border-foreground/40" />
      <span className="size-2 rounded-full border border-foreground/40" />
    </span>
  );
}

// Medasin's PARA diagram as themed cards: four places, each with its line and examples
export default function ParaCards({ para }: { para: CaseStudy["para"] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {para.map(({ name, icon, summary, examples }) => {
        const Icon = ICONS[icon] ?? TargetIcon;
        return (
          <div
            key={name}
            className="rounded-xl border border-border bg-card shadow-[4px_4px_0_0_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
          >
            <div className="border-b border-border px-4 py-3">
              <WindowDots />
            </div>
            <div className="p-5">
              <p className="flex items-center gap-2 font-geist font-semibold text-lg">
                <Icon size={18} className="text-muted-foreground" />
                {name}
              </p>
              <p className="mt-1 font-spectral text-muted-foreground">
                {summary}
              </p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {examples.map((example) => (
                  <li key={example} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-muted-foreground shrink-0" />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
