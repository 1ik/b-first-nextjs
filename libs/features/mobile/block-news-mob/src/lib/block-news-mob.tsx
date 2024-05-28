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
        <ItemCardVertical className="sm:col-span-3" showImageBorder data={data?.[0]} size="lg" />

        <div className="sm:col-span-2 gap-4 item-center mx-auto flex flex-col order-1 sm:order-none bg-[#FFF3ED] dark:bg-dark-400">
          {data?.slice(1, 3).map((item: any, index: Key | null | undefined) => (
            <div className="border-b dark:border-dark-300 pb-3 last:border-0" key={index}>
              <ItemCardVertical className="p-2.5" data={item} />
            </div>
          ))}
        </div>

        <div className="sm:col-span-3 sm:mr-4">
          <div className="text-center sm:hidden mt-4 mb-6">
            <p className="mb-2">Advertisement</p>
            <img className="mx-auto" src={ads1} alt="Ads" />
          </div>
          {data?.slice(3, 8).map((item: any, index: number) => (
            <div>
              <div
                className={`mb-4 pb-4 ${index === 3 ? "" : index > 1 ? "sm:border-b-0 border-b" : "border-b"}`}
                key={index}
              >
                <ItemCardHorizontal showTitleBorderSmall data={item} size="sm" />
              </div>
            </div>
          ))}
          <div className="text-center sm:hidden mt-4 mb-6">
            <p className="mb-2">Advertisement</p>
            <img className="mx-auto" src={ads2} alt="Ads" />
          </div>
        </div>

        <div className="sm:col-span-2 flex-col gap-y-12 mt-6 order-last hidden sm:flex">
          <div className="mx-auto text-center">
            <p className="mb-2">Advertisement</p>
            <img src={ads1} alt="Ads" />
          </div>
          <div className="mx-auto text-center">
            <p className="mb-2">Advertisement</p>
            <img src={ads2} alt="Ads" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockNewsMob;
