/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryText } from '@bd-first/common-ui';
import { Divider } from '@bd-first/components/common/divider';
import { Card3 } from '@bd-first/components/bd-first/card-3';

const sub = [0, 1, 2, 3, 4, 5];
const dummyData1 = [
  {
    showImage: true,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Shahbagh, Karwan Bazar metro stations open today',
    showPublishedAt: true,
    publishedAt: '59 minutes ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 3m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 10m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 32m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 54m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 32m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/sheikh-hasina.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 54m ago',
  },
];
export function CategoryPage1() {
  return (
    <div className={'px-[96px] md:px-[128px] lg:px-[160px] xl:px-[224px] py-2'}>
      <CategoryText category="ECONOMY" size="xl" />
      <div className="flex gap-2">
        {sub?.map((s: any, idx: number) => (
          <CategoryText category={`Sub Category ${idx + 1}`} />
        ))}
      </div>
      {/* Top Section */}
      <div className="flex gap-4 pt-4">
        {/* Left */}
        <div className="w-1/2">
          <Card3
            className="gap-4"
            showImage={true}
            imageAlt={dummyData1[0]?.imageAlt ?? ''}
            imageUrl={dummyData1[0]?.imageUrl ?? ''}
            category={dummyData1[0]?.category ?? ''}
            title={dummyData1[0]?.title ?? ''}
            titleProps={{ size: 'lg' }}
            showPublishedAt={dummyData1[0]?.showPublishedAt ?? false}
            publishedAt={dummyData1[0]?.publishedAt ?? ''}
            showDivider={false}
            dividerProps={{ className: 'mt-2 mb-2 w-full' }}
          />
        </div>
        {/* Right */}
        <div className="flex flex-col w-1/2 gap-4">
          {dummyData1?.slice(0, 4)?.map((d: any, idx: number) => (
            <Card3
              key={idx}
              direction={'flex-row'}
              className="gap-4"
              showImage={true}
              imageAlt={d?.imageAlt ?? ''}
              imageUrl={d?.imageUrl ?? ''}
              category={d?.category ?? ''}
              title={d?.title ?? ''}
              showPublishedAt={d?.showPublishedAt ?? false}
              publishedAt={d?.publishedAt ?? ''}
              showDivider={false}
              dividerProps={{ className: 'mt-2 mb-2 w-full' }}
              imageWrapperClass="max-w-[110px] h-[110px]"
            />
          ))}
        </div>
      </div>
      <Divider color="gray" className="my-4" />
      <CategoryText category="More on Economics" />
      <div className="flex flex-col gap-4 pt-4">
        {dummyData1?.map((d: any, idx: number) => (
          <Card3
            key={idx}
            direction={'flex-row'}
            className="gap-4"
            showImage={true}
            imageAlt={d?.imageAlt ?? ''}
            imageUrl={d?.imageUrl ?? ''}
            category={d?.category ?? ''}
            title={d?.title ?? ''}
            showPublishedAt={d?.showPublishedAt ?? false}
            publishedAt={d?.publishedAt ?? ''}
            showDivider={false}
            dividerProps={{ className: 'mt-2 mb-2 w-full' }}
            imageWrapperClass="w-[100px]"
            contentWrapperClass="w-4/5"
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage1;
