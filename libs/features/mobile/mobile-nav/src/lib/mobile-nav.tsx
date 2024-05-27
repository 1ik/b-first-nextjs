import moment from "moment";
import { useEffect, useState } from "react";
import { FaBars, FaFacebookF, FaInstagram, FaSearch, FaTimes, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* eslint-disable-next-line */
export interface MobileNavProps {
  logoLight?: string;
  logoDark?: string;
  activeLink?: string;
  theme?: string;
  onThemeChange?: any;
  Link?: any;
}

const _links = [
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

export function MobileNav({ Link, logoLight, logoDark, activeLink, theme, onThemeChange }: MobileNavProps) {
  const [showSidebar, setshowSidebar] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleToggleTheme = function () {
    onThemeChange(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const document = window.document.documentElement;

    if (showSidebar) {
      document.style.overflow = "hidden";
    } else {
      document.style.overflow = "auto";
    }
  }, [showSidebar]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <nav className="sticky top-0 left-0 w-full bg-white dark:bg-dark-400 px-3 py-5 shadow-md border-b dark:border-dark-300 z-[999]">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-3 sm:gap-x-5 text-xl">
            <button onClick={() => setshowSidebar((cur) => !cur)}>
              <FaBars />
            </button>
            <button>
              <FaSearch />
            </button>
          </div>
          <div className="w-[150px] sm:w-[220px] mx-auto">
            {Link ? (
              <Link href="/">
                <img className="w-full dark:hidden block" src={logoDark} alt="Logo" />
                <img className="w-full hidden dark:block" src={logoLight} alt="Logo" />
              </Link>
            ) : (
              <a href="/">
                <img className="w-full dark:hidden block" src={logoDark} alt="Logo" />
                <img className="w-full hidden dark:block" src={logoLight} alt="Logo" />
              </a>
            )}
          </div>
          <div className="text-end">
            <p className="text-[12px] sm:text-[14px]">{moment().format("MMMM Do, YYYY")}</p>
          </div>
        </div>
        <div
          className={`py-16 w-[250px] overflow-y-auto flex flex-col items-center text-xl shadow-[5px_0px_10px_0px_rgba(0,0,0,0.2)] dark:shadow-[5px_0px_10px_0px_rgba(0,0,0,0.4)] absolute z-[9999] top-0 left-0 ${
            showSidebar ? "" : "-translate-x-[calc(100%+20px)]"
          } h-[100svh] duration-300 backdrop-blur bg-white/70 dark:bg-dark-500/80`}
        >
          {/* need to change theme toglle buttons position */}
          <button
            onClick={handleToggleTheme}
            className="bg-black absolute top-3 left-4 dark:bg-dark-300 p-1.5 self-center rounded-md cursor-pointer"
          >
            <span
              className={`bg-black p-2 block self-center w-4 aspect-square rounded-full duration-500 ${
                isMounted && theme === "dark"
                  ? "bg-yellow-400"
                  : "bg-transparent shadow-[inset_-3px_-2px_0px_1px_white]"
              } `}
            ></span>
          </button>
          <button onClick={() => setshowSidebar(false)} className="absolute top-4 right-4 text-2xl">
            <FaTimes />
          </button>
          <ul className="flex flex-col gap-y-1 w-full washington-regular">
            {_links.map((link, index) => (
              <li
                key={index}
                className={`relative before:content-[''] before:absolute before:h-0 before:w-[3px] before:bg-accent before:right-0 before:top-1/2 before:-translate-y-1/2 ${
                  activeLink === link.href ? "before:h-full" : ""
                } hover:before:h-full before:duration-300`}
              >
                {Link ? (
                  <Link className="px-6 py-1 block" href={link.href}>
                    {link.name}
                  </Link>
                ) : (
                  <a className="px-6 py-1 block" href={link.href}>
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="flex gap-x-3 sm:gap-x-5 my-3 py-5 border-t border-black/40 justify-center text-xs sm:text-sm w-full dark:border-dark-300">
            <a
              href="https://www.facebook.com/Bangladeshfirst.news"
              target="_blank"
              className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/bdfirstnews"
              target="_blank"
              className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="https://x.com/BFirstnews"
              target="_blank"
              className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
            >
              <FaXTwitter className="text-white" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCKv8bP1Ewcai3Z53v88pPSw"
              target="_blank"
              className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
            >
              <FaYoutube className="text-white" />
            </a>
          </div>
        </div>
      </nav>
      {showSidebar && (
        <div onClick={() => setshowSidebar(false)} className="fixed z-[99] h-full w-full top-0 left-0"></div>
      )}
    </>
  );
}

export default MobileNav;
