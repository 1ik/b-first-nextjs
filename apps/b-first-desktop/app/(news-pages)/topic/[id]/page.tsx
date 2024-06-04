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
  ).map((item) => item?.data);

  const filteredLatestNews = latestNews.filter(filterOutOTD);
  const trendingTopics = (await getData("trendy-topics"))?.data;
  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
      <Ads className="my-4" src="/ads/FSB-banner-ad.gif" alt="Ads" showHeader={false} />

      <div className="desktop-container">
        <div className="mb-6">
          <BreadCrumb
            links={[
              {
                name: "Topic",
                href: `/topic/${params.id}`,
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-6">
          <div className="col-span-3">
            {trendingNews?.map((item: any, index: number) => (
              <ItemCardHorizontal
                className=" border-b-2 pb-4 mb-4 dark:border-dark-300"
                key={index}
                data={item}
                size="lg"
                showCreatedAt
                titleFontSize="24px"
              />
            ))}
          </div>

          <div>
            <Ads className="" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" showHeader={false} />
            <div className="my-10">
              <AccentHeader header="LATEST NEWS" color="#5D26D1" />
              <ItemList data={filteredLatestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" titleFontSize="18px"/>
              <Ads className="mt-8" src="/ads/IBBL.gif" alt="Ads" showHeader={false} />
            </div>
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.slice(0, 6)} listType="number" titleFontSize="18px"/>
            </div>
            <Ads className="mt-4 sticky top-20" src="/ads/Global.gif" alt="Ads" showHeader={false} />
          </div>
        </div>
      </div>
    </>
  );
}
