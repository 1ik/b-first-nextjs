/* eslint-disable-next-line */
import Head from "next/head";
import Script from "next/script";

export interface AnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export function Analytics(props: AnalyticsProps) {
  const src = `https://www.googletagmanager.com/gtag/js?id=${props.GA_MEASUREMENT_ID}`;
  return (
    <Head>
      <Script key={'GA_MEASUREMENT_ID'} src={src} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${props.GA_MEASUREMENT_ID}');
        `}
      </Script>
    </Head>
  );
}

export default Analytics;
