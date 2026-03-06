import {
  Button,
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/index";
import projectImg from "@/assets/projects/1.jpg";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <Link href="/">
      <Card className="relative">
        <CardHeader className="absolute right-10">
          <Button size="icon-lg" variant="ghost">
            <HugeiconsIcon icon={ArrowUpRight03Icon} />
          </Button>
        </CardHeader>
        <CardContent className="flex flex-col lg:items-center lg:flex-row gap-4">
          <Image
            src={projectImg}
            className="rounded-sm w-full lg:max-w-sm"
            alt="Project"
            width="350"
            height="250"
            content="fit"
          />
          <div className="mt-7">
            <div className="space-y-1">
              <h1 className="font-bold text-4xl">RentHaven App</h1>
              <h1 className="text-lg">Full-Stack Web</h1>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
