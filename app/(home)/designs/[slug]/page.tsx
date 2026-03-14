import UiuxData from "@/data/UIUX_DATA.json";
import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";
import { notFound } from "next/navigation";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui";

export function generateStaticParams() {
  return UiuxData.map((project) => ({ slug: project.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = UiuxData.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      {/* Back */}
      <Link
        href="/designs"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
        Back to designs
      </Link>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div className="space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="rounded-full text-xs">
              {project.category}
            </Badge>
            <Badge variant="outline" className="rounded-full text-xs">
              {project.type}
            </Badge>
          </div>
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9]">
            {project.project_name}
          </h1>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">
            Year
          </span>
          <span className="font-black text-3xl">{project.year}</span>
          <div className="flex flex-wrap gap-1 sm:justify-end">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero image */}
      <Card className="relative w-full aspect-video overflow-hidden rounded-2xl mb-16">
        <Image
          src={project.images.hero}
          alt={project.project_name}
          fill
          className="object-cover"
          priority
        />
      </Card>

      {/* Content sections */}
      <div className="flex flex-col divide-y divide-border">
        {/* Overview */}
        <div className="py-12 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Overview
            </p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <p className="flex-1 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {project.overview}
          </p>
        </div>

        {/* Color Palette + Typography */}

        <div className="py-12 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Visual System
            </p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs text-muted-foreground uppercase tracking-widest font-normal">
                  Color Palette
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.images.palette}
                    alt="Color Palette"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="pb-3">
                <CardTitle className="text-xs text-muted-foreground uppercase tracking-widest font-normal">
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.images.typography}
                    alt="Typography"
                    fill
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Wireframe */}
        <div className="py-12 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Wireframe
            </p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1">
            <div className="flex-1">
              <Card className="overflow-hidden p-0">
                <Image
                  src={project.images.wireframe}
                  alt="Wireframe"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="py-12 flex flex-col sm:flex-row gap-8">
          <div className="sm:w-48 shrink-0">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Outcome
            </p>
          </div>
          <div className="hidden sm:block w-px bg-border shrink-0" />
          <div className="flex-1 flex flex-col gap-4">
            {project.images.outcomes.map((img, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xs text-muted-foreground uppercase tracking-widest font-normal">
                    Outcome {String(i + 1).padStart(2, "0")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Image
                    src={img}
                    alt={`Outcome ${i + 1}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="mt-16 flex items-center justify-between">
        <Link
          href="/designs"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
          All Designs
        </Link>
        <p className="text-xs text-muted-foreground">
          {project.project_name} · {project.year}
        </p>
      </div>
    </main>
  );
}
