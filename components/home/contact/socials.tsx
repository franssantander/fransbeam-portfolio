"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui";
import { FileDownIcon } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Socials() {
  const SOCIALS = [
    {
      label: "GitHub",
      href: "https://github.com/franssantander",
      icon: GithubIcon,
      download: false,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/francebeam/",
      icon: LinkedinIcon,
      download: false,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/franss.dev/",
      icon: InstagramIcon,
      download: false,
    },
    {
      label: "Download CV",
      href: process.env.NEXT_PUBLIC_RESUME_URL || "",
      icon: FileDownIcon,
      download: true,
    },
  ];

  return (
    <TooltipProvider delayDuration={100}>
      <div className="flex items-center gap-5">
        {SOCIALS.map(({ label, href, icon: Icon, download }) => (
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
                  <Icon size={20} />
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
