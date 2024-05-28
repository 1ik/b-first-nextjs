import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { Key } from "react";

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
    <div className={`flex gap-x-7 ${className}`}>
      <ItemCardVertical Link={Link} className="w-[35%]" showImageBorder data={data?.[0]} size="lg" />

      <div className="w-[25%]">
        {data?.slice(1, 6).map((item: any, index: number) => (
          <div className="flex flex-col" key={index}>
            <ItemCardHorizontal Link={Link} showTitleBorderSmall data={item} size="sm" titleFontSize="16px" />
            {index + 1 < 5 && <hr className="mt-4 dark:border-dark-300" />}
          </div>
        ))}
      </div>

      <div className="w-[20%] flex flex-col gap-y-5">
        {data?.slice(6, 8).map((item: any, index: Key | null | undefined) => (
          <div key={index}>
            <ItemCardVertical data={item} size="md" titleFontSize="26px" />
          </div>
        ))}
      </div>

      <div className="w-[20%] flex flex-col gap-y-3">
        <img src={ads1} alt="Ads" />
        <img src={ads2} alt="Ads" />
      </div>
    </div>
  );
}

export default BlockNews;
