import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAuthorProfileUrl } from "@bfirst/utilities";
import LoadMore from "../../../../components/LoadMore/LoadMore";
import Navbar from "../../../../components/Navbar/Navbar";
import TrendingTopics from "../../../../components/TrendingTopics/TrendingTopics";
import { getData } from "../../../../utils/dataFetch";

const dummyData = {
  id: 1,
  name: "Swagato Sarowar",
  meta: {
    description: "Dummy description about the author",
    profile_image: "https://avatar.iran.liara.run/username?username=Swagato+Sarowar",
    email: "swagatosarowar@example.com",
    phone_number: "0123456789",
    linkedin_url: "",
    facebook_url: "",
  },
};

export async function generateMetadata({ params }) {
  return {
    title: `${dummyData.name} | Bangladesh First`,
    description: dummyData.meta.description,
    alternates: {
      canonical: `${process.env.BASE_URL}/author/${params.id}/${params.name}`,
    },
  };
}

export default async function AuthorProfile({ params }) {
  const [latestNews, topNews] = await Promise.all([
    getData("latest/stories"),
    getData("categories/0/featured-stories"),
  ]);

  const trendingTopics = (await getData("trendy-topics"))?.data;
  const filteredLatestNews = latestNews?.data.filter(
    (item: { categories: any[] }) => !item.categories.find((c) => c.name === "On_This_Day")
  );

  return (
    <>
      <Navbar />

      <TrendingTopics className="desktop-container mb-8" items={trendingTopics} title="Trending Topics" />
      <Ads className="my-4" src="/ads/banner_ibbl.gif" alt="Ads" showHeader={false} />

      <div className="desktop-container">
        {/*============= BREDCRUMB ========== */}
        <BreadCrumb
          links={[
            {
              name: dummyData.name,
              href: getAuthorProfileUrl(dummyData),
            },
          ]}
        />

        <div className="flex items-center gap-x-4 pb-6 my-8 border-b dark:border-dark-300">
          <img className="w-32 aspect-square object-cover" src={dummyData.meta.profile_image} alt={dummyData.name} />
          <div className="[&>p]:text-sm">
            <h1 className="text-2xl font-medium">{dummyData.name}</h1>
            <p>{dummyData.meta.description}</p>
            <p>
              <a href={`mailto:${dummyData.meta.email}`}>{dummyData.meta.email}</a>
            </p>
            <p>
              <a href={`tel:${dummyData.meta.phone_number}`}>{dummyData.meta.phone_number}</a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-6 gap-y-10 mt-4">
          <div className="col-span-full">
            <SquareGrid data={filteredLatestNews.slice(0, 8)} gridCols={4} />
          </div>

          <div className="col-span-3">
            {filteredLatestNews?.slice(8, 21)?.map((item: any, index: number) => (
              <ItemCardHorizontal
                className="border-b-2 pb-4 mb-4 dark:border-dark-300"
                key={index}
                data={item}
                size="lg"
                showTime
                titleFontSize="24px"
              />
            ))}
            <LoadMore
              showIntro={false}
              showTime
              initialPage={2}
              lastPage={latestNews?.meta.last_page}
              url="latest/stories"
            />
          </div>
          <div>
            <div>
              <Ads className="mb-6" src="/ads/Global.gif" alt="Ads" showHeader={false} />
              <AccentHeader header="Top News" color="#119F9F" />
              <ItemList data={topNews.data?.slice(0, 6)} listType="number" />
            </div>
            <Ads className="mt-4 sticky top-20" src="/ads/Global.gif" alt="Ads" showHeader={false} />
          </div>
        </div>
      </div>
    </>
  );
}
