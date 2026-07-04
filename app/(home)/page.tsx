import StickyLeftContent from "@/components/home/sticky-left-content";
import Hero from "@/components/home/hero";
import Project from "@/components/home/projects/project";
import Uiux from "@/components/home/uiux/uiux";
import Experience from "@/components/home/experience/experience";
import Skills from "@/components/home/skills/skills";
import Contact from "@/components/home/contact/contact";
import { FadeUp } from "@/components/animations/fade-up";
import SectionRail from "./section-rail";

export default function HomePage() {
  return (
    <div className="px-6 md:px-10 max-w-7xl mx-auto">
      <SectionRail />
      <div className="flex flex-col lg:flex-row w-full items-start gap-16 py-16 lg:py-24">
        <StickyLeftContent />
        <div className="flex flex-col space-y-24 w-full lg:w-3/5">
          <div id="hero" className="scroll-mt-24">
            <FadeUp inView delay={0.1}>
              <Hero />
            </FadeUp>
          </div>
          <div id="projects" className="scroll-mt-24">
            <FadeUp inView delay={0.1}>
              <Project />
            </FadeUp>
          </div>
          <div id="uiux" className="scroll-mt-24">
            <FadeUp inView delay={0.1}>
              <Uiux />
            </FadeUp>
          </div>
          <div id="experience" className="scroll-mt-24">
            <FadeUp inView delay={0.1}>
              <Experience />
            </FadeUp>
          </div>
          <div id="skills" className="scroll-mt-24">
            <FadeUp inView delay={0.1}>
              <Skills />
            </FadeUp>
          </div>
          <div id="contact" className="scroll-mt-24">
            <FadeUp inView delay={0.1}>
              <Contact />
            </FadeUp>
          </div>
        </div>
      </div>
    </div>
  );
}
