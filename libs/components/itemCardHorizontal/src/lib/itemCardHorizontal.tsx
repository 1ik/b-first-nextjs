import { AccentHeader } from "@bfirst/components-accent-header";
export interface ItemCardHorizontalProps {
  data: any;
  flexDirection?: string;
  itemsWidth: string;
  itemLeftWidth: string;
  itemRightWidth: string;
  isTitleBorder: boolean;
  isIntro: boolean;
  isAccentHeader: boolean;
}

export function ItemCardHorizontal({
  data,
  flexDirection,
  isTitleBorder,
  itemsWidth,
  itemLeftWidth,
  itemRightWidth,
  isIntro,
  isAccentHeader,
}: ItemCardHorizontalProps) {
  return (
    <div className={`${itemsWidth}`}>
      {isAccentHeader && <AccentHeader header="Bangladesh" color="red" />}
      <div className={`flex justify-between mt-5 ${flexDirection}`}>
        <div className={itemLeftWidth}>
          <h2
            className={`font-normal  text-black  ${
              isTitleBorder ? "font-normal  text-black border-t text-2xl border-red-500 pt-2" : "text-6xl"
            }`}
          >
            {data.title}
          </h2>

          {isIntro && <p className="font-normal mt-4 text-[28px] text-[#727272]">{data.meta.intro}</p>}
        </div>

        <div className={itemRightWidth}>
          <img
            className="w-full"
            src={`https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=${data.meta.featured_image}`}
            alt={data.meta.featured_image.imageCaption}
          />
        </div>
      </div>
    </div>
  );
}
