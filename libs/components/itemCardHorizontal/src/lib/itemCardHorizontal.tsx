import { AccentHeader } from "@bfirst/components-accent-header";
export interface ItemCardHorizontalProps {
  title: string;
  description?: string;
  flexDirection?: string;
  titleBorder: boolean;
  itemLeftWidth: string;
  itemRightWidth: string;
  itemsWidth: string;
}

export function ItemCardHorizontal({
  title,
  flexDirection,
  description,
  titleBorder,
  itemsWidth,
  itemLeftWidth,
  itemRightWidth,
}: ItemCardHorizontalProps) {
  return (
    <div className={`${itemsWidth}`}>
      <AccentHeader header="Bangladesh"/>
      <div className={`flex justify-between mt-5 ${flexDirection}`}>
        <div className={itemLeftWidth}>
          <h2
            className={`font-normal  text-black  ${
              titleBorder ? "font-normal  text-black border-t text-2xl border-red-500 pt-2" : "text-6xl"
            }`}
          >
            {title}
          </h2>
          <p className="font-normal mt-4 text-[28px] text-[#727272]">{description}</p>
        </div>
        <div className={itemRightWidth}>
          <img
            className="w-full h-full"
            src="https://images.bangladeshfirst.com/resize?width=1600&height=900&format=webp&quality=85&path=mediaImages/2024-Apr-30_66308f2115ef0_1714458401.jpg"
            alt="test alt"
          />
        </div>
      </div>
    </div>
  );
}
