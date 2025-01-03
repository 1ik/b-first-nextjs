import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BlockNewsMob } from "@bfirst/components-block-news-mob";
import { BlockNewsMob2 } from "@bfirst/components-block-news-mob-2";
import { BlockNewsMob3 } from "@bfirst/components-block-news-mob-3";
import { BlockNewsMob4 } from "@bfirst/components-block-news-mob-4";
import { BlockNewsMob5 } from "@bfirst/components-block-news-mob-5";
import { ItemList } from "@bfirst/components-item-list";
import { ListGridMob } from "@bfirst/components-list-grid-mob";
import { SquareGrid } from "@bfirst/components-square-grid";
import moment from "moment";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";
import { PhotoAlbum } from "@bfirst/components-photo-album";
import { ItemSlide } from "@bfirst/components-item-slide";
import { getAdsUrl } from "@bfirst/utilities";
import { getAdsObj } from "./utils/getAdsObj";

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

  const filterLatestNews = function (item: any) {
    return !latestNewsData?.find((lN: { id: number }) => lN.id === (item as { id: number }).id);
  };

  const ads_list = await getData("ads?page=home");
  const ads_obj = getAdsObj(ads_list?.ads);

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
  ).map((item) => item?.data.filter(filterTopNews).filter(filterRecommended).filter(filterLatestNews));

  const trendingTopics = (await getData("trendy-topics"))?.data;
  const onThisDay = (await getData("categories/on_this_day/stories"))?.data.filter(
    (item: { created_at: moment.MomentInput }) =>
      moment().format("MMM D YYYY") === moment(item.created_at).format("MMM D YYYY")
  );

  return (
    <>
      {/* ==== webpage schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      <Navbar />
      <div className="px-3">
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
        <TrendingTopics className="my-4" items={trendingTopics} title="Trending" />

        {/* TOP NEWS SECTION */}
        <BlockNewsMob data={topNews?.slice(0, 8)} ads1={ads_obj?.square1} ads2={ads_obj?.square2} />
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner2)} alt="Ads" />
        <div className="sm:hidden">
          <SquareGrid showAccentHeader data={topNews.slice(8, 16)} gridCols={1} />
          <div className="flex justify-center my-6 border-b dark:border-dark-300">
            <a
              href="/latest"
              className="border merriweather-regular text-xs px-6 py-2 hover:bg-[#efeff0] dark:hover:bg-dark-300 duration-300 dark:border-dark-300 merriweather-medium"
            >
              More News
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <SquareGrid showAccentHeader data={topNews.slice(7, 15)} gridCols={2} />
          <div className="flex justify-center my-8 border-b dark:border-dark-300">
            <a
              href="/latest"
              className="border merriweather-regular text-sm px-6 py-2 hover:bg-[#efeff0] dark:hover:bg-dark-300 duration-300 dark:border-dark-300 font-medium"
            >
              More News
            </a>
          </div>
        </div>
      </div>

      {/* VIDEO ALBUM SECTION */}
      {/* {videoGalleryNews?.length ? (
        <>
          <Ads className="my-6" src={getAdsUrl(ads_obj?.banner3)} alt="Ads" />
          <div className="bg-black text-white py-2 mt-8">
            <div className="px-3 my-8">
              <VideoAlbum data={videoGalleryNews} />
            </div>
          </div>
        </>
      ) : null} */}

      {/* RECOMMENDED FOR YOU SECTION */}
      <div className="bg-[#F6EFEF] dark:bg-dark-300 py-8">
        <div className="px-3">
          <Ads className="my-6" src={getAdsUrl(ads_obj?.banner4)} alt="Ads" />
          <AccentHeader header="recommended for you" color="#228B22" />
          <ItemSlide data={recommendedNews} />
        </div>
      </div>

      <div className="px-3">
        {/* ECONOMY SECTION */}
        <Ads className="my-5" src={getAdsUrl(ads_obj?.banner5)} alt="Ads" />
        <BlockNewsMob2 data={economyNews} sectionHeader="Economy" headerColor="#00479B" />

        {/* FEATURE SECTION */}
        <Ads className="my-5" src={getAdsUrl(ads_obj?.banner6)} alt="Ads" />
        <BlockNewsMob3 data={featureNews} sectionHeader="feature" headerColor="#8BD032" />

        {/* PHOTO ALBUM SECTION */}
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner7)} alt="Ads" />
        <div className="my-5">
          <div className="grid grid-cols-4 gap-y-5">
            <div className="col-span-4 md:col-span-3 md:border-r dark:border-dark-300 md:pr-4 md:mr-4">
              <AccentHeader header="Photo" color="#119F9F" />
              <PhotoAlbum data={photoGalleryNews} showTitle />
            </div>
            <div className="col-span-4 md:col-span-1">
              <AccentHeader header="Education" color="#119F9F" />
              <ItemList
                data={educationNews?.slice(0, 7)}
                listType="circle"
                moreNewsLink="/latest"
                titleFontSize="18px"
              />
            </div>
          </div>
        </div>

        {/* LIFESTYLE SECTION */}
        <Ads className="my-5" src={getAdsUrl(ads_obj?.banner8)} alt="Ads" />
        <BlockNewsMob4 data={lifestyleNews} sectionHeader="Lifestyle" headerColor="#EF2D8A" />

        {/* ON THIS DAY SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mt-5">
          <div className="sm:col-span-3 flex flex-col items-center gap-4">
            <Ads src={getAdsUrl(ads_obj?.square3)} alt="Ads" />
            <Ads src={getAdsUrl(ads_obj?.square4)} alt="Ads" />
          </div>
          <div className="sm:col-span-4">
            <AccentHeader header="On this day" color="#A49A46" />
            <ItemList showImage showDate data={onThisDay} />
          </div>
        </div>
        {/* ENTERTAINMENT SECTION */}
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner9)} alt="Ads" />
        <BlockNewsMob5
          data={entertainmentNews}
          ads={ads_obj?.square5}
          sectionHeader="entertainment"
          headerColor="#5D26D1"
        />

        {/* GRID LIST SECTION */}
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner10)} alt="Ads" />
        <ListGridMob className="desktop-container" data={[bangladeshNews, worldNews, sportsNews, techNews]} />
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner11)} alt="Ads" />
      </div>
    </>
  );
}
