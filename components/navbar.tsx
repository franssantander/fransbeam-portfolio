"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkLogo from "../assets/frans-darklogo.svg";
import WhiteLogo from "../assets/frans-whitelogo.svg";
import { HugeiconsIcon } from "@hugeicons/react";
import { Moon02Icon, Sun01FreeIcons } from "@hugeicons/core-free-icons";
import {
  Button,
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "./ui";
import { useTheme } from "next-themes";
import NavLinks from "@/data/NAV_LINKS.json";
import { useResolvedTheme } from "@/hooks/useResolvedTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isDark, isMounted } = useResolvedTheme();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-border bg-background/80">
      <div className="w-full flex items-center justify-between px-6 md:px-10 h-[65px] max-w-7xl mx-auto">
        <Link href="/">
          {!isMounted ? (
            <div className="w-9 h-9" />
          ) : (
            <Image
              src={isDark ? WhiteLogo : DarkLogo}
              alt="Frans Logo"
              width={36}
              height={36}
              loading="eager"
            />
          )}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {NavLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`relative text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-150
                  ${
                    isActive(href)
                      ? "text-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
              >
                {label}
                {/* Active underline dot */}
                {isActive(href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[6px] h-1 w-1 rounded-full bg-foreground" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
          >
            {isMounted && (
              <HugeiconsIcon
                size={18}
                icon={theme === "light" ? Moon02Icon : Sun01FreeIcons}
              />
            )}
          </Button>

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
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <ul className="flex flex-col gap-1 mt-4">
                {NavLinks.map(({ label, href }) => (
                  <li key={label}>
                    <SheetClose asChild>
                      <Link
                        href={href}
                        className={`flex items-center justify-between text-sm font-medium px-3 py-2.5 rounded-md transition-colors duration-150
                          ${
                            isActive(href)
                              ? "text-foreground bg-accent"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent"
                          }`}
                      >
                        {label}
                        {isActive(href) && (
                          <span className="h-1.5 w-1.5 rounded-full bg-foreground shrink-0" />
                        )}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-border pt-6 pb-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-3 text-sm text-muted-foreground"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {isMounted && (
                    <HugeiconsIcon
                      size={16}
                      icon={theme === "light" ? Moon02Icon : Sun01FreeIcons}
                    />
                  )}
                  {isMounted &&
                    (theme === "light" ? "Dark mode" : "Light mode")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
