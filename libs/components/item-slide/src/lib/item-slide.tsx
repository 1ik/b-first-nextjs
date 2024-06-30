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
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item: any, index: any) => {
          return <ItemCardVertical key={index} data={item} size="sm" className="mr-4" />;
        })}
      </Slider>
    </div>
  );
}

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className=" absolute top-1/2 -translate-y-1/2 -left-8  cursor-pointer" onClick={onClick}>
      <MdArrowBackIosNew size={30} className="dark:text-white" />
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className=" absolute top-1/2 -translate-y-1/2 -right-4 z-40  cursor-pointer" onClick={onClick}>
      <MdArrowForwardIos size={30} className="dark:text-white" />
    </div>
  );
}
