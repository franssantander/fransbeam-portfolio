"use client";
import { motion } from "framer-motion";

export function FadeUp({
  children,
  delay = 0,
  className,
  inView = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  inView?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      {...(inView
        ? {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-80px" },
          }
        : { animate: { opacity: 1, y: 0 } })}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
