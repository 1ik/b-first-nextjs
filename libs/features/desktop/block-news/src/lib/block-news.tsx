import { Ads } from "@bfirst/components-ads";
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
    <div className={`flex gap-x-4 ${className}`}>
      <ItemCardVertical Link={Link} className="w-[35%]" showImageBorder data={data?.[0]} size="lg" />

      <div className="w-[25%]">
        {data?.slice(1, 6).map((item: any, index: number) => (
          <div className="flex flex-col" key={index}>
            <ItemCardHorizontal Link={Link} showTitleBorderSmall data={item} size="sm" titleFontSize="16px" />
            {index + 1 < 5 && <hr className="mt-4 dark:border-dark-300" />}
          </div>
        ))}
      </div>

      <div className="w-[20%] flex flex-col gap-y-5 bg-[#FFF3ED] dark:bg-dark-300">
        {data?.slice(6, 8).map((item: any, index: Key | null | undefined) => (
          <div key={index} className="border-b-2 border-black/25 pb-3 last:border-0">
            <ItemCardVertical className="p-2.5" data={item} size="md" titleFontSize="26px" />
          </div>
        ))}
      </div>

      <div className="w-[20%] flex flex-col gap-y-4 text-center">
        <Ads src={ads1} alt="Ads" />
        <Ads src={ads2} alt="Ads" />
      </div>
    </div>
  );
}

export default BlockNews;
