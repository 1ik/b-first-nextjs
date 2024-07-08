import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import LoadMore from "../../components/LoadMore/LoadMore";
import Navbar from "../../components/Navbar/Navbar";
import TrendingTopics from "../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../utils/dataFetch";
import { getAdsObj, getAdsUrl } from "@bfirst/utilities";

export default async function Latest() {
  const [latestNews, topNews] = await Promise.all([
    getData("latest/stories"),
    getData("categories/0/featured-stories"),
  ]);

  const ads_list = await getData("ads?page=news_details");
  const ads_obj = getAdsObj(ads_list.ads);
  const trendingTopics = (await getData("trendy-topics"))?.data;
  const filteredLatestNews = latestNews?.data.filter(
    (item: { categories: any[] }) => !item.categories.find((c) => c.name === "On_This_Day")
  );

  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
      <Ads className="my-4" src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
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
            {filteredLatestNews?.map((item: any, index: number) => (
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
              url="latest/stories"
            />
          </div>

          <div>
            {/*============= TOP NEWS ========== */}
            <div>
              <Ads className="mb-6" src={getAdsUrl(ads_obj?.square1)} alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews.data?.slice(0, 6)} listType="number" />
            </div>

            <Ads className="mb-6" src={getAdsUrl(ads_obj?.square2)} alt="Ads" />
          </div>
        </div>
      </div>
    </>
  );
}
