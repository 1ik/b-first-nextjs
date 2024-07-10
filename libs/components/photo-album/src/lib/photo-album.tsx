"use client";
import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./photo-album.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
export interface PhotoAlbumProps {
  data: any;
}

export function PhotoAlbum({ data }: PhotoAlbumProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div>
        <ul style={{ bottom: "20px", gap: "6px" }} className="flex absolute left-1/2 -translate-x-1/2">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div style={{ width: "10px", height: "10px" }} className="rounded-full bg-white cursor-pointer"></div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item: any, index: number) => (
          <div key={index} className="relative">
            <a href={getNewsUrl(item)}>
              <img
                className="aspect-video object-cover w-full"
                src={getImageUrl(item.meta.featured_image)}
                alt={item.title}
              />
              <div className="absolute top-0 h-full w-full flex text-center text-white px-8 z-50 bg-black/30 pb-10 items-end justify-center"></div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export function PrevArrow({ onClick }: any) {
  return (
    <div className="absolute top-1/2 z-50 -translate-y-1/2" onClick={onClick}>
      <button className="text-white">
        <RiArrowLeftSLine size={40} />
      </button>
    </div>
  );
}

export function NextArrow({ onClick }: any) {
  return (
    <div className="absolute top-1/2 right-0 z-50 -translate-y-1/2" onClick={onClick}>
      <button className="text-white">
        <RiArrowRightSLine size={40} />
      </button>
    </div>
  );
}
