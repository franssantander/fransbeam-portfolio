import StickyLeftContent from "@/components/home/sticky-left-content";
import Hero from "@/components/home/hero";
import Project from "@/components/home/projects/project";
import Uiux from "@/components/home/uiux/ui-ux";

export default function HomePage() {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row w-full items-start justify-center py-10 lg:py-20 gap-10">
        <StickyLeftContent />

        <div className="flex flex-col space-y-12 w-full lg:w-2/3">
          <Hero />
          <Project />
          <Uiux />
        </div>
      </div>
    </div>
  );
}
