"use client";

import { DesktopNav } from "@bfirst/components-desktop-nav";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <DesktopNav
      theme={theme}
      onThemeChange={setTheme}
      adsRight="/ads/ads_hader_right.png"
      logoLight="/img/logo-light.svg"
      logoDark="/img/logo-dark.svg"
      adsLeft="/ads/ads_hader_left.png"
      adsBanner="/ads/banner_ibbl.gif"
      logoMini="/img/logo-mini.png"
    />
  );
}
