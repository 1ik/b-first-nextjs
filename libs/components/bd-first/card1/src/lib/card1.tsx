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
  summary1?: string;
  publishedAt?: string;
  showImage?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  summary2?: string;
  titleProps?: ITitleTextProps;
}

export function Card1({
  className = '',
  category,
  title = '',
  summary1 = '',
  publishedAt,
  showImage,
  imageUrl,
  imageAlt,
  summary2 = '',
  titleProps = { size: 'lg', className: '' },
}: IProps) {
  return (
    <div className={`flex flex-col justify-start ${className}`}>
      <CategoryText category={category ?? ''} />
      <TitleText
        size={titleProps.size}
        title={title}
        className={`py-1 ${titleProps.className}`}
      />
      <SummaryText text={summary1} />
      <PublishingTimeText text={publishedAt ?? ''} className="py-2" />
      {showImage ? <Image src={imageUrl} alt={imageAlt} /> : ''}
      {summary2 ? <SummaryText text={summary2} className="pt-2" /> : ''}
    </div>
  );
}

export default Card1;
