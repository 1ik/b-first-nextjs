"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
import "swiper/css";
import "swiper/css/pagination";
import "./photo-album.css";
export interface PhotoAlbumProps {
  data: any;
}

export function PhotoAlbum({ data }: PhotoAlbumProps) {
  return (
    <Swiper
      slidesPerView={1}
      className="mySwiper"
      spaceBetween={20}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
    >
      {data.map((item: any, index: number) => (
        <SwiperSlide key={index}>
          <div key={index} className="relative">
            <a href={getNewsUrl(item)}>
              <img
                className="aspect-video object-cover w-full"
                src={getImageUrl(item.meta.featured_image)}
                alt={item.title}
              />
              <div className="absolute top-0 h-full w-full flex text-center text-white px-8 z-10 bg-black/30 pb-10 items-end justify-center"></div>
            </a>
          </div>
        </SwiperSlide>
      ))}
      <button className="arrow-right arrow absolute top-1/2 -translate-y-1/2 left-0 z-50 text-white">
        <RiArrowLeftSLine size={40} />
      </button>
      <button className="arrow-left arrow absolute top-1/2 -translate-y-1/2 right-0 z-50 text-white">
        <RiArrowRightSLine size={40} />
      </button>
    </Swiper>
  );
}
