// hooks/useScrollSpy.ts
"use client";
import { useEffect, useState, useRef } from "react";

export function useScrollSpy(ids: string[], offset = 150) {
  const [activeId, setActiveId] = useState<string>(ids[0]);
  const tickingRef = useRef(false);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const updateActive = () => {
      tickingRef.current = false;

      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (scrolledToBottom) {
        setActiveId(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0) {
          current = el.id;
        } else {
          break;
        }
      }
      setActiveId(current);
    };

    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(updateActive);
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids, offset]);

  return activeId;
}
