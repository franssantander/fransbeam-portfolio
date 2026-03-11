"use client";
import { Skills } from "@/interfaces/index";
import StackIcon from "tech-stack-icons";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

export default function SkillsCard({ icon, name, hasVariant }: Skills) {
  const { isDark } = useResolvedTheme();

  return (
    <div className="group flex flex-col items-center gap-2 w-14">
      <StackIcon
        className="w-7 h-7"
        name={icon}
        variant={hasVariant ? (isDark ? "dark" : "light") : undefined}
      />

      <span className="text-xs text-muted-foreground text-center leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  );
}
