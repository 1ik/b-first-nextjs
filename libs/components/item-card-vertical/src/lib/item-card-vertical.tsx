import { cropText, getImageUrl, getNewsUrl } from "@bfirst/utilities";
/* eslint-disable-next-line */
export interface ItemCardVerticalProps {
  data: any;
  size?: "sm" | "md" | "lg";
  showIntro?: boolean;
  showRelatedStory?: boolean;
  showImageBorder?: boolean;
  titlePosition?: "normal" | "inset";
  className?: string;
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

  return (
    <div className={`${className}`}>
      <div className={`mb-5 relative overflow-hidden ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}>
        <div>
          {data?.meta.featured_element === "video" ? (
            <div className="featured_video" dangerouslySetInnerHTML={{ __html: data?.meta?.featured_video }}></div>
          ) : (
            <a href={getNewsUrl(data)}>
              <img
                className={`hover:scale-110 duration-300 aspect-video object-cover w-full`}
                src={getImageUrl(data?.meta.featured_image)}
                alt={data?.meta.imageCaption}
              />
            </a>
          )}
        </div>
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
