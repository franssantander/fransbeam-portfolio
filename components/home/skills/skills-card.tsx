"use client";
import { Skills } from "@/interfaces/index";
import StackIcon from "tech-stack-icons";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

export default function SkillsCard({
  icon,
  name,
  category,
  hasVariant,
}: Skills) {
  const { isDark } = useResolvedTheme();
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      <StackIcon
        className="w-16 h-16"
        name={icon}
        variant={hasVariant ? (isDark ? "dark" : "light") : undefined}
      />
      <div>
        <h1 className="font-bold text-2xl">{name}</h1>
        <h1 className="text-neutral-400 font-medium">{category}</h1>
      </div>
    </div>
  );
}
