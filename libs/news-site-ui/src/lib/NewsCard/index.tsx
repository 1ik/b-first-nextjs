/* eslint-disable @nx/enforce-module-boundaries */
// Card contains a thubnail, title, category,time etc. of news
import { Image } from '@bd-first/common-ui';
import { useRouter } from 'next/router';
import { Merriweather, Roboto } from '@next/font/google';

const merriweather = Merriweather({ weight: ['900', '400'], preload: false });
const roboto = Roboto({ weight: ['900', '400'], preload: false });

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
            className={`uppercase font-semibold text-[13px] leading-[17.5px] pt-1`}
            style={{
              color: '#D00023',
            }}
          >
            {category}
          </h5>
        ) : (
          ''
        )}
        <h2
          className={`${
            merriweather.className
          }tracking-[-.3px] leading-5 font-black ${'text-base'} `}
        >
          {title}
        </h2>
        {showDivider ? (
          <hr
            className="w-full border-[1px] mt-1"
            style={{ borderColor: '#3A3A3A', opacity: 0.6 }}
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
          className={`uppercase font-semibold text-[16px] leading-[21.5px] pt-0.5`}
          style={{
            color: '#D00023',
          }}
        >
          {category}
        </h5>
      ) : (
        ''
      )}
      <h1
        className={`${merriweather.className} tracking-[-.3px] font-black ${
          size === 'lg'
            ? 'text-[24px] leading-[30px]'
            : size === 'sm'
            ? 'text-[18px] leading-[22.5px]'
            : 'text-[18px] leading-[22px]'
        } `}
      >
        {title}
      </h1>
      {showSummary ? (
        <p
          className="font-normal pt-.5 leading-[19px] text-[16px] tracking-[-0.5px]"
          style={{
            color: '#030303',
            fontFamily: "font-family: 'Helvetica Neue', sans-serif",
          }}
        >
          {summary ?? ''}
        </p>
      ) : (
        ''
      )}
      {showPublishedAt ? (
        <span
          className={`${roboto.className} font-normal text-[14px] ${
            size === 'md' ? 'pt-1' : 'pt-0'
          } `}
        >
          {publishedAt}
        </span>
      ) : (
        ''
      )}
      {showDivider ? (
        <hr
          className="w-full border-[1px] mt-1"
          style={{ borderColor: '#3A3A3A', opacity: 0.6 }}
        />
      ) : (
        ''
      )}
    </div>
  );
};
