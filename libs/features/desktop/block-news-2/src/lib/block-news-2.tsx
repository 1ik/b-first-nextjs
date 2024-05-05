import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
export interface BlockNews2Props {
  data: any;
  className?: string
}

export function BlockNews2({ data ,className }: BlockNews2Props) {
  return (
    <div className={`${className}`}>
      <div className={`grid grid-cols-3 gap-5`}>
        <div className="col-span-3 flex flex-col gap-y-4">
          <AccentHeader header={data[0].categories[1].name} color={data[0].categories.color_code} />
          <ItemCardHorizontal data={data[0]} size="lg" showIntro imageSide="right" />
        </div>
        {data.slice(1, 7).map((item: any) => (
          <ItemCardHorizontal key={item.id} data={item} showTitleBorder size="sm" />
        ))}
      </div>
    </div>
  );
}
