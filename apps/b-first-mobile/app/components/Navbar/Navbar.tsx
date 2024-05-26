"use client";

import { MobileNav } from "@bfirst/components-mobile-nav";
import { useTheme } from "next-themes";

export default function Navbar({activeLink}: {activeLink?:string}) {
  const { theme, setTheme } = useTheme();
  return (
    <MobileNav activeLink={activeLink} theme={theme} onThemeChange={setTheme} logoLight="/img/logo-light.svg" logoDark="/img/logo-dark.svg" />
  );
}
