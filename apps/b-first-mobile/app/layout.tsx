import { Footer } from "@bfirst/components-footer";
import { Montserrat } from "@next/font/google";
import localFont from "@next/font/local";
import BackToTop from "./components/BackToTop/BackToTop";
import { Provider } from "./components/ThemeProvider/Provider";
import "./global.css";

const washingtonFont = localFont({ src: "../public/fonts/washington.otf" });
const montserratFont = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
  title: "Bangladesh First",
  description: "A newspaper that publishes news with authenticity and without fear.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main
            className={`${washingtonFont.className} ${montserratFont.variable} duration-200 dark:bg-dark-400 dark:text-white pb-20`}
          >
            {children}
          </main>
          <footer className="bg-black">
            <Footer className="px-3" logo="/img/logo-light.svg" />
          </footer>
          <BackToTop />
        </Provider>
      </body>
    </html>
  );
}