import { ProfileCard } from "@bfirst/components-profile-card";
import { getImageUrl } from "@bfirst/utilities";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import Navbar from "../../../../components/Navbar/Navbar";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";

export default async function NewsDetails({ params }) {
  const [detailsData, trendingTopics] = await Promise.all([
    getData(`story/details/${params.id}`),
    getData("trendy-topics"),
  ]);

  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" title="Trending Topics" items={trendingTopics?.data} />

      <div className="desktop-container">
        <img className="mx-auto my-12" src="/ads/chopstick-ads.gif" alt="Ads" />
        <BreadCrumb links={[{ name: "Bangladesh", href: "/bangladesh" }]} />
        <h1 className="text-7xl my-10">{detailsData?.story.title}</h1>

        <div className="grid grid-cols-4 gap-x-8 gap-y-11 items-end">
          {/* ====== row 1 ===== */}
          <h3 className="text-2xl  font-montserrat">{detailsData?.story.meta.intro}</h3>
          <div className="col-span-3">
            <img
              className="w-full"
              src={getImageUrl(detailsData?.story.meta.featured_image)}
              alt={detailsData?.story.title}
            />
            <p className="font-montserrat text-xl mt-4">{detailsData?.story.meta.imageCaption}</p>
          </div>

          {/* ======== row 2 ======= */}
          <div>
            <ProfileCard data={detailsData?.story.authors[0]} updatedTime={detailsData?.story.updated_at} />
          </div>
        </div>
      </div>
    </>
  );
}
