import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import Navbar from "../../../components/Navbar/Navbar";
import { getData } from "../../../utils/dataFetch";

export default async function TrendingTopic({ params }) {
  const [trendingNews, latestNews, topNews] = (
    await Promise.all([
      getData(`trending-topics/${params.id}`),
      getData("latest/stories?size=10"),
      getData("categories/0/featured-stories"),
    ])
  ).map((item) => item.data);

  return (
    <div>
      <Navbar />

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
                showSocialShare
              />
            ))}
          </div>

          <div>
            <div>
              <img className="mt-4 mx-auto" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
            </div>
            <div className="my-10">
              <AccentHeader header="LATEST NEWS" color="#5D26D1" />
              <ItemList data={latestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" />
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
