"use client";
import "slick-carousel/slick/slick.css";

import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
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
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
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
      <Slider {...settings}>
        {data.map((item: any, index: any) => {
          return <ItemCardVertical key={index} data={item} size="sm" className="mr-4 ml-0.5" />;
        })}
      </Slider>
    </div>
  );
}

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 -translate-y-1/2 lg:-left-2 -left-2 z-40 cursor-pointer" onClick={onClick}>
      <MdArrowBackIosNew size={30} className="dark:text-white" />
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className=" absolute top-1/2 -translate-y-1/2 lg:right-1.5 right-2 z-40  cursor-pointer" onClick={onClick}>
      <MdArrowForwardIos size={30} className="dark:text-white" />
    </div>
  );
}
