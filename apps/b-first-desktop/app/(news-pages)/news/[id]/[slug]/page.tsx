import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { ProfileCard } from "@bfirst/components-profile-card";
import { SocialShare } from "@bfirst/components-social-share";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getImageUrl } from "@bfirst/utilities";
import Link from "next/link";
import BreadCrumb from "../../../../components/BreadCrumb/BreadCrumb";
import Navbar from "../../../../components/Navbar/Navbar";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";

export default async function NewsDetails({ params }) {
  const [detailsData, trendingTopics, latestNews] = await Promise.all([
    getData(`story/details/${params.id}`),
    getData("trendy-topics"),
    getData("latest/stories"),
  ]);

  return (
    <>
      <Navbar activeLink={`/${detailsData?.story.categories[0].name.toLowerCase()}`} />
      <TrendingTopics
        Link={Link}
        className="desktop-container mb-8"
        title="Trending Topics"
        items={trendingTopics?.data}
      />

      <div className="desktop-container">
        <img className="mx-auto my-12" src="/ads/chopstick-ads.gif" alt="Ads" />
        <BreadCrumb
          links={[
            {
              name: detailsData?.story.categories[0].name,
              href: `/${detailsData?.story.categories[0].name.toLowerCase()}`,
            },
          ]}
        />
        <h1 className="text-7xl my-10">{detailsData?.story.title}</h1>

        <div className="grid grid-cols-4 gap-x-10 gap-y-11">
          {/* ====== row 1 ===== */}
          <h3 className="text-2xl self-end font-montserrat">{detailsData?.story.meta.intro}</h3>
          <div className="col-span-3">
            <img
              className="w-full"
              src={getImageUrl(detailsData?.story.meta.featured_image)}
              alt={detailsData?.story.title}
            />
            <p className="font-montserrat text-xl mt-4">{detailsData?.story.meta.imageCaption}</p>
          </div>

          {/* ======== row 2 ======= */}
          <div>
            <div className="pb-8 mb-8 border-b dark:border-dark-300">
              <ProfileCard data={detailsData?.story.authors[0]} updatedTime={detailsData?.story.updated_at} />
            </div>
            <SocialShare facebookShareUrl="" whahtsappShareUrl="" twitterShareUrl="" instagramShareUrl="" />
            <img className="my-10 mx-auto" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
            <div>
              <AccentHeader
                header={`more from ${detailsData?.story.categories[0].name}`}
                color={detailsData?.story.categories[0].color_code}
              />
              {latestNews?.data.slice(5, 10).map((item, index) => (
                <ItemCardHorizontal
                  Link={Link}
                  className="pb-6 mb-6 border-b dark:border-dark-300"
                  key={index}
                  data={item}
                  size="sm"
                />
              ))}
            </div>
            <img className="my-10 mx-auto sticky top-[80px]" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
          </div>
          <div className="col-span-2">
            <div
              className="text-2xl leading-[30px] [&>p]:mt-8"
              dangerouslySetInnerHTML={{ __html: detailsData?.story.content }}
            ></div>
            <div className="my-10 border-t border-b dark:border-dark-300 py-4 flex gap-x-4 items-center">
              <h4 className="text-3xl">Tags:</h4>
              <ul className="flex gap-x-2 flex-wrap">
                {detailsData?.story.tags.map((tag, index) => (
                  <li
                    key={index}
                    className="text-lg font-montserrat font-semibold py-0.5 px-2 rounded-md bg-[#2B2B2B] text-white"
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            </div>
            <img className="my-10 mx-auto" src="/ads/banner_ibbl.gif" alt="Ads" />

            <div className="flex gap-x-2 items-start py-8 my-16 border-t border-b dark:border-dark-300">
              <img src="https://placehold.co/64x64" alt="user image" />
              <textarea
                rows={4}
                className="w-full border dark:border-dark-300 outline-none p-2 placeholder:font-montserrat"
                placeholder="Leave a comment"
              ></textarea>
            </div>

            <div>
              <AccentHeader header="related news" color="#8E7581" />
              <SquareGrid data={latestNews?.data.slice(10, 16)} size="sm" gridCols={3} />
            </div>
          </div>
          <div>
            <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />
            <div>
              <AccentHeader header="Latest" />
              <ItemList Link={Link} listType="circle" data={latestNews?.data.slice(0, 5)} />
            </div>
            <img className="my-10 mx-auto" src="/ads/union-bank-ad.gif" alt="Ads" />
            <div>
              <AccentHeader header="Most Viewed" color="#119F9F" />
              <ItemList Link={Link} data={latestNews?.data.slice(14, 22)} listType="number" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
