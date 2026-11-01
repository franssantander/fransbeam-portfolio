"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import StackIcon from "tech-stack-icons";
import MedasinDark from "@/assets/medasin-dark.png";
import MedasinLight from "@/assets/medasin-light.png";
import { Badge, Button } from "@/components/ui";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";
import { Project } from "@/interfaces";

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2 py-5">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        {label}
      </p>
      {children}
    </div>
  );
}

// The project's facts at a glance; sticks beside the story on large screens
export default function CaseStudySidebar({ project }: { project: Project }) {
  const { isDark } = useResolvedTheme();
  const isLive = project.status === "Live";

  return (
    <aside className="lg:sticky lg:top-24 self-start flex flex-col divide-y divide-border border-y border-border">
      <div className="flex items-center gap-3 py-5">
        <Image
          src={MedasinDark}
          alt=""
          width={36}
          height={36}
          className="size-9 rounded-lg dark:hidden"
        />
        <Image
          src={MedasinLight}
          alt=""
          width={36}
          height={36}
          className="size-9 rounded-lg hidden dark:block"
        />
        <div>
          <p className="font-geist font-bold leading-tight">
            {project.project_name}
          </p>
          {project.category && (
            <p className="text-xs text-muted-foreground">{project.category}</p>
          )}
        </div>
      </div>

      {project.status && (
        <Row label="Status">
          <span className="flex items-center gap-2 text-sm">
            {isLive && (
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
            )}
            {project.status}
          </span>
        </Row>
      )}

      {project.role && (
        <Row label="My role">
          <p className="text-sm">{project.role}</p>
        </Row>
      )}

      {project.techstack && project.techstack.length > 0 && (
        <Row label="Built with">
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
                    tech.hasVariant ? (isDark ? "dark" : "light") : undefined
                  }
                />
                <span className="text-xs font-ibm">{tech.name}</span>
              </Badge>
            ))}
          </div>
        </Row>
      )}

      {project.cta && (
        <div className="py-5">
          <Link
            href={project.cta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full gap-2 rounded-full">
              {project.cta.label}
              <ArrowUpRightIcon size={16} />
            </Button>
          </Link>
        </div>
      )}
    </aside>
  );
}
