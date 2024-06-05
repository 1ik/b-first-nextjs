import { Ads } from "@bfirst/components-ads";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { Key } from "react";

/* eslint-disable-next-line */
export interface BlockNewsMobProps {
  data: any;
  sectionHeader?: string;
  ads1?: string;
  ads2?: string;
  className?: string;
}

export function BlockNewsMob({ data, ads1, ads2, className }: BlockNewsMobProps) {
  return (
    <div className={`flex flex-col gap-y-10 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3">
          <ItemCardVertical data={data?.[0]} size="lg" titleFontSize="30px" showIntro introFontSize="16px" titleBold />
          <div className="mt-8">
            {data?.slice(3, 8).map((item: any, index: number) => (
              <div key={index}>
                <div className={`mt-5 pt-5 border-t dark:border-dark-300`}>
                  <ItemCardHorizontal data={item} size="sm" />
                </div>
                {index === 1 && <Ads className="my-4 sm:hidden" src={ads1} alt="Ads" />}
              </div>
            ))}
            <Ads className="my-4 sm:hidden" src={ads2} alt="Ads" />
          </div>
        </div>

        <div className="sm:col-span-2 gap-4 item-center mx-auto flex flex-col order-1 sm:order-none">
          <div className="bg-[#FFF3ED] dark:bg-dark-300 pb-2">
            {data?.slice(1, 3).map((item: any, index: Key | null | undefined) => (
              <div className="border-b-2 border-black/25 py-2 last:border-0" key={index}>
                <ItemCardVertical className="p-2.5" data={item} />
              </div>
            ))}
          </div>

          <div className="flex-col gap-y-14 mt-6 hidden sm:flex">
            <Ads src={ads1} alt="Ads" />
            <Ads src={ads2} alt="Ads" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockNewsMob;
