/* eslint-disable-next-line */
export interface HighlightChipProps {
  items: any[];
  title?: string;
  className?: string;
  Link?: any;
}

export function HighlightChip({ items, title, className, Link }: HighlightChipProps) {
  return (
    <div className={`flex items-start gap-2 ${className}`}>
      {title && (
        <h3 className="font-montserrat px-6 py-2 bg-[#643FA1] text-white font-bold w-fit whitespace-nowrap">{title}</h3>
      )}
      <ul className="flex gap-2 flex-wrap">
        {items?.map((item, index) => (
          <li key={index} className="bg-[#FAF6FF] dark:bg-dark-300 dark:text-white text-black  rounded-md">
            {Link ? (
              <Link className="px-3 py-1 inline-block" href="">
                {item.name}
              </Link>
            ) : (
              <a className="px-3 py-1 inline-block" href="">
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightChip;
