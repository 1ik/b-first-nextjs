"use client";

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import "./video-album.css";

export interface BlockNews5Props {
  data: any;
}
export function VideoAlbum({ data }: BlockNews5Props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
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
    <div className="slider-container p-0 m-0">
      <Slider {...settings}>
        {data.map((item: any, index: any) => {
          return <ItemCardVertical key={index} data={item} size="sm" showVideo/>;
        })}
      </Slider>
    </div>
  );
}
