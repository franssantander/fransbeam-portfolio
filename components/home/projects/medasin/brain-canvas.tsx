"use client";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  BRAIN_PRINT_SRC,
  drawPrintFrame,
  printPixels,
} from "@/lib/medasin/brain-print";

// The dots turn over in steps, so 30 frames a second is smooth enough
const FRAME_MS = 33;

/** Medasin's printed brain, relit in dots on a canvas and kept still for reduced motion. */
export default function BrainCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let pixels: ReturnType<typeof printPixels> | null = null;
    let frame = 0;
    let last = 0;
    let visible = true;
    let cancelled = false;
    // The clock starts once the print is ready, so the loop begins where it can be seen
    let start = performance.now();
    const secondsNow = () =>
      reduce ? null : (performance.now() - start) / 1000;

    const paint = () => {
      if (pixels && canvas.width) drawPrintFrame(context, pixels, secondsNow());
    };

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      if (now - last < FRAME_MS) return;
      last = now;
      paint();
    };

    const play = () => {
      if (reduce || !visible || frame) return;
      frame = requestAnimationFrame(tick);
    };

    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const resize = new ResizeObserver(([entry]) => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(entry.contentRect.width * ratio);
      canvas.height = Math.round(entry.contentRect.height * ratio);
      paint();
    });
    resize.observe(canvas);

    const view = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    view.observe(canvas);

    const image = new Image();
    image.src = BRAIN_PRINT_SRC;
    image
      .decode()
      .then(() => {
        if (cancelled) return;
        pixels = printPixels(image);
        start = performance.now();
        paint();
      })
      .catch(() => {});

    play();
    return () => {
      cancelled = true;
      pause();
      resize.disconnect();
      view.disconnect();
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-slot="medasin-brain"
      className={cn("block aspect-[454/351]", className)}
    />
  );
}
