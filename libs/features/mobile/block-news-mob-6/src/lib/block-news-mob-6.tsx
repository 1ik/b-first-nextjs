import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface BlockNewsMob6Props {
  className?: string;
  data: any;
}

export function BlockNewsMob6({ className, data }: BlockNewsMob6Props) {
  return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${className}`}>
        <ItemCardVertical
          className="sm:border-r dark:border-dark-300 sm:pr-5 mb-5"
          showImageBorder
          data={data?.[0]}
          size="lg"
          showIntro
        />

        <div className="grid grid-cols-2 sm:grid-cols-1 sm:pl-5 gap-x-3 gap-y-5">
          {data?.slice(1, 4).map((item: any, index: number) => (
            <div key={index} className={`${index > 0 ? "col-span-1":"col-span-2"} sm:col-span-1`}>
              <div className="hidden sm:block">
                <ItemCardHorizontal data={item} size="md" />
              </div>
              <div className="sm:hidden">
                <ItemCardVertical data={item} size="md" />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default BlockNewsMob6;
