"use client";
import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "uiux", label: "UI/UX" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionRail() {
  const activeId = useScrollSpy(SECTIONS.map((s) => s.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div className="relative flex flex-col gap-6 py-2">
        {/* Background track line */}
        <div className="absolute left-[3px] top-0 bottom-0 w-px bg-foreground/15" />

        {SECTIONS.map((section) => {
          const isActive = section.id === activeId;
          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group relative z-10 flex items-center gap-3 cursor-pointer"
              aria-label={`Go to ${section.label}`}
            >
              {/* Indicator Area (Maintains perfect alignment over the track line) */}
              <span className="relative flex h-5 w-[7px] shrink-0 items-center justify-center">
                {/* Glow pulse only - shown on active state */}
                {isActive && (
                  <motion.span
                    layoutId="rail-glow"
                    className="absolute rounded-full bg-foreground/30 blur-[4px]"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.5, 0.9, 0.5],
                      scale: [1, 1.25, 1],
                    }}
                    transition={{
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ width: 12, height: 24 }}
                  />
                )}
              </span>

              {/* Label */}
              <span
                className={`text-xs whitespace-nowrap transition-colors duration-200 font-ibm
                  ${
                    isActive
                      ? "font-medium text-foreground"
                      : "font-normal text-muted-foreground group-hover:text-foreground"
                  }
                `}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
