// Header of Site

import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-0">
      <Link href={'/'}>
        <img
          className="h-13 w-42.5"
          src="/icons/bangladesh-first-logo.png"
          alt="bangladesh-first-site-icon"
        />
      </Link>
      {/* <img
        className="w-5 h-5"
        src="/icons/hamburger-icon.png"
        alt="bangladesh-first-site-icon"
      /> */}
    </div>
  );
};
