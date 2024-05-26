import { BreadCrumb } from "@bfirst/components-breadcrumb";
import Navbar from "../../components/Navbar/Navbar";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import filterOutOTD from "apps/b-first-desktop/app/utils/filterOutOTD";
import { getData } from "../../utils/dataFetch";
import { SocialShare } from "@bfirst/components-social-share";
import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";
import { getNewsUrl } from "@bfirst/utilities";

export default async function TrendingTopic({ params }) {
  const [trendingNews, latestNews, topNews] = (
    await Promise.all([
      getData(`trending-topics/${params.id}`),
      getData("latest/stories?size=10"),
      getData("categories/0/featured-stories"),
    ])
  ).map((item) => item.data);

  const filteredLatestNews = latestNews.filter(filterOutOTD);
  return (
    <div>
      <Navbar />
      <div className="px-3">
        <div>
          <BreadCrumb
            className="mb-6"
            links={[
              {
                name: "Trending Now",
                href: `/trending-topic/${params.id}`,
              },
            ]}
          />

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
            <div className="sm:col-span-4">
              {trendingNews?.map((item: any, index: number) => (
                <>
                  <ItemCardHorizontal
                    showCreatedAt
                    key={index}
                    data={item}
                    size="sm"
                    className="border-b pb-4 dark:border-dark-300"
                  />
                  <SocialShare
                    title="Share Trending On :"
                    textPlacement="left"
                    shareLink={`https://bangladeshfirst.com/${getNewsUrl(item)}`}
                    className="text-[#6F6F6F] items-center dark:text-white mt-4 border-b pb-4 dark:border-dark-300"
                  />
                  <img className="my-10 mx-auto" src="/ads/ibbl.gif" alt="Ads" />
                </>
              ))}
            </div>

            <div className="sm:order-2 sm:col-span-2">
              <div className="mb-8">
                <AccentHeader header="LATEST NEWS" color="#5D26D1" />
                <ItemList data={filteredLatestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" />
                <img className="mt-6 mx-auto" src="/ads/IBBL.gif" alt="Ads" />
              </div>

              <div>
                <AccentHeader header="Top News" color="#119F9F" />
                <ItemList data={topNews?.slice(0, 6)} listType="number" />
                <img className="mt-4 mx-auto" src="/ads/social_islami.png" alt="Ads" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
