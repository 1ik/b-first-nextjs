"use client";

import { DesktopNav } from "@bfirst/components-desktop-nav";
import { useTheme } from "next-themes";

export default function Navbar({ activeLink }: { activeLink?: string }) {
  const { theme, setTheme } = useTheme();
  const navList = [
    {
      name: "Bangladesh",
      href: "/bangladesh",
    },
    {
      name: "World",
      href: "/world",
    },
    {
      name: "Economy",
      href: "/economy",
    },
    {
      name: "Feature",
      href: "/feature",
    },
    {
      name: "Sports",
      href: "/sports",
    },
    {
      name: "Tech",
      href: "/tech",
    },
    {
      name: "Entertainment",
      href: "/entertainment",
    },
    {
      name: "More",
      href: "",
      subList: [
        {
          name: "Lifestyle",
          href: "/lifestyle",
        },
        {
          name: "Education",
          href: "/education",
        },
        {
          name: "Interview",
          href: "/interview",
        },
        {
          name: "Corporates",
          href: "/corporates",
        },
        {
          name: "Politics",
          href: "/politics",
        },
      ],
    },
  ];
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
      navList={navList}
    />
  );
}
