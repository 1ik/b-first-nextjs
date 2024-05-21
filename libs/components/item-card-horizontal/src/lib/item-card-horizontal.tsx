import { SocialShare } from "@bfirst/components-social-share";
import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
import moment from "moment-timezone";
export interface ItemCardHorizontalProps {
  data: any;
  size?: "sm" | "md" | "lg" | "xl";
  imageSide?: "left" | "right";
  showTitleBorderSmall?: boolean;
  showTitleBorderBig?: boolean;
  showIntro?: boolean;
  className?: string;
  Link?: any;
  showSocialShare?: boolean;
  showCreatedAt?: boolean;
}

export function ItemCardHorizontal({
  data,
  size = "xl",
  imageSide = "left",
  showTitleBorderSmall,
  showTitleBorderBig,
  showIntro,
  className,
  Link,
  showSocialShare,
  showCreatedAt,
}: ItemCardHorizontalProps) {
  const fontSize = `leading-[110%] ${
    size === "xl"
      ? "text-4xl"
      : size === "sm"
      ? "text-lg"
      : size === "md"
      ? "text-xl"
      : size === "lg"
      ? "text-[28px]"
      : ""
  }`;

  return (
    <div
      className={`flex ${className} ${showTitleBorderBig ? "border-t border-accent" : ""} ${
        size === "xl" ? "gap-x-6" : size === "lg" ? "gap-x-5" : ""
      }`}
    >
      <div
        className={`${showTitleBorderSmall ? "border-t-[3px] border-accent" : ""} ${
          size === "xl" ? "w-4/12" : size === "md" ? "w-7/12" : size === "sm" ? "w-7/12" : size === "lg" ? "w-6/12" : ""
        }   
          ${imageSide === "left" ? "order-last" : imageSide === "right" ? "order-first" : ""} `}
      >
        <div className={`pl-2 ${showTitleBorderSmall || showTitleBorderBig ? "pt-2" : "pt-0"} flex flex-col h-full`}>
          {Link ? (
            <Link className="" href={getNewsUrl(data)}>
              <h2 className={` ${fontSize} hover:text-accent dark:hover:text-accent-light duration-150`}>
                {data?.title}
              </h2>
            </Link>
          ) : (
            <a href={getNewsUrl(data)}>
              <h2
                className={` ${fontSize} ${
                  showTitleBorderBig || showTitleBorderSmall ? "pt-2" : ""
                } hover:text-accent dark:hover:text-accent-light duration-150`}
              >
                {data?.title}
              </h2>
            </a>
          )}

          {showCreatedAt && (
            <p className="font-montserrat text-lg text-[#6F6F6F] mt-10 border-t pt-4  dark:border-dark-300 dark:text-white">
              Created At : {`${moment(data?.created_at).format("MMM Do, YYYY")}`}
            </p>
          )}
          {showIntro && (
            <p
              className={`mt-4 leading-[110%] dark:text-[#bebdbd] text-[#727272] ${
                size === "xl" ? "text-2xl" : "text-xl"
              }`}
            >
              {data?.meta.intro}
            </p>
          )}
          {showSocialShare && (
            <SocialShare
              title="Share Trending On :"
              textPlacement="left"
              shareLink={getNewsUrl(data)}
              className="text-[#6F6F6F] dark:text-white mt-auto"
            />
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden ${
          size === "xl" ? "w-8/12" : size === "md" ? "w-5/12" : size === "sm" ? "w-5/12" : size === "lg" ? "w-5/12" : ""
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
