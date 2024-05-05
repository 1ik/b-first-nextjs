import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews3Props {
  data: any;
}

export async function BlockNews3({ data }: BlockNews3Props) {
  return (
    <div>
      <div className="mb-4">
        <AccentHeader header={data[0].categories[1].name} color={data[0].categories[1].color_code} />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3">
          <ItemCardHorizontal data={data[0]} showIntro />
        </div>

        {data.splice(1, 3).map((item: any) => {
          return <ItemCardVertical key={item.id} size="md" data={item} />;
        })}
      </div>
    </div>
  );
}
