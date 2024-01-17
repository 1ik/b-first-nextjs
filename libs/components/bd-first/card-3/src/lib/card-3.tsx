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
  color?: 'black' | 'gray';
}

type TDirection =
  | 'flex-row'
  | 'flex-col'
  | 'flex-row-reverse'
  | 'flex-col-reverse';

interface IProps {
  className?: string;
  contentWrapperClass?: string;
  imageWrapperClass?: string;
  imageClass?: string;
  category?: string;
  title?: string;
  summary?: string;
  showPublishedAt?: boolean;
  publishedAt?: string;
  showImage?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  titleProps?: ITitleTextProps;
  showDivider?: boolean;
  dividerProps?: IDividerProps;
  direction?: TDirection;
  showCategory?: boolean;
  showSummary?: boolean;
}

export function Card3({
  className = '',
  contentWrapperClass = '',
  imageWrapperClass = '',
  imageClass = '',
  category,
  title = '',
  showSummary = false,
  summary = '',
  showPublishedAt = false,
  publishedAt,
  showImage,
  showCategory = false,
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
          <Image src={imageUrl} alt={imageAlt} className={imageClass} />
        </div>
      ) : (
        ''
      )}
      <div className={`${contentWrapperClass}`}>
        {showCategory ? <CategoryText category={category ?? ''} /> : ''}
        <TitleText
          size={titleProps.size}
          title={title}
          className={`py-1 ${titleProps.className}`}
        />
        {showSummary ? <SummaryText text={summary} /> : ''}
        {showPublishedAt ? (
          <PublishingTimeText text={publishedAt ?? ''} className="py-2" />
        ) : (
          ''
        )}
      </div>
      {showDivider ? (
        <Divider color="gray" orientation="horizontal" {...dividerProps} />
      ) : (
        ''
      )}
    </div>
  );
}

export default Card3;
