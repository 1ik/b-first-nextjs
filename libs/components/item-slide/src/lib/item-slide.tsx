"use client";
import "slick-carousel/slick/slick.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { RiArrowLeftSLine } from "react-icons/ri";
import Slider from "react-slick";
export interface BlockNews5Props {
  data: any;
}
export function ItemSlide({ data }: BlockNews5Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider className="flex justify-between" {...settings}>
        {data.map((item: any, index: any) => {
          return <ItemCardVertical key={index} data={item} size="sm" />;
        })}
      </Slider>
    </div>
  );
}

export function NextArrow({ onClick }: any) {
  return (
    <div className="absolute bottom-1/2  -left-10 translate-x-1 cursor-pointer z-10" onClick={onClick}>
      <button className="">
        <RiArrowLeftSLine size={22} />
      </button>
    </div>
  );
}

export function PrevArrow({ onClick }: any) {
  return (
    <div className=" absolute bottom-1/2 -right-10 -translate-x-2 cursor-pointer z-10" onClick={onClick}>
      <button className="">
        <RiArrowRightSLine size={22} />
      </button>
    </div>
  );
}
