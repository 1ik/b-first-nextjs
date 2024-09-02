import { cropText, getImageUrl, getNewsUrl } from "@bfirst/utilities";
import moment from "moment-timezone";
import { FaPlay } from "react-icons/fa";
import { MdPhotoSizeSelectActual } from "react-icons/md";
export interface ItemCardHorizontalProps {
  data: any;
  size?: "sm" | "md" | "lg" | "xl";
  imageSide?: "left" | "right";
  showTitleBorderSmall?: boolean;
  showTitleBorderBig?: boolean;
  showIntro?: boolean;
  className?: string;
  showCreatedAt?: boolean;
  showTime?: boolean;
  titleCrop?: number;
  introCrop?: number;
  titleFontSize?: `${number}${"px" | "rem" | "em"}`;
  introFontSize?: `${number}${"px" | "rem" | "em"}`;
  titleBold?: boolean;
}

export function ItemCardHorizontal({
  data,
  size = "xl",
  imageSide = "left",
  showTitleBorderSmall,
  showTitleBorderBig,
  showIntro,
  className,
  showCreatedAt,
  showTime,
  titleFontSize,
  introFontSize,
  titleCrop,
  introCrop,
  titleBold,
}: ItemCardHorizontalProps) {
  const titleFont = `leading-[110%] ${
    size === "xl"
      ? "text-4xl"
      : size === "sm"
      ? "text-lg"
      : size === "md"
      ? "text-xl"
      : size === "lg"
      ? "text-[28px]"
      : ""
  }`;

  const introFont = `leading-[110%] ${
    size === "xl"
      ? "text-2xl"
      : size === "sm"
      ? "text-sm"
      : size === "md"
      ? "text-sm"
      : size === "lg"
      ? "text-base"
      : ""
  }`;

  const iconSize = `${size === "sm" ? "w-7 h-7" : size === "md" ? "w-8 h-8" : "w-10 h-10 text-xl"}`;

  return (
    <div
      className={`flex ${className} ${showTitleBorderBig ? "border-t border-accent pt-3" : ""} ${
        size === "xl" ? "gap-x-6" : size === "lg" ? "gap-x-5" : ""
      }`}
    >
      <div
        className={`${showTitleBorderSmall ? "border-t border-accent" : ""} ${
          size === "xl" ? "w-4/12" : size === "md" ? "w-7/12" : size === "sm" ? "w-7/12" : size === "lg" ? "w-6/12" : ""
        }   
          ${imageSide === "left" ? "order-last" : imageSide === "right" ? "order-first" : ""} `}
      >
        <div className={`${titleBold ? "font-bold" : ""} pl-2 flex flex-col h-full leading-[120%]`}>
          <a href={getNewsUrl(data)}>
            <h2
              style={{ fontSize: titleFontSize }}
              className={` ${titleFont} ${
                showTitleBorderSmall ? "mt-3" : ""
              } hover:text-accent dark:hover:text-accent-light duration-150 leading-[120%]`}
            >
              {data?.meta?.shoulder && (
                <span style={{ color: data?.meta?.shoulder_color || "#5F5FB7" }}>
                  <span className={`${data?.meta?.shoulder_blink ? "animate-pulse" : ""}`}>{data?.meta?.shoulder}</span>{" "}
                  |{" "}
                </span>
              )}
              {titleCrop ? cropText(data?.title, titleCrop) : data?.title}
            </h2>
          </a>

          {showTime && (
            <p className="font-montserrat text-xs text-[#6F6F6F] md:pt-4 pt-2 dark:border-dark-300 dark:text-white">
              {`${moment(data?.created_at).startOf(data?.created_at).fromNow()}`}
            </p>
          )}
          {showCreatedAt && (
            <p className="font-montserrat text-xs lg:text-lg text-[#6F6F6F] mt-4 md:mt-10 border-t md:pt-4 pt-2  dark:border-dark-300 dark:text-white">
              Published At : {`${moment(data?.created_at).format("MMM Do, YYYY")}`}
            </p>
          )}
          {showIntro && (
            <p style={{ fontSize: introFontSize }} className={`mt-4 ${introFont} leading-[120%]`}>
              {introCrop ? cropText(data?.meta.intro, introCrop) : data?.meta.intro}
            </p>
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden ${
          size === "xl" ? "w-8/12" : size === "md" ? "w-5/12" : size === "sm" ? "w-5/12" : size === "lg" ? "w-5/12" : ""
        }`}
      >
        <div>
          {data?.meta?.featured_element === "video" &&
          !data?.categories.find((c: { name: string }) => c.name === "Video_Gallery") ? (
            <div className="featured_video" dangerouslySetInnerHTML={{ __html: data?.meta?.featured_video }}></div>
          ) : (
            <div className="relative">
              <a href={getNewsUrl(data)}>
                <img
                  className={`hover:scale-110 duration-300 w-full object-cover aspect-video`}
                  src={getImageUrl(data?.meta.featured_image)}
                  alt={data?.meta.featured_image.imageCaption}
                />
              </a>

              {data?.categories?.find((c: any) => c.name === "Video_Gallery") && (
                <div
                  className={`absolute bottom-0 left-0 bg-accent flex items-center justify-center text-white ${iconSize}`}
                >
                  <FaPlay />
                </div>
              )}
              {data?.categories?.find((c: any) => c.name === "Photo_Gallery") && (
                <div
                  className={`absolute bottom-0 left-0 bg-black bg-opacity-40 flex items-center justify-center text-white ${iconSize}`}
                >
                  <MdPhotoSizeSelectActual />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
