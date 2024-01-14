import {
  CategoryText,
  TitleText,
  SummaryText,
  PublishingTimeText,
  Image,
} from '@bd-first/common-ui';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ITitleTextProps {
  className?: string;
  size?: TSize;
}

interface IProps {
  className?: string;
  category?: string;
  title?: string;
  summary?: string;
  publishedAt?: string;
  showPublishedAt?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  showImage?: boolean;
  titleProps?: ITitleTextProps;
}

export function Card2({
  className = '',
  category,
  title,
  summary,
  publishedAt,
  showPublishedAt,
  imageUrl,
  imageAlt,
  showImage,
  titleProps = { size: 'md', className: '' },
}: IProps) {
  return (
    <div className={`flex flex-col justify-start ${className}`}>
      <CategoryText category={category ?? ''} />
      <TitleText
        size={titleProps.size}
        title={title ?? ''}
        className={`py-1 ${titleProps.className}`}
      />
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
      {publishedAt ? (
        <div className="flex w-full">
          <PublishingTimeText text={publishedAt ?? ''} className="py-1" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default Card2;
