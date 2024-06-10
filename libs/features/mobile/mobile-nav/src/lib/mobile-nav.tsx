import { Navbar } from "@bfirst/components-navbar";
import moment from "moment";
import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

export interface MobileNavProps {
  logoLight?: string;
  logoDark?: string;
  activeLink?: string;
  theme?: string;
  onThemeChange?: any;
  navList: any;
  Link?: any;
}

export function MobileNav({ Link, logoLight, logoDark, activeLink, theme, onThemeChange, navList }: MobileNavProps) {
  const [showSidebar, setshowSidebar] = useState(false);

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
        <Navbar
          navList={navList}
          showSidebar={showSidebar}
          setshowSidebar={setshowSidebar}
          theme={theme}
          type="sidebar"
          activeLink={activeLink}
          onThemeChange={onThemeChange}
        />
      </nav>
      {showSidebar && (
        <div onClick={() => setshowSidebar(false)} className="fixed z-[99] h-full w-full top-0 left-0"></div>
      )}
    </>
  );
}

export default MobileNav;
