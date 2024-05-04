import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface BlockNews3Props {
  data: any;
  ads1?: string;
  ads2?: string;
}

export function BlockNews3({ data, ads1, ads2 }: BlockNews3Props) {
  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="col-span-3 border-r pr-4 mr-4">
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
        <div>
          <div className="mb-3">
            <AccentHeader header="On this day" color="#A49A46" />
          </div>
          <ItemList data={data.slice(7, 11)} showImage showDate />
          <div className="flex flex-col items-center gap-y-2">
            <img src={ads1} alt="Ads" />
            <img src={ads2} alt="Ads" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlockNews3;
