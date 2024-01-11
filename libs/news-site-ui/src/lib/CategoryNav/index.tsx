import { Slider } from '@bd-first/common-ui';

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
            <a href={'/' + c?.name}>{c?.name}</a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoryNav;
