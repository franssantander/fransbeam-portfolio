import UiuxData from "@/data/UIUX_DATA.json";
import UiuxCard from "./uiux-card";
import { ScrambleText } from "@/components/animations/scramble-text";
import { CountUp } from "@/components/animations/count-up";

export default function Uiux() {
  return (
    <section className="w-full">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1 font-geist">
          <span className="block text-muted-foreground">
            <ScrambleText text="UI/UX" delay={0} />
          </span>
          <span className="block">
            <ScrambleText text="Design" delay={0} />
          </span>
        </h2>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          <CountUp to={UiuxData.length} delay={0.2} /> works
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl -mt-4 mb-10">
        Interface and brand-led design work — landing pages and product UI
        shaped around each business&apos;s audience and goals.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {UiuxData.map((project, index) => (
          <UiuxCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
}
