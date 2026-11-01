import PrinciplesData from "@/data/PRINCIPLES_DATA.json";
import { ScrambleText } from "@/components/animations/scramble-text";

export default function Principles() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="Why Work" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="With Me" delay={0.1} />
          </span>
        </h2>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {PrinciplesData.length} reasons
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border">
        {PrinciplesData.map(({ title, description }) => (
          <div
            key={title}
            className="py-6 flex flex-col sm:flex-row gap-2 sm:gap-6"
          >
            <p className="sm:w-56 shrink-0 font-semibold font-geist">{title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
