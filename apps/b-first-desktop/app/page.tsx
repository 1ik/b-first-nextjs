import { AccentHeader } from "@bfirst/components-accent-header";
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

export default async function Index() {
  const [topNews, recommendedNews] = (
    await Promise.all([getData("categories/0/featured-stories?size=13"), getData("recommended-stories")])
  ).map((item) => item.data);

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
        getData("categories/economy/stories"),
        getData("categories/feature/stories"),
        getData("categories/entertainment/stories"),
        getData("categories/lifestyle/stories"),
        getData("categories/bangladesh/stories"),
        getData("categories/world/stories"),
        getData("categories/sports/stories"),
        getData("categories/tech/stories"),
      ])
    ).map((item) => item?.data.filter(filterTopNews).filter(filterRecommended).filter(filterLatestNews));

  const onThisDay = (await getData("categories/on_this_day/stories")).data.filter(
    (item: { created_at: moment.MomentInput }) =>
      moment().format("MMM D YYYY") === moment(item.created_at).format("MMM D YYYY")
  );
  const trendingTopics = (await getData("trendy-topics"))?.data;

  return (
    <>
      <Navbar />
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
     
      <BlockNews
        className="desktop-container"
        data={topNews.slice(0, 5)}
        ads1="/ads/Global.gif"
        ads2="/ads/union-bank-ad.gif"
      />
      <img className="mx-auto my-14" src="/ads/FSB-banner-ad.gif" alt="Ads" />
      <SquareGrid showAccentHeader className="desktop-container" data={topNews.slice(5, 13)} gridCols={4} />
      <img className="mx-auto my-12" src="/ads/banner_ibbl.gif" alt="Ads" />

      <div className="bg-[#F6EFEF] dark:bg-dark-300 py-8">
        <div className="desktop-container">
          <AccentHeader header="recommended for you" color="#228B22" />
          <SquareGrid data={recommendedNews?.slice(0, 4)} gridCols={4} />
        </div>
      </div>
      <img className="mx-auto my-12" src="/ads/FSB-banner-ad.gif" alt="Ads" />

      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <BlockNews2
            sectionHeader="Economy"
            headerColor="#00479B"
            adsUrl="/ads/social_islami.png"
            className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4"
            data={economyNews}
          />

          <div>
            <AccentHeader header="Latest News" color="#5D26D1" />
            <ItemList data={latestNews?.slice(0, 6)} listType="circle" showButton moreNewsLink="/latest" />
            <img className="mt-4 mx-auto" src="/ads/Global.gif" alt="Ads" />
          </div>
        </div>
      </div>

      <div className="desktop-container my-10">
        <div className="grid grid-cols-4">
          <div className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4">
            <BlockNews3 sectionHeader="Feature" headerColor="#8BD032" adsUrl="/ads/banner_ibbl.gif" data={featureNews} />
          </div>
          <div>
            <AccentHeader header="Most Viewed" color="#119F9F" />
            <ItemList data={latestNews?.slice(6, 11)} listType="number" />
            <img className="mt-4 mx-auto" src="/ads/Global.gif" alt="Ads" />
          </div>
        </div>
      </div>

      <div className="desktop-container mt-20">
        <div className="grid grid-cols-4">
          <BlockNews4
            sectionHeader="Lifestyle"
            headerColor="#EF2D8A"
            adsUrl="/ads/banner_ibbl.gif"
            className="col-span-3 border-r dark:border-dark-300 pr-4 mr-4"
            data={lifestyleNews}
          />
          <div>
            <AccentHeader header="On this day" color="#A49A46" />
            <ItemList showImage showDate data={onThisDay} />
            <div className="flex flex-col mt-8 gap-y-8 items-center">
              <img src="ads/SIBL_Profit_300x250.gif" alt="Ads" />
              <img src="ads/FSIBL-November-2023-20.gif" alt="Ads" />
            </div>
          </div>
        </div>
      </div>

      <BlockNews5
        sectionHeader="entertainment"
        headerColor="#5D26D1"
        className="desktop-container my-10"
        data={entertainmentNews}
      />
      <img className="mx-auto my-16" src="/ads/FSB-banner-ad.gif" alt="Ads" />

      <ListGrid className="desktop-container" data={[bangladeshNews, worldNews, sportsNews, techNews]} />

      <img className="mx-auto mt-12" src="/ads/banner_ibbl.gif" alt="Ads" />
    </>
  );
}
