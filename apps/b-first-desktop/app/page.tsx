import { AccentHeader } from "@bfirst/components-accent-header";
import { BlockNews } from "@bfirst/components-block-news";
import { BlockNews2 } from "@bfirst/components-block-news-2";
import { BlockNews3 } from "@bfirst/components-block-news-3";
import { BlockNews4 } from "@bfirst/components-block-news-4";
import { BlockNews5 } from "@bfirst/components-block-news-5";
import { Footer } from "@bfirst/components-footer";
import { ItemList } from "@bfirst/components-item-list";
import { ListGrid } from "@bfirst/components-list-grid";
import { SquareGrid } from "@bfirst/components-square-grid";
import Navbar from "./components/Navbar/Navbar";
import TrendingTopics from "./components/TrendingTopics/TrendingTopics";
import { getData } from "./utils/dataFetch";

export default async function Index() {
  const topNews = await getData("categories/0/featured-stories");
  const latestNews = await getData("latest/stories");
  const economyNews = await getData("categories/economy/stories");
  const featureNews = await getData("categories/feature/stories");
  const entertainmentNews = await getData("categories/entertainment/stories");
  const trendingTopics = await getData("trendy-topics");
  const listData = await Promise.all([
    getData("categories/bangladesh/stories"),
    getData("categories/world/stories"),
    getData("categories/sports/stories"),
    getData("categories/tech/stories"),
  ]);

  return (
    <>
      <Navbar />
      <div className="desktop-container">
        <TrendingTopics className="mb-8" items={trendingTopics.data} title="Trending Topics" />
      </div>
      <div className="desktop-container">
        <BlockNews
          data={topNews.data}
          ads1="https://placehold.co/320x250?text=Ads"
          ads2="https://placehold.co/320x250?text=Ads"
        />
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <div className="desktop-container">
        <SquareGrid data={latestNews.data.slice(7, 15)} />
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <div className="bg-[#F6EFEF] py-8">
        <div className="desktop-container">
          <SquareGrid data={latestNews.data.slice(8, 12)} />
        </div>
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <BlockNews2 className="col-span-3 border-r pr-4 mr-4" data={economyNews.data} />

          <div>
            <AccentHeader header="Todays News" />
            <ItemList data={latestNews.data.slice(0, 6)} listType="circle" />
          </div>
        </div>
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="desktop-container my-10">
        <div className="grid grid-cols-4">
          <div className="col-span-3 border-r pr-4 mr-4">
            <BlockNews3 data={featureNews.data} />
            <div className="flex justify-end mt-8">
              <img src="https://placehold.co/740x90?text=Ads" alt="Ads" />
            </div>
          </div>
          <div>
            <AccentHeader header="Most Viewed" />
            <ItemList data={latestNews.data.slice(14, 22)} listType="number" />
            <img className="mt-4 mx-auto" src="https://placehold.co/320x250?text=Ads" alt="Ads" />
          </div>
        </div>
      </div>

      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <div className="col-span-3 border-r pr-4 mr-4">
            <BlockNews4 data={latestNews.data} />
          </div>
          <div>
            <AccentHeader header="On this day" color="#A49A46" />
            <ItemList data={latestNews.data.slice(14, 22)} listType="circle" />
            <div className="flex flex-col gap-y-3 items-center">
              <img src="https://placehold.co/320x250?text=Ads" alt="Ads" />
              <img src="https://placehold.co/320x250?text=Ads" alt="Ads" />
            </div>
          </div>
        </div>
      </div>

      <img className="mx-auto my-16" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="desktop-container">
        <ListGrid data={listData} />
      </div>

      <div className="desktop-container my-10">
        <BlockNews5 data={entertainmentNews.data} />
      </div>

      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="bg-black">
        <div className="desktop-container">
          <Footer logo="/img/logo-light.svg" />
        </div>
      </div>
    </>
  );
}
