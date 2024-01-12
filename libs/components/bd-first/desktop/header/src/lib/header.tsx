/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Link from 'next/link';
import { Divider } from '@bd-first/common-ui';

interface IDesktopHeaderProps {
  siteLogoUrl: string;
  categories: object[];
  sidebarMenuItems: object[];
}

export function DesktopHeader({
  siteLogoUrl,
  categories,
  sidebarMenuItems,
}: IDesktopHeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={''}>
      <div className="flex items-center justify-between w-full px-24 py-1 bg-PrimaryRed">
        <h6 className="text-xs font-normal text-PrimaryWhite leading-[14px] tracking-[-.3px]">
          {'Sunday, December 30, 2023'}
        </h6>
        <h6 className="text-xs font-normal text-PrimaryWhite leading-[14px] tracking-[-.3px]">
          {'32 Degree Celcius, Dhaka'}
        </h6>
      </div>
      <div className="flex items-end justify-between px-24 py-4">
        <div className="flex items-center gap-1">
          <button onClick={() => setIsNavOpen(true)}>
            <img
              className="w-5 h-5"
              src="/icons/hamburger-icon.png"
              alt="bangladesh-first-site-icon"
            />
          </button>
        </div>
        <div className="h-full">
          <Link href={'/'}>
            <img
              className="h-16 w-65"
              src="/icons/bangladesh-first-logo.png"
              alt="bangladesh-first-site-icon"
            />
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex items-center justify-center gap-2 px-2 py-1 border-[1px] border-SecondaryRed rounded-sm">
            <img src="/icons/user-black.png" alt="login" />
            Login
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-2">
        {categories?.map((c: any, idx: number) => (
          <div
            style={{
              fontFamily: "'Helvetica Neue', 'sans-serif'",
            }}
            className="text-[14px] font-[400] leading-[16.7px] text-SecondaryBlack"
            key={idx}
          >
            <a href={'/' + c?.name}>{c?.name}</a>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
}

export default DesktopHeader;
