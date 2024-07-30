import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import Navbar from "../../../../components/Navbar/Navbar";
import { getData } from "../../../../utils/dataFetch";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { Ads } from "@bfirst/components-ads";
import { getAdsUrl } from "@bfirst/utilities";
import { getAdsObj } from "../../../../utils/getAdsObj";
import { ProfileCard } from "@bfirst/components-profile-card";
import { SquareGrid } from "@bfirst/components-square-grid";

export default async function VideoGalleryDetails({ params }) {
  const detailsData = await getData(`story/details/${params.id}`);
  const news_link_url = `${process.env.BASE_URL}/news/${params.id}/${params.slug}`;

  const [trendingTopics, categoryNews] = (
    await Promise.all([
      getData("trendy-topics"),
      getData(`categories/${detailsData?.story.categories[0].name}/stories`),
    ])
  ).map((item) => item?.data);

  const moreVideoNews = categoryNews?.filter((item: { id: number }) => item.id !== detailsData.story.id);

  // data for ads
  const ads_list = await getData("ads?page=news_details");
  const ads_obj = getAdsObj(ads_list?.ads);

  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" title="Trending Topics" items={trendingTopics} />
      <div className="desktop-container">
        <Ads src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
        <BreadCrumb
          links={[
            {
              name: detailsData?.story.categories[0].name.split("_").join(" "),
              href: `/${detailsData?.story.categories[0].name.toLowerCase()}`,
            },
          ]}
        />

        <h1 className="text-5xl my-10 font-bold leading-[120%]">{detailsData?.story.title}</h1>

        <div className="w-80 mb-10">
          <ProfileCard
            data={detailsData?.story.authors}
            createdTime={detailsData?.story.created_at}
            shareLink={news_link_url}
          />
        </div>

        <div
          className="featured_video"
          dangerouslySetInnerHTML={{ __html: detailsData?.story?.meta?.featured_video }}
        ></div>

        {moreVideoNews.length ? (
          <div>
            <h2 className="text-4xl mt-20 mb-6 font-bold leading-[120%]">Videos you should watch</h2>
            <SquareGrid data={moreVideoNews.slice(0, 8)} gridCols={4} />
          </div>
        ) : null}
      </div>
    </>
  );
}
