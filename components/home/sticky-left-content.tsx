"use client";
import Image from "next/image";
import { ArrowUpRightIcon, FileDownIcon, MailIcon } from "lucide-react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/icons/brand-icons";
import Link from "next/link";
import MedasinDark from "@/assets/medasin-dark.png";
import MedasinLight from "@/assets/medasin-light.png";
import { Badge, Button } from "../ui";
import { projectInquiryHref, siteConfig } from "@/config/site";
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

export default function StickyLeftContent() {
  return (
    // Pinned where it starts (66px navbar + the page's 30px top padding), so it
    // never moves. Short screens get a tighter column to keep the socials in view.
    <FadeUp
      delay={0}
      className="w-full lg:w-2/5 lg:sticky lg:top-24 lg:self-start flex flex-col items-center lg:items-center gap-5 lg:[@media(max-height:730px)]:gap-3 text-center lg:text-center h-fit"
    >
      <div className="relative h-40 w-40 lg:h-60 lg:w-60 lg:[@media(max-height:730px)]:size-40 overflow-hidden rounded-full">
        <Image
          src="https://vrnfzkijigqxzxt1.public.blob.vercel-storage.com/assets/images/francis-profile.avif"
          alt="Francis Santander"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 160px, 320px"
        />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight font-geist">
          Francis Santander
        </h1>
        <Badge variant="secondary" className="text-sm p-3 font-geist">
          Software Engineer &amp; UI/UX Designer
        </Badge>
        <p className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
          Founder of
          <Link
            href={siteConfig.venture.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            {/* Both rendered; the `dark` class picks one, so no flash before mount */}
            <Image
              src={MedasinDark}
              alt=""
              width={16}
              height={16}
              className="size-4 shrink-0 rounded-[4px] dark:hidden"
            />
            <Image
              src={MedasinLight}
              alt=""
              width={16}
              height={16}
              className="size-4 shrink-0 rounded-[4px] hidden dark:block"
            />
            {siteConfig.venture.name}
            <ArrowUpRightIcon size={14} />
          </Link>
        </p>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-inter">
        Design and engineering are my jam. I love taking a rough idea, shaping
        how it looks and feels, and building it into something real that people
        use.
      </p>

      {/* Availability + primary CTA */}
      <div className="flex flex-col items-center gap-3">
        <span className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for projects &amp; roles
        </span>
        <Link href={projectInquiryHref}>
          <Button className="gap-2 rounded-full px-6" size="lg">
            <MailIcon size={18} />
            Start a project
          </Button>
        </Link>
      </div>

      {/* Divider */}
      <div className="w-full border-t border-border" />

      {/* Social links */}
      <TooltipProvider delayDuration={100}>
        <div className="flex items-center gap-5">
          {SOCIALS.map(({ label, href, icon: Icon, download }) => (
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
                    <Icon size={22} />
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
