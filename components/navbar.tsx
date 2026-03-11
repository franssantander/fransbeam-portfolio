"use client";
import { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/frans-dark-logo.svg";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun01FreeIcons } from "@hugeicons/core-free-icons";
import { Button, Sheet, SheetContent, SheetTrigger, SheetClose } from "./ui";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Designs", href: "#designs" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const subscribe = () => () => {};

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  if (!mounted) return <div className="h-[65px] w-full" />;

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border bg-background/80">
      <div className="w-full flex items-center justify-between px-6 md:px-10 h-[65px] max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            alt="Frans Logo"
            width={36}
            height={36}
            loading="eager"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md hover:bg-accent transition-colors duration-150"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
          >
            <HugeiconsIcon
              size={18}
              icon={theme === "light" ? Moon02Icon : Sun01FreeIcons}
            />
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="lg:hidden rounded-full text-xs px-4"
              >
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 flex flex-col pt-14 px-6"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <SheetClose asChild>
                      <Link
                        href={href}
                        className="block text-sm font-medium text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-md hover:bg-accent transition-colors duration-150"
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>

              {/* Theme toggle inside drawer */}
              <div className="mt-auto border-t border-border pt-6 pb-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-sm text-muted-foreground"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  <HugeiconsIcon
                    size={16}
                    icon={theme === "light" ? Moon02Icon : Sun01FreeIcons}
                  />
                  {theme === "light" ? "Dark mode" : "Light mode"}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
