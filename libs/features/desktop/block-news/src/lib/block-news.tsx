import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface BlockNewsProps {
  data: any;
  sectionHeader?: string;
  ads1?: string;
  ads2?: string;
  className?: string;
  Link?: any;
}

export function BlockNews({ data, sectionHeader, ads1, ads2, className, Link }: BlockNewsProps) {
  return (
    <div className={`flex gap-x-7 ${className}`}>
      <ItemCardVertical Link={Link} className="w-[48%]" showImageBorder data={data?.[0]} size="lg" />

      <div className="w-[52%] flex gap-x-4">
        <div className="w-[60%] flex flex-col justify-between">
          {data?.slice(1, 5).map((item: any, index: number) => (
            <div key={index}>
              <ItemCardHorizontal Link={Link} showTitleBorderSmall data={item} size="sm" />
              {index + 1 < 4 && <hr className="mt-4 dark:border-dark-300" />}
            </div>
          ))}
        </div>
        <div className="w-[40%] flex flex-col gap-y-3">
          <img src={ads1} alt="Ads" />
          <img src={ads2} alt="Ads" />
        </div>
      </div>
    </div>
  );
}

export default BlockNews;
