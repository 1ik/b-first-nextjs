import { AccentHeader } from "@bfirst/components-accent-header";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { SocialShare } from "@bfirst/components-social-share";
import { getNewsUrl } from "@bfirst/utilities";
import Navbar from "../../../components/Navbar/Navbar";
import TrendingTopics from "../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../utils/dataFetch";
import filterOutOTD from "../../../utils/filterOutOTD";

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
                <>
                  <ItemCardHorizontal
                    showCreatedAt
                    key={index}
                    data={item}
                    size="sm"
                    className="border-b pb-4 dark:border-dark-300"
                  />
                  <SocialShare
                    title="Share On :"
                    textPlacement="left"
                    shareLink={`${process.env.BASE_URL}/${getNewsUrl(item)}`}
                    className="text-[#6F6F6F] items-center dark:text-white mt-4 border-b pb-4 dark:border-dark-300"
                  />
                </>
              ))}
              <img className="my-10 mx-auto" src="/ads/ibbl.gif" alt="Ads" />
            </div>

            <div className="sm:order-2 sm:col-span-2">
              <div className="mb-8">
                <AccentHeader header="LATEST NEWS" color="#5D26D1" />
                <ItemList data={filteredLatestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" />
                <img className="mt-6 mx-auto" src="/ads/union-bank-ad.gif" alt="Ads" />
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
    </>
  );
}
