import { Footer } from "@bfirst/components-footer";
import { GTMNoscript, gtmString } from "@bfirst/gtm";
import Script from "next/script";
import "../../../libs/fonts/merriweather/index.css";
import "../../../libs/fonts/washington/index.css";
import BackToTop from "./components/BackToTop/BackToTop";
import { Provider } from "./components/ThemeProvider/Provider";
import "./global.css";

export const metadata = {
  title: "Bangladesh First",
  description: "A newspaper that publishes news with authenticity and without fear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ==== Google Tag Manager ==== */}
        <Script id="gtm" strategy="afterInteractive">
          {gtmString("GTM-WD4DNL5P")}
        </Script>
      </head>
      <body>
        {/* ==== Google Tag Manager (noscript) ==== */}
        <GTMNoscript id="GTM-WD4DNL5P" />

        <Provider>
          <main className={`duration-200 dark:bg-dark-400 dark:text-white pb-4`}>{children}</main>
          <footer className="bg-black">
            <Footer className="px-3" logo="/img/logo-light.svg" />
          </footer>
          <BackToTop />
        </Provider>
      </body>
    </html>
  );
}
