import Document, { Head, Html, Main, NextScript } from "next/document";
import { Analytics } from "@bd-first/analytics";

export default class SiteDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={"en"}>
        <Head>
          <link rel="stylesheet" href="/global/css/style.css" />
          <Analytics id={"G-BBBTLRLJ12"} />
        </Head>

        <body className={"text-gray-700 pt-9 sm:pt-10"}>
          <Main />
          <NextScript />
          <script src="/global/js/hc-sticky.js"></script>
          <script src="/global/js/glightbox.min.js"></script>
          <script src="/global/js/splide.min.js"></script>
          <script src="/global/js/splide-extension-video.js"></script>
          <script src="/global/js/scripts.js"></script>
        </body>
      </Html>
    );
  }
}
