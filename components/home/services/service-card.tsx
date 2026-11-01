"use client";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/index";
import {
  type LucideIcon,
  ArrowRightIcon,
  ChartColumnIcon,
  CodeXmlIcon,
  DatabaseIcon,
  LayoutDashboardIcon,
  LayoutTemplateIcon,
  MonitorSmartphoneIcon,
  PaletteIcon,
  PenToolIcon,
  SmartphoneIcon,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Service } from "@/interfaces";
import { cn } from "@/lib/utils";

type IconSvg = LucideIcon;

// Maps the `icon` key in SERVICES_DATA.json to front/back face icons
const ICONS: Record<string, { front: IconSvg; back: IconSvg[] }> = {
  product: {
    front: MonitorSmartphoneIcon,
    back: [CodeXmlIcon, SmartphoneIcon],
  },
  business: {
    front: LayoutDashboardIcon,
    back: [DatabaseIcon, ChartColumnIcon],
  },
  design: {
    front: PenToolIcon,
    back: [PaletteIcon, LayoutTemplateIcon],
  },
};

function DotGrid({ id, className }: { id: string; className: string }) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

// Front-face background per service: blueprint grid for engineering,
// a design canvas (dots + pen curve) for design
function FrontPattern({ variant, index }: { variant: string; index: string }) {
  if (variant === "product") {
    return (
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`grid-minor-${index}`}
              width="12"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M12 0H0V12"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
            <pattern
              id={`grid-major-${index}`}
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <rect width="48" height="48" fill={`url(#grid-minor-${index})`} />
              <path
                d="M48 0H0V48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-major-${index})`} />
        </svg>
      </div>
    );
  }

  if (variant === "design") {
    return (
      <>
        <DotGrid
          id={`canvas-dots-${index}`}
          className="opacity-[0.05] dark:opacity-[0.1]"
        />
        {/* Pen tool curve: path, anchors, and handles */}
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.14] pointer-events-none">
          <svg
            className="w-full h-full"
            viewBox="0 0 200 160"
            preserveAspectRatio="xMaxYMin meet"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
          >
            <path d="M70 112C88 60 120 46 165 40" strokeWidth="1.25" />
            <path d="M70 112L80 76M165 40L132 36" strokeWidth="0.75" />
            <circle cx="80" cy="76" r="2.5" fill="currentColor" />
            <circle cx="132" cy="36" r="2.5" fill="currentColor" />
            <rect x="66" y="108" width="8" height="8" strokeWidth="1.25" />
            <rect x="161" y="36" width="8" height="8" strokeWidth="1.25" />
          </svg>
        </div>
      </>
    );
  }

  // Fallback for any other service: the original diagonal lines + dots
  return (
    <>
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
      <DotGrid
        id={`dots-front-${index}`}
        className="opacity-[0.03] dark:opacity-[0.07]"
      />
    </>
  );
}

export default function ServiceCard({
  index,
  icon,
  title,
  audience,
  href,
  hook,
  tags,
}: Service) {
  const [flipped, setFlipped] = useState(false);
  const { front: FrontIcon, back: backIcons } = ICONS[icon] ?? ICONS.product;

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
            <FrontPattern variant={icon} index={index} />

            {/* Bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />

            {/* Number tag */}
            <span className="absolute top-4 right-4 text-xs text-muted-foreground/40 font-mono tabular-nums select-none z-10">
              {index}
            </span>

            <CardHeader className="pb-3 relative z-10">
              <CardTitle>
                <FrontIcon size={36} className="text-foreground" />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4 relative z-10 flex-1">
              <h3 className="text-xl font-bold leading-snug uppercase pr-6 font-geist">
                {title}
              </h3>
            </CardContent>
            <CardFooter className="flex justify-between items-center relative">
              <span className="text-xs text-muted-foreground tracking-widest uppercase font-ibm">
                {audience}
              </span>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  window.location.href = href;
                }}
                onMouseEnter={(e) => e.stopPropagation()}
                size="icon"
              >
                <ArrowRightIcon size={18} />
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
                {backIcons.map((BackIcon, i) => (
                  <div key={i} className="p-1.5 rounded-lg bg-secondary">
                    <BackIcon size={16} className="text-foreground" />
                  </div>
                ))}
              </div>
            </CardHeader>

            <CardContent className="relative z-10 flex-1 flex flex-col justify-between gap-3">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hook}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="text-xs font-ibm"
                    variant="outline"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="relative z-10">
              <Link href={href} className="w-full">
                <Button size="sm" className="w-full gap-2 rounded-full">
                  <ArrowRightIcon size={15} />
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
