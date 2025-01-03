import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BlockNewsMob6 } from "@bfirst/components-block-news-mob-6";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { notFound } from "next/navigation";
import LoadMore from "../../components/LoadMore/LoadMore";
import Navbar from "../../components/Navbar/Navbar";
import TrendingTopics from "../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../utils/dataFetch";
import { getAdsUrl } from "@bfirst/utilities";
import { getAdsObj } from "../../utils/getAdsObj";
import filterCategory from "../../utils/filterCategory";

export async function generateMetadata({ params }) {
  const categoryDetails = await getData(`categories?name=${params.category}`);

  return {
    title: categoryDetails?.data?.[0]?.meta?.title
      ? `${categoryDetails?.data?.[0]?.meta?.title} | Bangladesh First`
      : "Bangladesh First",
    description: categoryDetails?.data?.[0]?.meta?.description,
  };
}

export default async function CategoryPage({ params }) {
  const { category } = params;
  const [categoryDetails, trendingTopics, categroyNews, latestNews, topNews] = await Promise.all([
    getData(`categories?name=${category}`),
    getData("trendy-topics"),
    getData(`categories/${category}/stories?size=20&page=1`),
    getData("latest/stories?size=30"),
    getData("categories/0/featured-stories"),
  ]);

  if (!categroyNews?.data.length) return notFound();

  const webpageJsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: categoryDetails?.data?.[0].meta?.title
      ? `${categoryDetails?.data?.[0].meta?.title} | Bangladesh First`
      : "Bangladesh First",
    description: categoryDetails?.data?.[0].meta?.description,
    publisher: {
      "@type": "Organization",
      name: "Bangladesh First",
    },
  };

  const filteredLatestNews = filterCategory(latestNews?.data, "On_This_Day", "Video_Gallery", "Photo_Gallery");
  
  // data for ads
  const ads_list = await getData("ads?page=category");
  const ads_obj = getAdsObj(ads_list?.ads);

  return (
    <>
      {/* ========= webpage schema markups */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      <Navbar activeLink={`/${category}`} />
      <div className="px-3">
        <Ads className="my-6" src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
        <TrendingTopics className="my-4" title="Trending" items={trendingTopics?.data} />
        <BreadCrumb
          className="my-10"
          links={[
            {
              name: category,
              href: `/${category}`,
            },
          ]}
        />
        <BlockNewsMob6 data={categroyNews?.data.slice(0, 4)} />
        <Ads className="my-14" src={getAdsUrl(ads_obj?.banner2)} alt="Ads" />
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-5">
          <div className="sm:col-span-2">
            {categroyNews?.data.slice(4).map((news) => (
              <div key={news.id}>
                <div className="hidden sm:block">
                  <ItemCardHorizontal
                    size="md"
                    className="pb-4 mb-4 border-b dark:border-dark-300"
                    data={news}
                    showIntro
                    titleFontSize="18px"
                  />
                </div>
                <div className="sm:hidden">
                  <ItemCardHorizontal
                    size="md"
                    className="pb-4 mb-4 border-b dark:border-dark-300"
                    data={news}
                    titleFontSize="18px"
                  />
                </div>
              </div>
            ))}
            <div className="hidden sm:block">
              <LoadMore
                initialPage={2}
                lastPage={categroyNews?.meta.last_page}
                url={`categories/${category}/stories`}
              />
            </div>
            <div className="sm:hidden">
              <LoadMore
                initialPage={2}
                lastPage={categroyNews?.meta.last_page}
                url={`categories/${category}/stories`}
                showIntro={false}
              />
            </div>
          </div>
          <div>
            <div>
              <Ads className="my-8" src={getAdsUrl(ads_obj?.square1)} alt="Ads" />
              <AccentHeader header="Latest News" color="#5D26D1" />
              <ItemList
                listType="circle"
                data={filteredLatestNews?.slice(0, 6)}
                moreNewsLink="/latest"
                showButton
                titleFontSize="16px"
              />
            </div>
            <div>
              <Ads className="my-8" src={getAdsUrl(ads_obj?.square2)} alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.data.slice(0, 6)} listType="number" titleFontSize="16px" />
              <Ads className="my-8" src={getAdsUrl(ads_obj?.square3)} alt="Ads" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
