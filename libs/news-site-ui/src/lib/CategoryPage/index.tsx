import { NewsCard } from '../NewsCard';
import { Divider } from '@bd-first/common-ui';
import { getImageUrl } from '../image_utils';

export const CategoryPage = ({ items }: any) => {
  return (
    <div className="flex flex-col w-full gap-2 px-3">
      {items && items[0] && (
        <NewsCard
          title={items[0]?.title ?? ''}
          category={items[0]?.category.name ?? ''}
          image={getImageUrl(items[0]?.featured_image ?? '')}
          imageAlt={items[0]?.title ?? ''}
          showImage
          url={`/news/${items[0].id}/${items[0].slug}`}
          showCategory
          size="lg"
        />
      )}
      <div className="flex gap-4 pt-2">
        <div className="w-1/2">
          {items && items?.length > 1 && (
            <NewsCard
              title={items[1]?.title ?? ''}
              showCategory
              category={items[1]?.category.name ?? ''}
              url={`/news/${items[1].id}/${items[1].slug}`}
              showImage
              image={getImageUrl(items[1]?.featured_image ?? '')}
              imageAlt={items[1]?.title ?? ''}
              size="xs"
            />
          )}
        </div>
        <div className="w-1/2">
          {items?.length > 2 && (
            <NewsCard
              title={items[2]?.title ?? ''}
              showCategory
              category={items[2]?.category.name ?? ''}
              showImage
              url={`/news/${items[2].id}/${items[2].slug}`}
              image={getImageUrl(items[2]?.featured_image ?? '')}
              imageAlt={items[2]?.title ?? ''}
              size="xs"
            />
          )}
        </div>
      </div>
      <Divider className={'mb-0'} />

      {/* News List */}
      {items && items?.length > 3 && (
        <div className="flex flex-col w-full gap-3 pt-3 pb-0">
          {items?.slice(2, items?.length - 1)?.map((n: any, idx: number) => (
            <NewsCard
              key={idx}
              title={n?.title ?? ''}
              showCategory
              url={`/news/${n.id}/${n.slug}`}
              category={n?.category.name ?? ''}
              showPublishedAt
              size="xs"
              showDivider={idx !== items?.length - 1}
              gap={1}
            />
          ))}
        </div>
      )}
    </div>
  );
};
