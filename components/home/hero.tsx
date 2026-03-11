import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/index";
import {
  ArrowRight02Icon,
  WebDesign01FreeIcons,
  WebDesign02FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Hero() {
  return (
    <div className="w-full space-y-16">
      {/* Headline */}
      <div className="space-y-5">
        <div className="uppercase font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">Full-Stack</h1>
          <h1>Software Engineer</h1>
          <h1>& UI/UX Designer</h1>
        </div>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
          I specialize in building high quality applications with good
          practices, clean architecture, and user-friendly interfaces that
          deliver outstanding experiences.
        </p>
      </div>

      {/* What I do */}
      <div className="space-y-6">
        <h2 className="font-semibold text-lg text-muted-foreground uppercase tracking-widest text-sm">
          What I do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="group hover:border-foreground/30 transition-colors duration-200">
            <CardHeader className="pb-3">
              <CardTitle>
                <HugeiconsIcon
                  size={36}
                  icon={WebDesign02FreeIcons}
                  className="text-foreground"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <h3 className="text-xl font-bold leading-snug uppercase">
                Web Development, Mobile Development
              </h3>
            </CardContent>
            <CardFooter className="flex justify-end bg-none">
              <Button size="icon" variant="outline">
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
              </Button>
            </CardFooter>
          </Card>

          <Card className="group hover:border-foreground/30 transition-colors duration-200">
            <CardHeader className="pb-3">
              <CardTitle>
                <HugeiconsIcon
                  size={36}
                  icon={WebDesign01FreeIcons}
                  className="text-foreground"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <h3 className="text-xl font-bold leading-snug uppercase">
              Figma, Wireframing, UIUX Design
              </h3>
            </CardContent>
            <CardFooter className="flex justify-end bg-none">
              <Button size="icon" variant="outline">
                <HugeiconsIcon icon={ArrowRight02Icon} size={18} />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
