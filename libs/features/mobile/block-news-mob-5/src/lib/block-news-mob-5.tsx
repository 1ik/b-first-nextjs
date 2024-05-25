import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface BlockNewsMob5Props {
  data: any;
  className?: string;
  sectionHeader?: string;
  headerColor?: string;
  Link?: any;
}

export function BlockNewsMob5({ data, className, sectionHeader, headerColor, Link }: BlockNewsMob5Props) {
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
            <img src="/ads/Global.gif" alt="Ads" />
            <img src="/ads/SIBL_Profit_300x250.gif" alt="Ads" />
          </div>
          {data?.slice(7, 10).map((item: any, index: number) => (
            <ItemCardVertical Link={Link} key={index} data={item} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlockNewsMob5;
