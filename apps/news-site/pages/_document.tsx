import Document, { Html, Head, Main, NextScript } from "next/document";


// const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang={"en"}>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-BBBTLRLJ12"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BBBTLRLJ12');
              </script>
            `
            }}
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}
