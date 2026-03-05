import {
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/index";
import {
  ArrowRight01FreeIcons,
  ArrowRight02Icon,
  ArrowRight03FreeIcons,
  ArrowRight04FreeIcons,
  WebDesign01FreeIcons,
  WebDesign02FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Hero() {
  return (
    <div className="w-full space-y-12">
      <div className="space-y-6 text-center lg:text-left">
        <div className="uppercase font-black text-5xl space-y-2 lg:text-7xl leading-[0.85]">
          <h1 className="text-neutral-500">Full-Stack</h1>
          <h1>Software Engineer</h1>
          <h1>& UI/UX Designer</h1>
        </div>
        <p className="text-neutral-500 text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          I specialize in building high quality application that applies good
          practices, principles, architecture and user-friendly web applications
          that deliver outstanding end user.
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-7 lg:flex-row">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>
              <HugeiconsIcon size={46} icon={WebDesign02FreeIcons} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-bold max-w-lg">
              FULL-STACK APP, WEB DEVELOPMENT
            </h1>
          </CardContent>
          <CardFooter className="flex justify-end border-0 bg-transparent">
            <Button size="icon-lg">
              <HugeiconsIcon icon={ArrowRight02Icon} />
            </Button>
          </CardFooter>
        </Card>
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>
              <HugeiconsIcon size={46} icon={WebDesign01FreeIcons} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-3xl font-bold max-w-lg">
              FIGMA, WIREFRAMING, UIUX DESIGN
            </h1>
          </CardContent>
          <CardFooter className="flex justify-end border-0 bg-transparent">
            <Button size="icon-lg">
              <HugeiconsIcon icon={ArrowRight02Icon} />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
