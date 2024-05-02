import { SquareGrid } from "@bfirst/components-square-grid";
import { TopNewsSection } from "@bfirst/components-top-news-section";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";

export default async function Index() {
  const topNews = await getData("categories/0/featured-stories");
  const latestNews = await getData("latest/stories");
  const trendingTopics = await getData("trendy-topics");
  return (
    <>
      <Navbar />
      <div className="desktop-container mb-8">
        <TrendingTopics items={trendingTopics.data} title="Trending Topics" />
      </div>
      <div className="desktop-container">
        <TopNewsSection
          data={topNews.data}
          ads1="https://placehold.co/320x250?text=Ads"
          ads2="https://placehold.co/320x250?text=Ads"
        />
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <div className="desktop-container">
        <SquareGrid data={latestNews.data.slice(0, 8)} />
      </div>
    </>
  );
}
