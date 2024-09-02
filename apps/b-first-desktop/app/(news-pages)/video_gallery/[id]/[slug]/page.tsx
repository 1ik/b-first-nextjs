import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { SocialShare } from "@bfirst/components-social-share";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAdsUrl, getAuthorProfileUrl, getImageUrl, getNewsUrl } from "@bfirst/utilities";
import moment from "moment-timezone";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Navbar from "../../../../components/Navbar/Navbar";
import ImagePreview from "../../../../components/PreviewImage/PreviewImage";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";
import { getAdsObj } from "../../../../utils/getAdsObj";

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
          alt: data?.story?.title,
          width: 1600,
          height: 900,
        },
      ],
    },
    alternates: {
      canonical: `${process.env.BASE_URL}/video_gallery/${params.id}/${params.slug}`,
    },
  };
}

export default async function VideoGalleryDetails({ params }) {
  const detailsData = await getData(`story/details/${params.id}`);
  const news_link_url = `${process.env.BASE_URL}/video_gallery/${params.id}/${params.slug}`;

  if (!detailsData) return notFound();
  if (!detailsData?.story?.categories?.find((c) => c?.name === "Video_Gallery")) {
    redirect(getNewsUrl(detailsData?.story));
  }

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
        datePublished: moment.utc(detailsData?.story.created_at).tz("Asia/Dhaka").format(),
        image: {
          "@type": "ImageObject",
          url: getImageUrl(detailsData?.story.meta.featured_image),
        },
        mainEntityOfPage: news_link_url,
      },
    ],
  };

  const [trendingTopics, categoryNews] = (
    await Promise.all([
      getData("trendy-topics"),
      getData(`categories/video_gallery/stories`),
    ])
  ).map((item) => item?.data);

  const moreVideoNews = categoryNews?.filter((item: { id: number }) => item.id !== detailsData.story.id);

  // data for ads
  const ads_list = await getData("ads?page=video_gallery_details");
  const ads_obj = getAdsObj(ads_list?.ads);

  return (
    <>
      {/* ====== webpage schema markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}></script>

      {/* ====== news article schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsarticleJsonLd) }}
      ></script>

      <Navbar />
      <TrendingTopics className="desktop-container mb-8" title="Trending Topics" items={trendingTopics} />
      <div className="desktop-container">
        <Ads src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />
        <BreadCrumb
          links={[
            {
              name: "Video Gallery",
              href: `/video_gallery`,
            },
          ]}
        />

        <h1 className="text-5xl my-10 font-bold leading-[120%]">{detailsData?.story.title}</h1>

        <div className="mt-8 mb-10">
          <div className="border-b-2 pb-3 mb-3 dark:border-dark-300">
            {detailsData?.story?.authors?.map((item: { name: string }, index: number) => (
              <h3 key={index} className="text-lg washington-regular">
                <a href={getAuthorProfileUrl(item)}>
                  {item?.name} {!(index >= detailsData?.story?.authors.length - 1) && <span>,</span>}
                </a>
              </h3>
            ))}

            <p className="text-sm montserrat-regular">{`Publisted at ${moment(detailsData?.story?.updated_at)
              .tz("Asia/Dhaka")
              .format("h:mm A, ddd MMM Do, YYYY")}`}</p>
          </div>
          <SocialShare title="Share News" textPlacement="left" shareLink={news_link_url} />
        </div>

        {detailsData?.story?.meta?.featured_video ? (
          <div
            className="featured_video"
            dangerouslySetInnerHTML={{ __html: detailsData?.story?.meta?.featured_video }}
          ></div>
        ) : (
          <ImagePreview
            url={getImageUrl(detailsData?.story.meta.featured_image)}
            caption={detailsData?.story?.meta?.imageCaption}
          />
        )}

        {moreVideoNews.length ? (
          <div>
            <h2 className="text-4xl mt-20 mb-6 font-bold leading-[120%]">Videos you should watch</h2>
            <SquareGrid data={moreVideoNews?.slice(0, 8)} gridCols={4} />
          </div>
        ) : null}
      </div>
    </>
  );
}
