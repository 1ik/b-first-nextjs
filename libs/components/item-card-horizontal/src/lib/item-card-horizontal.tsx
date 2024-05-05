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
          className={`${
            size === "lg" ? "text-4xl" : size === "sm" ? "text-xl" : size === "md" ? "text-[26px] leading-none" : ""
          }   ${showTitleBorder ? "border-t-[2px] leading-tight border-accent pt-2" : ""}`}
        >
          {data?.title}
        </h2>

        {showIntro && <p className="mt-4 text-[28px] dark:text-[#bebdbd] text-[#727272]">{data?.meta.intro}</p>}
      </div>

      <div className={`${size === "lg" ? "w-2/3" : size === "md" ? "w-5/12" : size === "sm" ? "w-1/3" : ""}`}>
        <img
          className={`w-full object-cover ${size === "md" ? "h-[100px]" : size === "sm" ? "h-[70px]" : ""}`}
          src={getImageUrl(data?.meta.featured_image)}
          alt={data?.meta.featured_image.imageCaption}
        />
      </div>
    </div>
  );
}
