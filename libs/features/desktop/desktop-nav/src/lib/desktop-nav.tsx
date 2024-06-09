import { Ads } from "@bfirst/components-ads";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaSearch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useInView } from "react-intersection-observer";

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
  navList;
}

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
  navList,
}: DesktopNavProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { ref, inView } = useInView({
    rootMargin: "-80px",
  });

  const handleToggleTheme = function () {
    onThemeChange(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (inView) {
      setIsSticky(false);
    } else {
      setIsSticky(true);
    }
  }, [inView]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <nav ref={ref} className="flex flex-col gap-y-5">
      <div className="bg-[#f6efef] dark:bg-dark-500">
        <div className="desktop-container flex justify-between items-center">
          <p className="text-sm">{moment().format("dddd, MMMM Do, YYYY")}</p>
          <div className="flex gap-x-10">
            {/* ====== theme toggle button ====== */}
            <div
              onClick={handleToggleTheme}
              className="bg-black dark:bg-dark-300 p-2 self-center rounded-md cursor-pointer"
            >
              <button
                className={`bg-black block p-1 self-center w-3 aspect-square rounded-full duration-500 ${
                  isMounted && theme === "dark"
                    ? "bg-yellow-400"
                    : "bg-transparent shadow-[inset_-3px_-2px_1px_1px_white]"
                } `}
              ></button>
            </div>
            <div className="flex gap-x-1 py-3">
              <a
                href="https://www.facebook.com/bfirstdotnews"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 rounded-md"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/bfirstdotnews/"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 rounded-md"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://x.com/bfirstdotnews"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 rounded-md"
              >
                <FaXTwitter className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@bfirstdotnews"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 rounded-md"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {adsBanner && (
        <div>
          <Ads className="mx-auto" src={adsBanner} alt="Ads" showHeader={false} />
        </div>
      )}
      <div className="desktop-container w-full">
        <div className="flex justify-between items-center">
          <div className="w-80">{adsLeft && <Ads className="hidden" src={adsLeft} alt="Ads" />}</div>
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
          <div className="w-80">{adsRight && <Ads className="hidden" src={adsRight} alt="Ads" />}</div>
        </div>
      </div>

      {/* Navbar */}
      <div className="h-24 relative ">
        <div
          className={`w-full transition-[padding] duration-300 z-[999] ${
            isSticky
              ? "fixed top-0 left-0 bg-white/90 dark:bg-dark-400/90 backdrop-blur shadow-md py-3"
              : "absolute top-1/2 -translate-y-1/2"
          }`}
        >
          <div className="desktop-container flex justify-between items-center">
            <div className="w-9">
              {logoMini && (
                <a href="/">
                  <img
                    className={`w-full duration-300 ${isSticky ? "scale-100" : "scale-0"}`}
                    src={logoMini}
                    alt="Logo"
                  />
                </a>
              )}
            </div>
            <ul className="flex text-[22px] washington-regular">
              {navList.map((link: any, index: number) => (
                <li
                  key={index}
                  className={`relative before:content-[''] before:absolute before:top-1/2 before:h-2/5 before:w-[2px] last:before:w-0 before:bg-[#cccccc] before:right-0 before:-translate-y-1/2 after:content-[''] after:absolute after:h-[3px] ${
                    link.href === activeLink ? "after:w-1/3" : "after:w-0"
                  } after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent hover:after:w-1/3  after:duration-300 group group-hover:scale-y-110 flex items-center`}
                >
                  {link.href ? (
                    <a className="px-5 py-1 block" href={link.href}>
                      {link.name}
                    </a>
                  ) : (
                    <div
                      className={`pl-5 pr-2 py-1 block relative cursor-pointer after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent after:duration-300 after:h-[3px] ${
                        activeLink && link.subList.map((item: any) => item.href).includes(activeLink)
                          ? "after:w-1/3"
                          : ""
                      }`}
                    >
                      {link.name}
                    </div>
                  )}
                  {link.subList && (
                    <>
                      <IoIosArrowDown className="mr-1.5" />
                      <ul
                        className={`absolute z-50 -translate-y-2 rounded-md px-4 py-6 top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-dark-300 shadow-lg shadow-black/20 dark:shadow-black/80 duration-500 origin-top scale-y-0 group-hover:scale-y-110 flex flex-col gap-y-1.5`}
                      >
                        {link.subList.map((list: any) => (
                          <li
                            className={`relative after:content-[''] after:absolute after:h-[3px] ${
                              list.href === activeLink ? "after:w-1/3" : "after:w-0"
                            } after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent hover:after:w-1/3 z after:duration-300`}
                          >
                            <a className="px-5 py-1 block" href={list.href}>
                              {list.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </li>
              ))}
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
