import Head from "next/head";
import BackToTop from "../components/BackToTop/BackToTop";
import BlockNews from "../components/BlockNews/BlockNews";
import BlockNews2 from "../components/BlockNews2/BlockNews2";
import BlockNews3 from "../components/BlockNews3/BlockNews3";
import FeaturedItems from "../components/FeaturedItems/FeaturedItems";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileMenu from "../components/MobileMenu/MobileMenu";
import Slider from "../components/Slider/Slider";
import Adds from "../components/adds/Adds";
import TopicList from "../components/TopicList/TopicList";

export default function Index({ featuredNews, latestNews, bangladesh, politics, world }: any) {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://bangladeshfirst.com" />
      </Head>
      <Header />
      <MobileMenu />
      <main id="content">
        <TopicList />
        <FeaturedItems items={featuredNews} />
        <BlockNews position="mx-auto" items={featuredNews.slice(5, 11)} title={""} />
        <Slider items={world.slice(0, 6)} title={"World"} />
        <Adds />
        <img src="/img/ads/banner_ibbl.gif" alt="Add" className="fixed bottom-4 z-50 left-1/2 -translate-x-1/2" />
        <BlockNews2 items={bangladesh.slice(0, 6)} latest={latestNews.slice(0, 5)} title={"Bangladesh"} />
        <BlockNews3 items={politics} latest={latestNews.slice(6, 11)} title={"Politics"} />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}

const baseUrl = "https://backend.bangladeshfirst.com/api/v1/public";

export const getServerSideProps = async () => {
  const [featuredNewsRes, latestNewsRes, politicsNews, bangladeshNews, worldNews] = await Promise.all([
    fetch(`${baseUrl}/categories/0/featured-stories`),
    fetch(`${baseUrl}/latest/stories`),
    fetch(`${baseUrl}/categories/politics/stories`),
    fetch(`${baseUrl}/categories/bangladesh/stories`),
    fetch(`${baseUrl}/categories/world/stories`),
  ]);

  const featuredNews: unknown[] = (await featuredNewsRes.json()).data;
  const latestNews: unknown[] = (await latestNewsRes.json()).data;

  const filterFn = (item: unknown) => !latestNews.find((f) => (f as { id: number }).id === (item as { id: number }).id);

  const bangladesh = (await bangladeshNews.json()).data.filter(filterFn);
  const politics = (await politicsNews.json()).data.filter(filterFn);
  const world = (await worldNews.json()).data.filter(filterFn);

  return { props: { featuredNews, latestNews, bangladesh, politics, world } };
};
