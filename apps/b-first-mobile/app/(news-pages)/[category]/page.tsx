import { AccentHeader } from "@bfirst/components-accent-header";
import { BlockNewsMob6 } from "@bfirst/components-block-news-mob-6";
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
      <div className="px-3">
        <img className="mx-auto my-14" src="/ads/nagad.png" alt="Ads" />
        <TrendingTopics className="mb-8" title="Trending Topics" items={trendingTopics?.data} />
        <img className="mx-auto my-14" src="/ads/nagad.png" alt="Ads" />
        <BreadCrumb
          className="my-10"
          links={[
            {
              name: category,
              href: `/${category}`,
            },
          ]}
        />
        <BlockNewsMob6 data={categroyNews?.data.slice(0, 4)} />
        <img className="mx-auto my-14" src="/ads/nagad.png" alt="Ads" />
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-5">
          <div className="sm:col-span-2">
            {categroyNews?.data.slice(4).map((news) => (
              <ItemCardHorizontal size="md" className="pb-5 border-b dark:border-dark-300" key={news.id} data={news} />
            ))}
            <LoadMore initialPage={2} lastPage={categroyNews?.meta.last_page} category={category} />
          </div>
          <div className="">
            <div className="">
              <Image className="mx-auto block mb-10" width={320} height={250} src="/ads/union-bank-ad.gif" alt="Ads" />
              <AccentHeader header="Latest News" color="#5D26D1" />
              <ItemList listType="circle" data={filteredLatestNews?.slice(0, 6)} moreNewsLink="/latest" showButton />
            </div>
            <div>
              <Image className="mx-auto block my-10" width={320} height={250} src="/ads/union-bank-ad.gif" alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.data.slice(0, 6)} listType="number" />
              <Image className="mx-auto block my-10" width={320} height={250} src="/ads/union-bank-ad.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
