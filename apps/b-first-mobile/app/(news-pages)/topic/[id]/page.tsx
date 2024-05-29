import { AccentHeader } from "@bfirst/components-accent-header";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import Navbar from "../../../components/Navbar/Navbar";
import TrendingTopics from "../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../utils/dataFetch";
import filterOutOTD from "../../../utils/filterOutOTD";
import { Ads } from "@bfirst/components-ads";

export default async function Topic({ params }) {
  const [trendingNews, latestNews, topNews] = (
    await Promise.all([
      getData(`topic/${params.id}`),
      getData("latest/stories?size=10"),
      getData("categories/0/featured-stories"),
    ])
  ).map((item) => item.data);

  const trendingTopics = (await getData("trendy-topics"))?.data;
  const filteredLatestNews = latestNews.filter(filterOutOTD);
  return (
    <>
      <Navbar />
      <div className="px-3">
        <TrendingTopics className="px-3 my-4" items={trendingTopics} title="Trending" />
        <div>
          <BreadCrumb
            className="mb-6"
            links={[
              {
                name: "Topic",
                href: `/topic/${params.id}`,
              },
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            <div className="sm:col-span-4">
              {trendingNews?.map((item: any, index: number) => (
                <ItemCardHorizontal
                  showCreatedAt
                  key={index}
                  data={item}
                  size="md"
                  className="border-b pb-4 mb-4 dark:border-dark-300"
                  titleFontSize="16px"
                />
              ))}

              <Ads className="my-10" src="/ads/social_islami.png" alt="Ads" showHeader={false}/>
            </div>

            <div className="sm:order-2 sm:col-span-2">
              <div className="mb-8">
                <AccentHeader header="LATEST NEWS" color="#5D26D1" />
                <ItemList data={filteredLatestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" />
                <Ads className="mt-6" src="/ads/union-bank-ad.gif" alt="Ads" />
              </div>

              <div>
                <AccentHeader header="Top News" color="#119F9F" />
                <ItemList data={topNews?.slice(0, 6)} listType="number" />
                <Ads className="mt-4" src="/ads/ibbl.gif" alt="Ads" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
