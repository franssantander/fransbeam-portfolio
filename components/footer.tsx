"use client";

import { useResolvedTheme } from "@/hooks/useResolvedTheme";
import Link from "next/link";

export default function Footer() {
  const { isDark } = useResolvedTheme();
  return (
    <p className="text-xs text-muted-foreground mt-10 text-center">
      © {new Date().getFullYear()}{" "}
      <Link
        href="https://github.com/franssantander"
        target="_blank"
        className={`${isDark ? "text-white" : "text-black "} hover:text-muted-foreground font-medium`}
      >
        Francis Santander
      </Link>{" "}
      — Designed & Built with love
    </p>
  );
}
