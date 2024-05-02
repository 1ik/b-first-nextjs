import { getImageUrl } from "@bfirst/utilities";
/* eslint-disable-next-line */
export interface ItemCardVerticalProps {
  data: any;
  size: "md" | "lg";
  showRelatedStory?: boolean;
  showImageBorder?: boolean;
}

export function ItemCardVertical({
  data,
  size,
  showRelatedStory = false,
  showImageBorder = false,
}: ItemCardVerticalProps) {
  const fontSize = size === "lg" ? "text-4xl" : size === "md" ? "text-[23px]" : "";

  return (
    <div>
      <div className="mb-5">
        <img
          className={`w-full ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}
          src={getImageUrl(data.meta.featured_image)}
          alt=""
        />
      </div>
      <div>
        <h2 className={`${fontSize}`}>{data.title}</h2>
        {showRelatedStory && (
          <ul>
            {data.meta.related_story.map((item, index) => (
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
