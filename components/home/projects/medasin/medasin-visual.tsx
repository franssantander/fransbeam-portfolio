"use client";
import BrainCanvas from "./brain-canvas";
import DotGridCanvas from "./dot-grid-canvas";

// Medasin's landing hero in miniature, laid out like the original: the dithered
// brain, a small eyebrow, and the serif headline, over a dot grid that lights up
// around the cursor
export default function MedasinVisual({
  eyebrow,
  headline,
}: {
  eyebrow?: string;
  headline?: string;
}) {
  return (
    <div className="relative">
      <DotGridCanvas clearAround='[data-slot="medasin-brain"]' />
      <div className="relative flex flex-col items-center px-6 py-10 text-center sm:py-12">
        <BrainCanvas className="w-48 sm:w-60 lg:w-64" />
        {eyebrow && (
          <p className="mt-6 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            {eyebrow}
          </p>
        )}
        {headline && (
          <p className="mt-3 max-w-md font-spectral text-[1.80rem] leading-[1.02] font-bold tracking-[-0.025em] text-balance sm:text-4xl">
            {headline}
          </p>
        )}
      </div>
    </div>
  );
}
