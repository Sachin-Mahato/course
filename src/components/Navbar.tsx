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
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="All Courses">
          <div className="flex flex-col justify-center items-center gap-2 transparen">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses/kotlin">Kotlin Development</HoveredLink>
            <HoveredLink href="/courses/rust">Rust Programming</HoveredLink>
            <HoveredLink href="/courses/go">Go Programming</HoveredLink>
            <HoveredLink href="/courses/scala">Scala Programming</HoveredLink>
            <HoveredLink href="/courses/elixir">Elixir Development</HoveredLink>
            <HoveredLink href="/courses/lua">Lua Scripting</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
      </Menu>
    </nav>
  );
}

export default Navbar;
