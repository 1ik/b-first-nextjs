import { cropText, getImageUrl, getNewsUrl } from "@bfirst/utilities";
import { FaPlay } from "react-icons/fa6";
import { MdPhotoSizeSelectActual } from "react-icons/md";
/* eslint-disable-next-line */
export interface ItemCardVerticalProps {
  data: any;
  size?: "sm" | "md" | "lg";
  showIntro?: boolean;
  showRelatedStory?: boolean;
  showImageBorder?: boolean;
  titlePosition?: "normal" | "inset";
  className?: string;
  Link?: any;
  titleCrop?: number;
  introCrop?: number;
  titleBold?: boolean;
  titleFontSize?: `${number}${"px" | "rem" | "em"}`;
  introFontSize?: `${number}${"px" | "rem" | "em"}`;
}

export function ItemCardVertical({
  data,
  size = "md",
  showRelatedStory = false,
  showIntro = false,
  showImageBorder = false,
  titlePosition = "normal",
  className,
  Link,
  titleCrop,
  introCrop,
  titleFontSize,
  introFontSize,
  titleBold,
}: ItemCardVerticalProps) {
  const fontSize = `${
    size === "lg" ? "text-4xl" : size === "md" ? "text-[20px] leading-[110%]" : size === "sm" ? "text-[19px]" : ""
  }`;

  const introFont = `${size === "lg" ? "text-xl" : "text-sm"}`;

  const iconSize = `${size === "sm" ? "w-7 h-7" : size === "md" ? "w-8 h-8" : "w-10 h-10 text-xl"}`;

  return (
    <div className={`${className}`}>
      <div className={`mb-5 relative overflow-hidden ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}>
        <div>
          {data?.meta.featured_element === "video" &&
          !data?.categories.find((c: { name: string }) => c.name === "Video_Gallery") ? (
            <div className="featured_video" dangerouslySetInnerHTML={{ __html: data?.meta?.featured_video }}></div>
          ) : (
            <div className="relative">
              <a href={getNewsUrl(data)}>
                <img
                  className={`hover:scale-110 duration-300 aspect-video object-cover w-full`}
                  src={getImageUrl(data?.meta.featured_image)}
                  alt={data?.meta.imageCaption}
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

        {titlePosition === "inset" && (
          <a href={getNewsUrl(data)}>
            <h2
              className={`bg-white/80 backdrop-blur-sm ${
                titleBold ? "font-bold" : ""
              } hover:text-accent dark:hover:text-accent-light duration-150 text-black dark:bg-dark-400/80 dark:text-white absolute ${
                size === "lg"
                  ? "text-[28px] md:text-[36px] right-0 bottom-0 w-3/5 px-10 py-4"
                  : "text-2xl w-full bottom-0 translate-y-2 px-2 py-1 left-0"
              }`}
            >
              {titleCrop ? cropText(data?.title, titleCrop) : data?.title}
            </h2>
          </a>
        )}
      </div>
      <div>
        <a href={getNewsUrl(data)}>
          <h2
            style={{ fontSize: titleFontSize }}
            className={`${
              titleBold ? "font-bold" : ""
            } hover:text-accent dark:hover:text-accent-light duration-150 ${fontSize} leading-[120%] ${
              titlePosition === "inset" ? "hidden" : ""
            }`}
          >
            {data?.meta?.shoulder && (
              <span
                style={{ color: data?.meta?.shoulder_color || "#5F5FB7" }}
                className={`${size === "lg" ? "md:text-[34px]" : ""}`}
              >
                <span className={`${data?.meta?.shoulder_blink ? "animate-pulse" : ""}`}>{data?.meta?.shoulder}</span> |{" "}
              </span>
            )}
            {titleCrop ? cropText(data?.title, titleCrop) : data?.title}
          </h2>
        </a>

        {showIntro && (
          <p style={{ fontSize: introFontSize }} className={`${introFont} leading-[120%] mt-3`}>
            {introCrop ? cropText(data?.meta.intro, introCrop) : data?.meta.intro}
          </p>
        )}

        {showRelatedStory && (
          <ul>
            {data?.meta.related_story.map((item, index) => (
              <li key={index} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ItemCardVertical;
