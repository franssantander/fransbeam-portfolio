"use client";
import { motion } from "framer-motion";

export default function RevealLine({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 0.6,
          delay,
          ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
