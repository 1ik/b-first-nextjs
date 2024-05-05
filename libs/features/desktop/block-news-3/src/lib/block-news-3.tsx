import { AccentHeader } from "@bfirst/components-accent-header";
import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

export interface BlockNews3Props {
  data: any;
  sectionHeader?: string;
  headerColor?: string;
  className?: string;
  adsUrl?: string;
}

export async function BlockNews3({ data, sectionHeader, headerColor, className, adsUrl }: BlockNews3Props) {
  return (
    <div className={`${className}`}>
      {sectionHeader && <AccentHeader className="mb-4" header={sectionHeader} color={headerColor} />}

      <div className="grid grid-cols-3 gap-5">
        <ItemCardHorizontal className="col-span-3" data={data?.[0]} showIntro />

        {data?.splice(1, 3).map((item: any) => {
          return <ItemCardVertical key={item.id} size="md" data={item} />;
        })}
      </div>
      <div className="flex justify-end mt-16">
        <img src={adsUrl} alt="Ads" />
      </div>
    </div>
  );
}
