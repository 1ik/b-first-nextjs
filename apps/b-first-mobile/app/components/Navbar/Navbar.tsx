"use client";

import { MobileNav } from "@bfirst/components-mobile-nav";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  return (
    <MobileNav theme={theme} onThemeChange={setTheme} logoLight="/img/logo-light.svg" logoDark="/img/logo-dark.svg" />
  );
}
