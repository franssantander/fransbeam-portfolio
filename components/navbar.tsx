"use client";
import { useState, useEffect } from "react"; // Added for hydration fix
import Image from "next/image";
import Logo from "../assets/frans-dark-logo.svg";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  More01Icon,
  Moon02Icon,
  Sun01FreeIcons,
} from "@hugeicons/core-free-icons";
import { Button } from "./ui";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[75px] w-full" />;
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="w-full flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Image
          src={Logo}
          alt="Frans Logo"
          width={43}
          height={43}
          loading="eager"
        />

        <ul className="flex items-center gap-7 text-sm font-medium lg:flex hidden">
          <li className="hover:text-neutral-500 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-neutral-500 cursor-pointer transition-colors">
            Projects
          </li>
          <li className="hover:text-neutral-500 cursor-pointer transition-colors">
            Designs
          </li>
          <li className="hover:text-neutral-500 cursor-pointer transition-colors">
            Experiences
          </li>
          <li className="hover:text-neutral-500 cursor-pointer transition-colors">
            Skills
          </li>
          <li className="hover:text-neutral-500 cursor-pointer transition-colors">
            Blog
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Button
            className="hidden md:flex"
            size="icon"
            variant="outline"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <HugeiconsIcon
              size={24}
              icon={theme === "light" ? Moon02Icon : Sun01FreeIcons}
            />
          </Button>

          <Button className="lg:hidden" size="icon" variant="outline">
            <HugeiconsIcon size={24} icon={More01Icon} />
          </Button>
        </div>
      </div>
    </nav>
  );
}
