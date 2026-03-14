"use client";

import francisImage from "@/assets/francis-img.jpg";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FileDownloadFreeIcons,
  Github01FreeIcons,
  Instagram,
  Linkedin02FreeIcons,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Badge } from "../ui";
import { FadeUp } from "../animations/fade-up";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/franssantander",
    icon: Github01FreeIcons,
    download: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/francebeam/",
    icon: Linkedin02FreeIcons,
    download: false,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/franss.dev/",
    icon: Instagram,
    download: false,
  },
  {
    label: "Download CV",
    href: "/files/Francis Beam Santander - Resume.pdf",
    icon: FileDownloadFreeIcons,
    download: true,
  },
];

export default function StickyLeftContent() {
  return (
    <FadeUp
      delay={0}
      className="w-full lg:w-2/5 lg:sticky lg:top-24 lg:self-start flex flex-col items-center lg:items-center gap-5 text-center lg:text-center h-fit"
    >
      <div className="relative h-40 w-40 lg:h-60 lg:w-60 overflow-hidden rounded-full">
        <Image
          src={francisImage}
          alt="Francis Santander"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 160px, 320px"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
          Francis Santander
        </h1>
        <Badge variant="secondary" className="text-sm px-3 py-1">
          Software Engineer
        </Badge>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
        Building modern web and mobile applications with a sharp eye for detail
        and a passion for great user experience.
      </p>

      {/* Divider */}
      <div className="w-full border-t border-border" />

      {/* Social links */}
      <TooltipProvider delayDuration={100}>
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ label, href, icon, download }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ y: -3, scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    download={download || undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors block"
                  >
                    <HugeiconsIcon icon={icon} size={22} />
                  </Link>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="text-xs">
                {label}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </FadeUp>
  );
}
