"use client";
import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  type Clearing,
  drawDotGrid,
  followGlow,
  type Glow,
  isGlowSettled,
  NO_GLOW,
  type Point,
} from "@/lib/medasin/dot-grid";

/** Where `element` sits in the canvas, measured by layout, so a reveal still sliding it in doesn't throw the clearing off. */
function clearingFor(
  canvas: HTMLCanvasElement,
  element: HTMLElement,
): Clearing {
  let x = 0;
  let y = 0;
  for (
    let node: HTMLElement | null = element;
    node && node !== canvas.offsetParent;
    node = node.offsetParent as HTMLElement | null
  ) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  return {
    x: x - canvas.offsetLeft + element.offsetWidth / 2,
    y: y - canvas.offsetTop + element.offsetHeight / 2,
    radiusX: element.offsetWidth / 2,
    radiusY: element.offsetHeight / 2,
  };
}

/**
 * A faint dot grid filling its parent, which lights up around the cursor (or a finger on touch screens) with the dots
 * leaning in toward it. It keeps clear of the element `clearAround` selects, and holds still for reduced motion.
 */
export default function DotGridCanvas({
  clearAround,
}: {
  clearAround?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const cleared = clearAround
      ? canvas.parentElement?.querySelector<HTMLElement>(clearAround)
      : null;
    let ratio = 1;
    let glow: Glow = NO_GLOW;
    // In the window's coordinates, so it stays right while the page scrolls under a still pointer
    let pointer: Point | null = null;
    let frame = 0;
    let last = 0;

    const paint = () =>
      drawDotGrid(context, {
        ratio,
        glow,
        clearing: cleared ? clearingFor(canvas, cleared) : null,
      });

    const tick = (now: number) => {
      const seconds = last ? Math.min(0.1, (now - last) / 1000) : 1 / 60;
      last = now;
      const box = canvas.getBoundingClientRect();
      const target =
        pointer &&
        pointer.x >= box.left &&
        pointer.x < box.right &&
        pointer.y >= box.top &&
        pointer.y < box.bottom
          ? { x: pointer.x - box.left, y: pointer.y - box.top }
          : null;
      glow = followGlow(glow, target, seconds);
      paint();
      if (isGlowSettled(glow, target)) {
        frame = 0;
        last = 0;
      } else {
        frame = requestAnimationFrame(tick);
      }
    };

    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };

    const resize = new ResizeObserver(() => {
      ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(canvas.clientWidth * ratio);
      canvas.height = Math.round(canvas.clientHeight * ratio);
      paint();
    });
    resize.observe(canvas);
    if (cleared) resize.observe(cleared);
    if (reduce) return () => resize.disconnect();

    const moveTo = (x: number, y: number) => {
      pointer = { x, y };
      wake();
    };
    const leave = () => {
      pointer = null;
      wake();
    };
    // Touch has its own listeners below, since pointer events stop once the page starts scrolling under the finger
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "touch") moveTo(event.clientX, event.clientY);
    };
    const handlePointerOut = (event: PointerEvent) => {
      if (event.pointerType !== "touch" && !event.relatedTarget) leave();
    };
    const handleTouch = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) moveTo(touch.clientX, touch.clientY);
      else leave();
    };

    const options = { passive: true };
    window.addEventListener("pointermove", handlePointerMove, options);
    window.addEventListener("pointerout", handlePointerOut, options);
    window.addEventListener("touchstart", handleTouch, options);
    window.addEventListener("touchmove", handleTouch, options);
    window.addEventListener("touchend", handleTouch, options);
    window.addEventListener("touchcancel", handleTouch, options);
    window.addEventListener("scroll", wake, options);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchmove", handleTouch);
      window.removeEventListener("touchend", handleTouch);
      window.removeEventListener("touchcancel", handleTouch);
      window.removeEventListener("scroll", wake);
    };
  }, [reduce, clearAround]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full dark:invert"
    />
  );
}
