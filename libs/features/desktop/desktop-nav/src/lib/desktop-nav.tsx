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
];

export function DesktopNav({
  adsBanner,
  adsLeft,
  adsRight,
  logoLight,
  logoDark,
  logoMini,
  activeLink,
}: DesktopNavProps) {
  const [isDark, setIsDark] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);

  const handleToggleTheme = function () {
    document.documentElement.classList.toggle("dark");
    setIsDark((cur) => !cur);
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
      { rootMargin: "-50px" }
    );

    observer.observe(navbar);
  }, [setIsSticky]);

  return (
    <nav ref={navRef} className="flex flex-col gap-y-5">
      <div className="bg-[#f6efef]">
        <div className="desktop-container flex justify-between items-center">
          <p>{moment().format("dddd, MMMM Do, YYYY")}</p>
          <div className="flex gap-x-10">
            {/* ====== theme toggle button ====== */}
            <div className="bg-black p-2 self-center rounded-md">
              <button
                onClick={handleToggleTheme}
                className={`bg-black p-2 block cursor-pointer self-center w-5 aspect-square rounded-full duration-500 ${
                  isDark ? "bg-yellow-400" : "bg-transparent shadow-[inset_-7px_-4px_1px_1px_white]"
                } `}
              ></button>
            </div>
            <div className="flex gap-x-1 py-5">
              <a href="#" className="bg-black p-2.5 rounded-md">
                <FaFacebookF className="text-white" />
              </a>
              <a href="#" className="bg-black p-2.5 rounded-md">
                <FaInstagram className="text-white" />
              </a>
              <a href="#" className="bg-black p-2.5 rounded-md">
                <FaXTwitter className="text-white" />
              </a>
              <a href="#" className="bg-black p-2.5 rounded-md">
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
            <a href="/">
              <img className="w-full" src={logoDark} alt="Logo" />
            </a>
          </div>
          <div className="w-80">{adsRight && <img src={adsRight} alt="Ads" />}</div>
        </div>
      </div>

      <div
        className={`bg-white w-full transition-[padding] duration-300 ${
          isSticky ? "fixed top-0 left-0 shadow-md py-3" : "my-10"
        }`}
      >
        <div className="desktop-container flex justify-between items-center">
          <div className="w-8">
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
          <ul className="flex text-[22px]">
            {_links.map((link, index) => (
              <li
                key={index}
                className={`relative before:content-[''] before:absolute before:h-2/5 before:w-[2px] before:bg-[#cccccc] before:right-0 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:h-[3px] ${
                  link.href === activeLink ? "after:w-1/3" : "after:w-0"
                } after:left-1/2 after:bottom-0 after:-translate-x-1/2 after:bg-accent hover:after:w-1/3 z after:duration-300`}
              >
                <a className="px-5 py-1 block" href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
            <li className="px-5 py-1 flex items-center gap-x-1">
              More <IoIosArrowDown />
            </li>
          </ul>
          <button className="w-8 block">
            <FaSearch />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNav;