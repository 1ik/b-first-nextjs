"use client";

import { MobileNav } from "@bfirst/components-mobile-nav";
import { useTheme } from "next-themes";
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
];
export default function Navbar({activeLink}: {activeLink?:string}) {
  const { theme, setTheme } = useTheme();
  return (
    <MobileNav activeLink={activeLink} theme={theme} navList={navList} onThemeChange={setTheme} logoLight="/img/logo-light.svg" logoDark="/img/logo-dark.svg" />
  );
}
