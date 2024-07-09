import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar/Navbar";
import TrendingTopics from "../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../utils/dataFetch";
import filterOutOTD from "../../../utils/filterOutOTD";
import { getAdsObj, getAdsUrl } from "@bfirst/utilities";

export default async function Topic({ params }) {
  const [trendingNews, latestNews, topNews] = (
    await Promise.all([
      getData(`topic/${params.id}`),
      getData("latest/stories?size=10"),
      getData("categories/0/featured-stories"),
    ])
  ).map((item) => item?.data);

  if (!trendingNews) return notFound();

  const ads_list = await getData("ads?page=topic");
  const ads_obj = getAdsObj(ads_list.ads);
  const trendingTopics = (await getData("trendy-topics"))?.data;
  const filteredLatestNews = latestNews.filter(filterOutOTD);
  return (
    <>
      <Navbar />
      <div className="px-3">
        <Ads className="my-4" src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
        <TrendingTopics className="mb-8" items={trendingTopics} title="Trending" />
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
              <Ads className="my-10" src={getAdsUrl(ads_obj?.square1)} alt="Ads" />
            </div>

            <div className="sm:order-2 sm:col-span-2">
              <div className="mb-8">
                <AccentHeader header="LATEST NEWS" color="#5D26D1" />
                <ItemList
                  data={filteredLatestNews?.slice(0, 6)}
                  listType="circle"
                  showButton
                  moreNewsLink="/latest"
                  titleFontSize="16px"
                />
                <Ads className="mt-6" src={getAdsUrl(ads_obj?.square2)} alt="Ads" />
              </div>

              <div>
                <AccentHeader header="Top News" color="#119F9F" />
                <ItemList data={topNews?.slice(0, 6)} listType="number" titleFontSize="16px" />
                <Ads className="mt-4" src={getAdsUrl(ads_obj?.square3)} alt="Ads" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
