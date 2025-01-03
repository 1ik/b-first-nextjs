import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BlockNews } from "@bfirst/components-block-news";
import { BlockNews2 } from "@bfirst/components-block-news-2";
import { BlockNews3 } from "@bfirst/components-block-news-3";
import { BlockNews4 } from "@bfirst/components-block-news-4";
import { BlockNews5 } from "@bfirst/components-block-news-5";
import { ItemList } from "@bfirst/components-item-list";
import { ItemSlide } from "@bfirst/components-item-slide";
import { ListGrid } from "@bfirst/components-list-grid";
import { PhotoAlbum } from "@bfirst/components-photo-album";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAdsUrl } from "@bfirst/utilities";
import moment from "moment";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";
import { getAdsObj } from "./utils/getAdsObj";
import filterCategory from "./utils/filterCategory";

const webpageJsonLd = {
  "@context": "http://schema.org",
  "@type": "WebPage",
  name: "Bangladesh First",
  description: "A newspaper that publishes news with authenticity and without fear.",
  publisher: {
    "@type": "Organization",
    name: "Bangladesh First",
  },
};

export default async function Index() {
  const [topNews, recommendedNews] = (
    await Promise.all([getData("categories/0/featured-stories?size=16"), getData("recommended-stories")])
  ).map((item) => item?.data);

  const filterRecommended = function (item: { id: number }) {
    return !recommendedNews?.find((rN: { id: number }) => rN.id === item.id);
  };

  const filterTopNews = function (item: any) {
    return !topNews?.find((tN: { id: number }) => tN.id === (item as { id: number }).id);
  };

  const latestNewsData = (await getData("latest/stories?size=30"))?.data
    .filter(filterTopNews)
    .filter(filterRecommended);

  const latestNews = filterCategory(latestNewsData, "On_This_Day", "Video_Gallery", "Photo_Gallery");

  const filterLatestNews = function (item: { id: number }) {
    return !latestNews?.find((lN: any) => lN.id === item.id);
  };

  const [
    economyNews,
    featureNews,
    entertainmentNews,
    lifestyleNews,
    bangladeshNews,
    worldNews,
    sportsNews,
    techNews,
    educationNews,
    photoGalleryNews,
    videoGalleryNews,
  ] = (
    await Promise.all([
      getData("categories/economy/stories?size=40"),
      getData("categories/feature/stories"),
      getData("categories/entertainment/stories"),
      getData("categories/lifestyle/stories"),
      getData("categories/bangladesh/stories?size=30"),
      getData("categories/world/stories"),
      getData("categories/sports/stories"),
      getData("categories/tech/stories"),
      getData("categories/education/stories"),
      getData("categories/photo_gallery/stories"),
      getData("categories/video_gallery/stories"),
    ])
  ).map((item) => item?.data?.filter(filterTopNews).filter(filterRecommended).filter(filterLatestNews));

  const onThisDay = (await getData("categories/on_this_day/stories"))?.data.filter(
    (item: { created_at: moment.MomentInput }) =>
      moment().format("MMM D YYYY") === moment(item.created_at).format("MMM D YYYY")
  );
  const trendingTopics = (await getData("trendy-topics"))?.data;

  // data for ads
  const ads_list = await getData("ads?page=home");
  const ads_obj = getAdsObj(ads_list?.ads);

  return (
    <>
      {/* ==== webpage schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />

      <Ads className="my-10" src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />

      <BlockNews
        className="desktop-container"
        data={topNews?.slice(0, 8)}
        ads1={ads_obj?.square1}
        ads2={ads_obj?.square2}
      />
      <Ads className="my-10" src={getAdsUrl(ads_obj?.banner2)} alt="Ads" />

      <div className="desktop-container">
        <SquareGrid showAccentHeader data={topNews?.slice(8, 16)} gridCols={4} />
        <div className="flex justify-center mt-3 border-b dark:border-dark-300">
          <a
            href="/latest"
            className="border text-sm px-4 py-1 hover:bg-[#efeff0] dark:hover:bg-dark-300 duration-300 dark:border-dark-300 merriweather-medium"
          >
            More News
          </a>
        </div>
      </div>

      <Ads className="my-12" src={getAdsUrl(ads_obj?.banner3)} alt="Ads" />

      {/* {videoGalleryNews?.length ? (
        <>
          <div className="bg-black text-white py-4 mt-8">
            <div className="desktop-container my-10">
              <VideoAlbum data={videoGalleryNews} />
            </div>
          </div>
          <Ads className="my-12" src={getAdsUrl(ads_obj?.banner4)} alt="Ads" />
        </>
      ) : null} */}

      <div className="bg-[#F6EFEF] dark:bg-dark-300 py-8">
        <div className="desktop-container">
          <AccentHeader header="recommended for you" color="#228B22" />
          <ItemSlide data={recommendedNews} />
        </div>
      </div>

      <Ads className="my-10" src={getAdsUrl(ads_obj?.banner5)} alt="Ads" />

      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <BlockNews2
            sectionHeader="Economy"
            headerColor="#00479B"
            ads={ads_obj?.banner6}
            className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4"
            data={economyNews}
          />

          <div className="flex flex-col justify-between">
            <AccentHeader header="Latest News" color="#5D26D1" />
            <ItemList
              data={latestNews?.slice(0, 6)}
              listType="circle"
              showButton
              moreNewsLink="/latest"
              titleFontSize="18px"
            />
            <Ads className="mt-6" src={getAdsUrl(ads_obj?.square3)} alt="Ads" />
          </div>
        </div>
      </div>

      <div className="desktop-container my-10">
        <div className="grid grid-cols-4">
          <div className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4">
            <BlockNews3 sectionHeader="Feature" headerColor="#8BD032" data={featureNews} />
          </div>
          <div>
            <AccentHeader header="Most Viewed" color="#119F9F" />
            <ItemList data={latestNews?.slice(6, 12)} listType="number" titleFontSize="18px" />
          </div>
        </div>
        <Ads className="mt-4" src={getAdsUrl(ads_obj?.banner7)} alt="Ads" />
      </div>

      <div className="desktop-container my-10">
        <div className="grid grid-cols-4">
          <div className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4">
            <AccentHeader header="Photo" color="#119F9F" />
            <PhotoAlbum data={photoGalleryNews} showTitle showIntro />
          </div>
          <div>
            <AccentHeader header="Education" color="#119F9F" />
            <ItemList data={educationNews?.slice(0, 7)} listType="circle" moreNewsLink="/latest" titleFontSize="18px" />
          </div>
        </div>
        <Ads className="my-10" src={getAdsUrl(ads_obj?.banner8)} alt="Ads" />
      </div>

      <div className="desktop-container mt-10">
        <div className="grid grid-cols-4">
          <BlockNews4
            sectionHeader="Lifestyle"
            headerColor="#EF2D8A"
            className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4"
            data={lifestyleNews}
          />
          <div>
            <AccentHeader header="On this day" color="#A49A46" />
            <ItemList showImage showDate data={onThisDay} />
            <div className="flex flex-col mt-8 gap-y-8 items-center">
              <Ads className="mt-4" src={getAdsUrl(ads_obj?.square4)} alt="Ads" />
              <Ads className="mt-4" src={getAdsUrl(ads_obj?.square5)} alt="Ads" />
            </div>
          </div>
        </div>
        <Ads className="my-8" src={getAdsUrl(ads_obj?.banner9)} alt="Ads" />
      </div>

      <BlockNews5
        sectionHeader="entertainment"
        headerColor="#5D26D1"
        className="desktop-container"
        ads1={ads_obj?.square6}
        ads2={ads_obj?.square7}
        data={entertainmentNews}
      />
      <Ads className="my-16" src={getAdsUrl(ads_obj?.banner10)} alt="Ads" />
      <ListGrid className="desktop-container" data={[bangladeshNews, worldNews, sportsNews, techNews]} />
      <Ads className="my-12" src={getAdsUrl(ads_obj?.banner11)} alt="Ads" />
    </>
  );
}
