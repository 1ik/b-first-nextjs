import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import Navbar from "../../../../components/Navbar/Navbar";
import { getData } from "../../../../utils/dataFetch";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { Ads } from "@bfirst/components-ads";
import { getAdsUrl } from "@bfirst/utilities";
import { getAdsObj } from "../../../../utils/getAdsObj";


export default async function page() {
  const [trendingTopics] = (await Promise.all([getData("trendy-topics")])).map((item) => item?.data);

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
              name: "PhotoGallery",
              href: `/#`,
            },
          ]}
        />
      </div>
    </>
  );
}
