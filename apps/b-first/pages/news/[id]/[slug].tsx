import { BackToTop, BlockNews, CardCaption, Footer, Header, MobileMenu } from "../../index";
import { newsUrl } from "../../../../../libs/settings/analytics/src/lib/util";

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
  return (
    <>
      <Header />
      <MobileMenu />
      <main id="content">
        <div className="bg-white mt-10">
          <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div className="flex flex-col flex-wrap">
              <div className="flex flex-row flex-wrap">
                {/*left*/}
                <div className="flex-shrink max-w-full w-full lg:w-2/3 overflow-hidden pr-6">
                  <BreadCrumb category={news?.category.name} />

                  <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl mb-6">
                    {news?.title}
                  </h2>

                  <div className="news-meta border-1 border-b mb-4 pb-3">
                    <p className="font-semibold">{news.author}</p>
                    <p className="font-light text-sm">{news.created_at}</p>
                    <p className="text-sm italic pt-7">{news.brief}</p>
                  </div>

                  <div className="max-w-2xl">
                    <CardCaption item={news} />
                  </div>
                  <div className="detail block mt-4">
                    <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
                  </div>
                  <div className="w-full border text-center p-6 flex flex-col justify-around">
                    <p className="pb-3">ADVERTISEMENT</p>
                    <img src="https://placehold.co/468x60" alt="Ad" />
                  </div>
                  <div className="w-full block flex flex-col border-b my-6">
                    <BlockNews items={featured.slice(5)} title={"Featured"} showAd={false} />
                  </div>
                </div>
                {/*right*/}
                <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pb-8 order-last bg-gray-50">
                  <h2 className="text-xl font-normal pb-6 pt-6">More From {news.category.name}</h2>
                  <div className="flex flex-col gap-4 pr-6">
                    {categoryNews?.data
                      ?.filter((m: any) => m.id != news.id)
                      .splice(0, 4)
                      .map((n: any, idx: any) => (
                        <div className="flex flex-col border-b pb-2 hover:bg-gray-50">
                          <a href={newsUrl(n)} className="hover:bg-gray-100">
                            <h4 className="font-extrabold text-xl">{n.title}</h4>
                            <p className="font-light ">{n.brief}</p>
                          </a>
                        </div>
                      ))}
                  </div>

                  <div className="mt-5"></div>
                  <h2 className="text-xl font-normal pb-6 pt-6">Latest</h2>
                  <div className="flex flex-col gap-4 pr-6">
                    {latestNews
                      ?.filter((m: any) => m.id != news.id)
                      .splice(0, 10)
                      .map((n: any, idx: any) => (
                        <div className="flex flex-col border-b pb-2 hover:bg-gray-50">
                          <a href={newsUrl(n)} className="hover:bg-gray-100">
                            <h4 className="font-extrabold text-xl">{n.title}</h4>
                            <p className="font-light ">{n.brief}</p>
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        </div>
        <BackToTop />
      </main>
    </>
  );
}

export const getServerSideProps = async (context: any) => {
  const { id } = context.params;
  const news = await fetch(`https://panel.bangladeshfirst.com/api/v2/detail/${id}`).then((res) => res.json());

  const [categoryNews, latestNews, featured] = await Promise.all([
    fetch(`https://panel.bangladeshfirst.com/api/v2/category/${news.category.name}?page=1&size=20`).then((res) =>
      res.json()
    ),
    fetch("https://panel.bangladeshfirst.com/api/v2/latest").then((res) => res.json()),
    fetch("https://panel.bangladeshfirst.com/api/v2/featured").then((res) => res.json()),
  ]);

  return {
    props: {
      news,
      categoryNews,
      latestNews,
      featured,
    },
  };
};

export default Index;
