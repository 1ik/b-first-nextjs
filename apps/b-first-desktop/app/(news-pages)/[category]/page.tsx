import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BlockNews6 } from "@bfirst/components-block-news-6";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { notFound } from "next/navigation";
import LoadMore from "../../components/LoadMore/LoadMore";
import Navbar from "../../components/Navbar/Navbar";
import TrendingTopics from "../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../utils/dataFetch";
import filterOutOTD from "../../utils/filterOutOTD";

export async function generateMetadata({ params }) {
  const categoryDetails = await getData(`categories?name=${params.category}`);

  return {
    title: categoryDetails?.data?.[0].meta?.title
      ? `${categoryDetails?.data?.[0].meta?.title} | Bangladesh First`
      : "Bangladesh First",
    description: categoryDetails?.data?.[0].meta?.description,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  const [categoryDetails, trendingTopics, categroyNews, latestNews, topNews] = await Promise.all([
    getData(`categories?name=${category}`),
    getData("trendy-topics"),
    getData(`categories/${category}/stories?size=20&page=1`),
    getData("latest/stories"),
    getData("categories/0/featured-stories"),
  ]);

  const webpageJsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: categoryDetails?.data?.[0].meta?.title
      ? `${categoryDetails?.data?.[0].meta?.title} | Bangladesh First`
      : "Bangladesh First",
    description: categoryDetails?.data?.[0].meta?.description,
    publisher: {
      "@type": "Organization",
      name: "Bangladesh First",
    },
  };

  const filteredLatestNews = latestNews?.data.filter(filterOutOTD);

  if (!categroyNews?.data.length) return notFound();

  return (
    <>
      {/* ========= webpage schema markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      <Navbar activeLink={`/${category}`} />
      <TrendingTopics className="desktop-container mb-8" title="Trending Topics" items={trendingTopics?.data} />
      <div className="desktop-container">
        <Ads className="block" src="/ads/FSB-banner-ad.gif" alt="Ads" showHeader={false} />
        <BreadCrumb
          className="my-10"
          links={[
            {
              name: category,
              href: `/${category}`,
            },
          ]}
        />
        <BlockNews6 data={categroyNews?.data.slice(0, 4)} />
        <Ads className="block my-10" src="/ads/banner_ibbl.gif" alt="Ads" showHeader={false} />

        <div className="grid grid-cols-4 gap-x-10">
          <div className="col-span-3 flex flex-col">
            {categroyNews?.data.slice(4).map((news) => (
              <ItemCardHorizontal
                size="lg"
                showIntro
                className="pb-5 mb-5 border-b dark:border-dark-300"
                key={news.id}
                data={news}
                titleFontSize="24px"
                introFontSize="14px"
              />
            ))}
            <LoadMore initialPage={2} lastPage={categroyNews?.meta.last_page} category={category} />
          </div>
          <div>
            <Ads className="mb-8" src="/ads/Global.gif" alt="Ads" showHeader={false} />
            <div>
              <AccentHeader header="Latest News" color="#5D26D1" />
              <ItemList
                listType="circle"
                data={filteredLatestNews?.slice(0, 6)}
                moreNewsLink="/latest"
                showButton
                titleFontSize="18px"
              />
            </div>

            <Ads className="my-8" src="/ads/union-bank-ad.gif" alt="Ads" showHeader={false} />
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.data.slice(0, 6)} listType="number" titleFontSize="18px" />
            </div>

            <Ads className="my-10 sticky top-20" src="/ads/Global.gif" alt="Ads" showHeader={false} />
          </div>
        </div>
      </div>
    </>
  );
}
