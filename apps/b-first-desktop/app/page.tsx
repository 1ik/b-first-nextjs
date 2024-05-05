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
      <TrendingTopics className="desktop-container mb-8" items={trendingTopics?.data} title="Trending Topics" />
      <BlockNews
        className="desktop-container"
        data={topNews?.data}
        ads1="https://placehold.co/320x250?text=Ads"
        ads2="https://placehold.co/320x250?text=Ads"
      />
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />
      <SquareGrid showAccentHeader className="desktop-container" data={latestNews?.data.slice(7, 15)} />
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="bg-[#F6EFEF] py-8">
        <div className="desktop-container">
          <AccentHeader header="Recommended For You" color="#5D26D1" />
          <SquareGrid data={latestNews?.data.slice(8, 12)} />
        </div>
      </div>
      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <BlockNews2 adsUrl="https://placehold.co/720x100?text=Ads" className="col-span-3 border-r pr-4 mr-4" data={economyNews?.data} />

          <div>
            <AccentHeader header="Latest News" color="#5D26D1" />
            <ItemList data={latestNews?.data.slice(0, 6)} listType="circle" />
            <img className="mt-4 mx-auto" src="https://placehold.co/320x250?text=Ads" alt="Ads" />
          </div>
        </div>
      </div>

     

      <div className="desktop-container my-10">
        <div className="grid grid-cols-4">
          <div className="col-span-3 border-r pr-4 mr-4">
            <BlockNews3 adsUrl="https://placehold.co/740x90?text=Ads" data={featureNews?.data} />
       
          </div>
          <div>
            <AccentHeader header="Most Viewed" color="#119F9F" />
            <ItemList data={latestNews?.data.slice(14, 22)} listType="number" />
            <img className="mt-4 mx-auto" src="https://placehold.co/320x250?text=Ads" alt="Ads" />
          </div>
        </div>
      </div>

      <div className="desktop-container">
        <div className="grid grid-cols-4">
          <BlockNews4 adsUrl="https://placehold.co/720x100?text=Ads" className="col-span-3 border-r pr-4 mr-4" data={latestNews?.data} />
          <div>
            <AccentHeader header="On this day" color="#A49A46" />
            <ItemList showImage showDate data={latestNews?.data.slice(14, 19)} />
            <div className="flex flex-col gap-y-3 items-center">
              <img src="https://placehold.co/320x250?text=Ads" alt="Ads" />
              <img src="https://placehold.co/320x250?text=Ads" alt="Ads" />
            </div>
          </div>
        </div>
      </div>
     
      <BlockNews5 className="desktop-container my-10" data={entertainmentNews?.data} />
      <img className="mx-auto my-16" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <ListGrid className="desktop-container" data={listData} />

      <img className="mx-auto my-12" src="https://placehold.co/720x100?text=Ads" alt="Ads" />

      <div className="bg-black">
        <Footer className="desktop-container" logo="/img/logo-light.svg" />
      </div>
    </>
  );
}
