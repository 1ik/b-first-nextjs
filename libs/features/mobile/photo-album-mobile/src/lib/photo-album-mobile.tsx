"use client";

import { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Loader } from "@bfirst/components-loader";
import { getImageUrl } from "@bfirst/utilities";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export interface PhotoAlbumMobileProps {
  images: any;
  bottomSlidesPerView?: number;
}

export function PhotoAlbumMobile({ images, bottomSlidesPerView = 2 }: PhotoAlbumMobileProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const slides = [...images];

  while (slides.length < bottomSlidesPerView) {
    slides.push({});
  }

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  return (
    <>
      <div className="">
        {isMounted ? (
          <Swiper
            onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {images?.map((image: any, index: number) => (
              <SwiperSlide key={index}>
                <img
                  className="w-full aspect-video object-cover"
                  src={getImageUrl(image.imageUrl)}
                  alt={image?.image_caption}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            className="w-full aspect-video object-cover"
            src={getImageUrl(images?.[0].imageUrl)}
            alt={images?.[0]?.image_caption}
          />
        )}
        <p className="montserrat-regular text-xs mt-2">{images?.[activeIndex].imageCaption}</p>
      </div>

      <div className="flex items-center gap-x-2 my-4">
        {isMounted ? (
          <>
            {images?.length > bottomSlidesPerView && (
              <button className="text-3xl disabled:opacity-30" ref={prevButtonRef}>
                <FaAngleLeft />
              </button>
            )}

            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={bottomSlidesPerView}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              navigation={{
                nextEl: nextButtonRef.current,
                prevEl: prevButtonRef.current,
              }}
            >
              {slides?.map((image: any, index: number) => (
                <SwiperSlide key={index}>
                  {image?.imageUrl ? (
                    <img
                      className={`${
                        activeIndex === index ? "opacity-100" : "opacity-70"
                      } border-red-600 w-full aspect-video object-cover cursor-pointer`}
                      src={getImageUrl(image.imageUrl)}
                      alt={image?.imageCaption}
                    />
                  ) : (
                    <div></div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
            {images?.length > bottomSlidesPerView && (
              <button className="text-3xl disabled:opacity-30" ref={nextButtonRef}>
                <FaAngleRight />
              </button>
            )}
          </>
        ) : (
          <div className="w-full h-20">
            <Loader />
          </div>
        )}
      </div>
    </>
  );
}
