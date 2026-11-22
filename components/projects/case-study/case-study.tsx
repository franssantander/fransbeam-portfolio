"use client";
import Link from "next/link";
import {
  type LucideIcon,
  ArrowUpRightIcon,
  CalendarCheckIcon,
  CircleCheckIcon,
  LockKeyholeIcon,
  Share2Icon,
  SquarePlusIcon,
} from "lucide-react";
import { FadeUp } from "@/components/animations/fade-up";
import CodeDiagram from "@/components/home/projects/medasin/code-diagram";
import { Button } from "@/components/ui";
import { Project } from "@/interfaces";
import BuildSteps from "./build-steps";
import CaseStudySidebar from "./case-study-sidebar";
import CodeRings from "./code-rings";
import FlowStrip from "./flow-strip";

// Maps the `icon` key in a case study's `features` to its Lucide icon
const FEATURE_ICONS: Record<string, LucideIcon> = {
  capture: SquarePlusIcon,
  share: Share2Icon,
  plans: CalendarCheckIcon,
  vault: LockKeyholeIcon,
};

function Chapter({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <FadeUp inView>
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground font-ibm tabular-nums">
            {index}
          </span>
          <h3 className="font-geist font-black text-2xl md:text-3xl uppercase tracking-tight">
            {title}
          </h3>
        </div>
        {children}
      </section>
    </FadeUp>
  );
}

export default function CaseStudy({ project }: { project: Project }) {
  const study = project.case_study;
  if (!study) return null;
  const domain = project.link.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <article>
      {/* Visual */}
      <FadeUp delay={0.2}>
        <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
          {project.visual === "medasin-brain" && (
            <CodeDiagram
              eyebrow={project.tagline}
              headline={project.headline}
              steps={study.code.steps}
              places={study.para}
            />
          )}
          {/* Over the visual rather than round it, so the steps stay a list to screen readers */}
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${domain}`}
            className="absolute inset-0 z-10 rounded-xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-foreground"
          />
        </div>
      </FadeUp>

      <div className="grid lg:grid-cols-[17rem_1fr] gap-12 lg:gap-20 mt-16">
        <CaseStudySidebar project={project} />

        <div className="flex min-w-0 flex-col gap-16 max-w-3xl">
          {/* Intro */}
          <FadeUp inView>
            <div className="space-y-4">
              <h2 className="font-geist font-black text-4xl md:text-5xl tracking-tight">
                {project.project_name}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {project.lede ?? project.description}
              </p>
            </div>
          </FadeUp>

          <Chapter index="01" title="The problem">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
          </Chapter>

          <Chapter index="02" title="How it works">
            <p className="font-spectral text-2xl font-bold tracking-tight text-balance md:text-3xl">
              {study.code.heading}
            </p>
            <CodeRings steps={study.code.steps} />
            <div className="space-y-2 pt-2 text-center">
              <p className="text-base text-muted-foreground">
                <strong className="font-geist font-black text-foreground">
                  CODE
                </strong>{" "}
                {study.code.closing}
              </p>
              <p className="text-xs text-muted-foreground">
                {study.code.credit}
              </p>
            </div>
          </Chapter>

          <Chapter index="03" title="What I built">
            <BuildSteps steps={study.code.steps} para={study.para} />
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-geist text-lg font-semibold">
                  Everything links
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {study.links}
                </p>
              </div>
              <FlowStrip flow={study.flow} />
            </div>
          </Chapter>

          <Chapter index="04" title="Key features">
            <div className="grid sm:grid-cols-2 gap-4">
              {study.features.map(({ icon, title, body }) => {
                const Icon = FEATURE_ICONS[icon] ?? CircleCheckIcon;
                return (
                  <div
                    key={title}
                    className="rounded-xl border border-border bg-card p-5 space-y-3"
                  >
                    <div className="inline-flex p-2 rounded-lg bg-secondary">
                      <Icon size={18} className="text-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-geist font-semibold">{title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Chapter>

          {/* Closing CTA */}
          <FadeUp inView>
            <div className="flex flex-wrap items-center gap-4 border-t border-border pt-10">
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
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-ibm"
              >
                {domain} ↗
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </article>
  );
}
