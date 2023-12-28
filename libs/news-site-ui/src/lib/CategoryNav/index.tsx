import { Slider } from '@bd-first/common-ui';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const categories = [
  { key: 1, name: 'Latest' },
  { key: 2, name: 'Bangladesh' },
  { key: 3, name: 'Economy' },
  { key: 4, name: 'Sports' },
  { key: 5, name: 'Entertainment' },
  { key: 6, name: 'Culture' },
  { key: 7, name: 'Life and Living' },
  { key: 8, name: 'Tech & Startup' },
  { key: 9, name: 'Multimedia' },
  { key: 10, name: 'Feature' },
];

export const CategoryNav = () => {
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
          <div className="text-xs font-normal leading-4" key={idx}>
            {c?.name ?? ''}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryNav;
