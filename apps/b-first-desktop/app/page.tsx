import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BlockNews } from "@bfirst/components-block-news";
import { BlockNews2 } from "@bfirst/components-block-news-2";
import { BlockNews3 } from "@bfirst/components-block-news-3";
import { BlockNews4 } from "@bfirst/components-block-news-4";
import { BlockNews5 } from "@bfirst/components-block-news-5";
import { ItemList } from "@bfirst/components-item-list";
import { ListGrid } from "@bfirst/components-list-grid";
import { SquareGrid } from "@bfirst/components-square-grid";
import moment from "moment";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";
import filterOutOTD from "./utils/filterOutOTD";

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

  const latestNews = (await getData("latest/stories?size=30"))?.data
    .filter(filterTopNews)
    .filter(filterRecommended)
    .filter(filterOutOTD);

  const filterLatestNews = function (item: any) {
    return !latestNews?.find((lN: { id: number }) => lN.id === (item as { id: number }).id);
  };

  const [economyNews, featureNews, entertainmentNews, lifestyleNews, bangladeshNews, worldNews, sportsNews, techNews] =
    (
      await Promise.all([
        getData("categories/economy/stories?size=40"),
        getData("categories/feature/stories"),
        getData("categories/entertainment/stories"),
        getData("categories/lifestyle/stories"),
        getData("categories/bangladesh/stories?size=30"),
        getData("categories/world/stories"),
        getData("categories/sports/stories"),
        getData("categories/tech/stories"),
      ])
    ).map((item) => item?.data.filter(filterTopNews).filter(filterRecommended).filter(filterLatestNews));

  const onThisDay = (await getData("categories/on_this_day/stories"))?.data.filter(
    (item: { created_at: moment.MomentInput }) =>
      moment().format("MMM D YYYY") === moment(item.created_at).format("MMM D YYYY")
  );
  const trendingTopics = (await getData("trendy-topics"))?.data;

  return (
    <>
      {/* ==== webpage schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />

      <Ads className="my-10" src="/ads/Ad-Master-50.gif" alt="Ads" />

      <BlockNews
        className="desktop-container"
        data={topNews?.slice(0, 8)}
        ads1="/ads/Global.gif"
        ads2="/ads/union-bank-ad.gif"
      />
      <Ads className="my-10" src="/ads/FSB-banner-ad.gif" alt="ads" showHeader={false} />
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
      <Ads className="my-12" src="/ads/banner_ibbl.gif" alt="ads" showHeader={false} />
      <div className="bg-[#F6EFEF] dark:bg-dark-300 py-8">
        <div className="desktop-container">
          <AccentHeader header="recommended for you" color="#228B22" />
          <SquareGrid data={recommendedNews?.slice(0, 4)} gridCols={4} />
        </div>
      </div>

      <Ads className="my-12" src="/ads/FSB-banner-ad.gif" alt="ads" showHeader={false} />
      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <BlockNews2
            sectionHeader="Economy"
            headerColor="#00479B"
            adsUrl="/ads/FSB-banner-ad.gif"
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
            <Ads className="mt-6" src="/ads/Global.gif" alt="ads" showHeader={false} />
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
        <Ads className="mt-4" src="/ads/banner_ibbl.gif" alt="ads" showHeader={false} />
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
              <Ads className="mt-4" src="/ads/SIBL_Profit_300x250.gif" alt="ads" showHeader={false} />
              <Ads className="mt-4" src="/ads/FSIBL-November-2023-20.gif" alt="ads" showHeader={false} />
            </div>
          </div>
        </div>
        <Ads className="my-8" src="/ads/banner_ibbl.gif" alt="ads" showHeader={false} />
      </div>

      <BlockNews5
        sectionHeader="entertainment"
        headerColor="#5D26D1"
        className="desktop-container"
        data={entertainmentNews}
      />

      <Ads className="my-16" src="/ads/FSB-banner-ad.gif" alt="ads" showHeader={false} />
      <ListGrid className="desktop-container" data={[bangladeshNews, worldNews, sportsNews, techNews]} />
      <Ads className="mt-12" src="/ads/banner_ibbl.gif" alt="ads" showHeader={false} />
    </>
  );
}
