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
  const fontSize = size === "lg" ? "text-6xl" : size === "md" ? "text-[23px]" : "";

  return (
    <div>
      <div>
        <img
          className={`w-full ${showImageBorder ? "border-b-[5px] border-accent" : ""}`}
          src={`https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=${data.meta.featured_image}`}
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
