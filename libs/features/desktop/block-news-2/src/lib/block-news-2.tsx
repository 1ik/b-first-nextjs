import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
export interface BlockNews2Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  adsUrl?: string;
}

export function BlockNews2({ data, sectionHeader, headerColor, className, adsUrl }: BlockNews2Props) {
  return (
    <div className={`${className}`}>
      <div className={`grid grid-cols-3 gap-5`}>
        <div className="col-span-3 flex flex-col gap-y-4">
          {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}
          <ItemCardHorizontal data={data?.[0]} size="lg" showIntro imageSide="right" />
        </div>
        {data?.slice(1, 7).map((item: any) => (
          <ItemCardHorizontal key={item.id} data={item} showTitleBorder size="sm" />
        ))}
      </div>
      {adsUrl && <img className="mx-auto mt-28" src={adsUrl} alt="Ads" />}
    </div>
  );
}
