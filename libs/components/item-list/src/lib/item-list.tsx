import { getImageUrl } from "@bfirst/utilities";
import moment from "moment";

export interface ItemListProps {
  data: any;
  listType?: "number" | "circle" | "none";
  showImage?: boolean;
  showDate?: boolean;
}

export function ItemList({ data, listType = "none", showImage = false, showDate = false }: ItemListProps) {
  return (
    <ul>
      {showImage && (
        <img className="w-full" src={getImageUrl(data[0].meta.featured_image)} alt={data[0].meta.image_caption} />
      )}
      {showDate && (
        <h3 className="bg-[#FDC269] text-black font-montserrat font-semibold text-2xl px-8 py-1.5 w-fit my-3">
          {moment().format("D MMMM")}
        </h3>
      )}
      {data.map((item: any, index: number) => (
        <li
          key={item.id}
          className={`text-2xl text-black border-b border-[#D8D8D8] pb-4 mb-4 ${
            listType === "number" && "flex gap-x-7 items-center"
          }`}
        >
          {listType === "number" && (
            <span className="text-[#D8D8D8] font-semibold font-montserrat text-[100px]">{index + 1}</span>
          )}
          {listType === "circle" && (
            <span className="text-[#D8D8D8] leading-[0px] font-semibold font-montserrat text-[100px] pr-4">.</span>
          )}

          {item.title}
        </li>
      ))}
    </ul>
  );
}
