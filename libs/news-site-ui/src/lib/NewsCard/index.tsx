// Card contains a thubnail, title, category,time etc. of news
import { Image } from '@bd-first/common-ui';
import {useRouter} from "next/router";

type Size = 'xs' | 'sm' | 'md' | 'lg';

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
  gap?: number;
  url?: string;
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
  url,
  showDivider,
  gap,
}: INewsCard) => {
  const router = useRouter();
  // xs size
  if (size === 'xs') {
    return (
      <div
        onClick={() => {
          if (url) {
            router.push(url);
          }
        }}
        className={`flex flex-col items-start ${gap ? `gap-${gap}` : 'gap-.5'}`}
      >
        {showImage ? <Image className="pb-1" src={image} alt={imageAlt} /> : ''}
        {showCategory ? (
          <h5
            className={`uppercase font-semibold text-xs leading-3`}
            style={{ color: '#D00023' }}
          >
            {category}
          </h5>
        ) : (
          ''
        )}
        <h2 className={`tracking-[-.3px] leading-5 font-black ${'text-base'} `}>
          {title}
        </h2>
        {showDivider ? (
          <hr
            className="w-full border-[1px] mt-1"
            style={{ color: '#3A3A3A', opacity: 0.6 }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }

  return (
    <div
      onClick={() => {
        if (url) {
          router.push(url);
        }
      }}
      className={`flex flex-col items-start ${gap ? `gap-${gap}` : 'gap-1.5'}`}
    >
      {showImage ? <Image className="pb-1" src={image} alt={imageAlt} /> : ''}
      {showCategory ? (
        <h5
          className={`uppercase font-semibold text-base leading-4`}
          style={{ color: '#D00023' }}
        >
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
        <hr
          className="w-full border-[1px] mt-1"
          style={{ color: '#3A3A3A', opacity: 0.6 }}
        />
      ) : (
        ''
      )}
    </div>
  );
};
