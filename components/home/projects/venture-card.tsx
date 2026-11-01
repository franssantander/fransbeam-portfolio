"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CircleCheckIcon,
} from "lucide-react";
import StackIcon from "tech-stack-icons";
import { Project } from "@/interfaces";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";
import { Badge, Button } from "@/components/ui";
import MedasinVisual from "./medasin/medasin-visual";

export default function VentureCard({ project }: { project: Project }) {
  const { isDark } = useResolvedTheme();
  const isLive = project.status === "Live";
  const domain = project.link.replace(/^https?:\/\//, "").replace(/\/$/, "");
  // With a case study, this card is a teaser: the details live on /projects
  const isTeaser = Boolean(project.case_study);

  return (
    <article className="flex flex-col gap-8">
      {/* Visual — a live product visual, a screenshot, or a branded placeholder */}
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative block w-full overflow-hidden rounded-xl border border-border bg-muted ${
          project.visual ? "" : "aspect-[4/3] sm:aspect-video"
        }`}
      >
        {project.visual === "medasin-brain" ? (
          <MedasinVisual
            eyebrow={project.tagline}
            headline={project.headline}
          />
        ) : project.img ? (
          <Image
            src={project.img}
            alt={`${project.project_name} product screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center p-6">
            <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.07] pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern
                    id="venture-dots"
                    width="16"
                    height="16"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#venture-dots)" />
              </svg>
            </div>
            <p className="relative font-black text-4xl md:text-5xl tracking-tight font-geist">
              {project.project_name}
            </p>
            {project.tagline && (
              <p className="relative text-sm text-muted-foreground">
                {project.tagline}
              </p>
            )}
            <span className="relative text-xs text-muted-foreground font-ibm mt-2">
              {domain}
            </span>
          </div>
        )}
      </Link>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {project.category && (
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {project.category}
            </p>
          )}
          {isLive && (
            <span className="flex items-center gap-1 text-xs text-emerald-500 font-semibold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              Live
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="font-black text-3xl md:text-4xl leading-tight tracking-tight font-geist">
            {project.project_name}
          </h3>
          {/* The visual already carries the tagline */}
          {project.tagline && !project.visual && (
            <p className="text-base text-muted-foreground">{project.tagline}</p>
          )}
        </div>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
          {project.description}
        </p>
      </div>

      {!isTeaser && project.highlights && project.highlights.length > 0 && (
        <ul className="flex flex-col divide-y divide-border border-y border-border">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-3 py-3 text-sm leading-relaxed"
            >
              <CircleCheckIcon
                size={16}
                className="text-muted-foreground shrink-0 mt-0.5"
              />
              {highlight}
            </li>
          ))}
        </ul>
      )}

      {!isTeaser && (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          {project.role && (
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                My role
              </p>
              <p className="text-sm">{project.role}</p>
            </div>
          )}
          {project.techstack && project.techstack.length > 0 && (
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                Built with
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techstack.map((tech) => (
                  <Badge
                    key={tech.icon}
                    variant="secondary"
                    className="gap-1.5 px-2.5 py-1 rounded-full"
                  >
                    <StackIcon
                      name={tech.icon}
                      className="w-3.5 h-3.5"
                      variant={
                        tech.hasVariant
                          ? isDark
                            ? "dark"
                            : "light"
                          : undefined
                      }
                    />
                    <span className="text-xs font-ibm">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {project.cta && (
          <Link
            href={project.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 rounded-full px-6">
              {project.cta.label}
              <ArrowUpRightIcon size={16} />
            </Button>
          </Link>
        )}
        {isTeaser ? (
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors font-ibm"
          >
            View case study
            <ArrowRightIcon
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        ) : (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-ibm"
          >
            {domain} ↗
          </Link>
        )}
      </div>
    </article>
  );
}
