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

const organizationJsonLd = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "Bangladesh First",
  description:
    "Find the latest breaking news and top stories on Politics, Sports, Entertainment, Arts, Business and Tech news. Visit Bfirst.news & get all the latest news in Bangladesh.",
  legalName: "Bangladesh First",
  url: "https://bfirst.news/",
  logo: "https://bfirst.news/img/logo-dark.svg",
  foundingDate: "2024",
  founders: [
    {
      "@type": "Person",
      name: "Bangladesh First",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Level 12, 115 Kazi Nazrul Islam Avenue",
    addressLocality: "Bangla Motor",
    addressRegion: "Dhaka",
    postalCode: "1000",
    addressCountry: "Bangladesh",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "(+880) 961 332 2782",
    email: "editor@bangladeshfirst.com",
  },
  sameAs: [
    "https://www.facebook.com/bfirstdotnews",
    "https://www.instagram.com/bfirstdotnews/",
    "https://x.com/bfirstdotnews",
    "https://www.threads.net/@bfirstdotnews",
    "https://www.youtube.com/channel/UCKv8bP1Ewcai3Z53v88pPSw",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ==== Google Tag Manager ==== */}
        <Script id="gtm" strategy="afterInteractive">
          {gtmString("GTM-WD4DNL5P")}
        </Script>

        {/* ===== organization schema markup ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        ></script>
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
