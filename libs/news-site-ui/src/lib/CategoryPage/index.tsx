import { NewsCard } from '../NewsCard';
import { Divider } from '@bd-first/common-ui';
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation'
import { getImageUrl } from "../image_utils";

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
  const [items, setItems] = useState<any[]>([]);
  const pathName = usePathname();


  useEffect(() => {
    setItems([]);
    fetch(`https://panel.bangladeshfirst.com/api/v2/category/${pathName?.replace('/', '')}?page=1&size=100`)
      .then((res) => res.json())
      .then((data) => setItems(data.data));
  }, [pathName]);

  if (!items || !items.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col w-full gap-2 px-3">
      { items && items[0]&& <NewsCard
        title={items[0]?.title ?? ''}
        category={items[0]?.category.name ?? ''}
        image={getImageUrl(items[0]?.featured_image ?? '')}
        imageAlt={items[0]?.title ?? ''}
        showImage
        url={`/news/${items[0].id}/${items[0].slug}`}
        showCategory
        size="lg"
      />}
      <div className="flex gap-4 pt-2">
        <div className="w-1/2">
          { items.length > 0 && <NewsCard
            title={items[1]?.title ?? ''}
            showCategory
            category={items[1]?.category.name ?? ''}
            url={`/news/${items[1].id}/${items[1].slug}`}
            showImage
            image={getImageUrl(items[1]?.featured_image ?? '')}
            imageAlt={items[1]?.title ?? ''}
            size="xs"
          />}
        </div>
        <div className="w-1/2">
          { items.length > 2 && <NewsCard
            title={items[2]?.title ?? ''}
            showCategory
            category={items[2]?.category.name ?? ''}
            showImage
            url={`/news/${items[2].id}/${items[2].slug}`}
            image={getImageUrl(items[2]?.featured_image ?? '')}
            imageAlt={items[2]?.title ?? ''}
            size="xs"
          />}
        </div>
      </div>
      <Divider className={'mb-0'} />

      {/* News List */}
      {items.length > 3 && <div className="flex flex-col w-full gap-3 pt-3 pb-0">
        {items.splice(2, items.length - 1).map((n: any, idx: number) => (
          <NewsCard
            key={idx}
            title={n?.title ?? ''}
            showCategory
            url={`/news/${n.id}/${n.slug}`}
            category={n?.category.name ?? ''}
            showPublishedAt
            size="xs"
            showDivider={idx !== newsList?.length - 1}
            gap={1}
          />
        ))}
      </div>}
    </div>
  );
};
