"use client";
import { type RefObject, useEffect, useState } from "react";
import type { CodeStep } from "@/interfaces";
import type { LeaderLine } from "@/lib/medasin/leader-lines";

// The gap between a label's title and the start of its line, in CSS pixels
const LABEL_GAP = 14;

/** Where `element` sits inside `container`, by layout, so a label still sliding in doesn't throw its line off. */
function boxIn(container: HTMLElement, element: HTMLElement) {
  let x = 0;
  let y = 0;
  for (
    let node: HTMLElement | null = element;
    node && node !== container;
    node = node.offsetParent as HTMLElement | null
  ) {
    x += node.offsetLeft;
    y += node.offsetTop;
  }
  return { x, y, width: element.offsetWidth, height: element.offsetHeight };
}

/** Measures the line from each step's title to its point on the brain, again whenever either moves or resizes. */
export function useLeaderLines(
  containerRef: RefObject<HTMLElement | null>,
  brainRef: RefObject<HTMLElement | null>,
  anchorRefs: RefObject<(HTMLElement | null)[]>,
  steps: CodeStep[],
) {
  const [lines, setLines] = useState<LeaderLine[] | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const brain = brainRef.current;
    const anchors = anchorRefs.current;
    if (!container || !brain) return;

    const measure = () => {
      const brainBox = boxIn(container, brain);
      if (!brainBox.width) return;
      setLines(
        steps.flatMap(({ side, target }, index) => {
          const anchor = anchors[index];
          if (!anchor) return [];
          const box = boxIn(container, anchor);
          return [
            {
              from: {
                x:
                  side === "left"
                    ? box.x + box.width + LABEL_GAP
                    : box.x - LABEL_GAP,
                y: box.y + box.height / 2,
              },
              to: {
                x: brainBox.x + brainBox.width * target.x,
                y: brainBox.y + brainBox.height * target.y,
              },
            },
          ];
        }),
      );
    };

    const resize = new ResizeObserver(measure);
    for (const element of [container, brain, ...anchors]) {
      if (element) resize.observe(element);
    }
    return () => resize.disconnect();
  }, [containerRef, brainRef, anchorRefs, steps]);

  return lines;
}
