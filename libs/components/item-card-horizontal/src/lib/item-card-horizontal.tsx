import { getImageUrl } from "@bfirst/utilities";
export interface ItemCardHorizontalProps {
  data: any;
  size?: "lg" | "sm" | "md";
  imageSide?: "left" | "right";
  showTitleBorder?: boolean;
  showIntro?: boolean;
  className?: string;
}

export function ItemCardHorizontal({
  data,
  size = "lg",
  imageSide = "left",
  showTitleBorder,
  showIntro,
  className,
}: ItemCardHorizontalProps) {
  return (
    <div className={`flex gap-x-4 ${className}`}>
      <div
        className={`${size === "lg" ? "w-1/3" : size === "md" ? "w-7/12" : size === "sm" ? "w-2/3" : ""}   
          ${imageSide === "left" ? "order-last" : imageSide === "right" ? "order-first" : ""}`}
      >
        <h2
          className={`text-black ${
            size === "lg" ? "text-4xl" : size === "sm" ? "text-lg" : size === "md" ? "text-[26px]" : ""
          }   ${showTitleBorder ? "border-t-[2px] leading-tight border-accent pt-2" : ""}`}
        >
          {data?.title}
        </h2>

        {showIntro && <p className="mt-4 text-[28px] text-[#727272]">{data?.meta.intro}</p>}
      </div>

      <div className={`${size === "lg" ? "w-2/3" : size === "md" ? "w-5/12" : size === "sm" ? "w-1/3" : ""}`}>
        <img
          className="w-full"
          src={getImageUrl(data?.meta.featured_image)}
          alt={data?.meta.featured_image.imageCaption}
        />
      </div>
    </div>
  );
}
