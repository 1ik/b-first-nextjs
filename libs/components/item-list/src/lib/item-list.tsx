export interface ItemListProps {
  listType?: "number" | "circle" | "none";
  imageUrl?: string;
  alt?: string;
  data: any;
}

export function ItemList({ data, listType = "none", imageUrl, alt }: ItemListProps) {
  return (
    <ul>
      {imageUrl && <img className="w-full" src={imageUrl} alt={alt} />}

      {data.map((item: any, index: number) => (
        <li
          key={item.id}
          className={`text-[26px] text-black border-b border-[#D8D8D8] pb-6 mb-6 ${
            listType === "number" && "flex gap-x-5 items-center"
          }`}
        >
          {/* {listType === "number" && (
            <span className="text-[#D8D8D8] font-semibold font-montserrat text-[100px]">{index + 1}</span>
          )} */}
          <span className="text-red-500 text-8xl pr-5">.</span>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
