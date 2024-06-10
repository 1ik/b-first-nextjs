import { Ads } from "@bfirst/components-ads";
import moment from "moment";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@bfirst/components-navbar";
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
  navList: any;
}

export function DesktopNav({
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
            <a href="/">
              <img className="w-full dark:hidden block" src={logoDark} alt="Logo" />
              <img className="w-full hidden dark:block" src={logoLight} alt="Logo" />
            </a>
          </div>
          <div className="w-80">{adsRight && <Ads className="hidden" src={adsRight} alt="Ads" />}</div>
        </div>
      </div>

      <Navbar activeLink={activeLink} navList={navList} isSticky={isSticky} logoMini={logoMini}/>
    </nav>
  );
}

export default DesktopNav;
