// Header of Site
import dynamic from 'next/dynamic';
import { useState } from 'react';

// import { Drawer } from '@bd-first/common-ui';
const Drawer: any = dynamic(
  () => import('@bd-first/common-ui').then(({ Drawer }: any) => Drawer),
  {
    loading: () => <span></span>,
  }
);

import Link from 'next/link';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-between py-0">
      <Link href={'/'}>
        <img
          className="h-13 w-42.5"
          src="/icons/bangladesh-first-logo.png"
          alt="bangladesh-first-site-icon"
        />
      </Link>
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
