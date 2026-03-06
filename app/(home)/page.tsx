import StickyLeftContent from "@/components/home/sticky-left-content";
import Hero from "@/components/home/hero";
import ProjectCard from "@/components/home/project-card";

export default function HomePage() {
  return (
    <div className="px-4 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row w-full items-start justify-center py-10 lg:py-20 gap-10">
        <StickyLeftContent />

        <div className="flex flex-col space-y-12 w-full lg:w-2/3">
          <Hero />
          <section className="py-20">
            <div className="font-black text-5xl uppercase space-y-2 mb-10 lg:text-7xl">
              <h1 className="text-neutral-500">Recent</h1>
              <h1>Project</h1>
            </div>
            <ProjectCard />
          </section>
        </div>
      </div>
    </div>
  );
}
