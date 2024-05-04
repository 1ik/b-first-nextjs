import { AccentHeader } from "@bfirst/components-accent-header";
import { BlockNews } from "@bfirst/components-block-news";
import { BlockNews2 } from "@bfirst/components-block-news-2";
import { BlockNews3 } from "@bfirst/components-block-news-3";
import { BlockNews4 } from "@bfirst/components-block-news-4";
import { ItemList } from "@bfirst/components-item-list";
import { SquareGrid } from "@bfirst/components-square-grid";
import { TopNewsSection } from "@bfirst/components-top-news-section";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";

export default async function Index() {
  const topNews = await getData("categories/0/featured-stories");
  const latestNews = await getData("latest/stories");
  const economyNews = await getData("categories/economy/stories");
  const featureNews = await getData("categories/feature/stories");
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
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <div className="bg-[#F6EFEF] py-8">
        <div className="desktop-container">
          <SquareGrid data={latestNews.data.slice(8, 12)} />
        </div>
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <div className="desktop-container">
        <div className="grid grid-cols-4 gap-x-4">
          <div className="col-span-3">
            <BlockNews data={economyNews.data} />
          </div>
          <div className="border-l pl-3">
            <AccentHeader header="Todays News" />
            <ItemList data={latestNews.data.slice(12, 14)} listType="circle" />
          </div>
        </div>
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="desktop-container my-10">
        <div className="grid grid-cols-4 gap-x-4">
          <div className="col-span-3">
            <BlockNews2 data={featureNews.data} />
            <div className="flex justify-end mt-8">
              <img src="https://placehold.co/740x90?text=Ads" alt="Ads" />
            </div>
          </div>
          <div className="border-l pl-3">
            <AccentHeader header="Most Viewed" />
            <div className="mt-8">
              <ItemList data={latestNews.data.slice(14, 22)} listType="number" />
            </div>
          </div>
        </div>
      </div>

      <div className="desktop-container">
        <BlockNews3
          data={latestNews.data}
          ads1="https://placehold.co/320x250?text=Ads"
          ads2="https://placehold.co/320x250?text=Ads"
        />
      </div>

      <div className="desktop-container my-10">
        <BlockNews4 data={economyNews.data} />
      </div>
    </>
  );
}
