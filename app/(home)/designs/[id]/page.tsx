import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight03Icon,
  ArrowLeft01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function Page() {
  // const pathname = usePathname();

  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto py-16 lg:py-24">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
        Back to home
      </Link>

      <div className="flex items-end justify-between mb-12">
        <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
          <h1 className="text-muted-foreground">UI/UX</h1>
          <h1>Design</h1>
        </div>
        <span className="text-muted-foreground text-sm tabular-nums mb-1">
          {/* {UiuxData.length} works */}
          works
        </span>
      </div>

      <div>
        
      </div>
    </main>
  );
}
