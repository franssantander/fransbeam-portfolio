"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01FreeIcons } from "@hugeicons/core-free-icons";

function RevealLine({
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

export default function NotFound() {
  return (
    <main className="px-6 md:px-10 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center py-16">
      <div className="relative">
        <motion.p
          className="absolute -top-16 left-0 font-black text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none text-foreground/[0.04] select-none pointer-events-none tabular-nums"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          404
        </motion.p>

        <div className="relative space-y-8">
          <RevealLine delay={0}>
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-foreground" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest">
                Error 404
              </span>
            </div>
          </RevealLine>

          <div className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[0.9] space-y-1">
            <RevealLine delay={0.1}>
              <h1 className="text-muted-foreground">Page Not</h1>
            </RevealLine>
            <RevealLine delay={0.2}>
              <h1>Found</h1>
            </RevealLine>
          </div>

          <motion.p
            className="text-sm text-muted-foreground leading-relaxed max-w-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            Looks like this page doesn&apos;t exist or has been moved.
            Let&apos;s get you back to somewhere familiar.
          </motion.p>

          <motion.div
            className="w-16 h-px bg-border"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />

          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft01FreeIcons} size={16} />
              Back to home
            </Link>

            <span className="hidden sm:block text-muted-foreground/30">·</span>
            {[
              { label: "Projects", href: "/projects" },
              { label: "Designs", href: "/designs" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
