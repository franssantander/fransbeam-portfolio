import { Button, Card, CardContent } from "@/components/ui/index";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import Project from "@/interfaces";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.link || "/"}>
      <Card className="relative group transition-all hover:shadow-lg overflow-hidden">
        <div className="hidden lg:absolute top-4 right-4 z-10">
          <Button
            size="icon"
            variant="ghost"
            className="group-hover:bg-accent transition-colors"
          >
            <HugeiconsIcon icon={ArrowUpRight03Icon} size={24} />
          </Button>
        </div>

        <CardContent className="flex flex-col lg:flex-row items-center gap-6 p-6">
          <div className="relative w-full md:w-[350px] aspect-[4/3] overflow-hidden rounded-md">
            <Image
              src={project.img}
              alt={project.project_name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="w-full flex-1 space-y-2">
            <div>
              <h2 className="font-bold text-3xl lg:text-4xl">
                {project.project_name}
              </h2>
              <p className="text-muted-foreground text-lg">
                {project.category}
              </p>
            </div>
            <p className="text-sm text-neutral-500 line-clamp-2">
              {project?.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
