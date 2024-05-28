import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
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
  titleFontSize,
  introFontSize,
}: ItemCardVerticalProps) {
  const fontSize = `${
    size === "lg" ? "text-4xl" : size === "md" ? "text-[20px] leading-[110%]" : size === "sm" ? "text-[19px]" : ""
  }`;

  const introFont = `${size === "lg" ? "text-xl" : "text-sm"}`;

  return (
    <div className={`${className}`}>
      <div className={`mb-5 relative overflow-hidden ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}>
        {Link ? (
          <Link href={getNewsUrl(data)}>
            <img
              className={`hover:scale-110 duration-300 aspect-video object-cover w-full`}
              src={getImageUrl(data?.meta.featured_image)}
              alt={data?.meta.imageCaption}
            />
          </Link>
        ) : (
          <a href={getNewsUrl(data)}>
            <img
              className={`hover:scale-110 duration-300 aspect-video object-cover w-full`}
              src={getImageUrl(data?.meta.featured_image)}
              alt={data?.meta.imageCaption}
            />
          </a>
        )}

        {titlePosition === "inset" &&
          (Link ? (
            <Link href={getNewsUrl(data)}>
              <h2
                className={`bg-white hover:text-accent dark:hover:text-accent-light duration-150 text-black dark:bg-dark-400 dark:text-white absolute ${
                  size === "lg"
                    ? "text-5xl right-0 bottom-0 w-3/5 px-10 py-8px-10 py-8"
                    : "text-2xl w-full -bottom-1/2 left-0"
                }`}
              >
                {data?.title}
              </h2>
            </Link>
          ) : (
            <a href={getNewsUrl(data)}>
              <h2
                className={`bg-white hover:text-accent dark:hover:text-accent-light duration-150 text-black dark:bg-dark-400 dark:text-white absolute ${
                  size === "lg"
                    ? "text-5xl right-0 bottom-0 w-3/5 px-10 py-8px-10 py-8"
                    : "text-2xl w-full bottom-0 translate-y-2 px-2 py-1 left-0"
                }`}
              >
                {data?.title}
              </h2>
            </a>
          ))}
      </div>
      <div>
        {Link ? (
          <Link href={getNewsUrl(data)}>
            <h2
              style={{ fontSize: titleFontSize }}
              className={`hover:text-accent dark:hover:text-accent-light duration-150 ${fontSize} ${
                titlePosition === "inset" ? "hidden" : ""
              }`}
            >
              {data?.title}
            </h2>
          </Link>
        ) : (
          <a href={getNewsUrl(data)}>
            <h2
              style={{ fontSize: titleFontSize }}
              className={`hover:text-accent dark:hover:text-accent-light duration-150 ${fontSize} ${
                titlePosition === "inset" ? "hidden" : ""
              }`}
            >
              {data?.title}
            </h2>
          </a>
        )}

        {showIntro && (
          <p style={{ fontSize: introFontSize }} className={`${introFont} mt-3 dark:text-[#bebdbd] text-[#6f6f6f]`}>
            {data?.meta.intro}
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
