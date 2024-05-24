import { AccentHeader } from "@bfirst/components-accent-header";
import { getData } from "./utils/dataFetch";
import filterOutOTD from "./utils/filterOutOTD";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";

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
      <Navbar/>
      <img className="mx-auto my-14" src="/ads/nagad.png" alt="Ads"/>
      <TrendingTopics items={trendingTopics} title="Trending Topics"/>
    </>
  )
}
