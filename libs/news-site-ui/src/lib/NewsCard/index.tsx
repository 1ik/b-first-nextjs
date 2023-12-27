// Card contains a thubnail, title, category,time etc. of news
import { UIImage } from '@bd-first/common-ui';

type Size = 'sm' | 'md' | 'lg';

interface INewsCard {
  image?: string;
  imageAlt?: string;
  showImage?: boolean;
  category?: string;
  showCategory?: boolean;
  title: string;
  summary?: string;
  showSummary?: boolean;
  publishedAt?: string;
  showPublishedAt?: boolean;
  size?: Size;
  showDivider?: boolean;
}
export const NewsCard = ({
  image,
  imageAlt,
  showImage,
  category,
  showCategory,
  title,
  summary,
  showSummary,
  publishedAt,
  showPublishedAt,
  size,
  showDivider,
}: INewsCard) => {
  return (
    <div className="flex flex-col items-start gap-1">
      {showImage ? <UIImage src={image} alt={imageAlt} /> : ''}
      {showCategory ? (
        <h5 className={`font-semibold text-base`} style={{ color: '#D00023' }}>
          {category}
        </h5>
      ) : (
        ''
      )}
      <h1
        className={`tracking-[-.3px] leading-[28px] font-black ${
          size === 'lg' ? 'text-xl' : size === 'sm' ? 'text-base' : 'text-lg'
        } `}
      >
        {title}
      </h1>
      {showSummary ? (
        <p
          className="font-normal leading-4 text-sm tracking-[-0.5px]"
          style={{
            color: '#030303',
          }}
        >
          {summary ?? ''}
        </p>
      ) : (
        ''
      )}
      {showPublishedAt ? (
        <span
          className={`font-normal text-sm ${size === 'md' ? 'pt-1' : 'pt=0'} `}
        >
          {publishedAt}
        </span>
      ) : (
        ''
      )}
      {showDivider ? (
        <hr className="w-full border-[1px] mt-1" style={{ color: '#3A3A3A' }} />
      ) : (
        ''
      )}
    </div>
  );
};
