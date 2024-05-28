import { AccentHeader } from "@bfirst/components-accent-header";
import { BlockNews6 } from "@bfirst/components-block-news-6";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import Image from "next/image";
import { notFound } from "next/navigation";
import LoadMore from "../../components/LoadMore/LoadMore";
import Navbar from "../../components/Navbar/Navbar";
import TrendingTopics from "../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../utils/dataFetch";
import filterOutOTD from "../../utils/filterOutOTD";

export default async function CategoryPage({ params }) {
  const { category } = params;
  const [trendingTopics, categroyNews, latestNews, topNews] = await Promise.all([
    getData("trendy-topics"),
    getData(`categories/${category}/stories?size=20&page=1`),
    getData("latest/stories"),
    getData("categories/0/featured-stories"),
  ]);

  const filteredLatestNews = latestNews?.data.filter(filterOutOTD);

  if (!categroyNews?.data.length) return notFound();

  return (
    <>
      <Navbar activeLink={`/${category}`} />
      <TrendingTopics className="desktop-container mb-8" title="Trending Topics" items={trendingTopics?.data} />
      <div className="desktop-container">
        <Image className="mx-auto block" width={728} height={90} src="/ads/FSB-banner-ad.gif" alt="Ads" />
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
        <Image className="mx-auto block my-10" width={728} height={90} src="/ads/banner_ibbl.gif" alt="Ads" />
        <div className="grid grid-cols-4 gap-x-10">
          <div className="col-span-3 flex flex-col gap-y-5">
            {categroyNews?.data.slice(4).map((news) => (
              <ItemCardHorizontal
                size="lg"
                showIntro
                className="pb-5 border-b dark:border-dark-300"
                key={news.id}
                data={news}
              />
            ))}
            <LoadMore initialPage={2} lastPage={categroyNews?.meta.last_page} category={category} />
          </div>
          <div>
            <div className="text-center my-8">
              <p className="mb-2">Advertisement</p>
              <Image className="mx-auto block" width={320} height={250} src="/ads/Global.gif" alt="Ads" />
            </div>
            <div>
              <AccentHeader header="Latest News" color="#5D26D1" />
              <ItemList listType="circle" data={filteredLatestNews?.slice(0, 6)} moreNewsLink="/latest" showButton />
            </div>
            <div className="text-center my-8">
              <p className="mb-2">Advertisement</p>
              <Image className="mx-auto block" width={320} height={250} src="/ads/union-bank-ad.gif" alt="Ads" />
            </div>
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.data.slice(0, 6)} listType="number" />
            </div>
            <div className="text-center block my-10 sticky top-20">
              <p className="mb-2">Advertisement</p>
              <Image className="mx-auto" width={320} height={250} src="/ads/Global.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
