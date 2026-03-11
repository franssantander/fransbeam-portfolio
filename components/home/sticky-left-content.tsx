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

export default function StickyLeftContent() {
  return (
    <div className="w-full lg:w-2/5 lg:sticky lg:top-24 lg:self-start flex flex-col items-center lg:items-center gap-5 text-center lg:text-center h-fit">
      <div className="relative h-40 w-40 lg:h-60 lg:w-60 overflow-hidden rounded-full ">
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

      {/* Bio */}
      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
        Building modern web and mobile applications with a sharp eye for detail
        and a passion for great user experience.
      </p>

      {/* Divider */}
      <div className="w-full border-t border-border" />

      {/* Social links */}
      <div className="flex items-center gap-5">
        <Link
          href="https://github.com/franssantander"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <HugeiconsIcon icon={Github01FreeIcons} size={22} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/francebeam/"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <HugeiconsIcon icon={Linkedin02FreeIcons} size={22} />
        </Link>
        <Link
          href="https://www.instagram.com/franss.dev/"
          target="_blank"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <HugeiconsIcon icon={Instagram} size={22} />
        </Link>
        <Link
          href="/francis-santander-resume.pdf"
          target="_blank"
          download
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <HugeiconsIcon icon={FileDownloadFreeIcons} size={22} />
        </Link>
      </div>
    </div>
  );
}
