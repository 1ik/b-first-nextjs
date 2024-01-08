import { NewsCard } from '../NewsCard';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Image } from '@bd-first/common-ui';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getImageUrl } from '../image_utils';
import { Merriweather, Roboto } from '@next/font/google';

const merriweather = Merriweather({ weight: ['900', '400'], preload: false });
const roboto = Roboto({ weight: ['900', '400'], preload: false });

const data = {
  category: 'Bangladesh Election',
  title: 'Awami League develops, BNP burns people: Sheikh Hasina',
  keyPoints: [
    `No matter how many conspiracies are made, the elections will be held
    on time.`,
    `It is up to someone to participate in the election or not`,
    `Give victory to those whom I gave the boat symbol in Sylhet.`,
  ],
  publishedAt: 'Dec 18, 2024 at 12:58PM (GMT+6)',
  publishedBy: {
    name: 'Alamgir Hossain',
    designation: 'Editor-in-chief',
  },
  updatedAt: 'Dec 19, 2024 at 08:58AM (GMT+6)',
  image: '/images/sheikh-hasina.png',
  imageAlt: 'sheikh-hasina',
  paragraphs: [
    `Awami League President and Prime Minister Sheikh Hasina has commented that 'voting is the constitutional right of the people and no one has the right to prevent them from voting'.`,
    `She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections. No matter how many conspiracies are made, the elections will be held on time. `,
    `People are in favor of elections and voting. Voting is the constitutional right of the people and the people will vote them. No one has the right to kill and prevent people from voting."`,
    `The Prime Minister pointed out that the BNP-Jamaat alliance has established a reign of terror to thwart the national elections to be held on January 7 and said that no one will accept any kind of militant and terrorist activities in Bangladesh. If someone does this, one day the people of the country will throw them out, that is the reality.`,
    `The ruling party chief issued a stern warning against those behind the recent arson in train arson, saying no mercy would be shown to those involved in arson and killing of people. We must take strict action against them.`,
  ],
};

const similarInterests = [
  {
    key: 1,
    category: 'BUSINESS',
    title: `BKMEA's letter to buyers asking for increased price on ready-made garments`,
  },
  {
    key: 2,
    category: 'FINANCE',
    title: `Foreign debt has increased by 39 thousand crores in one year`,
  },
  {
    key: 3,
    category: `Bangladesh Election`,
    title: `70 percent people are ready to vote for boat: Quader`,
  },
];

const relatedArticles = [
  {
    key: 4,
    category: `BUSINESS`,
    title: `BKMEA's letter to buyers asking for increased price on ready-made garments`,
  },
  {
    key: 5,
    category: `Bangladesh Election`,
    title: `No anti-election speech at victory rally: Home Minister`,
  },
  {
    key: 6,
    category: `Bangladesh Election`,
    title: `Jatiya Party and Awami League will work for fair elections: Nanak`,
  },
];

