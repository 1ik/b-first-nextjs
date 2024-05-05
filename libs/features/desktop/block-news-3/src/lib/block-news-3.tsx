import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews3Props {
  data: any;
  className?: string;
}

export async function BlockNews3({ data, className }: BlockNews3Props) {
  return (
    <div className={`${className && className}`}>
      <AccentHeader className="mb-4" header={data[0].categories[1].name} color={data[0].categories[1].color_code} />

      <div className="grid grid-cols-3 gap-5">
        <ItemCardHorizontal className="col-span-3" data={data[0]} showIntro />

        {data.splice(1, 3).map((item: any) => {
          return <ItemCardVertical key={item.id} size="md" data={item} />;
        })}
      </div>
    </div>
  );
}
