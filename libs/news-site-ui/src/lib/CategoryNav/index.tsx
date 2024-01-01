import { Slider } from '@bd-first/common-ui';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';

export const CategoryNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://panel.bangladeshfirst.com/api/categories')
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
      });
  }, []);

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
