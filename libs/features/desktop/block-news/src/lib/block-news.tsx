import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { getImageUrl, getNewsUrl } from "@bfirst/utilities";

/* eslint-disable-next-line */
export interface BlockNewsProps {
  data: any;
  sectionHeader?: string;
  ads1?: string;
  ads2?: string;
  className?: string;
  Link?: any;
}

export function BlockNews({ data, sectionHeader, ads1, ads2, className, Link }: BlockNewsProps) {
  return (
    <div className={`grid grid-cols-4 gap-5 ${className}`}>
      <ItemCardVertical Link={Link} className="col-span-2" showImageBorder data={data?.[0]} size="lg" />

      <div className="flex flex-col  justify-between">
        {data?.slice(1, 5).map((item: any, index: number) => (
          <div key={index}>
            <ItemCardHorizontal Link={Link} showTitleBorderSmall data={item} size="sm" />
            {index + 1 < 4 && <hr className="mt-4 dark:border-dark-300" />}
          </div>
        ))}
      </div>
      {/* <div className="flex flex-col gap-y-3">
        {Link ? (
          <Link className="flex-grow overflow-hidden" href={getNewsUrl(data?.[6])}>
            <img
              className="h-full object-cover hover:scale-110 duration-200"
              src={getImageUrl(data?.[6].meta.featured_image)}
              alt={data?.[6].meta.imageCaption}
            />
          </Link>
        ) : (
          <a className="flex-grow overflow-hidden" href={getNewsUrl(data?.[6])}>
            <img
              className="h-full object-cover hover:scale-110 duration-300"
              src={getImageUrl(data?.[6].meta.featured_image)}
              alt={data?.[6].meta.imageCaption}
            />
          </a>
        )}

        <h3 className="text-[28px] leading-none hover:text-accent dark:hover:text-accent-light duration-150">
          {Link ? (
            <Link href={getNewsUrl(data?.[6])}>{data?.[6].title}</Link>
          ) : (
            <a href={getNewsUrl(data?.[6])}>{data?.[6].title}</a>
          )}
        </h3>
      </div> */}
      <div className="flex flex-col gap-y-3">
        <img src={ads1} alt="Ads" />
        <img src={ads2} alt="Ads" />
      </div>
    </div>
  );
}

export default BlockNews;
