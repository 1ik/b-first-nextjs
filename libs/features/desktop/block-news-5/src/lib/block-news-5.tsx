import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews5Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  Link?: any;
}

export function BlockNews5({ data, Link, sectionHeader, headerColor, className }: BlockNews5Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}
      <div className="grid grid-cols-4 gap-x-5 mt-8">
        <div>
          {data?.slice(0, 6).map((item: any, index: number) => (
            <ItemCardHorizontal Link={Link} key={index} className="mb-8 last:mb-0" size="md" data={item} />
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-5">
          <ItemCardVertical Link={Link} className="col-span-2" data={data?.[6]} size="lg" />

          <div className="flex flex-col gap-y-10 items-center">
            <div className="text-center">
              <p className="mb-2">Advertisement</p>
              <img src="/ads/Global.gif" alt="Ads" />
            </div>
            <div className="text-center">
              <p className="mb-2">Advertisement</p>
              <img src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
            </div>
          </div>
          {data?.slice(7, 10).map((item: any, index: number) => (
            <ItemCardVertical Link={Link} key={index} data={item} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}
