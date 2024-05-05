import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews5Props {
  data: any;
  className?: string;
}

export function BlockNews5({ data, className }: BlockNews5Props) {
  return (
    <div className={className}>
      <AccentHeader header={data?.[0].categories[0].name} color={data?.[0].categories[0].color_code} />
      <div className="grid grid-cols-4 gap-x-5 mt-8">
        <div>
          {data?.slice(0, 5).map((item: any) => (
            <ItemCardHorizontal className="mb-8 last:mb-0" size="md" data={item} />
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-5">
          <ItemCardVertical className="col-span-2" data={data?.[5]} size="lg" />

          <div className="flex flex-col gap-y-10">
            <img src="/ads/Global.gif" alt="Ads" />
            <img src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
          </div>
          {data?.slice(6, 9).map((item: any, index) => (
            <ItemCardVertical data={item} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}
