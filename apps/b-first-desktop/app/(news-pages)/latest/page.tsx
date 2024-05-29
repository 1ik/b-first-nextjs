import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import Navbar from "../../components/Navbar/Navbar";
import { getData } from "../../utils/dataFetch";
import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";
import LoadMore from "../../components/LoadMore/LoadMore";
import TrendingTopics from "../../components/TrendingTopics/TrendingTopics";
import { Ads } from "@bfirst/components-ads";

export default async function Latest() {
  const [latestNews, topNews] = await Promise.all([
    getData("latest/stories"),
    getData("categories/0/featured-stories"),
  ]);

  const trendingTopics = (await getData("trendy-topics"))?.data;

  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
      <Ads className="my-4" src="/ads/banner_ibbl.gif" alt="Ads" showHeader={false} />

      <div className="desktop-container">
        {/*============= BREDCRUMB ========== */}
        <BreadCrumb
          links={[
            {
              name: "Latest News",
              href: `/latest`,
            },
          ]}
        />

        <div className="grid grid-cols-4 gap-x-6 mt-4">
          {/*============= LATEST NEWS ========== */}
          <div className="col-span-3">
            {latestNews.data?.map((item: any, index: number) => (
              <ItemCardHorizontal
                className="border-b-2 pb-4 mb-4 dark:border-dark-300"
                key={index}
                data={item}
                size="lg"
                showTime
                titleFontSize="24px"
              />
            ))}
            <LoadMore
              showIntro={false}
              showTime
              initialPage={2}
              lastPage={latestNews?.meta.last_page}
              category="latest"
            />
          </div>

          <div>
            {/*============= TOP NEWS ========== */}
            <div>
              <Ads className="mb-6" src="/ads/Global.gif" alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews.data?.slice(0, 6)} listType="number" />
              <Ads className="mt-4" src="/ads/Global.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
