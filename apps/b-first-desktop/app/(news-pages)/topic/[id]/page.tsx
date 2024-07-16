import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar/Navbar";
import TrendingTopics from "../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../utils/dataFetch";
import { getAdsUrl } from "@bfirst/utilities";
import {getAdsObj} from "../../../utils/getAdsObj"
import filterCategory from "apps/b-first-desktop/app/utils/filterCategory";
export default async function Topic({ params }) {
  const [trendingNews,  topNews] = (
    await Promise.all([
      getData(`topic/${params.id}`),
      getData("categories/0/featured-stories"),
    ])
  ).map((item) => item?.data);

  if (!trendingNews) return notFound();

  const ads_list = await getData("ads?page=topic");
  const ads_obj = getAdsObj(ads_list?.ads);

  const filteredLatestNews = filterCategory(
    (await getData("latest/stories?size=30"))?.data,
    "On_This_Day",
    "Video_Gallery",
    "Photo_Gallery",
  );
  const trendingTopics = (await getData("trendy-topics"))?.data;
  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
      <Ads className="my-4" src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
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
            <Ads src={getAdsUrl(ads_obj?.square1)} alt="Ads" />
            <div className="my-10">
              <AccentHeader header="LATEST NEWS" color="#5D26D1" />
              <ItemList
                data={filteredLatestNews?.slice(0, 6)}
                listType="circle"
                showButton
                moreNewsLink="/latest"
                titleFontSize="18px"
              />
              <Ads className="mt-8" src={getAdsUrl(ads_obj?.square2)} alt="Ads" />
            </div>
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.slice(0, 6)} listType="number" titleFontSize="18px" />
            </div>
            <Ads className="mb-4" src={getAdsUrl(ads_obj?.square3)} alt="Ads" />
          </div>
        </div>
      </div>
    </>
  );
}
