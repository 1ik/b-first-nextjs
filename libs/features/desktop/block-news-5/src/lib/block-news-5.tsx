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
      <div className="grid grid-cols-4">
        <div className="border-r dark:border-dark-300 mr-4 pr-4">
          {data?.slice(4, 11).map((item: any, index: number) => (
            <div className="flex flex-col" key={index}>
              <ItemCardHorizontal
                Link={Link}
                key={index}
                className="last:mb-0"
                size="md"
                data={item}
                titleFontSize="16px"
              />
              {index + 1 < 7 && <hr className="my-5 block dark:border-dark-300" />}
            </div>
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-5">
          <ItemCardVertical Link={Link} className="col-span-2" data={data?.[0]} size="lg" titleBold />

          <div className="flex flex-col gap-y-2 items-center">
            <Ads src="/ads/Global.gif" alt="Ads" showHeader={false} />
            <Ads src="/ads/SIBL_Profit_300x250.gif" alt="Ads" showHeader={false} />
          </div>
          {data?.slice(1, 4).map((item: any, index: number) => (
            <ItemCardVertical
              className="relative after:content-[''] after:h-full after:w-[1px] after:bg-black/10 dark:after:bg-dark-300 after:absolute after:top-0 after:-right-2.5 last:after:w-0"
              Link={Link}
              key={index}
              data={item}
              size="md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
