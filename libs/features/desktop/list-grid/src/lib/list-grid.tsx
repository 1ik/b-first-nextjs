import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface ListGridProps {
  data: any;
}

export function ListGrid({ data }: ListGridProps) {
  return (
    <div className="grid grid-cols-4 gap-x-4">
      {data.map((list: any, index: number) => (
        <div>
          <AccentHeader header={list.data[0].categories[0].name} color={list.data[0].categories[0].color_code} />
          <ItemList key={index} data={list.data.slice(0, 5)} showImage />
        </div>
      ))}
    </div>
  );
}

export default ListGrid;
