import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNews4Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  adsUrl?: string;
  Link?: any;
}

export function BlockNews4({ data, Link, sectionHeader, headerColor, className, adsUrl }: BlockNews4Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}

      <ItemCardVertical
        Link={Link}
        className="border-b dark:border-dark-300 mb-3 mt-3"
        data={data?.[0]}
        size="lg"
        titlePosition="inset"
      />

      <div className="grid grid-cols-3">
        <div className="col-span-2 border-r dark:border-dark-300 pr-3 mr-3">
          <ItemCardVertical Link={Link} data={data?.[1]} size="lg" />
        </div>
        <ItemList Link={Link} data={data?.slice(2, 7)} listType="circle" />
      </div>
      {adsUrl && <Ads className="mt-5" src={adsUrl} alt="ads" showHeader={false}/>}
    </div>
  );
}

export default BlockNews4;
