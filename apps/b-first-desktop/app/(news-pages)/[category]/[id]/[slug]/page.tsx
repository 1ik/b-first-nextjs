import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { ProfileCard } from "@bfirst/components-profile-card";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAdsUrl, getImageUrl, getNewsUrl } from "@bfirst/utilities";
import moment from "moment-timezone";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import "../../../../../../../libs/fonts/montserrat/index.css";
import Navbar from "../../../../components/Navbar/Navbar";
import ImagePreview from "../../../../components/PreviewImage/PreviewImage";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";
import filterCategory from "../../../../utils/filterCategory";
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
      canonical: `${process.env.BASE_URL}/news/${params.id}/${params.slug}`,
    },
  };
}

export default async function NewsDetails({ params }) {
  const news_link_url = `${process.env.BASE_URL}/news/${params.id}/${params.slug}`;
  const detailsData = await getData(`story/details/${params.id}`);

  if (!detailsData) return notFound();
  if (
    detailsData?.story?.categories?.find((c: { name: string }) => c.name === "Video_Gallery") ||
    detailsData?.story?.categories?.find((c: { name: string }) => c.name === "Photo_Gallery")
  ) {
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

  const [trendingTopics, topNews, categoryNews, latestNews] = (
    await Promise.all([
      getData("trendy-topics"),
      getData("categories/0/featured-stories"),
      getData(`categories/${detailsData?.story.categories[0].name}/stories`),
      getData("latest/stories?size=30"),
    ])
  ).map((item) => item?.data);

  const filteredLatestNews = filterCategory(latestNews, "On_This_Day", "Video_Gallery", "Photo_Gallery");

  const tagsArr = detailsData?.story.tags.map((tag: { id: any }) => tag.id);
  const relatedNews = (await getData(`related-stories?tags=${tagsArr.join(",")}`))?.data.filter(
    (rN: { id: any }) => rN.id != params.id
  );

  // data for ads
  const ads_list = await getData("ads?page=news_details");
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

      <Navbar activeLink={`/${detailsData?.story.categories[0].name.toLowerCase()}`} />
      <TrendingTopics className="desktop-container mb-8" title="Trending Topics" items={trendingTopics} />

      <div className="desktop-container">
        <Ads src={getAdsUrl(ads_obj?.banner1)} alt="Ads" />

        <BreadCrumb
          links={[
            {
              name: detailsData?.story.categories[0].name.split("_").join(" "),
              href: `/${detailsData?.story.categories[0].name.toLowerCase()}`,
            },
          ]}
        />
        <h1 className="text-5xl my-10 font-bold leading-[120%]">{detailsData?.story.title}</h1>

        <div className="grid grid-cols-4 gap-x-10 gap-y-11">
          {/* ======= photo album or featured image/video ========= */}

          <div className="flex flex-col">
            <h3 className="text-[22px] montserrat-regular leading-[120%]">{detailsData?.story.meta.intro}</h3>
            <div className="mt-10">
              <ProfileCard
                data={detailsData?.story.authors}
                createdTime={detailsData?.story.created_at}
                shareLink={news_link_url}
              />
            </div>
          </div>
          <div className="col-span-3">
            {detailsData?.story?.meta?.featured_element === "video" ? (
              <div
                className="featured_video"
                dangerouslySetInnerHTML={{ __html: detailsData?.story?.meta?.featured_video }}
              ></div>
            ) : (
              <div>
                <ImagePreview
                  url={getImageUrl(detailsData?.story.meta.featured_image)}
                  caption={detailsData?.story?.meta?.imageCaption}
                />
                {/* <img
              className="w-full"
              src={getImageUrl(detailsData?.story.meta.featured_image)}
              alt={detailsData?.story.title}
              /> */}
                <p className="montserrat-regular-italic text-xl mt-4">{detailsData?.story.meta.imageCaption}</p>
              </div>
            )}
          </div>

          {/* ======== row 2 ======= */}
          <div>
            <Ads className="my-8" src={getAdsUrl(ads_obj?.square1)} alt="Ads" />
            <div>
              <AccentHeader
                header={`more from ${detailsData?.story.categories[0].name.split("_").join(" ")}`}
                color={detailsData?.story.categories[0].color_code}
              />

              {categoryNews
                ?.filter((item: { id: any }) => item.id !== detailsData.story.id)
                ?.slice(0, 5)
                .map((item: any, index: number) => (
                  <ItemCardHorizontal
                    className="pb-4 mb-4 border-b dark:border-dark-300"
                    key={index}
                    data={item}
                    size="sm"
                  />
                ))}
            </div>

            <Ads className="my-8" src={getAdsUrl(ads_obj?.square2)} alt="Ads" />
          </div>
          <div className="col-span-2">
            <div
              className="story-body text-lg leading-[120%] [&>p]:mt-8"
              dangerouslySetInnerHTML={{ __html: detailsData?.story.content }}
            ></div>
            <div className="my-10 border-t border-b dark:border-dark-300 py-4 flex gap-x-4 items-center">
              <h4 className="text-2xl merriweather-regular whitespace-nowrap self-start">Tags : </h4>
              <ul className="flex gap-2 flex-wrap">
                {detailsData?.story.tags.map((tag: any, index: number) => (
                  <li key={index}>
                    <a
                      className="montserrat-semibold py-1 px-3 rounded-[4px] bg-[#2B2B2B] text-white"
                      href={`/topic/${tag.id}`}
                    >
                      {tag.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Ads className="my-10" src={getAdsUrl(ads_obj?.banner2)} alt="Ads" />

            {/* ======== Comment section ======== */}

            {/* <div className="flex gap-x-2 items-start py-8 my-16 border-t border-b dark:border-dark-300">
              <img src="https://placehold.co/64x64" alt="user image" />
              <textarea
                rows={4}
                className="w-full border dark:border-dark-300 outline-none p-2 placeholder:font-montserrat"
                placeholder="Leave a comment"
              ></textarea>
            </div> */}

            {relatedNews?.length ? (
              <div>
                <AccentHeader header="related news" color="#8E7581" />
                <SquareGrid data={relatedNews.slice(0, 6)} size="md" gridCols={3} />
              </div>
            ) : null}
          </div>
          <div>
            <Ads className="my-10" src={getAdsUrl(ads_obj?.square3)} alt="Ads" />
            <div>
              <AccentHeader header="Latest News" color="#5D26D1" />
              <ItemList
                listType="circle"
                data={filteredLatestNews?.slice(0, 5)}
                showButton
                moreNewsLink="/latest"
                titleFontSize="18px"
              />
            </div>
            <div>
              <Ads className="my-10" src={getAdsUrl(ads_obj?.square4)} alt="Ads" />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews?.slice(0, 6)} listType="number" titleFontSize="18px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
