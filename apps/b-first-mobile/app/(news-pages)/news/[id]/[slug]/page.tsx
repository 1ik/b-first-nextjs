import { AccentHeader } from "@bfirst/components-accent-header";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { ProfileCard } from "@bfirst/components-profile-card";
import { SocialShare } from "@bfirst/components-social-share";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getImageUrl } from "@bfirst/utilities";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../../../components/Navbar/Navbar";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";
import filterOutOTD from "../../../../utils/filterOutOTD";

export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await getData(`story/details/${params.id}`);

  return {
    title: data?.story.title,
    description: data?.story.meta.intro,
    openGraph: {
      title: data?.story.title,
      description: data?.story.meta.intro,
      images: [
        {
          url: getImageUrl(data?.story.meta.featured_image, 600, 315, 20),
          secureUrl: getImageUrl(data?.story.meta.featured_image, 600, 315, 20),
          width: 1200,
          height: 630,
          alt: data?.story.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data?.story.title,
      description: data?.story.meta.intro,
      images: [
        {
          url: getImageUrl(data?.story.meta.featured_image),
          secureUrl: getImageUrl(data?.story.meta.featured_image),
          alt: data?.story.title,
          width: 1600,
          height: 900,
        },
      ],
    },
    alternates: {
      canonical: `https://bangladeshfirst.com/news/${params.id}/${params.slug}`,
    },
  };
}

export default async function NewsDetails({ params }) {
  const link_url = `http://bangladeshfirst.com/news/${params.id}/${params.slug}`;

  const detailsData = await getData(`story/details/${params.id}`);

  const [trendingTopics, latestNews, topNews, categoryNews] = (
    await Promise.all([
      getData("trendy-topics"),
      getData("latest/stories"),
      getData("categories/0/featured-stories"),
      getData(`categories/${detailsData?.story.categories[0].name}/stories`),
    ])
  ).map((item) => item?.data);

  if (!detailsData) return notFound();

  const filteredLatestNews = latestNews.filter(filterOutOTD);
  const tagsArr = detailsData?.story.tags.map((tag: { id: any }) => tag.id);
  const relatedNews = (await getData(`related-stories?tags=${tagsArr.join(",")}`))?.data.filter(
    (rN: { id: any }) => rN.id != params.id
  );

  return (
    <div>
      <Navbar />

      <div className="px-3">
        {/* TRENDING TOPICS */}
        <img className="mx-auto mt-3" src="/ads/nagad.png" alt="Ads" />
        <TrendingTopics className="my-5" items={trendingTopics} title="Trending Topics" />
        <img className="mx-auto mb-4" src="/ads/nagad.png" alt="Ads" />

        {/* BREADCRUMB */}
        <BreadCrumb
          links={[
            {
              name: detailsData?.story.categories[0].name.split("_").join(" "),
              href: `/${detailsData?.story.categories[0].name.toLowerCase()}`,
            },
          ]}
        />

        <div className="grid sm:grid-cols-8 grid-cols-1 gap-x-4">
          {/* NEWS TITLE */}
          <div className="sm:col-span-8">
            <h1 className="text-3xl sm:text-4xl my-10">{detailsData?.story.title}</h1>
          </div>

          {/* ==================== GRID LEFT BOX (TAB) | GRID BOTTOM BOX (MOBILE) ==================== */}
          <div className="sm:col-span-3 order-last sm:order-1">
            <div className="sm:block hidden">
              {/* INTRO */}
              <h3 className="text-base font-montserrat">{detailsData?.story.meta.intro}</h3>

              {/* SOCIAL SHARE & PROFILE CARD */}
              <SocialShare className="my-4" title="Share News" shareLink={link_url} />
              <ProfileCard data={detailsData?.story.authors[0]} createdTime={detailsData?.story.created_at} />
            </div>
            <img className="my-5 mx-auto" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />

            {/* MORE FROM SECTION LIST */}
            <div>
              <AccentHeader
                header={`more from ${detailsData?.story.categories[0].name.split("_").join(" ")}`}
                color={detailsData?.story.categories[0].color_code}
              />
              {categoryNews
                .filter((item: { id: any }) => item.id !== detailsData.story.id)
                ?.slice(0, 6)
                .map((item: any, index: number) => (
                  <ItemCardHorizontal key={index} className="mb-8 last:mb-0" size="md" data={item} />
                ))}
            </div>
            <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />

            {/* LATEST NEWS SECTION LIST */}
            <div>
              <AccentHeader header="LATEST News" color="#5D26D1" />
              <ItemList listType="circle" data={filteredLatestNews?.slice(0, 5)} showButton moreNewsLink="/latest" />
            </div>
            <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />

            {/* TOP NEWS SECTION LIST */}
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList listType="number" data={topNews?.slice(0, 6)} />
            </div>
            <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />
          </div>

          {/* ==================== GRID RIGHT BOX (TAB) | GRID TOP BOX (MOBILE) ===================== */}
          <div className="sm:col-span-5 order-1">
            <img src={getImageUrl(detailsData?.story.meta.featured_image)} alt={detailsData?.story.title} />
            <p className="font-montserrat text-xs mt-2">{detailsData?.story.meta.imageCaption}</p>

            <div className="sm:hidden">
              <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />
              {/* INTRO */}
              <h3 className="text-base font-montserrat">{detailsData?.story.meta.intro}</h3>

              {/* SOCIAL SHARE & PROFILE CARD */}
              <SocialShare className="my-4" title="Share News" shareLink={link_url} />
              <ProfileCard data={detailsData?.story.authors[0]} createdTime={detailsData?.story.created_at} />
            </div>

            <div
              className="text-base leading-[110%] [&>p]:mt-4"
              dangerouslySetInnerHTML={{ __html: detailsData?.story.content }}
            ></div>

            <div className="my-4 border-t border-b dark:border-dark-300 py-4 flex gap-x-4 items-center">
              <h4 className="text-sm">Tags:</h4>
              <ul className="flex gap-2 flex-wrap">
                {detailsData?.story.tags.map((tag: any, index: number) => (
                  <li
                    key={index}
                    className="text-xs font-montserrat font-semibold py-0.5 px-2 rounded-md bg-[#2B2B2B] text-white"
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>

            <img className="mx-auto mb-4" src="/ads/nagad.png" alt="Ads" />

            {relatedNews?.length ? (
              <div>
                <AccentHeader header="related news" color="#8E7581" />
                <SquareGrid className="grid-cols-2 gap-4" data={relatedNews.slice(0, 6)} size="md" gridCols={2} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}