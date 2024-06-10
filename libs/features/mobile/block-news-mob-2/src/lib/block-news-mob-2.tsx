import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { Key } from "react";

/* eslint-disable-next-line */
export interface BlockNewsMob2Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  adsUrl?: string;
}

export function BlockNewsMob2({ data, sectionHeader, headerColor, className, adsUrl }: BlockNewsMob2Props) {
  return (
    <div className={`${className}`}>
      <div className={`grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6`}>
        <div className="md:col-span-3 sm:col-span-2 flex flex-col">
          {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}
          <div className="hidden md:block">
            <ItemCardHorizontal size="lg" data={data?.[0]} showIntro imageSide="right" titleBold />
          </div>
          <div className="md:hidden">
            <ItemCardVertical
              data={data?.[0]}
              showIntro
              size="lg"
              titleFontSize="28px"
              introFontSize="16px"
              titleBold
            />
          </div>
        </div>
        {data?.slice(1, 7).map((item: any, index: Key | null | undefined) => (
          <div key={index}>
            <ItemCardHorizontal key={item.id} data={item} showTitleBorderBig size="sm" titleFontSize="16px" />
          </div>
        ))}
      </div>
      {adsUrl && <img className="mx-auto mt-28" src={adsUrl} alt="Ads" />}
    </div>
  );
}

export default BlockNewsMob2;
