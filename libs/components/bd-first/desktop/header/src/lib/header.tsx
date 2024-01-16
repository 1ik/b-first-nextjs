/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import Link from 'next/link';
import { Divider } from '@bd-first/common-ui';
import { Drawer } from '@bd-first/components/common/drawer';

interface IDesktopHeaderProps {
  siteLogoUrl: string;
  categories: object[];
  sidebarMenuItems: object[];
  sidebarMenuItems2: object[];
  socialLinks: object[];
}

export function DesktopHeader({
  siteLogoUrl,
  categories,
  sidebarMenuItems,
  sidebarMenuItems2,
  socialLinks,
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
      {isNavOpen ? (
        <Drawer
          headContent={
            <div className="flex items-center gap-4 py-2 pl-1 pr-3">
              <h6 className="text-[18px] font-normal bg-PrimaryWhite leading-[21.47px]">
                Get Connected
              </h6>
              {socialLinks?.map((s: any, idx: any) => (
                <a href="#">
                  <img
                    key={idx}
                    className="w-4 h-4"
                    src={s?.image ?? ''}
                    alt={s?.name ?? ''}
                  />
                </a>
              ))}
            </div>
          }
          bodyContent={
            <div>
              {sidebarMenuItems?.map((c: any, idx: number) => (
                <NavMenu
                  key={idx}
                  text={c?.name ?? ''}
                  submenu={c?.subCategories ?? []}
                />
              ))}
              <Divider className="my-2" />
              {sidebarMenuItems2?.map((l: any, idx: number) => (
                <NavMenu
                  key={idx}
                  text={l?.name ?? ''}
                  submenu={l?.subMenu ?? []}
                />
              ))}
            </div>
          }
          onClose={() => setIsNavOpen(false)}
        />
      ) : (
        ''
      )}
    </div>
  );
}

// Nav Menus
const NavMenu = ({ text, submenu }: any) => {
  const [isSubMenuOpen, setIsSubmenuOpen] = useState(false);

  // On Toggle Submenu
  const onToggleSubmenu = () => {
    setIsSubmenuOpen((pre) => !pre);
  };
  return (
    <div>
      <div className="flex items-center gap-2 px-3 py-1">
        <button
          className={`text-sm ${isSubMenuOpen ? 'font-medium' : 'font-normal'}`}
          style={{ color: '#000000' }}
        >
          {text}
        </button>
        {submenu && submenu?.length > 0 ? (
          <button onClick={onToggleSubmenu}>
            <img
              className="h-13 w-42.5"
              src={isSubMenuOpen ? '/icons/prev.png' : '/icons/down.png'}
              alt="down"
            />
          </button>
        ) : (
          ''
        )}
      </div>
      {isSubMenuOpen && submenu && submenu?.length > 0 ? (
        <div
          className="flex flex-col items-start gap-2 px-6 py-2"
          style={{ backgroundColor: '#F1F1F1' }}
        >
          {submenu && submenu?.length > 0
            ? submenu?.map((m: any, idx: any) => (
                <button className="text-xs font-normal">{m}</button>
              ))
            : ''}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default DesktopHeader;
