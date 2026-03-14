"use client";
import { useEffect, useState, useRef } from "react";

export function CountUp({
  to,
  duration = 1.2,
  delay = 0,
  className,
}: {
  to: number;
  duration?: number;
  delay?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const timeout = setTimeout(() => {
      const startTime = performance.now();
      const totalDuration = duration * 1000;

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / totalDuration, 1);

        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * to));

        if (progress < 1) requestAnimationFrame(tick);
        else setCount(to);
      };

      requestAnimationFrame(tick);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, to, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
