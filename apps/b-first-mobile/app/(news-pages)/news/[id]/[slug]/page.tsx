import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { SocialShare } from "@bfirst/components-social-share";
import { getImageUrl } from "@bfirst/utilities";
import Navbar from "apps/b-first-mobile/app/components/Navbar/Navbar";
import TrendingTopics from "apps/b-first-mobile/app/components/TrendingTopics/TrendingTopics";
import { getData } from "apps/b-first-mobile/app/utils/dataFetch";
import { ProfileCard } from "@bfirst/components-profile-card";
import { AccentHeader } from "@bfirst/components-accent-header";
import { SquareGrid } from "@bfirst/components-square-grid";
import { ItemList } from "@bfirst/components-item-list";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";

export default async function NewsDetails({ params }) {
  const trendingTopics = (await getData("trendy-topics"))?.data;
  const detailsData = await getData(`story/details/${params.id}`);
  const latestNews = await getData(`latest/stories`);
  const categoriesNews = await getData(`categories/${detailsData?.story.categories[0].name}/stories?size=20&page=1`);
  const tagsArr = detailsData?.story.tags.map((tag: { id: any }) => tag.id);
  const relatedNews = (await getData(`related-stories?tags=${tagsArr.join(",")}`))?.data.filter(
    (rN: { id: any }) => rN.id != params.id
  );
  const link_url = `http://bangladeshfirst.com/news/${params.id}/${params.slug}`;
  return (
    <div>
      <Navbar />

      <div className="px-3">
        <img className="mx-auto mt-3" src="/ads/nagad.png" alt="Ads" />
        <TrendingTopics className="my-5" items={trendingTopics} title="Trending Topics" />
        <img className="mx-auto mb-4" src="/ads/nagad.png" alt="Ads" />
        <BreadCrumb
          links={[
            {
              name: detailsData?.story.categories[0].name.split("_").join(" "),
              href: `/${detailsData?.story.categories[0].name.toLowerCase()}`,
            },
          ]}
        />
        <div>
          <h1 className="text-3xl sm:text-4xl my-10">{detailsData?.story.title}</h1>
          <img src={getImageUrl(detailsData?.story.meta.featured_image)} alt={detailsData?.story.title} />
          <p className="font-montserrat text-xs mt-2">{detailsData?.story.meta.imageCaption}</p>
          <img className="my-5 mx-auto" src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
          <h3 className="text-base font-montserrat">{detailsData?.story.meta.intro}</h3>

          <SocialShare className="my-4" title="Share News" shareLink={link_url} />
          <ProfileCard data={detailsData?.story.authors[0]} createdTime={detailsData?.story.created_at} />

          <div
            className="text-[15px] leading-[110%] [&>p]:mt-8"
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
              <SquareGrid className="grid-cols-2 gap-4" data={relatedNews.slice(0, 6)} size="md" gridCols={3} />
            </div>
          ) : null}

          <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />
          <div>
            <AccentHeader header={`More From ${detailsData?.story.categories[0].name}`} color="#5D26D1" />
            {categoriesNews.data?.slice(0, 6).map((item: any, index: number) => (
              <ItemCardHorizontal key={index} className="mb-8 last:mb-0" size="md" data={item} />
            ))}
          </div>
          <img className="my-10 mx-auto" src="/ads/Global.gif" alt="Ads" />

          <div>
            <AccentHeader header="Top News" color="#5D26D1" />
            <ItemList listType="number" data={latestNews.data.slice(6, 12)} showButton moreNewsLink="/latest" />
          </div>
        </div>
      </div>
    </div>
  );
}
