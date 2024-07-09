import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { getAdsObj, getAdsUrl } from "@bfirst/utilities";
export interface BlockNews2Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  Link?: any;
  ads?: any;
}

export function BlockNews2({ data, Link, sectionHeader, headerColor, className, ads }: BlockNews2Props) {
  const ads_obj = getAdsObj(ads);
  return (
    <div className={`${className}`}>
      <div className={`grid grid-cols-3 gap-x-4 gap-y-6`}>
        <div className="col-span-3 flex flex-col gap-y-4">
          {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}
          <ItemCardHorizontal
            Link={Link}
            data={data?.[0]}
            showIntro
            imageSide="right"
            introFontSize="14px"
            titleBold
            titleFontSize="30px"
          />
          <hr className="border my-3 block dark:border-dark-300" />
        </div>
        {data?.slice(1, 7).map((item: any) => (
          <ItemCardHorizontal Link={Link} key={item.id} data={item} showTitleBorderBig size="sm" titleFontSize="16px" />
        ))}
      </div>
      {ads && <Ads className="mt-16" src={getAdsUrl(ads_obj?.banner5)} alt="Ads" />}
    </div>
  );
}
