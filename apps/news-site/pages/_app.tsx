import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NewsSiteRootLayout } from '@bd-first/news-site-ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to news-site!</title>
      </Head>
      <main className="app">
        <NewsSiteRootLayout>
          <Component {...pageProps} />
        </NewsSiteRootLayout>
      </main>
    </>
  );
}

export default CustomApp;
