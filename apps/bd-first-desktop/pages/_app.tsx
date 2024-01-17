/* eslint-disable @typescript-eslint/no-explicit-any */
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { DesktopHeader } from '@bd-first/components/bd-first/desktop/header';
import { Footer } from '@bd-first/components/bd-first/desktop/footer';

type AppOwnProps = { categories: any };

const socialLinks = [
  { name: 'facebook', image: '/icons/fb.png' },
  { name: 'youtube', image: '/icons/yt.png' },
  { name: 'linkedin', image: '/icons/linkedin.png' },
];

const newsCategories = [
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

const siteLinks = [
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

function CustomApp({
  Component,
  pageProps,
  categories,
}: AppProps & AppOwnProps) {
  return (
    <>
      <Head>
        <title>BangladeshFirst</title>
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.cdnfonts.com/css/helvetica-neue-55"
        rel="stylesheet"
      ></link>
      <main className="app">
        <nav className="sticky top-0 z-40 bg-PrimaryWhite">
          <div className="px-0">
            <DesktopHeader
              siteLogoUrl="/icons/bangladesh-first-logo.png"
              categories={categories ?? []}
              sidebarMenuItems={newsCategories}
              sidebarMenuItems2={siteLinks}
              socialLinks={socialLinks}
            />
          </div>
        </nav>
        <Component {...pageProps} />
        <Footer
          siteLogoUrl="/icons/bangladesh-first-logo.png"
          siteUrl={'www.bangladeshfirst.com'}
        />
      </main>
    </>
  );
}

CustomApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  const res = await fetch('https://panel.bangladeshfirst.com/api/categories');
  const categories = await res.json();

  return { ...ctx, categories: categories };
};

export default CustomApp;
