"use client";

import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
export interface BlockNews5Props {
  data: any;
}
export function ItemSlide({ data }: BlockNews5Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  return isMounted ? (
    <div className="relative">
      <Swiper
        slidesPerView={4}
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          540: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {data.map((item: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <ItemCardVertical data={item} size="sm" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="arrow-right arrow absolute disabled:opacity-30 top-1/3 xl:top-1/2 left-0 z-20 -translate-y-1/2 text-5xl">
        <RiArrowLeftSLine />
      </button>
      <button className="arrow-left arrow absolute disabled:opacity-30 top-1/3 xl:top-1/2 right-0 z-10 -translate-y-1/2 text-5xl">
        <RiArrowRightSLine />
      </button>
    </div>
  ) : null;
}
