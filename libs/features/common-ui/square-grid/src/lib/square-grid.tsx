import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface SquareGridProps {
  data: any;
}

export function SquareGrid({ data }: SquareGridProps) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <AccentHeader header={item.story.categories.name} color={item.story.categories.color_code} />
          <ItemCardVertical data={item} size={"md"} />
        </div>
      ))}
    </div>
  );
}

export default SquareGrid;
