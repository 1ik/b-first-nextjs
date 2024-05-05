import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNews4Props {
  data: any;
}

export function BlockNews4({ data }: BlockNews4Props) {
  return (
    <div>
      <AccentHeader header={data[0].categories[0].name} color={data[0].categories[0].color_code} />
      <div className="border-b mb-3 mt-3">
        <ItemCardVertical data={data[0]} size="lg" titlePosition="inset" />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2 border-r pr-3 mr-3">
          <ItemCardVertical data={data[1]} size="lg" />
        </div>
        <ItemList data={data.slice(2, 7)} listType="circle" />
      </div>
    </div>
  );
}

export default BlockNews4;
