import { Ads } from "@bfirst/components-ads";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { getAdsUrl } from "@bfirst/utilities";
import { Key } from "react";

/* eslint-disable-next-line */
export interface BlockNewsProps {
  data: any;
  ads1?: any;
  ads2?: any;
  sectionHeader?: string;
  className?: string;
}

export function BlockNews({ data, ads1, ads2, className }: BlockNewsProps) {
  return (
    <div className={`flex gap-x-4 ${className}`}>
      <ItemCardVertical
        className="w-[35%]"
        data={data?.[0]}
        size="lg"
        showIntro
        introFontSize="14px"
        introCrop={30}
        titleBold
      />

      <div className="w-[25%] flex flex-col">
        {data?.slice(1, 6).map((item: any, index: number) => (
          <>
            <div className="flex flex-col" key={index}>
              <ItemCardHorizontal data={item} size="sm" titleFontSize="16px" titleCrop={10} />
            </div>
            {index + 1 < 5 && <hr className="my-4 block dark:border-dark-300" />}
          </>
        ))}
      </div>

      <div className="w-[20%] flex flex-col gap-y-2 bg-[#FFF3ED] dark:bg-dark-300">
        {data?.slice(6, 8).map((item: any, index: Key | null | undefined) => (
          <div key={index} className="border-b pb-3 last:border-0 dark:border-black/25">
            <ItemCardVertical className="p-2.5" data={item} size="md" titleFontSize="16px" titleCrop={15} />
          </div>
        ))}
      </div>

      <div className="w-[20%] flex flex-col gap-y-2 justify-between text-center">
        <Ads src={getAdsUrl(ads1)} alt="Ads" />
        <Ads src={getAdsUrl(ads2)} alt="Ads" />
      </div>
    </div>
  );
}

export default BlockNews;
