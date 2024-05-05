import { getImageUrl } from "@bfirst/utilities";
/* eslint-disable-next-line */
export interface ItemCardVerticalProps {
  data: any;
  size: "md" | "lg";
  showRelatedStory?: boolean;
  showImageBorder?: boolean;
  titlePosition?: "normal" | "inset";
  className?: string;
}

export function ItemCardVertical({
  data,
  size,
  showRelatedStory = false,
  showImageBorder = false,
  titlePosition = "normal",
  className,
}: ItemCardVerticalProps) {
  const fontSize = size === "lg" ? "text-4xl" : size === "md" ? "text-[23px]" : "";

  return (
    <div className={`${className && className}`}>
      <div className="mb-5 relative">
        <img
          className={`${size === "md" ? 'h-[230px]' : ''} object-cover w-full ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}
          src={getImageUrl(data?.meta.featured_image)}
          alt=""
        />
        {titlePosition === "inset" && (
          <h2 className="bg-white absolute right-0 bottom-0 text-5xl w-3/5 px-6 py-4">{data?.title}</h2>
        )}
      </div>
      <div>
        <h2 className={`${fontSize} ${titlePosition === "inset" ? "hidden" : ""}`}>{data?.title}</h2>
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
