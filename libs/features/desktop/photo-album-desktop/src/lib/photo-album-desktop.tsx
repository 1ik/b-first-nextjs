import { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import Swiper required modules
import { FreeMode, Navigation } from "swiper/modules";

import { ImagePreview } from "@bfirst/components-image-preview";
import { getImageUrl } from "@bfirst/utilities";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export interface PhotoAlbumDesktopProps {
  data: any;
}

export function PhotoAlbumDesktop({ data }: PhotoAlbumDesktopProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const images = [
    {
      imageUrl: data?.meta?.featured_image,
      imageCaption: data?.meta?.imageCaption,
    },
    ...(data?.meta?.more_images || []),
  ];

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
            modules={[FreeMode, Navigation]}
            navigation={{ prevEl: prevButtonRef.current, nextEl: nextButtonRef.current }}
          >
            {images?.map((image: any, index: number) => (
              <SwiperSlide key={index}>
                <ImagePreview imageUrl={getImageUrl(image.imageUrl)} imageCaption={image.imageCaption} />
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
      </div>
      <div className="my-2 flex items-center justify-between gap-x-6">
        <p className="montserrat-bold text-sm py-2">
          {activeIndex + 1} of {images?.length}
        </p>
        {images.length > 1 ? (
          <div className="flex gap-x-0.5 text-xl">
            <button
              className="px-4 py-2 rounded-md hover:bg-dark-300/25 disabled:hover:bg-transparent disabled:opacity-50"
              ref={prevButtonRef}
            >
              <FaArrowLeftLong />
            </button>
            <button
              className="px-3 py-2 rounded-md hover:bg-dark-300/25 disabled:hover:bg-transparent disabled:opacity-50"
              ref={nextButtonRef}
            >
              <FaArrowRightLong />
            </button>
          </div>
        ) : null}
      </div>
      <div>
        <p>{images[activeIndex]?.imageCaption}</p>
      </div>
    </>
  );
}
