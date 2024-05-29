import { AccentHeader } from "@bfirst/components-accent-header";
import { Ads } from "@bfirst/components-ads";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { Key } from "react";

/* eslint-disable-next-line */
export interface BlockNewsMob5Props {
  data: any;
  className?: string;
  sectionHeader?: string;
  headerColor?: string;
  Link?: any;
  ads: string;
}

export function BlockNewsMob5({ data, className, sectionHeader, headerColor, Link, ads }: BlockNewsMob5Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-5">
        <div className="sm:col-span-4">
          <ItemCardVertical data={data?.[0]} size="lg" titleFontSize="30px"/>
        </div>
        <div className="sm:col-span-3 mx-auto">
          <Ads src={ads} alt="Ads" />
        </div>
      </div>
      <div className="grid grid-cols-1 my-4 sm:grid-cols-3 gap-4">
        {data?.slice(1, 4).map((item: any, index: Key | null | undefined) => (
          <div key={index}>
            <ItemCardVertical data={item} size="md" titleFontSize="18px"/>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {data?.slice(4, 10).map((item: any, index: Key | null | undefined) => (
          <div key={index}>
            <ItemCardVertical data={item} size="md" titleFontSize="18px"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlockNewsMob5;
