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

// Import custom style-sheet
import { getImageUrl } from "@bfirst/utilities";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "./photo-album-desktop-style.css";

interface PhotoAlbumDesktopProps {
  data: any;
}

export function PhotoAlbumDesktop({ data }: PhotoAlbumDesktopProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  if (!isMounted) return <div className="animate-bounce h-4 w-4 bg-red-600"></div>;

  return (
    <>
      <Swiper
        onActiveIndexChange={(e) => setActiveIndex(e.activeIndex)}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {data?.map((image: any, index: number) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-4 gap-5">
              <p className="col-span-1">{image?.imageCaption}</p>
              <img className="col-span-3" src={getImageUrl(image.imageUrl)} alt={image?.image_caption || data?.title} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center gap-x-2 mt-4">
        {data?.length > 4 && (
          <button className="text-6xl" ref={prevButtonRef}>
            <FaAngleLeft />
          </button>
        )}

        <Swiper
          className="relative"
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={20}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            nextEl: nextButtonRef.current,
            prevEl: prevButtonRef.current,
          }}
        >
          {data?.map((image: any, index: number) => (
            <SwiperSlide key={index}>
              <img
                className={`${activeIndex === index ? "opacity-100" : "opacity-70"} border-red-600`}
                src={getImageUrl(image.imageUrl)}
                alt={image?.imageCaption || data?.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {data?.length < 4 && (
          <button className="text-6xl" ref={prevButtonRef}>
            <FaAngleRight />
          </button>
        )}
      </div>
    </>
  );
}
