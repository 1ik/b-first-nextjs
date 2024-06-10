import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNews4Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
}

export function BlockNews4({ data, sectionHeader, headerColor, className }: BlockNews4Props) {
  return (
    <div className={className}>
      {sectionHeader && <AccentHeader header={sectionHeader} color={headerColor} />}

      <ItemCardVertical
        className="border-b dark:border-dark-300 mb-3 mt-3"
        data={data?.[0]}
        size="lg"
        titlePosition="inset"
        titleBold
      />

      <div className="grid grid-cols-3">
        <div className="col-span-2 border-r dark:border-dark-300 pr-3 mr-3">
          <ItemCardVertical data={data?.[1]} size="lg" titleFontSize="32px" />
        </div>
        <ItemList data={data?.slice(2, 7)} listType="circle" />
      </div>
    </div>
  );
}

export default BlockNews4;
