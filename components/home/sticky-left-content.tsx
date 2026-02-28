import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import francisImage from "@/assets/francis-img.jpg";

export default function StickyLeftContent() {
  return (
    <div className="w-full lg:w-1/3 lg:sticky lg:top-20 flex flex-col items-center justify-center gap-4 text-center h-fit">
      <Avatar className="h-40 w-40 lg:h-80 lg:w-80 shadow-xl">
        <AvatarImage
          src={francisImage.src}
          alt="Francis"
          className="object-cover"
        />
        <AvatarFallback>FS</AvatarFallback>
      </Avatar>

      <div className="space-y-2">
        <h1 className="text-3xl font-black tracking-tight lg:text-4xl">
          Francis Santander
        </h1>
        <p className="text-muted-foreground text-lg max-w-xs mx-auto">
          A Software Engineer who has developed countless innovative solutions.
        </p>
      </div>
    </div>
  );
}
