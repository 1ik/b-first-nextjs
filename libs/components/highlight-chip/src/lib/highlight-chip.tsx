/* eslint-disable-next-line */
export interface HighlightChipProps {
  items: any[];
  title?: string;
}

export function HighlightChip({ items, title }: HighlightChipProps) {
  return (
    <div className="flex items-start gap-2">
      {title && (
        <h3 className="font-montserrat px-6 py-2 bg-[#643FA1] text-white font-bold w-fit whitespace-nowrap">{title}</h3>
      )}
      <ul className="flex gap-2 flex-wrap">
        {items.map((item) => (
          <li className="bg-[#FAF6FF] text-black  rounded-md">
            <a className="px-3 py-1 inline-block" href="">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightChip;
