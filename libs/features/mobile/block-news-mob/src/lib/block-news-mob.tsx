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
    <div className={`flex flex-col gap-y-10 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
        <ItemCardVertical className="sm:col-span-3" showImageBorder data={data?.[0]} size="lg" />
        <div className="sm:col-span-2 gap-3 item-center mx-auto flex flex-col">
          <img src={ads1} alt="Ads" />
          <img className="hidden sm:block" src={ads2} alt="Ads" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {data?.slice(1, 5).map((item: any, index: number) => (
          <div>
            <div
              className={`mb-4 pb-4 ${index === 3 ? "" : index > 1 ? "sm:border-b-0 border-b" : "border-b"}`}
              key={index}
            >
              <ItemCardHorizontal showTitleBorderSmall data={item} size="sm" />
            </div>
            {index === 1 && <img className="mx-auto sm:hidden mt-4 mb-6" src={ads2} alt="Ads" />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockNewsMob;
