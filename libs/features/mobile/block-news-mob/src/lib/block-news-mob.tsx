import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface BlockNewsMobProps {
  data: any;
  sectionHeader?: string;
  ads1?: string;
  ads2?: string;
  className?: string;
}

export function BlockNewsMob({ data, sectionHeader, ads1, ads2, className }: BlockNewsMobProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <ItemCardVertical className="sm:w-[65%]" showImageBorder data={data?.[0]} size="md" />

      <div className="my-6 gap-y-3 item-center w-[90%] mx-auto sm:w-[35%] flex flex-col">
        <img src={ads1} alt="Ads" />
        <img src={ads2} alt="Ads" />
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col justify-between">
          {data?.slice(1, 5).map((item: any, index: number) => (
            <div key={index}>
              <ItemCardHorizontal showTitleBorderSmall data={item} size="sm" />
              {index + 1 < 4 && <hr className="mt-4 dark:border-dark-300" />}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default BlockNewsMob;
