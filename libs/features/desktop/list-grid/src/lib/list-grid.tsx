import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemList } from "@bfirst/components-item-list";

/* eslint-disable-next-line */
export interface ListGridProps {
  data: any;
  className?: string;
  Link?: any;
}

export function ListGrid({ data, Link, className }: ListGridProps) {
  return (
    <div className={`grid grid-cols-4 gap-x-8 ${className}`}>
      {data?.map((list: any, index: number) => (
        <div
          key={index}
          className={`${
            data?.length !== index + 1
              ? "relative after:content-[''] after:bg-[#E5E7EB] dark:after:bg-dark-300 after:w-[1px] after:h-full after:absolute after:-right-4 after:top-0"
              : ""
          }`}
        >
          <AccentHeader header={list?.[0]?.categories[0].name} color={list?.[0]?.categories[0].color_code} />
          <ItemList Link={Link} key={index} data={list?.slice(0, 5)} showImage titleFontSize="18px"/>
        </div>
      ))}
    </div>
  );
}

export default ListGrid;
