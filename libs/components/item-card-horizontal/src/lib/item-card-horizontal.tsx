import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
export interface ItemCardHorizontalProps {
  data: any;
  size?: "lg" | "sm" | "md";
  imageSide?: "left" | "right";
  showTitleBorderSmall?: boolean;
  showTitleBorderBig?: boolean;
  showIntro?: boolean;
  className?: string;
  Link?: any;
}

export function ItemCardHorizontal({
  data,
  size = "lg",
  imageSide = "left",
  showTitleBorderSmall,
  showTitleBorderBig,
  showIntro,
  className,
  Link,
}: ItemCardHorizontalProps) {
  const fontSize = `${
    size === "lg"
      ? "text-4xl leading-[46.5px]"
      : size === "sm"
      ? "text-lg pl-2.5"
      : size === "md"
      ? "text-xl leading-none"
      : ""
  }`;
  return (
    <div
      className={`flex ${className} ${showTitleBorderBig ? "border-t-[1px] leading-tight border-accent" : ""} ${
        size === "lg" ? "gap-x-6" : size === "md" ? "gap-x-2" : ""
      }`}
    >
      <div
        className={`${size === "lg" ? "w-4/12" : size === "md" ? "w-7/12" : size === "sm" ? "w-7/12" : ""}   
          ${imageSide === "left" ? "order-last" : imageSide === "right" ? "order-first" : ""}`}
      >
        {Link ? (
          <Link className="" href={getNewsUrl(data)}>
            <h2
              className={`${fontSize} ${
                showTitleBorderSmall ? "border-t-[3px] leading-tight border-accent pt-2" : ""
              } hover:text-accent dark:hover:text-accent-light duration-150`}
            >
              {data?.title}
            </h2>
          </Link>
        ) : (
          <a href={getNewsUrl(data)}>
            <h2
              className={`${fontSize} ${
                showTitleBorderSmall ? "border-t-[3px] leading-tight border-accent pt-2" : ""
              } hover:text-accent dark:hover:text-accent-light duration-150`}
            >
              {data?.title}
            </h2>
          </a>
        )}

        {showIntro && <p className="mt-4 text-xl dark:text-[#bebdbd] text-[#727272]">{data?.meta.intro}</p>}
      </div>

      <div
        className={`overflow-hidden ${
          size === "lg" ? "w-8/12" : size === "md" ? "w-5/12" : size === "sm" ? "w-5/12" : ""
        }`}
      >
        {Link ? (
          <Link href={getNewsUrl(data)}>
            <img
              className={`hover:scale-110 duration-300 w-full object-cover aspect-video`}
              src={getImageUrl(data?.meta.featured_image)}
              alt={data?.meta.featured_image.imageCaption}
            />
          </Link>
        ) : (
          <a href={getNewsUrl(data)}>
            <img
              className={`hover:scale-110 duration-300 w-full object-cover aspect-video`}
              src={getImageUrl(data?.meta.featured_image)}
              alt={data?.meta.featured_image.imageCaption}
            />
          </a>
        )}
      </div>
    </div>
  );
}
