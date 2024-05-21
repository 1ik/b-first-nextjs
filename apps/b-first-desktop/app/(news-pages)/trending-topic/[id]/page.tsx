import Navbar from "apps/b-first-desktop/app/components/Navbar/Navbar";
import { getData } from "apps/b-first-desktop/app/utils/dataFetch";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";
import Link from "next/link";
import BreadCrumb from "apps/b-first-desktop/app/components/BreadCrumb/BreadCrumb";
export default async function TrendingTopic({ params }) {
  const trenndingNews = await getData(`trending-topics/${params.id}`);
  const latestNews = await getData("latest/stories");

  console.log(trenndingNews.meta.path);
  
  return (
    <div>
      <Navbar />

      <div className="desktop-container">
        <div className="mb-6">
          <BreadCrumb
            links={[
              {
                name: "Trending Now",
                href: `/`,
              },
            ]}
          />
        </div>
        <div className="grid grid-cols-4 gap-x-6">
          <div className="col-span-3">
            {trenndingNews.data?.map((item, index) => (
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
              <ItemList Link={Link} data={latestNews?.data.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest"/>
              <img className="mt-4 mx-auto" src="/ads/IBBL.gif" alt="Ads" />
            </div>
            <div>
              <AccentHeader header="MOST VIEWED" color="#119F9F" />
              <ItemList Link={Link} data={latestNews?.data.slice(6, 12)} listType="number" />
              <img className="mt-4 mx-auto" src="/ads/Global.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
