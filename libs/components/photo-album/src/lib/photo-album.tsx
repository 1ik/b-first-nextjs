"use client";
import { getImageUrl } from "@bfirst/utilities";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export interface PhotoAlbumProps {
  data: any;
  showTitle?: boolean;
  showIntro?: boolean;
}

export function PhotoAlbum({ data, showTitle = false, showIntro = false }: PhotoAlbumProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
            <img
              className="aspect-video object-cover w-full"
              src={getImageUrl(item.meta.featured_image)}
              alt={item.title}
            />
            <div
              style={{
                alignItems: "end",
                paddingBottom: "40px",
              }}
              className="absolute top-0 h-full w-full flex text-center text-white px-8 z-50"
            >
              <div>
                {showTitle && (
                  <h2 className="font-montserrat mb-2 text-lg md:text-3xl font-bold leading-[120%]">{item.title}</h2>
                )}
                {showIntro && <p className="text-xs lg:text-base">{item.meta.intro}</p>}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
