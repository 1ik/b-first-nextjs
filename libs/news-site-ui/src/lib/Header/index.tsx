// Header of Site
import { useState } from 'react';
import dynamic from 'next/dynamic';

// import { Drawer } from '@bd-first/common-ui';
const Drawer: any = dynamic(
  () => import('@bd-first/common-ui').then(({ Drawer }: any) => Drawer),
  {
    loading: () => <span></span>,
  }
);

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-0">
      <button>
        <img
          className="h-13 w-42.5"
          src="/icons/bangladesh-first-logo.png"
          alt="bangladesh-first-site-icon"
        />
      </button>
      <button onClick={() => setIsNavOpen(true)}>
        <img
          className="w-5 h-5"
          src="/icons/hamburger-icon.png"
          alt="bangladesh-first-site-icon"
        />
      </button>

      {isNavOpen ? <Drawer onClose={() => setIsNavOpen(false)} /> : ''}
    </div>
  );
};
