/* eslint-disable-next-line */
import Head from "next/head";
import Script from "next/script";

export interface AnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export function Analytics(props: AnalyticsProps) {
  const src = `https://www.googletagmanager.com/gtag/js?id=${props.GA_MEASUREMENT_ID}`;
  return (
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=`}
    />
  );
}

export default Analytics;
