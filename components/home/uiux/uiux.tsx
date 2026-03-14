import UiuxData from "@/data/UIUX_DATA.json";
import UiuxCard from "./uiux-card";
import { ScrambleText } from "@/components/animations/scramble-text";
import { CountUp } from "@/components/animations/count-up";

export default function Uiux() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">
            <ScrambleText text="UI/UX" delay={0} />
          </h1>
          <h1>
            <ScrambleText text="Design" delay={0} />
          </h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          <CountUp to={UiuxData.length} delay={0.2} /> works
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {UiuxData.map((project, index) => (
          <UiuxCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
