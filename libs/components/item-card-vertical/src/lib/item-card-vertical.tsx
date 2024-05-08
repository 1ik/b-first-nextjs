import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
/* eslint-disable-next-line */
export interface ItemCardVerticalProps {
  data: any;
  size: "md" | "lg";
  showRelatedStory?: boolean;
  showImageBorder?: boolean;
  titlePosition?: "normal" | "inset";
  className?: string;
  Link?: any;
}

export function ItemCardVertical({
  data,
  size,
  showRelatedStory = false,
  showImageBorder = false,
  titlePosition = "normal",
  className,
  Link,
}: ItemCardVerticalProps) {
  const fontSize = size === "lg" ? "text-4xl" : size === "md" ? "text-[23px]" : "";

  return (
    <div className={`${className && className}`}>
      <div className={`mb-5 relative overflow-hidden ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}>
        {Link ? (
          <Link href={getNewsUrl(data)}>
            <img
              className={`hover:scale-110 duration-300 ${size === "md" ? "h-[230px]" : ""} object-cover w-full`}
              src={getImageUrl(data?.meta.featured_image)}
              alt={data?.meta.imageCaption}
            />
          </Link>
        ) : (
          <a href={getNewsUrl(data)}>
            <img
              className={`hover:scale-110 duration-300 ${size === "md" ? "h-[230px]" : ""} object-cover w-full`}
              src={getImageUrl(data?.meta.featured_image)}
              alt={data?.meta.imageCaption}
            />
          </a>
        )}

        {titlePosition === "inset" &&
          (Link ? (
            <Link href={getNewsUrl(data)}>
              <h2 className="bg-white hover:text-accent dark:hover:text-accent-light duration-150 text-black dark:bg-dark-400 dark:text-white absolute right-0 bottom-0 text-5xl w-3/5 px-10 py-8">
                {data?.title}
              </h2>
            </Link>
          ) : (
            <a href={getNewsUrl(data)}>
              <h2 className="bg-white hover:text-accent dark:hover:text-accent-light duration-150 text-black dark:bg-dark-400 dark:text-white absolute right-0 bottom-0 text-5xl w-3/5 px-10 py-8">
                {data?.title}
              </h2>
            </a>
          ))}
      </div>
      <div>
        {Link ? (
          <Link href={getNewsUrl(data)}>
            <h2
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
              className={`hover:text-accent dark:hover:text-accent-light duration-150 ${fontSize} ${
                titlePosition === "inset" ? "hidden" : ""
              }`}
            >
              {data?.title}
            </h2>
          </a>
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
