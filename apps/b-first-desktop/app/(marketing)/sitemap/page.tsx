import Navbar from "../../components/Navbar/Navbar";
import { HtmlSitemap } from "@bfirst/components-html-sitemap";
function sitemap() {
  return (
    <>
      <Navbar />
      <HtmlSitemap className="desktop-container" />
    </>
  );
}

export default sitemap;
