import BackToTop from "apps/b-first/components/BackToTop/BackToTop";
import BlockNews from "apps/b-first/components/BlockNews/BlockNews";
import CardCaption from "apps/b-first/components/CardCaption/CardCaption";
import Footer from "apps/b-first/components/Footer/Footer";
import Header from "apps/b-first/components/Header/Header";
import MobileMenu from "apps/b-first/components/MobileMenu/MobileMenu";
import { dateFormat } from "apps/b-first/date_format";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { getImageUrl } from "../../../image_utils";
import { newsUrl } from "../../../util";

export function BreadCrumb({ category }: any) {
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href={`/${category}`}
              className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
            >
              {category}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export function Index({ news, categoryNews, latestNews, featured }: any) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  function copyToClipboard() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  }

  return (
    <>
      <Head>
        <meta property="og:image" content={getImageUrl(news.meta.featured_image, 1600, 900)} />
        <meta property="og:title" content={news?.title} />
        <meta property="og:description" content={news.meta.intro} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://bangladeshfirst.com${router.asPath}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://bangladeshfirst.com${newsUrl(news)}`} />
      </Head>
      <Header category={news?.categories[0].name} />
      <MobileMenu />
      <main id="content">
        <div className="bg-white mt-10">
          <div className="md-container xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-col flex-wrap">
              <div className=" mx-auto flex flex-row flex-wrap">
                {/*left*/}
                <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden pr-6">
                  <BreadCrumb category={news?.categories[0].name} />

                  <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mb-6">
                    {news?.title}
                  </h1>
                  <p>{news.meta.intro}</p>

                  <div className="news-meta border-1 border-b my-4 pb-3">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-semibold">{news.authors[0].name}</p>
                        <p suppressHydrationWarning={true} className="font-light text-sm">
                          {dateFormat(news.created_at)}
                        </p>
                      </div>
                      <div className="text-xl flex items-center gap-6">
                        <FacebookShareButton url={`https://bangladeshfirst.com${router.asPath}`}>
                          <FaFacebookF className="hover:text-black text-blue-600" />
                        </FacebookShareButton>
                        <WhatsappShareButton url={`https://bangladeshfirst.com${router.asPath}`}>
                          <FaWhatsapp className="hover:text-black text-lime-500"></FaWhatsapp>
                        </WhatsappShareButton>
                        {copied ? (
                          <span className="text-sm">Copied!</span>
                        ) : (
                          <button onClick={copyToClipboard}>
                            <MdContentCopy title="Copy to clipboard" className="hover:text-black text-red-600" />
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm italic pt-7">{news.meta.headline}</p>
                  </div>

                  <div className="max-w-4xl pb-6">
                    <CardCaption item={news} />
                  </div>
                  <div className="detail block mt-4 lg:pr-12">
                    <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
                  </div>
                  <div className="w-full border p-6">
                    <img src="/img/ads/banner_ibbl.gif" alt="Ad" />
                  </div>
                  <div className="w-full block flex flex-col border-b my-6">
                    <BlockNews items={latestNews.data.slice(0, 6)} title={"Featured"} showAd={false} />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-shrink max-w-full w-full lg:w-1/3 pl-3 lg:pl-8 lg:pb-8 order-last bg-gray-50">
                  <div className="flex justify-center md:justify-start mt-3">
                    <img src="/img/ads/SIBL_Profit_300x250.gif" alt="asdf" />
                  </div>

                  <h2 className="text-xl font-normal pb-6 pt-6">More From {news.categories[0].name}</h2>
                  <div className="flex flex-col gap-4 pr-6">
                    {categoryNews?.data
                      ?.filter((m: any) => m.id != news.id)
                      .slice(0, 5)
                      .map((n: any, idx: any) => (
                        <div key={idx} className="flex flex-col border-b pb-2 hover:bg-gray-50">
                          <a href={newsUrl(n)} className="hover:bg-gray-100">
                            <h4 className="font-extrabold text-xl">{n.title}</h4>
                            <p className="font-light ">{n.meta.headline}</p>
                          </a>
                        </div>
                      ))}
                  </div>
                  <div className="mt-5"></div>
                  <div className="flex justify-center md:justify-start">
                    <img src="/img/ads/ibbl.gif" alt="asdf" />
                  </div>
                  <h2 className="text-xl font-normal pb-6 pt-6">Latest</h2>
                  <div className="flex flex-col gap-4 pr-6">
                    {latestNews.data
                      ?.filter((m: any) => m.id != news.id)
                      .splice(0, 10)
                      .map((n: any, idx: any) => (
                        <div key={idx} className="flex flex-col border-b pb-2 hover:bg-gray-50">
                          {idx == 5 && (
                            <div className="flex justify-center md:justify-start mb-6 mt-4">
                              <img src="/img/ads/Global.gif" alt="asdf" />
                            </div>
                          )}
                          <a href={newsUrl(n)} className="hover:bg-gray-100">
                            <h4 className="font-extrabold text-xl">{n.title}</h4>
                            <p className="font-light ">{n.meta.headline}</p>
                          </a>
                        </div>
                      ))}
                  </div>
                  <div className="flex justify-center md:justify-start my-6">
                    <img src="/img/ads/Union Bank.gif" alt="asdf" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <BackToTop />
      </main>
    </>
  );
}

const baseUrl = "https://backend.bangladeshfirst.com/api/v1/public";

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const news = (await fetch(`${baseUrl}/story/details/${id}`).then((res) => res.json())).story;

  const [categoryNews, latestNews] = await Promise.all([
    fetch(`${baseUrl}/categories/${news.categories[0].name}/stories?size=50`).then((res) => res.json()),
    fetch(`${baseUrl}/latest/stories?size=50`).then((res) => res.json()),
    // fetch("https://panel.bangladeshfirst.com/api/v2/featured").then((res) => res.json()),
  ]);

  return {
    props: {
      news,
      categoryNews,
      latestNews,
    },
  };
};

export default Index;
