import { NewsCard } from '../NewsCard';
import { Divider } from '@bd-first/common-ui';

const newsList = [
  {
    key: 1,
    category: 'Bhola',
    title:
      'Gas of Bhola in Dhaka in GNG form, likely to reduce low pressure problem',
  },
  {
    key: 2,
    category: 'Dhaka',
    title: 'Fire in a moving train at Tejgaon, 4 killed',
  },
  {
    key: 3,
    category: 'Bangladesh Election',
    title: 'Five candidates will contest against the Information Minister',
  },
  {
    key: 4,
    category: 'Bangladesh Election',
    title: 'EC appointed 653 magistrates across the countrym',
  },
  {
    key: 5,
    category: 'Bangladesh Election',
    title: 'BNP is trying to strengthen the blockade to obstruct the elections',
  },
];

export const CategoryPage = () => {
  return (
    <div className="flex flex-col w-full gap-2 px-3">
      <NewsCard
        title="Awami League develops, BNP burns people: Sheikh Hasina"
        category="Bangladesh Election"
        image="/images/sheikh-hasina.png"
        imageAlt="sheikh-hasina"
        showImage
        showCategory
        size="lg"
      />
      <div className="flex gap-4 pt-2">
        <div className="w-1/2">
          <NewsCard
            title="China sees bright future with Bangladesh: Chinese Ambassador"
            showCategory
            category="Diplomat"
            showImage
            image="/images/china-sees-bright-future-with-bangladesh.png"
            imageAlt="china-sees-bright-future-with-bangladesh"
            size="xs"
          />
        </div>
        <div className="w-1/2">
          <NewsCard
            title="OIC should work together to bring peace in Gaza: PM"
            showCategory
            category="Diplomat"
            showImage
            image="/images/oic-should-work-together-to-bring-peace-in-gaza.png"
            imageAlt="oic-should-work-together-to-bring-peace-in-gaza"
            size="xs"
          />
        </div>
      </div>
      <Divider className={'mb-0'} />

      {/* News List */}
      <div className="flex flex-col w-full gap-3 pt-3 pb-0">
        {newsList?.map((n: any, idx: number) => (
          <NewsCard
            key={idx}
            title={n?.title ?? ''}
            showCategory
            category={n?.category ?? ''}
            showPublishedAt
            publishedAt={n?.publishedAt ?? ''}
            size="xs"
            showDivider
            gap={1}
          />
        ))}
      </div>
    </div>
  );
};
