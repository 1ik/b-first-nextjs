import { TopNewsSection } from "@bfirst/components-top-news-section";
import { getData } from "./utils/dataFetch";

export default async function Index() {
  const data = await getData("categories/0/featured-stories");
  return (
    <div className="desktop-container">
      
    </div>
  );
}
