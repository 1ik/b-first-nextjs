"use client";
import "slick-carousel/slick/slick.css";

import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
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
    nextArrow:<NextArrow />,
    prevArrow: <PrevArrow /> ,
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
          return <ItemCardVertical key={index} data={item} size="sm"/>;
        })}
      </Slider>
    </div>
  );
}

export function NextArrow({onClick}:any) {

  return (
    <div className="absolute bottom-[-40px]  left-1/2 translate-x-1 cursor-pointer z-10" onClick={onClick}>
      <button className="px-2 py-1 bg-accent text-white text-sm">Next</button>
    </div>
  );
}

export function PrevArrow({onClick}:any) {
  return (
    <div className=" absolute bottom-[-40px] right-1/2 -translate-x-2 cursor-pointer z-10" onClick={onClick}>
      <button className="px-2 py-1 bg-accent text-white text-sm">Prev</button>
    </div>
  );
}
