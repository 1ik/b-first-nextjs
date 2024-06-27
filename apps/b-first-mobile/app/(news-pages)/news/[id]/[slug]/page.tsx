import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { ProfileCard } from "@bfirst/components-profile-card";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getImageUrl } from "@bfirst/utilities";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../../../../../../libs/fonts/montserrat/index.css";
import ImagePreview from "../../../../components/ImagePreview/ImagePreview";
import Navbar from "../../../../components/Navbar/Navbar";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";
import filterOutOTD from "../../../../utils/filterOutOTD";

export async function generateMetadata({ params }): Promise<Metadata> {
  const data = await getData(`story/details/${params.id}`);

  return {
    title: data?.story?.title,
    description: data?.story?.meta?.intro,
    openGraph: {
      title: data?.story?.title,
      description: data?.story?.meta?.intro,
      images: [
        {
          url: getImageUrl(data?.story?.meta?.featured_image, 600, 315, 20),
          secureUrl: getImageUrl(data?.story?.meta?.featured_image, 600, 315, 20),
          width: 1200,
          height: 630,
          alt: data?.story?.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data?.story?.title,
      description: data?.story?.meta?.intro,
      images: [
        {
          url: getImageUrl(data?.story?.meta?.featured_image),
          secureUrl: getImageUrl(data?.story?.meta?.featured_image),
          alt: data?.story.title,
          width: 1600,
          height: 900,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/news/${params.id}/${params.slug}`,
    },
  };
}

export default async function NewsDetails({ params }) {
  const news_link_url = `${process.env.BASE_URL}/news/${params.id}/${params.slug}`;
  const detailsData = await getData(`story/details/${params.id}`);

  if (!detailsData) return notFound();

  const webpageJsonLd = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    name: detailsData?.story.title,
    description: detailsData?.story.meta.intro,
    publisher: {
      "@type": "Organization",
      name: "Bangladesh First",
    },
  };

  const newsarticleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: detailsData?.story.title,
        description: detailsData?.story.meta.intro,
        author: {
          "@type": "Person",
          name: detailsData?.story.authors[0].name,
        },
        publisher: {
          "@type": "Organization",
          name: "Bangladesh First",
          url: "https://bfirst.news",
          logo: {
            "@type": "ImageObject",
            url: "https://bfirst.news/img/logo-dark.svg",
          },
        },
        datePublished: detailsData?.story.created_at,
        image: {
          "@type": "ImageObject",
          url: getImageUrl(detailsData?.story.meta.featured_image),
        },
        mainEntityOfPage: news_link_url,
      },
    ],
  };

  const [trendingTopics, latestNews, topNews, categoryNews] = (
    await Promise.all([
      getData("trendy-topics"),
      getData("latest/stories"),
      getData("categories/0/featured-stories"),
      getData(`categories/${detailsData?.story.categories[0].name}/stories`),
    ])
  ).map((item) => item?.data);

  const filteredLatestNews = latestNews.filter(filterOutOTD);
  const tagsArr = detailsData?.story.tags.map((tag: { id: any }) => tag.id);
  const relatedNews = (await getData(`related-stories?tags=${tagsArr.join(",")}`))?.data.filter(
    (rN: { id: any }) => rN.id != params.id
  );

  return (
    <>
      {/* ====== webpage schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      {/* ====== news article schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsarticleJsonLd) }}
      ></script>

      <Navbar activeLink={`/${detailsData?.story.categories[0].name.toLowerCase()}`} />

      <div className="px-3">
        {/* TRENDING TOPICS */}
        <Ads className="mx-auto mt-3" src="/ads/banner_ibbl.gif" alt="Ads" showHeader={false} />
        <TrendingTopics className="my-5" items={trendingTopics} title="Trending" />
        <Ads className="mx-auto mb-4" src="/ads/FSB-banner-ad.gif" alt="Ads" showHeader={false} />

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
            <h1 className="text-3xl sm:text-4xl font-bold my-10">{detailsData?.story.title}</h1>
          </div>

          {/* ==================== GRID LEFT BOX (TAB) | GRID BOTTOM BOX (MOBILE) ==================== */}
          <div className="sm:col-span-3 order-last sm:order-1">
            <div className="sm:block hidden">
              {/* INTRO */}
              <h3 className="text-base montserrat-regular">{detailsData?.story.meta.intro}</h3>

              {/* SOCIAL SHARE & PROFILE CARD */}
              <ProfileCard
                className="my-5"
                data={detailsData?.story.authors[0]}
                createdTime={detailsData?.story.created_at}
                shareLink={news_link_url}
              />
            </div>

            <Ads className="my-5" src="/ads/sibl.png" alt="Ads" />

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
                  <ItemCardHorizontal
                    key={index}
                    className="mb-8 last:mb-0"
                    size="md"
                    data={item}
                    titleFontSize="16px"
                  />
                ))}
            </div>

            <Ads className="my-8" src="/ads/Global.gif" alt="Ads" />

            {/* LATEST NEWS SECTION LIST */}
            <div>
              <AccentHeader header="LATEST News" color="#5D26D1" />
              <ItemList
                listType="circle"
                data={filteredLatestNews?.slice(0, 5)}
                showButton
                moreNewsLink="/latest"
                titleFontSize="16px"
              />
            </div>

            <Ads className="my-8" src="/ads/union-bank-ad.gif" alt="Ads" />

            {/* TOP NEWS SECTION LIST */}
            <div>
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList listType="number" data={topNews?.slice(0, 6)} titleFontSize="16px" />
            </div>

            <Ads className="my-8" src="/ads/Global.gif" alt="Ads" />
          </div>

          {/* ==================== GRID RIGHT BOX (TAB) | GRID TOP BOX (MOBILE) ===================== */}
          <div className="sm:col-span-5 order-1">
            <ImagePreview url={getImageUrl(detailsData?.story.meta.featured_image)} alt={detailsData?.story.title} />
            <p className="montserrat-regular-italic text-xs mt-2">{detailsData?.story.meta.imageCaption}</p>

            <div className="sm:hidden">
              <Ads className="my-8" src="/ads/ibbl.gif" alt="Ads" />
              {/* INTRO */}
              <h3 className="text-base montserrat-regular">{detailsData?.story.meta.intro}</h3>
              <ProfileCard
                className="my-5"
                data={detailsData?.story.authors[0]}
                createdTime={detailsData?.story.created_at}
                shareLink={news_link_url}
              />
            </div>

            <div
              className="story-body text-base leading-[120%] [&>p]:mt-4"
              dangerouslySetInnerHTML={{ __html: detailsData?.story.content }}
            ></div>

            <div className="my-4 border-t border-b dark:border-dark-300 py-4 flex gap-x-4 items-center">
              <h4 className="text-sm merriweather-regular whitespace-nowrap self-start">Tags:</h4>
              <ul className="flex gap-2 flex-wrap">
                {detailsData?.story.tags.map((tag: any, index: number) => (
                  <li key={index}>
                    <a
                      className="text-xs montserrat-semibold block py-1 px-2 rounded-sm bg-[#2B2B2B] text-white"
                      href={`/topic/${tag.id}`}
                    >
                      {tag.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Ads className="mx-auto mb-4" src="/ads/banner_ibbl.gif" alt="Ads" showHeader={false} />

            {relatedNews?.length ? (
              <div>
                <AccentHeader header="related news" color="#8E7581" />
                <SquareGrid className="gap-x-4 gap-y-4" data={relatedNews.slice(0, 6)} size="md" gridCols={2} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
