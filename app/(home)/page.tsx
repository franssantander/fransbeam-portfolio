import StickyLeftContent from "@/components/home/sticky-left-content";
import Hero from "@/components/home/hero";
import Project from "@/components/home/projects/project";
import Uiux from "@/components/home/uiux/uiux";
import Experience from "@/components/home/experience/experience";
import Skills from "@/components/home/skills/skills";
import Contact from "@/components/home/contact/contact";

export default function HomePage() {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row w-full items-start gap-16 py-16 lg:py-24">
        <StickyLeftContent />
        <div className="flex flex-col space-y-24 w-full lg:w-3/5">
          <Hero />
          <Project />
          <Uiux />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </div>
    </div>
  );
}
