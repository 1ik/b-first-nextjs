import { getImageUrl } from "@bfirst/utilities";
export interface ItemCardHorizontalProps {
  data: any;
  size?: "lg" | "sm";
  imageSide?: "left" | "right";
  showTitleBorder?: boolean;
  showIntro?: boolean;
}

export function ItemCardHorizontal({
  data,
  size = "lg",
  imageSide = "left",
  showTitleBorder,
  showIntro,
}: ItemCardHorizontalProps) {
  return (
    <div className={`flex gap-x-4 mt-5`}>
      <div
        className={`${size === "lg" && "w-1/3"}  ${size === "sm" && "w-2/3"}  ${imageSide === "left" && "order-last"} ${
          imageSide === "right" && "order-first"
        }`}
      >
        <h2
          className={`text-black pt-2 ${size === "lg" && "text-6xl"} ${size === "sm" && "text-[24px]"} ${
            showTitleBorder && "border-t-[2px]  border-accent"
          }`}
        >
          {data.title}
        </h2>

        {showIntro && <p className="mt-4 text-[28px] text-[#727272]">{data.meta.intro}</p>}
      </div>

      <div className={`${size === "lg" && "w-2/3"}  ${size === "sm" && "w-1/3"}`}>
        <img
          className="w-full"
          src={getImageUrl(data.meta.featured_image)}
          // alt={data.meta.featured_image.imageCaption}
        />
      </div>
    </div>
  );
}
