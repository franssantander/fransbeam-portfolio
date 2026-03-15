"use client";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/index";
import {
  ArrowRight02Icon,
  WebDesign01FreeIcons,
  WebDesign02FreeIcons,
  CodeCircleIcon,
  SmartPhone01FreeIcons,
  PaintBoardFreeIcons,
  Layout06Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const CARDS = [
  {
    index: "01",
    icon: WebDesign02FreeIcons,
    title: "Web & Mobile Development",
    href: "/projects",
    hook: "I build fast, scalable, and production-ready applications from backend to frontend.",
    tags: ["Next.js", "React Native", "Laravel", "MySQL"],
    backIcons: [CodeCircleIcon, SmartPhone01FreeIcons],
  },
  {
    index: "02",
    icon: WebDesign01FreeIcons,
    title: "Figma, Wireframing & UI/UX Design",
    href: "/designs",
    hook: "I design clean, intuitive interfaces that are as beautiful as they are functional.",
    tags: ["Figma", "Wireframing", "Prototyping", "Design Systems"],
    backIcons: [PaintBoardFreeIcons, Layout06Icon],
  },
];

function FlipCard({
  index,
  icon,
  title,
  href,
  hook,
  tags,
  backIcons,
}: (typeof CARDS)[0]) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-64 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Card className="relative w-full h-full overflow-hidden hover:border-foreground/20 transition-all duration-300 flex flex-col">
            {/* Diagonal noise lines */}
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id={`diagonal-front-${index}`}
                    x="0"
                    y="0"
                    width="12"
                    height="12"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(35)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#diagonal-front-${index})`}
                />
              </svg>
            </div>

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id={`dots-front-${index}`}
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#dots-front-${index})`}
                />
              </svg>
            </div>

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

            {/* Number tag */}
            <span className="absolute top-4 right-4 text-xs text-muted-foreground/40 font-mono tabular-nums select-none z-10">
              {index}
            </span>

            <CardHeader className="pb-3 relative z-10">
              <CardTitle>
                <HugeiconsIcon
                  size={36}
                  icon={icon}
                  className="text-foreground"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4 relative z-10 flex-1">
              <h3 className="text-xl font-bold leading-snug uppercase pr-6">
                {title}
              </h3>
            </CardContent>
            <CardFooter className="flex justify-between items-center relative">
              <span className="text-xs text-muted-foreground tracking-widest uppercase">
                Look inside
              </span>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = href;
                }}
                onMouseEnter={(e) => e.stopPropagation()}
                size="icon"
              >
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Back face */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Card className="relative w-full h-full overflow-hidden border-foreground/20 flex flex-col">
            {/* Glowing corner orb */}
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-foreground/8 dark:bg-foreground/15 blur-2xl pointer-events-none" />

            {/* Bottom edge highlight */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent pointer-events-none" />

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

            {/* Number tag */}
            <span className="absolute top-4 right-4 text-xs text-muted-foreground/40 font-mono tabular-nums select-none z-10">
              {index}
            </span>

            <CardHeader className="pb-2 relative z-10">
              <div className="flex items-center gap-2">
                {backIcons.map((ic, i) => (
                  <div key={i} className="p-1.5 rounded-lg bg-secondary">
                    <HugeiconsIcon
                      size={16}
                      icon={ic}
                      className="text-foreground"
                    />
                  </div>
                ))}
              </div>
            </CardHeader>

            <CardContent className="relative z-10 flex-1 flex flex-col justify-between gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hook}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Link href={href} className="w-full">
                <Button size="sm" className="w-full gap-2 rounded-full">
                  <HugeiconsIcon icon={ArrowRight02Icon} size={15} />
                  View Work
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}

// RevealLine stays the same
function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <div className="w-full space-y-16">
      <div className="space-y-5">
        <RevealLine delay={0}>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-foreground" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest">
              Portfolio
            </span>
          </div>
        </RevealLine>

        <div className="uppercase font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1] space-y-1">
          <RevealLine delay={0.1}>
            <h1 className="text-muted-foreground">Full-Stack</h1>
          </RevealLine>
          <RevealLine delay={0.2}>
            <h1>Software Engineer</h1>
          </RevealLine>
          <RevealLine delay={0.3}>
            <h1>&amp; UI/UX Designer</h1>
          </RevealLine>
        </div>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          I specialize in building high quality applications with good
          practices, clean architecture, and user-friendly interfaces that
          deliver outstanding experiences.
        </motion.p>
      </div>

      <div className="space-y-6">
        <RevealLine delay={0.6}>
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-foreground" />
            <h2 className="text-xs text-muted-foreground uppercase tracking-widest">
              What I do
            </h2>
          </div>
        </RevealLine>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
        >
          {CARDS.map((card) => (
            <FlipCard key={card.index} {...card} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
