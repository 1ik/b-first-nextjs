import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { BreadCrumb } from "@bfirst/components-breadcrumb";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemList } from "@bfirst/components-item-list";
import { SquareGrid } from "@bfirst/components-square-grid";
import { getAuthorProfileUrl, getImageUrl } from "@bfirst/utilities";
import filterOutOTD from "apps/b-first-desktop/app/utils/filterOutOTD";
import { FaLinkedin } from "react-icons/fa6";
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
  const authorDetails = (await getData(`author-details/${params.id}`)).data;
  return {
    title: `${authorDetails.name} | Bangladesh First`,
    description: authorDetails?.meta?.description,
    alternates: {
      canonical: `${process.env.BASE_URL}/author/${params.id}/${params.name}`,
    },
  };
}

export default async function AuthorProfile({ params }) {
  const [authorRelatedNews, topNews] = await Promise.all([
    getData(`author-stories/${params.id}`),
    getData("categories/0/featured-stories"),
  ]);

  const [trendingTopics, authorDetails] = (
    await Promise.all([getData("trendy-topics"), getData(`author-details/${params.id}`)])
  ).map((item) => item?.data);

  const filteredAuthorRelatedNews = authorRelatedNews?.data?.filter(filterOutOTD);

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
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">
          <div className="col-span-3">
            <div className="pb-6 my-8 border-b-2 dark:border-dark-300">
              <div className="flex items-center gap-x-4 mb-4">
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-32 aspect-square object-cover rounded-full"
                  src={
                    authorDetails?.meta?.profile_image
                      ? getImageUrl(authorDetails?.meta?.profile_image, 128, 128)
                      : `https://avatar.iran.liara.run/username?username=${authorDetails.name}`
                  }
                  alt={authorDetails?.name}
                />
                <div>
                  <h1 className="text-3xl font-semibold">{authorDetails?.name}</h1>
                  <p>
                    <a href={`mailto:${authorDetails?.meta?.email}`}>{authorDetails?.meta?.email}</a>
                  </p>
                  <p>
                    <a href={`tel:${authorDetails?.meta?.phone_number}`}>{authorDetails?.meta?.phone_number}</a>
                  </p>
                  <div className="flex items-center gap-x-2 text-xl">
                    <FaLinkedin />
                    <FaLinkedin />
                    <FaLinkedin />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              {authorDetails?.meta?.description && (
                <div>
                  <p>
                    Alexandra Del Rosario is an entertainment reporter on the Los Angeles Times Fast Break Desk. Before
                    The Times, she was a television reporter at Deadline Hollywood, where she first served as an
                    associate editor. She has written about a wide range of topics
                  </p>
                </div>
              )}
            </div>
            <div className="mt-4">
              <SquareGrid
                className="mb-6 pb-6 border-b-2 dark:border-dark-300"
                data={filteredAuthorRelatedNews.slice(0, 6)}
                gridCols={3}
              />
              {filteredAuthorRelatedNews?.slice(6, 21)?.map((item: any, index: number) => (
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
                lastPage={authorRelatedNews?.meta?.last_page}
                url={`author-stories/${params.id}`}
              />
            </div>
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
