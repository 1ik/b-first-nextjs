import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews5Props {
  data: any;
}

export function BlockNews5({ data }: BlockNews5Props) {
  return (
    <div>
      <AccentHeader header={data[0].categories[0].name} color={data[0].categories[0].color_code} />
      <div className="grid grid-cols-4 gap-x-5 mt-8">
        <div>
          {data.slice(0, 5).map((item: any) => (
            <div className="mb-8 last:mb-0">
              <ItemCardHorizontal size="md" data={item} />
            </div>
          ))}
        </div>

        <div className="col-span-3 grid grid-cols-3 gap-5">
          <div className="col-span-2">
            <ItemCardVertical data={data[5]} size="lg" />
          </div>
          <div className="flex flex-col gap-y-10">
            <img src="https://placehold.co/420x250?text=Ads" alt="Ads" />
            <img src="https://placehold.co/420x250?text=Ads" alt="Ads" />
          </div>
          {data.slice(6, 9).map((item: any, index) => (
            <div>
              <ItemCardVertical data={item} size="md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
