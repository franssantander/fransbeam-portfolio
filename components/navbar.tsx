"use client";
import Image from "next/image";
import Logo from "../assets/frans-dark-logo.svg";
import { HugeiconsIcon } from "@hugeicons/react";
import { More01Icon, Moon02Icon } from "@hugeicons/core-free-icons";
import { Button } from "./ui";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between p-4 max-w-7xl mx-auto">
      <Image
        src={Logo}
        alt="Frans Logo"
        width={43}
        height={43}
        loading="eager"
      />

      <ul className="flex items-center gap-7 text-base lg:flex hidden">
        <li>Home</li>
        <li>Projects</li>
        <li>Designs</li>
        <li>Experiences</li>
        <li>Skills</li>
        <li>Blog</li>
      </ul>
      <div>
        <Button className="lg:hidden" size="icon-lg" variant="outline">
          <HugeiconsIcon size={34} icon={More01Icon} />
        </Button>
        <Button className="hidden md:flex" size="icon-lg" variant="outline">
          <HugeiconsIcon size={34} icon={Moon02Icon} />
        </Button>
      </div>
    </div>
  );
}
