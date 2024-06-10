import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface ListGridMobProps {
  data: any;
  className?: string;
}

export function ListGridMob({ data, className }: ListGridMobProps) {
  return (
    <div className={`grid sm:grid-cols-2 grid-cols-1 gap-8 ${className}`}>
      {data?.map((list: any, index: number) => (
        <div key={index} className="">
          <AccentHeader header={list?.[0].categories[0].name} color={list?.[0].categories[0].color_code} />
          <ItemList key={index} data={list?.slice(0, 5)} showImage />
        </div>
      ))}
    </div>
  );
}

export default ListGridMob;
