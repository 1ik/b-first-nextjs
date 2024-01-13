import {
  CategoryText,
  TitleText,
  SummaryText,
  PublishingTimeText,
  Image,
} from '@bd-first/common-ui';

interface IProps {
  category?: string;
  title?: string;
  summary?: string;
  publishedAt?: string;
  imageUrl?: string;
  imageAlt?: string;
  showImage?: boolean;
}

export function Card2({
  category,
  title,
  summary,
  publishedAt,
  imageUrl,
  imageAlt,
  showImage,
}: IProps) {
  return (
    <div className={'flex flex-col justify-start'}>
      <CategoryText category={category ?? ''} />
      <TitleText size="md" title={title ?? ''} className="py-1" />
      <div className="flex w-full gap-4">
        <div className={`${showImage ? 'w-1/2' : 'w-full'}`}>
          <SummaryText text={summary ?? ''} />
        </div>
        {showImage ? (
          <div className="w-1/2">
            <Image className={'max-w-full'} src={imageUrl} alt={imageAlt} />
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="flex w-full">
        <PublishingTimeText text={publishedAt ?? ''} className="py-1" />
      </div>
    </div>
  );
}

export default Card2;
