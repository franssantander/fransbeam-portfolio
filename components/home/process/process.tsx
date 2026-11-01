import ProcessData from "@/data/PROCESS_DATA.json";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function Process() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="How I" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="Work" delay={0.1} />
          </span>
        </h2>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {ProcessData.length} steps
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {ProcessData.map(({ step, description }, index) => (
          <div
            key={step}
            className="py-8 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6"
          >
            <span className="text-xs text-muted-foreground tabular-nums w-6 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="sm:w-48 shrink-0 font-bold text-xl md:text-2xl leading-tight font-geist">
              {step}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              {description}
            </p>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-6">
        Every engagement ends with a product you own and understand.
      </p>
    </section>
  );
}
