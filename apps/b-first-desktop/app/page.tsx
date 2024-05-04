import { BlockNews3 } from "@bfirst/components-block-news-3";
import Navbar from "./components/Navbar/Navbar";
import { getData } from "./utils/dataFetch";

export default async function Index() {
  const topNews = await getData("categories/0/featured-stories");
  const latestNews = await getData("latest/stories");
  const economyNews = await getData("categories/economy/stories");
  const lifestyleNews = await getData("categories/lifestyle/stories");
  const trendingTopics = await getData("trendy-topics");
  return (
    <>
      <Navbar />
      {/* <div className="desktop-container mb-8">
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
      <div className="desktop-container">
        <div className="grid grid-cols-4 gap-x-4">
          <div className="col-span-3">
            <BlockNews data={economyNews.data} />
          </div>
          <div className="border-l pl-3">
            <AccentHeader header="Todays News" />
            <ItemList data={latestNews.data.slice(8, 14)} listType="circle" />
          </div>
        </div>
      </div> */}
      <div className="desktop-container">
        <BlockNews3
          data={latestNews.data}
          ads1="https://placehold.co/320x250?text=Ads"
          ads2="https://placehold.co/320x250?text=Ads"
        />
      </div>
    </>
  );
}
