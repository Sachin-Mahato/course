"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <nav
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="All Courses">
          <div className="flex flex-col justify-center items-center gap-2 transparen">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Kotlin Development</HoveredLink>
            <HoveredLink href="/courses">Rust Programming</HoveredLink>
            <HoveredLink href="/courses">Go Programming</HoveredLink>
            <HoveredLink href="/courses">Scala Programming</HoveredLink>
            <HoveredLink href="/courses">Elixir Development</HoveredLink>
            <HoveredLink href="/courses">Lua Scripting</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </nav>
  );
}

export default Navbar;
