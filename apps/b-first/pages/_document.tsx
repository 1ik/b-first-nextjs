import Document, { Html, Head, Main, NextScript } from "next/document";
import {Analytics} from "@bd-first/analytics";

export default class SiteDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={"en"}>
        <Head>
          <Analytics id={'G-BBBTLRLJ12'} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
