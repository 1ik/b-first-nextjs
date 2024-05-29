import { getImageUrl, getNewsUrl } from "@bfirst/utilities";
import moment from "moment";

export interface ItemListProps {
  data: any;
  listType?: "number" | "circle" | "none";
  showImage?: boolean;
  showDate?: boolean;
  className?: string;
  Link?: any;
  moreNewsLink?: string;
  showButton?: boolean;
}

export function ItemList({
  data,
  Link,
  listType = "none",
  showImage = false,
  showDate = false,
  className,
  showButton = false,
  moreNewsLink,
}: ItemListProps) {
  return (
    <ul
      className={`${className} ${
        listType === "circle" ? "list-disc pl-6 marker:text-[#D8D8D8] marker:text-[32px] dark:marker:text-dark-300" : ""
      }`}
    >
      {showDate && (
        <h3 className="bg-[#FDC269] text-black font-montserrat font-semibold text-[22px] px-8 py-1.5 w-fit my-3">
          {moment().format("D MMMM")}
        </h3>
      )}
      {showImage && (
        <div className="overflow-hidden mb-5">
          {Link ? (
            <Link href={getNewsUrl(data?.[0])}>
              <img
                className="hover:scale-110 duration-300 aspect-video object-cover w-full"
                src={getImageUrl(data?.[0]?.meta.featured_image)}
                alt={data?.[0]?.meta.image_caption}
              />
            </Link>
          ) : (
            <a href={getNewsUrl(data?.[0])}>
              <img
                className="hover:scale-110 duration-300 aspect-video object-cover w-full"
                src={getImageUrl(data?.[0]?.meta.featured_image)}
                alt={data?.[0]?.meta.image_caption}
              />
            </a>
          )}
        </div>
      )}
      {data?.map((item: any, index: number) =>
        Link ? (
          <Link href={getNewsUrl(item)}>
            <li
              key={item.id}
              className={`hover:text-accent dark:hover:text-accent-light duration-200 text-[22px] leading-[110%] ${
                data?.length !== index + 1 ? "border-b  dark:border-dark-300" : ""
              } pb-4 mb-4 ${listType === "number" && "flex items-center"}`}
            >
              {listType === "number" && (
                <span className="text-[#D8D8D8] block w-20 flex-shrink-0 dark:text-[#313233] font-semibold font-montserrat text-[90px] py-8">
                  {index + 1}
                </span>
              )}
              {item.title}
            </li>
          </Link>
        ) : (
          <a href={getNewsUrl(item)}>
            <li
              key={item.id}
              className={`hover:text-accent dark:hover:text-accent-light duration-200 text-[22px] leading-[110%] ${
                data?.length !== index + 1 ? "border-b  dark:border-dark-300" : ""
              } pb-4 mb-4 ${listType === "number" && "flex items-center"}`}
            >
              {listType === "number" && (
                <span className="text-[#D8D8D8] block w-20 flex-shrink-0 dark:text-[#313233] font-semibold font-montserrat text-[90px] py-8">
                  {index + 1}
                </span>
              )}
              {item.title}
            </li>
          </a>
        )
      )}

      {showButton &&
        (Link ? (
          <div className="flex justify-center border-b dark:border-dark-300">
            <Link
              href={moreNewsLink}
              className="text-[22px] border px-10 py-2 duration-300 hover:bg-[#efeff0] dark:hover:bg-dark-300 dark:border-dark-300"
            >
              More News
            </Link>
          </div>
        ) : (
          <div className="flex justify-center border-b dark:border-dark-300">
            <a
              href={moreNewsLink}
              className="text-[22px] border px-10 py-2 duration-300 hover:bg-[#efeff0] dark:hover:bg-dark-300 dark:border-dark-300"
            >
              More News
            </a>
          </div>
        ))}
    </ul>
  );
}
