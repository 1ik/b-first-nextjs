"use client";

import { DesktopNav } from "@bfirst/components-desktop-nav";
import { useTheme } from "next-themes";

export default function Navbar({ activeLink }: { activeLink?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <DesktopNav
      activeLink={activeLink}
      theme={theme}
      onThemeChange={setTheme}
      adsRight="/ads/ads_hader_right.png"
      logoLight="/img/logo-light.svg"
      logoDark="/img/logo-dark.svg"
      adsLeft="/ads/ads_hader_left.png"
      logoMini="/img/logo-mini.png"
    />
  );
}
