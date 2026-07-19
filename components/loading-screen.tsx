"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import DarkLogo from "@/assets/frans-darklogo.svg";
import WhiteLogo from "@/assets/frans-whitelogo.svg";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";
import { siteConfig } from "@/config/site";

const MIN_DISPLAY_MS = 600;
const MAX_DISPLAY_MS = 4000;

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, isMounted } = useResolvedTheme();

  useEffect(() => {
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(MIN_DISPLAY_MS - (Date.now() - start), 0);
      window.setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    const fallback = window.setTimeout(
      () => setIsLoading(false),
      MAX_DISPLAY_MS,
    );

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-11 h-11"
          >
            {isMounted && (
              <Image
                src={isDark ? WhiteLogo : DarkLogo}
                alt={siteConfig.shortName}
                width={44}
                height={44}
                priority
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="h-px w-24 overflow-hidden rounded-full bg-border"
          >
            <motion.div
              className="h-full w-1/3 rounded-full bg-foreground"
              animate={{ x: ["-100%", "220%"] }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
