import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTimes, FaYoutube } from "react-icons/fa";

export interface NavbarProps {
  activeLink?: string;
  navList?: any;
  isSticky?: boolean;
  logoMini?: string;
  type?: "navbar" | "sidebar";
  onThemeChange?: any;
  theme?: string;
  showSidebar?: any;
  setshowSidebar?: any;
}

export function Navbar({
  activeLink,
  navList,
  isSticky,
  logoMini,
  type = "navbar",
  onThemeChange,
  showSidebar,
  theme,
  setshowSidebar,
}: NavbarProps) {
  const handleToggleTheme = function () {
    onThemeChange(theme === "light" ? "dark" : "light");
  };

  const [isMounted, setIsMounted] = useState(false);

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
      {/*============== NAVBAR FOR DESKTOP  ==========*/}
      {type === "navbar" ? (
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
      ) : type === "sidebar" ? (
        <>
          {/*============== NAVBAR FOR MOBILE & TAB  ==========*/}
          <div
            className={`py-16 w-[250px] overflow-y-auto flex flex-col items-center text-xl shadow-[5px_0px_10px_0px_rgba(0,0,0,0.2)] dark:shadow-[5px_0px_10px_0px_rgba(0,0,0,0.4)] absolute z-[9999] top-0 left-0 ${
              showSidebar ? "" : "-translate-x-[calc(100%+20px)]"
            } h-[100lvh] duration-300 backdrop-blur bg-white/70 dark:bg-dark-500/80`}
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
              {navList.map((link, index) => (
                <li
                  key={index}
                  className={`relative before:content-[''] before:absolute before:h-0 before:w-[3px] before:bg-accent before:right-0 before:top-1/2 before:-translate-y-1/2 ${
                    activeLink === link.href ? "before:h-full" : ""
                  } hover:before:h-full before:duration-300`}
                >
                  <a className="px-6 py-1 block" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-x-3 sm:gap-x-5 my-3 py-5 border-t border-black/40 justify-center text-xs sm:text-sm w-full dark:border-dark-300">
              <a
                href="https://www.facebook.com/bfirstdotnews"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/bfirstdotnews/"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="https://x.com/bfirstdotnews"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
              >
                <FaXTwitter className="text-white" />
              </a>
              <a
                href="https://www.youtube.com/@bfirstdotnews"
                target="_blank"
                className="bg-black dark:bg-dark-300 p-1.5 sm:p-2 rounded-md"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Navbar;
