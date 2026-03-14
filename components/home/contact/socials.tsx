"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui";
import {
  Github01FreeIcons,
  Linkedin02FreeIcons,
  Instagram,
  FileDownloadFreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Socials() {
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

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex items-center gap-5">
        {SOCIALS.map(({ label, href, icon, download }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <motion.div
                whileHover={{ y: -3, scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                <Link
                  href={href}
                  target="_blank"
                  download={download || undefined}
                  className="text-muted-foreground hover:text-foreground transition-colors block"
                >
                  <HugeiconsIcon icon={icon} size={20} />
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
  );
}
