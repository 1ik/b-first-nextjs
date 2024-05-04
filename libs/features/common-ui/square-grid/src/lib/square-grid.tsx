import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface SquareGridProps {
  data: any;
}

export function SquareGrid({ data }: SquareGridProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {data.map((item: any, index: any) => (
        <div className="flex flex-col gap-y-2" key={index}>
          <AccentHeader header={item.categories[0].name} color={item.categories[0].color_code} />
          <ItemCardVertical data={item} size={"md"} />
        </div>
      ))}
    </div>
  );
}

export default SquareGrid;
