import { Slider } from '@bd-first/common-ui';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

export const CategoryNav = ({ categories }: any) => {
  return (
    <div
      style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Slider
        className="slider"
        autoplay={false}
        dots={false}
        infinite={false}
        arrows={true}
        slidesToScroll={1}
        slidesToShow={2}
      >
        {categories?.map((c: any, idx: number) => (
          <div
            style={{
              color: '#030303',
              fontFamily: "'Helvetica Neue', 'sans-serif'",
            }}
            className="text-[14px] font-normal leading-[16.7px]"
            key={idx}
          >
            <Link href={'/' + c.name}>{c.name}</Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryNav;
