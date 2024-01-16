/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryText } from '@bd-first/common-ui';
import { Divider } from '@bd-first/components/common/divider';
import { Card3 } from '@bd-first/components/bd-first/card-3';
import { Image } from '@bd-first/common-ui';

const sub = [0, 1, 2, 3, 4];
const dummyData1 = [
  {
    showImage: true,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Shahbagh, Karwan Bazar metro stations open today',
    showPublishedAt: true,
    publishedAt: '59 minutes ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 3m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 10m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 32m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 54m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 32m ago',
  },
  {
    showImage: false,
    imageAlt: 'sheikh-hasina',
    imageUrl: '/images/category-image-1.png',
    category: 'Economics',
    title: 'Foreign debt has increased by 39 thousand crores in one year',
    showPublishedAt: true,
    publishedAt: '1h 54m ago',
  },
];

const dummyData2 = [
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
      <div className="flex gap-4">
        {sub?.map((s: any, idx: number) => (
          <CategoryText
            color="black"
            key={idx}
            category={`Sub Category ${idx + 1}`}
          />
        ))}
      </div>
      {/* Top Section */}
      <div className="flex gap-8 pt-2">
        {/* Left */}
        <div className="w-1/2 pt-1">
          <Card3
            className="gap-4"
            showImage={true}
            imageAlt={dummyData1[0]?.imageAlt ?? ''}
            imageUrl={'/images/sheikh-hasina.png' ?? ''}
            showCategory
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
        <div className="flex flex-col w-1/2 gap-2">
          {dummyData1?.slice(0, 4)?.map((d: any, idx: number) => (
            <div>
              <Card3
                key={idx}
                direction={'flex-row'}
                className="gap-4"
                showImage={true}
                imageAlt={d?.imageAlt ?? ''}
                imageUrl={d?.imageUrl ?? ''}
                showCategory
                category={d?.category ?? ''}
                title={d?.title ?? ''}
                titleProps={{ size: 'xs' }}
                showPublishedAt={d?.showPublishedAt ?? false}
                publishedAt={d?.publishedAt ?? ''}
                showDivider={false}
                contentWrapperClass="flex-1 flex flex-col align-start"
                imageClass="w-auto h-[111px] mt-1"
              />
              <Divider color="gray" className="mt-3" />
            </div>
          ))}
        </div>
      </div>
      <Divider color="gray" className="mt-4 mb-4" />
      <div className="flex gap-4">
        <div className="w-4/10">
          <CategoryText category="More on Economics" />
          <div className="flex flex-col gap-2 pt-3">
            {dummyData2?.map((d: any, idx: number) => (
              <div>
                <Card3
                  key={idx}
                  direction={'flex-row'}
                  className="gap-4"
                  showImage={true}
                  imageAlt={d?.imageAlt ?? ''}
                  imageUrl={'/images/category-image-1.png' ?? ''}
                  showSummary
                  summary="She said, “Those who are burning innocent people in the name of blockade are the ones who want to disrupt the elections”"
                  showCategory={false}
                  title={d?.title ?? ''}
                  showPublishedAt={d?.showPublishedAt ?? false}
                  publishedAt={d?.publishedAt ?? ''}
                  showDivider={false}
                  contentWrapperClass="flex-1 flex flex-col align-start"
                  imageClass="w-auto h-[95px] mt-1"
                />
                <Divider color="gray" className="mt-2" />
              </div>
            ))}
          </div>
        </div>
        <Divider color="black" orientation="vertical" size="md" />
        <div className="flex flex-col pt-1 w-4/10">
          <Image src={'/images/rectangle-17.png'} alt={'add-image'} />
        </div>
      </div>
      <div className="flex justify-start py-4 pb-8">
        <button className="flex text-[16px] items-center justify-center gap-2 px-12 py-1 border-[1px] border-SecondaryRed font-Roboto leading-[18.5px] tracking-[-.5px] rounded-sm font-medium">
          Load More
        </button>
      </div>
    </div>
  );
}

export default CategoryPage1;
