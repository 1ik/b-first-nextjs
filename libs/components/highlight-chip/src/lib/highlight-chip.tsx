import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

/* eslint-disable-next-line */
export interface HighlightChipProps {
  items: any[];
  title?: string;
  className?: string;
  Link?: any;
  enableDragScroll?: boolean;
}

export function HighlightChip({ items, title, className, Link, enableDragScroll = false }: HighlightChipProps) {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, { applyRubberBandEffect: true });
  return (
    <div
      ref={ref}
      {...events}
      className={`flex items-start gap-2 scrollbar-hide ${enableDragScroll ? "overflow-x-scroll" : ""} ${className}`}
    >
      {title && (
        <h3 className="font-montserrat px-3 py-1 sm:px-6 sm:py-2 bg-[#643FA1] text-white font-bold w-fit whitespace-nowrap">
          {title}
        </h3>
      )}
      <ul className={`flex gap-2 ${enableDragScroll ? "flex-nowrap" : "flex-wrap"} self-center`}>
        {items?.map((item: any, index: number) => (
          <li
            key={index}
            className="bg-[#FAF6FF] dark:bg-dark-300 dark:text-white text-black whitespace-nowrap rounded-md"
          >
            {Link ? (
              <Link className="px-3 py-1 inline-block" href={`/trending-topic/${item.id}`}>
                {item.name}
              </Link>
            ) : (
              <a className="px-3 py-1 inline-block" href={`/trending-topic/${item.id}`}>
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
