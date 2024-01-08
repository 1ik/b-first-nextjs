/* eslint-disable @typescript-eslint/no-explicit-any */
import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NewsSiteRootLayout } from '@bd-first/news-site-ui';
import { useRouter } from "next/router";
import { useEffect } from "react";
import {pageview} from "./lib/gtag";

type AppOwnProps = { categories: any };

declare global {
  interface Window {
    gtag: any;
  }
}

function CustomApp({
  Component,
  pageProps,
  categories,
}: AppProps & AppOwnProps) {

  return (
    <main className="app">
      <NewsSiteRootLayout categories={categories}>
        <Component {...pageProps} />
      </NewsSiteRootLayout>
    </main>
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
