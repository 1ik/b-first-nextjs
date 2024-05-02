import { TopNewsSection } from "@bfirst/components-top-news-section";
import Navbar from "./components/Navbar/Navbar";
import { getData } from "./utils/dataFetch";

export default async function Index() {
  const data = await getData("categories/0/featured-stories");
  return (
    <>
      <Navbar />
      <div className="desktop-container">
        <TopNewsSection
          data={data.data}
          ads1="https://placehold.co/320x250?text=Ads"
          ads2="https://placehold.co/320x250?text=Ads"
        />
      </div>
    </>
  );
}
