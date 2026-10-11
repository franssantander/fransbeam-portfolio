"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "uiux", label: "UI/UX" },
  { id: "letters", label: "Letters" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionRail() {
  const activeId = useScrollSpy(SECTIONS.map((s) => s.id));
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
        }}
      >
        {/* Collapsed state — one dash per section, active one brighter */}
        <div
          aria-hidden
          className={cn(
            "flex flex-col gap-3 py-3 pr-4 transition-opacity duration-200",
            open && "opacity-0",
          )}
        >
          {SECTIONS.map((section) => (
            <span
              key={section.id}
              className={cn(
                "h-[2px] rounded-full transition-all duration-300",
                section.id === activeId
                  ? "w-6 bg-foreground"
                  : "w-4 bg-foreground/25",
              )}
            />
          ))}
        </div>

        {/* Expanded menu — kept mounted so keyboard focus can open it */}
        <motion.nav
          aria-label="Section navigation"
          initial={false}
          animate={
            open
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -6, scale: 0.98 }
          }
          transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 min-w-48 origin-left rounded-2xl border border-border bg-popover/95 backdrop-blur-md p-2 shadow-xl",
            !open && "pointer-events-none",
          )}
        >
          <ul className="flex flex-col gap-0.5">
            {SECTIONS.map((section) => {
              const isActive = section.id === activeId;
              return (
                <li key={section.id}>
                  <button
                    onClick={() => scrollTo(section.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors cursor-pointer",
                      isActive
                        ? "bg-muted text-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                    )}
                  >
                    {section.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>
    </div>
  );
}
