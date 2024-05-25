import { BlockNewsMob3 } from "@bfirst/components-block-news-mob-3";
import { BlockNewsMob4 } from "@bfirst/components-block-news-mob-4";
import { BlockNewsMob5 } from "@bfirst/components-block-news-mob-5";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";
import filterOutOTD from "./utils/filterOutOTD";

export default async function Index() {
  const [topNews, recommendedNews] = (
    await Promise.all([getData("categories/0/featured-stories"), getData("recommended-stories")])
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

  const [
    onThisDay,
    economyNews,
    featureNews,
    entertainmentNews,
    lifestyleNews,
    bangladeshNews,
    worldNews,
    sportsNews,
    techNews,
  ] = (
    await Promise.all([
      getData("categories/on_this_day/stories"),
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

  const trendingTopics = (await getData("trendy-topics"))?.data;
  return (
    <>
      <Navbar />
      <img className="mx-auto my-14" src="/ads/nagad.png" alt="Ads" />
      <TrendingTopics items={trendingTopics} title="Trending Topics" />
      <BlockNewsMob3 data={featureNews} sectionHeader="feature" headerColor="#8BD032" />
      <BlockNewsMob4 data={lifestyleNews} sectionHeader="Lifestyle" headerColor="#EF2D8A" />
      <BlockNewsMob5
        data={entertainmentNews}
        ads="/ads/SIBL_Profit_300x250.gif"
        sectionHeader="entertainment"
        headerColor="#5D26D1"
      />
    </>
  );
}
