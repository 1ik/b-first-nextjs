import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import {Analytics} from "@bd-first/analytics";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bangladesh First</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
