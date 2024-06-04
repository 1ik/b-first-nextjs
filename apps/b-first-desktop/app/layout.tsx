import { Footer } from "@bfirst/components-footer";
import { GTMNoscript, GTMScript } from "@bfirst/gtm";
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
        <GTMScript id="GTM-WD4DNL5P" />
      </head>
      <body>
        {/* ==== Google Tag Manager (noscript) ==== */}
        <GTMNoscript id="GTM-WD4DNL5P" />

        <Provider>
          <main className={`duration-200 dark:bg-dark-400 dark:text-white pb-20`}>{children}</main>
          <footer className="bg-black">
            <Footer className="desktop-container" logo="/img/logo-light.svg" />
          </footer>
          <BackToTop />
        </Provider>
      </body>
    </html>
  );
}
