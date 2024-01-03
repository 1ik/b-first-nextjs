import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider-styles.scss';

const PrevArrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <img
        style={{ transform: `rotate(180deg)` }}
        src="/icons/_next.png"
        alt={'next'}
      />
    </button>
  );
};

const NextArrow = ({ className, style, onClick }: any) => {
  return (
    <button
      className={className}
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <img src="/icons/_next.png" alt={'next'} />
    </button>
  );
};

export const Slider = ({ children, ...props }: any) => {
  return (
    <div className="slick-slider-container">
      <SlickSlider
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        {...props}
      >
        {children}
      </SlickSlider>
    </div>
  );
};

export default Slider;
