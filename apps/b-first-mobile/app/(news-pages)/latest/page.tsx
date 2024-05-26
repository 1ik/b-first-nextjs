import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";

import { getData } from "../../utils/dataFetch";
import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";
import LoadMore from "../../components/LoadMore/LoadMore";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import Navbar from "../../components/Navbar/Navbar";

export default async function Latest() {
  const [latestNews, topNews] = await Promise.all([
    getData("latest/stories"),
    getData("categories/0/featured-stories"),
  ]);

  return (
    <>
      <Navbar />
      <div className="px-3">
        {/*============= BREDCRUMB ========== */}
        <div className="mt-4">
          <BreadCrumb
            links={[
              {
                name: "Latest News",
                href: `/latest`,
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mt-4">
          {/*============= LATEST NEWS ========== */}
          <div className="sm:col-span-3">
            {latestNews.data?.map((item: any, index: number) => (
              <ItemCardHorizontal
                className="border-b pb-4  dark:border-dark-300"
                key={index}
                data={item}
                size="sm"
                showTime
              />
            ))}
            <LoadMore initialPage={2} lastPage={latestNews?.meta.last_page} category="latest" />
          </div>

          <div className="sm:col-span-2">
            {/*============= TOP NEWS ========== */}
            <div>
              <img className="mb-4 mx-auto" src="/ads/Global.gif" alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews.data?.slice(0, 6)} listType="number" />
              <img className="mt-4 mx-auto" src="/ads/Global.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
