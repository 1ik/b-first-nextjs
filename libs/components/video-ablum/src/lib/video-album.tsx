"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect, useState } from "react";

export interface BlockNews5Props {
  data: any;
}
export function VideoAlbum({ data }: BlockNews5Props) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);
  return isMounted ? (
    <Swiper
      slidesPerView={4}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      speed={1200}
      className="mySwiper"
      spaceBetween={20}
      modules={[Autoplay]}
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
            <ItemCardVertical data={item} size="sm" showVideoIcon />
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : null;
}
