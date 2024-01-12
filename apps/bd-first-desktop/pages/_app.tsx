/* eslint-disable @typescript-eslint/no-explicit-any */
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { DesktopHeader } from '@bd-first/components/bd-first/desktop/header';

type AppOwnProps = { categories: any };

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
      <main className="app">
        <nav
          className="sticky top-0 z-40"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="px-0">
            <DesktopHeader
              siteLogoUrl=""
              categories={categories ?? []}
              sidebarMenuItems={[]}
            />
          </div>
        </nav>
        <Component {...pageProps} />
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
