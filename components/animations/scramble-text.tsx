"use client";
import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

export function ScrambleText({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState(text);
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

    let frame = 0;
    const totalFrames = 18;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < Math.floor((frame / totalFrames) * text.length)) {
                return char;
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join(""),
        );

        frame++;
        if (frame > totalFrames) {
          setDisplayed(text);
          clearInterval(interval);
        }
      }, 45);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [inView, text, delay]);

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
