import {
  CategoryText,
  TitleText,
  SummaryText,
  PublishingTimeText,
  Image,
} from '@bd-first/common-ui';

import { Divider } from '@bd-first/components/common/divider';

type TSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface ITitleTextProps {
  className?: string;
  size?: TSize;
}

interface IDividerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface IProps {
  className?: string;
  contentWrapperClass?: string;
  imageWrapperClass?: string;
  category?: string;
  title?: string;
  summary?: string;
  showPublishedAt: boolean;
  publishedAt?: string;
  showImage?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  titleProps?: ITitleTextProps;
  showDivider?: boolean;
  dividerProps?: IDividerProps;
  direction?: string;
}

export function Card3({
  className = '',
  contentWrapperClass = '',
  imageWrapperClass = '',
  category,
  title = '',
  summary = '',
  showPublishedAt,
  publishedAt,
  showImage,
  imageUrl,
  imageAlt,
  titleProps = { size: 'xs', className: '' },
  showDivider,
  dividerProps = { className: '', size: 'md' },
  direction = 'flex-col',
}: IProps) {
  return (
    <div className={`flex justify-start ${direction} ${className}`}>
      {showImage ? (
        <div className={`${imageWrapperClass}`}>
          <Image src={imageUrl} alt={imageAlt} />
        </div>
      ) : (
        ''
      )}
      <div className={`${contentWrapperClass}`}>
        <CategoryText category={category ?? ''} size="lg" />
        <TitleText
          size={titleProps.size}
          title={title}
          className={`py-1 ${titleProps.className}`}
        />
        <SummaryText text={summary} />
        {showPublishedAt ? (
          <PublishingTimeText text={publishedAt ?? ''} className="py-2" />
        ) : (
          ''
        )}
        {showDivider ? (
          <Divider color="gray" orientation="horizontal" {...dividerProps} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Card3;
