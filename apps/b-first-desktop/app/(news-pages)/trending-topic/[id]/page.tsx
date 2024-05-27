import { AccentHeader } from "@bfirst/components-accent-header";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { getNewsUrl } from "@bfirst/utilities";
import Navbar from "../../../components/Navbar/Navbar";
import TrendingTopics from "../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../utils/dataFetch";
import filterOutOTD from "../../../utils/filterOutOTD";

export default async function TrendingTopic({ params }) {
  const [trendingNews, latestNews, topNews] = (
    await Promise.all([
      getData(`trending-topics/${params.id}`),
      getData("latest/stories?size=10"),
      getData("categories/0/featured-stories"),
    ])
  ).map((item) => item.data);

  const filteredLatestNews = latestNews.filter(filterOutOTD);
  const trendingTopics = (await getData("trendy-topics"))?.data;
  return (
    <div>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
      <img className="mx-auto my-4" src="/ads//ads/banner_ibbl.gif" alt="" />
      <div className="desktop-container">
        <div className="mb-6">
          <BreadCrumb
            links={[
              {
                name: "Trending Now",
                href: `/trending-topic/${params.id}`,
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-6">
          <div className="col-span-3">
            {trendingNews?.map((item: any, index: number) => (
              <ItemCardHorizontal
                className=" border-b pb-4  dark:border-dark-300"
                key={index}
                data={item}
                size="lg"
                showCreatedAt
                socialShareLink={`${process.env.BASE_URL}/${getNewsUrl(item)}`}
              />
            ))}
          </div>

          <div>
            <div>
              <img className="mt-4 mx-auto" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
            </div>
            <div className="my-10">
              <AccentHeader header="LATEST NEWS" color="#5D26D1" />
              <ItemList data={filteredLatestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" />
              <img className="mt-4 mx-auto" src="/ads/IBBL.gif" alt="Ads" />
            </div>
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.slice(0, 6)} listType="number" />
              <img className="mt-4 mx-auto" src="/ads/Global.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
