import { NewsCard } from '../NewsCard';

const featuredCategorysNews = [
  {
    key: 1,
    title: '70 percent people are ready to vote for boat: Quader',
    publishedAt: '35 minutes ago',
  },
  {
    key: 1,
    title: 'Playing with fire will burn them to death: Quader',
    publishedAt: '46 minutes ago',
  },
  {
    key: 1,
    title: 'No anti-election speech at victory rally: Home Minister',
    publishedAt: '46 minutes ago',
  },
];

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <NewsCard
        title="Awami League develops, BNP burns people: Sheikh Hasina"
        category="Bangladesh Election"
        summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
        image="/images/sheikh-hasina.png"
        imageAlt="sheikh-hasina"
        showImage
        showCategory
        showDivider
        showPublishedAt
        showSummary
        publishedAt="28 minutes ago"
        size="lg"
      />
      <NewsCard
        title="BKMEA's letter to buyers asking for increased price on ready-made garments"
        category="BUSINESS"
        showCategory
        showDivider
        showPublishedAt
        publishedAt="56 minutes ago"
        size="md"
      />
      <NewsCard
        title="Foreign debt has increased by 39 thousand crores in one year"
        category="ECONOMICS"
        showCategory
        showPublishedAt
        publishedAt="59 minutes ago"
        size="md"
      />
      <div
        className="flex flex-col w-full gap-3 px-3 py-4"
        style={{ backgroundColor: '#EFEFEF' }}
      >
        <h2
          className="font-bold text-sm leading-4 tracking-[1px] uppercase"
          style={{ color: '#D00023' }}
        >
          Bangladesh Election
        </h2>
        <div className="flex flex-col gap-4">
          {featuredCategorysNews?.map((n: any, idx: any) => (
            <NewsCard
              key={idx}
              title={n?.title ?? ''}
              showPublishedAt
              publishedAt={n?.publishedAt ?? ''}
              size="md"
            />
          ))}
        </div>
        <a
          href="#"
          target="_blank"
          className="uppercase underline font-bold text-xs tracking-[-.5px]"
          style={{ color: '#030303' }}
        >
          Read More on Bangladesh Election
        </a>
      </div>
    </div>
  );
};
