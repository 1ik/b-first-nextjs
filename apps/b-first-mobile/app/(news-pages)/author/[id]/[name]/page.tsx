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
import filterCategory from "apps/b-first-mobile/app/utils/filterCategory";


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


  const filteredAuthorRelatedNews = filterCategory(
    authorRelatedNews?.data,
    "On_This_Day",
    "Video_Gallery",
    "Photo_Gallery",
  )

  return (
    <>
      <Navbar />

      <div className="px-3">
        <Ads className="mx-auto my-4" src="/ads/banner_ibbl.gif" alt="ads" />
        <TrendingTopics className="mb-8" items={trendingTopics} title="Trending Topics" />

        {/*============= BREDCRUMB ========== */}
        <BreadCrumb
          links={[
            {
              name: authorDetails.name,
              href: getAuthorProfileUrl(authorDetails),
            },
          ]}
        />

        <div>
          <AuthorDetails data={authorDetails} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mt-4">
          {/*============= LATEST NEWS ========== */}
          <div className="sm:col-span-3">
            <div className="hidden sm:block">
              <SquareGrid data={filteredAuthorRelatedNews.slice(0, 6)} gridCols={2} />
            </div>
            <div className="sm:hidden">
              <SquareGrid data={filteredAuthorRelatedNews.slice(0, 6)} gridCols={1} />
            </div>

            <div className="mt-3 pt-3 border-t-2 dark:border-dark-300">
              {filteredAuthorRelatedNews?.map((item: any, index: number) => (
                <ItemCardHorizontal
                  className="border-b pb-4 mb-4 dark:border-dark-300"
                  key={index}
                  data={item}
                  size="md"
                  showTime
                  titleFontSize="16px"
                />
              ))}
              <LoadMore
                showIntro={false}
                showTime
                initialPage={2}
                lastPage={authorRelatedNews?.meta.last_page}
                url={`author-stories/${params.id}`}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            {/*============= TOP NEWS ========== */}
            <div>
              <Ads className="my-4" src="/ads/Global.gif" alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews.data?.slice(0, 6)} listType="number" titleFontSize="16px" />
            </div>
            <Ads className="mt-4 sm:sticky top-20" src="/ads/Global.gif" alt="Ads" />
          </div>
        </div>
      </div>
    </>
  );
}
