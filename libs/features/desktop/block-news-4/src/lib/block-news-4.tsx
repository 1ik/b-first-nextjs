import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNews4Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  adsUrl?: string;
}

export function BlockNews4({ data, sectionHeader, headerColor, className, adsUrl }: BlockNews4Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}

      <ItemCardVertical className="border-b mb-3 mt-3" data={data?.[0]} size="lg" titlePosition="inset" />

      <div className="grid grid-cols-3">
        <div className="col-span-2 border-r pr-3 mr-3">
          <ItemCardVertical data={data?.[1]} size="lg" />
        </div>
        <ItemList data={data?.slice(2, 7)} listType="circle" />
      </div>
      {adsUrl && <img className="mx-auto mt-5" src={adsUrl} alt="Ads" />}
    </div>
  );
}

export default BlockNews4;
