"use client";

import francisImage from "@/assets/francis-img.jpg";
import StackIcon from "tech-stack-icons";
import TECH_STACK from "@/data/TECH_STACK.json";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  FileDownloadFreeIcons,
  Github01FreeIcons,
  Instagram,
  Linkedin02FreeIcons,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

export default function StickyLeftContent() {
  const { isDark } = useResolvedTheme();
  return (
    <div className="w-full lg:w-1/3 lg:sticky lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center justify-center gap-4 text-center h-fit">
      <div className="relative h-40 w-40 lg:h-80 lg:w-80 overflow-hidden rounded-full ">
        <Image
          src={francisImage}
          alt="Francis Santander"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 160px, 320px"
        />
      </div>

      <div className="space-y-7">
        <h1 className="text-3xl font-black tracking-tight lg:text-4xl">
          Francis Santander
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {TECH_STACK.map((tech) => (
            <StackIcon
              key={tech.name}
              className="w-6 h-6 lg:w-8 lg:h-8"
              name={tech.name}
              variant={
                tech.hasVariant ? (isDark ? "dark" : "light") : undefined
              }
            />
          ))}
        </div>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          A Software Engineer who has developed countless innovative solutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link href="https://github.com/franssantander" target="_blank">
            <HugeiconsIcon
              icon={Github01FreeIcons}
              size={32}
              target="__blank"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/francebeam/" target="_blank">
            <HugeiconsIcon icon={Linkedin02FreeIcons} size={32} />
          </Link>
          <Link href="https://www.instagram.com/franss.dev/" target="_blank">
            <HugeiconsIcon icon={Instagram} size={32} />
          </Link>

          <Link href="/francis-santander-resume.pdf" target="_blank" download>
            <HugeiconsIcon icon={FileDownloadFreeIcons} size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
