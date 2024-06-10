import { ItemCardHorizontal } from "@bfirst/components-item-card-horizontal";
import { ItemCardVertical } from "@bfirst/components-item-card-vertical";

/* eslint-disable-next-line */
export interface BlockNews6Props {
  className?: string;
  data: any;
}

export function BlockNews6({ className, Link, data }: BlockNews6Props) {
  return (
    <div className={`grid grid-cols-2 ${className}`}>
      <ItemCardVertical
        className="pr-5 border-r-[0.5px] dark:border-dark-300"
        data={data?.[0]}
        size="lg"
        showIntro
        introFontSize="18px"
        titleBold
      />

      <div className="pl-5 border-l-[0.5px] dark:border-dark-300 flex flex-col justify-between">
        {data?.slice(1, 4).map((item: any, index: number) => (
          <>
            <ItemCardHorizontal data={item} size="md" showIntro />
            {index + 1 < 3 && <hr className="my-5 dark:border-dark-300" />}
          </>
        ))}
      </div>
    </div>
  );
}

export default BlockNews6;
