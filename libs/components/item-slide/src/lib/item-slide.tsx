"use client";
import { RiArrowRightSLine } from "react-icons/ri";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
export interface BlockNews5Props {
  data: any;
}
export function ItemSlide({ data }: BlockNews5Props) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={3}
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
            <SwiperSlide>
              <ItemCardVertical key={index} data={item} size="sm" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="arrow-right arrow absolute top-1/3 xl:top-1/2 left-0 xl:-left-8 z-20 -translate-y-1/2">
        <RiArrowLeftSLine size={30} />
      </button>
      <button className="arrow-left arrow absolute top-1/3 xl:top-1/2 right-0 xl:-right-8 z-10 -translate-y-1/2">
        <RiArrowRightSLine size={30} />
      </button>
    </div>
  );
}
