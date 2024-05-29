import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
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
          {data?.slice(0, 7).map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <ItemCardHorizontal Link={Link} key={index} className="last:mb-0" size="md" data={item} titleFontSize="18px"/>
              {index + 1 < 7 && <hr className="my-4 block dark:border-dark-300" />}
            </div>
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-5">
          <ItemCardVertical Link={Link} className="col-span-2" data={data?.[7]} size="lg" />

          <div className="flex flex-col gap-y-1 items-center">
            <Ads src="/ads/Global.gif" alt="Ads" />
            <Ads src="/ads/SIBL_Profit_300x250.gif" alt="Ads" showHeader={false} />
          </div>
          {data?.slice(8, 11).map((item: any, index: number) => (
            <ItemCardVertical Link={Link} key={index} data={item} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
}
