import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { AuthorDetails } from "@bfirst/components-author-details";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAuthorProfileUrl } from "@bfirst/utilities";
import LoadMore from "../../../../components/LoadMore/LoadMore";
import Navbar from "../../../../components/Navbar/Navbar";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";
import filterCategory from "../../../../utils/filterCategory";

export async function generateMetadata({ params }) {
  const authorDetails = (await getData(`author-details/${params.id}`))?.data;
  return {
    title: `${authorDetails.name} | Bangladesh First`,
    description: authorDetails?.meta?.description,
    alternates: {
      canonical: `${process.env.BASE_URL}${getAuthorProfileUrl(authorDetails)}`,
    },
  };
}

export default async function AuthorProfile({ params }) {
  const [authorRelatedNews, topNews] = await Promise.all([
    getData(`author-stories/${params.id}`),
    getData("categories/0/featured-stories"),
  ]);

  const [trendingTopics, authorDetails] = (
    await Promise.all([getData("trendy-topics"), getData(`author-details/${params.id}`)])
  ).map((item) => item?.data);

  const filteredAuthorRelatedNews = filterCategory(authorRelatedNews?.data, "On_This_Day", "Video_Gallery", "Photo_Gallery");

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
              name: authorDetails.name,
              href: getAuthorProfileUrl(authorDetails),
            },
          ]}
        />
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
          <div className="col-span-3">
            <AuthorDetails data={authorDetails} />
            <div className="mt-4">
              <SquareGrid
                className="mb-6 pb-6 border-b-2 dark:border-dark-300"
                data={filteredAuthorRelatedNews.slice(0, 6)}
                gridCols={3}
              />
              {filteredAuthorRelatedNews?.slice(6, 21)?.map((item: any, index: number) => (
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
                lastPage={authorRelatedNews?.meta?.last_page}
                url={`author-stories/${params.id}`}
              />
            </div>
          </div>
          <div>
            <div>
              <Ads className="mb-6" src="/ads/Global.gif" alt="Ads" showHeader={false} />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews.data?.slice(0, 6)} listType="number" />
            </div>
            <Ads className="mt-4 sticky top-20" src="/ads/Global.gif" alt="Ads" showHeader={false} />
          </div>
        </div>
      </div>
    </>
  );
}
