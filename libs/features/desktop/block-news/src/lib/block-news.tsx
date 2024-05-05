import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";
import { getImageUrl } from "@bfirst/utilities";

/* eslint-disable-next-line */
export interface BlockNewsProps {
  data: any;
  ads1?: string;
  ads2?: string;
  className?: string;
}

export function BlockNews({ data, ads1, ads2, className }: BlockNewsProps) {
  return (
    <div className={`grid grid-cols-5 gap-5 ${className}`}>
      <ItemCardVertical className="col-span-2" showImageBorder data={data?.[0]} size="lg" />

      <div className="flex flex-col justify-between">
        {data?.slice(1, 5).map((item: any, index:number) => (
          <div key={index}>
            <ItemCardHorizontal showTitleBorder data={item} size="sm" />
            {index+1 < 4 && <hr className="mt-4" />}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-3">
        <img className="flex-grow object-cover" src={getImageUrl(data?.[6].meta.featured_image)} alt="Story image" />
        <h3 className="text-[28px] leading-none">{data?.[6].title}</h3>
      </div>
      <div className="flex flex-col gap-y-2">
        <img src={ads1} alt="Ads" />
        <img src={ads2} alt="Ads" />
      </div>
    </div>
  );
}

export default BlockNews;