export const DetailsPage = () => {
  const [news, setNews] = useState<any>();
  const pathName = usePathname();
  useEffect(() => {
    if (!pathName) return;
    const parts = pathName.split('/');
    const id = parts[2];
    fetch(`https://panel.bangladeshfirst.com/api/v2/detail/${id}`)
      .then((res) => res.json())
      .then((res) => setNews(res));
  }, [pathName]);

  if (!news) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-0 px-3">
        <h5
          className={`uppercase font-semibold text-[16px] leading-[21.5px]`}
          style={{ color: '#D00023' }}
        >
          {news?.category.name ?? ''}
        </h5>
        <h1
          className={`${merriweather.className} text-[28px] font-black leading-[35.2px] pb-2.5`}
        >
          {news?.title ?? ''}
        </h1>
        {/*
        <div className="flex flex-col gap-2 pl-6">
          {data?.keyPoints && data?.keyPoints?.length > 0
            ? data?.keyPoints?.map((p: string, idx: any) => (
                <span
                  key={idx}
                  className="text-lg font-semibold leading-5 tracking-[-0.3px
                ]"
                >
                  {p ?? ''}
                </span>
              ))
            : ''}
        </div>
        */}
        <div className={`flex flex-col gap-0.5`}>
          <p
            className={`${roboto.className} text-[14px] font-normal leading-[16.5px] tracking-[-0.3 px]`}
            style={{ color: '#1E1E1E' }}
          >
            Publish on {news?.created_at ?? ''}
          </p>
          <p
            className={`${roboto.className} text-[14px] font-semibold leading-[16.5px]  tracking-[-0.3 px]`}
            style={{ color: '#1E1E1E' }}
          >
            by {news?.author}{' '}
          </p>
          {news?.updated_at ? (
            <p
              className={`${roboto.className} text-[14px] font-normal leading-[16.5px]  tracking-[-0.3 px]`}
              style={{ color: '#1E1E1E' }}
            >
              Last Updated on {news?.updated_at ?? ''}
            </p>
          ) : (
            ''
          )}
        </div>

        {news?.featured_image ? (
          <img
            className="py-2"
            src={getImageUrl(news?.featured_image || '')}
            alt={data?.imageAlt ?? ''}
          />
        ) : (
          ''
        )}
        <div className="flex flex-col gap-4">
          {/*render html in react dom */}
          <div
            className={'cont'}
            dangerouslySetInnerHTML={{ __html: news.content }}
          ></div>
        </div>
      </div>
      {/* Share Buttons */}
      <div className="flex flex-col gap-2 px-3">
        <button
          className="flex items-center justify-center gap-3 py-2 rounded-l-md rounded-r-md "
          style={{ backgroundColor: '#316FF6' }}
        >
          <img
            className="w-4 h-4"
            src="/icons/fb-white.png"
            alt="bangladesh-first-site-icon"
          />
          <span className="text-xs font-medium" style={{ color: '#FFFFFF' }}>
            Share on Facebook
          </span>
        </button>
        <button
          className="flex items-center justify-center gap-3 py-2 rounded-l-md rounded-r-md "
          style={{ backgroundColor: '#25D366' }}
        >
          <img
            className="w-4 h-4"
            src="/icons/whatsapp-white.png"
            alt="bangladesh-first-site-icon"
          />
          <span className="text-xs font-medium" style={{ color: '#FFFFFF' }}>
            Share on Whatsapp
          </span>
        </button>
      </div>
      <hr
        className="w-full border-[1px] mt-1"
        style={{ color: '#000', opacity: 1 }}
      />
      {/* You might be interested in section */}
      <div className="flex flex-col w-full gap-2.5 px-3">
        <h5 className="font-semibold text-[21px] leading-[24.5px] tracking-[-.3px]">
          You might be interested in
        </h5>
        <div className="flex flex-col gap-2">
          {similarInterests?.map((n: any, idx: any) => (
            <NewsCard
              key={idx}
              size="sm"
              showDivider={idx !== similarInterests?.length - 1}
              title={n?.title ?? ''}
              showCategory
              category={n?.category ?? ''}
              gap={0.5}
            />
          ))}
        </div>
      </div>
      <hr
        className="w-full border-[1px] mt-1"
        style={{ borderColor: '#3A3A3A', opacity: 0.6 }}
      />
      {/* Related Articles section */}
      <div className="flex flex-col w-full gap-2.5 px-3">
        <h5 className="font-semibold text-[21px] leading-[24.5px] tracking-[-.3px]">
          Related Articles
        </h5>
        <div className="flex flex-col gap-2">
          {relatedArticles?.map((n: any, idx: any) => (
            <NewsCard
              key={idx}
              size="sm"
              showDivider={idx !== relatedArticles?.length - 1}
              title={n?.title ?? ''}
              showCategory
              category={n?.category ?? ''}
              gap={0.5}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
