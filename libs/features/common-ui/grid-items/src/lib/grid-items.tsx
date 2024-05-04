import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface GridItemsProps {
  data: any;
}

export function GridItems({ data }: GridItemsProps) {
  return (
    <div className="grid grid-cols-4 gap-8 py-8">
      {data.map((item: any, index: any) => (
        <ItemCardVertical key={index} data={item} size={"md"} />
      ))}
    </div>
  );
}

export default GridItems;
