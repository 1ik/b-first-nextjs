import { useState } from 'react';
import { Divider } from '../Divider';

const socialLinks = [
  { name: 'facebook', image: '/icons/fb.png' },
  { name: 'youtube', image: '/icons/yt.png' },
  { name: 'linkedin', image: '/icons/linkedin.png' },
];

const categories = [
  { key: 1, name: 'Home' },
  {
    key: 2,
    name: 'Bangladesh',
    subCategories: ['District News', 'Bangladesh Election', 'Politics'],
  },
  { key: 2, name: 'Economy' },
  {
    key: 2,
    name: 'Sports',
    subCategories: ['Cricket', 'Football', 'Badminton'],
  },
  { key: 2, name: 'Entertainment' },
  { key: 2, name: 'Culture' },
  { key: 2, name: 'Life and Living' },
  { key: 2, name: 'Tech & Startup' },
  { key: 2, name: 'Multimedia' },
  { key: 2, name: 'Feature' },
];

const links = [
  {
    key: 2,
    name: 'About Us',
    subMenu: ['Our Team', 'Others'],
  },
  { key: 2, name: 'Contact Us' },
  { key: 2, name: 'Sitemap' },
  { key: 2, name: 'Advertisement' },
  { key: 2, name: 'Privacy Policy' },
];

export const Drawer = ({ onClose }: any) => (
  <div className="flex items-center justify-center min-h-screen min-w-screen">
    <div>
      <div className="fixed inset-0 z-50 overflow-hidden">
        <section className="absolute inset-y-0 right-0 flex max-w-full">
          <div className="w-screen">
            <div className="flex flex-col h-full py-4 bg-white shadow-xl">
              <div className="flex items-center justify-between px-3">
                <button>
                  <img
                    className="h-13 w-42.5"
                    src="/icons/bangladesh-first-logo.png"
                    alt="bangladesh-first-site-icon"
                  />
                </button>
                <button onClick={onClose}>
                  <img src="/icons/close.png" alt="close" className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-0">
                <Divider className="mt-2" />
                <div className="flex items-center gap-4 px-3 py-1">
                  <h6
                    className="text-base font-normal"
                    style={{ color: '#000000' }}
                  >
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
                <Divider className="mt-0 mb-2" />
                {categories?.map((c: any, idx: number) => (
                  <NavMenu
                    key={idx}
                    text={c?.name ?? ''}
                    submenu={c?.subCategories ?? []}
                  />
                ))}
                <Divider className="my-2" />
                {links?.map((l: any, idx: number) => (
                  <NavMenu
                    key={idx}
                    text={l?.name ?? ''}
                    submenu={l?.subMenu ?? []}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

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
