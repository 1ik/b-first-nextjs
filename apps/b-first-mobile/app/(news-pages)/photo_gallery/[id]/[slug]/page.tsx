import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { SocialShare } from "@bfirst/components-social-share";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAuthorProfileUrl, getImageUrl, getNewsUrl } from "@bfirst/utilities";
import moment from "moment-timezone";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import "../../../../../../../libs/fonts/montserrat/index.css";
import Navbar from "../../../../components/Navbar/Navbar";
import PhotoAlbum from "../../../../components/PhotoAlbum/PhotoAlbum";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";

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
      canonical: `${process.env.BASE_URL}/photo_gallery/${params.id}/${params.slug}`,
    },
  };
}

export default async function PhotoGalleryDetails({ params }) {
  const news_link_url = `${process.env.BASE_URL}/photo_gallery/${params.id}/${params.slug}`;
  const detailsData = await getData(`story/details/${params.id}`);

  if (!detailsData) return notFound();

  if (!detailsData?.story?.categories?.find((c: { name: string }) => c.name === "Photo_Gallery")) {
    return redirect(getNewsUrl(detailsData?.story));
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

  const trendingTopics = (await getData("trendy-topics"))?.data;

  const moreGalleries = (await getData("categories/photo_gallery/stories"))?.data?.filter(
    (item: any) => item?.id !== detailsData?.story?.id
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
        <Ads className="my-4" src="/ads/banner_ibbl.gif" alt="Ads" showHeader={false} />
        <TrendingTopics className="mb-8" items={trendingTopics} title="Trending" />

        <BreadCrumb
          links={[
            {
              name: detailsData?.story.categories[0].name.split("_").join(" "),
              href: `/${detailsData?.story.categories[0].name.toLowerCase()}`,
            },
          ]}
        />
        <h1 className="text-2xl sm:text-3xl my-4 font-bold leading-[120%]">{detailsData?.story.title}</h1>
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
          <SocialShare title="Share News" textPlacement="left" shareLink={news_link_url} iconSize={16} />
        </div>

        {/* ========== photo album ======== */}
        <PhotoAlbum data={detailsData?.story} />

        {/* ========== more galleries ======== */}
        {moreGalleries.length ? (
          <div className="mt-6">
            <h3 className="text-2xl my-3 washington-regular">Photos You Should See</h3>
            <SquareGrid className="gap-x-4 gap-y-4" data={moreGalleries.slice(0, 8)} size="md" gridCols={2} />
          </div>
        ) : null}
      </div>
    </>
  );
}