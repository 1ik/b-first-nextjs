import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaSearch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

/* eslint-disable-next-line */
export interface DesktopNavProps {
  adsLeft?: string;
  adsRight?: string;
  logoLight?: string;
  logoDark?: string;
  adsBanner?: string;
  activeLink?: string;
  logoMini?: string;
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
    name: "Business",
    href: "/business",
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
    name: "Economy",
    href: "/economy",
  },
  {
    name: "Politics",
    href: "/politics",
  },
];

export function DesktopNav({
  Link,
  adsBanner,
  adsLeft,
  adsRight,
  logoLight,
  logoDark,
  logoMini,
  activeLink,
  theme,
  onThemeChange,
}: DesktopNavProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const handleToggleTheme = function () {
    onThemeChange(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const navbar = navRef.current;
    if (!navbar) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        });
      },
      { rootMargin: "-80px" }
    );

    observer.observe(navbar);
  }, [setIsSticky]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav ref={navRef} className="flex flex-col gap-y-5">
      <div className="bg-[#f6efef] dark:bg-dark-500">
        <div className="desktop-container flex justify-between items-center">
          <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
          <div className="flex gap-x-10">
            {/* ====== theme toggle button ====== */}
            <div
              onClick={handleToggleTheme}
              className="bg-black dark:bg-dark-300 p-2 self-center rounded-md cursor-pointer"
            >
              <button
                className={`bg-black p-2 block  self-center w-5 aspect-square rounded-full duration-500 ${
                  isMounted && theme === "dark"
                    ? "bg-yellow-400"
                    : "bg-transparent shadow-[inset_-7px_-4px_1px_1px_white]"
                } `}
              ></button>
            </div>
            <div className="flex gap-x-1 py-5">
              <a href="#" className="bg-black dark:bg-dark-300 p-2.5 rounded-md">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-black dark:bg-dark-300 p-2.5 rounded-md">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="bg-black dark:bg-dark-300 p-2.5 rounded-md">
                <FaXTwitter className="text-white" />
              </a>
              <a href="#" className="bg-black dark:bg-dark-300 p-2.5 rounded-md">
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {adsBanner && (
        <div>
          <img className="mx-auto" src={adsBanner} alt="Ads" />
        </div>
      )}
      <div className="desktop-container w-full">
        <div className="flex justify-between items-center">
          <div className="w-80">{adsLeft && <img src={adsLeft} alt="Ads" />}</div>
          <div className="w-80">
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
          <div className="w-80">{adsRight && <img src={adsRight} alt="Ads" />}</div>
        </div>
      </div>

      <div className="h-24 relative ">
        <div
          className={`w-full transition-[padding] duration-300 ${
            isSticky
              ? "fixed top-0 left-0 bg-white/90 dark:bg-dark-400/90 backdrop-blur shadow-md py-3 z-[999]"
              : "absolute top-1/2 -translate-y-1/2"
          }`}
        >
          <div className="desktop-container flex justify-between items-center">
            <div className="w-9">
              {logoMini &&
                (Link ? (
                  <Link href="/">
                    <img
                      className={`w-full duration-300 ${isSticky ? "scale-100" : "scale-0"}`}
                      src={logoMini}
                      alt="Logo"
                    />
                  </Link>
                ) : (
                  <a href="/">
                    <img
                      className={`w-full duration-300 ${isSticky ? "scale-100" : "scale-0"}`}
                      src={logoMini}
                      alt="Logo"
                    />
                  </a>
                ))}
            </div>
            <ul className="flex text-[22px]">
              {_links.slice(0, 7).map((link, index) => (
                <li
                  key={index}
                  className={`relative before:content-[''] before:absolute before:h-2/5 before:w-[2px] before:bg-[#cccccc] before:right-0 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:h-[3px] ${
                    link.href === activeLink ? "after:w-1/3" : "after:w-0"
                  } after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent hover:after:w-1/3 z after:duration-300`}
                >
                  {Link ? (
                    <Link className="px-5 py-1 block" href={link.href}>
                      {link.name}
                    </Link>
                  ) : (
                    <a className="px-5 py-1 block" href={link.href}>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
              <li
                suppressHydrationWarning
                className={`relative px-5 py-1 flex items-center gap-x-1 group cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent after:duration-300 after:h-[3px] ${
                  activeLink &&
                  _links
                    .slice(8)
                    .map((item) => item.href)
                    .includes(activeLink)
                    ? "after:w-1/3"
                    : ""
                }`}
              >
                More <IoIosArrowDown />
                <ul
                  className={`px-4 z-[100] -translate-y-2 rounded-md py-6 absolute top-10 -right-6 ${
                    isSticky ? "bg-white/90 dark:bg-dark-400/90 backdrop-blur" : "bg-white dark:bg-dark-400"
                  } shadow-lg shadow-black/20 dark:shadow-black/80 duration-500 origin-top scale-y-0 group-hover:scale-y-110 flex flex-col gap-y-1.5`}
                >
                  {_links.slice(8).map((link, index) => (
                    <li
                      key={index}
                      className={`relative after:absolute after:h-[3px] ${
                        link.href === activeLink ? "after:w-1/3" : "after:w-0"
                      } after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent hover:after:w-1/3 z after:duration-300 last:mb-2`}
                    >
                      {Link ? (
                        <Link className="px-5 py-1 block" href={link.href}>
                          {link.name}
                        </Link>
                      ) : (
                        <a className="px-5 py-1 block" href={link.href}>
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <button className="w-9 block text-2xl">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;
